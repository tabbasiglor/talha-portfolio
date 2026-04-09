import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="mailto:talhafaisalglor@gmail.com" aria-label="Email Talha Faisal">
          <MailOutlineIcon />
        </a>
      </div>
      <p>Talha Faisal • AI Adoption Implementation Systems</p>
    </footer>
  );
}

export default Footer;
