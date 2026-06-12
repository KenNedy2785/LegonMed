import { useState, useEffect } from 'react';
import { C, RC, RL, btn, bdg, inp, UGLogo, DB } from '../shared.js';
import { Callout, AudioBar, Quiz, ModuleReader } from '../SharedUI.jsx';
import { MODS, PRE_Q, POST_Q } from '../data/pe_data.js';
function PECourse({session,registered,onBack,onRegister,onGoHome}){
  const [page,setPage]=useState("home");
  const [readMod,setReadMod]=useState(null);
  const [expMod,setExpMod]=useState(null);
  const [roleTab,setRoleTab]=useState("all");
  const [preAns,setPreAns]=useState({});
  const [postAns,setPostAns]=useState({});
  const [preDone,setPreDone]=useState(false);
  const [postDone,setPostDone]=useState(false);
  const [preScore,setPreScore]=useState(null);
  const [postScore,setPostScore]=useState(null);
  const [certName,setCertName]=useState(session?.name||"");
  const [scrolled,setScrolled]=useState(false);
  const [mob,setMob]=useState(false);

  useEffect(()=>{const h=()=>setScrolled(window.scrollY>55);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  useEffect(()=>{window.scrollTo(0,0);},[page,readMod]);

  const userRole=session?.profession||"";
  const isStudent=userRole==="student";

  const PE_PLANS=[
    {id:"full",label:"Full Course",ghc:isStudent?200:350,usd:isStudent?20:35,features:["All 7 Modules","Downloadable Notes","Pre & Post Tests","Discussion Access"]},
    {id:"cert",label:"Course + Certificate",ghc:isStudent?300:500,usd:isStudent?30:50,featured:true,features:["Everything in Full","Official UGMS Certificate","3 Signatories","Digital Badge","Verifiable QR Code"]},
    {id:"inst",label:"Institutional (20 seats)",ghc:4000,usd:400,features:["20 Licences","Admin Dashboard","Group Certificate","Priority Support"]},
  ];

  const visibleMods=roleTab==="all"?MODS:MODS.filter(m=>m.aud.includes(roleTab));

  function submitPre(){let s=0;PRE_Q.forEach((q,i)=>{if(preAns[i]===q.ans)s++;});setPreScore(s);setPreDone(true);}
  function submitPost(){let s=0;POST_Q.forEach((q,i)=>{if(postAns[i]===q.ans)s++;});setPostScore(s);setPostDone(true);
    if(session)DB.push("completions",{...session,postScore:s,preScore,course:"preeclampsia"});}

  const NAV=[{id:"home",l:"Course Home"},{id:"curriculum",l:"Curriculum"},{id:"register",l:"Enroll"},{id:"pretest",l:"Pre-Test"},{id:"posttest",l:"Post-Test"},{id:"certificate",l:"Certificate"}];

  if(readMod) return <ModuleReader mod={readMod} userRole={userRole} onClose={()=>setReadMod(null)}/>;

  return(
    <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}.nl{cursor:pointer;padding:7px 11px;border-radius:6px;transition:all .2s;font-family:'Source Sans 3',sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,.82)}.nl:hover,.nl.act{color:${C.gold};background:rgba(200,169,81,.14)}.mmbtn{display:none;background:none;border:none;cursor:pointer;color:#fff;font-size:24px}@media(max-width:820px){.dnav2{display:none!important}.mmbtn{display:flex!important}}button:disabled{opacity:.45;cursor:not-allowed}`}</style>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?C.dark+"ee":C.dark,backdropFilter:"blur(14px)",borderBottom:"2px solid "+C.gold+"1e",transition:"all .3s"}}>
        <div style={{maxWidth:1300,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
          <div style={{display:"flex",alignItems:"center",gap:11,cursor:"pointer"}} onClick={onGoHome}>
            <UGLogo size={40}/>
            <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:900,color:"#fff"}}>Legon<span style={{color:C.gold}}>Med</span></div><div style={{fontSize:8.5,color:C.gold,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:"2.5px",textTransform:"uppercase"}}>UGMS Collaboration</div></div>
          </div>
          <div className="dnav2" style={{display:"flex",gap:1,alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end"}}>
            <span className="nl" style={{color:"rgba(200,169,81,.8)",marginRight:8,fontSize:12}} onClick={onBack}>← Clinical Medicine</span>
            {NAV.map(n=><span key={n.id} className={"nl"+(page===n.id?" act":"")} onClick={()=>setPage(n.id)}>{n.l}</span>)}
          </div>
          <button className="mmbtn" onClick={()=>setMob(!mob)}>☰</button>
        </div>
        {mob&&<div style={{background:C.dark,padding:"14px 20px",borderTop:"1px solid "+C.gold+"28"}}>
          {NAV.map(n=><div key={n.id} className="nl" style={{display:"block",marginBottom:8}} onClick={()=>{setPage(n.id);setMob(false);}}>{n.l}</div>)}
        </div>}
      </nav>

      <div style={{paddingTop:64}}>
        {/* ── COURSE HOME ── */}
        {page==="home"&&(
          <div>
            <div style={{background:`linear-gradient(140deg,${C.dark},${C.blue},#0a2d7a)`,padding:"88px 24px 68px",textAlign:"center",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-80,right:-80,width:400,height:400,borderRadius:"50%",background:C.gold+"08",pointerEvents:"none"}}/>
              <div style={{maxWidth:900,margin:"0 auto",position:"relative"}}>
                <div style={{display:"flex",justifyContent:"center",marginBottom:18}}><UGLogo size={80}/></div>
                <span style={bdg}>🤝 UGMS · LegonMed Clinical Medicine Institute</span>
                <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(32px,6vw,64px)",fontWeight:900,color:"#fff",lineHeight:1.08,margin:"16px 0 10px"}}>Storm in the Womb</h1>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2.8vw,24px)",fontWeight:400,color:C.gold,marginBottom:18,fontStyle:"italic"}}>A Master Course on Preeclampsia & Eclampsia</h2>
                <p style={{color:"rgba(255,255,255,.82)",fontSize:"clamp(14px,2vw,17px)",maxWidth:660,margin:"0 auto 30px",lineHeight:1.9,fontFamily:"'Source Sans 3',sans-serif"}}>The most comprehensive, evidence-based, multidisciplinary preeclampsia course developed for the African continent and the global healthcare community.</p>
                <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                  <button style={btn("primary",{fontSize:16,padding:"14px 32px"})} onClick={()=>setPage("curriculum")}>📚 View Curriculum</button>
                  <button style={btn("secondary")} onClick={()=>setPage("register")}>🎓 Enroll Now</button>
                </div>
                <div style={{display:"flex",gap:26,justifyContent:"center",marginTop:44,flexWrap:"wrap"}}>
                  {[["7","Modules"],["19h+","Content"],["63","Lessons"],["5","Professions"],["Free","Module 1"]].map(([n,l])=>(
                    <div key={l} style={{textAlign:"center"}}>
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:34,fontWeight:900,color:C.gold}}>{n}</div>
                      <div style={{color:"rgba(255,255,255,.6)",fontSize:11,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:1.5,textTransform:"uppercase"}}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role selector */}
            <div style={{background:"#fff",padding:"52px 24px"}}>
              <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
                <span style={bdg}>Learning Paths</span>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,38px)",fontWeight:700,color:C.dark,marginTop:14,marginBottom:32}}>Select Your Profession</h2>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:14}}>
                  {Object.entries(RL).map(([k,l])=>(
                    <div key={k} onClick={()=>{setPage("curriculum");setRoleTab(k);}}
                      style={{padding:"20px 14px",borderRadius:14,border:"3px solid "+RC[k],background:"#fff",cursor:"pointer",textAlign:"center",transition:"all .25s"}}
                      onMouseOver={e=>{e.currentTarget.style.background=RC[k];e.currentTarget.style.color="#fff";}}
                      onMouseOut={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.color="";}}>
                      <div style={{fontSize:32,marginBottom:8}}>{l.split(" ")[0]}</div>
                      <div style={{fontWeight:700,fontSize:14,fontFamily:"'Source Sans 3',sans-serif",color:RC[k]}}>{l.slice(3)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div style={{background:C.bg,padding:"52px 24px"}}>
              <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center"}}>
                <span style={bdg}>Pricing</span>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,36px)",fontWeight:700,color:C.dark,marginTop:14,marginBottom:10}}>Accessible World-Class Education</h2>
                <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14,marginBottom:32}}>🇬🇭 Ghana — MoMo · Card · Bank &nbsp;·&nbsp; 🌍 International — All major cards</p>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:18,maxWidth:860,margin:"0 auto"}}>
                  {PE_PLANS.map(p=>(
                    <div key={p.id} style={{background:"#fff",borderRadius:18,padding:"30px 22px",boxShadow:"0 6px 24px rgba(0,48,135,.1)",textAlign:"center",position:"relative",border:p.featured?"2px solid "+C.gold:"2px solid transparent"}}>
                      {p.featured&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:C.gold,color:C.dark,padding:"3px 16px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif"}}>⭐ MOST POPULAR</div>}
                      <div style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:C.blue,marginBottom:6}}>{p.label}</div>
                      <div style={{fontSize:26,fontWeight:900,color:p.featured?C.gold:C.dark,fontFamily:"'Playfair Display',serif",marginBottom:2}}>GH₵ {p.ghc}</div>
                      <div style={{fontSize:13,color:C.muted,marginBottom:14,fontFamily:"'Source Sans 3',sans-serif"}}>${p.usd} International</div>
                      <ul style={{listStyle:"none",marginBottom:18,textAlign:"left"}}>{p.features.map(f=><li key={f} style={{padding:"5px 0",fontSize:13.5,fontFamily:"'Source Sans 3',sans-serif",borderBottom:"1px solid #f2f2f2"}}>✅ {f}</li>)}</ul>
                      <button style={btn(p.featured?"primary":"secondary",{width:"100%"})} onClick={()=>setPage("register")}>Enroll Now</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{padding:"20px",textAlign:"center"}}><button style={btn("secondary")} onClick={onBack}>← Back to Clinical Medicine Institute</button></div>
          </div>
        )}

        {/* ── CURRICULUM ── */}
        {page==="curriculum"&&(
          <div style={{maxWidth:1000,margin:"0 auto",padding:"48px 24px"}}>
            <div style={{textAlign:"center",marginBottom:36}}>
              <span style={bdg}>Full Curriculum</span>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:C.dark,marginTop:14,marginBottom:10}}>7 Modules · 63 Lessons · 19+ Hours</h1>
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:28}}>
              {[["all","All Roles"],...Object.entries(RL).map(([k,l])=>[k,l.split(" ").slice(0,2).join(" ")])].map(([k,l])=>(
                <button key={k} onClick={()=>setRoleTab(k)} style={{padding:"8px 16px",borderRadius:30,border:"2px solid "+(k==="all"?C.blue:RC[k]||C.blue),background:roleTab===k?(RC[k]||C.blue):"#fff",color:roleTab===k?"#fff":(RC[k]||C.blue),fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all .2s"}}>{l}</button>
              ))}
            </div>
            {visibleMods.map(m=>(
              <div key={m.id} style={{background:"#fff",borderRadius:14,padding:"22px 20px",marginBottom:16,borderLeft:"6px solid "+m.color,boxShadow:"0 3px 16px rgba(0,48,135,.07)",transition:"all .25s",cursor:"pointer"}}
                onMouseOver={e=>e.currentTarget.style.transform="translateX(4px)"} onMouseOut={e=>e.currentTarget.style.transform=""}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,flexWrap:"wrap"}} onClick={()=>setExpMod(expMod===m.id?null:m.id)}>
                  <div style={{display:"flex",gap:12,alignItems:"flex-start",flex:1}}>
                    <div style={{background:m.color+"14",borderRadius:10,padding:"9px 12px",fontSize:22,flexShrink:0}}>{m.icon}</div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:4,alignItems:"center"}}>
                        <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:C.muted}}>Module {m.num} · {m.dur} · {m.lessons} lessons</span>
                        {m.free&&<span style={{background:C.ok,color:"#fff",padding:"2px 8px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif"}}>FREE</span>}
                      </div>
                      <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,2.5vw,20px)",color:m.color,marginBottom:3}}>{m.title}</h3>
                      <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:m.color,fontWeight:600,marginBottom:4}}>{m.sub}</div>
                      <p style={{fontFamily:"'Georgia',serif",fontSize:13,color:C.muted,lineHeight:1.7,fontStyle:"italic"}}>{m.tagline}</p>
                    </div>
                  </div>
                  <span style={{color:C.muted,fontSize:18,flexShrink:0}}>{expMod===m.id?"▲":"▼"}</span>
                </div>
                {expMod===m.id&&(
                  <div style={{marginTop:18,paddingTop:18,borderTop:"1px solid #f0f0f0"}}>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:7,marginBottom:16}}>
                      {m.sections.map(s=><div key={s.h} style={{display:"flex",gap:8,alignItems:"flex-start",padding:"6px 0",borderBottom:"1px solid #f8f8f8"}}><span style={{color:m.color,fontWeight:700,flexShrink:0,fontSize:12}}>▸</span><span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:C.txt,lineHeight:1.6}}>{s.h.replace(/^[^\w\s]+\s*/,"")}</span></div>)}
                    </div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                      <button style={btn("primary",{padding:"8px 18px",fontSize:13})} onClick={e=>{e.stopPropagation();if(m.free||registered){setReadMod(m);}else setPage("register");}}>
                        {m.free||registered?"📖 Read Module":"🎓 Enroll to Access"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div style={{textAlign:"center",marginTop:20}}><button style={btn("secondary")} onClick={()=>setPage("home")}>← Course Home</button></div>
          </div>
        )}

        {/* ── REGISTER ── */}
        {page==="register"&&(
          <div style={{maxWidth:680,margin:"0 auto",padding:"48px 24px"}}>
            <div style={{textAlign:"center",marginBottom:30}}>
              <span style={bdg}>Enroll</span>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,38px)",fontWeight:700,color:C.dark,marginTop:14,marginBottom:8}}>Join the Movement</h1>
              <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:15}}>Module 1 is completely free. Register once, learn for life.</p>
            </div>
            {!registered?(
              <div style={{background:"#fff",borderRadius:18,padding:30,boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
                <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:14,color:C.muted,marginBottom:20,textAlign:"center"}}>Create your account on the home page to enroll and track your progress.</p>
                <button style={btn("primary",{width:"100%",padding:15})} onClick={onRegister}>🎓 Register Now →</button>
              </div>
            ):(
              <div style={{background:"#fff",borderRadius:18,padding:30,boxShadow:"0 4px 24px rgba(0,48,135,.08)",textAlign:"center"}}>
                <div style={{fontSize:50,marginBottom:14}}>🎉</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.blue,marginBottom:10}}>Welcome, {session?.name?.split(" ")[0]}!</h2>
                <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:15,lineHeight:1.85,marginBottom:20}}>You're enrolled. Module 1 is ready. Upgrade to unlock all 7 modules.</p>
                <button style={btn()} onClick={()=>setPage("curriculum")}>Go to Curriculum →</button>
              </div>
            )}
          </div>
        )}

        {/* ── PRE-TEST ── */}
        {page==="pretest"&&(
          <div style={{maxWidth:800,margin:"0 auto",padding:"48px 24px"}}>
            <div style={{textAlign:"center",marginBottom:30}}>
              <span style={bdg}>Knowledge Check</span>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,34px)",fontWeight:700,color:C.dark,marginTop:14,marginBottom:8}}>Pre-Course Assessment</h1>
              <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14.5}}>5 questions · Establishes your baseline · No grade — just a starting point</p>
            </div>
            {preDone?(
              <div style={{background:"#fff",borderRadius:18,padding:30,textAlign:"center",boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
                <div style={{fontSize:50,marginBottom:14}}>{preScore>=4?"🏆":preScore>=2?"📚":"🌱"}</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.blue,marginBottom:8}}>Baseline: {preScore}/5</h2>
                <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:15,lineHeight:1.85,marginBottom:20}}>{preScore>=4?"Excellent — this course will sharpen your expertise.":preScore>=2?"Good starting point — this course fills the gaps.":"Perfect time to start — this course was built for exactly where you are."}</p>
                <button style={btn()} onClick={()=>setPage("curriculum")}>Begin the Course →</button>
              </div>
            ):(
              <Quiz qs={PRE_Q} ans={preAns} setAns={setPreAns} done={preDone} onSubmit={submitPre} onSkip={()=>{setPreDone(true);setPreScore(0);}}/>
            )}
          </div>
        )}

        {/* ── POST-TEST ── */}
        {page==="posttest"&&(
          <div style={{maxWidth:800,margin:"0 auto",padding:"48px 24px"}}>
            <div style={{textAlign:"center",marginBottom:30}}>
              <span style={bdg}>Final Assessment</span>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,34px)",fontWeight:700,color:C.dark,marginTop:14,marginBottom:8}}>Post-Course Assessment</h1>
              <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14.5}}>5 clinical scenarios · Pass mark 60% (3/5) · Required for certificate</p>
            </div>
            {postDone?(
              <div style={{background:"#fff",borderRadius:18,padding:30,textAlign:"center",boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
                <div style={{fontSize:50,marginBottom:14}}>{postScore>=4?"🏆":postScore>=3?"✅":"📚"}</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:postScore>=3?C.ok:C.blue,marginBottom:8}}>Score: {postScore}/5 — {postScore>=3?"PASS ✓":"Review Required"}</h2>
                {preScore!=null&&<p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14,marginBottom:10}}>Pre: {preScore}/5 → Post: {postScore}/5 {postScore>preScore?`(+${postScore-preScore} 🎯)`:""}</p>}
                {postScore>=3&&<button style={btn()} onClick={()=>setPage("certificate")}>🎓 Get Certificate →</button>}
              </div>
            ):(
              <Quiz qs={POST_Q} ans={postAns} setAns={setPostAns} done={postDone} onSubmit={submitPost} onSkip={null}/>
            )}
          </div>
        )}

        {/* ── CERTIFICATE ── */}
        {page==="certificate"&&(
          <div style={{maxWidth:820,margin:"0 auto",padding:"48px 24px"}}>
            <div style={{textAlign:"center",marginBottom:30}}>
              <span style={bdg}>Certificate</span>
              <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,34px)",fontWeight:700,color:C.dark,marginTop:14}}>Your Certificate of Completion</h1>
            </div>
            {!postDone||postScore<3?(
              <div style={{background:"#fff",borderRadius:18,padding:30,textAlign:"center",boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
                <div style={{fontSize:44,marginBottom:14}}>📋</div>
                <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:C.blue,marginBottom:10}}>Complete the Post-Course Assessment First</h2>
                <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14.5,marginBottom:20}}>Pass mark is 3/5. This ensures your certificate reflects genuine competence.</p>
                <button style={btn()} onClick={()=>setPage("posttest")}>Take Assessment →</button>
              </div>
            ):(
              <div>
                <div style={{background:"#fff",borderRadius:18,padding:"44px 40px",boxShadow:"0 8px 40px rgba(0,48,135,.12)",border:"3px solid "+C.gold,textAlign:"center"}}>
                  <div style={{display:"flex",justifyContent:"center",marginBottom:14}}><UGLogo size={68}/></div>
                  <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:10.5,letterSpacing:3,textTransform:"uppercase",color:C.gold,marginBottom:6}}>LegonMed · UGMS Collaboration</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:C.muted,marginBottom:10}}>This is to certify that</div>
                  <div style={{margin:"0 auto 10px",maxWidth:480}}>
                    <input style={{...inp({textAlign:"center",fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:700,color:C.dark,border:"none",borderBottom:"2px solid "+C.gold,borderRadius:0,background:"transparent"})}} placeholder="Enter your full name" value={certName} onChange={e=>setCertName(e.target.value)}/>
                  </div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,color:C.muted,marginBottom:6}}>has successfully completed</div>
                  <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(18px,3vw,28px)",fontWeight:700,color:C.dark,marginBottom:4}}>Storm in the Womb</h2>
                  <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:C.blue,marginBottom:20}}>A Master Course on Preeclampsia & Eclampsia · LegonMed Clinical Medicine Institute</div>
                  <div style={{display:"flex",justifyContent:"center",gap:36,marginBottom:24,flexWrap:"wrap"}}>
                    {["Prof. K.K.E. Kukuia\nFounder, LegonMed","[Co-Signatory]\nUGMS Collaboration","[Co-Signatory]\nPartner Institution"].map((sig,i)=>(
                      <div key={i} style={{textAlign:"center"}}><div style={{borderTop:"1px solid "+C.gold,paddingTop:8,fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:C.muted,whiteSpace:"pre-line"}}>{sig}</div></div>
                    ))}
                  </div>
                  <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:C.muted}}>Date: {new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})} · LegonMed Digital Certificate · Verifiable at legonmed.edu.gh</div>
                </div>
                <div style={{textAlign:"center",marginTop:20}}>
                  <button style={btn()} onClick={()=>window.print()}>🖨 Print / Save as PDF</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer style={{background:C.dark,color:"rgba(255,255,255,.7)",padding:"28px 24px 18px",marginTop:40}}>
        <div style={{maxWidth:1100,margin:"0 auto",textAlign:"center",fontFamily:"'Source Sans 3',sans-serif",fontSize:12}}>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:900,color:"#fff",marginBottom:5}}>Legon<span style={{color:C.gold}}>Med</span></div>
          Storm in the Womb · Preeclampsia & Eclampsia · © 2025 LegonMed · Evidence: ACOG · ISSHP · NICE · WHO · FIGO
        </div>
      </footer>
    </div>
  );
}
export default PECourse;