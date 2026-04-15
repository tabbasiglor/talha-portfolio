import React, { useMemo, useState } from "react";
import rawCapabilities from "../data/capabilities.json";
import rawCategoryLabels from "../data/categoryLabels.json";
import "../assets/styles/Capabilities.scss";
import { CapabilityItem } from "../types/portfolio";

const capabilities = rawCapabilities as CapabilityItem[];
const categoryLabels = rawCategoryLabels as Record<string, string>;

function getCategories() {
  const uniqueCategories: string[] = [];

  capabilities.forEach((item) => {
    if (uniqueCategories.indexOf(item.category) === -1) {
      uniqueCategories.push(item.category);
    }
  });

  return ["All"].concat(uniqueCategories);
}

function formatCategoryName(category: string) {
  if (category === "All") {
    return "All Outcomes";
  }

  return categoryLabels[category] || category;
}

function Capabilities() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(capabilities[0]?.id ?? "");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return capabilities.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      if (!categoryMatch) {
        return false;
      }

      if (!term) {
        return true;
      }

      const indexable = `${item.name} ${item.description} ${item.category} ${formatCategoryName(item.category)} ${item.triggers.join(" ")}`.toLowerCase();
      return indexable.includes(term);
    });
  }, [query, category]);

  const selected = useMemo(() => {
    const current = filtered.find((item) => item.id === selectedId);
    return current || filtered[0] || null;
  }, [filtered, selectedId]);

  return (
    <div className="capabilities-container" id="capabilities">
      <div className="items-container">
        <p className="section-kicker">Capabilities</p>
        <h1>What can be built for your organization.</h1>
        <p className="section-subtext">
          Each of these is a working automation. Filter by category, search by what you are trying
          to fix, and click any card to see what it does and what it produces.
        </p>

        <div className="controls">
          <label className="search-wrap" htmlFor="capability-search">
            <span>Search by situation or outcome</span>
            <input
              id="capability-search"
              type="search"
              placeholder="Try: lead qualification, rollout, QA, CRM, reporting"
              autoComplete="off"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <div className="filter-row" aria-label="Category filters">
            {getCategories().map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-btn ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {formatCategoryName(item)}
              </button>
            ))}
          </div>
        </div>

        <div className="atlas-layout">
          <div className="skill-grid" role="list">
            {!filtered.length && (
              <p className="detail-placeholder">No capability modules match this filter yet. Try a broader search term.</p>
            )}

            {filtered.map((item) => (
              <article
                key={item.id}
                className={`skill-card ${selected?.id === item.id ? "active" : ""}`}
                onClick={() => setSelectedId(item.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedId(item.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-pressed={selected?.id === item.id}
              >
                <div className="skill-top">
                  <div>
                    <h3 className="skill-title">{item.name}</h3>
                    <p className="skill-category">{formatCategoryName(item.category)}</p>
                  </div>
                </div>

                <p className="skill-desc">{item.description}</p>

                <div className="trigger-row">
                  {item.triggers.slice(0, 3).map((trigger) => (
                    <span key={trigger} className="trigger-chip">
                      {trigger}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="skill-detail" aria-live="polite">
            {!selected && (
              <p className="detail-placeholder">
                Select a capability to see what it does and what it produces.
              </p>
            )}

            {selected && (
              <div>
                <h3 className="detail-title">{selected.name}</h3>
                <p className="detail-meta">
                  {formatCategoryName(selected.category)}
                </p>
                <p className="detail-body">{selected.description}</p>

                <h4>What you get</h4>
                <ul className="detail-list">
                  {selected.deliverables.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
