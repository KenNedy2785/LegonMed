// ─────────────── NOTIFY PAGE ───────────────
function NotifyPage({onBack}){
  const [nf,setNf]=useState({name:"",email:"",profession:"",country:"",topics:[]});
  const [done,setDone]=useState(false);
  const submit=()=>{if(!nf.name||!nf.email)return;DB.push("subscribers",nf);setDone(true);};
  return(
    <div style={{background:C.off,minHeight:"100vh"}}>
      <div style={{maxWidth:660,margin:"0 auto",padding:"52px 24px"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <span style={bdg}>Stay Updated</span>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(24px,4vw,40px)",fontWeight:900,color:C.dark,marginTop:14,marginBottom:10}}>Be the First to Know</h1>
          <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:15,maxWidth:500,margin:"0 auto"}}>LegonMed is growing. New courses across all 9 pillars — with early-bird pricing for subscribers.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:10,marginBottom:28}}>
          {PILLARS.map(p=>(
            <div key={p.id} style={{background:"#fff",borderRadius:12,padding:"14px 10px",textAlign:"center",boxShadow:"0 2px 10px rgba(0,48,135,.06)",borderTop:"3px solid "+p.color}}>
              <div style={{fontSize:22,marginBottom:6}}>{p.icon}</div>
              <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,fontWeight:700,color:p.color,lineHeight:1.4}}>{p.name}</div>
            </div>
          ))}
        </div>
        {!done?(
          <div style={{background:"#fff",borderRadius:18,padding:28,boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
            <div style={{display:"grid",gap:14}}>
              {[["Full Name","name","text","Your complete name"],["Email Address","email","email","We only email on new launches"]].map(([l,k,t,ph])=>(
                <div key={k}>
                  <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:6}}>{l} *</label>
                  <input style={inp()} type={t} placeholder={ph} value={nf[k]} onChange={e=>setNf({...nf,[k]:e.target.value})}/>
                </div>
              ))}
              <div>
                <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:6}}>Profession</label>
                <select style={inp()} value={nf.profession} onChange={e=>setNf({...nf,profession:e.target.value})}>
                  <option value="">-- Select --</option>
                  {Object.entries(RL).map(([k,l])=><option key={k} value={k}>{l.slice(3)}</option>)}
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:6}}>Country</label>
                <input style={inp()} type="text" placeholder="Your country" value={nf.country} onChange={e=>setNf({...nf,country:e.target.value})}/>
              </div>
              <div>
                <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:8}}>Pillars of interest</label>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}}>
                  {PILLARS.map(p=>(
                    <label key={p.id} style={{display:"flex",gap:7,alignItems:"center",fontFamily:"'Source Sans 3',sans-serif",fontSize:12.5,color:C.txt,cursor:"pointer",padding:"7px 10px",border:"1px solid #dde6f0",borderRadius:8}}>
                      <input type="checkbox" onChange={e=>setNf(prev=>({...prev,topics:e.target.checked?[...prev.topics,p.name]:prev.topics.filter(x=>x!==p.name)}))}/>
                      {p.icon} {p.name}
                    </label>
                  ))}
                </div>
              </div>
              <button style={btn("primary",{width:"100%",padding:14})} onClick={submit}>🔔 Subscribe to Updates</button>
              <p style={{textAlign:"center",fontSize:12,color:C.muted,fontFamily:"'Source Sans 3',sans-serif"}}>No spam. Only genuine course announcements. Unsubscribe anytime.</p>
            </div>
          </div>
        ):(
          <div style={{background:"#fff",borderRadius:18,padding:30,textAlign:"center",boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
            <div style={{fontSize:52,marginBottom:14}}>🔔</div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:24,color:C.blue,marginBottom:10}}>You're on the List!</h2>
            <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:15,lineHeight:1.85,maxWidth:420,margin:"0 auto 22px"}}><strong>{nf.name.split(" ")[0]}</strong>, you'll be first to know when new LegonMed courses go live — with exclusive early-bird pricing.</p>
            <button style={btn()} onClick={onBack}>Back to Platform 🏠</button>
          </div>
        )}
      </div>
    </div>
  );
}

