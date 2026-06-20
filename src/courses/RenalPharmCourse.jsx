import { useState, useEffect } from 'react';
import { C, btn, bdg, inp, UGLogo, DB, isAdmin } from '../shared.jsx';
import { Quiz, ModuleReader } from '../SharedUI.jsx';
import { RENP_MODS, RENP_PRE_Q, RENP_POST_Q, RENP_ROLES, RENP_RC } from '../data/renp_data.js';

function RenalPharmCourse({ session, registered, onBack, onRegister, onGoHome }) {
  const [page, setPage] = useState("home");
  const [readMod, setReadMod] = useState(null);
  const [expMod, setExpMod] = useState(null);
  const [roleTab, setRoleTab] = useState("all");
  const [preAns, setPreAns] = useState({});
  const [postAns, setPostAns] = useState({});
  const [preDone, setPreDone] = useState(false);
  const [postDone, setPostDone] = useState(false);
  const [preScore, setPreScore] = useState(null);
  const [postScore, setPostScore] = useState(null);
  const [certName, setCertName] = useState(session?.name || "");
  const [scrolled, setScrolled] = useState(false);
  const [mob, setMob] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [page, readMod]);

  const userRole = session?.profession || "";

  const PLANS = [
    { id:"full", label:"Full Course", ghc:350, usd:35, features:["All 16 Modules","Downloadable Notes","Pre & Post Tests","Student Discussion Board"] },
    { id:"cert", label:"Course + Certificate", ghc:450, usd:45, featured:true, features:["Everything in Full","Official LegonMed Certificate","3 Signatories","Digital Badge","Verifiable QR Code"] },
    { id:"inst", label:"Institutional (30 seats)", ghc:5000, usd:500, features:["30 Licences","Admin Dashboard","Group Certificates","Priority Support"] },
  ];

  const visibleMods = roleTab === "all" ? RENP_MODS : RENP_MODS.filter(m => m.aud.includes(roleTab));

  function submitPre() { let s = 0; RENP_PRE_Q.forEach((q,i) => { if (preAns[i] === q.ans) s++; }); setPreScore(s); setPreDone(true); }
  function submitPost() { let s = 0; RENP_POST_Q.forEach((q,i) => { if (postAns[i] === q.ans) s++; }); setPostScore(s); setPostDone(true); if (session) DB.push("completions", { ...session, postScore:s, preScore, course:"renp" }); }

  const NAV = [
    { id:"home", l:"Course Home" }, { id:"curriculum", l:"Curriculum" },
    { id:"register", l:"Enroll" }, { id:"pretest", l:"Pre-Test" },
    { id:"posttest", l:"Post-Test" }, { id:"certificate", l:"Certificate" }
  ];

  if (readMod) return <ModuleReader mod={readMod} userRole={userRole} roleLabels={RENP_ROLES} roleColors={RENP_RC} onClose={() => setReadMod(null)} />;

  return (
    <div style={{ fontFamily:"'Georgia',serif", background:"#f8f6f0", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .rp-nl{cursor:pointer;padding:7px 11px;border-radius:6px;transition:all .2s;font-family:'Source Sans 3',sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,.82)}
        .rp-nl:hover,.rp-nl.act{color:#90CAF9;background:rgba(144,202,249,.14)}
        .rp-mob{display:none;background:none;border:none;cursor:pointer;color:#fff;font-size:24px}
        @media(max-width:820px){.rp-dnav{display:none!important}.rp-mob{display:flex!important}}
        button:disabled{opacity:.45;cursor:not-allowed}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:scrolled?"#001a5eee":"#001a5e", backdropFilter:"blur(14px)", borderBottom:"2px solid #003087", transition:"all .3s" }}>
        <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <div style={{ display:"flex", alignItems:"center", gap:11, cursor:"pointer" }} onClick={onGoHome}>
            <UGLogo size={40} />
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:900, color:"#fff" }}>Legon<span style={{ color:"#90CAF9" }}>Med</span></div>
              <div style={{ fontSize:9, color:"#90CAF9", fontFamily:"'Source Sans 3',sans-serif", letterSpacing:"2px", textTransform:"uppercase" }}>Medical School</div>
            </div>
          </div>
          <div className="rp-dnav" style={{ display:"flex", gap:1, alignItems:"center", flexWrap:"wrap", justifyContent:"flex-end" }}>
            <span className="rp-nl" style={{ color:"rgba(144,202,249,.8)", marginRight:8, fontSize:12 }} onClick={onBack}>← Medical School</span>
            {NAV.map(n => <span key={n.id} className={"rp-nl"+(page===n.id?" act":"")} onClick={() => setPage(n.id)}>{n.l}</span>)}
          </div>
          <button className="rp-mob" onClick={() => setMob(!mob)}>☰</button>
        </div>
        {mob && <div style={{ background:"#001a5e", padding:"14px 20px", borderTop:"1px solid #00308728" }}>
          {NAV.map(n => <div key={n.id} className="rp-nl" style={{ display:"block", marginBottom:8 }} onClick={() => { setPage(n.id); setMob(false); }}>{n.l}</div>)}
        </div>}
      </nav>

      <div style={{ paddingTop:64 }}>

        {/* ── HOME ── */}
        {page==="home" && (
          <div>
            <div style={{ background:"linear-gradient(140deg,#001a5e,#003087,#0d47a1)", padding:"88px 24px 68px", textAlign:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-80, right:-80, width:420, height:420, borderRadius:"50%", background:"#90CAF908", pointerEvents:"none" }} />
              <div style={{ position:"absolute", bottom:-60, left:-60, width:300, height:300, borderRadius:"50%", background:"#ffffff05", pointerEvents:"none" }} />
              <div style={{ maxWidth:900, margin:"0 auto", position:"relative" }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:18 }}><UGLogo size={80} /></div>
                <span style={bdg}>🫘 LegonMed Medical School · Pharmacology Pillar 2</span>
                <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(30px,6vw,62px)", fontWeight:900, color:"#fff", lineHeight:1.08, margin:"16px 0 10px" }}>Drugs & the Kidney</h1>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(14px,2.8vw,23px)", fontWeight:400, color:"#90CAF9", marginBottom:18, fontStyle:"italic" }}>Renal Pharmacology</h2>
                <p style={{ color:"rgba(255,255,255,.82)", fontSize:"clamp(14px,2vw,17px)", maxWidth:700, margin:"0 auto 30px", lineHeight:1.9, fontFamily:"'Source Sans 3',sans-serif" }}>
                  From glomerular filtration to dialysis pharmacology — the complete pharmacology of the kidney. Diuretics, RAAS blockade, nephrotoxicity, AKI management, dialysis drug dosing, glomerular disease, and electrolyte emergencies, contextualised to West African clinical practice.
                </p>
                <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
                  <button style={btn("primary",{ fontSize:16, padding:"14px 32px" })} onClick={() => setPage("curriculum")}>🫘 View Curriculum</button>
                  <button style={btn("secondary")} onClick={() => setPage("register")}>🎓 Enroll Now</button>
                </div>
                <div style={{ display:"flex", gap:24, justifyContent:"center", marginTop:44, flexWrap:"wrap" }}>
                  {[["16","Modules"],["36h","Content"],["96","Lessons"],["5","Professions"],["Free","Module 1"]].map(([n,l]) => (
                    <div key={l} style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:32, fontWeight:900, color:"#90CAF9" }}>{n}</div>
                      <div style={{ color:"rgba(255,255,255,.6)", fontSize:11, fontFamily:"'Source Sans 3',sans-serif", letterSpacing:1.5, textTransform:"uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module grid */}
            <div style={{ background:"#fff", padding:"52px 24px" }}>
              <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
                <span style={bdg}>Complete Curriculum</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:32 }}>16 Modules. Filtration to Dialysis.</h2>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:16 }}>
                  {RENP_MODS.map(m => (
                    <div key={m.id} style={{ background:"#e3f2fd", borderRadius:14, padding:"20px 16px", borderLeft:"4px solid "+m.color, textAlign:"left", cursor:"pointer", transition:"all .25s", boxShadow:"0 2px 10px rgba(0,48,135,.06)" }}
                      onMouseOver={e => e.currentTarget.style.transform="translateY(-3px)"}
                      onMouseOut={e => e.currentTarget.style.transform=""}
                      onClick={() => setPage("curriculum")}>
                      <div style={{ fontSize:26, marginBottom:8 }}>{m.icon}</div>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, fontWeight:700, color:m.color, marginBottom:4 }}>Module {m.num}: {m.title}</div>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12.5, color:"#5a6a8a" }}>{m.sub}</div>
                      {m.free && <span style={{ background:"#0a7c4a", color:"#fff", padding:"2px 8px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif", display:"inline-block", marginTop:8 }}>FREE</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role selector */}
            <div style={{ background:"#e3f2fd", padding:"52px 24px" }}>
              <div style={{ maxWidth:1100, margin:"0 auto", textAlign:"center" }}>
                <span style={bdg}>Learning Paths</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:32 }}>Built for Health Sciences Students</h2>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:14 }}>
                  {Object.entries(RENP_ROLES).map(([k,l]) => (
                    <div key={k} onClick={() => { setPage("curriculum"); setRoleTab(k); }}
                      style={{ padding:"20px 14px", borderRadius:14, border:"3px solid "+RENP_RC[k], background:"#fff", cursor:"pointer", textAlign:"center", transition:"all .25s" }}
                      onMouseOver={e => { e.currentTarget.style.background=RENP_RC[k]; e.currentTarget.style.color="#fff"; }}
                      onMouseOut={e => { e.currentTarget.style.background="#fff"; e.currentTarget.style.color=""; }}>
                      <div style={{ fontSize:28, marginBottom:8 }}>{l.split(" ")[0]}</div>
                      <div style={{ fontWeight:700, fontSize:13, fontFamily:"'Source Sans 3',sans-serif", color:RENP_RC[k] }}>{l.slice(3)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div style={{ background:"#fff", padding:"52px 24px" }}>
              <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center" }}>
                <span style={bdg}>Student Pricing</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,34px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:10 }}>Designed for Students</h2>
                <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, marginBottom:28 }}>🇬🇭 Ghana — MoMo · Card · Bank &nbsp;·&nbsp; 🌍 International — All major cards</p>
                <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
                  {PLANS.map(p => (
                    <div key={p.id} style={{ background:"#f8f6f0", borderRadius:18, padding:"28px 20px", boxShadow:"0 4px 20px rgba(0,48,135,.08)", textAlign:"center", position:"relative", border:p.featured?"2px solid #90CAF9":"1px solid #e8edf5" }}>
                      {p.featured && <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:"#90CAF9", color:"#001a5e", padding:"3px 14px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif" }}>⭐ MOST POPULAR</div>}
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:700, color:"#003087", marginBottom:6 }}>{p.label}</div>
                      <div style={{ fontSize:24, fontWeight:900, color:p.featured?"#003087":"#1a1a2e", fontFamily:"'Playfair Display',serif", marginBottom:2 }}>GH₵ {p.ghc}</div>
                      <div style={{ fontSize:12.5, color:"#5a6a8a", marginBottom:12, fontFamily:"'Source Sans 3',sans-serif" }}>${p.usd} International</div>
                      <ul style={{ listStyle:"none", marginBottom:16, textAlign:"left" }}>{p.features.map(f => <li key={f} style={{ padding:"4px 0", fontSize:13, fontFamily:"'Source Sans 3',sans-serif", borderBottom:"1px solid #f0f0f0" }}>✅ {f}</li>)}</ul>
                      <button style={btn(p.featured?"primary":"secondary",{ width:"100%" })} onClick={() => setPage("register")}>Enroll Now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding:"20px", textAlign:"center" }}><button style={btn("secondary")} onClick={onBack}>← Back to Medical School</button></div>
          </div>
        )}

        {/* ── CURRICULUM ── */}
        {page==="curriculum" && (
          <div style={{ maxWidth:1000, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:34 }}>
              <span style={bdg}>Full Curriculum</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,36px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:10 }}>16 Modules · 96 Lessons · 36 Hours</h1>
            </div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center", marginBottom:26 }}>
              <button onClick={() => setRoleTab("all")} style={{ padding:"7px 14px", borderRadius:30, border:"2px solid #003087", background:roleTab==="all"?"#003087":"#fff", color:roleTab==="all"?"#fff":"#003087", fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:600, cursor:"pointer" }}>All</button>
              {Object.entries(RENP_ROLES).map(([k,l]) => (
                <button key={k} onClick={() => setRoleTab(k)} style={{ padding:"7px 14px", borderRadius:30, border:"2px solid "+RENP_RC[k], background:roleTab===k?RENP_RC[k]:"#fff", color:roleTab===k?"#fff":RENP_RC[k], fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:600, cursor:"pointer", transition:"all .2s" }}>{l.split(" ").slice(1).join(" ")}</button>
              ))}
            </div>
            {visibleMods.map(m => (
              <div key={m.id} style={{ background:"#fff", borderRadius:14, padding:"22px 20px", marginBottom:16, borderLeft:"6px solid "+m.color, boxShadow:"0 3px 16px rgba(0,48,135,.07)", transition:"all .25s", cursor:"pointer" }}
                onMouseOver={e => e.currentTarget.style.transform="translateX(4px)"}
                onMouseOut={e => e.currentTarget.style.transform=""}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12, flexWrap:"wrap" }} onClick={() => setExpMod(expMod===m.id?null:m.id)}>
                  <div style={{ display:"flex", gap:12, alignItems:"flex-start", flex:1 }}>
                    <div style={{ background:m.color+"18", borderRadius:10, padding:"9px 12px", fontSize:22, flexShrink:0 }}>{m.icon}</div>
                    <div>
                      <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:4, alignItems:"center" }}>
                        <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#5a6a8a" }}>Module {m.num} · {m.dur} · {m.lessons} lessons</span>
                        {m.free && <span style={{ background:"#0a7c4a", color:"#fff", padding:"2px 8px", borderRadius:20, fontSize:11, fontWeight:700, fontFamily:"'Source Sans 3',sans-serif" }}>FREE</span>}
                      </div>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(15px,2.5vw,19px)", color:m.color, marginBottom:3 }}>{m.title}</h3>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:m.color, fontWeight:600, marginBottom:4 }}>{m.sub}</div>
                      <p style={{ fontFamily:"'Georgia',serif", fontSize:13, color:"#5a6a8a", lineHeight:1.7, fontStyle:"italic" }}>{m.tagline}</p>
                    </div>
                  </div>
                  <span style={{ color:"#5a6a8a", fontSize:18, flexShrink:0 }}>{expMod===m.id?"▲":"▼"}</span>
                </div>
                {expMod===m.id && (
                  <div style={{ marginTop:18, paddingTop:18, borderTop:"1px solid #f0f0f0" }}>
                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:7, marginBottom:16 }}>
                      {m.sections.map(s => (
                        <div key={s.h} style={{ display:"flex", gap:8, alignItems:"flex-start", padding:"6px 0", borderBottom:"1px solid #f8f8f8" }}>
                          <span style={{ color:m.color, fontWeight:700, flexShrink:0, fontSize:12 }}>▸</span>
                          <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#1a1a2e", lineHeight:1.6 }}>{s.h.replace(/^[^\w\s]+\s*/,"")}</span>
                        </div>
                      ))}
                    </div>
                    <button style={btn("primary",{ padding:"8px 18px", fontSize:13, background:"linear-gradient(135deg,"+m.color+",#001a5e)" })}
                      onClick={e => { e.stopPropagation(); if (m.free||registered||isAdmin()) { setReadMod(m); } else setPage("register"); }}>
                      {m.free||registered||isAdmin()?"🫘 Read Module":"🎓 Enroll to Access"}
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div style={{ textAlign:"center", marginTop:20 }}><button style={btn("secondary")} onClick={() => setPage("home")}>← Course Home</button></div>
          </div>
        )}

        {/* ── REGISTER ── */}
        {page==="register" && (
          <div style={{ maxWidth:660, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <span style={bdg}>Enroll</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,4vw,36px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:8 }}>Start Learning Today</h1>
              <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:15 }}>Module 1 is completely free.</p>
            </div>
            {!registered ? (
              <div style={{ background:"#fff", borderRadius:18, padding:28, boxShadow:"0 4px 24px rgba(0,48,135,.08)", textAlign:"center" }}>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#5a6a8a", marginBottom:18 }}>Create your LegonMed account to enroll and track your progress.</p>
                <button style={btn("primary",{ width:"100%", padding:14 })} onClick={onRegister}>🎓 Register Now →</button>
              </div>
            ) : (
              <div style={{ background:"#fff", borderRadius:18, padding:28, boxShadow:"0 4px 24px rgba(0,48,135,.08)", textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:12 }}>🎉</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#003087", marginBottom:8 }}>Welcome, {session?.name?.split(" ")[0]}!</h2>
                <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14.5, lineHeight:1.85, marginBottom:18 }}>You are enrolled. Module 1 is ready now.</p>
                <button style={btn()} onClick={() => setPage("curriculum")}>Go to Curriculum →</button>
              </div>
            )}
          </div>
        )}

        {/* ── PRE-TEST ── */}
        {page==="pretest" && (
          <div style={{ maxWidth:800, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <span style={bdg}>Knowledge Check</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,32px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:8 }}>Pre-Course Assessment</h1>
              <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14 }}>5 questions · Baseline only · No grade</p>
            </div>
            {preDone ? (
              <div style={{ background:"#fff", borderRadius:18, padding:28, textAlign:"center", boxShadow:"0 4px 24px rgba(0,48,135,.08)" }}>
                <div style={{ fontSize:48, marginBottom:12 }}>{preScore>=4?"🏆":preScore>=2?"📚":"🌱"}</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#003087", marginBottom:8 }}>Baseline: {preScore}/5</h2>
                <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14.5, lineHeight:1.85, marginBottom:18 }}>
                  {preScore>=4?"Strong foundation. This course will sharpen your renal pharmacology precision.":"Every concept is built from first principles — you are in exactly the right place."}
                </p>
                <button style={btn()} onClick={() => setPage("curriculum")}>Begin the Course →</button>
              </div>
            ) : (
              <Quiz qs={RENP_PRE_Q} ans={preAns} setAns={setPreAns} done={preDone} onSubmit={submitPre} onSkip={() => { setPreDone(true); setPreScore(0); }} />
            )}
          </div>
        )}

        {/* ── POST-TEST ── */}
        {page==="posttest" && (
          <div style={{ maxWidth:800, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <span style={bdg}>Final Assessment</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,32px)", fontWeight:700, color:"#1a1a2e", marginTop:14, marginBottom:8 }}>Post-Course Assessment</h1>
              <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14 }}>5 clinical scenarios · Pass mark 60% · Required for certificate</p>
            </div>
            {postDone ? (
              <div style={{ background:"#fff", borderRadius:18, padding:28, textAlign:"center", boxShadow:"0 4px 24px rgba(0,48,135,.08)" }}>
                <div style={{ fontSize:48, marginBottom:12 }}>{postScore>=4?"🏆":postScore>=3?"✅":"📚"}</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:postScore>=3?"#0a7c4a":"#003087", marginBottom:8 }}>
                  Score: {postScore}/5 — {postScore>=3?"PASS ✓":"Review Required"}
                </h2>
                {preScore!=null && <p style={{ color:"#5a6a8a", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, marginBottom:12 }}>
                  Pre: {preScore}/5 → Post: {postScore}/5 {postScore>preScore?`(+${postScore-preScore} 🎯)`:""}
                </p>}
                {postScore>=3 && <button style={btn()} onClick={() => setPage("certificate")}>🎓 Get Certificate →</button>}
              </div>
            ) : (
              <Quiz qs={RENP_POST_Q} ans={postAns} setAns={setPostAns} done={postDone} onSubmit={submitPost} onSkip={null} />
            )}
          </div>
        )}

        {/* ── CERTIFICATE ── */}
        {page==="certificate" && (
          <div style={{ maxWidth:820, margin:"0 auto", padding:"48px 24px" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <span style={bdg}>Certificate</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,4vw,32px)", fontWeight:700, color:"#1a1a2e", marginTop:14 }}>Certificate of Completion</h1>
            </div>
            {!postDone||postScore<3 ? (
              <div style={{ background:"#fff", borderRadius:18, padding:28, textAlign:"center", boxShadow:"0 4px 24px rgba(0,48,135,.08)" }}>
                <div style={{ fontSize:42, marginBottom:12 }}>📋</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, color:"#003087", marginBottom:8 }}>Complete the Post-Course Assessment First</h2>
                <button style={btn()} onClick={() => setPage("posttest")}>Take Assessment →</button>
              </div>
            ) : (
              <div>
                <div style={{ background:"#fff", borderRadius:18, padding:"42px 38px", boxShadow:"0 8px 40px rgba(0,48,135,.12)", border:"3px solid #90CAF9", textAlign:"center" }}>
                  <div style={{ display:"flex", justifyContent:"center", marginBottom:12 }}><UGLogo size={64} /></div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, letterSpacing:3, textTransform:"uppercase", color:"#003087", marginBottom:5 }}>LegonMed Medical School</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:13, color:"#5a6a8a", marginBottom:9 }}>This is to certify that</div>
                  <div style={{ margin:"0 auto 9px", maxWidth:460 }}>
                    <input style={{ width:"100%", padding:"8px 0", textAlign:"center", fontFamily:"'Playfair Display',serif", fontSize:21, fontWeight:700, color:"#1a1a2e", border:"none", borderBottom:"2px solid #90CAF9", borderRadius:0, background:"transparent", outline:"none" }}
                      placeholder="Enter your full name" value={certName} onChange={e => setCertName(e.target.value)} />
                  </div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:13, color:"#5a6a8a", marginBottom:5 }}>has successfully completed</div>
                  <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(17px,3vw,26px)", fontWeight:700, color:"#1a1a2e", marginBottom:4 }}>Drugs & the Kidney</h2>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#003087", marginBottom:18 }}>Renal Pharmacology · LegonMed Medical School</div>
                  <div style={{ display:"flex", justifyContent:"center", gap:32, marginBottom:20, flexWrap:"wrap" }}>
                    {["Prof. K.K.E. Kukuia\nFounder, LegonMed","[Co-Signatory]\nLegonMed Medical School","[Co-Signatory]\nCourse Director"].map((sig,i) => (
                      <div key={i} style={{ textAlign:"center" }}>
                        <div style={{ borderTop:"1px solid #90CAF9", paddingTop:7, fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#5a6a8a", whiteSpace:"pre-line" }}>{sig}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#5a6a8a" }}>
                    Date: {new Date().toLocaleDateString("en-GB",{ day:"numeric", month:"long", year:"numeric" })} · LegonMed Digital Certificate
                  </div>
                </div>
                <div style={{ textAlign:"center", marginTop:18 }}>
                  <button style={btn()} onClick={() => window.print()}>🖨 Print / Save as PDF</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer style={{ background:"#001a5e", color:"rgba(255,255,255,.7)", padding:"24px", marginTop:40, textAlign:"center", fontFamily:"'Source Sans 3',sans-serif", fontSize:12 }}>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:900, color:"#fff", marginBottom:4 }}>Legon<span style={{ color:"#90CAF9" }}>Med</span> Medical School</div>
        Drugs & the Kidney · Renal Pharmacology · © 2025 LegonMed · Evidence: KDIGO · Rang & Dale · Goodman & Gilman · BNF · NEJM Landmark Trials
      </footer>
    </div>
  );
}

export default RenalPharmCourse;