import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fafaf8] border-t border-[#e2e2de] px-6 sm:px-8">
      <div className="max-w-6xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-[#9a9a9a]">
          © {currentYear} Devaraj Devegowda
        </span>
        <span className="text-xs text-[#9a9a9a]">
          Building reliable cloud software · Dublin, IE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
