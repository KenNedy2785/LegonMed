import { useState, useEffect } from 'react';
import { C, btn, bdg, inp, UGLogo, DB, isAdmin } from '../shared.jsx';
import { Quiz, ModuleReader } from '../SharedUI.jsx';
import {
  EP_MODS,
  EP_PRE_Q_M1, EP_POST_Q_M1,
  EP_PRE_Q_M2, EP_POST_Q_M2,
  EP_PRE_Q_M3, EP_POST_Q_M3,
  EP_PRE_Q_M4, EP_POST_Q_M4,
  EP_PRE_Q_M5, EP_POST_Q_M5,
} from '../data/ep_data.js';

const EP_ROLES = {
  doctor: "🩺 Doctor",
  nurse: "💉 Nurse",
  pharmacist: "💊 Pharmacist",
  labtech: "🔬 Lab Scientist",
  student: "📖 Student",
};

const EP_RC = {
  doctor: "#1565C0",
  nurse: "#880E4F",
  pharmacist: "#1B5E20",
  labtech: "#4A148C",
  student: "#BF360C",
};

const PRE_QS = [EP_PRE_Q_M1, EP_PRE_Q_M2, EP_PRE_Q_M3, EP_PRE_Q_M4, EP_PRE_Q_M5];
const POST_QS = [EP_POST_Q_M1, EP_POST_Q_M2, EP_POST_Q_M3, EP_POST_Q_M4, EP_POST_Q_M5];
const SAMPLE_PRE = PRE_QS.map(qs => qs[0]);
const SAMPLE_POST = POST_QS.map(qs => qs[qs.length - 1]);

