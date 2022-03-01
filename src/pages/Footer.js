import React from "react";

const Footer = () => {
  const handleParentClick = () => {
    window.open("http://www.techieaid.in", "_blank");
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  return (
    <div className="footer">
      <div className="footer__col1">
        <p>Brainstormed & Crafted By NewAppLabs®</p>
        <p>Made With ❤️ in India</p>
        <br />
        <p className="footer__parent" onClick={handleParentClick}>
          © 2022 TechieAid Technologies Pvt Ltd
        </p>
      </div>
    </div>
  );
};

export default Footer;
