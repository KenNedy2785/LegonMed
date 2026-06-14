// BiochemCourse.jsx — LegonMed Medical School Pillar
// Biochemistry: "Chemistry of Life" — 8 Modules, 18h
// Pattern mirrors AnatomyCourse.jsx exactly

import { useState, useEffect, useRef } from "react";
import {
  BIOC_ROLES,
  BIOC_RC,
  BIOC_MODS,
  BIOC_PRE_Q,
  BIOC_POST_Q,
} from "../data/bioc_data.js";

/* ─── palette ─────────────────────────────────────────────── */
const P = {
  navy: "#003087",
  gold: "#C9A84C",
  goldL: "#F0D080",
  white: "#FFFFFF",
  offWhite: "#F8F6F1",
  ink: "#1A1A2E",
  muted: "#6B6B80",
  border: "#E2DDD5",
  cardBg: "#FDFCF9",
};

const ROLE_ICONS = {
  med_student: "📖",
  pharm_student: "💊",
  nursing_student: "🩺",
  allied_student: "🔬",
  resident: "🏥",
};

const CALLOUT_COLORS = {
  exam: { bg: "#EEF2FF", border: "#4F46E5", tag: "#4338CA", label: "EXAM FOCUS" },
  clinical: { bg: "#F0FDF4", border: "#16A34A", tag: "#15803D", label: "CLINICAL" },
  practical: { bg: "#FFF7ED", border: "#EA580C", tag: "#C2410C", label: "PRACTICAL" },
};

/* ─── tiny helpers ─────────────────────────────────────────── */
const px = (x) => `${x}px`;

function Pill({ children, color = P.navy, bg = "#E8EDFB" }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 700,
        color,
        background: bg,
        letterSpacing: "0.03em",
      }}
    >
      {children}
    </span>
  );
}

function ProgressBar({ value, color = P.gold }) {
  return (
    <div
      style={{
        width: "100%",
        height: 6,
        background: "#E2DDD5",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: color,
          borderRadius: 3,
          transition: "width 0.6s ease",
        }}
      />
    </div>
  );
}

function Btn({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  style = {},
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 22px",
    borderRadius: 8,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "'Source Sans 3', sans-serif",
    fontWeight: 600,
    fontSize: 15,
    transition: "all 0.18s",
    opacity: disabled ? 0.45 : 1,
    ...style,
  };
  const variants = {
    primary: { background: P.navy, color: P.white },
    gold: { background: P.gold, color: P.ink },
    ghost: { background: "transparent", color: P.navy, border: `1.5px solid ${P.navy}` },
    danger: { background: "#DC2626", color: P.white },
  };
  return (
    <button onClick={disabled ? undefined : onClick} style={{ ...base, ...variants[variant] }}>
      {children}
    </button>
  );
}

