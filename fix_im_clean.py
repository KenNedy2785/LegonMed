import os

path = "src/LegonMed_Platform.jsx"
with open(path, "r") as f:
    lines = f.readlines()

# Find the start of 'im' and 'oh' blocks
start_line = -1
end_line = -1

for i, line in enumerate(lines):
    if 'if(view==="course"&&activeCourse==="im")' in line:
        start_line = i
    if 'if(view==="course"&&activeCourse==="oh")' in line:
        end_line = i
        break

if start_line != -1 and end_line != -1:
    new_code = """  if(view==="course"&&activeCourse==="im") return(
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
  );

"""
    lines[start_line:end_line] = [new_code]
    with open(path, "w") as f:
        f.writelines(lines)
    print("SUCCESS: File cleaned and patched.")
else:
    print(f"ERROR: Could not find block boundaries. Start: {start_line}, End: {end_line}")
