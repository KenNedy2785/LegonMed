// ============================================================
// RenalPharmCourse.jsx — Renal Pharmacology Course Component
// LegonMed Platform · Course ID: renp
// Props: session, registered, onBack, onRegister, onGoHome
// ============================================================

import { useState, useEffect } from "react";
import {
  RENP_MODS,
  RENP_PRE_Q_M1,  RENP_POST_Q_M1,
  RENP_PRE_Q_M2,  RENP_POST_Q_M2,
  RENP_PRE_Q_M3,  RENP_POST_Q_M3,
  RENP_PRE_Q_M4,  RENP_POST_Q_M4,
  RENP_PRE_Q_M5,  RENP_POST_Q_M5,
  RENP_PRE_Q_M6,  RENP_POST_Q_M6,
  RENP_PRE_Q_M7,  RENP_POST_Q_M7,
  RENP_PRE_Q_M8,  RENP_POST_Q_M8,
  RENP_PRE_Q_M9,  RENP_POST_Q_M9,
  RENP_PRE_Q_M10, RENP_POST_Q_M10,
  RENP_PRE_Q_M11, RENP_POST_Q_M11,
  RENP_PRE_Q_M12, RENP_POST_Q_M12,
  RENP_PRE_Q_M13, RENP_POST_Q_M13,
  RENP_PRE_Q_M14, RENP_POST_Q_M14,
  RENP_PRE_Q_M15, RENP_POST_Q_M15,
  RENP_PRE_Q_M16, RENP_POST_Q_M16,
} from "../data/renp_data";

// ── Quiz bank map ─────────────────────────────────────────
const PRE_QUIZZES = [
  RENP_PRE_Q_M1,  RENP_PRE_Q_M2,  RENP_PRE_Q_M3,  RENP_PRE_Q_M4,
  RENP_PRE_Q_M5,  RENP_PRE_Q_M6,  RENP_PRE_Q_M7,  RENP_PRE_Q_M8,
  RENP_PRE_Q_M9,  RENP_PRE_Q_M10, RENP_PRE_Q_M11, RENP_PRE_Q_M12,
  RENP_PRE_Q_M13, RENP_PRE_Q_M14, RENP_PRE_Q_M15, RENP_PRE_Q_M16,
];
const POST_QUIZZES = [
  RENP_POST_Q_M1,  RENP_POST_Q_M2,  RENP_POST_Q_M3,  RENP_POST_Q_M4,
  RENP_POST_Q_M5,  RENP_POST_Q_M6,  RENP_POST_Q_M7,  RENP_POST_Q_M8,
  RENP_POST_Q_M9,  RENP_POST_Q_M10, RENP_POST_Q_M11, RENP_POST_Q_M12,
  RENP_POST_Q_M13, RENP_POST_Q_M14, RENP_POST_Q_M15, RENP_POST_Q_M16,
];

// ── Role colours ──────────────────────────────────────────
const ROLE_META = {
  doctor:     { label: "👨‍⚕️ Doctor",      bg: "#eff6ff", border: "#3b82f6", text: "#1d4ed8" },
  nurse:      { label: "🩺 Nurse",        bg: "#f0fdf4", border: "#22c55e", text: "#15803d" },
  pharmacist: { label: "💊 Pharmacist",   bg: "#faf5ff", border: "#a855f7", text: "#7e22ce" },
  labtech:    { label: "🔬 Lab Scientist", bg: "#fff7ed", border: "#f97316", text: "#c2410c" },
  student:    { label: "📚 Student",      bg: "#fefce8", border: "#eab308", text: "#92400e" },
};

// ── Progress storage key ──────────────────────────────────
const PROGRESS_KEY = "renp_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}
function saveProgress(p) {
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch {}
}

