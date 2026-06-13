// PHYSIOLOGY — "The Body in Action"
// 8 Modules, 20h, Medical School Pillar

export const PHYS_ROLES = {
  med_student: "📖 Medical Student",
  pharm_student: "💊 Pharmacy Student",
  nursing_student: "🩺 Nursing Student",
  allied_student: "🔬 Allied Health Student",
  resident: "🏥 Early Career Resident",
};

export const PHYS_RC = {
  med_student: "#003087",
  pharm_student: "#6E2C00",
  nursing_student: "#0d5e6e",
  allied_student: "#1a5276",
  resident: "#1B4F72",
};

export const PHYS_MODS = [
  {
    id:1, num:"01", icon:"🔬", free:true, dur:"2h 30m", lessons:9, color:"#003087",
    title:`The Living Cell", sub:"Cell & Membrane Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"Everything in medicine begins here. One cell. Four billion years of evolution. The blueprint of all life.",
    story:`It is orientation week at the University of Ghana Medical School.\n\nMawuli sits in the front row of the anatomy lecture theatre, notebook open, pen ready. He is 19 years old. He has dreamed of this moment since he was seven, watching his grandmother die of a stroke in a village clinic in the Volta Region with no doctor present.\n\nProfessor Eyram walks in. She places nothing on the podium. No slides. No notes.\n\n"Before I teach you anything," she says, "I want you to understand one thing. Every disease you will ever encounter — every heart attack, every cancer, every infection, every mental illness — begins in a cell. Not in an organ. Not in a system. In a single cell doing something it should not do, or failing to do something it should."\n\nShe draws a circle on the board. One circle.\n\n"This," she says, "is where medicine begins."\n\nMawuli writes it down. He does not know yet that in four years, this single circle will explain almost everything he sees in the wards.\n\nThis module is that circle.`,
    sections:[
      {
        h:"🏗️ Cell Structure — The Architecture of Life",
        a:"Think of the cell as a city. The plasma membrane is the city wall — controlling what enters and what leaves. The nucleus is the city hall — storing the blueprints and issuing instructions. The mitochondria are the power stations — generating energy for everything else. The endoplasmic reticulum and Golgi apparatus are the factories and postal service — making and shipping proteins. The lysosomes are the waste management department. Every organelle has a job. When one fails, the city struggles. When many fail, the city falls.",
        c:"THE CELL AND ITS ORGANELLES:\n\nPLASMA MEMBRANE:\n• Phospholipid bilayer — hydrophilic heads outward, hydrophobic tails inward\n• Fluid mosaic model (Singer & Nicolson 1972)\n• Contains: integral proteins (channels, receptors, transporters), peripheral proteins, glycoproteins, cholesterol\n• Function: selective permeability, signal transduction, cell recognition, structural integrity\n\nNUCLEUS:\n• Contains DNA organised into 23 pairs of chromosomes (46 total in somatic cells)\n• Nuclear envelope with nuclear pores — controls mRNA export\n• Nucleolus — site of ribosomal RNA synthesis\n\nMITOCHONDRIA:\n• Double membrane — outer smooth, inner folded (cristae)\n• Site of oxidative phosphorylation — generates 36–38 ATP per glucose molecule\n• Contains own DNA (maternal inheritance) — evidence of endosymbiotic origin\n• Abundant in: cardiac muscle, skeletal muscle, neurons — high energy demand cells\n\nENDOPLASMIC RETICULUM:\n• Rough ER: ribosomes attached — protein synthesis and folding\n• Smooth ER: no ribosomes — lipid synthesis, drug detoxification, calcium storage\n\nGOLGI APPARATUS:\n• Post-translational modification of proteins\n• Sorting and packaging for secretion or lysosomal delivery\n\nLYSOSOMES:\n• Contain hydrolytic enzymes (pH 4.5–5.0)\n• Digest cellular debris, pathogens, worn-out organelles (autophagy)\n• Lysosomal storage diseases: enzyme deficiency → substrate accumulation → cell death",
        kp:[
          "Plasma membrane: phospholipid bilayer with embedded proteins — selectively permeable",
          "Nucleus: stores DNA, controls gene expression via nuclear pores",
          "Mitochondria: produce 36–38 ATP per glucose — powerhouse of aerobic metabolism",
          "Rough ER synthesises proteins; smooth ER synthesises lipids and detoxifies drugs",
          "Lysosomes: digestive organelles — dysfunction causes lysosomal storage diseases"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Most examined organelle in written papers: mitochondria. Know: double membrane, cristae, ATP synthesis via oxidative phosphorylation, own circular DNA, maternal inheritance. Also frequently tested: lysosomal storage diseases (Gaucher, Tay-Sachs, Niemann-Pick) — enzyme deficiency leading to substrate accumulation."},
          {role:"pharm_student", type:"clinical", text:"The smooth ER is your pharmacology foundation. It contains cytochrome P450 enzymes — the primary drug-metabolising system. When you study drug interactions, first-pass metabolism, and enzyme induction/inhibition, you are studying smooth ER biochemistry. Every drug metabolism fact you will learn is happening in this organelle."},
          {role:"nursing_student", type:"clinical", text:"Cell structure explains why different tissues respond differently to injury. Cardiac muscle cells are packed with mitochondria (high energy demand) but cannot divide after death — hence permanent heart attack damage. Liver cells have abundant smooth ER for detoxification — hence the liver's remarkable regenerative capacity. Knowing this explains your clinical observations."},
          {role:"allied_student", type:"practical", text:"Laboratory scientists: the cell's organelles are the basis of every diagnostic test you will perform. Mitochondrial dysfunction → elevated lactate (anaerobic metabolism). Lysosomal enzyme deficiency → substrate accumulation detectable in blood/urine. Nuclear DNA analysis → genetic diagnosis. You are not just running tests — you are interrogating organelle function."},
          {role:"resident", type:"clinical", text:"In clinical practice, organelle pathology explains disease mechanism. Mitochondrial myopathy: weakness + lactic acidosis. Lysosomal storage disease: organomegaly + neurodegeneration. ER stress: unfolded protein response → apoptosis → seen in diabetes, neurodegeneration. This foundation explains mechanisms you encounter every day on the wards."},
        ]
      },
      {
        h:"🌊 Membrane Transport — How the Cell Controls Its World",
        a:"The plasma membrane is not just a wall — it is a highly intelligent, constantly active border control system. It decides, every millisecond, what gets in and what gets out. Oxygen in. Carbon dioxide out. Sodium out. Potassium in. Glucose in. Waste out. The mechanisms it uses to make these decisions are the basis of almost all pharmacology and all cellular pathology.",
        c:"TRANSPORT MECHANISMS:\n\n1. SIMPLE DIFFUSION:\nDown concentration gradient, no energy, no carrier\nExamples: O2, CO2, ethanol, lipid-soluble drugs\nRate determined by: concentration gradient, membrane thickness, surface area, molecular size (Fick's Law)\n\n2. FACILITATED DIFFUSION:\nDown concentration gradient, no energy, requires carrier protein\nExamples: glucose (GLUT transporters), amino acids\nSaturable — maximum rate when all carriers occupied (Vmax)\n\n3. ACTIVE TRANSPORT:\nAgainst concentration gradient, requires ATP\nPrimary: Na⁺/K⁺-ATPase pump (3 Na⁺ out, 2 K⁺ in per cycle)\nSecondary: uses Na⁺ gradient created by primary active transport\nExamples: glucose-Na⁺ cotransporter (SGLT), Na⁺/H⁺ exchanger\n\n4. OSMOSIS:\nWater movement from low to high solute concentration across semipermeable membrane\nOsmolality = concentration of osmotically active particles (normal plasma: 285–295 mOsmol/kg)\nClinical: hyponatraemia → cell swelling → cerebral oedema\n\n5. ENDOCYTOSIS / EXOCYTOSIS:\nBulk transport of large molecules\nReceptor-mediated endocytosis: LDL uptake, iron (transferrin), insulin receptor internalisation",
        kp:[
          "Na⁺/K⁺-ATPase: 3 Na⁺ out, 2 K⁺ in — maintains resting membrane potential",
          "Facilitated diffusion is saturable — explains drug receptor kinetics and Vmax",
          "Osmolality 285–295 mOsmol/kg — hyponatraemia causes cell swelling",
          "SGLT transporters are the target of SGLT2 inhibitors (gliflozins) in diabetes",
          "Fick's Law: diffusion rate ∝ concentration gradient × surface area ÷ membrane thickness"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Na⁺/K⁺-ATPase is the most examined transporter. Know: 3 Na⁺ out, 2 K⁺ in, uses 1 ATP. This creates the electrochemical gradient driving most secondary active transport. Cardiac glycosides (digoxin) inhibit Na⁺/K⁺-ATPase → Na⁺ accumulates → Ca²⁺ rises via Na⁺/Ca²⁺ exchanger → increased cardiac contractility. One pump. Enormous pharmacological importance."},
          {role:"pharm_student", type:"clinical", text:"SGLT2 inhibitors (empagliflozin, dapagliflozin, canagliflozin) block the sodium-glucose cotransporter in the proximal tubule — a secondary active transporter. This prevents glucose reabsorption → glucosuria → lower blood glucose. Understanding this transport mechanism explains both efficacy AND side effects: glucosuria → UTI risk, osmotic diuresis → BP reduction, volume depletion → AKI risk."},
          {role:"nursing_student", type:"clinical", text:"Osmosis explains oedema management. When you give IV normal saline (0.9% NaCl, osmolality 308 mOsmol/kg), water distributes across compartments by osmosis. Hypotonic fluids (0.45% NaCl) shift water into cells — dangerous in cerebral oedema. Hypertonic saline (3%) draws water out of swollen cells — used in severe hyponatraemia. Every IV fluid decision is applied osmosis."},
          {role:"allied_student", type:"practical", text:"Osmolality measurement is one of your most clinically useful tests. Calculated osmolality = 2[Na⁺] + glucose + urea. Measured osmolality from the osmometer. The osmol gap = measured − calculated. Gap >10 mOsmol/kg = unmeasured osmoles present → suspect: methanol, ethanol, ethylene glycol poisoning. This calculation saves lives in toxicology."},
          {role:"resident", type:"clinical", text:"Hyponatraemia management hinges on understanding osmosis. Chronic hyponatraemia: brain adapts by exporting osmoles (idiogenic osmoles). Rapid correction → osmotic demyelination syndrome (central pontine myelinolysis) — irreversible neurological damage. Correction rate: no more than 6–8 mmol/L per 24 hours. This is transport physiology with life-or-death clinical consequences."},
        ]
      },
      {
        h:"⚡ Membrane Potential & Action Potentials",
        a:"Every thought you have ever had, every heartbeat, every muscle contraction, every sensation of pain or pleasure — all of it is electricity. Not the electricity of power cables — but ion movements across membranes, generating voltages measured in millivolts. Understanding this bioelectricity is understanding how nerve and muscle cells communicate, how anaesthetics work, and how arrhythmias kill.",
        c:"RESTING MEMBRANE POTENTIAL (RMP):\nValue: −70 mV (inside negative relative to outside)\nMaintained by: Na⁺/K⁺-ATPase + selective K⁺ permeability at rest\nNernst equation: determines equilibrium potential for each ion\nGoldman equation: accounts for permeability of multiple ions simultaneously\n\nACTION POTENTIAL (AP) PHASES:\nPhase 4 (Resting): RMP −70mV, K⁺ channels open\nPhase 0 (Rapid depolarisation): Voltage-gated Na⁺ channels open → Na⁺ rushes in → membrane reaches +30mV\nPhase 1 (Early repolarisation): Na⁺ channels inactivate, transient K⁺ outward current\nPhase 2 (Plateau — cardiac only): L-type Ca²⁺ channels open — Ca²⁺ enters, balanced by K⁺ exit\nPhase 3 (Rapid repolarisation): K⁺ channels open → K⁺ exits → return to RMP\nPhase 4 (Resting/Pacemaker): RMP re-established\n\nALL-OR-NOTHING LAW: AP fires fully or not at all\nREFRACTORY PERIOD: Absolute (no AP possible) → Relative (stronger stimulus needed)\n\nCLINICAL RELEVANCE:\nLocal anaesthetics: block voltage-gated Na⁺ channels → no AP → no pain signal\nAntiarrhythmics: target specific ion channels (class I = Na⁺, class III = K⁺, class IV = Ca²⁺)\nHyperkalaemia: RMP depolarises → Na⁺ channels inactivate → cardiac arrest",
        kp:[
          "Resting membrane potential −70mV: maintained by Na⁺/K⁺-ATPase and K⁺ permeability",
          "Action potential Phase 0: voltage-gated Na⁺ channels open — fastest phase",
          "Cardiac plateau (Phase 2): L-type Ca²⁺ channels — target of calcium channel blockers",
          "Local anaesthetics block voltage-gated Na⁺ channels — prevent action potential propagation",
          "Hyperkalaemia depolarises RMP → Na⁺ channel inactivation → fatal arrhythmia"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"The five phases of the cardiac action potential are a perennial exam question. Phase 0 = Na⁺ in (rapid). Phase 1 = early repolarisation. Phase 2 = Ca²⁺ plateau. Phase 3 = K⁺ out. Phase 4 = resting or pacemaker depolarisation (SA node). Antiarrhythmic drug classes map directly onto these phases — Class I blocks phase 0, Class IV blocks phase 2."},
          {role:"pharm_student", type:"clinical", text:"Antiarrhythmic drug classification (Vaughan Williams) is action potential pharmacology: Class I (Na⁺ channel blockers): lidocaine, flecainide — blunt Phase 0. Class II (Beta-blockers): atenolol — slow Phase 4. Class III (K⁺ channel blockers): amiodarone, sotalol — prolong Phase 3. Class IV (Ca²⁺ channel blockers): verapamil, diltiazem — blunt Phase 2. Every antiarrhythmic you prescribe is targeting a specific AP phase."},
          {role:"nursing_student", type:"clinical", text:"Hyperkalaemia is your ECG emergency. K⁺ >6.5 mmol/L: peaked T waves. K⁺ >7.0: widened QRS. K⁺ >8.0: sine wave pattern → ventricular fibrillation. The physiology: high extracellular K⁺ depolarises the RMP, inactivating Na⁺ channels, making the heart unable to repolarise between beats. Treatment: calcium gluconate stabilises the membrane within minutes."},
          {role:"allied_student", type:"practical", text:"Electrolyte results drive action potential stability. Your potassium, calcium, and magnesium results are not just numbers — they are membrane potential determinants. K⁺ 2.8 mmol/L = hyperpolarised membranes = arrhythmia risk. Ca²⁺ 1.8 mmol/L = increased membrane excitability = tetany. Flag these results immediately. The clinician needs them before the next ECG shows the consequence."},
          {role:"resident", type:"clinical", text:"ECG interpretation is applied action potential physiology. P wave = atrial depolarisation (Phase 0 of atrial AP). QRS = ventricular depolarisation. T wave = ventricular repolarisation (Phase 3). QT interval = total ventricular AP duration. Prolonged QT (>450ms in men, >470ms in women) = prolonged Phase 3 = risk of torsades de pointes. QT-prolonging drugs: haloperidol, erythromycin, methadone, ondansetron."},
        ]
      },
    ],
    ev:"Guyton & Hall Medical Physiology 14th Ed; Ganong's Review of Medical Physiology 26th Ed; Boron & Boulpaep Medical Physiology 3rd Ed"
  },

  {
    id:2, num:"02", icon:"❤️", free:false, dur:"2h 30m", lessons:9, color:"#8B0000",
    title:`The Endless Pump", sub:"Cardiovascular Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"The heart beats 100,000 times a day, every day, for a lifetime. Understanding how — and why it fails — is the foundation of all of medicine.",
    story:`Esinam is a second-year medical student. She is doing her first clinical attachment in the cardiology unit at Korle-Bu.\n\nShe is watching Professor Delali perform an echocardiogram on a 58-year-old man with heart failure. On the screen, the heart is visibly struggling — a dilated, poorly contracting left ventricle.\n\n"What is his ejection fraction?" Professor Delali asks the room.\n\nSilenece. Esinam has heard the term. She knows it is a percentage. But she cannot explain it.\n\nProfessor Delali looks at her kindly. "It is alright not to know. But by the end of your clinical years, not knowing this will cost your patient." He turns back to the screen. "This heart is pumping 25% of its blood with each beat instead of 60%. Every organ in this man's body is quietly starving."\n\nEsinam does not forget this moment. She goes home that night and opens her physiology textbook.\n\nThis module is what she found.`,
    sections:[
      {
        h:"💓 Cardiac Cycle — The Mechanics of Every Heartbeat",
        a:"Every heartbeat is a precisely choreographed sequence of electrical and mechanical events — so fast it happens in under a second, yet so coordinated that any disruption in timing causes immediate physiological consequences. Understanding the cardiac cycle is understanding every heart murmur, every arrhythmia, every heart failure symptom.",
        c:"THE CARDIAC CYCLE (at heart rate 75 bpm, cycle duration ~0.8 sec):\n\nSYSTOLE (0.3 sec):\n1. Isovolumetric contraction: all valves closed, pressure rising, volume unchanged\n2. Rapid ejection: aortic valve opens, blood ejected (SV ~70ml)\n3. Reduced ejection: late systole, less blood ejected\n\nDIASTOLE (0.5 sec):\n4. Isovolumetric relaxation: all valves closed, pressure falling\n5. Rapid filling: mitral valve opens, blood flows from LA to LV\n6. Reduced filling + atrial systole: remaining filling, 'a' wave\n\nPRESSURES:\nLV systolic: ~120 mmHg (= systolic BP)\nLV diastolic: ~8 mmHg\nAorta: 120/80 mmHg\nLA mean: ~8 mmHg\nRA mean: ~4 mmHg\n\nHEART SOUNDS:\nS1 (lub): Mitral + tricuspid valve closure — start of systole\nS2 (dub): Aortic + pulmonary valve closure — end of systole\nS3: Rapid ventricular filling — heart failure / normal in young\nS4: Atrial contraction against stiff ventricle — hypertension, LVH\n\nEJECTION FRACTION:\nEF = Stroke Volume / End-Diastolic Volume × 100\nNormal: ≥55%\nHFrEF: <40% (reduced EF — systolic failure)\nHFpEF: ≥50% (preserved EF — diastolic failure)",
        kp:[
          "Cardiac cycle: systole 0.3s (contraction + ejection), diastole 0.5s (relaxation + filling)",
          "S1 = AV valve closure (start systole); S2 = semilunar valve closure (end systole)",
          "Normal ejection fraction ≥55%; HFrEF <40%; HFpEF ≥50%",
          "Isovolumetric phases: no volume change — all valves closed",
          "S3 = rapid filling (heart failure marker); S4 = stiff ventricle (hypertension marker)"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Cardiac cycle questions always appear. Most tested: which valves are open/closed during each phase. Isovolumetric contraction: ALL valves closed. Rapid ejection: aortic + pulmonary open, mitral + tricuspid closed. Rapid filling: mitral + tricuspid open, aortic + pulmonary closed. Memorise the four phases and the valve status in each."},
          {role:"nursing_student", type:"clinical", text:"Auscultating heart sounds is a clinical skill that saves lives. S3 in an adult with dyspnoea = heart failure until proven otherwise — escalate. S4 in a hypertensive patient = poorly compliant ventricle = risk of diastolic failure. A new murmur in a patient with fever = endocarditis until proven otherwise. Your stethoscope is your most powerful diagnostic tool."},
          {role:"pharm_student", type:"clinical", text:"Ejection fraction determines drug choice in heart failure. HFrEF (<40%): ACE inhibitors, beta-blockers, aldosterone antagonists, SGLT2 inhibitors all reduce mortality. HFpEF (≥50%): only SGLT2 inhibitors (empagliflozin) have proven mortality benefit. Knowing the EF before prescribing heart failure drugs is mandatory — the same symptoms, completely different pharmacology."},
          {role:"allied_student", type:"practical", text:"Echocardiography — your imaging tool for cardiac physiology. M-mode measures chamber dimensions. 2D echo visualises wall motion. Doppler measures blood flow velocity across valves. The echo report you generate or interpret directly maps onto the cardiac cycle: LV dimensions (EDV, ESV), EF calculation (Simpson's method), valve gradient (Bernoulli equation). You are measuring physiology in real time."},
          {role:"resident", type:"clinical", text:"Diastolic dysfunction is underdiagnosed. HFpEF (preserved EF heart failure) is increasingly common — especially in elderly hypertensive women. Diagnosis: symptoms of heart failure + EF ≥50% + evidence of diastolic dysfunction on echo (E/e' ratio >14, LA enlargement). Pathophysiology: impaired relaxation → elevated filling pressures → dyspnoea. Treatment options more limited than HFrEF — diuretics for symptom relief + SGLT2i for outcomes."},
        ]
      },
      {
        h:"📊 Cardiac Output, Preload, Afterload & Contractility",
        a:"The heart's output is not fixed — it is a dynamic variable, constantly adjusted in response to the body's demands. Understanding what determines cardiac output is understanding heart failure, hypertension, shock, and the mechanism of almost every cardiovascular drug. Four factors control everything: rate, preload, afterload, and contractility. Alter any one and the heart's output changes.",
        c:"CARDIAC OUTPUT (CO):\nCO = Heart Rate × Stroke Volume\nNormal: 5 L/min at rest\nCardiac Index (CI) = CO / BSA. Normal: 2.5–4.0 L/min/m²\n\nSTROKE VOLUME DETERMINANTS:\n\n1. PRELOAD (Frank-Starling Law):\nDefinition: ventricular stretch at end-diastole (≈ EDV)\nMore stretch → stronger contraction → higher SV (up to a point)\nClinical: IV fluids ↑ preload → ↑ SV in hypovolaemia\nFailure: overstretched heart → SV falls (descending limb of Starling curve)\n\n2. AFTERLOAD:\nDefinition: resistance the ventricle must overcome to eject blood (≈ SVR)\nHigh afterload → reduced SV → compensatory hypertrophy\nClinical: hypertension ↑ afterload → LVH → heart failure\nTreatment: vasodilators (ACEi, ARBs) ↓ afterload → ↑ SV\n\n3. CONTRACTILITY (Inotropy):\nDefinition: intrinsic force of contraction at any given preload/afterload\n↑ Contractility: sympathetic stimulation, digoxin, adrenaline, dobutamine\n↓ Contractility: beta-blockers (acutely), heart failure, hypoxia, acidosis\n\nSYMPATHETIC vs PARASYMPATHETIC:\nSympathetic: ↑ HR (chronotropy), ↑ contractility (inotropy), ↑ conduction speed (dromotropy)\nParasympathetic (vagal): ↓ HR, ↓ AV conduction, minimal effect on ventricles",
        kp:[
          "CO = HR × SV — normal 5L/min; cardiac index normalises for body size",
          "Frank-Starling: more preload → more stretch → stronger contraction (within limits)",
          "High afterload (hypertension) reduces SV → LVH → heart failure",
          "Dobutamine increases contractility — used in cardiogenic shock",
          "Sympathetic: increases HR, contractility, conduction speed (fight or flight)"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Frank-Starling Law is the most examined cardiovascular physiology concept. Key points: (1) increased preload → increased SV up to optimal point. (2) Beyond optimal point (overfilling), SV falls — the descending limb. (3) Heart failure shifts the curve down and right — same preload, lower SV. Draw the curve and know how drugs shift it: positive inotropes shift up, heart failure shifts down."},
          {role:"pharm_student", type:"clinical", text:"Every cardiovascular drug targets one of the four determinants of CO. Diuretics: ↓ preload (reduce EDV). ACE inhibitors: ↓ afterload (reduce SVR). Digoxin/dobutamine: ↑ contractility. Beta-blockers: ↓ HR and ↓ contractility (acutely). In heart failure, combination therapy targets all four simultaneously — this is why HFrEF has so many medications. Each adds independent benefit."},
          {role:"nursing_student", type:"clinical", text:"Fluid challenge assessment uses Starling physiology. Give 250–500ml crystalloid → reassess. If CO increases (BP up, HR down, better perfusion) = preload-responsive = needs more fluid. If no response or deterioration = not preload-responsive = stop fluids, consider vasopressors. This is Starling's Law applied at the bedside. Never give fluid blindly."},
          {role:"allied_student", type:"practical", text:"Systemic vascular resistance (SVR) is calculated from your haemodynamic data: SVR = (MAP − CVP) / CO × 80. Normal: 800–1200 dynes/sec/cm⁵. High SVR (>1200) = high afterload = vasoconstriction = hypertension or cardiogenic shock. Low SVR (<800) = vasodilation = septic or distributive shock. This calculation tells you which type of shock your patient has."},
          {role:"resident", type:"clinical", text:"Cardiogenic vs distributive shock: cardiogenic = low CO + high SVR (cold, clammy, low BP). Distributive (septic) = high CO initially + low SVR (warm, flushed, low BP). Treatment is opposite: cardiogenic → inotropes + vasodilators (if tolerated). Distributive → vasopressors + volume. Confusing the two is a potentially fatal error. CO measurement (echo, PA catheter, PiCCO) differentiates them."},
        ]
      },
      {
        h:"🩸 Blood Pressure Regulation",
        a:"Blood pressure is not a number on a cuff. It is the result of a continuous negotiation between the heart, blood vessels, kidneys, nervous system, and hormones — conducted every second of every day. When this negotiation breaks down, we call it hypertension. When it fails acutely, we call it shock. Understanding the negotiation is understanding both.",
        c:"BLOOD PRESSURE DETERMINANTS:\nBP = CO × SVR\nCO = HR × SV\nSVR = determined by arteriolar tone\n\nSHORT-TERM REGULATION:\n1. BARORECEPTOR REFLEX:\nHigh-pressure baroreceptors: carotid sinus + aortic arch\nSensing: stretch → afferent signals to medulla (CN IX, X)\nResponse to ↓BP: ↑ sympathetic → ↑ HR, ↑ contractility, vasoconstriction\nResponse to ↑BP: ↑ parasympathetic → ↓ HR, vasodilation\nOnset: seconds\n\nMEDIUM-TERM REGULATION:\n2. RAAS (Renin-Angiotensin-Aldosterone System):\n↓BP / ↓Na⁺ → renin release (juxtaglomerular cells) → angiotensinogen → Ang I → ACE → Ang II\nAng II: vasoconstriction + aldosterone release → Na⁺/water retention → ↑ blood volume → ↑ BP\nOnset: minutes to hours\n\nLONG-TERM REGULATION:\n3. RENAL PRESSURE-NATRIURESIS:\nKidney as ultimate BP regulator — adjusts Na⁺/water excretion\n↑BP → ↑ Na⁺ excretion → ↓ blood volume → ↓ BP\nThis mechanism operates over days to weeks\n\nORTHOSTATIC HYPOTENSION:\n↓BP on standing → baroreceptor activation → ↑ HR + vasoconstriction within 1–2 beats\nFailure: autonomic neuropathy (diabetes), hypovolaemia, medications",
        kp:[
          "BP = CO × SVR — alter either to change blood pressure",
          "Baroreceptors: carotid + aortic arch — respond within seconds to BP changes",
          "RAAS: renin → Ang II → vasoconstriction + aldosterone → long-term BP control",
          "Kidney is the ultimate long-term BP regulator via pressure-natriuresis",
          "Orthostatic hypotension: baroreceptor reflex failure or hypovolaemia"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"RAAS is examined in every cardiovascular question set. The full pathway: low BP → renin (JG cells) → cleaves angiotensinogen → Ang I → ACE (lung) → Ang II → (1) vasoconstriction + (2) aldosterone from adrenal cortex → Na⁺/water retention → ↑ BP. ACE inhibitors block the ACE step. ARBs block the Ang II receptor. Aldosterone antagonists (spironolactone) block the terminal step."},
          {role:"pharm_student", type:"clinical", text:"Antihypertensive drug targets map directly onto BP regulation pathways. Beta-blockers: ↓ HR and ↓ renin release (reduce CO and RAAS). ACE inhibitors: block Ang II formation (↓ SVR + ↓ aldosterone). ARBs: block Ang II receptor. Calcium channel blockers: ↓ SVR by blocking vascular smooth muscle Ca²⁺. Thiazide diuretics: ↓ blood volume (target renal pathway). Combination therapy works because each drug targets a different pathway."},
          {role:"nursing_student", type:"clinical", text:"Postural BP measurement is a critical clinical skill. Patient supine for 5 minutes → stand → recheck at 1 and 3 minutes. Orthostatic hypotension = systolic drop ≥20mmHg or diastolic drop ≥10mmHg. Causes: hypovolaemia, antihypertensives, autonomic neuropathy (diabetic). Clinical implication: fall risk, especially in elderly. Document it. Act on it."},
          {role:"allied_student", type:"practical", text:"Renin measurement is a specialist investigation. High renin + high aldosterone = secondary hyperaldosteronism (renal artery stenosis, heart failure). High aldosterone + low renin = primary hyperaldosteronism (Conn's syndrome — adrenal adenoma). The aldosterone:renin ratio (ARR) >30 is the screening test for Conn's. Accurate measurement requires patient to be off antihypertensives for 2–4 weeks — liaise with the clinical team before sample collection."},
          {role:"resident", type:"clinical", text:"Hypertensive emergency vs urgency: Emergency = hypertension + acute organ damage (hypertensive encephalopathy, acute pulmonary oedema, aortic dissection, AKI). Urgency = severe hypertension (>180/120) without organ damage. Emergency: IV labetalol or nicardipine — target 25% reduction in 1 hour (too fast → cerebral ischaemia). Urgency: oral agents, BP reduction over 24–48 hours. The speed of reduction matters as much as the agent."},
        ]
      },
    ],
    ev:"Guyton & Hall Medical Physiology 14th Ed; Boron & Boulpaep 3rd Ed; AHA/ACC Hypertension Guidelines 2023"
  },

  {
    id:3, num:"03", icon:"🫁", free:false, dur:"2h 30m", lessons:9, color:"#0B5345",
    title:`The Breath of Life", sub:"Respiratory Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"You take 20,000 breaths a day without thinking. When breathing fails, it is the only thing you think about.",
    story:`Fafali is a nursing student on her first night in the respiratory ward.\n\nAt 2AM a 67-year-old patient with COPD begins to deteriorate. His oxygen saturation drops from 92% to 84%. His respiratory rate is 28. He is using his accessory muscles. His lips are pursed.\n\nThe house officer arrives. She looks at the pulse oximeter. "Give him 15 litres via non-rebreather."\n\nFafali hesitates. She remembers something from her physiology lecture — something about COPD patients and oxygen. But she cannot quite recall it.\n\nShe gives the oxygen as instructed. Twenty minutes later, the patient's respiratory rate slows. The house officer smiles. "Better."\n\nBut Fafali notices something. His CO2 is rising on the monitor. He is becoming drowsy. Hypercapnic.\n\nThe physiology she half-remembered was this: some COPD patients depend on hypoxic drive to breathe. High-flow oxygen removes that drive.\n\nShe was right to hesitate. This module gives her — and you — the knowledge to act on that instinct with confidence.`,
    sections:[
      {
        h:"🌬️ Lung Volumes, Capacities & Spirometry",
        a:"Before you can understand breathing failure, you must understand normal breathing mechanics. The lung is not a simple balloon — it has compartments, volumes, and reserve capacities that are carefully calibrated to match metabolic demand. When disease strikes, the pattern of volume change tells you what type of disease it is and how severe.",
        c:"LUNG VOLUMES (average adult male):\nTidal Volume (TV): 500ml — normal quiet breath\nInspiratory Reserve Volume (IRV): 3000ml — additional inhalation above TV\nExpiratory Reserve Volume (ERV): 1200ml — additional exhalation below TV\nResidual Volume (RV): 1200ml — cannot be exhaled; prevents lung collapse\n\nLUNG CAPACITIES (sum of volumes):\nInspiratory Capacity (IC) = TV + IRV = 3500ml\nFunctional Residual Capacity (FRC) = ERV + RV = 2400ml\nVital Capacity (VC) = TV + IRV + ERV = 4700ml\nTotal Lung Capacity (TLC) = VC + RV = 5900ml\n\nSPIROMETRY PATTERNS:\nOBSTRUCTIVE (asthma, COPD, bronchiectasis):\n→ FEV1 reduced, FVC normal or reduced, FEV1/FVC ratio <70%\n→ TLC increased (air trapping), RV increased\n\nRESTRICTIVE (fibrosis, obesity, neuromuscular disease):\n→ FEV1 reduced, FVC reduced, FEV1/FVC ratio NORMAL or increased\n→ TLC reduced, RV reduced\n\nDLCO (diffusion capacity):\nMeasures gas transfer across alveolar membrane\nReduced in: emphysema, pulmonary fibrosis, pulmonary hypertension\nNormal in: asthma, obesity-related restriction",
        kp:[
          "Residual volume cannot be measured by spirometry — requires body plethysmography or dilution",
          "FEV1/FVC <70% = obstructive pattern; normal ratio with reduced volumes = restrictive",
          "FRC = ERV + RV — the lung volume at end of normal expiration",
          "DLCO reduced in emphysema (alveolar destruction) and fibrosis (membrane thickening)",
          "Air trapping in COPD: increased RV and TLC — barrel chest on examination"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Spirometry interpretation is a guaranteed exam station. Step 1: Is FEV1/FVC <70%? Yes = obstructive. No = look at TLC. TLC <80% predicted = restrictive. Both reduced = mixed. Step 2: Severity by FEV1% predicted (mild ≥80%, moderate 50–79%, severe 30–49%, very severe <30%). Step 3: DLCO — reduced in emphysema and fibrosis, normal in asthma and obesity."},
          {role:"nursing_student", type:"clinical", text:"Peak flow measurement is your bedside spirometry. Normal varies by age, sex, height — use the patient's personal best as reference. <50% personal best = severe attack (do not wait for sats to drop). <33% = life-threatening. In acute asthma, serial peak flows every 15–30 minutes track response to treatment. A rising peak flow = responding. Falling = escalate immediately."},
          {role:"pharm_student", type:"clinical", text:"Inhaler device selection depends on the patient's inspiratory flow. Dry powder inhalers (DPIs — Turbuhaler, Accuhaler) require high inspiratory flow (≥60 L/min) — ineffective in severe obstruction. Metered-dose inhalers (MDIs) require coordination. Nebulisers need no effort — ideal for acute severe attacks. Spacers improve MDI delivery and reduce oropharyngeal deposition of ICS. Know which device works for which patient."},
          {role:"allied_student", type:"practical", text:"Spirometry quality control is your responsibility. Acceptable effort criteria: rapid start (back-extrapolated volume <150ml or 5% of FVC), no cough in first second, plateau reached, reproducible (≥3 acceptable efforts, best two FEV1 and FVC within 150ml). Reject poor efforts — a technically unacceptable spirometry misdiagnoses and mistreats patients."},
          {role:"resident", type:"clinical", text:"COPD and oxygen therapy: the 'hypoxic drive' story is more nuanced than taught. The Haldane effect (CO2 displacement from Hb by O2) and V/Q mismatch worsening contribute more to hypercapnia than loss of hypoxic drive. Regardless of mechanism, target SpO2 88–92% in COPD on oxygen, not 94–98%. Use controlled O2 delivery (Venturi mask at specified FiO2). Titrate up only if needed."},
        ]
      },
      {
        h:"🔄 Gas Exchange & Ventilation-Perfusion Matching",
        a:"Getting oxygen from the air to the blood and carbon dioxide from the blood to the air sounds simple. In reality it is a miracle of engineering — one that can fail in four different ways, each with a different clinical presentation and a different treatment. Understanding these four failure modes is the key to understanding all respiratory medicine.",
        c:"GAS EXCHANGE — THE BASICS:\nAlveolar-arterial (A-a) gradient = PAO2 − PaO2\nNormal: <10 mmHg (young), <20 mmHg (elderly)\nElevated A-a gradient = abnormal gas exchange (V/Q mismatch, diffusion limitation, shunt)\nNormal A-a gradient with low PaO2 = hypoventilation (altitude, drug overdose)\n\nFOUR CAUSES OF HYPOXAEMIA:\n1. HYPOVENTILATION: ↓ RR or VT → ↑ PaCO2 → ↓ PaO2. Normal A-a gradient. 100% O2 corrects.\n2. V/Q MISMATCH: Most common cause. Ventilated but not perfused (PE) or perfused but not ventilated (pneumonia, pulmonary oedema). Elevated A-a gradient. O2 therapy partially corrects.\n3. SHUNT: Blood bypasses ventilated alveoli. Examples: ASD/VSD, consolidation, ARDS. Elevated A-a gradient. 100% O2 does NOT correct (hallmark of shunt).\n4. DIFFUSION LIMITATION: Thickened alveolar membrane (fibrosis). Elevated A-a gradient. Worsens on exercise.\n\nOXYHAEMOGLOBIN DISSOCIATION CURVE:\nSigmoidal shape — haemoglobin loads O2 in lungs, unloads in tissues\nP50 = pO2 at 50% saturation (normally 26.5 mmHg)\nRight shift (↑ P50 — unloads O2 more): ↑ CO2, ↑ H+, ↑ temperature, ↑ 2,3-DPG\nLeft shift (↓ P50 — loads O2 more): ↓ CO2, ↓ H+, ↓ temperature, HbF, carboxyhaemoglobin",
        kp:[
          "A-a gradient >20mmHg = abnormal gas exchange; normal gradient + hypoxia = hypoventilation",
          "Shunt: 100% O2 does NOT correct hypoxia — hallmark distinguishing shunt from V/Q mismatch",
          "Oxyhaemoglobin curve: right shift = unloads O2 at tissues (exercise, fever, acidosis)",
          "V/Q mismatch: most common cause of hypoxia — partially corrects with O2",
          "ARDS = diffuse alveolar damage + shunt physiology — refractory hypoxia despite high FiO2"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"The 100% O2 response test distinguishes shunt from V/Q mismatch. V/Q mismatch: PaO2 rises to near normal on 100% O2 (open alveoli recruit). Shunt: PaO2 barely rises on 100% O2 (blood bypasses alveoli completely). Clinical application: ARDS (shunt) — high FiO2 alone does not work, need PEEP to re-open alveoli. Pulmonary embolism (dead space) — O2 helps somewhat."},
          {role:"nursing_student", type:"clinical", text:"SpO2 has critical limitations. SpO2 cannot detect: hypercarbia (COPD patient may be 95% SpO2 and drowning in CO2), CO poisoning (carboxyhaemoglobin reads as oxyhaemoglobin — SpO2 appears normal while patient is hypoxic), methaemoglobinaemia (reads ~85% regardless of true saturation). When the clinical picture does not match the SpO2, get an ABG."},
          {role:"pharm_student", type:"clinical", text:"Opioids cause hypoventilation by suppressing central respiratory drive. This produces hypoxia with a NORMAL A-a gradient — the lungs work fine but are not being ventilated. Naloxone reverses this by blocking opioid receptors in the respiratory centre. In opioid overdose: give O2 (corrects hypoventilation hypoxia easily), give naloxone (removes the suppression). This is pharmacology and physiology combined."},
          {role:"allied_student", type:"practical", text:"ABG interpretation: the complete approach. Step 1: pH — acidosis (<7.35) or alkalosis (>7.45). Step 2: PaCO2 — respiratory cause? High CO2 + acidosis = respiratory acidosis. Step 3: HCO3 — metabolic cause? Low HCO3 + acidosis = metabolic acidosis. Step 4: Compensation — is it appropriate? Step 5: PaO2 and FiO2 — calculate P/F ratio. PaO2/FiO2 <300 = ARDS criteria. Systematic approach every time."},
          {role:"resident", type:"clinical", text:"ARDS management: lung-protective ventilation is the evidence-based standard (ARDSNet trial). Tidal volume 6ml/kg predicted body weight (not actual). Plateau pressure <30cmH2O. PEEP titrated to maintain alveolar recruitment. Prone positioning for 16 hours/day in severe ARDS (PaO2/FiO2 <150) reduces mortality by 16% (PROSEVA trial). High FiO2 alone without PEEP is insufficient."},
        ]
      },
    ],
    ev:"Guyton & Hall 14th Ed; West's Respiratory Physiology 11th Ed; GOLD COPD Guidelines 2024; ARDSNet NEJM 2000; PROSEVA Trial NEJM 2013"
  },

  {
    id:4, num:"04", icon:"🫘", free:false, dur:"2h 30m", lessons:9, color:"#154360",
    title:`The Great Filter", sub:"Renal & Fluid Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"The kidney filters 180 litres of fluid every day and returns 178.5 of it — with exquisite precision. When that precision fails, every system in the body suffers.",
    story:`Eyram is a second-year pharmacy student. She is on attachment in the nephrology unit when a 52-year-old man is admitted with acute kidney injury after taking ibuprofen for back pain for two weeks.\n\n"Why does ibuprofen cause this?" she asks the registrar.\n\n"Because NSAIDs inhibit prostaglandins," the registrar says. "And prostaglandins dilate the afferent arteriole. Without them, the afferent arteriole constricts. GFR drops. Urine stops."\n\nEyram writes it down. Then she looks at the patient's drug chart. He is also on an ACE inhibitor for hypertension.\n\n"Two drugs," she says quietly. "Both affecting the same autoregulatory mechanism from different ends."\n\nThe registrar looks at her. "Exactly. NSAID + ACEi + diuretic. The triple whammy. One of the most common causes of hospital-acquired AKI in the world. And one of the most preventable."\n\nEyram understood renal physiology that day in a way no textbook had managed. This module is that understanding.`,
    sections:[
      {
        h:"🔬 Glomerular Filtration — The Beginning of Urine",
        a:"Imagine the kidney as an enormous, intelligent filter that works like this: first, squeeze everything small enough through a sieve (glomerular filtration). Then, take back everything you need (tubular reabsorption). Then, add what you want to get rid of (tubular secretion). What remains is urine. This three-step process, repeated in 1.2 million nephrons simultaneously, is among the most remarkable biological engineering achievements in nature.",
        c:"GLOMERULAR FILTRATION:\nGFR: normal 125 ml/min (180 L/day filtered)\nOnly 1% excreted as urine (~1.5 L/day)\n\nSTARLING FORCES IN GLOMERULUS:\nFiltration pressure = Hydrostatic pressure (glomerular capillary) − Oncotic pressure (plasma proteins) − Hydrostatic pressure (Bowman's space)\n= 55 − 30 − 15 = 10 mmHg net filtration pressure\n\nAFFERENT ARTERIOLE (dilate → ↑ GFR):\n→ Dilated by: prostaglandins, ANP, low renal perfusion pressure\n→ Constricted by: sympathetic stimulation, NSAIDs (block prostaglandins)\n\nEFFERENT ARTERIOLE (constrict → ↑ GFR):\n→ Constricted by: Angiotensin II\n→ Dilated by: ACE inhibitors, ARBs → ↓ GFR in renal artery stenosis\n\nGFR ESTIMATION:\nCKD-EPI equation using creatinine ± cystatin C\nNormal: ≥60 ml/min/1.73m²\nCKD staging: G1 (≥90), G2 (60–89), G3a (45–59), G3b (30–44), G4 (15–29), G5 (<15)\n\nFILTERED SUBSTANCES:\nFreely filtered: water, electrolytes, glucose, urea, creatinine, small drugs\nNOT filtered: large proteins, cells, protein-bound drugs",
        kp:[
          "GFR 125ml/min — kidneys filter 180L/day and reabsorb 178.5L",
          "Afferent dilation (prostaglandins) increases GFR; NSAIDs reduce GFR by blocking prostaglandins",
          "ACE inhibitors dilate efferent arteriole — reduce GFR in renal artery stenosis",
          "CKD stages G1–G5 based on GFR; G5 (<15) = kidney failure",
          "Triple whammy: NSAID + ACEi + diuretic = highest risk combination for AKI"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Renal artery stenosis + ACE inhibitor = dangerous combination examined repeatedly. Why? Normal: Ang II constricts efferent arteriole → maintains GFR despite reduced afferent flow. ACEi blocks Ang II → efferent dilates → GFR falls → AKI. This is why ACEi is contraindicated in bilateral renal artery stenosis or single functioning kidney with RAS. Creatinine rise >30% after starting ACEi = check for RAS."},
          {role:"pharm_student", type:"clinical", text:"The triple whammy (NSAID + ACEi/ARB + diuretic) is your most important drug interaction to prevent. NSAIDs block prostaglandin-mediated afferent dilation. ACEi/ARB reduce efferent constriction. Diuretics reduce circulating volume. All three together collapse GFR. Monitor renal function in any patient on two of these three, and counsel patients never to self-medicate NSAIDs while on ACEi."},
          {role:"nursing_student", type:"clinical", text:"Urine output monitoring is renal physiology at the bedside. Normal ≥0.5ml/kg/hour. Oliguria <0.5ml/kg/hour for 6 hours = AKI criterion. Pre-renal AKI (dehydration): concentrated urine (SG >1.020), high urine Na <20 mmol/L, responds to fluids. Intrinsic AKI (tubular damage): dilute urine, urine Na >40 mmol/L, does not respond to fluids. Your urine monitoring is the earliest AKI detection tool on the ward."},
          {role:"allied_student", type:"practical", text:"Urinalysis in AKI: dipstick is your rapid screen. Protein 2+ or more = glomerular damage. Blood + protein = glomerulonephritis. White cells = infection or interstitial nephritis. Granular casts on microscopy = ATN (muddy brown casts). Red cell casts = glomerulonephritis. Broad waxy casts = CKD. Each finding maps to a different renal pathology — you are diagnosing location and mechanism from a urine sample."},
          {role:"resident", type:"clinical", text:"KDIGO AKI definition: rise in creatinine ≥26.5 μmol/L within 48 hours, OR ≥1.5× baseline within 7 days, OR urine output <0.5ml/kg/hour for 6 hours. Stage 1: 1.5–1.9× baseline. Stage 2: 2.0–2.9×. Stage 3: ≥3×, or creatinine ≥354 μmol/L, or initiation of RRT. Management: treat the cause, optimise haemodynamics, stop nephrotoxins, avoid contrast if possible, monitor electrolytes. Hyperkalaemia (>6.5) = emergency."},
        ]
      },
    ],
    ev:"Guyton & Hall 14th Ed; KDIGO AKI Guidelines 2012; KDIGO CKD Guidelines 2024; Boron & Boulpaep 3rd Ed"
  },

  {
    id:5, num:"05", icon:"🍽️", free:false, dur:"2h 00m", lessons:7, color:"#2C3E50",
    title:`The Digestive Engine", sub:"Gastrointestinal Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"The gut processes 9 litres of fluid daily, extracts nutrients from everything you eat, and produces more neurotransmitters than the brain. It is anything but simple.",
    story:`Esela is an allied health student on attachment in gastroenterology. She watches an endoscopy on a patient with Helicobacter pylori-associated peptic ulcer disease.\n\n"The stomach has acid at pH 1," the gastroenterologist says. "Strong enough to dissolve metal. Yet the stomach lining survives. How?"\n\nEsela knows the answer is 'mucus', but she senses there is more to it.\n\n"Mucus, bicarbonate, prostaglandins, tight junctions, rapid cell turnover," the doctor continues. "Five overlapping defence mechanisms. H. pylori breaches all five. NSAIDs breach two. That is why both cause ulcers."\n\nEsela makes a note. Later, examining the biopsy results, she will understand not just what caused the ulcer but why the drugs used to treat it work. This module gives you that understanding.`,
    sections:[
      {
        h:"🧪 Gastric Physiology & Acid Secretion",
        a:"The stomach produces 2 litres of hydrochloric acid every day — a feat of biochemical engineering that would destroy any industrial container. Yet it does not digest itself. The mechanisms protecting the stomach lining from its own acid are as impressive as the acid production itself — and understanding both explains almost all peptic ulcer disease and its treatment.",
        c:"GASTRIC ACID SECRETION:\nParietal cells → H⁺/K⁺-ATPase (proton pump) → secrete HCl\nStimulated by: Histamine (H2 receptors), Acetylcholine (M3), Gastrin (CCK-B)\nInhibited by: Somatostatin, PGE2, Secretin\n\nTHREE PHASES OF GASTRIC SECRETION:\n1. Cephalic (30%): sight/smell/thought of food → vagal stimulation → ACh → acid\n2. Gastric (60%): food in stomach → gastrin release → acid + pepsinogen\n3. Intestinal (10%): chyme in duodenum → secretin → inhibits acid\n\nGASTRIC MUCOSAL DEFENCE:\n1. Mucus layer: viscous gel trapping bicarbonate\n2. Bicarbonate secretion: neutralises acid at mucosal surface\n3. Prostaglandins (PGE2): stimulate mucus + bicarbonate, inhibit acid, promote blood flow\n4. Tight junctions: prevent acid backdiffusion\n5. Rapid cell turnover: replace damaged cells every 3–5 days\n\nPEPTIC ULCER DISEASE:\nH. pylori: disrupts mucus, produces urease → ammonia → direct mucosal damage\nNSAIDs: inhibit COX-1 → ↓ prostaglandins → ↓ mucus + ↓ bicarbonate → mucosal injury\n\nDRUG TARGETS:\nPPI (omeprazole, pantoprazole): irreversibly block H⁺/K⁺-ATPase → most potent acid suppressants\nH2 blockers (ranitidine, famotidine): block histamine H2 receptors → less potent\nAntacids: neutralise existing acid — symptomatic only",
        kp:[
          "Parietal cells: H⁺/K⁺-ATPase (proton pump) is the final common pathway for acid secretion",
          "PPI: irreversibly inhibit proton pump — most potent acid suppressant; take 30 min before meals",
          "NSAIDs cause ulcers by inhibiting COX-1 → reduced protective prostaglandins",
          "H. pylori disrupts mucosal defence — eradication reduces ulcer recurrence by 90%",
          "Three phases: cephalic (vagal/sight), gastric (gastrin), intestinal (secretin inhibits)"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"PPI mechanism is the most examined GI pharmacology fact. Omeprazole is a prodrug: activated in the acid environment of the secretory canaliculus → irreversibly binds H⁺/K⁺-ATPase → blocks acid secretion for 24–48 hours (until new pumps synthesised). Take 30 minutes before meals (pumps must be active to bind). IV PPI bypasses the absorption issue in acute upper GI bleeding."},
          {role:"pharm_student", type:"clinical", text:"H. pylori eradication therapy: standard triple therapy = PPI + clarithromycin + amoxicillin × 7–14 days. If penicillin allergic: PPI + clarithromycin + metronidazole. Quadruple therapy (PPI + bismuth + tetracycline + metronidazole) for clarithromycin-resistant strains. Eradication rates falling due to clarithromycin resistance (>20% in many regions). Always test for eradication 4 weeks post-treatment (urea breath test or stool antigen)."},
          {role:"nursing_student", type:"clinical", text:"Upper GI bleeding assessment: Rockford score stratifies risk. But at the bedside: haematemesis (fresh blood = arterial, coffee grounds = digested), melaena (black tarry stool = upper GI source ≥500ml blood), haematochezia (fresh rectal blood = lower GI or massive upper GI). Two large-bore IVs, cross-match, group and save, IV PPI, urgent endoscopy referral. Time is tissue."},
          {role:"allied_student", type:"practical", text:"H. pylori testing: urea breath test (UBT) — gold standard for active infection + eradication confirmation. Must stop PPIs 2 weeks and antibiotics 4 weeks before test. False negative with active PPI use is the most common error. Stool antigen test (SAT): similar accuracy, easier logistics. Serology: only detects exposure (not active infection), no role in eradication testing. Know which test for which clinical question."},
          {role:"resident", type:"clinical", text:"Upper GI bleeding: Glasgow-Blatchford score before endoscopy predicts need for intervention (score >0 = requires endoscopy). Post-endoscopy: Rockford score predicts rebleeding risk. High-risk stigmata (active bleeding, visible vessel, adherent clot): endoscopic haemostasis + IV PPI infusion (80mg bolus then 8mg/hour × 72 hours) reduces rebleeding by 60%. After H. pylori eradication: NSAID-related ulcers — stop NSAID or add PPI indefinitely."},
        ]
      },
    ],
    ev:"Guyton & Hall 14th Ed; NICE GI Bleeding Guidelines; Maastricht V H.pylori Consensus 2017"
  },

  {
    id:6, num:"06", icon:"🦋", free:false, dur:"2h 30m", lessons:9, color:"#6E2C00",
    title:`The Body's Orchestra", sub:"Endocrine & Reproductive Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"Hormones are the body's chemical messengers — carrying instructions from gland to target organ across the bloodstream. When the message is wrong, every system listens to the error.",
    story:`Delali is a medical student presenting a case at grand rounds. She has chosen a 34-year-old woman who presented with weight gain, cold intolerance, constipation, menstrual irregularity, and depression over eight months.\n\n"Her GP treated her for depression," Delali says. "For six months."\n\nThe room is silent.\n\n"Her TSH was 48. Free T4 undetectable. She had severe primary hypothyroidism."\n\nShe pauses. "Every single symptom this woman had was explained by one hormone deficiency. One gland. One hormone. Eight months of unnecessary suffering."\n\nProfessor Eyram nods. "This is why endocrinology is not a subspecialty. It is a language. And every clinician in this room needs to be fluent in it."\n\nThis module is your fluency course.`,
    sections:[
      {
        h:"🦋 Thyroid Physiology — The Metabolic Thermostat",
        a:"The thyroid gland is the body's metabolic thermostat. Turn it up and every process accelerates — heart rate, metabolism, gut motility, heat production. Turn it down and everything slows — weight gain, cold intolerance, bradycardia, constipation, depression. Understanding this thermostat explains not just thyroid disease but the metabolic basis of multiple organ systems.",
        c:"THYROID HORMONE SYNTHESIS:\nIodide uptake → oxidation to iodine (TPO enzyme) → iodination of tyrosine residues on thyroglobulin → coupling → T4 (thyroxine) + T3 (triiodothyronine)\nT4 : T3 ratio secreted = 20:1 (T4 is the prohormone)\nPeripheral conversion of T4 → T3 by deiodinase (liver, kidney, muscle)\nT3 is 4× more potent than T4\n\nHPT AXIS:\nHypothalamus → TRH → Anterior pituitary → TSH → Thyroid → T3/T4\nNegative feedback: T3/T4 inhibit TRH and TSH release\n\nHYPOTHYROIDISM:\nPrimary: ↑ TSH, ↓ T4 (thyroid failure — Hashimoto's, post-RAI, post-thyroidectomy)\nSecondary: ↓ TSH, ↓ T4 (pituitary failure)\nSymptoms: weight gain, fatigue, cold intolerance, bradycardia, constipation, depression, menorrhagia, dry skin, delayed reflexes\nTreatment: levothyroxine (T4) — monitor TSH, target normal range\n\nHYPERTHYROIDISM:\nGraves disease: TSH receptor antibodies → stimulate thyroid → ↑ T4/T3 + exophthalmos\nSymptoms: weight loss, heat intolerance, tachycardia, AF, diarrhoea, anxiety, tremor, goitre\nTreatment: carbimazole (blocks TPO) / propylthiouracil / radioactive iodine / surgery\n\nDRUG INTERACTIONS:\nAmiodarone: 37% iodine → hypothyroidism (most common) or thyrotoxicosis\nLithium: inhibits thyroid hormone release → hypothyroidism",
        kp:[
          "T4 is the prohormone; peripheral conversion to T3 (active form) by deiodinase",
          "Primary hypothyroidism: high TSH + low T4 — TSH is the most sensitive screening test",
          "Graves disease: TSH receptor antibodies — the only cause of hyperthyroidism with exophthalmos",
          "Amiodarone contains 37% iodine — causes thyroid dysfunction in up to 15% of patients",
          "Levothyroxine: take 30 minutes before breakfast; do not co-administer with iron or calcium"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"TSH interpretation is the most tested endocrine topic. High TSH = primary hypothyroidism (thyroid failing, pituitary working hard). Low TSH + high T4 = primary hyperthyroidism (thyroid overactive, pituitary suppressed). Low TSH + low T4 = secondary hypothyroidism (pituitary failing). Low TSH + low-normal T4 in sick patient = sick euthyroid syndrome (not true hypothyroidism — do not treat)."},
          {role:"pharm_student", type:"clinical", text:"Levothyroxine drug interactions are clinically critical. Absorption reduced by: calcium, iron, antacids, cholestyramine, omeprazole (give L-thyroxine 4 hours apart). Metabolism increased by: rifampicin, phenytoin, carbamazepine (increase dose). Amiodarone: complex interaction — monitor TFTs every 6 months in all patients on amiodarone. Propylthiouracil in pregnancy: preferred in first trimester (carbimazole teratogenic)."},
          {role:"nursing_student", type:"clinical", text:"Thyroid storm (thyrotoxic crisis) is a life-threatening emergency. Precipitated by: surgery, infection, trauma, radioactive iodine in unprepared patient. Features: high fever (>40°C), tachycardia/AF, agitation/delirium, vomiting, heart failure. Treatment: propylthiouracil (blocks synthesis AND peripheral conversion), Lugol's iodine (blocks release — give 1 hour after PTU), propranolol (controls tachycardia), dexamethasone, supportive care. This is an ICU emergency."},
          {role:"allied_student", type:"practical", text:"TFT interpretation requires clinical context. TSH alone is sufficient for stable treated hypothyroidism monitoring (target 0.5–2.5 mU/L in most adults). TSH + free T4 for: initial diagnosis, pituitary disease, pregnancy, amiodarone therapy. TSH + free T3 if T3 toxicosis suspected (normal T4 + suppressed TSH). Anti-TPO antibodies: diagnose Hashimoto's. TSH receptor antibodies: diagnose and monitor Graves disease."},
          {role:"resident", type:"clinical", text:"Hypothyroidism in pregnancy: TSH targets differ by trimester (T1: 0.1–2.5, T2: 0.2–3.0, T3: 0.3–3.5 mU/L). Uncontrolled hypothyroidism causes: miscarriage, preterm birth, impaired fetal neurodevelopment, pre-eclampsia. Levothyroxine dose increases by ~25–50% in first trimester — check TFTs every 4 weeks in first half of pregnancy. Every pregnant woman known hypothyroid needs TFTs at booking."},
        ]
      },
      {
        h:"🩸 Glucose Regulation — Insulin, Glucagon & the Metabolic Dance",
        a:"Blood glucose is regulated within an extraordinarily tight range — 3.9 to 6.1 mmol/L — by a constant dance between insulin and glucagon. When this dance breaks down, we call it diabetes. Understanding the choreography explains not just diabetes but the mechanism of every anti-diabetic drug, the pathophysiology of the metabolic syndrome, and the management of diabetic emergencies.",
        c:"INSULIN (beta cells of pancreas):\nStimulated by: glucose, amino acids, GLP-1, GIP, vagal tone\nActions:\n→ Liver: ↑ glycogen synthesis, ↓ glycogenolysis, ↓ gluconeogenesis\n→ Muscle: ↑ glucose uptake (GLUT4), ↑ glycogen synthesis, ↑ protein synthesis\n→ Fat: ↑ lipogenesis, ↓ lipolysis\nOverall: ANABOLIC — builds and stores\n\nGLUCAGON (alpha cells):\nStimulated by: hypoglycaemia, amino acids, stress, fasting\nActions: ↑ glycogenolysis, ↑ gluconeogenesis, ↑ lipolysis, ↑ ketogenesis\nOverall: CATABOLIC — breaks down and releases\n\nDIABETIC KETOACIDOSIS (DKA) — TYPE 1:\nAbsolute insulin deficiency → ↑↑ glucagon → unrestrained lipolysis → FFA → ketone bodies (acetoacetate, beta-hydroxybutyrate) → metabolic acidosis\nTriad: hyperglycaemia + ketonaemia + metabolic acidosis\nTreatment: IV fluids + insulin infusion + K⁺ replacement (never start insulin before correcting severe hypokalaemia)\n\nHHNKS (TYPE 2):\nSome insulin present → no ketosis → extreme hyperglycaemia (>30 mmol/L) + severe dehydration\nTreatment: gradual rehydration (rapid correction → cerebral oedema risk)\n\nHYPOGLYCAEMIA:\nSymptoms <3.9 mmol/L: sweating, tremor, tachycardia (adrenergic)\n<2.8 mmol/L: confusion, seizure (neuroglycopaenic)\nTreatment: oral glucose if conscious, IV dextrose 50ml 50% or glucagon 1mg IM if unconscious",
        kp:[
          "Insulin: anabolic — promotes glucose uptake, glycogen synthesis, lipogenesis",
          "Glucagon: catabolic — promotes glycogenolysis, gluconeogenesis, ketogenesis",
          "DKA: absolute insulin deficiency → ketosis + acidosis; always replace K⁺ before insulin",
          "HHNKS: relative insulin deficiency → no ketosis, extreme hyperglycaemia, severe dehydration",
          "GLP-1 agonists (semaglutide) and SGLT2 inhibitors target specific physiological pathways"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"DKA potassium management is the most examined emergency metabolic question. Why check K⁺ before starting insulin? Insulin drives K⁺ into cells (like Na⁺/K⁺-ATPase, insulin activates K⁺ uptake). DKA patients appear hyperkalaemic (acidosis shifts K⁺ out of cells) but are TOTAL BODY K⁺ DEPLETED. Give insulin → K⁺ drops rapidly → fatal arrhythmia. Rule: never give insulin if K⁺ <3.5 mmol/L without first correcting K⁺."},
          {role:"pharm_student", type:"clinical", text:"Anti-diabetic drug mechanisms in one framework: metformin → ↓ hepatic gluconeogenesis. Sulfonylureas → close K⁺ channels in beta cells → depolarise → ↑ insulin release. SGLT2 inhibitors → block renal glucose reabsorption → glucosuria. GLP-1 agonists → glucose-dependent insulin release + ↓ glucagon + ↓ appetite. DPP-4 inhibitors → prevent GLP-1 degradation. Insulin → direct hormone replacement. Each targets a different step in glucose physiology."},
          {role:"nursing_student", type:"clinical", text:"Sick day rules for diabetic patients: illness increases counter-regulatory hormones (cortisol, adrenaline) → hyperglycaemia. Key messages: never stop insulin even if not eating (may need more, not less). Check glucose every 2–4 hours. Check ketones if glucose >14 mmol/L. Seek medical help if: cannot keep fluids down, ketones ≥3 mmol/L, glucose >20 mmol/L despite extra insulin, confused or drowsy."},
          {role:"allied_student", type:"practical", text:"HbA1c interpretation: reflects average blood glucose over 8–12 weeks (lifespan of RBC). Target: <53 mmol/mol (7%) for most type 2 diabetics; <48 mmol/mol (6.5%) for some; less stringent in elderly/frail (≤64 mmol/mol). Falsely LOW in: haemolytic anaemia, recent blood transfusion, haemoglobinopathies (sickle cell). Falsely HIGH in: iron deficiency anaemia, vitamin B12 deficiency. Fructosamine is alternative when HbA1c unreliable (reflects 2–3 weeks only)."},
          {role:"resident", type:"clinical", text:"Perioperative diabetes management: surgery causes hyperglycaemia (stress hormones). Target glucose 6–10 mmol/L perioperatively (tight control increases hypoglycaemia risk). Variable rate IV insulin infusion (VRIII) for: type 1 diabetes (any surgery), type 2 on insulin (major surgery), glucose >12 mmol/L. Stop metformin day of surgery (lactic acidosis risk with anaesthesia). Restart when eating and drinking normally. SGLT2 inhibitors: stop 3 days pre-operatively (euglycaemic DKA risk)."},
        ]
      },
    ],
    ev:"Guyton & Hall 14th Ed; ADA Standards of Care 2024; JBDS DKA Guidelines 2023; European Thyroid Guidelines 2022"
  },

  {
    id:7, num:"07", icon:"🧠", free:false, dur:"2h 30m", lessons:9, color:"#4A235A",
    title:`The Command Centre", sub:"Neurophysiology & Special Senses`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"The brain contains 86 billion neurons, each making up to 10,000 connections. It weighs 1.4kg and uses 20% of the body's energy. It is the most complex object in the known universe — and when it fails, everything fails.",
    story:`Kafui is a final-year medical student doing his neurology rotation.\n\nA 68-year-old woman is brought in by her daughter. "She woke up this morning and couldn't speak properly. Her face is drooping on one side."\n\nKafui examines her. Left facial droop. Right arm weakness. Expressive aphasia — she understands everything but cannot form words.\n\nHe thinks: left hemisphere stroke. Broca's area.\n\nHe knows this because he knows neuroanatomy. He knows which artery supplies Broca's area (MCA superior division). He knows the time window for thrombolysis (4.5 hours). He knows the NIHSS score will determine eligibility.\n\nHe acts.\n\nThe patient receives IV alteplase within 90 minutes of symptom onset. Her speech begins returning within hours.\n\nNeuroscience saved this woman. This module is that neuroscience.`,
    sections:[
      {
        h:"⚡ Synaptic Transmission — How Neurons Talk",
        a:"If action potentials are the language of neurons, synaptic transmission is the grammar — the rules that govern how one neuron passes its message to the next. Every drug acting on the nervous system — from anaesthetics to antidepressants, from anticonvulsants to antipsychotics — works by modifying synaptic transmission. Understanding synapses is understanding all of neuropsychopharmacology.",
        c:"THE SYNAPSE — STRUCTURE:\nPresynaptic terminal → synaptic cleft (20nm) → postsynaptic membrane\nVesicles containing neurotransmitters stored in presynaptic terminal\n\nTRANSMISSION STEPS:\n1. AP arrives at presynaptic terminal\n2. Voltage-gated Ca²⁺ channels open → Ca²⁺ influx\n3. Vesicle fusion with membrane (SNARE proteins) → exocytosis of neurotransmitter\n4. Neurotransmitter crosses cleft → binds postsynaptic receptors\n5. Ion channels open (ionotropic) or G-protein cascade (metabotropic)\n6. Neurotransmitter removed: reuptake, enzymatic degradation, diffusion\n\nMAJOR NEUROTRANSMITTERS:\nGLUTAMATE (excitatory): NMDA, AMPA receptors. Main excitatory NT of CNS.\nGABA (inhibitory): GABA-A (Cl⁻ channel), GABA-B (K⁺ channel). Main inhibitory NT.\nDOPAMINE: reward, movement (nigrostriatal), prolactin inhibition (tuberoinfundibular)\nSEROTONIN (5-HT): mood, appetite, sleep, gut motility\nNORADRENALINE: arousal, attention, autonomic\nACETYLCHOLINE: NMJ (nicotinic), ANS, memory (muscarinic)\n\nPHARMACOLOGICAL TARGETS:\nSSRIs: block serotonin reuptake transporter\nTCAs: block noradrenaline + serotonin reuptake\nBenzodiazepines: enhance GABA-A receptor (↑ Cl⁻ frequency)\nLevodopa: dopamine precursor (crosses BBB)\nAChE inhibitors (donepezil): prevent ACh degradation → ↑ synaptic ACh",
        kp:[
          "Ca²⁺ influx at presynaptic terminal triggers neurotransmitter vesicle exocytosis",
          "Glutamate = main CNS excitatory NT (NMDA, AMPA); GABA = main inhibitory NT",
          "Benzodiazepines enhance GABA-A (Cl⁻ channel) — increase frequency of channel opening",
          "SSRIs block serotonin reuptake transporter — increase synaptic serotonin",
          "Dopamine pathways: nigrostriatal (movement), mesolimbic (reward), tuberoinfundibular (prolactin)"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Benzodiazepine vs barbiturate mechanism is a frequent exam distinction. Benzodiazepines: increase FREQUENCY of Cl⁻ channel opening (safe — cannot maximally activate without GABA). Barbiturates: increase DURATION of Cl⁻ channel opening AND can activate independently of GABA (dangerous — respiratory depression at high doses). This is why benzodiazepine overdose alone rarely kills, but barbiturate overdose does."},
          {role:"pharm_student", type:"clinical", text:"The dopamine pathway determines antipsychotic side effects. Block mesolimbic dopamine → antipsychotic effect (target). Block nigrostriatal dopamine → extrapyramidal side effects (EPS): parkinsonism, dystonia, akathisia, tardive dyskinesia (unwanted). Block tuberoinfundibular dopamine → hyperprolactinaemia → galactorrhoea, amenorrhoea, sexual dysfunction. Clozapine avoids EPS (weak D2 at nigrostriatal) but causes agranulocytosis — mandatory weekly WBC monitoring."},
          {role:"nursing_student", type:"clinical", text:"Serotonin syndrome vs neuroleptic malignant syndrome: both are drug reactions but completely different mechanisms and treatments. Serotonin syndrome: excess serotonin (SSRIs, MAOIs, tramadol, linezolid) → triad of mental changes + autonomic instability + neuromuscular abnormality (clonus, hyperreflexia). NMS: dopamine blockade (antipsychotics) → hyperthermia + rigidity + autonomic instability + altered consciousness. Treatment differs — cyproheptadine for SS, bromocriptine/dantrolene for NMS."},
          {role:"allied_student", type:"practical", text:"CSF analysis maps to neurophysiology. Normal CSF: clear, colourless, protein 0.15–0.45 g/L, glucose 60–80% plasma glucose, <5 white cells. Bacterial meningitis: cloudy, protein ↑↑, glucose ↓ (<50% plasma), neutrophils ↑↑. Viral meningitis: clear, protein mildly ↑, glucose normal, lymphocytes ↑. TB meningitis: fibrin web, protein ↑↑, glucose ↓, lymphocytes ↑, AFB (rarely seen). Each pattern tells you which part of the CNS inflammatory response is active."},
          {role:"resident", type:"clinical", text:"Status epilepticus management uses GABA physiology. First line: benzodiazepines (lorazepam IV or diazepam PR) — enhance GABA-A within minutes. Second line: phenytoin/levetiracetam IV — longer duration. Third line: phenobarbital IV — barbiturate, enhances + directly activates GABA-A. Refractory (>45 min): propofol or thiopentone infusion (general anaesthesia). Escalation mirrors increasing GABA pathway potentiation."},
        ]
      },
    ],
    ev:"Kandel's Principles of Neural Science 6th Ed; Guyton & Hall 14th Ed; NICE Epilepsy Guidelines 2022"
  },

  {
    id:8, num:"08", icon:"🏃", free:false, dur:"2h 00m", lessons:7, color:"#1B4F72",
    title:`The Integrated Body", sub:"Musculoskeletal, Haematology & Integrated Physiology`,
    aud:["med_student","pharm_student","nursing_student","allied_student","resident"],
    tagline:"The body is not a collection of separate systems. It is one integrated organism — where every system supports and depends on every other. This final module ties the threads together.",
    story:`It is the final physiology lecture of the year. Professor Eyram addresses the entire first-year class.\n\n"You have spent this year learning systems," she says. "Cardiovascular. Respiratory. Renal. Endocrine. Neurology. But I want you to do something now. I want you to think about what happens when a 60-year-old man with heart failure, type 2 diabetes, CKD stage 3, and atrial fibrillation stands up too quickly from his chair."\n\nShe pauses.\n\n"His baroreceptors fire — cardiovascular. His muscles need oxygen — respiratory. His kidneys regulate his fluid balance — renal. His insulin resistance affects his energy — endocrine. His brain coordinates the entire response — neurology."\n\nShe smiles at the room.\n\n"That is one second of standing up. Now you understand physiology."`,
    sections:[
      {
        h:"💪 Muscle Physiology — Contraction, Fatigue & Exercise",
        a:"Muscle contraction is one of the most elegant molecular machines in biology — a nanoscale engine powered by ATP, controlled by calcium, and coordinated by the nervous system. Understanding it explains not just muscle physiology but also the mechanism of neuromuscular blocking drugs, myasthenia gravis, malignant hyperthermia, and cardiac contractility.",
        c:"SKELETAL MUSCLE CONTRACTION (Sliding Filament Theory):\n1. Motor neurone AP → ACh release at NMJ\n2. ACh binds nicotinic receptor → depolarisation → muscle AP\n3. T-tubules transmit AP to SR (sarcoplasmic reticulum)\n4. Ca²⁺ released from SR → binds troponin C\n5. Tropomyosin moves → exposes myosin-binding sites on actin\n6. Myosin heads bind actin → power stroke → filaments slide → sarcomere shortens\n7. ATP binds myosin → detachment → reset\n\nEXCITATION-CONTRACTION COUPLING:\nDHPR (voltage sensor) in T-tubules → activates RyR1 (ryanodine receptor) → Ca²⁺ release from SR\n\nNEUROMUSCULAR JUNCTION DRUGS:\nSuccinylcholine: depolarising NMB — persistent NMJ stimulation → desensitisation. Used for RSI.\nRocuronium/vecuronium: non-depolarising NMB — competitive ACh antagonist. Reversed by sugammadex.\nNeostigmine: AChE inhibitor → ↑ ACh → reverses non-depolarising NMB\nMalignant hyperthermia: RyR1 mutation → uncontrolled Ca²⁺ release → muscle rigidity + hyperthermia. Dantrolene (RyR1 blocker) = treatment.\n\nFIBRE TYPES:\nType I (slow twitch): oxidative, fatigue-resistant, postural muscles, marathon\nType II (fast twitch): glycolytic, fast fatigue, power movements, sprint",
        kp:[
          "Sliding filament: Ca²⁺ binds troponin C → tropomyosin moves → actin-myosin cross-bridge",
          "Succinylcholine: depolarising NMB — used for RSI; causes fasciculations",
          "Malignant hyperthermia: RyR1 mutation → uncontrolled Ca²⁺ release → treat with dantrolene",
          "Type I fibres: slow, oxidative, fatigue-resistant; Type II: fast, glycolytic, fatigue-prone",
          "Sugammadex: reverses rocuronium/vecuronium by encapsulating the drug molecule"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Malignant hyperthermia trigger agents and treatment are essential emergency pharmacology. Triggers: succinylcholine + volatile anaesthetic agents (halothane, sevoflurane, desflurane). Mechanism: RyR1 mutation → massive Ca²⁺ release → sustained contraction → hyperthermia, rigidity, metabolic acidosis, rhabdomyolysis, hyperkalaemia. Treatment: STOP trigger agent. Dantrolene 2.5mg/kg IV bolus (blocks RyR1). Cool patient. Treat acidosis and hyperkalaemia. ICU admission."},
          {role:"pharm_student", type:"clinical", text:"Neuromuscular blocking drugs are among the highest-risk medications in anaesthesia. Succinylcholine: rapid onset (60 seconds), duration 10 minutes. Contraindicated in: burns, crush injury, prolonged immobility, neuromuscular disease, hyperkalaemia (causes K⁺ release → fatal arrhythmia). Rocuronium: slower onset but sugammadex can reverse immediately if intubation fails. Sugammadex revolutionised airway management safety."},
          {role:"nursing_student", type:"clinical", text:"Post-operative residual neuromuscular blockade (PRNB) is a serious complication. Signs: inability to sustain head lift >5 seconds, weak grip, diplopia, hypoxia. Cause: inadequate reversal of non-depolarising NMB. Prevention: confirm reversal with TOF monitoring. Treatment: additional neostigmine or sugammadex. PRNB increases aspiration risk and respiratory complications — essential knowledge for recovery room nurses."},
          {role:"allied_student", type:"practical", text:"Creatine kinase (CK) is your muscle injury biomarker. Rises 4–6 hours after muscle damage, peaks 24–72 hours. Normal: <200 U/L. Mild elevation (<1000): muscle strain, statins. Moderate (1000–10,000): myositis, myocardial infarction (CK-MB isoform). Severe (>10,000): rhabdomyolysis — risk of AKI. In malignant hyperthermia: CK can reach >100,000 U/L. Always check isoforms: CK-MB (cardiac), CK-MM (skeletal), CK-BB (brain)."},
          {role:"resident", type:"clinical", text:"Rhabdomyolysis management: CK >1000 U/L with myoglobinuria (dark urine). Causes: crush injury, extreme exercise, statins, alcohol, malignant hyperthermia, seizures. Mechanism: myoglobin precipitates in tubules → AKI. Treatment: aggressive IV hydration (target urine output 200–300ml/hour), alkalinise urine (bicarbonate — prevents myoglobin precipitation), monitor electrolytes (hyperkalaemia, hypocalcaemia, hyperphosphataemia). Stop causative agent."},
        ]
      },
      {
        h:"🩸 Haematology Physiology — Blood, Coagulation & Immunity",
        a:"Blood is not just a transport fluid — it is a living tissue containing cells with specialised functions, a coagulation cascade of extraordinary complexity, and an immune army of remarkable sophistication. Understanding blood physiology explains haematological diseases, transfusion medicine, anticoagulation, and the immune response to infection.",
        c:"RED BLOOD CELLS:\nLifespan: 120 days → phagocytosed by spleen/liver macrophages\nHb structure: 4 globin chains + 4 haem groups (each binds 1 O2)\nMCV: 80–100 fL (normocytic), <80 (microcytic), >100 (macrocytic)\n\nANAEMIA CLASSIFICATION:\nMICROCYTIC (MCV <80): Iron deficiency, thalassaemia, sideroblastic, anaemia of chronic disease\nNORMOCYTIC (MCV 80–100): Acute blood loss, haemolysis, bone marrow failure, CKD\nMACROCYTIC (MCV >100): B12/folate deficiency, alcohol, hypothyroidism, drug-induced (methotrexate, hydroxyurea)\n\nCOAGULATION CASCADE:\nExtrinsic pathway: tissue factor + VIIa → Xa\nIntrinsic pathway: XII → XI → IX → VIIIa → Xa\nCommon pathway: Xa + Va → thrombin → fibrinogen → fibrin + XIII → stable clot\n\nCLINICAL MONITORING:\nPT/INR: extrinsic + common pathway. Warfarin effect.\nAPTT: intrinsic + common pathway. Heparin effect.\nTEG/ROTEM: whole blood clot formation and lysis — guides massive transfusion\n\nBLOOD GROUPS:\nABO: A antigen + B antigen on RBCs. Anti-A and Anti-B antibodies in plasma.\nO negative: universal donor (no antigens). AB positive: universal recipient.\nRhesus: D antigen. Rh-negative mother + Rh-positive baby → haemolytic disease of newborn\nAnti-D prophylaxis: prevents sensitisation in Rh-negative mothers",
        kp:[
          "MCV guides anaemia classification: microcytic (iron, thalassaemia), macrocytic (B12, folate)",
          "PT/INR measures extrinsic pathway (warfarin); APTT measures intrinsic (heparin)",
          "Tissue factor initiates coagulation — exposed by vessel injury or inflammation",
          "O negative: universal donor; AB positive: universal recipient",
          "Anti-D: prevents Rh sensitisation — give within 72 hours of sensitising event"
        ],
        callouts:[
          {role:"med_student", type:"exam", text:"Anaemia investigation sequence: Step 1 — MCV (micro/normo/macro). Step 2 — reticulocyte count (high = production response = haemolysis or blood loss; low = bone marrow failure or deficiency). Step 3 — blood film (hypochromic microcytic = iron deficiency; megaloblastic = B12/folate; target cells = liver disease/thalassaemia; spherocytes = hereditary spherocytosis or autoimmune haemolysis). Systematic approach every time."},
          {role:"pharm_student", type:"clinical", text:"Anticoagulant monitoring: Warfarin (vitamin K antagonist): monitor INR. Target 2–3 for AF, 2.5–3.5 for metallic heart valve. UFH (unfractionated heparin): monitor APTT (target 1.5–2.5× normal). LMWH: monitor anti-Xa in special populations (renal impairment, extreme weight, pregnancy). DOACs (rivaroxaban, apixaban): do NOT require routine monitoring — level measurement available for emergencies. Reversal agents: protamine (UFH/LMWH), vitamin K (warfarin), idarucizumab (dabigatran), andexanet alfa (Xa inhibitors)."},
          {role:"nursing_student", type:"clinical", text:"Blood transfusion bedside checks are non-negotiable. Before transfusion: verify patient ID (wristband) against blood unit label — name, DOB, hospital number, blood group, unit number. Two nurses or one nurse + one doctor must check. Never use a verbal check alone. Reactions: within first 15 minutes — febrile non-haemolytic (most common, mild). Anaphylaxis and ABO incompatibility (most dangerous) also occur in first 15 minutes — NEVER leave the patient unattended in this period."},
          {role:"allied_student", type:"practical", text:"Blood film interpretation is your most powerful morphological tool. Hypochromic microcytic + pencil cells = iron deficiency. Oval macrocytes + hypersegmented neutrophils (>5 lobes) = megaloblastic (B12/folate). Target cells (codocytes) = liver disease, thalassaemia, haemoglobin C. Schistocytes (fragments) = microangiopathic haemolytic anaemia (TTP, HUS, DIC). Sickle cells = sickle cell disease. Rouleaux = multiple myeloma/high ESR. Each morphology tells a complete diagnostic story."},
          {role:"resident", type:"clinical", text:"Massive transfusion protocol (MTP): ≥10 units pRBC in 24 hours. Empirical ratio: pRBC : FFP : platelets = 1:1:1 (damage control resuscitation). Avoid crystalloid overload. Monitor: fibrinogen (give cryoprecipitate if <1.5g/L), ionised calcium (give Ca²⁺ gluconate — citrate in transfused blood chelates calcium), temperature (warm all products), pH (treat acidosis). TXA 1g IV within 3 hours of injury reduces mortality. ROTEM/TEG guides targeted product replacement once available."},
        ]
      },
    ],
    ev:"Guyton & Hall 14th Ed; BSH Guidelines Haematology 2023; Oxford Handbook of Clinical Haematology; ATLS Manual 10th Ed"
  },
];

