// pages/index.tsx
"use client";
import Header from "@/components/header";
import Skills from "@/components/skills";
import About from "./pages/about/page";
import Main from "./pages/main/page";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Service from "./service/page";
import ContactForm from "@/components/ContactForm";
function MyApp({ Component, pageProps }: any) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode based on localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };
}
export default function Home() {
  return (
    <div className=" mx-auto w-[100vw] bg-no-repeat ">
      <div className="">
        <Header />
        <main className="bg-darkBlue min-h-screen w-screen ">
          {/* Other sections can be added here */}
          {/* <Home/> */}
          <About />
          <Skills />
          <Main />
          <Service/>
          <ContactForm />
          <Footer />
        </main>
      </div>
    </div>
  );
}
// }
// import Carousel from '../components/Carousel';

// export default function CarouselPage() {
//   const slides = [
//     { id: 1, content: 'Slide 1: Welcome to our carousel!' },
//     { id: 2, content: 'Slide 2: Another exciting slide.' },
//     { id: 3, content: 'Slide 3: Keep exploring our content!' },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-darkBlue text-white">
//       <h1 className="text-4xl font-bold mb-8">Our Carousel Page</h1>
//       <Carousel slides={slides} />
//     </div>
//   );
//
