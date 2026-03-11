import { useState } from "react";

const C = {
  bg: "#0B0D11", surface: "#12151B", card: "#181C24", cardHover: "#1E232D",
  border: "#252A35", borderHover: "#3A4150",
  accent: "#4F8CFF", accentDim: "#2A5CBD", accentGlow: "rgba(79,140,255,0.08)",
  green: "#34C759", orange: "#FF9F0A", red: "#FF453A", purple: "#BF5AF2",
  text: "#E5E7EB", textMid: "#9CA3AF", textDim: "#6B7280",
  cream: "#F9FAFB",
};

const phases = [
  { id: "start", icon: "◆", label: "Day 0: Start Here", color: C.accent, agent: null,
    desc: "Vision, mission, values, incorporation, bank account, trademark",
    checklist: [
      "Write your Vision statement (10-year aspirational goal)",
      "Write your Mission statement (3-year actionable plan)",
      "Define 3-4 company Values (specific behaviors, not generic words)",
      "Incorporate: Private Ltd (India ₹8-15K) or C-Corp Delaware (US $500-2K)",
      "Open business bank account",
      "Register domain (.com mandatory) + social handles",
      "File trademark application (India ₹4,500 / US $250-350)",
      "Register on Startup India / DPIIT (India — free, gives tax benefits)",
      "Create basic brand identity (logo, colors, fonts)",
    ],
    framework: "founders-playbook.md", cost: "₹15-50K one-time" },
  { id: "validate", icon: "◇", label: "Week 1-2: Validate", color: "#34C759", agent: "01",
    desc: "Talk to 30+ users, competitive research, market sizing",
    checklist: [
      "Interview 30+ potential users (strangers, not friends)",
      "Ask 'Tell me about the last time you experienced [problem]'",
      "Map 5+ competitors — USE their products yourself",
      "Read last 100 App Store reviews of each competitor",
      "Calculate TAM/SAM/SOM with real data sources",
      "Write your ONE-SENTENCE hypothesis",
      "Decision gate: GO (20+ passionate) / PIVOT (10-20) / KILL (<10)",
    ],
    framework: "consulting-frameworks.md", cost: "₹0-5K (your time)" },
  { id: "design", icon: "△", label: "Week 3-4: Design MVP", color: "#FF9F0A", agent: "02,03,04",
    desc: "Define core loop, cut features ruthlessly, design 3-5 screens",
    checklist: [
      "Define core value loop: [User action] → [System value] → [Outcome]",
      "Apply CUT TEST: Can user complete core loop WITHOUT this feature? YES = cut",
      "Final MVP: Maximum 3-5 screens",
      "Write PRD for MVP features ONLY (not full product)",
      "Design screens: Default + Loading + Empty + Error states each",
      "Get feedback on designs from 5 target users before building",
    ],
    framework: "mvp-framework.md + prd-framework.md", cost: "₹0-30K" },
  { id: "build", icon: "□", label: "Week 5-10: Build", color: "#BF5AF2", agent: "05,14",
    desc: "Build MVP, integrate payments, set up analytics, deploy",
    checklist: [
      "Choose tech stack (use what you know — speed > perfection)",
      "Set up CI/CD pipeline (GitHub Actions free tier)",
      "Build core flow end-to-end (signup → action → result)",
      "Integrate payments (Razorpay sandbox for India / Stripe for global)",
      "Add analytics (PostHog free or Mixpanel free tier)",
      "Add error tracking (Sentry free tier)",
      "Add basic security (HTTPS, auth, input validation, rate limiting)",
      "Test with 5-10 people internally before any external user sees it",
    ],
    framework: "stress-test-framework.md", cost: "₹0-5L" },
  { id: "launch", icon: "○", label: "Week 11-14: Launch", color: "#FF453A", agent: "07,09",
    desc: "Soft launch to 50-200 users, measure, iterate, fix top 3 issues",
    checklist: [
      "Soft launch to 50-200 hand-picked users",
      "Track: Signup → First value (activation rate, target >30%)",
      "Track: D1 and D7 retention — are they coming back?",
      "Talk to EVERY early user. Not surveys — conversations.",
      "Fix top 3 things preventing activation or retention",
      "Measure NPS: 'How likely to recommend?' (target >30)",
      "Publish: Privacy Policy, Terms of Service, Cookie Policy",
      "Set up support channel (email at minimum, chat if possible)",
    ],
    framework: "sop-process-maps.md", cost: "₹5-20K" },
  { id: "grow", icon: "◎", label: "Month 4-6: Grow", color: "#30D158", agent: "10,11,15",
    desc: "Marketing, unit economics, fundraising prep, hire first people",
    checklist: [
      "Calculate unit economics: CAC, LTV, LTV/CAC ratio (target >3x)",
      "Identify top 2 acquisition channels (test with ₹500-2K/day budget)",
      "Set up growth loops: referral program, content/SEO, community",
      "Build financial model: 3-year P&L with monthly detail for Year 1",
      "Hire first 1-2 people (engineer or support, depending on bottleneck)",
      "Set up ESOP pool (10-15%) before external investment",
      "If raising: Prepare pitch deck (10-12 slides)",
      "Start talking to investors 6 months before you NEED money",
    ],
    framework: "compensation-bands.md + founders-playbook.md", cost: "₹3-8L/month" },
  { id: "scale", icon: "◉", label: "Month 7-12: Scale", color: "#5E5CE6", agent: "16,17,18,24",
    desc: "Formalize operations, hire team, compliance, governance",
    checklist: [
      "Hire department heads (Engineering, Product, Marketing)",
      "Formalize HR: Offer letters, policies, POSH committee (India: mandatory >10 employees)",
      "Implement financial controls: Expense policy, approval workflows, monthly close",
      "Security baseline: SOC 2 preparation, pen testing, access controls",
      "Start board meetings (quarterly, formal agenda + minutes)",
      "Write SOPs for all critical processes",
      "Set up compliance: Code of conduct, data protection, anti-harassment",
      "Implement OKRs for goal alignment across growing team",
    ],
    framework: "corporate-scaling.md + sop-process-maps.md", cost: "₹20-50L/month" },
  { id: "dominate", icon: "★", label: "Year 2+: Dominate", color: "#FFD60A", agent: "20,28",
    desc: "Market leadership, international expansion, IPO preparation",
    checklist: [
      "Establish competitive moat (network effects, data, brand, switching costs)",
      "International expansion (if applicable): Start with 1 adjacent market",
      "Full governance: Independent board members, audit committee, compliance",
      "ESG framework: Carbon tracking, DEI metrics, sustainability reporting",
      "IPO preparation (if path chosen): 18-24 month timeline",
      "Build platform/ecosystem features (if applicable)",
      "Continuous improvement: PDCA, Kaizen, experiment velocity",
      "Never stop talking to users. The day you stop is the day decline begins.",
    ],
    framework: "competitive-war-room.md + continuous-improvement.md", cost: "₹60L-2Cr/month" },
];