// ─────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────
export default function RenalPharmCourse({ session, registered, onBack, onRegister, onGoHome }) {
  const [view, setView]           = useState("dashboard");   // dashboard | module | quiz
  const [activeIdx, setActiveIdx] = useState(null);           // 0-based module index
  const [quizMode, setQuizMode]   = useState("pre");          // pre | post
  const [quizStep, setQuizStep]   = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizDone, setQuizDone]   = useState(false);
  const [progress, setProgress]   = useState(loadProgress);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [filterRole, setFilterRole] = useState("all");
  const [expandKP, setExpandKP]   = useState(false);

  const role = session?.role || "student";

  // Persist progress
  useEffect(() => { saveProgress(progress); }, [progress]);

  // ── Helpers ─────────────────────────────────────────────
  const totalMods   = RENP_MODS.length;
  const completedMods = Object.keys(progress).filter(k => progress[k]?.postDone).length;
  const pct = Math.round((completedMods / totalMods) * 100);

  function startModule(idx) {
    if (!registered && !RENP_MODS[idx].free) return;
    setActiveIdx(idx);
    setSectionIdx(0);
    setExpandKP(false);
    setView("module");
  }

  function startQuiz(idx, mode) {
    setActiveIdx(idx);
    setQuizMode(mode);
    setQuizStep(0);
    setQuizAnswers({});
    setQuizDone(false);
    setView("quiz");
  }

  function handleAnswer(qi, ai) {
    if (quizAnswers[qi] !== undefined) return;
    setQuizAnswers(prev => ({ ...prev, [qi]: ai }));
  }

  function finishQuiz() {
    const qs = quizMode === "pre" ? PRE_QUIZZES[activeIdx] : POST_QUIZZES[activeIdx];
    const score = qs.filter((q, i) => quizAnswers[i] === q.ans).length;
    const key = RENP_MODS[activeIdx].id;
    setProgress(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [quizMode === "pre" ? "preScore" : "postScore"]: score,
        [quizMode === "pre" ? "preDone" : "postDone"]: true,
      }
    }));
    setQuizDone(true);
  }

  // ──────────────────────────────────────────────────────
  // QUIZ VIEW
  // ──────────────────────────────────────────────────────
  if (view === "quiz") {
    const mod = RENP_MODS[activeIdx];
    const qs  = quizMode === "pre" ? PRE_QUIZZES[activeIdx] : POST_QUIZZES[activeIdx];
    const q   = qs[quizStep];
    const answered = quizAnswers[quizStep] !== undefined;
    const chosen   = quizAnswers[quizStep];
    const score    = qs.filter((q, i) => quizAnswers[i] === q.ans).length;

    return (
      <div style={{ minHeight:"100vh", background:"#0a0f1e", color:"#e2e8f0", fontFamily:"'Inter',sans-serif" }}>
        {/* Header */}
        <div style={{ background:"linear-gradient(135deg,#0d1b35,#162040)", borderBottom:"1px solid #1e3a5f", padding:"14px 24px", display:"flex", alignItems:"center", gap:12 }}>
          <button onClick={() => setView("module")} style={{ background:"none", border:"none", color:"#94a3b8", cursor:"pointer", fontSize:20 }}>←</button>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, color:"#64748b", textTransform:"uppercase", letterSpacing:1 }}>
              Module {mod.num} · {quizMode === "pre" ? "Pre-Assessment" : "Post-Assessment"}
            </div>
            <div style={{ fontSize:14, color:"#e2e8f0", fontWeight:600 }}>{mod.title}</div>
          </div>
          <div style={{ fontSize:13, color:"#38bdf8", fontWeight:700 }}>{quizStep + 1} / {qs.length}</div>
        </div>

        {/* Progress bar */}
        <div style={{ height:3, background:"#1e3a5f" }}>
          <div style={{ height:"100%", background:`linear-gradient(90deg,${mod.color},#38bdf8)`, width:`${((quizStep + 1) / qs.length) * 100}%`, transition:"width 0.4s" }} />
        </div>

        {quizDone ? (
          /* ── Results ── */
          <div style={{ maxWidth:640, margin:"60px auto", padding:"0 20px", textAlign:"center" }}>
            <div style={{ fontSize:64, marginBottom:16 }}>{score >= 4 ? "🏆" : score >= 3 ? "✅" : "📖"}</div>
            <div style={{ fontSize:28, fontWeight:800, color:"#38bdf8", marginBottom:8 }}>
              {score} / {qs.length} Correct
            </div>
            <div style={{ fontSize:14, color:"#94a3b8", marginBottom:36 }}>
              {score === qs.length ? "Perfect score!" : score >= 4 ? "Excellent — strong grasp of the material." : score >= 3 ? "Good — review the rationales below." : "Keep studying — revisit the module content."}
            </div>
            {/* Rationale review */}
            <div style={{ textAlign:"left", display:"flex", flexDirection:"column", gap:16, marginBottom:40 }}>
              {qs.map((q, i) => (
                <div key={i} style={{ background:"#0d1b35", border:`1px solid ${quizAnswers[i] === q.ans ? "#22c55e" : "#ef4444"}`, borderRadius:12, padding:16 }}>
                  <div style={{ fontSize:13, color:"#94a3b8", marginBottom:6 }}>Q{i+1}</div>
                  <div style={{ fontSize:14, color:"#e2e8f0", marginBottom:10, fontWeight:600 }}>{q.q}</div>
                  <div style={{ fontSize:13, color: quizAnswers[i] === q.ans ? "#4ade80" : "#f87171", marginBottom:8 }}>
                    Your answer: {q.opts[quizAnswers[i]]}
                  </div>
                  {quizAnswers[i] !== q.ans && (
                    <div style={{ fontSize:13, color:"#4ade80", marginBottom:8 }}>Correct: {q.opts[q.ans]}</div>
                  )}
                  {q.rationale && (
                    <div style={{ fontSize:12, color:"#94a3b8", background:"#162040", borderRadius:8, padding:"10px 12px", lineHeight:1.6 }}>
                      💡 {q.rationale[quizAnswers[i]]}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
              <button onClick={() => setView("module")} style={{ background:"#1e3a5f", color:"#e2e8f0", border:"none", borderRadius:10, padding:"12px 24px", cursor:"pointer", fontSize:14, fontWeight:600 }}>
                ← Back to Module
              </button>
              {activeIdx < totalMods - 1 && (
                <button onClick={() => startModule(activeIdx + 1)} style={{ background:`linear-gradient(135deg,${mod.color},#38bdf8)`, color:"#fff", border:"none", borderRadius:10, padding:"12px 24px", cursor:"pointer", fontSize:14, fontWeight:700 }}>
                  Next Module →
                </button>
              )}
            </div>
          </div>
        ) : (
          /* ── Question ── */
          <div style={{ maxWidth:640, margin:"40px auto", padding:"0 20px" }}>
            <div style={{ background:"#0d1b35", border:"1px solid #1e3a5f", borderRadius:16, padding:28, marginBottom:20 }}>
              <div style={{ fontSize:11, color:mod.color, textTransform:"uppercase", letterSpacing:1, marginBottom:12 }}>Question {quizStep + 1}</div>
              <div style={{ fontSize:16, color:"#e2e8f0", lineHeight:1.7, fontWeight:600 }}>{q.q}</div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
              {q.opts.map((opt, ai) => {
                const isChosen  = chosen === ai;
                const isCorrect = q.ans === ai;
                let bg = "#0d1b35", border = "#1e3a5f", color = "#e2e8f0";
                if (answered) {
                  if (isCorrect)       { bg="#052e16"; border="#22c55e"; color="#4ade80"; }
                  else if (isChosen)   { bg="#450a0a"; border="#ef4444"; color="#f87171"; }
                }
                return (
                  <button key={ai} onClick={() => handleAnswer(quizStep, ai)} disabled={answered}
                    style={{ background:bg, border:`2px solid ${border}`, color, borderRadius:12, padding:"14px 18px", textAlign:"left", fontSize:14, cursor: answered ? "default" : "pointer", lineHeight:1.5, transition:"all 0.2s" }}>
                    <span style={{ fontWeight:700, marginRight:8 }}>{String.fromCharCode(65+ai)}.</span>{opt}
                  </button>
                );
              })}
            </div>
            {answered && q.rationale && (
              <div style={{ background:"#0a1628", border:"1px solid #1e3a5f", borderRadius:12, padding:16, marginBottom:24, fontSize:13, color:"#94a3b8", lineHeight:1.7 }}>
                💡 <strong style={{ color:"#38bdf8" }}>Rationale:</strong> {q.rationale[chosen]}
              </div>
            )}
            {answered && (
              quizStep < qs.length - 1
                ? <button onClick={() => setQuizStep(s => s + 1)} style={{ background:`linear-gradient(135deg,${mod.color},#38bdf8)`, color:"#fff", border:"none", borderRadius:10, padding:"12px 28px", fontSize:14, fontWeight:700, cursor:"pointer", width:"100%" }}>
                    Next Question →
                  </button>
                : <button onClick={finishQuiz} style={{ background:"linear-gradient(135deg,#15803d,#22c55e)", color:"#fff", border:"none", borderRadius:10, padding:"12px 28px", fontSize:14, fontWeight:700, cursor:"pointer", width:"100%" }}>
                    See Results 🏆
                  </button>
            )}
          </div>
        )}
      </div>
    );
  }

  // ──────────────────────────────────────────────────────
  // MODULE VIEW
  // ──────────────────────────────────────────────────────
  if (view === "module") {
    const mod = RENP_MODS[activeIdx];
    const sec = mod.sections[sectionIdx];
    const prog = progress[mod.id] || {};
    const filteredCallouts = filterRole === "all"
      ? sec.callouts
      : sec.callouts.filter(c => c.role === filterRole);

    return (
      <div style={{ minHeight:"100vh", background:"#0a0f1e", color:"#e2e8f0", fontFamily:"'Inter',sans-serif" }}>
        {/* Top bar */}
        <div style={{ background:"linear-gradient(135deg,#0d1b35,#162040)", borderBottom:"1px solid #1e3a5f", padding:"14px 24px", display:"flex", alignItems:"center", gap:12, position:"sticky", top:0, zIndex:100 }}>
          <button onClick={() => setView("dashboard")} style={{ background:"none", border:"none", color:"#94a3b8", cursor:"pointer", fontSize:20 }}>←</button>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, color:"#64748b", textTransform:"uppercase", letterSpacing:1 }}>Module {mod.num} of 16 · {mod.dur}</div>
            <div style={{ fontSize:15, color:"#e2e8f0", fontWeight:700 }}>{mod.title}</div>
          </div>
          <div style={{ fontSize:20 }}>{mod.icon}</div>
        </div>

        {/* Section tabs */}
        <div style={{ background:"#0d1b35", borderBottom:"1px solid #1e3a5f", display:"flex", overflowX:"auto" }}>
          {mod.sections.map((s, i) => (
            <button key={i} onClick={() => { setSectionIdx(i); setExpandKP(false); }}
              style={{ padding:"12px 20px", whiteSpace:"nowrap", background:"none", border:"none", borderBottom: sectionIdx===i ? `3px solid ${mod.color}` : "3px solid transparent", color: sectionIdx===i ? "#e2e8f0" : "#64748b", cursor:"pointer", fontSize:13, fontWeight: sectionIdx===i ? 700 : 400, transition:"all 0.2s" }}>
              {s.h.replace(/^[^\s]+ /, "")}
            </button>
          ))}
        </div>

        <div style={{ maxWidth:840, margin:"0 auto", padding:"28px 20px 80px" }}>
          {/* Story block (first section only) */}
          {sectionIdx === 0 && (
            <div style={{ background:"linear-gradient(135deg,#0d1b35,#0f2035)", border:`1px solid ${mod.color}40`, borderLeft:`4px solid ${mod.color}`, borderRadius:12, padding:20, marginBottom:28 }}>
              <div style={{ fontSize:11, color:mod.color, textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>📍 Clinical Setting</div>
              <pre style={{ fontFamily:"inherit", fontSize:13, color:"#94a3b8", whiteSpace:"pre-wrap", lineHeight:1.8, margin:0 }}>{mod.story}</pre>
            </div>
          )}

          {/* Tagline */}
          <div style={{ fontSize:13, color:"#64748b", fontStyle:"italic", marginBottom:20, lineHeight:1.6, borderLeft:"3px solid #1e3a5f", paddingLeft:14 }}>
            {mod.tagline}
          </div>

          {/* Section header */}
          <div style={{ marginBottom:18 }}>
            <h2 style={{ fontSize:20, fontWeight:800, color:"#e2e8f0", margin:"0 0 8px" }}>{sec.h}</h2>
            <p style={{ fontSize:14, color:"#94a3b8", lineHeight:1.7, margin:0 }}>{sec.a}</p>
          </div>

          {/* Content block */}
          <div style={{ background:"#0d1b35", border:"1px solid #1e3a5f", borderRadius:14, padding:22, marginBottom:22 }}>
            <pre style={{ fontFamily:"inherit", fontSize:13, color:"#cbd5e1", whiteSpace:"pre-wrap", lineHeight:1.85, margin:0 }}>{sec.c}</pre>
          </div>

          {/* Key Points */}
          <div style={{ background:"linear-gradient(135deg,#0d2435,#0a1f30)", border:`1px solid ${mod.color}50`, borderRadius:14, padding:20, marginBottom:22 }}>
            <button onClick={() => setExpandKP(x => !x)} style={{ background:"none", border:"none", color:"#e2e8f0", cursor:"pointer", fontSize:14, fontWeight:700, display:"flex", alignItems:"center", gap:8, width:"100%", textAlign:"left" }}>
              <span style={{ color:mod.color }}>⭐</span> Key Points ({sec.kp.length})
              <span style={{ marginLeft:"auto", color:"#64748b" }}>{expandKP ? "▲" : "▼"}</span>
            </button>
            {expandKP && (
              <ul style={{ margin:"14px 0 0", paddingLeft:20, display:"flex", flexDirection:"column", gap:10 }}>
                {sec.kp.map((kp, i) => (
                  <li key={i} style={{ fontSize:13, color:"#94a3b8", lineHeight:1.65 }}>
                    <span style={{ color:mod.color, fontWeight:700 }}>•</span> {kp}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Role Callouts */}
          <div style={{ marginBottom:28 }}>
            <div style={{ fontSize:13, color:"#64748b", marginBottom:12, fontWeight:600 }}>PROFESSIONAL CALLOUTS</div>
            {/* Role filter */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:14 }}>
              {["all", ...Object.keys(ROLE_META)].map(r => (
                <button key={r} onClick={() => setFilterRole(r)}
                  style={{ padding:"5px 12px", borderRadius:20, border:"1px solid", fontSize:12, cursor:"pointer", fontWeight: filterRole===r ? 700 : 400,
                    background: filterRole===r ? (r==="all" ? "#1e3a5f" : ROLE_META[r]?.bg) : "transparent",
                    borderColor: filterRole===r ? (r==="all" ? "#38bdf8" : ROLE_META[r]?.border) : "#1e3a5f",
                    color: filterRole===r ? (r==="all" ? "#38bdf8" : ROLE_META[r]?.text) : "#64748b" }}>
                  {r === "all" ? "All Roles" : ROLE_META[r].label}
                </button>
              ))}
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {filteredCallouts.map((c, i) => {
                const rm = ROLE_META[c.role] || ROLE_META.student;
                return (
                  <div key={i} style={{ background:rm.bg, border:`1px solid ${rm.border}`, borderRadius:12, padding:16 }}>
                    <div style={{ fontSize:11, color:rm.text, fontWeight:700, textTransform:"uppercase", letterSpacing:0.8, marginBottom:8 }}>
                      {rm.label} · {c.type === "exam" ? "📝 Exam Pearl" : "🏥 Clinical"}
                    </div>
                    <div style={{ fontSize:13, color:"#374151", lineHeight:1.7 }}>{c.text}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Evidence */}
          <div style={{ background:"#0d1b35", border:"1px solid #1e3a5f", borderRadius:12, padding:16, marginBottom:28 }}>
            <div style={{ fontSize:11, color:"#64748b", textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>📚 Evidence & References</div>
            <div style={{ fontSize:12, color:"#64748b", lineHeight:1.7 }}>{mod.ev}</div>
          </div>

          {/* Navigation */}
          <div style={{ display:"flex", gap:12, flexWrap:"wrap", justifyContent:"space-between" }}>
            {sectionIdx > 0
              ? <button onClick={() => setSectionIdx(s => s - 1)} style={{ background:"#1e3a5f", color:"#e2e8f0", border:"none", borderRadius:10, padding:"12px 20px", cursor:"pointer", fontSize:14, fontWeight:600 }}>← Previous</button>
              : <div />
            }
            {sectionIdx < mod.sections.length - 1
              ? <button onClick={() => { setSectionIdx(s => s + 1); setExpandKP(false); window.scrollTo(0,0); }}
                  style={{ background:`linear-gradient(135deg,${mod.color},#38bdf8)`, color:"#fff", border:"none", borderRadius:10, padding:"12px 24px", cursor:"pointer", fontSize:14, fontWeight:700 }}>
                  Next Section →
                </button>
              : <button onClick={() => startQuiz(activeIdx, prog.preDone ? "post" : "pre")}
                  style={{ background:"linear-gradient(135deg,#15803d,#22c55e)", color:"#fff", border:"none", borderRadius:10, padding:"12px 24px", cursor:"pointer", fontSize:14, fontWeight:700 }}>
                  {prog.preDone ? "Post-Assessment 🏆" : "Take Quiz 📝"}
                </button>
            }
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────
  // DASHBOARD VIEW
  // ──────────────────────────────────────────────────────
  return (
    <div style={{ minHeight:"100vh", background:"#0a0f1e", color:"#e2e8f0", fontFamily:"'Inter',sans-serif" }}>
      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg,#0d1b35 0%,#0f2a3f 50%,#0a1f30 100%)", borderBottom:"1px solid #1e3a5f", padding:"32px 24px 28px" }}>
        <button onClick={onBack} style={{ background:"none", border:"none", color:"#64748b", cursor:"pointer", fontSize:13, marginBottom:20, display:"flex", alignItems:"center", gap:6 }}>
          ← Back
        </button>
        <div style={{ display:"flex", alignItems:"flex-start", gap:20, maxWidth:900, margin:"0 auto" }}>
          <div style={{ fontSize:56, lineHeight:1 }}>🫘</div>
          <div style={{ flex:1 }}>
            <div style={{ fontSize:11, color:"#38bdf8", textTransform:"uppercase", letterSpacing:2, marginBottom:6 }}>Pharmacology Institute</div>
            <h1 style={{ fontSize:26, fontWeight:900, color:"#e2e8f0", margin:"0 0 4px", lineHeight:1.2 }}>
              Renal Pharmacology
            </h1>
            <p style={{ fontSize:15, color:"#64748b", margin:"0 0 16px" }}>Drugs & the Kidney</p>
            <div style={{ display:"flex", gap:20, flexWrap:"wrap", fontSize:13, color:"#94a3b8" }}>
              <span>📚 16 Modules</span>
              <span>⏱ 36 Hours</span>
              <span>⭐ 5.0 Rating</span>
              <span>🌍 West African Context</span>
            </div>
          </div>
          {!registered && (
            <button onClick={onRegister} style={{ background:"linear-gradient(135deg,#2563eb,#38bdf8)", color:"#fff", border:"none", borderRadius:12, padding:"14px 28px", cursor:"pointer", fontSize:15, fontWeight:800, whiteSpace:"nowrap", flexShrink:0 }}>
              Enrol Now
            </button>
          )}
        </div>

        {/* Overall progress */}
        {registered && (
          <div style={{ maxWidth:900, margin:"24px auto 0", background:"#0a1628", border:"1px solid #1e3a5f", borderRadius:14, padding:18 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
              <span style={{ fontSize:13, color:"#94a3b8", fontWeight:600 }}>Course Progress</span>
              <span style={{ fontSize:13, color:"#38bdf8", fontWeight:700 }}>{completedMods} / {totalMods} modules complete · {pct}%</span>
            </div>
            <div style={{ height:6, background:"#1e3a5f", borderRadius:3 }}>
              <div style={{ height:"100%", background:"linear-gradient(90deg,#2563eb,#38bdf8)", borderRadius:3, width:`${pct}%`, transition:"width 0.6s" }} />
            </div>
          </div>
        )}
      </div>

      {/* Module grid */}
      <div style={{ maxWidth:960, margin:"32px auto", padding:"0 20px 60px" }}>
        <div style={{ fontSize:13, color:"#64748b", fontWeight:700, textTransform:"uppercase", letterSpacing:1, marginBottom:20 }}>
          All Modules
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
          {RENP_MODS.map((mod, idx) => {
            const prog   = progress[mod.id] || {};
            const locked = !registered && !mod.free;
            const done   = prog.postDone;
            const inProg = prog.preDone && !done;

            return (
              <div key={mod.id}
                onClick={() => !locked && startModule(idx)}
                style={{
                  background: locked ? "#0a0f1e" : "#0d1b35",
                  border: `1px solid ${done ? "#22c55e40" : inProg ? `${mod.color}40` : "#1e3a5f"}`,
                  borderTop: `3px solid ${locked ? "#1e3a5f" : done ? "#22c55e" : mod.color}`,
                  borderRadius:14, padding:20, cursor: locked ? "not-allowed" : "pointer",
                  opacity: locked ? 0.5 : 1,
                  transition:"transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { if (!locked) { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow=`0 8px 24px ${mod.color}25`; }}}
                onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
              >
                {/* Module header */}
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                  <div style={{ width:42, height:42, background:`${mod.color}20`, border:`1px solid ${mod.color}40`, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>
                    {mod.icon}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:10, color:"#64748b", letterSpacing:1 }}>MODULE {mod.num}</div>
                    <div style={{ fontSize:13, color:"#e2e8f0", fontWeight:700, lineHeight:1.3 }}>{mod.title}</div>
                  </div>
                  {locked && <span style={{ fontSize:16 }}>🔒</span>}
                  {done  && <span style={{ fontSize:16 }}>✅</span>}
                  {mod.free && !done && <span style={{ fontSize:10, color:"#22c55e", fontWeight:700, border:"1px solid #22c55e", padding:"2px 6px", borderRadius:8 }}>FREE</span>}
                </div>

                <p style={{ fontSize:12, color:"#64748b", margin:"0 0 12px", lineHeight:1.5 }}>{mod.sub}</p>

                {/* Meta row */}
                <div style={{ display:"flex", gap:12, fontSize:11, color:"#64748b", marginBottom:14 }}>
                  <span>⏱ {mod.dur}</span>
                  <span>📖 {mod.lessons} sections</span>
                  <span>👥 {mod.aud.length} roles</span>
                </div>

                {/* Quiz status */}
                {registered && (
                  <div style={{ display:"flex", gap:8 }}>
                    <div onClick={e => { e.stopPropagation(); startQuiz(idx, "pre"); }} style={{ flex:1, background: prog.preDone ? "#052e16" : "#0a1628", border:`1px solid ${prog.preDone ? "#22c55e" : "#1e3a5f"}`, borderRadius:8, padding:"6px 10px", cursor:"pointer", textAlign:"center" }}>
                      <div style={{ fontSize:10, color: prog.preDone ? "#4ade80" : "#64748b", fontWeight:700 }}>PRE-QUIZ</div>
                      <div style={{ fontSize:11, color: prog.preDone ? "#4ade80" : "#64748b" }}>{prog.preDone ? `${prog.preScore}/5 ✓` : "Not done"}</div>
                    </div>
                    <div onClick={e => { e.stopPropagation(); startQuiz(idx, "post"); }} style={{ flex:1, background: prog.postDone ? "#052e16" : "#0a1628", border:`1px solid ${prog.postDone ? "#22c55e" : "#1e3a5f"}`, borderRadius:8, padding:"6px 10px", cursor:"pointer", textAlign:"center" }}>
                      <div style={{ fontSize:10, color: prog.postDone ? "#4ade80" : "#64748b", fontWeight:700 }}>POST-QUIZ</div>
                      <div style={{ fontSize:11, color: prog.postDone ? "#4ade80" : "#64748b" }}>{prog.postDone ? `${prog.postScore}/5 ✓` : "Not done"}</div>
                    </div>
                  </div>
                )}

                {!registered && (
                  <div style={{ fontSize:12, color: mod.free ? "#22c55e" : "#64748b", textAlign:"center", paddingTop:4 }}>
                    {mod.free ? "🆓 Available as preview" : "🔒 Enrol to access"}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enrol CTA (bottom) */}
        {!registered && (
          <div style={{ marginTop:48, background:"linear-gradient(135deg,#0d2035,#0f1f35)", border:"1px solid #1e3a5f", borderRadius:20, padding:36, textAlign:"center" }}>
            <div style={{ fontSize:36, marginBottom:12 }}>🫘</div>
            <h2 style={{ fontSize:22, fontWeight:800, color:"#e2e8f0", marginBottom:8 }}>Unlock All 16 Modules</h2>
            <p style={{ fontSize:14, color:"#64748b", maxWidth:460, margin:"0 auto 24px", lineHeight:1.6 }}>
              Full access to all modules, pre/post assessments, role-specific callouts, and your personal progress tracker.
            </p>
            <div style={{ display:"flex", gap:24, justifyContent:"center", marginBottom:24, flexWrap:"wrap", fontSize:13, color:"#94a3b8" }}>
              <span>🇬🇭 GHS 350 / GHS 200 (students)</span>
              <span>🌍 USD 35 / USD 20 (students)</span>
            </div>
            <button onClick={onRegister} style={{ background:"linear-gradient(135deg,#2563eb,#38bdf8)", color:"#fff", border:"none", borderRadius:14, padding:"16px 48px", cursor:"pointer", fontSize:16, fontWeight:800 }}>
              Enrol Now →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
