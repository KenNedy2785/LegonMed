import { useState } from 'react';
import { C, RC, RL, btn, inp, UGLogo, DB } from './shared.jsx';

const CALLOUT_CFG={
  exam:{bg:"#fff8e1",border:"#f9a825",icon:"📝",label:"Exam Pearl"},
  clinical:{bg:"#e8f5e9",border:"#2e7d32",icon:"🏥",label:"Clinical Tip"},
  practical:{bg:"#e3f2fd",border:"#1565c0",icon:"🔬",label:"Practical Note"},
};

function Callout({item,userRole}){
  const cfg=CALLOUT_CFG[item.type]||CALLOUT_CFG.clinical;
  const rc=RC[item.role]||C.blue;
  const isOwn=userRole===item.role;
  return(
    <div style={{background:isOwn?cfg.bg:cfg.bg+"88",border:"1.5px solid "+(isOwn?cfg.border:cfg.border+"88"),borderRadius:10,padding:"12px 16px",marginBottom:10,borderLeft:"4px solid "+rc,opacity:isOwn?1:0.72}}>
      <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
        <span style={{fontSize:15}}>{cfg.icon}</span>
        <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:rc}}>
          {item.role.charAt(0).toUpperCase()+item.role.slice(1)} — {cfg.label}
          {isOwn&&<span style={{marginLeft:8,background:rc,color:"#fff",padding:"1px 8px",borderRadius:20,fontSize:10}}>For You</span>}
        </span>
      </div>
      <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13.5,color:C.txt,lineHeight:1.75,margin:0}}>{item.text}</p>
    </div>
  );
}

function useTTS(){
  const [speaking,setSpeaking]=useState(false);
  const [paused,setPaused]=useState(false);
  const [rate,setRate]=useState(1);
  const speak=(text)=>{
    if(!window.speechSynthesis)return;
    window.speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.rate=rate;u.lang="en-GB";
    u.onstart=()=>{setSpeaking(true);setPaused(false);};
    u.onend=()=>{setSpeaking(false);setPaused(false);};
    window.speechSynthesis.speak(u);
  };
  const pause=()=>{window.speechSynthesis.pause();setPaused(true);};
  const resume=()=>{window.speechSynthesis.resume();setPaused(false);};
  const stop=()=>{window.speechSynthesis.cancel();setSpeaking(false);setPaused(false);};
  return{speak,pause,resume,stop,speaking,paused,rate,setRate};
}

function AudioBar({text,label,color}){
  const{speak,pause,resume,stop,speaking,paused,rate,setRate}=useTTS();
  if(typeof window==="undefined"||!("speechSynthesis" in window))return null;
  return(
    <div style={{background:color+"0d",border:"1px solid "+color+"30",borderRadius:10,padding:"10px 16px",marginBottom:16,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
      <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color,fontWeight:700,letterSpacing:1,textTransform:"uppercase",flexShrink:0}}>🔊 Listen</span>
      {!speaking
        ?<button onClick={()=>speak(text)} style={{background:color,color:"#fff",border:"none",borderRadius:6,padding:"5px 14px",fontSize:12.5,cursor:"pointer",fontFamily:"'Source Sans 3',sans-serif",fontWeight:600}}>▶ Play {label}</button>
        :<>
          {!paused
            ?<button onClick={pause} style={{background:"#555",color:"#fff",border:"none",borderRadius:6,padding:"5px 14px",fontSize:12.5,cursor:"pointer"}}>⏸</button>
            :<button onClick={resume} style={{background:color,color:"#fff",border:"none",borderRadius:6,padding:"5px 14px",fontSize:12.5,cursor:"pointer"}}>▶</button>}
          <button onClick={stop} style={{background:C.err,color:"#fff",border:"none",borderRadius:6,padding:"5px 14px",fontSize:12.5,cursor:"pointer"}}>⏹</button>
        </>}
      <div style={{display:"flex",gap:5,marginLeft:"auto",alignItems:"center"}}>
        <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:C.muted}}>Speed:</span>
        {[0.8,1,1.25,1.5]?.map(r=><button key={r} onClick={()=>setRate(r)} style={{background:rate===r?color:"#f0f4ff",color:rate===r?"#fff":C.muted,border:"none",borderRadius:5,padding:"3px 7px",fontSize:11,cursor:"pointer"}}>{r}×</button>)}
      </div>
    </div>
  );
}

