import React, { useEffect, useRef, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SourceIcon from "@mui/icons-material/Source";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ConstructionIcon from "@mui/icons-material/Construction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../assets/styles/Main.scss";
import "../assets/styles/Expertise.scss";
import "../assets/styles/Timeline.scss";
import "../assets/styles/Contact.scss";
import "../assets/styles/Footer.scss";

// ─── NAV ────────────────────────────────────────────────────────────────────

const cvNavItems: [string, string][] = [
  ["Profile", "cv-top"],
  ["Approach", "cv-approach"],
  ["Career", "cv-history"],
  ["Skills", "cv-skills"],
  ["Contact", "cv-contact"],
];

function CVNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((p) => !p);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("cv-navigation");
      if (navbar) setScrolled(window.scrollY > navbar.clientHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <p className="mobile-menu-top">Menu</p>
      <Divider />
      <List>
        {cvNavItems.map(([label, id]) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => scrollTo(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none", width: "100%", textAlign: "center" }}>
              ← Portfolio
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" id="cv-navigation" className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}>
        <Toolbar className="navigation-bar">
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography className="brand-mark" variant="h6" component="div">
            Talha Faisal
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {cvNavItems.map(([label, id]) => (
                <Button key={label} className="nav-item" onClick={() => scrollTo(id)}>{label}</Button>
              ))}
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className="nav-item" sx={{ opacity: 0.65 }}>← Portfolio</Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 260 } }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function CVHero() {
  return (
    <div className="container" id="cv-top">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="avatar-badge" aria-hidden="true">TF</div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:talhafaisalglor@gmail.com" aria-label="Email Talha Faisal">
              <MailOutlineIcon />
            </a>
          </div>

          <p className="eyebrow">Curriculum Vitae</p>
          <h1>Talha Faisal</h1>
          <p className="headline">Nine years building at the boundary between technical systems and the people who operate them.</p>

          <p className="summary-copy">
            Started documenting fault codes for heavy truck mechanics. Moved into enterprise documentation for a platform deployed in 140 countries. Then developer documentation for a digital identity platform, QA automation for neuroscience hardware used by the US Air Force, and production AI pipelines for 40+ property management companies. The thread across all of it: build the thing, then make sure the right people can actually run it.
          </p>

          <div className="cta-row">
            <a className="cta-btn cta-primary" href="#cv-contact">Book a call</a>
            <a className="cta-btn cta-secondary" href="#cv-history">See the career</a>
          </div>

          <div className="risk-strip">
            <span><AutoAwesomeIcon /> Technical writing</span>
            <span><AutoAwesomeIcon /> QA automation</span>
            <span><AutoAwesomeIcon /> AI implementation</span>
            <span><AutoAwesomeIcon /> Client onboarding</span>
          </div>

          <div className="hero-stats">
            <article>
              <p className="value">9</p>
              <p className="label">Years in industry</p>
            </article>
            <article>
              <p className="value">40+</p>
              <p className="label">Clients onboarded</p>
            </article>
            <article>
              <p className="value">6</p>
              <p className="label">Companies, full-time</p>
            </article>
            <article>
              <p className="value">140+</p>
              <p className="label">Countries (Pitcher AG)</p>
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

// ─── APPROACH ────────────────────────────────────────────────────────────────

const approachCards = [
  {
    icon: <SourceIcon fontSize="large" />,
    title: "1. Learn the domain",
    body: "Every role started with getting deep enough into the subject matter to catch mistakes — fault codes, OAuth flows, biosensor pipelines, property management SOPs. Writing about something correctly means understanding it first.",
  },
  {
    icon: <AccountTreeIcon fontSize="large" />,
    title: "2. Find the gaps",
    body: "Documentation exposes what engineering skips. QA exposes what documentation assumes. Owning both at Lumena Labs meant finding gaps in the process before they became support tickets or production failures.",
  },
  {
    icon: <ConstructionIcon fontSize="large" />,
    title: "3. Build for operators",
    body: "A runbook that only the author can follow is not a runbook. A test suite that only passes on the original machine is not a test suite. Everything built here is structured for the person who has to use it at 2am without backup.",
  },
  {
    icon: <TaskAltIcon fontSize="large" />,
    title: "4. Stay until it works",
    body: "At Super, owned client onboarding through go-live and continued as the technical contact after launch. The work isn't done when the system ships. It's done when the team can run it without outside help.",
  },
];

function CVApproach() {
  return (
    <div className="container" id="cv-approach">
      <div className="skills-container">
        <p className="section-kicker">How I work</p>
        <h1>Four things that have stayed consistent across nine years and six companies.</h1>
        <div className="skills-grid method-grid">
          {approachCards.map((card) => (
            <div className="skill method-card" key={card.title}>
              {card.icon}
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────

const cvTimelineItems = [
  {
    date: "2017 - 2019",
    title: "Diesel Laptops",
    subtitle: "Technical Writer",
    points: "Documented fault codes for heavy-duty truck diagnostics across Cummins, Detroit Diesel, Caterpillar, Volvo, and Kenworth engine families. Built the troubleshooting procedures field mechanics used under time pressure, alone, with no backup. An incorrect step cost a day on a vehicle. First lesson: ambiguity in instructions has a direct operational cost.",
  },
  {
    date: "2019 - 2022",
    title: "Pitcher AG",
    subtitle: "Technical Writer (first hire)",
    points: "Joined as the company's first dedicated technical writer. Built the entire documentation infrastructure from nothing: Confluence backend, public-facing portal at helpdocs.pitcher.com, full information architecture. Wrote documentation serving clients including Nestlé, Pfizer, ExxonMobil, P&G, and Diageo across 140+ countries. Learned what self-serve reliability looks like when a documentation gap creates support demand across dozens of enterprise organizations at once.",
  },
  {
    date: "2022 - 2023",
    title: "IDENTOS",
    subtitle: "Technical Writer",
    points: "Developer documentation for a digital identity platform built on OAuth 2.0 and UMA 2.0. Authorization server setup, resource server onboarding, consent flows, API reference. Worked directly with engineers and the CTO to understand protocol-level behavior before writing guides developers could follow. If the integration guide was wrong, production broke. Shifted from writing for readers to writing for builders.",
  },
  {
    date: "2023 - 2024",
    title: "apexanalytix",
    subtitle: "Technical Writer",
    points: "Internal operations documentation for the world's leading supplier risk and overpayment recovery platform, protecting over $9 trillion in annual spend for 300+ Fortune 500 companies. The audience was procurement professionals at IBM, Microsoft, P&G, and GE — sophisticated, time-pressured, with no tolerance for vague instructions. Built documentation architecture to serve multiple user types from the same content without creating parallel tracks that diverge.",
  },
  {
    date: "2023 - 2025",
    title: "Lumena Labs",
    subtitle: "QA Lead & Technical Writer",
    points: "Built the complete TypeScript and Playwright test automation suite for Lumena Cloud and Lumena Edge from scratch across 19 spec files. Built custom n8n hardware-aware test orchestration for biosensor scenarios that couldn't be automated any other way. Integrated CI/CD with GitHub Actions, Slack alerts, and Jira escalation hooks. Reduced manual QA effort by 40%, surfaced 30+ critical issues before production. Managed Ansible infrastructure across 38 hosts. The product — MindGym — is used by the US Air Force, US Navy, and commercial aviation operators.",
  },
  {
    date: "2025 - Present",
    title: "Super",
    subtitle: "Automation & AI Implementation Specialist",
    points: "Designed and maintained the Cloud Functions Gen2 and Cloud Run integration layer connecting Super's AI workflows to AppFolio, Yardi, Property Meld, Epic PM, Vendoroo, and Buildium. Built NestJS service modules and BullMQ + Redis queue workers with retry-safe, idempotent behavior. Shipped Playwright + TypeScript UI automation for third-party systems with no API surface. Implemented Gemini and OpenAI extraction pipelines converting unstructured property data into structured payloads. Owned client onboarding for 40+ property management companies end to end: scoping, integration build, AI agent training, go-live, and post-launch escalation.",
  },
];

function CVTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasEnteredView = useRef(false);
  const [timelineRenderKey, setTimelineRenderKey] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEnteredView.current) {
          hasEnteredView.current = true;
          setTimelineRenderKey((prev) => prev + 1);
        }
        if (!entry.isIntersecting && hasEnteredView.current) {
          hasEnteredView.current = false;
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="cv-history" ref={sectionRef}>
      <div className="items-container">
        <p className="section-kicker">Career</p>
        <h1>Six roles. Each one built on what the last one exposed.</h1>
        <VerticalTimeline key={timelineRenderKey} animate>
          {cvTimelineItems.map((item) => (
            <VerticalTimelineElement
              key={item.title}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--surface)", color: "var(--text-primary)" }}
              contentArrowStyle={{ borderRight: "7px solid var(--surface)" }}
              date={item.date}
              iconStyle={{ background: "var(--accent)", color: "#ffffff" }}
              icon={<FontAwesomeIcon icon={faBriefcase as any} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.points}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    icon: <SourceIcon fontSize="large" />,
    title: "Engineering",
    body: "TypeScript, JavaScript, Node.js, NestJS. Playwright (E2E, UI, hardware-aware). Jest. BullMQ, Redis, Google Pub/Sub, event-driven architecture, idempotent queue workers. Google Cloud Functions Gen2, Cloud Run, AWS EC2, Ansible, Terraform.",
  },
  {
    icon: <ConstructionIcon fontSize="large" />,
    title: "Integrations & Platforms",
    body: "AppFolio, Yardi, Property Meld, Epic PM, Vendoroo, Buildium. Twilio, LiveKit, SendGrid. OAuth 2.0, UMA 2.0, OIDC, SAML, LDAP, FIDO. REST APIs. Gemini, OpenAI. n8n, Make.com, GitHub Actions.",
  },
  {
    icon: <AccountTreeIcon fontSize="large" />,
    title: "Documentation & Developer Content",
    body: "API docs, developer guides, user manuals, runbooks, release notes, white papers, training materials. Confluence, Docusaurus, GitBook, Eleventy, Jekyll, Gatsby, WordPress. Information architecture, multi-audience content systems.",
  },
  {
    icon: <TaskAltIcon fontSize="large" />,
    title: "Client & Operations",
    body: "End-to-end onboarding, SOP-to-workflow translation, post-launch escalation, knowledge base design, training materials for non-technical audiences. Jira, Linear, ClickUp, Asana, Notion, Salesforce, HubSpot, Slack, GitHub, GitLab.",
  },
];

function CVSkills() {
  return (
    <div className="container" id="cv-skills">
      <div className="skills-container">
        <p className="section-kicker">Skills</p>
        <h1>What comes with the hire.</h1>
        <div className="skills-grid method-grid">
          {skillGroups.map((card) => (
            <div className="skill method-card" key={card.title}>
              {card.icon}
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function CVContact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div id="cv-contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <p className="section-kicker">Contact</p>
          <h1>Start with a 30-minute call.</h1>
          <p>
            Walk through the role, the team, and what good actually looks like in the first 90 days.
            No prep needed. Just a conversation.
          </p>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tabbasiglor/30min?background_color=2d114d&text_color=f8f5ff&primary_color=ec4899"
            style={{ width: "100%", minWidth: "320px", height: "750px" }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function CVFooter() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="mailto:talhafaisalglor@gmail.com" aria-label="Email Talha Faisal">
          <MailOutlineIcon />
        </a>
      </div>
      <p>Talha Faisal • talhafaisalglor@gmail.com • Islamabad, Pakistan — Global / Remote</p>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function CVPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = "Talha Faisal | CV";
  }, []);

  return (
    <div className="main-container dark-mode">
      <CVNav />
      <CVHero />
      <CVApproach />
      <CVTimeline />
      <CVSkills />
      <CVContact />
      <CVFooter />
    </div>
  );
}

export default CVPage;
