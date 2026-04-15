import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/CV.scss";

// ── QUICK TIMELINE ────────────────────────────────────────────────────────────

const quickItems = [
  { date: "2017 - 2019", title: "Diesel Laptops", role: "Technical Writer" },
  { date: "2019 - 2022", title: "Pitcher AG", role: "Technical Writer" },
  { date: "2022 - 2023", title: "IDENTOS", role: "Technical Writer" },
  { date: "2023 - 2024", title: "apexanalytix", role: "Technical Writer" },
  { date: "2023 - 2025", title: "Lumena Labs", role: "QA Lead & Technical Writer" },
  { date: "2025 - Present", title: "Super", role: "Automation & AI Implementation Specialist" },
];

function CVQuickTimeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entered = useRef(false);
  const [key, setKey] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !entered.current) {
          entered.current = true;
          setKey((k) => k + 1);
        }
        if (!entry.isIntersecting && entered.current) entered.current = false;
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cv-quick-timeline" ref={ref}>
      <VerticalTimeline key={key} animate layout="1-column-left">
        {quickItems.map((item) => (
          <VerticalTimelineElement
            key={item.title}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(78,28,124,0.34)", color: "#f8f5ff", padding: "0.6rem 1rem", boxShadow: "none", border: "1px solid rgba(236,72,153,0.28)" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(78,28,124,0.34)" }}
            date={item.date}
            iconStyle={{ background: "#ec4899", color: "#fff", width: "30px", height: "30px", marginLeft: "-15px" }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} style={{ fontSize: "0.7rem" }} />}
          >
            <h3 style={{ margin: 0, fontSize: "0.95rem", fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
            <h4 style={{ margin: "0.2rem 0 0", fontSize: "0.8rem", fontWeight: 500, color: "#f9a8d4" }}>{item.role}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

function CVPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Talha Abbasi | CV";
    document.body.style.background = "linear-gradient(160deg, #0d2337, #163a58)";
    document.documentElement.style.background = "linear-gradient(160deg, #0d2337, #163a58)";

    const handleBeforePrint = () => { document.title = ""; };
    const handleAfterPrint  = () => { document.title = "Talha Abbasi | CV"; };
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint",  handleAfterPrint);

    return () => {
      document.body.style.background = "";
      document.documentElement.style.background = "";
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint",  handleAfterPrint);
    };
  }, []);

  return (
    <div className="cv-page">

      {/* NAV */}
      <nav className="cv-nav">
        <div className="cv-nav-inner">
          <a className="cv-nav-brand" href="/">Talha Abbasi</a>
          <button className="cv-print-btn" onClick={() => window.print()}>Save PDF</button>
        </div>
      </nav>

      {/* PAGE */}
      <div className="cv-page-inner">

        {/* HEADER */}
        <header className="cv-header">
          <p className="cv-eyebrow">Curriculum Vitae</p>
          <h1>Talha Abbasi</h1>
          <p className="cv-tagline">Nine years at the boundary between technical systems and the people who operate them. Documentation, QA automation, and AI implementation across hardware, identity, enterprise software, and property management.</p>
          <div className="cv-contact-row">
            <a href="mailto:talhafaisalglor@gmail.com">talhafaisalglor@gmail.com</a>
            <span className="sep">·</span>
            <span>Islamabad, Pakistan</span>
            <span className="sep">·</span>
            <span>Global / Remote</span>
            <span className="sep">·</span>
            <a href="https://tabbasiglor.github.io/talha-portfolio/" target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </header>

        {/* STATS */}
        <div className="cv-stats-row">
          <div className="cv-stat-card"><div className="val">9</div><div className="lbl">Years in industry</div></div>
          <div className="cv-stat-card"><div className="val">300+</div><div className="lbl">Fortune 500 companies served</div></div>
          <div className="cv-stat-card"><div className="val">6</div><div className="lbl">Industries worked across</div></div>
          <div className="cv-stat-card"><div className="val">Client Success</div><div className="lbl">Onboarding, implementation, and post-launch ownership</div></div>
        </div>

        {/* PROFILE */}
        <section className="cv-section" id="profile">
          <div className="cv-section-label">Profile</div>
          <div className="cv-profile-text">
            <p>Started documenting heavy-duty truck fault codes for fleet mechanics. Moved into enterprise documentation for a global sales enablement platform deployed in 140 countries. Then developer documentation for a digital identity platform built on OAuth 2.0 and UMA 2.0. Then internal operations knowledge for one of the world's largest supplier risk management platforms.</p>
            <p>The pivot into QA came at Lumena Labs, where owning the technical documentation and building the Playwright test automation suite became the same job in practice: writing the process exposed the gaps, running the tests generated the runbooks. That led directly to a role at Super, building production AI automation pipelines for residential property management and personally owning client onboarding for 40+ companies.</p>
            <p>The consistent thread: work that sits at the boundary between technical systems and the people who use them. Build the thing. Then make sure the right people know how to operate it, at a level of depth that actually moves things forward. New tools, new platforms, and new problem domains have never been an obstacle. They are how every role here expanded into the next.</p>
          </div>
        </section>

        {/* QUICK TIMELINE */}
        <CVQuickTimeline />

        {/* EXPERIENCE */}
        <section className="cv-section" id="experience">
          <div className="cv-section-label">Experience</div>

          <div className="exp-entry">
            <div className="exp-top">
              <div className="exp-company">Super</div>
              <div className="exp-role">Automation &amp; AI Implementation Specialist</div>
              <div className="exp-meta">Sep 2025 – Present &nbsp;·&nbsp; Remote</div>
            </div>
            <p className="exp-context">AI communication and workflow automation platform for residential property management. Handles inbound and outbound voice, SMS, and email agents synced with AppFolio, Yardi, and other property management software.</p>
            <ul className="exp-points">
              <li><span className="point-label">Integration architecture.</span> Designed and maintained the Cloud Functions Gen2 and Cloud Run integration layer connecting Super's AI workflows to AppFolio, Yardi, Property Meld, Epic PM, Vendoroo, and Buildium. Nine event-triggered functions cover listing data scraping, record synchronization, and outbound push integrations. Built around Google Pub/Sub with typed CloudEvents carrying explicit lifecycle states (initiated, completed, failed), so every automated action leaves a traceable audit trail from trigger to outcome.</li>
              <li><span className="point-label">Service and queue architecture.</span> Built NestJS service modules and BullMQ + Redis-backed queue workers for background processing, retry behavior, queue scheduling, and sync job orchestration across integration pipelines. Worker behavior is retry-safe and idempotent by design: schema validation at ingestion, structured failure publishing, and explicit edge-state handling so partial failures don't silently corrupt downstream records.</li>
              <li><span className="point-label">Third-party UI automation.</span> Shipped Playwright and TypeScript automation flows for operations inside property management systems that expose no API surface, covering session handling, OTP and 2FA flows, dynamic field detection, multi-step form fill, conditional submission logic, and error-state recovery. Tested with Jest across both unit and integration layers.</li>
              <li><span className="point-label">AI extraction and mapping.</span> Implemented AI-assisted data mapping and extraction flows using Gemini and OpenAI, converting unstructured maintenance requests, voicemails, and conversation transcripts into structured payloads that downstream property management systems can ingest.</li>
              <li><span className="point-label">Voice and communication orchestration.</span> Worked on the API-side handoff logic governing call, SMS, and email routing: Twilio and LiveKit voice conference workflows, transfer-oriented orchestration, SendGrid thread-aware email notifications, parallel multi-channel action execution, and the eventing that connects call outcomes to downstream workflow state.</li>
              <li><span className="point-label">Operational knowledge systems.</span> Built and maintained the XML and Markdown-based knowledge bases that train Super's AI agents on client-specific behavior: escalation rules, emergency triage logic, transfer routing, and the operational nuances of how individual property management companies run their workflows.</li>
              <li><span className="point-label">Client onboarding.</span> Owned the full client lifecycle for 40+ property management companies: scoping, integration setup, AI agent training, go-live, and post-launch tuning based on real production feedback. Served as the ongoing technical point of contact for escalations after launch.</li>
            </ul>
          </div>

          <div className="exp-entry">
            <div className="exp-top">
              <div className="exp-company">Lumena Labs</div>
              <div className="exp-role">QA Lead &amp; Technical Writer</div>
              <div className="exp-meta">Aug 2023 – Sep 2025 &nbsp;·&nbsp; Remote</div>
            </div>
            <p className="exp-context">Neuroscience and mental performance company behind MindGym, a physical immersive training environment used by the U.S. Air Force, U.S. Navy, commercial aviation operators, and corporate wellness programs.</p>
            <ul className="exp-points">
              <li><span className="point-label">Playwright test frameworks.</span> Designed and built the complete TypeScript and Playwright automation suite for Lumena Cloud and Lumena Edge from scratch, across 19 active spec files covering role-based user journeys, session lifecycle flows, analytics-critical paths, error and recovery scenarios, and hardware-aware execution paths.</li>
              <li><span className="point-label">Hardware-aware test orchestration.</span> Built a custom n8n workflow that detects when a Playwright run reaches a hardware dependency, fires a Slack message asking someone to power on the biosensor, pauses test execution, and waits for a "done" reply before continuing. Turned previously untestable scenarios into automatable ones.</li>
              <li><span className="point-label">CI/CD integration and reporting.</span> Integrated the full test suite into GitHub Actions pipelines with automated execution on push, structured per-step logging, deterministic failure summaries, and escalation hooks via Slack alerts and Jira ticket creation. Reduced manual QA effort by roughly 40% and surfaced more than 30 critical issues earlier in the release cycle.</li>
              <li><span className="point-label">Analytics and data validation.</span> Built validation workflows that compare dashboard-level analytics values against exported report data to catch calculation discrepancies before they affect billing or performance reporting.</li>
              <li><span className="point-label">Ansible infrastructure management.</span> Contributed to Ansible-based operations across a fleet of 38 managed hosts: 29 production macOS edge nodes, 5 development machines, 1 UAT environment, and 3 EC2 instances. Work covered reusable role patterns for package management, SSH provisioning, user configuration, security hardening, and environment consistency.</li>
              <li><span className="point-label">Documentation and runbooks.</span> Authored developer documentation for Spruce Bot using Eleventy. Produced release plans, release notes, QA promotion checklists, and edge operational runbooks covering firmware updates, VPN configuration, network diagnostics, and stability troubleshooting for production hosts in the field.</li>
            </ul>
          </div>

          <div className="exp-entry">
            <div className="exp-top">
              <div className="exp-company">apexanalytix</div>
              <div className="exp-role">Technical Writer</div>
              <div className="exp-meta">Sep 2023 – Jun 2024 &nbsp;·&nbsp; Remote</div>
            </div>
            <p className="exp-context">World's leading supplier onboarding, risk management, and overpayment recovery platform, protecting over $9 trillion in annual spend for 300+ Fortune 500 and Global 2000 companies. Documentation audience: procurement professionals at IBM, Microsoft, Procter &amp; Gamble, and General Electric.</p>
            <ul className="exp-points">
              <li><span className="point-label">Internal operations documentation.</span> Created user guides, training materials, FAQs, and knowledge base articles for Supplier Relationship Managers, Procurement Managers, and Supply Chain Managers. The apexportal platform covers supplier onboarding, compliance monitoring, risk scoring, master data management, and payment controls.</li>
              <li><span className="point-label">Product fluency and validation.</span> Developed working knowledge of apexportal's full capability set and validated all documentation against real platform behavior with subject matter experts and product teams before publication.</li>
              <li><span className="point-label">Multi-audience content architecture.</span> Structured the knowledge base to serve multiple user types from the same content without redundancy, accommodating different entry points without creating parallel content tracks that diverge over time.</li>
            </ul>
          </div>

          <div className="exp-entry">
            <div className="exp-top">
              <div className="exp-company">IDENTOS</div>
              <div className="exp-role">Technical Writer</div>
              <div className="exp-meta">Aug 2022 – Aug 2023 &nbsp;·&nbsp; Toronto, ON (Remote)</div>
            </div>
            <p className="exp-context">Digital identity and access management company. Built the Federated Privacy Exchange (FPX) on OAuth 2.0, UMA 2.0, OIDC, SAML, LDAP, and FIDO. Deployments in healthcare, financial services, and government.</p>
            <ul className="exp-points">
              <li><span className="point-label">Developer documentation.</span> Created and maintained developer-facing documentation for the full FPX platform: authorization server setup, resource server onboarding, consent flow architecture, digital wallet integration, and API reference material. Worked directly with engineers and the CTO to understand protocol-level behavior before writing.</li>
              <li><span className="point-label">API reference and integration guides.</span> Wrote API documentation for FPX's Authorization Server, Wallet Server, and Resource Server Adapter, covering request and response structures, authentication flows, error states, and end-to-end integration sequences.</li>
              <li><span className="point-label">User-to-User Delegation guide.</span> Led documentation for User-to-User Delegation in FPX Vale, covering technical architecture, configuration steps, code samples, and real-world scenarios for both developer and end-user audiences, with custom illustrations developed alongside the design team.</li>
              <li><span className="point-label">Release cadence documentation.</span> Produced release notes aligned with each product release, including the FPX Junction release introducing W3C Verifiable Credentials support and enhanced UMA 2.0 compliance. Documentation shipped with or before each release.</li>
            </ul>
          </div>

          <div className="exp-entry">
            <div className="exp-top">
              <div className="exp-company">Pitcher AG</div>
              <div className="exp-role">Technical Writer</div>
              <div className="exp-meta">Jun 2019 – Aug 2022 &nbsp;·&nbsp; Remote</div>
            </div>
            <p className="exp-context">Enterprise sales enablement platform deployed in 140+ countries. Clients include Nestlé, Pfizer, ExxonMobil, Procter &amp; Gamble, and Diageo. Joined as the company's first dedicated technical writer.</p>
            <ul className="exp-points">
              <li><span className="point-label">Documentation infrastructure from scratch.</span> Worked directly with the CTO to design and implement a documentation system for Pitcher's global scale. Built the public-facing portal at helpdocs.pitcher.com as a branded interface pulling from Confluence, designed the full information architecture with no prior framework to build from.</li>
              <li><span className="point-label">Platform documentation across verticals.</span> Wrote and maintained documentation covering the entire Pitcher platform: configuration, CRM and ERP integrations, mobile app usage for field reps, administrator guides, content management workflows, multi-channel engagement, and compliance capabilities.</li>
              <li><span className="point-label">Scale and regulatory complexity.</span> Documentation served 140+ countries across heavily regulated industries. Life sciences and pharma clients have compliance requirements around what field reps can present; documentation had to reflect those constraints accurately without becoming unmanageable as the product line expanded.</li>
              <li><span className="point-label">Collaborative release process.</span> Worked with the CTO, product managers, and engineering to understand platform changes before they shipped. A documentation gap at this scale creates support demand across dozens of client organizations simultaneously.</li>
            </ul>
          </div>

          <div className="exp-entry">
            <div className="exp-top">
              <div className="exp-company">Diesel Laptops</div>
              <div className="exp-role">Technical Writer</div>
              <div className="exp-meta">Mar 2017 – Jun 2019 &nbsp;·&nbsp; Remote</div>
            </div>
            <p className="exp-context">Heavy-duty truck diagnostic hardware and software providing OEM-level fault code coverage for commercial fleets across North America. Covers Cummins, Detroit Diesel, Caterpillar, Volvo, Mack, International, Peterbilt, and Kenworth.</p>
            <ul className="exp-points">
              <li><span className="point-label">Fault code documentation.</span> Documented the fault code library across multiple OEM platforms and engine families. For each code: the system it relates to, conditions under which it sets and clears, probable causes ranked by likelihood, and step-by-step troubleshooting procedures usable in the field, alone, under time pressure.</li>
              <li><span className="point-label">End-user platform documentation.</span> Wrote user guides for the diagnostic hardware and software itself, covering RP1210-compliant adapter connections, platform navigation, forced DPF regenerations, bi-directional commands, live data streams, and interpreting diagnostic output across different OEM environments.</li>
              <li><span className="point-label">Multi-manufacturer complexity.</span> Each OEM has its own fault code conventions and diagnostic protocol implementation. Documentation had to reflect those differences accurately without becoming so manufacturer-specific that guides became unmanageable as the product line expanded.</li>
            </ul>
          </div>
        </section>

        {/* FREELANCE */}
        <section className="cv-section" id="freelance">
          <div className="cv-section-label">Freelance &amp; Contract Work</div>
          <p style={{ fontSize: "0.88rem", color: "var(--text-faint)", marginBottom: "1.6rem", maxWidth: "68ch" }}>Independent work carried on alongside full-time roles, across writing, content operations, and AI tooling.</p>

          <div className="freelance-entry">
            <div className="freelance-header">
              <span className="freelance-company">SpreadsheetPoint.com</span>
              <span className="freelance-role">Lead Content Writer</span>
              <span className="freelance-meta">2017 – 2022</span>
            </div>
            <p>Led a team of writers producing tutorials, how-to articles, and video walkthroughs on Google Sheets, Docs, Slides, and related Workspace tools. Went beyond writing: analyzed engagement metrics and user feedback to identify content gaps, shape the editorial calendar, and drive format changes that improved reader retention and return visits.</p>
          </div>

          <div className="freelance-entry">
            <div className="freelance-header">
              <span className="freelance-company">WithHoist</span>
              <span className="freelance-role">Technical Writer (Contract)</span>
              <span className="freelance-meta">2018 – 2020</span>
            </div>
            <p>Developed a 144-lesson training program taking someone with no industry background into a functioning residential painting business, covering business formation, job estimating, operations, staffing, marketing, and client acquisition. Worked with industry subject matter experts on operational accuracy, then sequenced the content so skills built progressively.</p>
          </div>

          <div className="freelance-entry">
            <div className="freelance-header">
              <span className="freelance-company">AutomationStop / DoSupply</span>
              <span className="freelance-role">Technical Writer (Contract)</span>
              <span className="freelance-meta">2018 – 2021</span>
            </div>
            <p>Built and maintained a product documentation library for industrial automation components: PLCs, variable frequency drives, motors, sensors, and HMIs. The audience was engineers and procurement specialists, so technical accuracy in specifications, compatibility notes, and installation context was essential.</p>
          </div>

          <div className="freelance-entry">
            <div className="freelance-header">
              <span className="freelance-company">Postman Academy</span>
              <span className="freelance-role">Content Developer (Contract)</span>
              <span className="freelance-meta">Dec 2022 – Feb 2023</span>
            </div>
            <p>Curriculum expansion contract concurrent with the IDENTOS role. Created new learning modules covering API testing workflows, collection structure and organization, environment management, and Postman automation patterns. Structured content around practical exercises rather than passive explanation.</p>
          </div>

          <div className="freelance-entry">
            <div className="freelance-header">
              <span className="freelance-company">Silicon Valley startups</span>
              <span className="freelance-role">Customer success, documentation, community</span>
              <span className="freelance-meta">Various periods</span>
            </div>
            <p>Worked with multiple early-stage companies including Bardeen, Notis, Redactable, Jotform, and Testimonial.to across customer success, user-facing documentation, and direct community and support interactions. Early-stage support is different from enterprise support: the product is changing, users are early adopters with high expectations, and support feedback directly shapes what gets built next.</p>
          </div>
        </section>

        {/* ADDITIONAL PROJECTS */}
        <section className="cv-section" id="projects">
          <div className="cv-section-label">Additional Projects</div>
          <div className="cv-projects-grid">
            <div className="cv-project-card">
              <h4>AI video analysis tool</h4>
              <p>Node.js application powered by the Gemini API. Accepts any video upload and produces a full content breakdown: frame-by-frame visual analysis, automated screenshot extraction of key moments, a complete narrative summary, and audio transcription. Built to extract the substance of long recordings without watching them in full.</p>
            </div>
            <div className="cv-project-card">
              <h4>Make.com workflow automation</h4>
              <p>Designed and built large-scale automation workflows connecting Notion, Slack, Google Drive, and other tools for client teams. A single button click in a Notion database triggers record updates, Slack notifications, Drive file creation, and status sync across all connected tools, replacing manual coordination steps.</p>
            </div>
            <div className="cv-project-card">
              <h4>Claude Cowork and AI skill systems</h4>
              <p>Built extensive custom skills and workflow configurations in Claude Cowork, OpenClaw, and Codex, designing skills, knowledge systems, and AI-assisted workflows for operational use cases across client organizations.</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="cv-section" id="skills">
          <div className="cv-section-label">Skills &amp; Technologies</div>
          <div className="cv-skills-grid">
            <div className="cv-skill-group"><h4>Languages &amp; Runtime</h4><p>TypeScript, JavaScript, Node.js, NestJS</p></div>
            <div className="cv-skill-group"><h4>Automation &amp; Testing</h4><p>Playwright (E2E, UI, browser, hardware-aware flows), Jest, n8n, Make.com, GitHub Actions</p></div>
            <div className="cv-skill-group"><h4>Queue &amp; Messaging</h4><p>BullMQ, Redis, Google Pub/Sub, CloudEvents, event-driven architecture, idempotent and retry-safe workflows</p></div>
            <div className="cv-skill-group"><h4>Cloud &amp; Infrastructure</h4><p>Google Cloud Functions Gen2, Cloud Run, AWS EC2, Ansible, Terraform, mixed macOS/Linux, SSH provisioning</p></div>
            <div className="cv-skill-group"><h4>Comms &amp; Voice Platforms</h4><p>Twilio, LiveKit, SendGrid, Buildium, multi-channel orchestration (voice/SMS/email)</p></div>
            <div className="cv-skill-group"><h4>PMS &amp; Real Estate Tooling</h4><p>AppFolio, Yardi, Property Meld, Epic PM, Vendoroo, listing scraping, push integrations, schema validation</p></div>
            <div className="cv-skill-group"><h4>Identity &amp; API Standards</h4><p>OAuth 2.0, UMA 2.0, OIDC, SAML, LDAP, FIDO, REST APIs, Postman</p></div>
            <div className="cv-skill-group"><h4>Docs &amp; Developer Portals</h4><p>Confluence, Docusaurus, GitBook, Eleventy, Jekyll, Gatsby, WordPress, Drupal, static site generators</p></div>
            <div className="cv-skill-group"><h4>Content &amp; Writing</h4><p>API docs, developer guides, user manuals, release notes, runbooks, white papers, case studies, UX/SEO writing, training materials</p></div>
            <div className="cv-skill-group"><h4>Project &amp; CRM Tools</h4><p>Jira, Linear, ClickUp, Asana, Notion, Salesforce, HubSpot, Zoho, Airtable, Slack, GitHub, GitLab</p></div>
            <div className="cv-skill-group"><h4>Client Success</h4><p>End-to-end onboarding, SOP-to-workflow translation, escalations, post-launch tuning, support, training, knowledge base design</p></div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="cv-section" id="education">
          <div className="cv-section-label">Education</div>
          <div className="cv-edu-entry">
            <span className="cv-edu-degree">BS Mass Communication</span>
            <span className="cv-edu-school">NUML &nbsp;·&nbsp; Islamabad, Pakistan</span>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="cv-footer">
        <p>Talha Abbasi &nbsp;&copy; 2026</p>
      </footer>

    </div>
  );
}

export default CVPage;
