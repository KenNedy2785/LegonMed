import re

PLATFORM = "src/LegonMed_Platform.jsx"
MS_DATA = "src/data/ms_data.js"
MS_COURSE = "src/courses/MSSepsisCourse.jsx"

# ── 1. Read source files ──
with open(PLATFORM, "r", encoding="utf-8") as f:
    platform = f.read()

with open(MS_DATA, "r", encoding="utf-8") as f:
    ms_data = f.read()

with open(MS_COURSE, "r", encoding="utf-8") as f:
    ms_course = f.read()

# ── 2. Flip status:"soon" -> status:"live" for ms course ──
platform, n = re.subn(
    r'\{id:"ms",title:"Maternal Sepsis",sub:"The Silent Invasion",status:"soon"',
    '{id:"ms",title:"Maternal Sepsis",sub:"The Silent Invasion",status:"live"',
    platform
)
if n != 1:
    raise SystemExit("ERROR: could not find ms course card line (status soon). Aborting, no changes written.")

# ── 3. Add routing block for activeCourse==="ms" (mirror the oh block) ──
routing_anchor = '  if(view==="course"&&activeCourse==="oh") return('
if routing_anchor not in platform:
    raise SystemExit("ERROR: could not find oh routing anchor. Aborting.")

ms_routing_block = '''  if(view==="course"&&activeCourse==="ms") return(
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}button:disabled{opacity:.45;cursor:not-allowed}`}</style>
      <MSSepsisCourse session={session} registered={registered} onBack={()=>go("pillar",PILLARS[0])} onRegister={()=>setShowReg(true)} onGoHome={()=>go("home")}/>
      {showReg&&<RegModal/>}
    </>
  );
'''

platform = platform.replace(routing_anchor, ms_routing_block + routing_anchor, 1)

# ── 4. Prepare ms_data.js content for inlining ──
# Strip the leading comment line and import/export statements -> convert exports to const
ms_data_clean = ms_data
# remove the placeholder comment line
ms_data_clean = re.sub(r'^//.*\n', '', ms_data_clean, count=1)
# convert "export const X = " -> "const X = "
ms_data_clean = re.sub(r'^export const ', 'const ', ms_data_clean, flags=re.MULTILINE)

# ── 5. Prepare MSSepsisCourse.jsx content for inlining ──
ms_course_clean = ms_course
# remove leading comment line
ms_course_clean = re.sub(r'^//.*\n', '', ms_course_clean, count=1)
# remove import lines (everything up to and including the MS_MODS import)
ms_course_clean = re.sub(
    r"^import \{ useState, useEffect \} from 'react';\n"
    r"import \{ C, RC, RL, btn, bdg, inp, UGLogo, DB \} from '\.\./shared\.js';\n"
    r"import \{ Quiz, ModuleReader \} from '\.\./SharedUI\.jsx';\n"
    r"import \{ MS_MODS, MS_PRE_Q, MS_POST_Q \} from '\.\./data/ms_data\.js';\n",
    "",
    ms_course_clean,
    flags=re.MULTILINE
)
# remove trailing "export default MSSepsisCourse;"
ms_course_clean = re.sub(r'\nexport default MSSepsisCourse;\s*$', '', ms_course_clean)

# ── 6. Append data + component to end of platform file ──
addition = "\n\n// ====== MATERNAL SEPSIS COURSE (auto-integrated) ======\n"
addition += ms_data_clean.rstrip() + "\n\n"
addition += ms_course_clean.rstrip() + "\n"

platform = platform.rstrip() + "\n" + addition

# ── 7. Write back ──
with open(PLATFORM, "w", encoding="utf-8") as f:
    f.write(platform)

print("Patch applied successfully.")
print("- status flipped to live for 'ms' course")
print("- routing block added for activeCourse==='ms'")
print("- MS_MODS/MS_PRE_Q/MS_POST_Q and MSSepsisCourse component appended to LegonMed_Platform.jsx")
