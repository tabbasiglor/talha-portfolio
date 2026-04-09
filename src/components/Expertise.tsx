import React from "react";
import SourceIcon from "@mui/icons-material/Source";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ConstructionIcon from "@mui/icons-material/Construction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import "../assets/styles/Expertise.scss";

const methodCards = [
  {
    icon: <SourceIcon fontSize="large" />,
    title: "1. Audit",
    body: "Read the brief. Then read past it. Map what was assumed, what is missing, and what will break in production before a single tool is touched. Most projects fail here because nobody asks.",
  },
  {
    icon: <AccountTreeIcon fontSize="large" />,
    title: "2. Workflow Redesign",
    body: "Find where handoffs go silent, where ownership is unclear, and where an exception kills the whole flow. Rebuild each step with explicit triggers, failure paths, and a named owner.",
  },
  {
    icon: <ConstructionIcon fontSize="large" />,
    title: "3. Build and Rollout",
    body: "Implement with traceability: event-driven integrations, retry logic, idempotency controls, and validation gates. Production reliability is built in, not bolted on after the first failure.",
  },
  {
    icon: <TaskAltIcon fontSize="large" />,
    title: "4. Post-Launch Ownership",
    body: "Ship runbooks, operator playbooks, and escalation paths alongside the system. Then stay available. Most clients continue on a monthly retainer. The goal is a team that can run it independently.",
  },
];

function Expertise() {
  return (
    <div className="container" id="method">
        <div className="skills-container">
          <p className="section-kicker">The Method</p>
        <h1>Four stages. One owner. No handoff at the hard part.</h1>

        <div className="skills-grid method-grid">
          {methodCards.map((card) => (
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

export default Expertise;