const agentMap = {
  "00": "Chief Reviewer", "01": "Discovery", "02": "Strategy", "03": "PRD",
  "04": "Design", "05": "Engineering", "06": "Security", "07": "Launch",
  "08": "Proactive Advisor", "09": "Testing", "10": "Marketing",
  "11": "Analytics", "12": "Customer Success", "13": "Legal", "14": "DevOps",
  "15": "Finance", "16": "Operations", "17": "BAU", "18": "People & HR",
  "19": "PR & Comms", "20": "Governance & IPO", "21": "L&D",
  "22": "Innovation", "23": "Wellness", "24": "Compliance",
  "25": "Trust & Safety", "26": "Fraud", "27": "Data & AI",
  "28": "ESG", "29": "Govt Relations", "30": "Platform",
};

const quickLinks = [
  { label: "Write a PRD", agents: "03", framework: "prd-framework.md" },
  { label: "Financial Model", agents: "15", framework: "founders-playbook.md" },
  { label: "Security Audit", agents: "06,24", framework: "global-compliance.md" },
  { label: "Hiring Plan", agents: "18", framework: "compensation-bands.md" },
  { label: "Marketing Strategy", agents: "10,11", framework: "ab-testing-framework.md" },
  { label: "Compliance Check", agents: "24,13", framework: "global-compliance.md" },
  { label: "IPO Readiness", agents: "20,15", framework: "corporate-scaling.md" },
  { label: "Any Checklist", agents: "", framework: "universal-checklists.md" },
];

