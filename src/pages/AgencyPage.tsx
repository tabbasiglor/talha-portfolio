import React, { useEffect, useMemo } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import rawCapabilities from "../data/capabilities.json";
import backgroundVideo from "../assets/images/bg-video.mp4";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import { CapabilityItem } from "../types/portfolio";
import "../assets/styles/AgencyPage.scss";

const capabilities = rawCapabilities as CapabilityItem[];

const toolStack = [
  "Claude Cowork",
  "Dispatch",
  "Claude Code",
  "Codex",
  "OpenAI",
  "ElevenLabs",
  "n8n",
  "Zapier",
  "HubSpot",
  "Google Workspace",
  "Slack",
  "MCP",
];

const solutionCards = [
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Inbound AI voice agents",
    body: "An AI receptionist that answers calls, handles common questions, captures lead details, books appointments, escalates edge cases, and writes clean summaries back to your CRM or inbox.",
    stack: "Voice platform, phone routing, calendar, CRM, human handoff",
  },
  {
    icon: <CampaignRoundedIcon />,
    title: "Outbound calling and follow-up agents",
    body: "Automated outreach for lead follow-up, missed-call recovery, appointment reminders, reactivation, status checks, and other repetitive call workflows that usually live in someone's task list.",
    stack: "Dialing workflow, compliance guardrails, CRM sync, reporting",
  },
  {
    icon: <HubRoundedIcon />,
    title: "Internal AI operators",
    body: "Claude Cowork and Dispatch workflows that prepare reports, chase files, coordinate recurring tasks, and keep operational admin moving in the background instead of sitting in someone's head.",
    stack: "Claude Cowork, Dispatch, files, browser workflows, approvals",
  },
  {
    icon: <AccountTreeRoundedIcon />,
    title: "Custom workflow automation",
    body: "Lead routing, inbox triage, CRM updates, transcript processing, knowledge workflows, and other custom systems built around the exact way your team already works.",
    stack: "Model layer, workflow layer, business logic, integrations, monitoring",
  },
];

const proofCards = [
  {
    label: "Production implementation",
    title: "40+ organizations onboarded into live AI workflows",
    body: "At Super, Talha owned AI implementation across 40+ property management organizations end to end: integrations, onboarding, go-live, post-launch tuning, and escalation.",
  },
  {
    label: "Operational rigor",
    title: "Built around retries, approvals, and failure handling",
    body: "The systems that hold up in production are the ones designed for imperfect data, edge cases, retries, and human review where it matters.",
  },
];

const architectureCards = [
  {
    title: "Interface layer",
    body: "Phone, SMS, chat, email, forms, calendars, and internal dashboards. This is where the business and the AI system actually meet.",
  },
  {
    title: "Decision layer",
    body: "Prompts, rules, routing logic, memory, and business context. This is where qualification, classification, summarization, and next-step decisions happen.",
  },
  {
    title: "Action layer",
    body: "CRM updates, booking actions, document generation, task creation, file handling, and human escalation. The output has to do something useful, not just sound smart.",
  },
  {
    title: "Control layer",
    body: "Permissions, approval checkpoints, logs, retries, and observability. This is what keeps the system safe once it touches real customers and real operations.",
  },
];

const faqItems = [
  {
    question: "Do you only work with one AI model or one vendor?",
    answer:
      "No. We use the best-fit stack for the workflow. Some jobs fit Claude better, some fit OpenAI better, and some should stay mostly deterministic with AI used only where it adds leverage.",
  },
  {
    question: "Can this be built around the tools we already use?",
    answer:
      "Usually yes. The strongest systems fit into the operating environment you already have: CRM, inbox, phone, calendar, documents, internal tools, and approval paths.",
  },
  {
    question: "What is a realistic first build?",
    answer:
      "Usually one high-friction workflow with clear business value: inbound calls, outbound follow-up, intake, CRM hygiene, reporting, document processing, or internal task routing.",
  },
  {
    question: "Can you help with voice agents too?",
    answer:
      "Yes. Voice agents are one of the clearest use cases for service businesses and operator-led teams. A good build handles routing, booking, escalation, summaries, and follow-up cleanly.",
  },
];

