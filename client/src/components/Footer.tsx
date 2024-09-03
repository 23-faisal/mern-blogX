import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-10">
      <h1 className="text-center "> {currentYear} |All rights reserved</h1>
    </div>
  );
};

export default Footer;
