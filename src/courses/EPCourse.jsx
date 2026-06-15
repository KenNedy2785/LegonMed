import { useState } from 'react';
import { C, RC, RL, btn, bdg, inp, UGLogo, DB, isAdmin } from '../shared.jsx';
import { Quiz, ModuleReader } from '../SharedUI.jsx';
import {
  EP_MODS,
  EP_PRE_Q_M1, EP_POST_Q_M1,
  EP_PRE_Q_M2, EP_POST_Q_M2,
  EP_PRE_Q_M3, EP_POST_Q_M3,
  EP_PRE_Q_M4, EP_POST_Q_M4,
  EP_PRE_Q_M5, EP_POST_Q_M5,
  EP_PRE_Q_M6, EP_POST_Q_M6,
} from '../data/ep_data.js';

const QUIZ_BANKS = {
  1:{pre:EP_PRE_Q_M1, post:EP_POST_Q_M1},
  2:{pre:EP_PRE_Q_M2, post:EP_POST_Q_M2},
  3:{pre:EP_PRE_Q_M3, post:EP_POST_Q_M3},
  4:{pre:EP_PRE_Q_M4, post:EP_POST_Q_M4},
  5:{pre:EP_PRE_Q_M5, post:EP_POST_Q_M5},
  6:{pre:EP_PRE_Q_M6, post:EP_POST_Q_M6},
};

const COURSE_COLOR = "#922B21";

