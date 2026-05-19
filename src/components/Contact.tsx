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
          <h1>Start with the workflow that is wasting the most time.</h1>
          <p>
            Bring the call flow, follow-up process, reporting task, CRM problem, or day-to-day
            admin workflow you want to fix. We map what should stay human, what can be automated,
            and what the safest first implementation looks like. If there is already an AI system
            stalling or broken, we can work through that too.
          </p>

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tabbasiglor/30min?background_color=0a1017&text_color=f7f8fb&primary_color=dce3eb"
            style={{ width: "100%", minWidth: "320px", height: "750px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