const featuredCapabilityIds = [
  "transcript-router",
  "meeting-insight-miner",
  "sales-call-analyzer",
  "lead-qualifier",
  "instantly-crm-orchestrator",
  "outreach-orchestrator",
];

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function AgencyPage() {
  const featuredCapabilities = useMemo(() => {
    return featuredCapabilityIds
      .map((id) => capabilities.find((item) => item.id === id))
      .filter(Boolean) as CapabilityItem[];
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Talha Abbasi | AI Implementation";

    const stylesheetId = "calendly-widget-css";
    const scriptId = "calendly-widget-js";

    if (!document.getElementById(stylesheetId)) {
      const link = document.createElement("link");
      link.id = stylesheetId;
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendlyPopup = () => {
    window.Calendly?.initPopupWidget({ url: "https://calendly.com/tabbasiglor/30min" });
  };

  return (
    <div className="agency-page">
      <video
        className="agency-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <header className="agency-nav">
        <div className="agency-nav-inner">
          <a className="agency-brand" href="#top">
            Talha Abbasi
          </a>

          <nav className="agency-nav-links" aria-label="Agency sections">
            <a href="#solutions">Solutions</a>
            <a href="#proof">Proof</a>
            <a href="#skills">Skills</a>
            <a href="#history">Timeline</a>
            <button className="agency-nav-cta agency-nav-button" type="button" onClick={openCalendlyPopup}>
              Book a call
            </button>
          </nav>
        </div>
      </header>

      <main id="top" className="agency-shell">
        <section className="agency-hero">
          <div className="agency-hero-copy">
            <p className="agency-eyebrow">Custom AI voice agents, workflow automation, and internal copilots</p>
            <h1>Custom AI systems for businesses that need work handled, not just assisted.</h1>
            <p className="agency-lead">
              We build AI voice agents, follow-up workflows, and internal AI operators that answer
              calls, qualify leads, route tasks, and keep daily operations moving across the tools
              your team already uses.
            </p>

            <div className="agency-title-grid" aria-label="Service categories">
              <article>
                <p className="value">Inbound</p>
                <p className="label">answer calls, qualify, book, escalate, summarize</p>
              </article>
              <article>
                <p className="value">Outbound</p>
                <p className="label">follow up leads, reminders, status calls, reactivation</p>
              </article>
              <article>
                <p className="value">Internal ops</p>
                <p className="label">reports, files, inboxes, task routing, recurring admin</p>
              </article>
              <article>
                <p className="value">Custom</p>
                <p className="label">workflow logic built around your exact process</p>
              </article>
            </div>

            <div className="agency-hero-actions">
              <button className="agency-btn agency-btn-primary" type="button" onClick={openCalendlyPopup}>
                Book a strategy call
              </button>
              <a className="agency-btn agency-btn-secondary" href="#solutions">
                See what we can build
              </a>
            </div>

            <div className="agency-proof-strip">
              <span>
                <AutoAwesomeIcon /> voice agents, internal copilots, workflow automation
              </span>
              <span>
                <QueryStatsRoundedIcon /> 40+ organizations supported in production AI
              </span>
              <span>
                <SecurityRoundedIcon /> approvals, retries, and operator control built in
              </span>
            </div>
          </div>

        </section>

        <section className="agency-tool-band" aria-label="Common AI and operations tools">
          {toolStack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="agency-section" id="solutions">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">Solutions</p>
            <h2>What we actually build</h2>
            <p>
              Not AI consulting in the abstract. Working systems tied to a business workflow with a
              clear job to do.
            </p>
          </div>

          <div className="agency-solution-grid">
            {solutionCards.map((item) => (
              <article key={item.title} className="agency-solution-card">
                <div className="agency-solution-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span>{item.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="agency-section agency-clarity">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">Clarity</p>
            <h2>We take one messy recurring process and turn it into a working AI system.</h2>
            <p>
              That process might be answering inbound calls, following up leads, managing daily
              task flow, summarizing meetings, updating the CRM, processing transcripts, routing
              messages, or coordinating day-to-day operational work through Claude Cowork and
              Dispatch.
            </p>
          </div>
        </section>

        <section className="agency-section agency-architecture">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">Architecture</p>
            <h2>How the system is usually structured</h2>
            <p>
              Good AI implementation is not one prompt floating in space. It is an interface layer,
              a reasoning layer, an action layer, and a control layer working together.
            </p>
          </div>

          <div className="agency-architecture-grid">
            {architectureCards.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="agency-section" id="proof">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">Proof</p>
            <h2>Why this is credible</h2>
            <p>
              The implementation background is real: production systems, onboarding responsibility,
              integration work, operational documentation, and post-launch ownership.
            </p>
          </div>

          <div className="agency-proof-grid">
            {proofCards.map((card) => (
              <article key={card.title} className="agency-proof-card">
                <p className="agency-card-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="agency-section" id="skills">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">Workflow modules</p>
            <h2>Examples of reusable AI skills already mapped</h2>
            <p>
              These are examples of repeatable modules that can be wired into a broader client
              system. They are structured behaviors with specific triggers and deliverables.
            </p>
          </div>

          <div className="agency-skills-grid">
            {featuredCapabilities.map((item) => (
              <article key={item.id} className="agency-skill-card">
                <p className="agency-card-label">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="agency-chip-row">
                  {item.deliverables.slice(0, 3).map((deliverable) => (
                    <span key={deliverable}>{deliverable}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="agency-section agency-process" id="process">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">Process</p>
            <h2>How the work moves</h2>
          </div>

          <div className="agency-process-grid">
            <article>
              <p className="agency-step">01</p>
              <h3>Find the first workflow</h3>
              <p>We identify the manual process that is costly, repetitive, and clear enough to turn into a safe first build.</p>
            </article>
            <article>
              <p className="agency-step">02</p>
              <h3>Design the operating logic</h3>
              <p>We map prompts, rules, approvals, integrations, fallback paths, and what should stay human.</p>
            </article>
            <article>
              <p className="agency-step">03</p>
              <h3>Build the system</h3>
              <p>Voice layer, workflow layer, model layer, tool access, testing, and operator handoff all get wired together.</p>
            </article>
            <article>
              <p className="agency-step">04</p>
              <h3>Launch and refine</h3>
              <p>We monitor the live behavior, tune the edge cases, and document the system so it remains usable after launch.</p>
            </article>
          </div>
        </section>

        <Timeline />

        <section className="agency-section" id="faq">
          <div className="agency-section-heading">
            <p className="agency-eyebrow">FAQ</p>
            <h2>Questions teams ask before they start</h2>
          </div>

          <div className="agency-faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="agency-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="agency-section agency-final-cta">
          <div>
            <p className="agency-eyebrow">Next step</p>
            <h2>Bring the workflow everyone on your team already knows is messy.</h2>
            <p>
              Calls, follow-up, lead routing, inbox handling, reporting, admin work, or an internal
              Claude Cowork process. That is usually where the right first system starts.
            </p>
          </div>

          <button className="agency-inline-cta agency-inline-button" type="button" onClick={openCalendlyPopup}>
            Book the audit call <ArrowOutwardIcon />
          </button>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default AgencyPage;
