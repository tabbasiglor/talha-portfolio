import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="mailto:tabbasiglor@gmail.com" aria-label="Email Talha Abbasi">
          <MailOutlineIcon />
        </a>
      </div>
      <p>Talha Abbasi • AI Adoption Implementation Systems</p>
    </footer>
  );
}

export default Footer;
