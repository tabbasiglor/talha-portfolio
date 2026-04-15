import React, { useEffect } from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tabbasiglor/30min?background_color=0d2337&text_color=f4f8fb&primary_color=1d9e75"
            style={{ width: "100%", minWidth: "320px", height: "750px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
