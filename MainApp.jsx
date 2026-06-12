// ─────────────── MAIN APP ───────────────
export default function LegonMed(){
  const [view,setView]=useState("home"); // home | pillar | course | notify | admin
  const [activePillar,setActivePillar]=useState(null);
  const [activeCourse,setActiveCourse]=useState(null);
  const [scrolled,setScrolled]=useState(false);
  const [mob,setMob]=useState(false);
  const [session,setSession]=useState(()=>{try{return JSON.parse(localStorage.getItem("lm_session"))||null;}catch{return null;}});
  const [registered,setRegistered]=useState(()=>!!localStorage.getItem("lm_session"));
  const [showReg,setShowReg]=useState(false);
  const [reg,setReg]=useState({name:"",email:"",profession:"",country:"",institution:""});

  useEffect(()=>{const h=()=>setScrolled(window.scrollY>55);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);
  useEffect(()=>{window.scrollTo(0,0);},[view,activePillar]);

  const go=(v,pillar=null,courseId=null)=>{setView(v);if(pillar)setActivePillar(pillar);if(courseId)setActiveCourse(courseId);setMob(false);};

  const doRegister=()=>{
    if(!reg.name||!reg.email||!reg.profession||!reg.country)return;
    const r={...reg,id:Date.now(),createdAt:new Date().toISOString()};
    DB.push("registrations",r);
    localStorage.setItem("lm_session",JSON.stringify(r));
    setSession(r);setRegistered(true);setShowReg(false);
  };

  const MAINNAV=[{id:"home",l:"Home"},{id:"notify",l:"🔔 Stay Updated"},{id:"admin",l:"⚙ Admin"}];

  // ── GLOBAL NAV ──
  const Nav=()=>(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrolled?C.dark+"f0":C.dark,backdropFilter:"blur(14px)",borderBottom:"2px solid "+C.gold+"1e",boxShadow:scrolled?"0 4px 24px rgba(0,0,0,.28)":"none",transition:"all .3s"}}>
      <div style={{maxWidth:1300,margin:"0 auto",padding:"0 20px",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <div style={{display:"flex",alignItems:"center",gap:11,cursor:"pointer"}} onClick={()=>go("home")}>
          <UGLogo size={42}/>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:900,color:"#fff",lineHeight:1,letterSpacing:"-.5px"}}>Legon<span style={{color:C.gold}}>Med</span></div>
            <div style={{fontSize:9,color:C.gold,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:"2.5px",textTransform:"uppercase"}}>UGMS Collaboration</div>
          </div>
        </div>
        <div style={{display:"flex",gap:1,alignItems:"center",flexWrap:"wrap",justifyContent:"flex-end"}}>
          {PILLARS.map(p=>(
            <span key={p.id} title={p.name} onClick={()=>go("pillar",p)}
              style={{cursor:"pointer",padding:"7px 9px",borderRadius:6,color:activePillar?.id===p.id&&view==="pillar"?C.gold:"rgba(255,255,255,.78)",fontSize:18,transition:"all .2s",background:activePillar?.id===p.id&&view==="pillar"?"rgba(200,169,81,.14)":"transparent"}}
              onMouseOver={e=>e.currentTarget.style.color=C.gold} onMouseOut={e=>{if(!(activePillar?.id===p.id&&view==="pillar"))e.currentTarget.style.color="rgba(255,255,255,.78)";}}>
              {p.icon}
            </span>
          ))}
          <span style={{width:1,height:28,background:"rgba(255,255,255,.15)",margin:"0 6px"}}/>
          <span onClick={()=>go("notify")} style={{cursor:"pointer",padding:"6px 12px",borderRadius:6,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:"rgba(255,255,255,.8)",transition:"all .2s"}} onMouseOver={e=>e.currentTarget.style.color=C.gold} onMouseOut={e=>e.currentTarget.style.color="rgba(255,255,255,.8)"}>🔔</span>
          <span onClick={()=>go("admin")} style={{cursor:"pointer",padding:"6px 12px",borderRadius:6,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:"rgba(255,255,255,.8)",transition:"all .2s"}} onMouseOver={e=>e.currentTarget.style.color=C.gold} onMouseOut={e=>e.currentTarget.style.color="rgba(255,255,255,.8)"}>⚙</span>
          {session
            ?<span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:C.gold,marginLeft:6}}>👤 {session.name.split(" ")[0]}</span>
            :<button onClick={()=>setShowReg(true)} style={{...btn("primary",{padding:"8px 16px",fontSize:13}),marginLeft:6}}>Sign Up Free</button>}
        </div>
      </div>
    </nav>
  );

  // ── REGISTRATION MODAL ──
  const RegModal=()=>(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.6)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setShowReg(false)}>
      <div style={{background:"#fff",borderRadius:20,padding:"36px 32px",maxWidth:480,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,.3)"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"center",marginBottom:14}}><UGLogo size={52}/></div>
        <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:24,fontWeight:700,color:C.dark,textAlign:"center",marginBottom:6}}>Join LegonMed</h2>
        <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14,textAlign:"center",marginBottom:22}}>Free access to Module 1 of every course</p>
        <div style={{display:"grid",gap:13}}>
          {[["Full Name","name","text","Dr. / Mr. / Mrs. / Ms."],["Email","email","email","Your professional email"],["Institution","institution","text","Hospital / University"]].map(([l,k,t,ph])=>(
            <div key={k}>
              <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:6}}>{l} *</label>
              <input style={inp({padding:"11px 14px"})} type={t} placeholder={ph} value={reg[k]} onChange={e=>setReg({...reg,[k]:e.target.value})}/>
            </div>
          ))}
          <div>
            <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:6}}>Profession *</label>
            <select style={inp({padding:"11px 14px"})} value={reg.profession} onChange={e=>setReg({...reg,profession:e.target.value})}>
              <option value="">-- Select --</option>
              {Object.entries(RL).map(([k,l])=><option key={k} value={k}>{l.slice(3)}</option>)}
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:6}}>Country *</label>
            <input style={inp({padding:"11px 14px"})} type="text" placeholder="Your country" value={reg.country} onChange={e=>setReg({...reg,country:e.target.value})}/>
          </div>
          <button style={btn("primary",{width:"100%",padding:13})} onClick={doRegister}>🎓 Create Free Account →</button>
          <button style={{background:"none",border:"none",color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,cursor:"pointer",textAlign:"center"}} onClick={()=>setShowReg(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );

  // ── GLOBAL FOOTER ──
  const Footer=()=>(
    <footer style={{background:C.dark,color:"rgba(255,255,255,.7)",padding:"48px 24px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:28,marginBottom:32}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}><UGLogo size={38}/><div style={{fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:900,color:"#fff"}}>Legon<span style={{color:C.gold}}>Med</span></div></div>
            <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,lineHeight:1.85}}>An independent academic platform conceived by Prof. Kennedy Kwami Edem Kukuia, University of Ghana Medical School — fostering healthcare education across Africa and the world.</p>
          </div>
          <div>
            <div style={{color:C.gold,fontFamily:"'Source Sans 3',sans-serif",fontSize:10.5,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase",marginBottom:12}}>The 9 Pillars</div>
            {PILLARS.map(p=><div key={p.id} style={{cursor:"pointer",marginBottom:6,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,transition:"color .2s"}} onClick={()=>go("pillar",p)} onMouseOver={e=>e.target.style.color=C.gold} onMouseOut={e=>e.target.style.color="rgba(255,255,255,.7)"}>{p.icon} {p.name}</div>)}
          </div>
          <div>
            <div style={{color:C.gold,fontFamily:"'Source Sans 3',sans-serif",fontSize:10.5,fontWeight:700,letterSpacing:2.5,textTransform:"uppercase",marginBottom:12}}>Contact</div>
            <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,lineHeight:2.2}}>
              <div>📍 University of Ghana Medical School, Legon, Accra</div>
              <div>📧 info@legonmed.edu.gh</div>
              <div>🌐 www.legonmed.edu.gh</div>
            </div>
          </div>
        </div>
        <div style={{borderTop:"1px solid "+C.gold+"22",paddingTop:16,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,fontFamily:"'Source Sans 3',sans-serif",fontSize:12}}>
          <span>© 2025 LegonMed. All rights reserved. Prof. Kennedy Kwami Edem Kukuia, Founder & Visionary.</span>
          <span>Evidence base: ACOG · ISSHP · NICE · WHO · FIGO · Cochrane</span>
        </div>
      </div>
    </footer>
  );

  // ── ROUTING ──
  if(view==="course"&&activeCourse==="oh") return(
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
      <OHCourse session={session} registered={registered} onBack={()=>go("pillar",PILLARS[0])} onRegister={()=>setShowReg(true)} onGoHome={()=>go("home")}/>
      {showReg&&<RegModal/>}
    </>
  );

  if(view==="course") return(
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
      <PECourse session={session} registered={registered} onBack={()=>go("pillar",PILLARS[0])} onRegister={()=>setShowReg(true)} onGoHome={()=>go("home")}/>
      {showReg&&<RegModal/>}
    </>
  );

  if(view==="pillar"&&activePillar) return(
    <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
      <Nav/>
      <div style={{paddingTop:64}}>
        <PillarPage pillar={activePillar} scrolled={scrolled}
          onBack={()=>go("home")}
          onEnterCourse={(id)=>go("course",null,id)}
          onNotify={()=>go("notify")}/>
      </div>
      <Footer/>
      {showReg&&<RegModal/>}
    </div>
  );

  if(view==="notify") return(
    <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>
      <Nav/>
      <div style={{paddingTop:64}}><NotifyPage onBack={()=>go("home")}/></div>
      <Footer/>
    </div>
  );

  if(view==="admin") return(
    <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
      <Nav/>
      <div style={{paddingTop:80}}><AdminPage onBack={()=>go("home")}/></div>
      <Footer/>
    </div>
  );

  // ── HOME PAGE ──
  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",background:C.off,minHeight:"100vh",color:C.txt}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .pcrd{background:#fff;border-radius:20px;padding:26px 20px;box-shadow:0 4px 22px rgba(0,48,135,.09);border-top:5px solid;transition:all .3s;cursor:pointer}
        .pcrd:hover{transform:translateY(-6px);box-shadow:0 12px 36px rgba(0,48,135,.16)}
        button:disabled{opacity:.45;cursor:not-allowed}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
        .pulse{animation:pulse 2.2s infinite}
      `}</style>
      <Nav/>
      <div style={{paddingTop:64}}>

        {/* HERO */}
        <div style={{background:`linear-gradient(140deg,${C.dark} 0%,#0a1f6e 40%,#0d3085 70%,${C.blue} 100%)`,padding:"96px 24px 80px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-100,right:-100,width:500,height:500,borderRadius:"50%",background:C.gold+"06",border:"1px solid "+C.gold+"1a",pointerEvents:"none"}}/>
          <div style={{position:"absolute",bottom:-60,left:-60,width:300,height:300,borderRadius:"50%",background:C.gold+"04",pointerEvents:"none"}}/>
          <div style={{maxWidth:1000,margin:"0 auto",textAlign:"center",position:"relative"}}>
            <div style={{display:"flex",justifyContent:"center",marginBottom:22}}><UGLogo size={96}/></div>
            <span style={bdg}>🌍 UGMS · Africa's Healthcare Education Ecosystem</span>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(38px,7.5vw,80px)",fontWeight:900,color:"#fff",lineHeight:1.03,margin:"18px 0 12px"}}>
              Legon<span style={{color:C.gold}}>Med</span>
            </h1>
            <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,2.8vw,26px)",color:C.gold,fontStyle:"italic",marginBottom:18}}>
              The World's Leading Healthcare Education Ecosystem
            </p>
            <p style={{color:"rgba(255,255,255,.82)",fontSize:"clamp(14px,2vw,17.5px)",maxWidth:720,margin:"0 auto 38px",lineHeight:1.9,fontFamily:"'Source Sans 3',sans-serif"}}>
              Medical school. Pharmacology institute. Clinical simulator. AI tutor. Skills lab. Research hub. Competency passport. CPD. All in one platform — built in Africa, for the world.
            </p>
            <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
              <button style={btn("primary",{fontSize:16,padding:"16px 38px"})} className="pulse" onClick={()=>go("course")}>
                🎓 Start Learning Free →
              </button>
              <button style={btn("secondary",{fontSize:15,padding:"15px 28px"})} onClick={()=>document.getElementById("pillars").scrollIntoView({behavior:"smooth"})}>
                Explore the Platform ↓
              </button>
            </div>
            <div style={{display:"flex",gap:28,justifyContent:"center",marginTop:52,flexWrap:"wrap"}}>
              {[["9","Pillars"],["100+","Courses Planned"],["5","Professions"],["1","Live Now"],["Free","To Start"]].map(([n,l])=>(
                <div key={l} style={{textAlign:"center"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:C.gold}}>{n}</div>
                  <div style={{color:"rgba(255,255,255,.6)",fontSize:10.5,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:1.5,textTransform:"uppercase"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MISSION STRIP */}
        <div style={{background:`linear-gradient(135deg,${C.blue}08,${C.gold}06)`,borderTop:"3px solid "+C.gold,borderBottom:"1px solid "+C.blue+"18",padding:"22px"}}>
          <div style={{maxWidth:880,margin:"0 auto",textAlign:"center"}}>
            <p style={{fontFamily:"'Georgia',serif",fontSize:"clamp(13px,2vw,16px)",color:C.txt,lineHeight:2.05,fontStyle:"italic"}}>"LegonMed will not be another online course platform. It will combine the strengths of traditional universities, medical schools, simulation centres, AI tutors, competency-based education systems, and professional credentialing into a single intelligent platform."</p>
            <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12.5,color:C.gold,marginTop:9,fontWeight:700,letterSpacing:1}}>— PROF. KENNEDY KWAMI EDEM KUKUIA · FOUNDER & VISIONARY</div>
          </div>
        </div>

        {/* 9 PILLARS */}
        <div id="pillars" style={{background:"#fff",padding:"68px 24px"}}>
          <div style={{maxWidth:1200,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:48}}>
              <span style={bdg}>The Platform</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,48px)",fontWeight:900,color:C.dark,marginTop:14,marginBottom:12}}>9 Pillars. One Ecosystem.</h2>
              <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:15.5,maxWidth:640,margin:"0 auto",lineHeight:1.85}}>Every dimension of healthcare education — from medical school to AI tutor to competency passport — in a single intelligent platform.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(295px,1fr))",gap:20}}>
              {PILLARS.map(p=>{
                const total=p.categories?.reduce((s,c)=>s+c.courses.length,0)||0;
                const live=p.categories?.reduce((s,c)=>s+c.courses.filter(co=>co.status==="live").length,0)||0;
                return(
                  <div key={p.id} className="pcrd" style={{borderTopColor:p.color}} onClick={()=>go("pillar",p)}>
                    <div style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:12}}>
                      <span style={{fontSize:34}}>{p.icon}</span>
                      <div>
                        <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:10.5,fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:C.muted,marginBottom:3}}>Pillar {p.num}</div>
                        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,2vw,19px)",fontWeight:700,color:C.dark,lineHeight:1.2}}>LegonMed<br/>{p.name}</h3>
                      </div>
                    </div>
                    <p style={{fontFamily:"'Georgia',serif",fontSize:13,color:C.muted,lineHeight:1.7,marginBottom:14,fontStyle:"italic"}}>{p.tagline}</p>
                    <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                      {live>0&&<span style={{background:C.ok+"18",color:C.ok,padding:"3px 9px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif"}}>● {live} Live</span>}
                      {total>0&&<span style={{background:C.bg,color:C.blue,padding:"3px 9px",borderRadius:20,fontSize:11,fontFamily:"'Source Sans 3',sans-serif"}}>{total} {p.type==="tool"?"modules":"courses"}</span>}
                      <span style={{marginLeft:"auto",color:p.color,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700}}>Explore →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SPOTLIGHT — LIVE COURSE */}
        <div style={{background:`linear-gradient(135deg,${C.dark},${C.blue})`,padding:"68px 24px"}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:38}}>
              <span style={bdg}>Now Live · Clinical Medicine Institute</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,44px)",fontWeight:900,color:"#fff",marginTop:14,marginBottom:10}}>Storm in the Womb</h2>
              <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2.5vw,21px)",color:C.gold,fontStyle:"italic",marginBottom:14}}>A Master Course on Preeclampsia & Eclampsia</p>
              <p style={{color:"rgba(255,255,255,.78)",fontFamily:"'Source Sans 3',sans-serif",fontSize:15,maxWidth:620,margin:"0 auto 28px",lineHeight:1.9}}>Evidence-based. Adventure storytelling. Role-specific teaching for all 5 professions. Module 1 is completely free.</p>
              <div style={{display:"flex",gap:18,justifyContent:"center",marginBottom:32,flexWrap:"wrap"}}>
                {[["7","Modules"],["19h+","Content"],["Free","Module 1"],["5","Professions"]].map(([n,l])=>(
                  <div key={l} style={{textAlign:"center"}}><div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,3vw,32px)",fontWeight:900,color:C.gold}}>{n}</div><div style={{color:"rgba(255,255,255,.55)",fontSize:10,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:1.2,textTransform:"uppercase"}}>{l}</div></div>
                ))}
              </div>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
                <button style={btn("primary",{fontSize:15,padding:"14px 34px"})} onClick={()=>go("course")}>🎓 Enter Course — Free →</button>
                <button style={btn("secondary",{fontSize:14})} onClick={()=>go("pillar",PILLARS[0])}>View All Clinical Courses</button>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:12}}>
              {MODS.map(m=>(
                <div key={m.id} style={{background:"rgba(255,255,255,.07)",borderRadius:12,padding:"16px 14px",border:"1px solid rgba(200,169,81,.18)",cursor:"pointer",transition:"all .22s"}}
                  onMouseOver={e=>{e.currentTarget.style.background="rgba(255,255,255,.13)";}} onMouseOut={e=>{e.currentTarget.style.background="rgba(255,255,255,.07)";}}
                  onClick={()=>go("course")}>
                  <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6}}>
                    <span style={{fontSize:18}}>{m.icon}</span>
                    <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:10.5,color:C.gold,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase"}}>Mod {m.num} {m.free?"· FREE":""}</span>
                  </div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:14,fontWeight:700,color:"#fff",marginBottom:3}}>{m.title}</div>
                  <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:"rgba(255,255,255,.58)"}}>{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHO IS THIS FOR */}
        <div style={{background:C.bg,padding:"68px 24px"}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:40}}>
              <span style={bdg}>Learning Paths</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,40px)",fontWeight:900,color:C.dark,marginTop:14}}>Built for Every Healthcare Professional</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:16}}>
              {Object.entries(RL).map(([k,l])=>(
                <div key={k} style={{background:"#fff",borderRadius:14,padding:"20px 14px",textAlign:"center",boxShadow:"0 2px 14px rgba(0,48,135,.07)",border:"2px solid "+RC[k]+"28",cursor:"pointer",transition:"all .25s"}}
                  onMouseOver={e=>{e.currentTarget.style.borderColor=RC[k];e.currentTarget.style.transform="translateY(-3px)";}} onMouseOut={e=>{e.currentTarget.style.borderColor=RC[k]+"28";e.currentTarget.style.transform="";}}
                  onClick={()=>go("course")}>
                  <div style={{fontSize:34,marginBottom:9}}>{l.split(" ")[0]}</div>
                  <div style={{fontWeight:700,fontSize:14,fontFamily:"'Source Sans 3',sans-serif",color:RC[k],marginBottom:5}}>{l.slice(3)}</div>
                  <div style={{fontSize:11.5,color:C.muted,fontFamily:"'Source Sans 3',sans-serif"}}>Role-personalised learning</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IMPACT STATS */}
        <div style={{background:`linear-gradient(135deg,${C.dark},${C.blue})`,padding:"68px 24px"}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:40}}>
              <span style={bdg}>Why This Matters</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,40px)",fontWeight:900,color:"#fff",marginTop:14,marginBottom:10}}>The Burden We Are Fighting</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:16}}>
              {[["1 in 11 min","A woman dies from preeclampsia globally","WHO 2023"],["16%","Of maternal deaths in sub-Saharan Africa are PE-related","Lancet Global Health 2022"],["62%","Reduction in preterm PE with aspirin 150mg nocte","ASPRE Trial, NEJM 2017"],["4×","Increased lifetime hypertension risk after PE pregnancy","ESC 2024"],["<10%","Of sub-Saharan Africa has access to appropriate medical education","UNESCO 2023"],["1B+","People in Africa who need better-trained healthcare professionals","WHO 2024"]].map(([n,l,s])=>(
                <div key={n} style={{background:"rgba(255,255,255,.06)",borderRadius:14,padding:"22px 18px",border:"1px solid rgba(200,169,81,.18)",textAlign:"center"}}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,3.5vw,36px)",fontWeight:900,color:C.gold,marginBottom:8}}>{n}</div>
                  <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13.5,color:"rgba(255,255,255,.82)",lineHeight:1.7,marginBottom:7}}>{l}</p>
                  <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:"rgba(200,169,81,.6)",fontStyle:"italic"}}>{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA STRIP */}
        <div style={{background:C.gold,padding:"60px 24px",textAlign:"center"}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,4vw,40px)",fontWeight:900,color:C.dark,marginBottom:10}}>The Future of African Healthcare Education Starts Here</h2>
          <p style={{color:C.dark,fontSize:15.5,marginBottom:28,fontFamily:"'Source Sans 3',sans-serif",opacity:.85,maxWidth:580,margin:"0 auto 28px",lineHeight:1.85}}>Join healthcare professionals and students across Africa and beyond. Module 1 is free. Forever.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button style={btn("primary",{background:C.dark,color:C.gold,fontSize:15,padding:"15px 40px"})} onClick={()=>go("course")}>🎓 Start Learning Free Today</button>
            <button style={{...btn("secondary",{fontSize:14,padding:"14px 26px"}),color:C.dark,borderColor:C.dark}} onClick={()=>go("notify")}>🔔 Stay Updated</button>
          </div>
        </div>

      </div>
      <Footer/>
      {showReg&&<RegModal/>}
    </div>
  );
}


