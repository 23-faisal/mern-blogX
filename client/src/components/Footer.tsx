import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <h1> {currentYear} |All rights reserved</h1>
    </div>
  );
};

export default Footer;
