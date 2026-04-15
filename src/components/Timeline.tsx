import React, { useEffect, useRef, useState } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const timelineItems = [
  {
    date: "2017 - 2019",
    title: "Diesel Laptops",
    subtitle: "Technical Documentation",
    points: "Heavy truck diagnostic tooling. Wrote the procedural documentation that field mechanics depended on when a wrong step meant a day lost on a vehicle. First lesson: ambiguity in instructions has a direct operational cost.",
  },
  {
    date: "2019 - 2022",
    title: "Pitcher AG",
    subtitle: "Enterprise Sales Enablement",
    points: "Structured product and support documentation at enterprise scale for clients including IBM, Microsoft, P&G, GE, Nestlé, Pfizer, and ExxonMobil. Learned what self-serve reliability looks like when the reader has no patience for confusion.",
  },
  {
    date: "2022 - 2023",
    title: "IDENTOS",
    subtitle: "Developer Systems and API Documentation",
    points: "Integration-critical documentation for a digital identity platform. If the implementation guide was wrong, production broke. Shifted from writing for readers to writing for builders.",
  },
  {
    date: "2023 - 2024",
    title: "apexanalytix",
    subtitle: "QA and Automation Workflows",
    points: "Built testing and automation workflows for supplier risk and finance operations software. First sustained focus on making release processes repeatable rather than heroic.",
  },
  {
    date: "2023 - 2025",
    title: "Lumena Labs",
    subtitle: "Hardware Product and AI Systems",
    points: "Built across the full MindGym stack: the signal processing pipeline that ran live biosensor sessions, the Playwright test suite validating BLE hardware communication, the Ansible fleet across 38 hosts, and the launch automation for a physical immersive product used by the US Air Force and US Navy. This is where documentation turned into systems.",
  },
  {
    date: "2025 - 2026",
    title: "Super",
    subtitle: "AI Implementation at Scale",
    points: "Owned AI implementation for 40+ property management organizations end to end: integration build against AppFolio, Yardi, Property Meld, and Epic PM; BullMQ queue workers with retry logic and idempotency controls; LLM-assisted extraction pipelines; onboarding, go-live, post-launch tuning, and escalation as a single continuous responsibility.",
  },
];

function Timeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasEnteredView = useRef(false);
  const [timelineRenderKey, setTimelineRenderKey] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") {
      return;
    }

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
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="history" ref={sectionRef}>
      <div className="items-container">
        <p className="section-kicker">Career</p>
        <h1>Nine years building systems that run in production. Here is how they connect.</h1>
        <VerticalTimeline key={timelineRenderKey} animate>
          {timelineItems.map((item) => (
            <VerticalTimelineElement
              key={item.title}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--surface)", color: "var(--text-primary)" }}
              contentArrowStyle={{ borderRight: "7px solid var(--surface)" }}
              date={item.date}
              iconStyle={{ background: "var(--accent)", color: "#ffffff" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
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

export default Timeline;
