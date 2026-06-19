import { useState, useEffect } from 'react';
import { C, btn, bdg, inp, UGLogo, DB, isAdmin } from '../shared.jsx';
import { Quiz, ModuleReader } from '../SharedUI.jsx';
import {
  NP_MODS,
  NP_PRE_Q_M1, NP_POST_Q_M1,
  NP_PRE_Q_M2, NP_POST_Q_M2,
  NP_PRE_Q_M3, NP_POST_Q_M3,
  NP_PRE_Q_M4, NP_POST_Q_M4,
  NP_PRE_Q_M5, NP_POST_Q_M5,
  NP_PRE_Q_M6, NP_POST_Q_M6,
  NP_PRE_Q_M7, NP_POST_Q_M7,
  NP_PRE_Q_M8, NP_POST_Q_M8,
  NP_PRE_Q_M9, NP_POST_Q_M9,
  NP_PRE_Q_M10, NP_POST_Q_M10,
  NP_PRE_Q_M11, NP_POST_Q_M11,
} from '../data/np_data.js';

const NP_ROLES = {
  doctor: "🩺 Doctor",
  nurse: "💉 Nurse",
  pharmacist: "💊 Pharmacist",
  labtech: "🔬 Lab Technician",
  student: "📖 Student",
};

const NP_RC = {
  doctor: "#1A237E",
  nurse: "#4A235A",
  pharmacist: "#1D4F36",
  labtech: "#154360",
  student: "#7B241C",
};

// Map module id → pre/post quiz arrays
const PRE_Q_MAP = {
  1: NP_PRE_Q_M1, 2: NP_PRE_Q_M2, 3: NP_PRE_Q_M3,
  4: NP_PRE_Q_M4, 5: NP_PRE_Q_M5, 6: NP_PRE_Q_M6,
  7: NP_PRE_Q_M7, 8: NP_PRE_Q_M8, 9: NP_PRE_Q_M9,
  10: NP_PRE_Q_M10, 11: NP_PRE_Q_M11,
};
const POST_Q_MAP = {
  1: NP_POST_Q_M1, 2: NP_POST_Q_M2, 3: NP_POST_Q_M3,
  4: NP_POST_Q_M4, 5: NP_POST_Q_M5, 6: NP_POST_Q_M6,
  7: NP_POST_Q_M7, 8: NP_POST_Q_M8, 9: NP_POST_Q_M9,
  10: NP_POST_Q_M10, 11: NP_POST_Q_M11,
};