export const PHYS_PRE_Q = [
  {q:"The resting membrane potential of a typical neuron is approximately:",
   opts:["-90 mV","-70 mV","-55 mV","0 mV"],ans:1},
  {q:"Which ion channel opens first during the rising phase of an action potential?",
   opts:["Voltage-gated K⁺ channels","Voltage-gated Ca²⁺ channels","Voltage-gated Na⁺ channels","Ligand-gated Cl⁻ channels"],ans:2},
  {q:"In the Frank-Starling law, increased preload results in:",
   opts:["Decreased stroke volume","Increased heart rate","Increased stroke volume up to an optimal point","No change in cardiac output"],ans:2},
  {q:"Which spirometry pattern shows reduced FEV1/FVC ratio with increased TLC?",
   opts:["Restrictive","Obstructive","Mixed","Normal"],ans:1},
  {q:"Which enzyme is inhibited by proton pump inhibitors?",
   opts:["Na⁺/K⁺-ATPase","H⁺/K⁺-ATPase","Carbonic anhydrase","Adenylyl cyclase"],ans:1},
];

export const PHYS_POST_Q = [
  {q:"A 72-year-old man presents with ankle oedema, orthopnoea and a third heart sound. His ejection fraction is 28%. Which physiological principle best explains his reduced stroke volume?",
   opts:["Decreased preload due to poor venous return","Reduced contractility causing downward shift of the Starling curve","Increased heart rate reducing filling time","Reduced afterload from vasodilation"],ans:1},
  {q:"A COPD patient on 2L/min O2 becomes increasingly drowsy. ABG shows pH 7.28, PaCO2 9.2 kPa, PaO2 11.8 kPa. What is the most likely mechanism?",
   opts:["Pure V/Q mismatch worsening","Haldane effect and V/Q mismatch causing CO2 retention with high-flow oxygen","Diffusion limitation from emphysema","Shunt physiology from airway collapse"],ans:1},
  {q:"A patient starts DKA treatment. Potassium is 3.2 mmol/L. What should you do before starting insulin?",
   opts:["Start insulin immediately as hyperglycaemia is the priority","Replace potassium to >3.5 mmol/L before starting insulin","Give bicarbonate first to correct the acidosis","Administer glucagon to stimulate endogenous insulin"],ans:1},
  {q:"A patient with suspected pulmonary embolism has PaO2 of 7.2 kPa on room air. On 100% O2, PaO2 rises to 43 kPa. What does this response indicate?",
   opts:["Intracardiac shunt — does not respond to O2","V/Q mismatch — significant improvement with O2","ARDS — refractory hypoxia despite high FiO2","Hypoventilation — normal A-a gradient"],ans:1},
  {q:"A patient on succinylcholine for rapid sequence intubation develops jaw rigidity and a temperature of 40.2°C. The most appropriate immediate treatment is:",
   opts:["Cooling blankets and antipyretics only","Dantrolene 2.5mg/kg IV and cessation of all trigger agents","Rocuronium reversal with sugammadex","Naloxone IV as this is an opioid reaction"],ans:1},
];