export default function EPCourse({ session, registered, onBack, onRegister, onGoHome }) {
  const [view, setView] = useState("home");
  const [activeMod, setActiveMod] = useState(null);
  const [quizStage, setQuizStage] = useState("pre");
  const [ans, setAns] = useState({});
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(null);

  const userRole = session?.profession || "";

  function openModule(mod){
    setActiveMod(mod);
    setView("reader");
  }

  function openQuiz(mod, stage){
    setActiveMod(mod);
    setQuizStage(stage);
    setAns({});
    setDone(false);
    setScore(null);
    setView("quiz");
  }

  function submitQuiz(){
    const bank = QUIZ_BANKS[activeMod.id][quizStage];
    let s=0;
    bank.forEach((q,i)=>{ if(ans[i]===q.ans) s++; });
    setScore(s);
    setDone(true);
    if(session) DB.push("completions",{...session, course:"ectopic-pregnancy", module:activeMod.id, stage:quizStage, score:s, total:bank.length});
  }

  if(view==="reader" && activeMod){
    return <ModuleReader mod={activeMod} userRole={userRole} onClose={()=>setView("home")}/>;
  }

  if(view==="quiz" && activeMod){
    const bank = QUIZ_BANKS[activeMod.id][quizStage];
    return (
      <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
        <div style={{background:`linear-gradient(135deg,${C.dark},${activeMod.color})`,padding:"18px 24px"}}>
          <div style={{maxWidth:800,margin:"0 auto"}}>
            <div style={{color:C.gold,fontFamily:"'Source Sans 3',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>
              Module {activeMod.num} · {quizStage==="pre"?"Pre-Test":"Post-Test"}
            </div>
            <h2 style={{color:"#fff",fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,3vw,22px)"}}>{activeMod.icon} {activeMod.title}</h2>
          </div>
        </div>
        <div style={{maxWidth:800,margin:"0 auto",padding:"38px 24px 80px"}}>
          {done ? (
            <div style={{background:"#fff",borderRadius:18,padding:28,textAlign:"center",boxShadow:"0 4px 24px rgba(0,48,135,.08)",marginBottom:20}}>
              <div style={{fontSize:48,marginBottom:12}}>{score>=Math.ceil(bank.length*0.6)?"🏆":"📚"}</div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:22,color:C.blue,marginBottom:8}}>
                {quizStage==="pre"?"Baseline":"Score"}: {score}/{bank.length}
              </h2>
              <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginTop:16}}>
                {quizStage==="pre" && <button style={btn()} onClick={()=>openModule(activeMod)}>�� Read Module →</button>}
                {quizStage==="post" && <button style={btn()} onClick={()=>setView("home")}>← Back to Course</button>}
                <button style={btn("secondary")} onClick={()=>setView("home")}>Course Home</button>
              </div>
            </div>
          ):(
            <Quiz qs={bank} ans={ans} setAns={setAns} done={done} onSubmit={submitQuiz} onSkip={()=>setView("home")}/>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>

      <div style={{background:`linear-gradient(140deg,${C.dark},${COURSE_COLOR},#3d0f0f)`,padding:"60px 24px 50px",textAlign:"center"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"center",marginBottom:16}}><UGLogo size={70}/></div>
          <span style={bdg}>🏥 Obstetrics · LegonMed Clinical Medicine Institute</span>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(28px,5.5vw,52px)",fontWeight:900,color:"#fff",lineHeight:1.1,margin:"16px 0 8px"}}>Ectopic Pregnancy</h1>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(13px,2.5vw,20px)",fontWeight:400,color:C.gold,marginBottom:14,fontStyle:"italic"}}>From Diagnosis to Definitive Care</h2>
          <p style={{color:"rgba(255,255,255,.82)",fontSize:"clamp(13px,2vw,16px)",maxWidth:640,margin:"0 auto",lineHeight:1.8,fontFamily:"'Source Sans 3',sans-serif"}}>
            Risk factors, diagnosis, medical and surgical management, special situations, and emergency care for one of early pregnancy's most time-critical conditions. Module 1 is free.
          </p>
          <div style={{display:"flex",gap:20,justifyContent:"center",marginTop:30,flexWrap:"wrap"}}>
            {[["6","Modules"],["15h","Content"],["35","Lessons"],["Free","Module 1"]].map(([n,l])=>(
              <div key={l} style={{textAlign:"center"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:900,color:C.gold}}>{n}</div>
                <div style={{color:"rgba(255,255,255,.6)",fontSize:11,fontFamily:"'Source Sans 3',sans-serif",letterSpacing:1.5,textTransform:"uppercase"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"40px 24px"}}>
        {EP_MODS.map(m=>{
          const locked = !m.free && !registered && !isAdmin();
          return (
            <div key={m.id} style={{background:"#fff",borderRadius:14,padding:"22px 20px",marginBottom:16,borderLeft:"6px solid "+m.color,boxShadow:"0 3px 16px rgba(0,48,135,.07)"}}>
              <div style={{display:"flex",gap:12,alignItems:"flex-start",flexWrap:"wrap",justifyContent:"space-between"}}>
                <div style={{display:"flex",gap:12,alignItems:"flex-start",flex:1,minWidth:240}}>
                  <div style={{background:m.color+"18",borderRadius:10,padding:"9px 12px",fontSize:22,flexShrink:0}}>{m.icon}</div>
                  <div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:4,alignItems:"center"}}>
                      <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:C.muted}}>Module {m.num} · {m.dur} · {m.lessons} lessons</span>
                      {m.free && <span style={{background:C.ok,color:"#fff",padding:"2px 8px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif"}}>FREE</span>}
                    </div>
                    <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,2.5vw,19px)",color:m.color,marginBottom:3}}>{m.title}</h3>
                    <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,color:m.color,fontWeight:600,marginBottom:4}}>{m.sub}</div>
                    <p style={{fontFamily:"'Georgia',serif",fontSize:13,color:C.muted,lineHeight:1.7,fontStyle:"italic"}}>{m.tagline}</p>
                  </div>
                </div>
              </div>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:16}}>
                {locked ? (
                  <button style={btn("primary",{padding:"8px 18px",fontSize:13})} onClick={onRegister}>🎓 Enroll to Access</button>
                ):(
                  <>
                    <button style={btn("secondary",{padding:"8px 18px",fontSize:13})} onClick={()=>openQuiz(m,"pre")}>📝 Pre-Test</button>
                    <button style={btn("primary",{padding:"8px 18px",fontSize:13})} onClick={()=>openModule(m)}>📖 Read Module</button>
                    <button style={btn("secondary",{padding:"8px 18px",fontSize:13})} onClick={()=>openQuiz(m,"post")}>🎯 Post-Test</button>
                  </>
                )}
              </div>
            </div>
          );
        })}
        <div style={{textAlign:"center",marginTop:20}}>
          <button style={btn("secondary")} onClick={onBack}>← Back to Obstetrics</button>
        </div>
      </div>

      <footer style={{background:C.dark,color:"rgba(255,255,255,.7)",padding:"24px",marginTop:30,textAlign:"center",fontFamily:"'Source Sans 3',sans-serif",fontSize:12}}>
        <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:900,color:"#fff",marginBottom:4}}>Legon<span style={{color:C.gold}}>Med</span></div>
        Ectopic Pregnancy · From Diagnosis to Definitive Care · © 2025 LegonMed
      </footer>
    </div>
  );
}