function EndocrineCourse({ session, registered, onBack, onRegister, onGoHome }) {
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
    { id: "full", label: "Full Course", ghc: 200, usd: 20, features: ["All 5 Modules", "Downloadable Notes", "Pre & Post Tests", "Discussion Board"] },
    { id: "cert", label: "Course + Certificate", ghc: 280, usd: 28, featured: true, features: ["Everything in Full", "Official LegonMed Certificate", "3 Signatories", "Digital Badge", "Verifiable QR Code"] },
    { id: "inst", label: "Institutional (30 seats)", ghc: 2800, usd: 280, features: ["30 Licences", "Admin Dashboard", "Group Certificates", "Priority Support"] },
  ];

  const visibleMods = roleTab === "all" ? EP_MODS : EP_MODS.filter(m => m.aud.includes(roleTab));

  function submitPre() {
    let s = 0;
    SAMPLE_PRE.forEach((q, i) => { if (preAns[i] === q.ans) s++; });
    setPreScore(s); setPreDone(true);
  }
  function submitPost() {
    let s = 0;
    SAMPLE_POST.forEach((q, i) => { if (postAns[i] === q.ans) s++; });
    setPostScore(s); setPostDone(true);
    if (session) DB.push("completions", { ...session, postScore: s, preScore, course: "ep" });
  }

  const NAV = [
    { id: "home", l: "Course Home" }, { id: "curriculum", l: "Curriculum" },
    { id: "register", l: "Enroll" }, { id: "pretest", l: "Pre-Test" },
    { id: "posttest", l: "Post-Test" }, { id: "certificate", l: "Certificate" }
  ];

  if (readMod) return <ModuleReader mod={readMod} userRole={userRole} roleLabels={EP_ROLES} roleColors={EP_RC} onClose={() => setReadMod(null)} />;

  return (
    <div style={{ fontFamily: "'Georgia',serif", background: "#f8f6f0", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .ep-nl{cursor:pointer;padding:7px 11px;border-radius:6px;transition:all .2s;font-family:'Source Sans 3',sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,.82)}
        .ep-nl:hover,.ep-nl.act{color:#f8bbd0;background:rgba(136,14,79,.18)}
        .ep-mob{display:none;background:none;border:none;cursor:pointer;color:#fff;font-size:24px}
        @media(max-width:820px){.ep-dnav{display:none!important}.ep-mob{display:flex!important}}
        button:disabled{opacity:.45;cursor:not-allowed}
      `}</style>

      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?"#4A0030ee":"#4A0030",backdropFilter:"blur(14px)",borderBottom:"2px solid #f8bbd028",transition:"all .3s" }}>
        <div style={{ maxWidth:1300,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64 }}>
          <div style={{ display:"flex",alignItems:"center",gap:11,cursor:"pointer" }} onClick={onGoHome}>
            <UGLogo size={40} />
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:900,color:"#fff" }}>Legon<span style={{ color:"#f8bbd0" }}>Med</span></div>
              <div style={{ fontSize:9,color:"#f8bbd0",fontFamily:"'Source Sans 3',sans-serif",letterSpacing:"2px",textTransform:"uppercase" }}>Medical School</div>
            </div>
          </div>
          <div className="ep-dnav" style={{ display:"flex",gap:1,alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end" }}>
            <span className="ep-nl" style={{ color:"rgba(248,187,208,.8)",marginRight:8,fontSize:12 }} onClick={onBack}>← Medical School</span>
            {NAV.map(n => <span key={n.id} className={"ep-nl"+(page===n.id?" act":"")} onClick={()=>setPage(n.id)}>{n.l}</span>)}
          </div>
          <button className="ep-mob" onClick={()=>setMob(!mob)}>☰</button>
        </div>
        {mob && <div style={{ background:"#4A0030",padding:"14px 20px",borderTop:"1px solid #f8bbd028" }}>
          {NAV.map(n=><div key={n.id} className="ep-nl" style={{ display:"block",marginBottom:8 }} onClick={()=>{setPage(n.id);setMob(false);}}>{n.l}</div>)}
        </div>}
      </nav>

      <div style={{ paddingTop:64 }}>

        {page==="home" && (
          <div>
            <div style={{ background:"linear-gradient(140deg,#4A0030,#880E4F,#1565C0)",padding:"88px 24px 68px",textAlign:"center",position:"relative",overflow:"hidden" }}>
              <div style={{ position:"absolute",top:-80,right:-80,width:400,height:400,borderRadius:"50%",background:"#f8bbd008",pointerEvents:"none" }} />
              <div style={{ maxWidth:900,margin:"0 auto",position:"relative" }}>
                <div style={{ display:"flex",justifyContent:"center",marginBottom:18 }}><UGLogo size={80} /></div>
                <span style={bdg}>📚 LegonMed Medical School · Pharmacology</span>
                <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,6vw,58px)",fontWeight:900,color:"#fff",lineHeight:1.08,margin:"16px 0 10px" }}>Endocrine Pharmacology</h1>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2.8vw,22px)",fontWeight:400,color:"#f8bbd0",marginBottom:18,fontStyle:"italic" }}>Hormones as Medicine</h2>
                <p style={{ color:"rgba(255,255,255,.82)",fontSize:"clamp(14px,2vw,17px)",maxWidth:680,margin:"0 auto 30px",lineHeight:1.9,fontFamily:"'Source Sans 3',sans-serif" }}>
                  From insulin to bisphosphonates, from the contraceptive pill to GnRH analogues — the complete pharmacology of the endocrine system, evidence-based and contextualised for Ghana.
                </p>
                <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap" }}>
                  <button style={btn("primary",{fontSize:16,padding:"14px 32px",background:"linear-gradient(135deg,#880E4F,#4A0030)"})} onClick={()=>setPage("curriculum")}>📚 View Curriculum</button>
                  <button style={btn("secondary")} onClick={()=>setPage("register")}>🎓 Enroll Now</button>
                </div>
                <div style={{ display:"flex",gap:24,justifyContent:"center",marginTop:44,flexWrap:"wrap" }}>
                  {[["5","Modules"],["12h","Content"],["30","Lessons"],["5","Professions"],["Free","Module 1"]].map(([n,l])=>(
                    <div key={l} style={{ textAlign:"center" }}>
                      <div style={{ fontFamily:"'Playfair Display',serif",fontSize:32,fontWeight:900,color:"#f8bbd0" }}>{n}</div>
                      <div style={{ color:"rgba(255,255,255,.6)",fontSize:11,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:1.5,textTransform:"uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background:"#fff",padding:"52px 24px" }}>
              <div style={{ maxWidth:1100,margin:"0 auto",textAlign:"center" }}>
                <span style={bdg}>Complete Curriculum</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,36px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:32 }}>5 Modules. Glucose to Bone.</h2>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16 }}>
                  {EP_MODS.map(m=>(
                    <div key={m.id} style={{ background:"#f0f4ff",borderRadius:14,padding:"20px 16px",borderLeft:"4px solid "+m.color,textAlign:"left",cursor:"pointer",transition:"all .25s" }}
                      onMouseOver={e=>e.currentTarget.style.transform="translateY(-3px)"}
                      onMouseOut={e=>e.currentTarget.style.transform=""}
                      onClick={()=>setPage("curriculum")}>
                      <div style={{ fontSize:24,marginBottom:8 }}>{m.icon}</div>
                      <div style={{ fontFamily:"'Playfair Display',serif",fontSize:13,fontWeight:700,color:m.color,marginBottom:4 }}>Module {m.num}: {m.title}</div>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:"#5a6a8a" }}>{m.sub}</div>
                      {m.free && <span style={{ background:"#0a7c4a",color:"#fff",padding:"2px 8px",borderRadius:20,fontSize:10,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif",display:"inline-block",marginTop:7 }}>FREE</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background:"#f0f4ff",padding:"52px 24px" }}>
              <div style={{ maxWidth:1100,margin:"0 auto",textAlign:"center" }}>
                <span style={bdg}>Learning Paths</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,34px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:32 }}>Built for Every Health Profession</h2>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:14 }}>
                  {Object.entries(EP_ROLES).map(([k,l])=>(
                    <div key={k} onClick={()=>{setPage("curriculum");setRoleTab(k);}}
                      style={{ padding:"20px 14px",borderRadius:14,border:"3px solid "+EP_RC[k],background:"#fff",cursor:"pointer",textAlign:"center",transition:"all .25s" }}
                      onMouseOver={e=>{e.currentTarget.style.background=EP_RC[k];e.currentTarget.style.color="#fff";}}
                      onMouseOut={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="";}}>
                      <div style={{ fontSize:28,marginBottom:8 }}>{l.split(" ")[0]}</div>
                      <div style={{ fontWeight:700,fontSize:13,fontFamily:"'Source Sans 3',sans-serif",color:EP_RC[k] }}>{l.slice(3)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background:"#fff",padding:"52px 24px" }}>
              <div style={{ maxWidth:860,margin:"0 auto",textAlign:"center" }}>
                <span style={bdg}>Student Pricing</span>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,32px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:10 }}>Designed for Students</h2>
                <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:14,marginBottom:28 }}>🇬🇭 Ghana — MoMo · Card · Bank &nbsp;·&nbsp; 🌍 International — All major cards</p>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16 }}>
                  {PLANS.map(p=>(
                    <div key={p.id} style={{ background:"#f8f6f0",borderRadius:18,padding:"28px 20px",boxShadow:"0 4px 20px rgba(74,0,48,.08)",textAlign:"center",position:"relative",border:p.featured?"2px solid #880E4F":"1px solid #e8edf5" }}>
                      {p.featured && <div style={{ position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:"#880E4F",color:"#fff",padding:"3px 14px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif" }}>⭐ MOST POPULAR</div>}
                      <div style={{ fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,color:"#4A0030",marginBottom:6 }}>{p.label}</div>
                      <div style={{ fontSize:24,fontWeight:900,color:p.featured?"#880E4F":"#1a1a2e",fontFamily:"'Playfair Display',serif",marginBottom:2 }}>GH₵ {p.ghc}</div>
                      <div style={{ fontSize:12.5,color:"#5a6a8a",marginBottom:12,fontFamily:"'Source Sans 3',sans-serif" }}>${p.usd} International</div>
                      <ul style={{ listStyle:"none",marginBottom:16,textAlign:"left" }}>{p.features.map(f=><li key={f} style={{ padding:"4px 0",fontSize:13,fontFamily:"'Source Sans 3',sans-serif",borderBottom:"1px solid #f0f0f0" }}>✅ {f}</li>)}</ul>
                      <button style={btn(p.featured?"primary":"secondary",{width:"100%",background:p.featured?"linear-gradient(135deg,#880E4F,#4A0030)":undefined})} onClick={()=>setPage("register")}>Enroll Now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding:"20px",textAlign:"center" }}><button style={btn("secondary")} onClick={onBack}>← Back to Medical School</button></div>
          </div>
        )}

        {page==="curriculum" && (
          <div style={{ maxWidth:1000,margin:"0 auto",padding:"48px 24px" }}>
            <div style={{ textAlign:"center",marginBottom:34 }}>
              <span style={bdg}>Full Curriculum</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,34px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:10 }}>5 Modules · 30 Lessons · 12 Hours</h1>
            </div>
            <div style={{ display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:26 }}>
              <button onClick={()=>setRoleTab("all")} style={{ padding:"7px 14px",borderRadius:30,border:"2px solid #4A0030",background:roleTab==="all"?"#4A0030":"#fff",color:roleTab==="all"?"#fff":"#4A0030",fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer" }}>All</button>
              {Object.entries(EP_ROLES).map(([k,l])=>(
                <button key={k} onClick={()=>setRoleTab(k)} style={{ padding:"7px 14px",borderRadius:30,border:"2px solid "+EP_RC[k],background:roleTab===k?EP_RC[k]:"#fff",color:roleTab===k?"#fff":EP_RC[k],fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .2s" }}>{l.split(" ").slice(1,3).join(" ")}</button>
              ))}
            </div>
            {visibleMods.map(m=>(
              <div key={m.id} style={{ background:"#fff",borderRadius:14,padding:"22px 20px",marginBottom:16,borderLeft:"6px solid "+m.color,boxShadow:"0 3px 16px rgba(74,0,48,.07)",transition:"all .25s",cursor:"pointer" }}
                onMouseOver={e=>e.currentTarget.style.transform="translateX(4px)"}
                onMouseOut={e=>e.currentTarget.style.transform=""}>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap" }} onClick={()=>setExpMod(expMod===m.id?null:m.id)}>
                  <div style={{ display:"flex",gap:12,alignItems:"flex-start",flex:1 }}>
                    <div style={{ background:m.color+"18",borderRadius:10,padding:"9px 12px",fontSize:22,flexShrink:0 }}>{m.icon}</div>
                    <div>
                      <div style={{ display:"flex",gap:8,flexWrap:"wrap",marginBottom:4,alignItems:"center" }}>
                        <span style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:"#5a6a8a" }}>Module {m.num} · {m.dur} · {m.lessons} lessons</span>
                        {m.free && <span style={{ background:"#0a7c4a",color:"#fff",padding:"2px 8px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif" }}>FREE</span>}
                      </div>
                      <h3 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2.5vw,18px)",color:m.color,marginBottom:3 }}>{m.title}</h3>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:m.color,fontWeight:600,marginBottom:4 }}>{m.sub}</div>
                      <p style={{ fontFamily:"'Georgia',serif",fontSize:13,color:"#5a6a8a",lineHeight:1.7,fontStyle:"italic" }}>{m.tagline}</p>
                    </div>
                  </div>
                  <span style={{ color:"#5a6a8a",fontSize:18,flexShrink:0 }}>{expMod===m.id?"▲":"▼"}</span>
                </div>
                {expMod===m.id && (
                  <div style={{ marginTop:18,paddingTop:18,borderTop:"1px solid #f0f0f0" }}>
                    <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:7,marginBottom:16 }}>
                      {m.sections.map(s=>(
                        <div key={s.h} style={{ display:"flex",gap:8,alignItems:"flex-start",padding:"6px 0",borderBottom:"1px solid #f8f8f8" }}>
                          <span style={{ color:m.color,fontWeight:700,flexShrink:0,fontSize:12 }}>▸</span>
                          <span style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:"#1a1a2e",lineHeight:1.6 }}>{s.h.replace(/^[^\w\s]+\s*/,"")}</span>
                        </div>
                      ))}
                    </div>
                    <button style={btn("primary",{padding:"8px 18px",fontSize:13,background:"linear-gradient(135deg,"+m.color+",#4A0030)"})}
                      onClick={e=>{e.stopPropagation();if(m.free||registered||isAdmin()){setReadMod(m);}else setPage("register");}}>
                      {m.free||registered||isAdmin()?"📖 Read Module":"🎓 Enroll to Access"}
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div style={{ textAlign:"center",marginTop:20 }}><button style={btn("secondary")} onClick={()=>setPage("home")}>← Course Home</button></div>
          </div>
        )}

        {page==="register" && (
          <div style={{ maxWidth:660,margin:"0 auto",padding:"48px 24px" }}>
            <div style={{ textAlign:"center",marginBottom:28 }}>
              <span style={bdg}>Enroll</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,34px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:8 }}>Start Learning Today</h1>
              <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:15 }}>Module 1 — Diabetes Pharmacology — is completely free.</p>
            </div>
            {!registered ? (
              <div style={{ background:"#fff",borderRadius:18,padding:28,boxShadow:"0 4px 24px rgba(74,0,48,.08)",textAlign:"center" }}>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:14,color:"#5a6a8a",marginBottom:18 }}>Create your LegonMed account to enroll and track your progress.</p>
                <button style={btn("primary",{width:"100%",padding:14,background:"linear-gradient(135deg,#880E4F,#4A0030)"})} onClick={onRegister}>🎓 Register Now →</button>
              </div>
            ) : (
              <div style={{ background:"#fff",borderRadius:18,padding:28,boxShadow:"0 4px 24px rgba(74,0,48,.08)",textAlign:"center" }}>
                <div style={{ fontSize:48,marginBottom:12 }}>🎉</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:22,color:"#4A0030",marginBottom:8 }}>Welcome, {session?.name?.split(" ")[0]}!</h2>
                <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:14.5,lineHeight:1.85,marginBottom:18 }}>You are enrolled. Module 1 is ready now.</p>
                <button style={btn()} onClick={()=>setPage("curriculum")}>Go to Curriculum →</button>
              </div>
            )}
          </div>
        )}

        {page==="pretest" && (
          <div style={{ maxWidth:800,margin:"0 auto",padding:"48px 24px" }}>
            <div style={{ textAlign:"center",marginBottom:28 }}>
              <span style={bdg}>Knowledge Check</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,30px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:8 }}>Pre-Course Assessment</h1>
              <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:14 }}>5 questions · One per module · Baseline only · No grade</p>
            </div>
            {preDone ? (
              <div style={{ background:"#fff",borderRadius:18,padding:28,textAlign:"center",boxShadow:"0 4px 24px rgba(74,0,48,.08)" }}>
                <div style={{ fontSize:48,marginBottom:12 }}>{preScore>=5?"🏆":preScore>=3?"📚":"🌱"}</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:22,color:"#4A0030",marginBottom:8 }}>Baseline: {preScore}/5</h2>
                <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:14.5,lineHeight:1.85,marginBottom:18 }}>
                  {preScore>=5?"Strong foundation. This course will sharpen your clinical application.":"Every concept is built from first principles. Let's begin."}
                </p>
                <button style={btn()} onClick={()=>setPage("curriculum")}>Begin the Course →</button>
              </div>
            ) : (
              <Quiz qs={SAMPLE_PRE} ans={preAns} setAns={setPreAns} done={preDone} onSubmit={submitPre} onSkip={()=>{setPreDone(true);setPreScore(0);}} />
            )}
          </div>
        )}

        {page==="posttest" && (
          <div style={{ maxWidth:800,margin:"0 auto",padding:"48px 24px" }}>
            <div style={{ textAlign:"center",marginBottom:28 }}>
              <span style={bdg}>Final Assessment</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,30px)",fontWeight:700,color:"#1a1a2e",marginTop:14,marginBottom:8 }}>Post-Course Assessment</h1>
              <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:14 }}>5 clinical scenarios · Pass mark 60% (≥3/5) · Required for certificate</p>
            </div>
            {postDone ? (
              <div style={{ background:"#fff",borderRadius:18,padding:28,textAlign:"center",boxShadow:"0 4px 24px rgba(74,0,48,.08)" }}>
                <div style={{ fontSize:48,marginBottom:12 }}>{postScore>=5?"🏆":postScore>=3?"✅":"📚"}</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:22,color:postScore>=3?"#0a7c4a":"#4A0030",marginBottom:8 }}>
                  Score: {postScore}/5 — {postScore>=3?"PASS ✓":"Review Required"}
                </h2>
                {preScore!=null && <p style={{ color:"#5a6a8a",fontFamily:"'Source Sans 3',sans-serif",fontSize:14,marginBottom:12 }}>
                  Pre: {preScore}/5 → Post: {postScore}/5 {postScore>preScore?`(+${postScore-preScore} 🎯)`:""}
                </p>}
                {postScore>=3 && <button style={btn()} onClick={()=>setPage("certificate")}>🎓 Get Certificate →</button>}
              </div>
            ) : (
              <Quiz qs={SAMPLE_POST} ans={postAns} setAns={setPostAns} done={postDone} onSubmit={submitPost} onSkip={null} />
            )}
          </div>
        )}

        {page==="certificate" && (
          <div style={{ maxWidth:820,margin:"0 auto",padding:"48px 24px" }}>
            <div style={{ textAlign:"center",marginBottom:28 }}>
              <span style={bdg}>Certificate</span>
              <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,30px)",fontWeight:700,color:"#1a1a2e",marginTop:14 }}>Certificate of Completion</h1>
            </div>
            {!postDone||postScore<3 ? (
              <div style={{ background:"#fff",borderRadius:18,padding:28,textAlign:"center",boxShadow:"0 4px 24px rgba(74,0,48,.08)" }}>
                <div style={{ fontSize:42,marginBottom:12 }}>📋</div>
                <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:20,color:"#4A0030",marginBottom:8 }}>Complete the Post-Course Assessment First</h2>
                <button style={btn()} onClick={()=>setPage("posttest")}>Take Assessment →</button>
              </div>
            ) : (
              <div>
                <div style={{ background:"#fff",borderRadius:18,padding:"42px 38px",boxShadow:"0 8px 40px rgba(74,0,48,.12)",border:"3px solid #880E4F",textAlign:"center" }}>
                  <div style={{ display:"flex",justifyContent:"center",marginBottom:12 }}><UGLogo size={64} /></div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"#880E4F",marginBottom:5 }}>LegonMed Medical School</div>
                  <div style={{ fontFamily:"'Playfair Display',serif",fontSize:13,color:"#5a6a8a",marginBottom:9 }}>This is to certify that</div>
                  <div style={{ margin:"0 auto 9px",maxWidth:460 }}>
                    <input style={{ width:"100%",padding:"8px 0",textAlign:"center",fontFamily:"'Playfair Display',serif",fontSize:21,fontWeight:700,color:"#1a1a2e",border:"none",borderBottom:"2px solid #880E4F",borderRadius:0,background:"transparent",outline:"none" }}
                      placeholder="Enter your full name" value={certName} onChange={e=>setCertName(e.target.value)} />
                  </div>
                  <div style={{ fontFamily:"'Playfair Display',serif",fontSize:13,color:"#5a6a8a",marginBottom:5 }}>has successfully completed</div>
                  <h2 style={{ fontFamily:"'Playfair Display',serif",fontSize:"clamp(16px,3vw,24px)",fontWeight:700,color:"#1a1a2e",marginBottom:4 }}>Endocrine Pharmacology: Hormones as Medicine</h2>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:"#4A0030",marginBottom:18 }}>Pharmacology · LegonMed Medical School · University of Ghana</div>
                  <div style={{ display:"flex",justifyContent:"center",gap:32,marginBottom:20,flexWrap:"wrap" }}>
                    {["Prof. K.K.E. Kukuia\nFounder, LegonMed","[Co-Signatory]\nLegonMed Medical School","[Co-Signatory]\nCourse Director"].map((sig,i)=>(
                      <div key={i} style={{ textAlign:"center" }}>
                        <div style={{ borderTop:"1px solid #880E4F",paddingTop:7,fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:"#5a6a8a",whiteSpace:"pre-line" }}>{sig}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:"#5a6a8a" }}>
                    Date: {new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})} · LegonMed Digital Certificate
                  </div>
                </div>
                <div style={{ textAlign:"center",marginTop:18 }}>
                  <button style={btn()} onClick={()=>window.print()}>🖨 Print / Save as PDF</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer style={{ background:"#4A0030",color:"rgba(255,255,255,.7)",padding:"24px",marginTop:40,textAlign:"center",fontFamily:"'Source Sans 3',sans-serif",fontSize:12 }}>
        <div style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:900,color:"#fff",marginBottom:4 }}>Legon<span style={{ color:"#f8bbd0" }}>Med</span> Medical School</div>
        Endocrine Pharmacology: Hormones as Medicine · © 2025 LegonMed · Evidence: ADA · BTA · Endocrine Society · NICE · BNF
      </footer>
    </div>
  );
}

export default EndocrineCourse;
