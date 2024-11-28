import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="text-white">
        <Link href="/about">
          <p>lorem</p> {/* Linkning ichida matn yoki boshqa element bo'lishi kerak */}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