function Quiz({qs,ans,setAns,done,onSubmit,onSkip}){
  return(
    <div>
      {qs?.map((q,qi)=>(
        <div key={qi} style={{background:"#fff",borderRadius:18,padding:28,marginBottom:20,boxShadow:"0 4px 20px rgba(0,48,135,.08)"}}>
          <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:C.gold,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>Q {qi+1} of {qs.length}</div>
          <p style={{fontFamily:"'Georgia',serif",fontSize:16,color:C.txt,lineHeight:1.85,marginBottom:18}}>{q.q}</p>
          {q.opts?.map((opt,oi)=>{
            let bg="#fff",border="2px solid #dde6f0",col=C.txt;
            if(done){
              if(oi===q.ans){bg="#e8f8f0";border="2px solid "+C.ok;col=C.ok;}
              else if(ans[qi]===oi){bg="#fdf0f0";border="2px solid "+C.err;col=C.err;}
            }else if(ans[qi]===oi){bg=C.bg;border="2px solid "+C.blue;col=C.blue;}
            return(
              <div key={oi} onClick={()=>!done&&setAns({...ans,[qi]:oi})}
                style={{padding:"13px 18px",borderRadius:10,cursor:done?"default":"pointer",marginBottom:8,background:bg,border,color:col,fontFamily:"'Source Sans 3',sans-serif",fontSize:14,transition:"all .18s"}}>
                <span style={{fontWeight:700,marginRight:10,color:C.blue}}>{String.fromCharCode(65+oi)}.</span>{opt}
              </div>
            );
          })}
        </div>
      ))}
      {!done&&(
        <div style={{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"}}>
          <button style={btn("primary")} onClick={onSubmit} disabled={Object.keys(ans).length<qs.length}>Submit Answers</button>
          {onSkip&&<button style={btn("secondary")} onClick={onSkip}>Skip for now →</button>}
        </div>
      )}
    </div>
  );
}



function ModuleReader({mod,userRole,onClose,onDownload}){
  const [expSec,setExpSec]=useState(null);
  const fullText=[mod.title,mod.sub,mod.tagline,mod.story,...mod.sections.flatMap(s=>[s.h,s.a||"",s.c,"Key points: "+s.kp.join(". ")])].join(". ");

  function dlModule(){
    const lines=["LEGONMED — STORM IN THE WOMB","University of Ghana Medical School Collaboration","=".repeat(60),"","MODULE "+mod.num+": "+mod.title.toUpperCase(),mod.sub,mod.tagline,"","-".repeat(60),"OPENING SCENARIO","-".repeat(60),mod.story,""];
    mod.sections.forEach(s=>{
      lines.push("",s.h,"-".repeat(48));
      if(s.a)lines.push("ANALOGY:","",s.a,"");
      lines.push(s.c,"","KEY POINTS:");
      s.kp.forEach((k,i)=>lines.push("  "+(i+1)+". "+k));
    });
    lines.push("","EVIDENCE BASE","-".repeat(48),mod.ev,"","Downloaded: "+new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}),"© LegonMed · UGMS Collaboration");
    const blob=new Blob([lines.join("\n")],{type:"text/plain"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="LegonMed_"+mod.title.replace(/\s+/g,"_")+".txt";a.click();
  }

  return(
    <div style={{fontFamily:"'Georgia',serif",background:C.off,minHeight:"100vh"}}>
      {/* Sticky header */}
      <div style={{background:`linear-gradient(135deg,${C.dark},${mod.color})`,padding:"18px 24px",position:"sticky",top:0,zIndex:100,boxShadow:"0 4px 20px rgba(0,0,0,.25)"}}>
        <div style={{maxWidth:860,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{color:C.gold,fontFamily:"'Source Sans 3',sans-serif",fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>Module {mod.num} · {mod.dur} · {mod.lessons} lessons</div>
            <h2 style={{color:"#fff",fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,3vw,22px)"}}>{mod.icon} {mod.title} — {mod.sub}</h2>
          </div>
          <div style={{display:"flex",gap:9,flexWrap:"wrap"}}>
            <button style={btn("primary",{padding:"8px 16px",fontSize:13})} onClick={dlModule}>⬇ Download</button>
            <button style={{...btn("secondary",{padding:"8px 14px",fontSize:13}),color:"#fff",borderColor:"#fff"}} onClick={onClose}>✕ Close</button>
          </div>
        </div>
      </div>

      <div style={{maxWidth:860,margin:"0 auto",padding:"38px 24px 80px"}}>
        {/* Tagline */}
        <div style={{borderLeft:"5px solid "+mod.color,borderRadius:"0 12px 12px 0",background:mod.color+"12",padding:"18px 22px",marginBottom:20}}>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:mod.color,fontStyle:"italic"}}>{mod.tagline}</p>
        </div>

        <AudioBar text={fullText} label="Full Module" color={mod.color}/>

        {/* Role badge */}
        {userRole&&(
          <div style={{background:RC[userRole]+"12",border:"1px solid "+RC[userRole]+"30",borderRadius:10,padding:"10px 16px",marginBottom:20,display:"flex",gap:10,alignItems:"center"}}>
            <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13.5,color:RC[userRole],fontWeight:700}}>Viewing as: {RL[userRole]}</span>
            <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:C.muted}}>— your role-specific notes are highlighted</span>
          </div>
        )}

        {/* Opening story */}
        <div style={{background:"#fff",borderRadius:18,padding:30,marginBottom:34,border:"1px solid "+C.blue+"18",boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
          <div style={{color:C.gold,fontFamily:"'Source Sans 3',sans-serif",fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>📖 Opening Clinical Scenario</div>
          {mod.story.split("\n\n")?.map((p,i)=><p key={i} style={{fontFamily:"'Georgia',serif",fontSize:15.5,lineHeight:2,color:C.txt,marginBottom:14,fontStyle:"italic"}}>{p}</p>)}
        </div>

        {/* Sections */}
        {mod.sections?.map((sec,si)=>{
          const key=mod.id+"-"+si;
          const open=expSec===key;
          const secText=[sec.h,sec.a||"",sec.c,"Key points: "+sec.kp.join(". ")].join(". ");
          const myCallouts=(sec.callouts||[]).filter(cl=>cl.role===userRole);
          const otherCallouts=(sec.callouts||[]).filter(cl=>cl.role!==userRole);
          return(
            <div key={si} style={{background:"#fff",borderRadius:18,padding:26,marginBottom:22,border:"1px solid "+mod.color+"1a",boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",cursor:"pointer",gap:12}} onClick={()=>setExpSec(open?null:key)}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(15px,2.5vw,20px)",color:mod.color,flex:1,lineHeight:1.3}}>{sec.h}</h3>
                <span style={{color:C.muted,fontSize:20,flexShrink:0}}>{open?"▲":"▼"}</span>
              </div>
              {open&&(
                <div style={{marginTop:22}}>
                  <AudioBar text={secText} label="Section" color={mod.color}/>
                  {sec.a&&(
                    <div style={{background:C.gold+"11",border:"1px solid "+C.gold+"38",borderRadius:12,padding:"17px 22px",marginBottom:22}}>
                      <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:C.gd,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>🎯 Clinical Analogy</div>
                      <p style={{fontFamily:"'Georgia',serif",fontSize:15,lineHeight:1.95,color:C.txt,fontStyle:"italic"}}>{sec.a}</p>
                    </div>
                  )}
                  {sec.c.split("\n\n")?.map((para,pi)=><p key={pi} style={{fontFamily:"'Georgia',serif",fontSize:15,lineHeight:1.95,color:C.txt,marginBottom:14,whiteSpace:"pre-line"}}>{para.trim()}</p>)}
                  <div style={{background:mod.color+"09",borderRadius:12,padding:"17px 22px",marginTop:20,border:"1px solid "+mod.color+"20"}}>
                    <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:mod.color,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>📌 Key Learning Points</div>
                    {sec.kp?.map((kp,ki)=>(
                      <div key={ki} style={{display:"flex",gap:11,marginBottom:10,alignItems:"flex-start"}}>
                        <span style={{color:C.gold,fontWeight:700,fontSize:14,flexShrink:0}}>✦</span>
                        <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:14,color:C.txt,lineHeight:1.7}}>{kp}</span>
                      </div>
                    ))}
                  </div>
                  {sec.callouts&&sec.callouts.length>0&&(
                    <div style={{marginTop:20}}>
                      <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:C.muted,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>🗂 Role-Specific Notes</div>
                      {myCallouts?.map((cl,i)=><Callout key={"my"+i} item={cl} userRole={userRole}/>)}
                      {otherCallouts?.map((cl,i)=><Callout key={"ot"+i} item={cl} userRole={userRole}/>)}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Evidence */}
        <div style={{background:C.bg,borderRadius:12,padding:"16px 22px",marginBottom:30}}>
          <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:C.blue,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginRight:12}}>📚 Evidence Base</span>
          <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:14,color:C.txt,lineHeight:1.8}}>{mod.ev}</span>
        </div>

        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
          <button style={btn()} onClick={dlModule}>⬇ Download Notes</button>
          <button style={btn("secondary")} onClick={onClose}>← Back to Course</button>
        </div>
      </div>
    </div>
  );
}

export { Callout, AudioBar, Quiz, ModuleReader };
