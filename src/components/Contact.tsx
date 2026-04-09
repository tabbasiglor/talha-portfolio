import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <p className="section-kicker">Contact</p>
          <h1>Start with a 30-minute audit call.</h1>
          <p>
            Walk through your current AI initiative. What exists, what is stalling, what has already
            broken. The call produces an honest read on where things are and what it realistically
            takes to get to production. No pitch. Most clients who move forward do so within a week.
          </p>

          <div className="contact-actions">
            <a className="contact-btn" href="mailto:talhafaisalglor@gmail.com">
              <MailOutlineIcon /> Book an audit call
            </a>
            <a className="contact-btn contact-btn-secondary" href="#projects">
              Review the work first
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
