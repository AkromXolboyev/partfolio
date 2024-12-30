// import React from "react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div>
//       <div className="text-white">
//         {/* <Link href="/about">
//           <p></p> {/* Linkning ichida matn yoki boshqa element bo'lishi kerak }
//         </Link> */}
//       </div>
//     </div>
//   )
// };

// export default Footer;

// "use client";

import React from "react";

const ContactSection = () => {
  // Copy to clipboard funksiyasi
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="bg-[#0d1117] text-white flex flex-col items-center py-10 px-4">
      {/* Get in touch button */}
      <button className="mb-4 px-6 py-2 bg-gray-600 hover:bg-gray-500 rounded-md">
        Get in touch
      </button>

      {/* Text */}
      <p className="text-center mb-6 text-gray-400">
        What's next? Feel free to reach out to me if you are looking for a
        developer, have a query, or simply want to connect.
      </p>

      {/* Contact details */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="flex items-center gap-2">
          <span>📧</span>
          <span className="font-semibold">akromxolboyev0615@gmail.com</span>
          <button
            onClick={() => copyToClipboard("akromxolboyev0615@gmail.com")}
            className="cursor-pointer hover:bg-orange-500"
          >
            📋
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span>📞</span>
          <span className="font-semibold">+998958850315</span>
          <button
            onClick={() => copyToClipboard("+998958850315")}
            className="cursor-pointer  hover:bg-orange-500"
          >
            📋
           
          </button>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex gap-4 mb-6">
        <a
          href="https://t.me/akrom855"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-orange-500"
        >
          Telegramm
        </a>
        <a
          href="https://www.linkedin.com/in/akrom-xolboyev-733717336/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-orange-500"
        >
          Linkedin
        </a>
        <div className="flex items-center gap-2">
          
          <span>📞</span>
       
          {/* <img className="text-white bg-slate-300 w-6 h-auto border-r-4" src="https://img.icons8.com/?size=80&id=42464&format=png" alt="img" /> */}
          <a
            href="tel:+998958850315"
            className="text-blue-400 hover:underline hover:text-orange-500 font-semibold text-2xl"
          >
            Number
          </a>
          <button
            onClick={() => copyToClipboard("+998958850315")}
            className="cursor-pointer"
          >
            
          </button>
         
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <p>&copy; 2024 | Designed and coded with ❤️ by Akrom_Kholboyev</p>
      </footer>
    </div>
  );
};

export default ContactSection;
