"use client";
import React from "react";

const Main = () => {
  // Yo'naltirish funksiyasi
  const handleRedirect = (url: string) => {
    window.location.href = url; // Foydalanuvchini yo'naltirish
  };

  return (
    <div className="container mx-auto p-4 text-orange-500 mt-[100px] ">
      <h1 className="text-center text-3xl font-bold mb-8 text-[36px]">
        My Awesome Portfolio
      </h1>
      <div className="flex flex-wrap justify-between items-start gap-6">
        <div
          className="flex-1 min-w-[280px] max-w-[400px] bg-blue-950 text-center  p-7 text-[18px] rounded-lg shadow-lg cursor-pointer hover:bg-slate-500 transition"
          onClick={() => handleRedirect("https://gippermart.vercel.app/")}
        >
          <h2 className="text-[26px] font-semibold mb-5">GIPERMART</h2>
          <p className="text-white">
            This WebSite is built with a robust management system. We developed
            reusable components that enhance product listings, sliders, and cart
            functionalities, ensuring a consistent look and feel throughout the
            application. To optimize performance and user experience, we
            incorporated React Query for efficient data fetching and caching
            from a mock backend using JSON Server.
          </p>
        </div>
        <div
          className="flex-1 min-w-[280px] max-w-[400px] bg-blue-950 text-center  p-7 text-[18px] rounded-lg shadow-lg cursor-pointer hover:bg-slate-500 transition"
          onClick={() =>
            handleRedirect("https://mobiluxbymuxsinjon.vercel.app/")
          }
        >
          <h2 className="text-[26px] font-semibold mb-5">MOBILUX</h2>
          <p className="text-white">
            This website is built with Next.js, leveraging its powerful
            server-side rendering and routing capabilities to ensure fast
            performance and enhanced SEO optimization. We utilized Redux Toolkit
            for efficient global state management, expertly handling cart
            operations and product data. By implementing Local Storage, we
            ensure that cart data persists across user sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
