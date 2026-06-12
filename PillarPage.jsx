// ─────────────── PILLAR PAGE ───────────────
function PillarPage({pillar,onBack,onEnterCourse,onNotify,scrolled}){
  return(
    <div style={{background:C.off,minHeight:"100vh"}}>
      {/* Hero */}
      <div style={{background:`linear-gradient(135deg,${C.dark},${pillar.color})`,padding:"72px 24px 52px",textAlign:"center"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{fontSize:54,marginBottom:14}}>{pillar.icon}</div>
          <span style={bdg}>Pillar {pillar.num} of 09</span>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(26px,5vw,50px)",fontWeight:900,color:"#fff",margin:"14px 0 10px"}}>LegonMed {pillar.name}</h1>
          <p style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(14px,2.5vw,21px)",color:C.gold,fontStyle:"italic",marginBottom:18}}>{pillar.tagline}</p>
          <p style={{color:"rgba(255,255,255,.82)",fontFamily:"'Source Sans 3',sans-serif",fontSize:15.5,lineHeight:1.9,maxWidth:620,margin:"0 auto"}}>{pillar.desc}</p>
        </div>
      </div>

      {/* Tool features */}
      {pillar.type==="tool"&&pillar.toolFeatures&&(
        <div style={{background:"#fff",padding:"52px 24px"}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:36}}>
              <span style={bdg}>Platform Features</span>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(20px,3.5vw,34px)",fontWeight:700,color:C.dark,marginTop:14}}>What {pillar.name} Does</h2>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:18}}>
              {pillar.toolFeatures.map(f=>(
                <div key={f.name} style={{background:C.bg,borderRadius:14,padding:"22px 18px",borderLeft:"4px solid "+pillar.color}}>
                  <div style={{fontSize:26,marginBottom:8}}>{f.icon}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:C.dark,marginBottom:5}}>{f.name}</div>
                  <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13.5,color:C.muted,lineHeight:1.7}}>{f.desc}</p>
                </div>
              ))}
            </div>
            <div style={{textAlign:"center",marginTop:32}}>
              <div style={{display:"inline-block",background:"#fff",borderRadius:18,padding:"28px 36px",boxShadow:"0 4px 24px rgba(0,48,135,.08)",border:"2px solid "+C.gold,textAlign:"center",maxWidth:500}}>
                <div style={{fontSize:38,marginBottom:10}}>🔔</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:20,color:C.dark,marginBottom:8}}>Coming Soon — Join the Waitlist</h3>
                <p style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:14,color:C.muted,lineHeight:1.8,marginBottom:18}}>Be first to access {pillar.name} on launch. Early access and special pricing guaranteed.</p>
                <button style={btn()} onClick={onNotify}>🔔 Join Waitlist</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course categories */}
      {pillar.categories&&pillar.categories.map((cat,ci)=>(
        <div key={cat.name} style={{padding:"48px 24px",background:ci%2===0?"#fff":C.bg}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <div style={{marginBottom:24}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(18px,3vw,28px)",fontWeight:700,color:C.dark,marginBottom:6}}>
                {cat.icon} {cat.name}
              </h2>
              <div style={{width:50,height:3,background:pillar.color,borderRadius:2}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:14}}>
              {cat.courses.map(c=>{
                const isLive=c.status==="live";
                return(
                  <div key={c.id} style={{background:"#fff",borderRadius:14,padding:"18px 16px",boxShadow:"0 2px 14px rgba(0,48,135,.07)",border:isLive?"2px solid "+pillar.color:"1px solid #e8edf5",transition:"all .25s",cursor:isLive?"pointer":"default",position:"relative"}}
                    onMouseOver={e=>{if(isLive)e.currentTarget.style.transform="translateY(-3px)";}} onMouseOut={e=>{e.currentTarget.style.transform="";}}>
                    {isLive&&<div style={{position:"absolute",top:-10,right:14,background:C.ok,color:"#fff",padding:"3px 11px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif"}}>● LIVE</div>}
                    {c.featured&&<div style={{position:"absolute",top:-10,left:14,background:C.gold,color:C.dark,padding:"3px 11px",borderRadius:20,fontSize:11,fontWeight:700,fontFamily:"'Source Sans 3',sans-serif"}}>⭐ FLAGSHIP</div>}
                    <div style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}}>
                      <span style={{fontSize:22,flexShrink:0}}>{c.icon}</span>
                      <div>
                        <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:isLive?pillar.color:C.txt,marginBottom:2}}>{c.title}</h3>
                        <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:C.muted,fontStyle:"italic"}}>{c.sub}</div>
                      </div>
                    </div>
                    {c.dur&&c.dur!=="tool"&&c.dur!=="self-paced"&&(
                      <div style={{display:"flex",gap:10,marginBottom:10}}>
                        <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:C.muted}}>⏱ {c.dur}</span>
                        {c.modules>0&&<span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:12,color:C.muted}}>📚 {c.modules} modules</span>}
                      </div>
                    )}
                    {isLive
                      ?<button style={btn("primary",{width:"100%",padding:"9px 14px",fontSize:13})} onClick={()=>onEnterCourse(c.id)}>Enter Course →</button>
                      :<button style={{...btn("secondary",{width:"100%",padding:"8px 14px",fontSize:13}),opacity:.85}} onClick={onNotify}>🔔 Notify Me</button>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}

      <div style={{padding:"24px",textAlign:"center"}}>
        <button style={btn("secondary")} onClick={onBack}>← Back to All Pillars</button>
      </div>
    </div>
  );
}