/* ─── QUIZ COMPONENT ───────────────────────────────────────── */
function Quiz({ questions, title, onComplete, accent = P.navy }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answers, setAnswers] = useState([]);

  const q = questions[idx];

  function choose(i) {
    if (locked) return;
    setSelected(i);
    setLocked(true);
    const correct = i === q.ans;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { question: q.q, chosen: i, correct, correctIdx: q.ans }]);
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setDone(true);
      onComplete && onComplete(score + (selected === q.ans ? 1 : 0));
    } else {
      setIdx((i) => i + 1);
      setSelected(null);
      setLocked(false);
    }
  }

  if (done) {
    const finalScore = answers.filter((a) => a.correct).length;
    const pct = Math.round((finalScore / questions.length) * 100);
    return (
      <div style={{ padding: 32, textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 12 }}>
          {pct >= 80 ? "🎉" : pct >= 60 ? "📚" : "💪"}
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 26,
            color: P.ink,
            marginBottom: 8,
          }}
        >
          {title} Complete
        </h3>
        <p style={{ color: P.muted, marginBottom: 24 }}>
          You scored {finalScore} / {questions.length} ({pct}%)
        </p>
        <ProgressBar value={pct} color={pct >= 80 ? "#16A34A" : pct >= 60 ? P.gold : "#DC2626"} />
        <div style={{ marginTop: 32 }}>
          {answers.map((a, i) => (
            <div
              key={i}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                marginBottom: 8,
                borderRadius: 8,
                background: a.correct ? "#F0FDF4" : "#FEF2F2",
                borderLeft: `4px solid ${a.correct ? "#16A34A" : "#DC2626"}`,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 14, color: P.ink, marginBottom: 4 }}>
                {a.correct ? "✓" : "✗"} Q{i + 1}: {a.question}
              </div>
              {!a.correct && (
                <div style={{ fontSize: 13, color: "#16A34A" }}>
                  Correct: {questions[i].opts[a.correctIdx]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "28px 32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <span style={{ fontWeight: 700, color: accent, fontSize: 14 }}>
          {title}
        </span>
        <span style={{ fontSize: 13, color: P.muted }}>
          {idx + 1} / {questions.length}
        </span>
      </div>
      <ProgressBar value={((idx + 1) / questions.length) * 100} color={accent} />
      <p
        style={{
          marginTop: 24,
          marginBottom: 20,
          fontSize: 17,
          fontWeight: 600,
          color: P.ink,
          lineHeight: 1.55,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {q.q}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {q.opts.map((opt, i) => {
          let bg = P.cardBg;
          let border = `1.5px solid ${P.border}`;
          let color = P.ink;
          if (locked) {
            if (i === q.ans) {
              bg = "#F0FDF4";
              border = "2px solid #16A34A";
              color = "#15803D";
            } else if (i === selected && i !== q.ans) {
              bg = "#FEF2F2";
              border = "2px solid #DC2626";
              color = "#DC2626";
            }
          } else if (selected === i) {
            border = `2px solid ${accent}`;
            bg = "#EEF2FF";
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              style={{
                textAlign: "left",
                padding: "13px 18px",
                borderRadius: 8,
                border,
                background: bg,
                color,
                cursor: locked ? "default" : "pointer",
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontWeight: 700, marginRight: 10 }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {locked && (
        <div style={{ marginTop: 20, textAlign: "right" }}>
          <Btn onClick={next} variant="primary">
            {idx + 1 < questions.length ? "Next Question →" : "See Results →"}
          </Btn>
        </div>
      )}
    </div>
  );
}

/* ─── MODULE CARD ──────────────────────────────────────────── */
function ModuleCard({ mod, role, onClick, unlocked }) {
  const isAud = mod.aud.includes(role);
  return (
    <div
      onClick={unlocked ? onClick : undefined}
      style={{
        background: P.cardBg,
        border: `1.5px solid ${P.border}`,
        borderRadius: 14,
        padding: "22px 24px",
        cursor: unlocked ? "pointer" : "default",
        opacity: isAud ? 1 : 0.55,
        transition: "box-shadow 0.2s, transform 0.2s",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (unlocked) {
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,48,135,0.13)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 5,
          height: "100%",
          background: mod.color,
          borderRadius: "14px 0 0 14px",
        }}
      />
      <div style={{ paddingLeft: 12 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 10,
          }}
        >
          <div>
            <span style={{ fontSize: 28 }}>{mod.icon}</span>
            <span
              style={{
                marginLeft: 10,
                fontSize: 12,
                fontWeight: 700,
                color: P.muted,
                letterSpacing: "0.08em",
              }}
            >
              MODULE {mod.num}
            </span>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {mod.free && <Pill color="#15803D" bg="#DCFCE7">FREE</Pill>}
            {!unlocked && <Pill color={P.muted} bg={P.border}>🔒 LOCKED</Pill>}
          </div>
        </div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 18,
            fontWeight: 700,
            color: P.ink,
            marginBottom: 4,
          }}
        >
          {mod.title}
        </h3>
        <p style={{ fontSize: 13, color: P.muted, marginBottom: 14, lineHeight: 1.5 }}>
          {mod.sub}
        </p>
        <p
          style={{
            fontSize: 14,
            color: P.ink,
            fontStyle: "italic",
            lineHeight: 1.55,
            marginBottom: 14,
            opacity: 0.8,
          }}
        >
          "{mod.tagline}"
        </p>
        <div style={{ display: "flex", gap: 16, fontSize: 13, color: P.muted }}>
          <span>⏱ {mod.dur}</span>
          <span>📄 {mod.lessons} lessons</span>
          <span>👥 {mod.aud.length} roles</span>
        </div>
      </div>
    </div>
  );
}

/* ─── SECTION READER ───────────────────────────────────────── */
function SectionReader({ section, role, color }) {
  const [expanded, setExpanded] = useState(false);
  const callout = section.callouts?.find((c) => c.role === role);
  const cc = callout ? CALLOUT_COLORS[callout.type] || CALLOUT_COLORS.clinical : null;

  return (
    <div
      style={{
        background: P.cardBg,
        border: `1.5px solid ${P.border}`,
        borderRadius: 12,
        marginBottom: 20,
        overflow: "hidden",
      }}
    >
      {/* header */}
      <button
        onClick={() => setExpanded((e) => !e)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "18px 22px",
          background: expanded ? "#F0F4FF" : "transparent",
          border: "none",
          cursor: "pointer",
          borderBottom: expanded ? `1px solid ${P.border}` : "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 17,
            fontWeight: 700,
            color: P.ink,
            margin: 0,
          }}
        >
          {section.h}
        </h4>
        <span style={{ fontSize: 20, color: P.muted }}>{expanded ? "−" : "+"}</span>
      </button>

      {expanded && (
        <div style={{ padding: "22px 22px 26px" }}>
          {/* overview prose */}
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: P.ink,
              marginBottom: 22,
              fontStyle: "italic",
              borderLeft: `3px solid ${color}`,
              paddingLeft: 16,
            }}
          >
            {section.a}
          </p>

          {/* core content */}
          <div
            style={{
              background: "#F8F9FF",
              border: `1px solid #D0D7F0`,
              borderRadius: 8,
              padding: "18px 20px",
              marginBottom: 22,
              fontFamily: "'Source Sans 3', monospace",
              fontSize: 13.5,
              lineHeight: 1.8,
              color: P.ink,
              whiteSpace: "pre-wrap",
            }}
          >
            {section.c}
          </div>

          {/* key points */}
          {section.kp && section.kp.length > 0 && (
            <div style={{ marginBottom: 22 }}>
              <h5
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: P.muted,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Key Points
              </h5>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {section.kp.map((kp, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "10px 14px",
                      background: P.offWhite,
                      borderRadius: 8,
                      fontSize: 14,
                      color: P.ink,
                      lineHeight: 1.55,
                    }}
                  >
                    <span style={{ color: color, fontWeight: 700, flexShrink: 0 }}>→</span>
                    {kp}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* role callout */}
          {callout && cc && (
            <div
              style={{
                background: cc.bg,
                border: `1.5px solid ${cc.border}`,
                borderRadius: 10,
                padding: "16px 18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    background: cc.tag,
                    color: P.white,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: "0.06em",
                  }}
                >
                  {cc.label}
                </span>
                <span style={{ fontSize: 13, color: cc.tag, fontWeight: 600 }}>
                  {BIOC_ROLES[role]}
                </span>
              </div>
              <p style={{ fontSize: 14, color: P.ink, lineHeight: 1.7, margin: 0 }}>
                {callout.text}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ─── MODULE READER ────────────────────────────────────────── */
function ModuleReader({ mod, role, onBack }) {
  const [view, setView] = useState("story"); // story | learn | quiz
  const [quizDone, setQuizDone] = useState(false);
  const [postDone, setPostDone] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [view]);

  // Post-module quiz uses last 2 post-questions or full post bank
  const postQs = BIOC_POST_Q.slice(0, 5);

  return (
    <div ref={topRef} style={{ maxWidth: 860, margin: "0 auto", paddingBottom: 60 }}>
      {/* top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 28,
          paddingTop: 4,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 22,
            color: P.muted,
            padding: 0,
          }}
        >
          ←
        </button>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: P.muted, letterSpacing: "0.08em" }}>
            MODULE {mod.num} · BIOCHEMISTRY
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 22,
              fontWeight: 900,
              color: P.ink,
              margin: 0,
            }}
          >
            {mod.icon} {mod.title}
          </h2>
        </div>
      </div>

      {/* tab bar */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 28,
          background: P.offWhite,
          borderRadius: 10,
          padding: 4,
        }}
      >
        {[
          { key: "story", label: "📖 Story" },
          { key: "learn", label: "🧠 Learn" },
          { key: "quiz", label: "✅ Quiz" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setView(t.key)}
            style={{
              flex: 1,
              padding: "10px 0",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              background: view === t.key ? P.white : "transparent",
              color: view === t.key ? mod.color : P.muted,
              boxShadow: view === t.key ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.18s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* STORY TAB */}
      {view === "story" && (
        <div>
          <div
            style={{
              background: `linear-gradient(135deg, ${mod.color}18 0%, ${mod.color}06 100%)`,
              border: `1.5px solid ${mod.color}40`,
              borderRadius: 14,
              padding: "28px 32px",
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>{mod.icon}</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 900,
                color: P.ink,
                marginBottom: 8,
              }}
            >
              {mod.title}
            </h3>
            <p style={{ fontSize: 15, color: mod.color, fontWeight: 600, marginBottom: 16 }}>
              {mod.sub}
            </p>
            <p style={{ fontSize: 15, color: P.ink, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>
              "{mod.tagline}"
            </p>
          </div>

          <div
            style={{
              background: P.cardBg,
              border: `1.5px solid ${P.border}`,
              borderRadius: 14,
              padding: "28px 32px",
              marginBottom: 24,
            }}
          >
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17,
                fontWeight: 700,
                color: P.ink,
                marginBottom: 18,
              }}
            >
              Before We Begin
            </h4>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: P.ink,
                whiteSpace: "pre-line",
              }}
            >
              {mod.story}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Btn onClick={() => setView("learn")} variant="primary" style={{ background: mod.color }}>
              Start Learning →
            </Btn>
          </div>
        </div>
      )}

      {/* LEARN TAB */}
      {view === "learn" && (
        <div>
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
                padding: "12px 16px",
                background: `${BIOC_RC[role]}15`,
                borderRadius: 8,
                border: `1px solid ${BIOC_RC[role]}40`,
              }}
            >
              <span style={{ fontSize: 18 }}>{ROLE_ICONS[role]}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: BIOC_RC[role] }}>
                {BIOC_ROLES[role]} — content tailored to your role
              </span>
            </div>

            {mod.sections.map((sec, i) => (
              <SectionReader key={i} section={sec} role={role} color={mod.color} />
            ))}
          </div>

          {/* Evidence */}
          {mod.ev && (
            <div
              style={{
                padding: "14px 18px",
                background: P.offWhite,
                borderRadius: 8,
                fontSize: 13,
                color: P.muted,
                marginBottom: 24,
              }}
            >
              <strong>Evidence Base:</strong> {mod.ev}
            </div>
          )}

          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <Btn onClick={() => setView("quiz")} variant="primary" style={{ background: mod.color }}>
              Take Quiz →
            </Btn>
          </div>
        </div>
      )}

      {/* QUIZ TAB */}
      {view === "quiz" && (
        <div
          style={{
            background: P.cardBg,
            border: `1.5px solid ${P.border}`,
            borderRadius: 14,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px 28px",
              background: `${mod.color}12`,
              borderBottom: `1px solid ${P.border}`,
            }}
          >
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                color: P.ink,
                margin: 0,
              }}
            >
              Module {mod.num} Quiz
            </h4>
            <p style={{ fontSize: 13, color: P.muted, margin: "4px 0 0" }}>
              Test your understanding of {mod.title}
            </p>
          </div>
          <Quiz
            questions={postQs}
            title={`Module ${mod.num}: ${mod.title}`}
            onComplete={() => setPostDone(true)}
            accent={mod.color}
          />
        </div>
      )}
    </div>
  );
}

/* ─── MAIN EXPORT ──────────────────────────────────────────── */
export default function BiochemCourse({ session, registered, onBack, onRegister, onGoHome }) {
  const [role, setRole] = useState(null);
  const [view, setView] = useState("home"); // home | pre | modules | module | post
  const [activeModule, setActiveModule] = useState(null);
  const [preScore, setPreScore] = useState(null);
  const [postScore, setPostScore] = useState(null);
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [view]);

  /* derived */
  const canAccess = (mod) => mod.free || registered;

  /* ── HOME ── */
  if (view === "home") {
    return (
      <div
        ref={topRef}
        style={{
          minHeight: "100vh",
          background: P.offWhite,
          fontFamily: "'Source Sans 3', sans-serif",
        }}
      >
        {/* hero */}
        <div
          style={{
            background: `linear-gradient(135deg, ${P.navy} 0%, #1a3a7a 50%, #0d2257 100%)`,
            padding: "52px 32px 44px",
            color: P.white,
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <button
              onClick={onBack}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 8,
                color: P.white,
                cursor: "pointer",
                padding: "6px 16px",
                fontSize: 14,
                marginBottom: 28,
              }}
            >
              ← Back
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <span style={{ fontSize: 48 }}>⚗️</span>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: P.gold,
                    marginBottom: 4,
                  }}
                >
                  MEDICAL SCHOOL PILLAR · BIOCHEMISTRY
                </div>
                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 36,
                    fontWeight: 900,
                    margin: 0,
                    lineHeight: 1.15,
                  }}
                >
                  Chemistry of Life
                </h1>
              </div>
            </div>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.85)",
                maxWidth: 680,
                marginBottom: 28,
              }}
            >
              From glucose to genes, from enzymes to errors — the molecular foundation of
              everything that happens inside the human body. 8 modules. 18 hours. Clinically
              grounded at every step.
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {[
                { icon: "📚", label: "8 Modules" },
                { icon: "⏱", label: "18 Hours" },
                { icon: "👥", label: "5 Roles" },
                { icon: "🆓", label: "Module 1 Free" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 24px" }}>
          {/* role selection */}
          {!role ? (
            <div
              style={{
                background: P.cardBg,
                border: `1.5px solid ${P.border}`,
                borderRadius: 16,
                padding: "32px",
                marginBottom: 32,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  color: P.ink,
                  marginBottom: 8,
                }}
              >
                Who are you?
              </h2>
              <p style={{ color: P.muted, fontSize: 14, marginBottom: 24 }}>
                Select your role to personalise every module with targeted clinical callouts,
                exam tips, and practical guidance.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: 12,
                }}
              >
                {Object.entries(BIOC_ROLES).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setRole(key)}
                    style={{
                      padding: "16px 18px",
                      border: `1.5px solid ${P.border}`,
                      borderRadius: 10,
                      background: P.white,
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: P.ink,
                      transition: "all 0.18s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = `1.5px solid ${BIOC_RC[key]}`;
                      e.currentTarget.style.background = `${BIOC_RC[key]}0E`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = `1.5px solid ${P.border}`;
                      e.currentTarget.style.background = P.white;
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                background: `${BIOC_RC[role]}12`,
                border: `1.5px solid ${BIOC_RC[role]}40`,
                borderRadius: 12,
                padding: "16px 22px",
                marginBottom: 28,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 22 }}>{ROLE_ICONS[role]}</span>
                <div>
                  <div style={{ fontWeight: 700, color: BIOC_RC[role] }}>{BIOC_ROLES[role]}</div>
                  <div style={{ fontSize: 13, color: P.muted }}>
                    Content is personalised to your role
                  </div>
                </div>
              </div>
              <button
                onClick={() => setRole(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: P.muted,
                  fontSize: 13,
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                Change role
              </button>
            </div>
          )}

          {/* pre-test CTA */}
          {role && preScore === null && (
            <div
              style={{
                background: `linear-gradient(135deg, ${P.gold}22 0%, ${P.gold}08 100%)`,
                border: `1.5px solid ${P.gold}80`,
                borderRadius: 14,
                padding: "24px 28px",
                marginBottom: 28,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 18,
                    color: P.ink,
                    margin: "0 0 6px",
                  }}
                >
                  📊 Start with a Pre-Test
                </h4>
                <p style={{ fontSize: 14, color: P.muted, margin: 0 }}>
                  5 questions to benchmark your biochemistry knowledge before you begin.
                </p>
              </div>
              <Btn onClick={() => setView("pre")} variant="gold">
                Take Pre-Test →
              </Btn>
            </div>
          )}

          {preScore !== null && (
            <div
              style={{
                padding: "14px 18px",
                background: "#F0FDF4",
                border: "1.5px solid #16A34A",
                borderRadius: 10,
                marginBottom: 24,
                fontSize: 14,
                color: "#15803D",
                fontWeight: 600,
              }}
            >
              ✓ Pre-test complete — {preScore}/{BIOC_PRE_Q.length} correct. You can re-take
              the post-test after completing all modules.
            </div>
          )}

          {/* modules grid */}
          {role && (
            <>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: P.ink,
                  marginBottom: 18,
                }}
              >
                Course Modules
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
                  gap: 16,
                  marginBottom: 40,
                }}
              >
                {BIOC_MODS.map((mod) => (
                  <ModuleCard
                    key={mod.id}
                    mod={mod}
                    role={role}
                    unlocked={canAccess(mod)}
                    onClick={() => {
                      setActiveModule(mod);
                      setView("module");
                    }}
                  />
                ))}
              </div>

              {/* register CTA for locked modules */}
              {!registered && (
                <div
                  style={{
                    background: P.navy,
                    borderRadius: 16,
                    padding: "32px",
                    textAlign: "center",
                    color: P.white,
                    marginBottom: 32,
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🔓</div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 22,
                      marginBottom: 8,
                    }}
                  >
                    Unlock All 8 Modules
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: 22,
                      fontSize: 15,
                    }}
                  >
                    Register to access the complete course — enzyme kinetics, molecular biology,
                    clinical biochemistry, inborn errors, and more.
                  </p>
                  <Btn onClick={onRegister} variant="gold">
                    Register Now — It's Free
                  </Btn>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  /* ── PRE-TEST ── */
  if (view === "pre") {
    return (
      <div
        ref={topRef}
        style={{
          minHeight: "100vh",
          background: P.offWhite,
          fontFamily: "'Source Sans 3', sans-serif",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button
            onClick={() => setView("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: P.muted,
              fontSize: 15,
              marginBottom: 24,
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            ← Back to Course
          </button>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              color: P.ink,
              marginBottom: 6,
            }}
          >
            Biochemistry Pre-Test
          </h2>
          <p style={{ color: P.muted, fontSize: 14, marginBottom: 28 }}>
            Benchmark your existing knowledge. No pressure — this is just to help you see where
            you start.
          </p>
          <div
            style={{
              background: P.cardBg,
              border: `1.5px solid ${P.border}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <Quiz
              questions={BIOC_PRE_Q}
              title="Pre-Test: Biochemistry Baseline"
              onComplete={(s) => {
                setPreScore(s);
                setView("home");
              }}
              accent={P.navy}
            />
          </div>
        </div>
      </div>
    );
  }

  /* ── MODULE VIEW ── */
  if (view === "module" && activeModule) {
    return (
      <div
        ref={topRef}
        style={{
          minHeight: "100vh",
          background: P.offWhite,
          fontFamily: "'Source Sans 3', sans-serif",
          padding: "32px 24px",
        }}
      >
        <ModuleReader
          mod={activeModule}
          role={role || "med_student"}
          onBack={() => {
            setView("home");
            setActiveModule(null);
          }}
        />
      </div>
    );
  }

  /* ── POST TEST ── */
  if (view === "post") {
    return (
      <div
        ref={topRef}
        style={{
          minHeight: "100vh",
          background: P.offWhite,
          fontFamily: "'Source Sans 3', sans-serif",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <button
            onClick={() => setView("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: P.muted,
              fontSize: 15,
              marginBottom: 24,
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            ← Back to Course
          </button>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              color: P.ink,
              marginBottom: 6,
            }}
          >
            Biochemistry Post-Test
          </h2>
          <p style={{ color: P.muted, fontSize: 14, marginBottom: 28 }}>
            5 clinical integration questions to test what you have learned across all 8 modules.
          </p>
          <div
            style={{
              background: P.cardBg,
              border: `1.5px solid ${P.border}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <Quiz
              questions={BIOC_POST_Q}
              title="Post-Test: Biochemistry Mastery"
              onComplete={(s) => {
                setPostScore(s);
              }}
              accent={P.navy}
            />
          </div>
          {postScore !== null && (
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <Btn onClick={() => setView("home")} variant="primary">
                Return to Course
              </Btn>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
