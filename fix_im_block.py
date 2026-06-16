import re

file_path = "src/LegonMed_Platform.jsx"

# The replacement block (Clean and verified)
new_block = """  if(view==="course"&&activeCourse==="im") return(
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
      <div style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto', fontFamily: "'Source Sans 3', sans-serif" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', marginBottom: '10px' }}>Internal Medicine</h1>
        <p style={{ color: '#6a6a6a', marginBottom: '30px' }}>Core Clinical Rotations & Practice Modules</p>
        
        {IM_MODS && IM_MODS.map((m) => (
          <button key={m.id} onClick={() => go("module", m)} style={{width:"100%", textAlign:"left", background:"#fff", padding:"15px", marginBottom:"10px", borderRadius:"6px", border:"1px solid #ddd", cursor:"pointer"}}>
            <h4 style={{marginBottom:"5px", color:"#114B5F"}}>{m.num}: {m.title}</h4>
            <p style={{fontSize:"14px", color:"#555"}}>{m.sub}</p>
          </button>
        ))}

        <button onClick={() => go("pillar", PILLARS[1])} style={{ background: '#114B5F', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', marginTop: '20px' }}>
          ← Back
        </button>
      </div>
    </>
  );"""

with open(file_path, 'r') as f:
    content = f.read()

# Pattern to identify the existing IM block and remove it
# It looks for the start of the 'if' and goes until the closing ');'
pattern = r'if\(view==="course"&&activeCourse==="im"\) return\(.*?\);'
content_new = re.sub(pattern, new_block, content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(content_new)

print("Patch applied.")