export default function ProductArchitectUI() {
  const [activePhase, setActivePhase] = useState(null);
  const [checked, setChecked] = useState({});
  const [view, setView] = useState("journey");

  const toggleCheck = (phaseId, idx) => {
    const key = `${phaseId}-${idx}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getProgress = (phase) => {
    const total = phase.checklist.length;
    const done = phase.checklist.filter((_, i) => checked[`${phase.id}-${i}`]).length;
    return { done, total, pct: Math.round((done / total) * 100) };
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
        .phase-card { transition: all 0.3s ease; cursor: pointer; }
        .phase-card:hover { transform: translateY(-2px); border-color: ${C.borderHover} !important; }
        .check-item { transition: all 0.2s ease; }
        .check-item:hover { background: ${C.accentGlow}; }
        .tab { cursor: pointer; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 500; transition: all 0.2s; }
        .tab:hover { background: ${C.surface}; }
        .tab-active { background: ${C.accent} !important; color: white !important; }
        .quick-link { cursor: pointer; padding: 10px 14px; border-radius: 10px; border: 1px solid ${C.border}; transition: all 0.2s; font-size: 13px; }
        .quick-link:hover { border-color: ${C.accent}; background: ${C.accentGlow}; }
      `}</style>

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.5 }}>
            <span style={{ color: C.accent }}>Product</span> Architect
          </div>
          <div style={{ fontSize: 12, color: C.textDim, marginTop: 2 }}>31 agents. 20 frameworks. Zero to legend.</div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          <div className={`tab ${view === "journey" ? "tab-active" : ""}`} style={{ color: C.textMid }} onClick={() => setView("journey")}>Journey</div>
          <div className={`tab ${view === "agents" ? "tab-active" : ""}`} style={{ color: C.textMid }} onClick={() => setView("agents")}>All 31 Agents</div>
          <div className={`tab ${view === "quick" ? "tab-active" : ""}`} style={{ color: C.textMid }} onClick={() => setView("quick")}>Quick Start</div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>

        {/* Journey View */}
        {view === "journey" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Your Product Journey</h2>
              <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.6 }}>
                Follow this path from Day 0 to market dominance. Check off items as you complete them.
                Each phase tells you which agents and frameworks to use.
              </p>
            </div>

            {/* Progress Overview */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}>
              {phases.slice(0, 4).map(p => {
                const prog = getProgress(p);
                return (
                  <div key={p.id} style={{ background: C.surface, borderRadius: 10, padding: "12px 14px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: 11, color: C.textDim, marginBottom: 4 }}>{p.label.split(": ")[0]}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 18, fontWeight: 700, color: prog.pct === 100 ? C.green : C.text }}>{prog.pct}%</span>
                      <span style={{ fontSize: 11, color: C.textDim }}>{prog.done}/{prog.total}</span>
                    </div>
                    <div style={{ height: 3, background: C.card, borderRadius: 2, marginTop: 6 }}>
                      <div style={{ height: "100%", width: `${prog.pct}%`, background: prog.pct === 100 ? C.green : p.color, borderRadius: 2, transition: "width 0.3s" }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Phase Cards */}
            {phases.map((phase, pi) => {
              const isOpen = activePhase === phase.id;
              const prog = getProgress(phase);
              return (
                <div key={phase.id} className="phase-card" style={{
                  background: isOpen ? C.card : C.surface, borderRadius: 14,
                  border: `1px solid ${isOpen ? phase.color + "40" : C.border}`,
                  marginBottom: 12, overflow: "hidden",
                }}>
                  <div onClick={() => setActivePhase(isOpen ? null : phase.id)}
                    style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                    {/* Phase number */}
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: phase.color + "15", border: `1px solid ${phase.color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, color: phase.color, fontWeight: 600, flexShrink: 0,
                    }}>{pi + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{phase.label}</div>
                      <div style={{ fontSize: 12, color: C.textMid, marginTop: 2 }}>{phase.desc}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: prog.pct === 100 ? C.green : C.textMid }}>
                        {prog.pct === 100 ? "Done" : `${prog.done}/${prog.total}`}
                      </div>
                      <div style={{ fontSize: 11, color: C.textDim }}>{phase.cost}</div>
                    </div>
                    <div style={{ fontSize: 18, color: C.textDim, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
                      ▾
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ padding: "0 20px 16px", borderTop: `1px solid ${C.border}`, paddingTop: 12 }}>
                      {/* Agents and Framework */}
                      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                        {phase.agent && phase.agent.split(",").map(a => (
                          <span key={a} style={{
                            padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500,
                            background: C.accent + "15", color: C.accent, border: `1px solid ${C.accent}25`,
                          }}>Agent {a.trim()}: {agentMap[a.trim()]}</span>
                        ))}
                        <span style={{
                          padding: "4px 10px", borderRadius: 6, fontSize: 11,
                          background: C.purple + "15", color: C.purple, border: `1px solid ${C.purple}25`,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}>{phase.framework}</span>
                      </div>

                      {/* Checklist */}
                      {phase.checklist.map((item, i) => {
                        const isChecked = checked[`${phase.id}-${i}`];
                        return (
                          <div key={i} className="check-item" onClick={() => toggleCheck(phase.id, i)}
                            style={{
                              display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 10px",
                              borderRadius: 8, cursor: "pointer",
                            }}>
                            <div style={{
                              width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                              border: `2px solid ${isChecked ? C.green : C.border}`,
                              background: isChecked ? C.green : "transparent",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              transition: "all 0.2s",
                            }}>
                              {isChecked && <span style={{ color: "white", fontSize: 11, fontWeight: 700 }}>✓</span>}
                            </div>
                            <span style={{
                              fontSize: 13, lineHeight: 1.5,
                              color: isChecked ? C.textDim : C.text,
                              textDecoration: isChecked ? "line-through" : "none",
                              transition: "all 0.2s",
                            }}>{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Agents View */}
        {view === "agents" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>All 31 Agents</h2>
            <p style={{ fontSize: 14, color: C.textMid, marginBottom: 20, lineHeight: 1.6 }}>
              Each agent is a specialized department head. Tell Claude which one you need,
              or say "build me a complete product" to activate them all in sequence.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {Object.entries(agentMap).map(([num, name]) => {
                const colors = ["#4F8CFF","#34C759","#FF9F0A","#BF5AF2","#FF453A","#5E5CE6","#30D158","#FFD60A","#FF6482","#64D2FF"];
                const color = colors[parseInt(num) % colors.length];
                return (
                  <div key={num} style={{
                    background: C.surface, borderRadius: 10, padding: "12px 14px",
                    border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10,
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: color + "15", border: `1px solid ${color}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 700, color, flexShrink: 0,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>{num}</div>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quick Start View */}
        {view === "quick" && (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Quick Start</h2>
            <p style={{ fontSize: 14, color: C.textMid, marginBottom: 20, lineHeight: 1.6 }}>
              Need something specific? Tell Claude one of these and the right agents load automatically.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {quickLinks.map((ql, i) => (
                <div key={i} className="quick-link">
                  <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>"{ql.label}"</div>
                  <div style={{ fontSize: 11, color: C.textDim }}>
                    {ql.agents && <span style={{ color: C.accent }}>Agents: {ql.agents} </span>}
                    <span style={{ color: C.purple, fontFamily: "'JetBrains Mono', monospace" }}>{ql.framework}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: C.surface, borderRadius: 14, border: `1px solid ${C.border}`, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10 }}>How to use with Claude</h3>
              <div style={{ fontSize: 13, color: C.textMid, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 8 }}><strong style={{ color: C.text }}>Option 1 — Full product:</strong> Upload the product-architect/ folder to Claude Skills. Say "I want to build [your idea]." The system activates automatically in phases.</p>
                <p style={{ marginBottom: 8 }}><strong style={{ color: C.text }}>Option 2 — Single topic:</strong> Say "Write a PRD for [feature]" or "Create a financial model for [product]." Only the relevant agent loads.</p>
                <p style={{ marginBottom: 8 }}><strong style={{ color: C.text }}>Option 3 — Reference:</strong> Browse the agents/ and frameworks/ folders directly. Every file is self-contained.</p>
                <p><strong style={{ color: C.text }}>Context persistence:</strong> The system outputs Key Decision Records (KDRs) after each phase. Save the MASTER KDR and paste it into any new conversation to resume exactly where you left off.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
