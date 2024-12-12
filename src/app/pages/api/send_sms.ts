import type { NextApiRequest, NextApiResponse } from "next";
import Twilio from "twilio";

const accountSid = "https://formspree.io/f/{form_id}"; // Twilio account SID
const authToken = "YOUR_AUTH_TOKEN"; // Twilio auth token
const twilioPhone = "+998958850315"; // Twilio phone number

// <form action="https://formspree.io/f/{form_id}" method="post">
//   <label for="email">Your Email</label>
//   <input name="Email" id="email" type="email">
//   <button type="submit">Submit</button>
// </form>

const client = Twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      await client.messages.create({
        body: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
        from: twilioPhone,
        to: phone, // Admin's phone number
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending SMS:", error);
      return res.status(500).json({ error: "Failed to send SMS." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