function NPCourse({ session, registered, onBack, onRegister, onGoHome }) {
  const [page, setPage] = useState("home");
  const [readMod, setReadMod] = useState(null);
  const [expMod, setExpMod] = useState(null);
  const [roleTab, setRoleTab] = useState("all");

  // Per-module quiz state
  const [activeQuizMod, setActiveQuizMod] = useState(null);
  const [quizType, setQuizType] = useState("pre"); // "pre" | "post"
  const [preAns, setPreAns] = useState({});
  const [postAns, setPostAns] = useState({});
  const [preDone, setPreDone] = useState({});   // { modId: score }
  const [postDone, setPostDone] = useState({}); // { modId: score }

  // Certificate
  const [certName, setCertName] = useState(session?.name || "");
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [page, readMod, activeQuizMod]);

  const userRole = session?.profession || "";

  const PLANS = [
    { id:"full", label:"Full Course", ghc:350, usd:35, features:["All 11 Modules","Downloadable Notes","Per-Module Pre & Post Tests","Student Discussion Board"] },
    { id:"cert", label:"Course + Certificate", ghc:500, usd:50, featured:true, features:["Everything in Full","Official LegonMed Certificate","3 Signatories","Digital Badge","Verifiable QR Code"] },
    { id:"inst", label:"Institutional (30 seats)", ghc:5000, usd:500, features:["30 Licences","Admin Dashboard","Group Certificates","Priority Support"] },
  ];

  const visibleMods = roleTab === "all" ? NP_MODS : NP_MODS.filter(m => m.aud.includes(roleTab));

  const totalPostDone = Object.keys(postDone).length;
  const totalPostPass = Object.values(postDone).filter(s => s >= 3).length;

  const NAV = [
    { id:"home", l:"Course Home" }, { id:"curriculum", l:"Curriculum" },
    { id:"register", l:"Enroll" }, { id:"quiz", l:"Module Quizzes" },
    { id:"certificate", l:"Certificate" },
  ];

  // ── Quiz flow ──
  function openQuiz(modId, type) {
    setActiveQuizMod(modId);
    setQuizType(type);
    setPreAns({});
    setPostAns({});
    setPage("quiz_active");
  }

  function submitQuiz(modId, type) {
    const qs = type === "pre" ? PRE_Q_MAP[modId] : POST_Q_MAP[modId];
    const ans = type === "pre" ? preAns : postAns;
    let s = 0;
    qs.forEach((q, i) => { if (ans[i] === q.ans) s++; });
    if (type === "pre") setPreDone(p => ({ ...p, [modId]: s }));
    else {
      setPostDone(p => ({ ...p, [modId]: s }));
      if (session) DB.push("completions", { ...session, course:"np", module: modId, postScore: s });
    }
  }

  // ── Module reader ──
  if (readMod) return (
    <ModuleReader
      mod={readMod}
      userRole={userRole}
      roleLabels={NP_ROLES}
      roleColors={NP_RC}
      onClose={() => setReadMod(null)}
    />
  );

  // ── Active quiz ──
  if (page === "quiz_active" && activeQuizMod) {
    const mod = NP_MODS.find(m => m.id === activeQuizMod);
    const qs = quizType === "pre" ? PRE_Q_MAP[activeQuizMod] : POST_Q_MAP[activeQuizMod];
    const ans = quizType === "pre" ? preAns : postAns;
    const setAns = quizType === "pre" ? setPreAns : setPostAns;
    const done = quizType === "pre" ? preDone[activeQuizMod] !== undefined : postDone[activeQuizMod] !== undefined;
    const score = quizType === "pre" ? preDone[activeQuizMod] : postDone[activeQuizMod];

    return (
      <div style={{ fontFamily:"'Georgia',serif", background:"#f8f6f0", minHeight:"100vh", paddingTop:80 }}>
        <div style={{ maxWidth:820, margin:"0 auto", padding:"40px 24px" }}>
          <button style={btn("secondary",{ marginBottom:20 })} onClick={() => setPage("quiz")}>← Back to Quizzes</button>
          <div style={{ textAlign:"center", marginBottom:28 }}>
            <span style={bdg}>{quizType === "pre" ? "Pre-Module Assessment" : "Post-Module Assessment"}</span>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,3.5vw,28px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:8 }}>
              Module {mod.num}: {mod.title}
            </h1>
            <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14 }}>5 questions · {quizType === "pre" ? "Baseline — no grade" : "Pass mark 60% · Required for certificate"}</p>
          </div>

          {done ? (
            <div style={{ background:"#fff", borderRadius:18, padding:32, textAlign:"center", boxShadow:"0 4px 24px rgba(26,35,126,.08)" }}>
              <div style={{ fontSize:52, marginBottom:14 }}>{score >= 4 ? "🏆" : score >= 3 ? "✅" : "📚"}</div>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color: score >= 3 ? "#0a7c4a" : "#1A237E", marginBottom:8 }}>
                {quizType === "pre" ? `Baseline: ${score}/5` : `Score: ${score}/5 — ${score >= 3 ? "PASS ✓" : "Review Recommended"}`}
              </h2>
              <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14.5, lineHeight:1.85, marginBottom:20 }}>
                {quizType === "pre"
                  ? score >= 4
                    ? "Strong foundation. This module will sharpen your precision."
                    : "Every concept is built from first principles — you are exactly where you need to be."
                  : score >= 3
                    ? "Excellent — module complete. Your certificate progress has been updated."
                    : "Review the module content and retry when ready."}
              </p>
              <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                {quizType === "pre" && <button style={btn()} onClick={() => { setReadMod(mod); }}>📖 Read Module →</button>}
                {quizType === "pre" && <button style={btn("secondary")} onClick={() => openQuiz(activeQuizMod, "post")}>Post-Module Quiz →</button>}
                <button style={btn("secondary")} onClick={() => setPage("quiz")}>← All Quizzes</button>
              </div>
            </div>
          ) : (
            <Quiz
              qs={qs}
              ans={ans}
              setAns={setAns}
              done={done}
              onSubmit={() => submitQuiz(activeQuizMod, quizType)}
              onSkip={quizType === "pre" ? () => { setPreDone(p => ({ ...p, [activeQuizMod]: 0 })); } : null}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily:"'Georgia',serif", background:"#f8f6f0", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .np-nl{cursor:pointer;padding:7px 11px;border-radius:6px;transition:all .2s;font-family:'Source Sans 3',sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,.82)}
        .np-nl:hover,.np-nl.act{color:#C5CAE9;background:rgba(197,202,233,.14)}
        .np-mob{display:none;background:none;border:none;cursor:pointer;color:#fff;font-size:24px}
        @media(max-width:820px){.np-dnav{display:none!important}.np-mob{display:flex!important}}
        button:disabled{opacity:.45;cursor:not-allowed}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:scrolled?"#0d0d2bee":"#0d0d2b", backdropFilter:"blur(14px)", borderBottom:"2px solid #1A237E28", transition:"all .3s" }}>
        <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <div style={{ display:"flex", alignItems:"center", gap:11, cursor:"pointer" }} onClick={onGoHome}>
            <UGLogo size={40} />
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:900, color:"#fff" }}>Legon<span style={{ color:"#C5CAE9" }}>Med</span></div>
              <div style={{ fontSize:9, color:"#C5CAE9", fontFamily:"'Source Sans 3',sans-serif", letterSpacing:"2px", textTransform:"uppercase" }}>Medical School</div>
            </div>
          </div>
          <div className="np-dnav" style={{ display:"flex", gap:1, alignItems:"center", flexWrap:"wrap", justifyContent:"flex-end" }}>
            <span className="np-nl" style={{ color:"rgba(197,202,233,.8)", marginRight:8, fontSize:12 }} onClick={onBack}>← Medical School</span>
            {NAV.map(n => <span key={n.id} className={"np-nl"+(page===n.id?" act":"")} onClick={() => setPage(n.id)}>{n.l}</span>)}
          </div>
          <button className="np-mob" onClick={() => setMob(!mob)}>☰</button>
        </div>
        {mob && (
          <div style={{ background:"#0d0d2b", padding:"14px 20px", borderTop:"1px solid #1A237E28" }}>
            {NAV.map(n => <div key={n.id} className="np-nl" style={{ display:"block", marginBottom:8 }} onClick={() => { setPage(n.id); setMob(false); }}>{n.l}</div>)}
          </div>
        )}
      </nav>

      <div style={{ paddingTop:64 }}>

        {/* ── HOME ── */}
        {page === "home" && (
          <div>
            {/* Hero */}
            <div style={{ background:"linear-gradient(140deg,#0d0d2b,#1A237E,#283593)", padding:"88px 24px 68px", textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-80, right:-80, width:420, height:420, borderRadius:"50%", background:"#C5CAE908", pointerEvents:"none" }} />
              <div style={{ position:"absolute", bottom:-60, left:-60, width:300, height:300, borderRadius:"50%", background:"#ffffff04", pointerEvents:"none" }} />
              <div style={{ maxWidth:900, margin:"0 auto", position:"relative" }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:18 }}><UGLogo size={80} /></div>
                <span style={bdg}>📚 LegonMed Medical School · Neuroscience & Pharmacology</span>
                <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,6vw,62px)", fontWeight:900, color:"#fff", lineHeight:1.08, margin:"16px 0 10px" }}>Drugs & the Brain</h1>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(14px,2.8vw,23px)", fontWeight:400, color:"#C5CAE9", marginBottom:18, fontStyle:"italic" }}>Neuropharmacology</h2>
                <p style={{ color:"rgba(255,255,255,.82)", fontSize:"clamp(14px,2vw,17px)", maxWidth:760, margin:"0 auto 30px", lineHeight:1.9, fontFamily:"'Source Sans 3',sans-serif" }}>
                  From the blood-brain barrier to CAR-T cells of the CNS — the complete pharmacology of the nervous system. Anaesthesia, pain, sleep, depression, Parkinson's, antipsychotics, epilepsy, dementia, addiction, ADHD, and bipolar disorder.
                </p>
                <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                  <button style={btn("primary",{ fontSize:16, padding:"14px 32px" })} onClick={() => setPage("curriculum")}>🧠 View Curriculum</button>
                  <button style={btn("secondary")} onClick={() => setPage("register")}>🎓 Enroll Now</button>
                </div>
                <div style={{ display:"flex", gap:24, justifyContent:"center", marginTop:44, flexWrap:"wrap" }}>
                  {[["11","Modules"],["24h","Content"],["77","Lessons"],["5","Professions"],["Free","Module 1"]].map(([n,l]) => (
                    <div key={l} style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:32, fontWeight:900, color:"#C5CAE9" }}>{n}</div>
                      <div style={{ color:"rgba(255,255,255,.6)", fontSize:11, fontFamily:"'Source Sans 3',sans-serif", letterSpacing:1.5, textTransform:"uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module grid */}
            <div style={{ background:"#fff", padding:"52px 24px" }}>
              <div style={{ maxWidth:1200, margin:"0 auto", textAlign:"center" }}>
                <span style={bdg}>Complete Curriculum</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:32 }}>11 Modules. Brain to Behaviour.</h2>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:14 }}>
                  {NP_MODS.map(m => (
                    <div key={m.id}
                      style={{ background:"#f0f0ff", borderRadius:14, padding:"18px 14px", borderLeft:"4px solid "+m.color, textAlign:"left", cursor:"pointer", transition:"all .25s", boxShadow:"0 2px 10px rgba(26,35,126,.06)" }}
                      onMouseOver={e => e.currentTarget.style.transform="translateY(-3px)"}
                      onMouseOut={e => e.currentTarget.style.transform=""}
                      onClick={() => setPage("curriculum")}>
                      <div style={{ fontSize:24, marginBottom:7 }}>{m.icon}</div>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:13.5, fontWeight:700, color:m.color, marginBottom:4 }}>Module {m.num}: {m.title}</div>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11.5, color:"#5a6a8a", lineHeight:1.5 }}>{m.sub}</div>
                      {m.free && <span style={{ background:"#0a7c4a", color:"#fff", padding:"2px 8px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif", display:"inline-block", marginTop:8 }}>FREE</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Five professions */}
            <div style={{ background:"#f0f0ff", padding:"52px 24px" }}>
              <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
                <span style={bdg}>Learning Paths</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:32 }}>Five Professions. One Brain.</h2>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))", gap:14 }}>
                  {Object.entries(NP_ROLES).map(([k,l]) => (
                    <div key={k}
                      onClick={() => { setPage("curriculum"); setRoleTab(k); }}
                      style={{ padding:"20px 14px", borderRadius:14, border:"3px solid "+NP_RC[k], background:"#fff", cursor:"pointer", textAlign:"center", transition:"all .25s" }}
                      onMouseOver={e => { e.currentTarget.style.background=NP_RC[k]; e.currentTarget.querySelector("div").style.color="#fff"; }}
                      onMouseOut={e => { e.currentTarget.style.background="#fff"; e.currentTarget.querySelector("div").style.color=NP_RC[k]; }}>
                      <div style={{ fontSize:28, marginBottom:6 }}>{l.split(" ")[0]}</div>
                      <div style={{ fontWeight:700, fontSize:13, fontFamily:"'Source Sans 3',sans-serif", color:NP_RC[k], transition:"color .25s" }}>{l.slice(3)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div style={{ background:"#fff", padding:"52px 24px" }}>
              <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center" }}>
                <span style={bdg}>Student Pricing</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,34px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:10 }}>Designed for Health Sciences Students</h2>
                <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, marginBottom:28 }}>🇬🇭 Ghana — MoMo · Card · Bank &nbsp;·&nbsp; 🌍 International — All major cards</p>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
                  {PLANS.map(p => (
                    <div key={p.id} style={{ background:"#f8f6f0", borderRadius:18, padding:"28px 20px", boxShadow:"0 4px 20px rgba(26,35,126,.08)", textAlign:"center", position:"relative", border:p.featured?"2px solid #C5CAE9":"1px solid #e8edf5" }}>
                      {p.featured && <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:"#C5CAE9", color:"#0d0d2b", padding:"3px 14px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif" }}>⭐ MOST POPULAR</div>}
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:"#1A237E", marginBottom:6 }}>{p.label}</div>
                      <div style={{ fontSize:24, fontWeight:900, color:p.featured?"#1A237E":"#1a1a2e", fontFamily:"'Playfair Display',serif", marginBottom:2 }}>GH₵ {p.ghc}</div>
                      <div style={{ fontSize:12.5, color:"#5a6a8a", marginBottom:12, fontFamily:"'Source Sans 3',sans-serif" }}>${p.usd} International</div>
                      <ul style={{ listStyle:"none", marginBottom:16, textAlign:"left" }}>
                        {p.features.map(f => <li key={f} style={{ padding:"4px 0", fontSize:13, fontFamily:"'Source Sans 3',sans-serif", borderBottom:"1px solid #f0f0f0" }}>✅ {f}</li>)}
                      </ul>
                      <button style={btn(p.featured?"primary":"secondary",{ width:"100%", background: p.featured ? "linear-gradient(135deg,#1A237E,#283593)" : undefined })} onClick={() => setPage("register")}>Enroll Now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding:"20px", textAlign:"center" }}><button style={btn("secondary")} onClick={onBack}>← Back to Medical School</button></div>
          </div>
        )}

        {/* ── CURRICULUM ── */}
        {page === "curriculum" && (
          <div style={{ maxWidth:1060, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:34 }}>
              <span style={bdg}>Full Curriculum</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,36px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:10 }}>11 Modules · 77 Lessons · 24 Hours</h1>
            </div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center", marginBottom:26 }}>
              <button onClick={() => setRoleTab("all")} style={{ padding:"7px 14px", borderRadius:30, border:"2px solid #1A237E", background:roleTab==="all"?"#1A237E":"#fff", color:roleTab==="all"?"#fff":"#1A237E", fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:600, cursor:"pointer" }}>All</button>
              {Object.entries(NP_ROLES).map(([k,l]) => (
                <button key={k} onClick={() => setRoleTab(k)} style={{ padding:"7px 14px", borderRadius:30, border:"2px solid "+NP_RC[k], background:roleTab===k?NP_RC[k]:"#fff", color:roleTab===k?"#fff":NP_RC[k], fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:600, cursor:"pointer", transition:"all .2s" }}>
                  {l.split(" ").slice(1).join(" ")}
                </button>
              ))}
            </div>
            {visibleMods.map(m => (
              <div key={m.id}
                style={{ background:"#fff", borderRadius:14, padding:"22px 20px", marginBottom:16, borderLeft:"6px solid "+m.color, boxShadow:"0 3px 16px rgba(26,35,126,.07)", transition:"all .25s", cursor:"pointer" }}
                onMouseOver={e => e.currentTarget.style.transform="translateX(4px)"}
                onMouseOut={e => e.currentTarget.style.transform=""}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap" }} onClick={() => setExpMod(expMod===m.id?null:m.id)}>
                  <div style={{ display:"flex", gap:12, alignItems:"flex-start", flex:1 }}>
                    <div style={{ background:m.color+"18", borderRadius:10, padding:"9px 12px", fontSize:22, flexShrink:0 }}>{m.icon}</div>
                    <div>
                      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:4, alignItems:"center" }}>
                        <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#5a6a8a" }}>Module {m.num} · {m.dur} · {m.lessons} lessons</span>
                        {m.free && <span style={{ background:"#0a7c4a", color:"#fff", padding:"2px 8px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif" }}>FREE</span>}
                        {postDone[m.id] !== undefined && <span style={{ background: postDone[m.id] >= 3 ? "#0a7c4a" : "#E65100", color:"#fff", padding:"2px 8px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif" }}>{postDone[m.id] >= 3 ? "✓ PASSED" : "Retry"}</span>}
                      </div>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(15px,2.5vw,19px)", color:m.color, marginBottom:3 }}>{m.title}</h3>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:m.color, fontWeight:600, marginBottom:4 }}>{m.sub}</div>
                      <p style={{ fontFamily:"'Georgia',serif", fontSize:13, color:"#5a6a8a", lineHeight:1.7, fontStyle:"italic" }}>{m.tagline}</p>
                    </div>
                  </div>
                  <span style={{ color:"#5a6a8a", fontSize:18, flexShrink:0 }}>{expMod===m.id?"▲":"▼"}</span>
                </div>
                {expMod === m.id && (
                  <div style={{ marginTop:18, paddingTop:18, borderTop:"1px solid #f0f0f0" }}>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:7, marginBottom:16 }}>
                      {m.sections.map(s => (
                        <div key={s.h} style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"6px 0", borderBottom:"1px solid #f8f8f8" }}>
                          <span style={{ color:m.color, fontWeight:700, flexShrink:0, fontSize:12 }}>▸</span>
                          <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#1a1a2e", lineHeight:1.6 }}>{s.h.replace(/^[^\w\s]+\s*/,"")}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                      <button style={btn("primary",{ padding:"8px 18px", fontSize:13, background:"linear-gradient(135deg,"+m.color+",#0d0d2b)" })}
                        onClick={e => { e.stopPropagation(); if (m.free||registered||isAdmin()) { setReadMod(m); } else setPage("register"); }}>
                        {m.free||registered||isAdmin() ? "🧠 Read Module" : "🎓 Enroll to Access"}
                      </button>
                      {(m.free||registered||isAdmin()) && (
                        <>
                          <button style={btn("secondary",{ padding:"8px 14px", fontSize:13 })} onClick={e => { e.stopPropagation(); openQuiz(m.id,"pre"); }}>
                            {preDone[m.id] !== undefined ? "✓ Pre-Test Done" : "📝 Pre-Test"}
                          </button>
                          <button style={btn("secondary",{ padding:"8px 14px", fontSize:13 })} onClick={e => { e.stopPropagation(); openQuiz(m.id,"post"); }}>
                            {postDone[m.id] !== undefined ? `✓ Post-Test ${postDone[m.id]}/5` : "📋 Post-Test"}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div style={{ textAlign:"center", marginTop:20 }}><button style={btn("secondary")} onClick={() => setPage("home")}>← Course Home</button></div>
          </div>
        )}

        {/* ── REGISTER ── */}
        {page === "register" && (
          <div style={{ maxWidth:660, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <span style={bdg}>Enroll</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,36px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:8 }}>Start Learning Today</h1>
              <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:15 }}>Module 1 is completely free.</p>
            </div>
            {!registered ? (
              <div style={{ background:"#fff", borderRadius:18, padding:28, boxShadow:"0 4px 24px rgba(26,35,126,.08)", textAlign:"center" }}>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#5a6a8a", marginBottom:18 }}>Create your LegonMed account to access all 11 modules, per-module quizzes, and your certificate.</p>
                <button style={btn("primary",{ width:"100%", padding:14, background:"linear-gradient(135deg,#1A237E,#283593)" })} onClick={onRegister}>🎓 Register Now →</button>
              </div>
            ) : (
              <div style={{ background:"#fff", borderRadius:18, padding:28, boxShadow:"0 4px 24px rgba(26,35,126,.08)", textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:12 }}>🎉</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#1A237E", marginBottom:8 }}>Welcome, {session?.name?.split(" ")[0]}!</h2>
                <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14.5, lineHeight:1.85, marginBottom:18 }}>You are enrolled. All 11 modules are ready.</p>
                <button style={btn()} onClick={() => setPage("curriculum")}>Go to Curriculum →</button>
              </div>
            )}
          </div>
        )}

        {/* ── QUIZ HUB ── */}
        {page === "quiz" && (
          <div style={{ maxWidth:900, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:32 }}>
              <span style={bdg}>Module Quizzes</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,32px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:8 }}>Pre & Post-Module Assessments</h1>
              <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14 }}>Each module has a 5-question pre-test (baseline) and post-test (certificate progress) · Pass: 3/5</p>
              <div style={{ marginTop:12, fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#1A237E", fontWeight:600 }}>
                Modules passed: {totalPostPass} / {NP_MODS.length}
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:14 }}>
              {NP_MODS.map(m => {
                const preScore = preDone[m.id];
                const postScore = postDone[m.id];
                const canAccess = m.free || registered || isAdmin();
                return (
                  <div key={m.id} style={{ background:"#fff", borderRadius:14, padding:"20px 18px", borderLeft:"5px solid "+m.color, boxShadow:"0 3px 14px rgba(26,35,126,.07)" }}>
                    <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:12 }}>
                      <span style={{ fontSize:20 }}>{m.icon}</span>
                      <div>
                        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:14, fontWeight:700, color:m.color }}>Module {m.num}</div>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#5a6a8a" }}>{m.title}</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                      <button
                        disabled={!canAccess}
                        style={btn("secondary",{ fontSize:12, padding:"6px 12px", opacity: canAccess?1:.5 })}
                        onClick={() => canAccess && openQuiz(m.id,"pre")}>
                        {preScore !== undefined ? `✓ Pre ${preScore}/5` : "Pre-Test"}
                      </button>
                      <button
                        disabled={!canAccess}
                        style={btn(postScore >= 3 ? "primary" : "secondary",{
                          fontSize:12, padding:"6px 12px", opacity: canAccess?1:.5,
                          background: postScore >= 3 ? "linear-gradient(135deg,#0a7c4a,#1B5E20)" : undefined
                        })}
                        onClick={() => canAccess && openQuiz(m.id,"post")}>
                        {postScore !== undefined ? `${postScore >= 3 ? "✓ Pass" : "✗ Retry"} ${postScore}/5` : "Post-Test"}
                      </button>
                    </div>
                    {!canAccess && <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#E65100", marginTop:8 }}>🔒 Enroll to access</div>}
                  </div>
                );
              })}
            </div>
            {totalPostPass >= 8 && (
              <div style={{ marginTop:28, background:"linear-gradient(135deg,#1A237E,#283593)", borderRadius:16, padding:24, textAlign:"center", color:"#fff" }}>
                <div style={{ fontSize:36, marginBottom:10 }}>🎓</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, marginBottom:8 }}>Certificate Unlocked!</h3>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, opacity:.88, marginBottom:14 }}>You have passed {totalPostPass} of 11 modules. Your certificate is ready.</p>
                <button style={btn()} onClick={() => setPage("certificate")}>Get Certificate →</button>
              </div>
            )}
            <div style={{ textAlign:"center", marginTop:20 }}><button style={btn("secondary")} onClick={() => setPage("home")}>← Course Home</button></div>
          </div>
        )}

        {/* ── CERTIFICATE ── */}
        {page === "certificate" && (
          <div style={{ maxWidth:860, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <span style={bdg}>Certificate</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,32px)", fontWeight:700, color:"#1a1a2e", marginTop:14 }}>Certificate of Completion</h1>
            </div>
            {totalPostPass < 8 ? (
              <div style={{ background:"#fff", borderRadius:18, padding:28, textAlign:"center", boxShadow:"0 4px 24px rgba(26,35,126,.08)" }}>
                <div style={{ fontSize:42, marginBottom:12 }}>🔒</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, color:"#1A237E", marginBottom:8 }}>Complete at least 8 of 11 module post-tests (pass mark 3/5)</h2>
                <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, marginBottom:18 }}>You have passed {totalPostPass} / 11 modules so far.</p>
                <button style={btn()} onClick={() => setPage("quiz")}>Go to Quizzes →</button>
              </div>
            ) : (
              <div>
                <div style={{ background:"#fff", borderRadius:18, padding:"42px 38px", boxShadow:"0 8px 40px rgba(26,35,126,.12)", border:"3px solid #C5CAE9", textAlign:"center" }}>
                  <div style={{ display:"flex", justifyContent:"center", marginBottom:12 }}><UGLogo size={64} /></div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", color:"#1A237E", marginBottom:5 }}>LegonMed Medical School</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:13, color:"#5a6a8a", marginBottom:9 }}>This is to certify that</div>
                  <div style={{ margin:"0 auto 9px", maxWidth:460 }}>
                    <input
                      style={{ width:"100%", padding:"8px 0", textAlign:"center", fontFamily:"'Playfair Display',serif", fontSize:21, fontWeight:700, color:"#1a1a2e", border:"none", borderBottom:"2px solid #C5CAE9", borderRadius:0, background:"transparent", outline:"none" }}
                      placeholder="Enter your full name"
                      value={certName}
                      onChange={e => setCertName(e.target.value)}
                    />
                  </div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:13, color:"#5a6a8a", marginBottom:5 }}>has successfully completed</div>
                  <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(17px,3vw,26px)", fontWeight:700, color:"#1a1a2e", marginBottom:4 }}>Drugs & the Brain</h2>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#1A237E", marginBottom:4 }}>Neuropharmacology · LegonMed Medical School</div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#5a6a8a", marginBottom:18 }}>Modules passed: {totalPostPass} / 11</div>
                  <div style={{ display:"flex", justifyContent:"center", gap:32, marginBottom:20, flexWrap:"wrap" }}>
                    {["Prof. K.K.E. Kukuia\nFounder, LegonMed","[Co-Signatory]\nLegonMed Medical School","[Co-Signatory]\nCourse Director"].map((sig,i) => (
                      <div key={i} style={{ textAlign:"center" }}>
                        <div style={{ borderTop:"1px solid #C5CAE9", paddingTop:7, fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#5a6a8a", whiteSpace:"pre-line" }}>{sig}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#5a6a8a" }}>
                    Date: {new Date().toLocaleDateString("en-GB",{ day:"numeric", month:"long", year:"numeric" })} · LegonMed Digital Certificate
                  </div>
                </div>
                <div style={{ textAlign:"center", marginTop:18 }}>
                  <button style={btn("primary",{ background:"linear-gradient(135deg,#1A237E,#283593)" })} onClick={() => window.print()}>🖨 Print / Save as PDF</button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      <footer style={{ background:"#0d0d2b", color:"rgba(255,255,255,.7)", padding:"24px", marginTop:40, textAlign:"center", fontFamily:"'Source Sans 3',sans-serif", fontSize:12 }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:900, color:"#fff", marginBottom:4 }}>Legon<span style={{ color:"#C5CAE9" }}>Med</span> Medical School</div>
        Drugs & the Brain · Neuropharmacology · © 2025 LegonMed · Evidence: Goodman & Gilman · Rang & Dale · Stahl's Essential Psychopharmacology · Katzung
      </footer>
    </div>
  );
}

export default NPCourse;