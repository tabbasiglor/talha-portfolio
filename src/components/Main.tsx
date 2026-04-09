import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container" id="top">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="avatar-badge" aria-hidden="true">
            TF
          </div>
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="mailto:talhafaisalglor@gmail.com" aria-label="Email Talha Faisal">
              <MailOutlineIcon />
            </a>
          </div>

          <p className="eyebrow">AI Implementation</p>
          <h1>Talha Faisal</h1>
          <p className="headline">Most AI pilots don't survive contact with real operations.</p>

          <p className="summary-copy">
            Owned AI implementation end to end across 40+ organizations: workflow diagnosis,
            integration build, QA, rollout, and post-launch support. Not advisory. Not a handoff.
            The systems built here are still running.
          </p>

          <ul className="hero-points">
            <li>40+ organizations moved from AI pilot to production with direct technical ownership at every stage.</li>
            <li>8 case studies across property management AI, biosensor hardware, and infrastructure automation.</li>
            <li>Post-launch support stays active until the team can run the system without outside help.</li>
          </ul>

          <div className="cta-row">
            <a className="cta-btn cta-primary" href="#contact">
              Book an audit call
            </a>
            <a className="cta-btn cta-secondary" href="#projects">
              See the work
            </a>
          </div>

          <div className="risk-strip">
            <span>
              <AutoAwesomeIcon /> Human-in-the-loop gates
            </span>
            <span>
              <AutoAwesomeIcon /> Retry-safe automations
            </span>
            <span>
              <AutoAwesomeIcon /> Adoption runbooks included
            </span>
            <span>
              <AutoAwesomeIcon /> Post-launch escalation ownership
            </span>
          </div>

          <div className="hero-stats">
            <article>
              <p className="value">40+</p>
              <p className="label">Organizations onboarded</p>
            </article>
            <article>
              <p className="value">8</p>
              <p className="label">Production case studies</p>
            </article>
            <article>
              <p className="value">9</p>
              <p className="label">Years building operational systems</p>
            </article>
            <article>
              <p className="value">0</p>
              <p className="label">Systems shipped without runbooks</p>
            </article>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:talhafaisalglor@gmail.com" aria-label="Email Talha Faisal">
              <MailOutlineIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
