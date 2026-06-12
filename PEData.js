
const MODS = [
  {id:1,num:"01",icon:"🧬",free:true,dur:"2h 30m",lessons:8,color:"#8B1A4A",
   title:"The Enemy Within",sub:"Pathophysiology & Molecular Mechanisms",
   aud:["doctor","nurse","pharmacist","labtech","student"],
   tagline:"Every war starts with a broken treaty. This one starts in the womb.",
   story:`It is 2:47 AM. Ward 6B, Korle-Bu Teaching Hospital. Sister Abena has just checked the blood pressure of bed 4 — a 24-year-old primigravida at 32 weeks.\n\n152/101 mmHg.\n\nShe rechecks. Same reading. The patient, young Akosua, is smiling, oblivious. "I feel fine," she says, rubbing her bump. "Just a little headache."\n\nSister Abena does not smile back. She has seen this before. She reaches for the call button.\n\nWhat Sister Abena knows — what you are about to learn at the molecular level — is that something went catastrophically wrong in Akosua's body sixteen weeks ago. Not today. Not last week. Sixteen weeks ago. A silent betrayal deep in the placental bed, invisible on any scan, unfelt by any patient.\n\nWelcome to the enemy within. Let us chase it to its origin.`,
   sections:[
     {h:"🏗️ The Building Permit That Was Never Issued",
      a:`Think of early pregnancy like a major construction project. The trophoblast cells — the baby's building crew — need to drill deep into the mother's uterine wall to tap the blood supply. Normally, they get a full permit: invade deeply, remodel the spiral arteries from narrow, high-resistance pipes into wide, low-resistance conduits — upgrading a garden hose into a fire hydrant. Blood flows freely. Baby grows. In preeclampsia, that permit is denied.`,
      c:`The trophoblast invasion is shallow — spiral arteries remain narrow and reactive, like a permanently kinked garden hose. The placenta, deprived of adequate blood flow, becomes ischaemic and frustrated. It begins releasing distress signals that become bullets wounding the mother.\n\nEVIDENCE: Brosens et al. (1972) first described "failure of physiological transformation of spiral arteries." Replicated in hundreds of studies, this remains the cornerstone of our understanding. Depth of trophoblast invasion in preeclamptic pregnancies is significantly reduced compared to normotensive controls (Pijnenborg et al., BJOG 2006).`,
      kp:["Cytotrophoblast invasion is reduced in depth and breadth","Spiral arteries remain muscular and reactive rather than wide passive conduits","Uteroplacental ischaemia triggers release of damaging factors","This failure begins at 8–18 weeks — long before clinical signs appear"],
      callouts:[
        {role:"student",type:"exam",text:"Classic exam question: What is the mechanism of impaired trophoblast invasion in preeclampsia? Answer: Failure of physiological transformation of spiral arteries — they remain narrow muscular vessels instead of becoming wide, low-resistance conduits."},
        {role:"nurse",type:"clinical",text:"This is why PE symptoms appear late in pregnancy — the damage started weeks earlier. When a woman presents with BP 144/93 at 36 weeks, the placental war has been raging since week 12. Early antenatal attendance is therefore critical."},
        {role:"doctor",type:"clinical",text:"The two-stage model explains heterogeneity — some women with poor placentation never develop clinical PE due to insufficient maternal inflammatory response. This informs why population-level screening (not just high-risk) is the only effective detection strategy."},
        {role:"pharmacist",type:"clinical",text:"The shallow invasion and ischaemia that starts this cascade is exactly what aspirin 150mg nocte aims to prevent — by improving prostacyclin/thromboxane balance in the early spiral artery remodelling window (before 16 weeks)."},
        {role:"labtech",type:"practical",text:"Placental ischaemia is the upstream trigger for ALL the biomarker changes you will measure — rising sFlt-1, falling PlGF, rising LDH. Understanding this helps you contextualise abnormal results rather than reporting them in isolation."},
      ]},
     {h:"⚗️ The Broken Sprinkler System — Angiogenic Imbalance",
      a:`Your body's blood vessels need regular 'watering' to stay healthy — via a sprinkler system called VEGF and PlGF. These keep endothelial cells nourished, flexible, and functional. Now imagine someone secretly pours weedkiller into that sprinkler system. That weedkiller is sFlt-1 — Soluble FMS-like Tyrosine Kinase-1. The ischaemic placenta pumps massive sFlt-1 into the maternal bloodstream. It binds and neutralises free PlGF and VEGF before they can work. The sprinklers are poisoned. The endothelium begins to die.`,
      c:`This angiogenic imbalance is the most important molecular mechanism in PE:\n• sFlt-1 ↑↑↑ (produced by ischaemic placenta)\n• PlGF ↓↓↓ (captured and neutralised)\n• VEGF ↓↓ (similarly captured)\n\nTHE PROGNOSIS STUDY (Zeisler et al., NEJM 2016): In women suspected of PE at 24–36 weeks, sFlt-1/PlGF ratio ≤38 had NPV of 99.3% for ruling out PE within 1 week. Ratio >85 strongly predicted imminent severe PE.\n\nThe ratio elevation precedes clinical symptoms by 5–10 weeks — the war has been raging long before the patient presents to your ward.`,
      kp:["sFlt-1 is the key anti-angiogenic villain — produced by the ischaemic placenta","PlGF and VEGF neutralisation starves the endothelium","sFlt-1/PlGF ratio ≤38 rules out PE within 1 week (NPV 99.3%)","Ratio elevation precedes clinical symptoms by 5–10 weeks"],
      callouts:[
        {role:"student",type:"exam",text:"Exam pearl: sFlt-1/PlGF ratio ≤38 has a NEGATIVE predictive value of 99.3% — meaning it is most useful for RULING OUT PE, not confirming it. Examiners love testing the difference between sensitivity and specificity here."},
        {role:"labtech",type:"practical",text:"When reporting sFlt-1/PlGF, always include the gestational age — the interpretation thresholds differ by gestation. A ratio of 50 at 28 weeks is very different from a ratio of 50 at 35 weeks. Haemolysed samples must be rejected — haemolysis falsely elevates sFlt-1."},
        {role:"doctor",type:"clinical",text:"LANCET 2023 trial data: Using sFlt-1/PlGF ratio to guide admission decisions in suspected PE reduced unnecessary admissions by 26% without increasing adverse outcomes. A ratio ≤38 is powerful enough to safely defer admission with close outpatient follow-up."},
        {role:"pharmacist",type:"clinical",text:"sFlt-1 is now a therapeutic target — pravastatin and metformin (both in active trials) reduce sFlt-1 levels. Understanding the molecular target helps you counsel patients on emerging therapies and anticipate future prescribing changes."},
        {role:"nurse",type:"clinical",text:"A patient with sFlt-1/PlGF >85 is at high risk of needing delivery within 2 weeks. When this result comes back, escalate immediately — do not wait for the next scheduled review. The ratio is your early warning score for biochemical deterioration."},
      ]},
     {h:"🔥 When the Endothelium Goes to War",
      a:`Your blood vessel lining — the endothelium — is normally like a skilled diplomat: smooth, non-stick, anti-inflammatory, anti-clotting, vasodilatory. Deprive it of PlGF and VEGF and it transforms into an angry militant: pro-inflammatory, pro-thrombotic, vasoconstrictive. It starts a war against itself. This explains why PE affects EVERY organ — kidneys, brain, liver, platelets, lungs. Same broken endothelium. Multiple organ casualties.`,
      c:`THE ENDOTHELIAL INJURY CASCADE:\n1. Reduced NO → vasoconstriction → hypertension\n2. Increased endothelin-1 → further vasoconstriction\n3. Reduced prostacyclin, elevated thromboxane A2 → platelet aggregation\n4. Increased capillary permeability → oedema, proteinuria\n5. Oxidative stress → ROS → further endothelial damage\n\nTHE TWO-STAGE MODEL (Redman & Sargent, 2010):\n• Stage 1: Impaired placentation → ischaemia (weeks 8–18, silent)\n• Stage 2: Release of sFlt-1 → maternal systemic endothelial dysfunction → clinical PE`,
      kp:["Endothelial dysfunction is the final common pathway for all organ damage","Reduced NO is the primary mechanism driving hypertension","Two-stage model separates placental cause from maternal syndrome","Oxidative stress amplifies and sustains endothelial injury"],
      callouts:[
        {role:"student",type:"exam",text:"Exam pearl: The two-stage model is frequently examined. Stage 1 = placental (silent, weeks 8-18). Stage 2 = maternal endothelial (clinical, week 20+). This explains why delivering the baby (removing Stage 1) is the only cure."},
        {role:"student",type:"clinical",text:"On ward rounds, watch how PE affects multiple systems simultaneously: BP up (vasospasm), platelets down (endothelial activation), urine protein up (glomerular damage), LFTs up (hepatic endothelial injury). One mechanism. Many organs. One patient."},
        {role:"nurse",type:"clinical",text:"Understanding that endothelial dysfunction affects ALL vessels explains why you monitor so many parameters simultaneously in PE. The MEOWS score captures this multi-organ nature — BP, RR, urine output, and neurology are all endothelial casualties."},
        {role:"pharmacist",type:"clinical",text:"Reduced prostacyclin and elevated thromboxane A2 is the exact biochemical target of aspirin. Aspirin irreversibly inhibits COX-1, reducing thromboxane A2 more than prostacyclin at low doses — restoring the balance toward vasodilation and anti-aggregation."},
        {role:"labtech",type:"practical",text:"The multi-organ endothelial injury is why PE patients have abnormalities across ALL your test panels simultaneously — FBC (platelets), LFT (AST/ALT/LDH), RFT (creatinine/uric acid), coagulation (PT/APTT/fibrinogen), and urinalysis (protein). Run them all together, not sequentially."},
        {role:"doctor",type:"clinical",text:"The complement cascade (C5a, C3a) amplifies endothelial injury in severe PE. This is the basis for emerging complement inhibitor therapies in atypical HELLP and PE overlapping with antiphospholipid syndrome — a frontier worth watching."},
      ]},
     {h:"🧬 The Genetic Blueprint of Vulnerability",
      a:"Why does preeclampsia strike some women and spare others with identical risk factors? The answer lies partly in the genome. The daughter of a woman who had PE has a 20–40% lifetime risk of developing PE herself. This is not coincidence — it is inheritance.",
      c:`KEY GENETIC FACTORS:\n• STOX1 mutations — associated with familial PE (van Dijk et al., Nature 2005)\n• HLA-C and KIR mismatch — immunological basis of failed trophoblast invasion\n• ACVRL1, ENG (endoglin) — TGF-β pathway, regulating angiogenesis\n• COMT mutations — reduces 2-methoxyestradiol, a protective vasodilatory hormone\n\nEPIGENETIC DIMENSION:\nDNA methylation changes in placental genes precede clinical PE. Hypomethylation of the sFlt-1 promoter region increases its expression — the gas pedal of the sFlt-1 engine stuck down. This points toward gene-targeted therapies on the horizon.`,
      kp:["STOX1, HLA-C/KIR, ACVRL1 are key genetic loci in familial PE","KIR-C2 incompatibility impairs trophoblast invasion","COMT deficiency reduces protective 2-methoxyestradiol","Daughters of PE mothers have 20–40% lifetime risk"],
      callouts:[
        {role:"student",type:"exam",text:"Exam tip: When asked about risk factors for PE in an OSCE or MCQ, include family history — a first-degree relative with PE increases personal risk 3-fold. This genetic predisposition is one of the ISSHP 2018 high-risk criteria for aspirin prophylaxis."},
        {role:"doctor",type:"clinical",text:"COMT deficiency as a therapeutic target: supplemental 2-methoxyestradiol (2-ME) is in Phase 1 trials. If your patient has recurrent PE across pregnancies, document for future pharmacogenomic counselling — this field will mature within a decade."},
        {role:"nurse",type:"clinical",text:"When taking obstetric history, always ask: did your mother or sister have high blood pressure in pregnancy? A positive family history should trigger early referral for first-trimester combined screening and aspirin prophylaxis consideration."},
      ]},
   ],
   ev:"Redman & Sargent (2010) Placenta; Zeisler et al. (2016) NEJM; Brosens et al. (1972); ISSHP 2018; ACOG PB 222 (2020)"},

  {id:2,num:"02",icon:"🔍",free:false,dur:"3h 15m",lessons:10,color:"#003087",
   title:"Spotting the Storm",sub:"Diagnosis, Screening & Risk Stratification",
   aud:["doctor","nurse","labtech","student"],
   tagline:"The storm announces itself in whispers. Learn to hear them.",
   story:`Dr. Kwame Asante is presenting at grand rounds. On the screen: a 31-year-old teacher, 36 weeks, headache for two days. Her GP gave her paracetamol. She went home. She returned 18 hours later — seizing.\n\n"What did we miss?" Dr. Asante asks the room.\n\nThe answer is not dramatic. It never is. It was a blood pressure of 144/93, documented at her antenatal visit three days earlier. It was +1 protein on dipstick, waved away as a contaminated sample. It was an epigastric discomfort described as "indigestion."\n\nEach sign, taken alone: unremarkable. Together: a storm already arrived.\n\nThis module teaches you to hear the whispers before the thunder.`,
   sections:[
     {h:"📏 The Diagnostic Criteria — Why Definitions Are Life-and-Death",
      a:"Diagnosing preeclampsia using outdated criteria is like navigating Accra with a 1980s map. The roads have changed. New bypasses exist. Old landmarks are gone. You will get lost — and in medicine, getting lost costs lives.",
      c:`THE ISSHP 2018 DEFINITION (Current Gold Standard):\nPreeclampsia = NEW hypertension (≥140/90 mmHg) after 20 weeks PLUS:\n• Proteinuria (PCR ≥30 mg/mmol or 300mg/24h) OR\n• Maternal organ dysfunction:\n  — Renal: creatinine ≥90 μmol/L\n  — Liver: elevated transaminases >40 IU/L\n  — Haematological: platelets <150,000/μL, DIC, haemolysis\n  — Neurological: eclampsia, altered consciousness, blindness, stroke\n  — Uteroplacental: FGR, abnormal Doppler\n\nCRITICAL: Proteinuria is NO LONGER required. Organ dysfunction alone is sufficient.\nThis ISSHP 2018 change captures an additional 20% of cases missed by older definitions.\n\nBP MEASUREMENT CHECKLIST:\n✅ Right arm, at heart level ✅ 5 minutes rest ✅ Correct cuff size ✅ Patient NOT talking ✅ Korotkoff phase 5 for diastolic`,
      kp:["ISSHP 2018: Proteinuria NOT required — organ dysfunction is sufficient","Severe features: BP ≥160/110 OR any organ dysfunction criterion","Two readings ≥4 hours apart (or ≥15 min if severe) confirm diagnosis","BP technique errors cause most diagnostic errors in PE"],
      callouts:[
        {role:"student",type:"exam",text:"Exam pearl: The ISSHP 2018 change is frequently tested. Old definition required proteinuria. New definition does NOT — organ dysfunction alone qualifies. If you see a patient with BP ≥140/90 + platelets 90,000 and no proteinuria, that IS preeclampsia."},
        {role:"nurse",type:"clinical",text:"BP measurement technique is your most powerful diagnostic tool. Wrong cuff size alone can falsely elevate readings by 10-15 mmHg. Always use the correct cuff: the bladder must encircle at least 80% of the arm. For obese patients, use a large adult or thigh cuff."},
        {role:"doctor",type:"clinical",text:"Superimposed PE on chronic hypertension: look for new proteinuria, worsening BP despite established medication, or new organ dysfunction. The baseline BP that was 'controlled' at booking is your reference — any significant deviation should prompt reassessment."},
        {role:"labtech",type:"practical",text:"Protein:creatinine ratio (PCR) on a spot urine is now preferred over 24-hour collections. PCR ≥30 mg/mmol is significant. Ensure urine samples are mid-stream, clean-catch, and processed within 2 hours. Contaminated samples give false positives — communicate this clearly in your report."},
      ]},
     {h:"🎯 First Trimester Screening — Predicting the Storm 5 Months Early",
      a:`Weather forecasters don't wait for rain to tell you to carry an umbrella. They read atmospheric pressure, wind patterns, and satellite data 5 days ahead. First trimester PE screening is your meteorological service — done at 11–13+6 weeks, reading four signals: Uterine artery PI (resistance in the pipes), Mean arterial pressure (current pressure), Serum PlGF (sprinkler system status), PAPP-A (placental health marker). Combined, these predict 75–90% of preterm PE with only 10% false positive rate.`,
      c:`THE ASPRE TRIAL (Rolnik et al., NEJM 2017) — THE GAME CHANGER:\nRCT of 1,776 high-risk women: aspirin 150mg at bedtime from 11–14 weeks reduced preterm PE by 62%.\nNumber needed to treat: just 8 high-risk women to prevent 1 case of preterm PE.\n\nTHE ALGORITHM:\nStep 1: Calculate prior risk (age, BMI, ethnicity, obstetric history, chronic conditions)\nStep 2: Combined screening (MAP + UA-PI + PlGF + PAPP-A)\nStep 3: If risk ≥1:100 → Aspirin 150mg nocte from 11–14 weeks until 36 weeks\nStep 4: Repeat PlGF ± sFlt-1/PlGF at 20 and 28 weeks in high-risk women\n\nFIGO 2023: Universal first-trimester combined screening recommended as standard of care.`,
      kp:["Combined screening detects 75-90% of preterm PE at 10% false positive rate","ASPRE Trial: aspirin 150mg nocte from 11-14 weeks reduces preterm PE by 62%","Risk threshold for aspirin: ≥1:100 — must start before 16 weeks","FIGO 2023 recommends universal first-trimester combined screening"],
      callouts:[
        {role:"student",type:"exam",text:"Exam pearl: The ASPRE trial used 150mg aspirin at BEDTIME — not 75mg in the morning. Both the dose and timing matter and are frequently tested. Bedtime dosing targets peak platelet thromboxane production which occurs at night."},
        {role:"student",type:"clinical",text:"On your first antenatal booking clinic attachment, observe how the midwife calculates the booking BP — this becomes the baseline MAP for first-trimester screening. Small measurement errors at this stage propagate into inaccurate risk calculations."},
        {role:"pharmacist",type:"clinical",text:"When dispensing aspirin 150mg to a pregnant woman, counsel: take at bedtime (not morning), continue until 36 weeks, do not stop without consulting doctor, report any unusual bleeding. Also check for NSAID co-prescriptions — these interact and worsen BP."},
        {role:"nurse",type:"clinical",text:"As a midwife, you are often the first person to calculate PE risk. Know your antenatal booking clinic's screening protocol. If your unit doesn't use combined first-trimester screening yet, advocate for it — the evidence is overwhelming and the intervention is cheap."},
      ]},
     {h:"⚖️ The Differential Diagnosis — Unmasking the Imposters",
      a:"Preeclampsia wears many disguises. Missing TTP because you're focused on hypertension, or dismissing AFLP as 'hepatitis' — these are the errors that end careers and end lives. You must become a detective.",
      c:`CONDITION | KEY DIFFERENTIATING FEATURES\n\nHELLP Syndrome: Part of PE spectrum. May occur WITHOUT hypertension (atypical HELLP). Diagnose on labs.\n\nAcute Fatty Liver (AFLP): Hypoglycaemia + coagulopathy + jaundice + encephalopathy. Fibrinogen LOW.\n\nTTP: ADAMTS13 activity <10%. Fever, MAHA, renal failure, neurological symptoms.\n\nHUS: Post-diarrhoeal (STEC) or complement-mediated. Severe renal failure dominant. ADAMTS13 normal.\n\nLupus Flare: Anti-dsDNA titre rise, complement fall (C3/C4 ↓). Check ANA, anti-dsDNA.\n\nTHE PEARL: In PE, LDH rises with haemolysis. In AFLP, hypoglycaemia is the hallmark. When in doubt: check glucose, fibrinogen, ADAMTS13, complement.`,
      kp:["HELLP can occur WITHOUT hypertension — diagnose on labs alone","AFLP: hypoglycaemia + coagulopathy + modest enzyme rise = key triad","TTP: ADAMTS13 <10% is diagnostic and changes management entirely","Uric acid >360 μmol/L is a strong predictor of adverse outcomes in PE"],
      callouts:[
        {role:"student",type:"exam",text:"Classic exam scenario: woman at 35 weeks with jaundice, confusion, low blood glucose, and coagulopathy — this is AFLP, NOT PE. The distinguishing features are hypoglycaemia (PE doesn't cause this) and low fibrinogen (consumptive, not haemolytic)."},
        {role:"labtech",type:"practical",text:"When PE/HELLP is suspected, run this panel proactively without waiting for sequential requests: FBC + film, LFT + LDH, RFT + uric acid, coagulation screen (PT, APTT, fibrinogen, D-dimer), urinalysis + PCR. A single comprehensive panel saves critical time."},
        {role:"doctor",type:"clinical",text:"ADAMTS13 assay: request urgently when TTP is suspected. Result <10% confirms TTP and mandates immediate plasma exchange — a completely different management from PE/HELLP. This assay changes everything and must not be delayed."},
      ]},
   ],
   ev:"ASPRE Trial NEJM 2017; ISSHP 2018; FIGO Guidelines 2023; PROGNOSIS Study NEJM 2016"},

  {id:3,num:"03",icon:"🧪",free:false,dur:"2h 45m",lessons:9,color:"#1a5276",
   title:"The Lab Behind the Diagnosis",sub:"Biomarkers, Tests & Emerging Technologies",
   aud:["labtech","doctor","pharmacist","student"],
   tagline:"Behind every clinical decision is a number. Know what that number truly means.",
   story:`Emmanuel is a medical laboratory scientist at a regional hospital in Kumasi. At 11pm, a sample arrives: a 29-year-old at 33 weeks, admitted with "hypertension." Request: FBC, LFT, RFT, urine protein.\n\nEmmanuel processes the samples. Platelets: 87,000/μL. AST: 180 IU/L. Creatinine: 118 μmol/L. Protein:creatinine ratio: 68 mg/mmol.\n\nHe flags the results. He calls the ward.\n\nThree hours later, that patient is in theatre. The obstetric team tells him afterwards: "Your call saved two lives tonight."\n\nEmmanuel did not make a diagnosis. He reported numbers. But he knew what the numbers meant.\n\nDo you?`,
   sections:[
     {h:"🩸 The FBC — Reading the Haematological War Report",
      a:"The FBC in preeclampsia is a battlefield report. Falling platelets are retreating soldiers. Rising haematocrit is the army running out of water. Fragmented red cells are the casualties. Learn to read the report — not just the numbers.",
      c:`PLATELETS — Most Critical Value:\n• <150,000: Thrombocytopenia — PE with severe features\n• <100,000: HELLP Class 2 — escalate to ICU-level care\n• <50,000: HELLP Class 1 — risk of haemorrhage, deliver within 24–48h\n• <20,000: DIC territory — transfuse, deliver immediately\n\nTHE PLATELET CLIFF: In HELLP, platelets don't drift — they fall off a cliff. A drop of 50,000 in 6 hours is a different beast from a drop over 3 days. TREND matters more than absolute value.\n\nHAEMATOCRIT: Rising Hct despite oedema = intravascular depletion. The patient is leaking fluid OUT of vessels. This is why aggressive IV fluids are dangerous — you are filling a leaking bucket.\n\nPERIPHERAL BLOOD FILM: Schistocytes (fragmented RBCs) confirm MAHA. Automated analysers may miss them — manual film is gold standard in suspected HELLP.`,
      kp:["Platelet TREND matters more than any single value — always report with previous result","Schistocytes on film = MAHA = HELLP until proven otherwise","Haemoconcentration (↑Hct + oedema) = dangerous intravascular depletion","HELLP Class 1 (platelets <50,000): delivery within 24-48h"],
      callouts:[
        {role:"student",type:"exam",text:"Exam pearl: In HELLP, the H stands for Haemolysis (not hypertension). Diagnosis requires ALL three: Haemolysis (abnormal film + LDH ≥600) + Elevated Liver enzymes (AST ≥70) + Low Platelets (≤150,000). Missing any one means it is not HELLP by definition."},
        {role:"labtech",type:"practical",text:"Best practice for PE/HELLP monitoring: always include the previous platelet count in your report comment. 'Platelets 95 (previously 187 at 08:00 today — a fall of 92 in 8 hours)' is infinitely more useful to the clinician than 'Platelets 95.' This single habit can change clinical decisions."},
        {role:"doctor",type:"clinical",text:"Platelet transfusion threshold in HELLP: aim for >50,000 before caesarean section, >20,000 for vaginal delivery (though this is controversial). For regional anaesthesia (spinal/epidural), most anaesthetists require >75,000–80,000. Know your unit's thresholds and have blood products on standby."},
        {role:"nurse",type:"clinical",text:"If a patient's platelet count is falling rapidly, watch for signs of bleeding: petechiae on skin, gum bleeding, blood in urine or stools, excessive bruising at IV sites. These are bedside indicators of consumptive coagulopathy — document and escalate immediately."},
        {role:"student",type:"clinical",text:"On clinical attachment, ask to see a HELLP blood film. The schistocytes — crescent-shaped, helmet-shaped red cell fragments — are striking and memorable. Seeing them once means you will recognise them for life."},
      ]},
     {h:"🫀 Liver Function Tests — When the Liver Screams",
      a:"The liver in preeclampsia doesn't whisper. By the time LFTs are significantly elevated, hepatocytes are already dying — periportal necrosis from ischaemia caused by sinusoidal fibrin deposition. The pattern of rise tells you how bad it is. The trend tells you where it's going.",
      c:`INTERPRETING LFTs IN PE:\n• AST >40 IU/L: Mild hepatic involvement — meets HELLP EL criterion\n• AST >200 IU/L: Severe — risk of hepatic infarction\n• AST >500 IU/L: Risk of subcapsular haematoma and hepatic rupture\n\nALT vs AST: In PE/HELLP, AST rises more than ALT (hepatic + haemolytic source). In AFLP, ALT may exceed AST.\n\nLDH — THE FORGOTTEN HERO:\nLDH simultaneously marks haemolysis AND hepatic injury. Values >600 IU/L strongly suggest HELLP. LDH >1400 IU/L is associated with maternal mortality.\n\nTHE EPIGASTRIC PAIN CONNECTION: Severe RUQ/epigastric pain in PE = stretching of Glisson's capsule = hepatic congestion or haematoma. This is a surgical emergency. Never dismiss this symptom.`,
      kp:["AST >40 = hepatic involvement; >200 = severe; >500 = rupture risk","LDH >600 = HELLP marker; >1400 associated with maternal mortality","Epigastric/RUQ pain in PE = hepatic emergency","Always run LDH alongside LFTs in suspected PE/HELLP"],
      callouts:[
        {role:"student",type:"exam",text:"Remember: in HELLP, AST > ALT (because AST has both hepatic and RBC sources — haemolysis contributes). In AFLP, ALT often exceeds AST (pure hepatocellular damage). This AST:ALT ratio helps differentiate when both conditions are on the differential."},
        {role:"labtech",type:"practical",text:"LDH is often omitted from standard LFT panels but is essential in PE monitoring. Proactively add LDH whenever PE/HELLP is in the clinical history. A rising LDH with stable transaminases may be the earliest sign of worsening haemolysis before platelets fall."},
        {role:"doctor",type:"clinical",text:"Subcapsular liver haematoma: suspect when severe RUQ pain + haemodynamic instability + rising haematocrit despite ongoing haemolysis. Bedside ultrasound is your first tool. Avoid vigorous abdominal examination. Do NOT attempt vaginal delivery. Contact hepatobiliary surgery urgently."},
      ]},
     {h:"🔬 The sFlt-1/PlGF Ratio — The Molecular Revolution",
      a:`The sFlt-1/PlGF ratio is like a smoke detector for preeclampsia. It doesn't wait for the fire to be visible. It smells the first molecules of smoke — weeks before the alarm bells ring clinically.`,
      c:`THE ELECSYS PLATFORM (Roche):\nMost validated biomarker test in PE to date.\n\nCLINICAL INTERPRETATION:\n• Ratio ≤38: Rules OUT PE onset within 1 week (NPV 99.3%) — PROGNOSIS Study\n• Ratio 38–85: Indeterminate — close monitoring, repeat in 1 week\n• Ratio >85 (24–34 weeks): Predicts delivery-requiring PE within 2 weeks\n• Ratio >110 (34–37 weeks): High risk PE within 1 week\n\nLABORATORY PRACTICAL POINTS:\n• Haemolysis interferes — reject visibly haemolysed samples\n• ALWAYS report with gestational age — ratios are gestation-dependent\n• Stable at room temperature 8 hours; frozen at -20°C for months\n\nGHANAIAN CONTEXT: Elecsys available at KBTH and KATH. For lower-resource settings, serum PlGF alone (<100 pg/mL at 20–34 weeks) is useful where sFlt-1 is unavailable.`,
      kp:["sFlt-1/PlGF ≤38: rules out PE within 1 week (NPV 99.3%)","Ratio >85 at 24-34 weeks: predicts delivery-requiring PE within 2 weeks","Reject haemolysed samples — haemolysis falsely elevates sFlt-1","Always report with gestational age — interpretation is GA-dependent"],
      callouts:[
        {role:"student",type:"exam",text:"The sFlt-1/PlGF ratio is primarily a NEGATIVE predictor — its power is ruling OUT PE (NPV 99.3%). For positive prediction, the ratio >85 is useful but less absolute. Examiners often ask: 'what is the clinical utility of a ratio ≤38?' Answer: safe to discharge/defer admission."},
        {role:"labtech",type:"practical",text:"Critical pre-analytical step: visually inspect every tube before processing. Haemolysis score >1+ on the analyser should trigger rejection and recollection. Document your rejection reason clearly — 'sample rejected: haemolysis index 2+ — sFlt-1 result unreliable, please recollect.' This protects the patient and covers your quality documentation."},
        {role:"pharmacist",type:"clinical",text:"Understanding sFlt-1/PlGF positions you to counsel on emerging therapies. Pravastatin and metformin both reduce sFlt-1 in trials. As these agents approach clinical use, pharmacists will be first-line counsellors on mechanism, indication, and monitoring — start building this knowledge now."},
      ]},
   ],
   ev:"PROGNOSIS Study NEJM 2016; Lancet 2023 sFlt-1/PlGF; Mississippi/Tennessee HELLP Classification"},

  {id:4,num:"04",icon:"💊",free:false,dur:"3h 45m",lessons:12,color:"#154360",
   title:"The Arsenal",sub:"Pharmacological & Non-pharmacological Management",
   aud:["doctor","pharmacist","nurse","student"],
   tagline:"Every drug is a double-edged sword. Master the edge that heals.",
   story:`Professor Aidoo places three syringes on the table: labetalol, magnesium sulfate, hydralazine.\n\n"These three drugs," she says, "have collectively saved more mothers in sub-Saharan Africa than any piece of equipment in this hospital. But wielded wrongly, they have also killed. Today you will learn not just the doses — you will learn the philosophy. Because in obstetric emergencies, the right drug at the wrong time is the wrong drug."\n\nShe picks up the magnesium sulfate. "This one," she says, "is not an antihypertensive. Many people think it is. That misunderstanding has cost lives. Let me explain."`,
   sections:[
     {h:"💉 Antihypertensives — The Evidence Wars",
      a:"Choosing an antihypertensive in preeclampsia is like choosing your weapon for specific terrain. Labetalol is your reliable infantry. Nifedipine is your air support — fast, effective, needs careful deployment. Hydralazine is the old veteran — still useful, needs more management.",
      c:`TREATMENT THRESHOLDS:\n• Mild PE (140–159/90–109): Initiate treatment — reduces risk of severe hypertension by 50% (CHIPS Trial, NEJM 2015)\n• Severe PE (≥160/110): URGENT — target BP <150/100 within 30–60 minutes\n\nLABETALOL (IV/oral) — Combined α/β blocker:\n• IV: 20mg bolus → 40mg → 80mg at 10-min intervals. Max 300mg.\n• Oral: 200mg BD, titrate to 400mg TDS\n• AVOID in asthma, heart block, severe bradycardia\n\nNIFEDIPINE (oral MR) — Calcium channel blocker:\n• 10–20mg oral (NEVER sublingual — precipitous BP fall)\n• Excellent in asthma, renal impairment\n\nHYDRALAZINE (IV): 5mg bolus, repeat every 20 min. Max 20mg.\nCochrane 2023: More maternal hypotension vs labetalol/nifedipine — reserve as second-line.\n\nPOSTPARTUM: BP often WORSENS day 3–5. Continue antihypertensives. Avoid NSAIDs.`,
      kp:["Treat BP ≥160/110 as hypertensive EMERGENCY — within 30-60 minutes","Labetalol IV: 20-40-80mg escalating boluses at 10-min intervals","Nifedipine: ORAL ONLY — sublingual is dangerous","Hydralazine: second-line due to more hypotension episodes","Continue antihypertensives postpartum — BP peaks day 3-5"],
      callouts:[
        {role:"student",type:"exam",text:"Exam favourite: Why is sublingual nifedipine contraindicated in PE? Because it causes an unpredictable precipitous BP fall → uteroplacental insufficiency → acute foetal distress. Oral modified-release is safe. Sublingual is dangerous. This distinction appears in almost every PE MCQ paper."},
        {role:"pharmacist",type:"clinical",text:"Dispensing alert: NSAIDs (ibuprofen, diclofenac) worsen postpartum hypertension in PE — they inhibit prostacyclin and cause sodium retention. When a PE patient is discharged postpartum, actively flag any NSAID prescriptions for pain relief and recommend paracetamol instead. This is a high-impact pharmacy intervention."},
        {role:"nurse",type:"clinical",text:"For IV labetalol: monitor HR before each escalating dose. If HR <60 bpm, do NOT give the next dose — labetalol's beta-blockade effect can cause dangerous bradycardia. Document HR alongside every BP reading during acute BP management."},
        {role:"doctor",type:"clinical",text:"CHIPS Trial nuance: tight BP control (target diastolic <85) vs less-tight control showed NO difference in serious perinatal outcomes, but tight control significantly reduced severe maternal hypertension. The implication: treat to protect the mother, not to harm the fetus — but do treat."},
        {role:"student",type:"clinical",text:"On the ward, watch the pattern: labetalol is given IV for acute control, then converted to oral for maintenance. When you clerk a PE patient, track this transition — understanding why the team switches from IV to oral demonstrates clinical understanding that impresses supervisors."},
      ]},
     {h:"✨ Magnesium Sulfate — The Misunderstood Maestro",
      a:`MgSO4 is the most misunderstood drug in obstetrics. Many think it lowers blood pressure. It does not — primarily. Think of it differently: if PE is a forest fire, MgSO4 doesn't extinguish it — it fireproofs the brain. It blocks NMDA receptors, reduces cerebrovascular reactivity, reverses vasospasm, and raises the seizure threshold. It is a neuroprotector. Not an antihypertensive.`,
      c:`INDICATIONS:\n• Severe PE with neurological features (headache, visual changes, clonus)\n• Eclampsia — primary treatment AND prevention of recurrence\n• Intrapartum and 24h postpartum in severe PE\n\nZUSPAN PROTOCOL:\n• Loading: 4g IV over 15–20 minutes\n• Maintenance: 1g/hour IV for 24h post-delivery\n\nPRITCHARD PROTOCOL (IM — for district hospitals):\n• Loading: 4g IV + 10g IM (5g each buttock + 1mL 2% lignocaine per injection)\n• Maintenance: 5g IM every 4 hours\n\nTHE TRINITY OF SAFETY MONITORING:\n1. Respiratory rate MUST be ≥12/min\n2. Deep tendon reflexes MUST be present\n3. Urine output MUST be ≥25mL/hour\n\nTOXICITY PROGRESSION:\n• 4–6 mmol/L: Loss of patellar reflex (FIRST sign)\n• 6–7 mmol/L: Respiratory depression\n• >7.5 mmol/L: Cardiac arrest\n\nANTIDOTE: Calcium gluconate 10mL of 10% IV over 10 minutes — MUST be at bedside always.\n\nMAGPIE TRIAL (Lancet 2002, n=10,141): MgSO4 halved risk of eclampsia vs placebo. NNT = 125.`,
      kp:["MgSO4 is a CEREBRAL PROTECTOR, not an antihypertensive","Absent patellar reflex = FIRST toxicity sign = stop immediately","Antidote: Calcium gluconate 10mL 10% IV — always at bedside","Magpie Trial: MgSO4 halved eclampsia risk","Pritchard IM protocol is feasible at district hospitals without infusion pumps"],
      callouts:[
        {role:"student",type:"exam",text:"Exam pearl — toxicity sequence to memorise: Loss of reflexes → Respiratory depression → Cardiac arrest. The question will ask 'first sign of toxicity' — answer is ABSENT PATELLAR REFLEX (at 4-6 mmol/L), not respiratory depression (that comes later at 6-7 mmol/L)."},
        {role:"pharmacist",type:"clinical",text:"Magnesium gluconate vs magnesium sulfate: these are NOT interchangeable in eclampsia. Only MgSO4 has robust RCT evidence (Magpie Trial). When a prescription arrives, verify the salt form. Prepare calcium gluconate 10% 10mL pre-drawn and label it 'MgSO4 ANTIDOTE' — it must be at the bedside before the infusion starts."},
        {role:"nurse",type:"clinical",text:"Drip calculation for Zuspan maintenance: 1g MgSO4/hour. If using 50% MgSO4 solution (500mg/mL): 2mL/hour. If diluted to 10% (100mg/mL): 10mL/hour. Know your unit's standard dilution. A calculation error here is immediately life-threatening — double-check with a colleague every time."},
        {role:"nurse",type:"clinical",text:"Check patellar reflex every hour during MgSO4 infusion. Technique: patient relaxed, knee slightly flexed over edge of bed, brisk tap with tendon hammer just below patella. Absent reflex = stop infusion + call doctor + have calcium gluconate ready. This is your single most important monitoring action."},
        {role:"doctor",type:"clinical",text:"MgSO4 in renal impairment: magnesium is renally cleared. If creatinine >100 μmol/L, reduce maintenance to 0.5g/hour and monitor magnesium levels every 4 hours (therapeutic range 2–3.5 mmol/L). In anuric patients, loading dose only — no maintenance without monitoring."},
        {role:"student",type:"clinical",text:"The Magpie Trial enrolled 10,141 women across 33 countries including several African nations. It showed MgSO4 was effective AND safe in low-resource settings. This is landmark evidence that good obstetric care doesn't require expensive drugs — and Ghana was part of making that evidence."},
      ]},
     {h:"🍀 Aspirin + Calcium — The Prevention Revolution",
      a:`The story of aspirin in PE prevention is a story of dose, timing, and persistence. For decades we used 75mg in the morning and saw modest results. The ASPRE trial changed everything — 150mg, at night. Why the difference? Platelet thromboxane production peaks at night. Bedtime dosing aligns peak drug effect with peak thromboxane production. A seemingly small change that cut preterm PE by 62%.`,
      c:`ASPIRIN 150mg NOCTE:\n• Start at 11–14 weeks in high-risk women (screen-detected risk ≥1:100)\n• Stop at 36 weeks (allow platelet function recovery before delivery)\n• After 16 weeks: window for spiral artery benefit largely closed\n\nCALCIUM SUPPLEMENTATION:\nCalcium 1.5–2g/day — WHO-recommended, especially in populations with low dietary calcium (common in Ghana).\nMECHANISMS: Reduces renin-angiotensin activation, reduces smooth muscle vasoconstriction.\nCOCHRANE 2019: Calcium supplementation reduces PE by 55% in low-calcium-intake populations. NNT = 11.\n\nThis is affordable, available, and critically underused across sub-Saharan Africa.`,
      kp:["Aspirin 150mg NOCTE from 11-14 weeks — NOT 75mg morning","Nighttime dosing targets peak platelet thromboxane production","Stop aspirin at 36 weeks for platelet recovery","Calcium 1.5-2g/day: 55% PE reduction in low-intake populations — critically underused"],
      callouts:[
        {role:"student",type:"exam",text:"Exam tip: Three things about aspirin in PE prevention that are always tested — (1) DOSE: 150mg not 75mg. (2) TIMING: bedtime not morning. (3) START: before 16 weeks, ideally 11-14 weeks. Get all three right and you answer most aspirin MCQs correctly."},
        {role:"pharmacist",type:"clinical",text:"Counselling points when dispensing aspirin 150mg for PE prevention: Take at bedtime. Continue until 36 weeks — do not stop earlier. Report any unusual bleeding (gum, nose, prolonged wound bleeding). Avoid concurrent NSAIDs. This is a high-stakes prescription — document your counselling."},
        {role:"nurse",type:"clinical",text:"Calcium supplementation reminder: when booking a high-risk patient, check their dietary calcium intake informally — do they eat dairy? Fish with bones? Dark leafy vegetables? In Ghana where dairy intake is often low, proactively recommend calcium supplementation alongside aspirin. NNT of 11 is remarkable for an affordable supplement."},
        {role:"student",type:"clinical",text:"Think about this: calcium supplementation costs under GH₵ 5 per month and reduces PE risk by 55% in low-intake populations. Yet most antenatal clinics in Ghana don't prescribe it routinely. As a future clinician, you have the power to change this practice from day one of your career."},
      ]},
   ],
   ev:"CHIPS Trial NEJM 2015; Magpie Trial Lancet 2002; ASPRE Trial NEJM 2017; Cochrane 2023; WHO 2023"},

  {id:5,num:"05",icon:"🩺",free:false,dur:"2h 30m",lessons:8,color:"#0d5e6e",
   title:"Nursing the Storm",sub:"Bedside Care, Monitoring & Patient Advocacy",
   aud:["nurse","doctor","student"],
   tagline:"The nurse who monitors well is the nurse who prevents disasters.",
   story:`Sister Dorcas has been a midwife for 22 years. She tells her students:\n\n"The machines are your assistants. YOU are the clinician. When the CTG looks normal but your patient looks wrong — trust yourself. When the BP cuff shows 130/85 but the patient is gripping the bed rail and her eyes are glazed — that number is lying to you. Take it again. Take it properly."\n\nShe has saved lives not with brilliant diagnoses but with brilliant attention. This module is her curriculum.`,
   sections:[
     {h:"📊 MEOWS & Monitoring — Your Early Warning Radar",
      a:"MEOWS converts subjective concern into objective numbers that trigger mandatory escalation. It removes hesitation. It removes 'I didn't want to bother the doctor.' A score ≥3 is an automatic call. No debate. No delay.",
      c:`MEOWS PARAMETERS:\nSystolic BP: Yellow 150-159 OR 90-100 | Red ≥160 OR <90\nDiastolic BP: Yellow 90-99 | Red ≥100\nHeart Rate: Yellow 100-119 OR 40-50 | Red ≥120 OR <40\nRespiratory Rate: Yellow 21-30 OR <10 | Red ≥30\nNeurological: Yellow confusion/agitation | Red unresponsive/fitting\n\nMONITORING FREQUENCY:\n• Mild PE (inpatient): BP every 4 hours, daily labs\n• Severe PE: BP every 15–30 min until stable, then hourly\n• On MgSO4: BP, RR, reflexes, urine output EVERY HOUR minimum\n\nBP MEASUREMENT CHECKLIST:\n✅ Seated or left lateral (NOT flat supine)\n✅ Correct cuff (bladder encircles ≥80% arm)\n✅ Right arm, at heart level ✅ 5 min rest ✅ Not talking\n✅ Two readings 1–2 min apart, average them\n✅ Korotkoff phase 5 for diastolic\n\nSystolic >160 = IMMEDIATE verbal escalation. Not a written note. Not a message. A direct verbal call to a senior clinician — NOW.`,
      kp:["MEOWS ≥3 OR any red trigger = immediate senior review","BP technique errors cause most diagnostic errors in PE","Systolic ≥160 = verbal escalation immediately","Severe PE: BP every 15-30 min until controlled"],
      callouts:[
        {role:"student",type:"clinical",text:"MEOWS is a key tool for your OSCE. Practice scoring it: if a PE patient has BP 165/105 (red score 2) + RR 24 (yellow score 1) = MEOWS of 3 = mandatory escalation. Examiners will give you obs charts and ask you to calculate and respond to MEOWS."},
        {role:"nurse",type:"clinical",text:"Wrong cuff size is the commonest BP error in PE. A cuff too small for a large arm gives falsely HIGH readings — you may treat hypertension that doesn't exist. A cuff too large gives falsely LOW readings — you may miss severe hypertension. Every ward must have small, standard, large, and thigh cuffs available."},
        {role:"doctor",type:"clinical",text:"When a nurse calls you about a MEOWS of 3, respond as if it is a crisis — because statistically, it is. Studies show MEOWS scores ≥3 are associated with a 7-fold increase in serious maternal adverse events. Your response speed to these calls directly determines outcomes."},
      ]},
     {h:"💧 Fluid Balance — The Tightrope Walk",
      a:`Managing fluids in PE is like walking a tightrope over two chasms: pulmonary oedema on one side, oliguria and renal failure on the other. The paradox: the PE patient looks oedematous but is often intravascularly depleted. Her fluid is in the wrong compartment. Do NOT be fooled by oedematous ankles.`,
      c:`FLUID MANAGEMENT:\n• Total fluid: ≤80–125mL/hour (IV + oral combined)\n• NOT a patient who needs 'generous hydration'\n• Hartmann's preferred for IV replacement\n\nURINE OUTPUT:\n• Catheterise ALL women with severe PE\n• Target: ≥25mL/hour\n• Oliguria <25mL/h for >2h: reassess; cautious 250mL bolus ONLY after full assessment\n\nPULMONARY OEDEMA WARNING SIGNS:\n• RR rising (>20 = yellow, >25 = red)\n• SpO2 falling (target >95%)\n• Bilateral crackles on auscultation\n• Pink frothy sputum (late sign = emergency)\n\nCRITICAL: MOST pulmonary oedema in PE occurs POSTPARTUM (days 2–5) when uterine contraction releases autotransfusion of 500–800mL. Vigilance must PEAK after delivery, not relax.`,
      kp:["Fluid limit: ≤80-125mL/hour total — PE is NOT fluid-deficient","Oliguria: watch before fluid challenge — avoid reflexive boluses","Pulmonary oedema risk PEAKS postpartum day 2-5","Catheterise all severe PE — hourly urine output is vital"],
      callouts:[
        {role:"student",type:"exam",text:"Exam scenario: A nurse calls about a PE patient with urine output 18mL/hour for 3 hours. What do you do? WRONG answer: give 1L IV bolus. CORRECT answer: reassess fluid balance, check BP and HR (is she hypovolaemic?), check creatinine, give cautious 250mL challenge ONLY if clearly hypovolaemic, reassess after 30 min."},
        {role:"nurse",type:"clinical",text:"Fluid chart accuracy is a patient safety issue in PE — not paperwork. Record EVERY input (IV, oral, blood products) and output (urine, vomit, estimated blood loss) in real time. A cumulative positive balance >1500mL in a PE patient is a warning sign for pulmonary oedema risk even before symptoms develop."},
        {role:"student",type:"clinical",text:"The postpartum danger window is clinically counterintuitive — the patient has delivered, the 'storm is over,' yet she is at greatest risk of pulmonary oedema in the next 48-72 hours. When you understand the pathophysiology (autotransfusion + fluid mobilisation), the timing makes perfect sense."},
      ]},
   ],
   ev:"NICE NG133; RCOG GTG 10A 2022; MEOWS Validation Studies; WHO Safe Childbirth Checklist"},

  {id:6,num:"06",icon:"⚡",free:false,dur:"3h 00m",lessons:10,color:"#6E2C00",
   title:"When All Else Fails",sub:"Eclampsia, Emergencies & Critical Care",
   aud:["doctor","nurse","pharmacist","labtech","student"],
   tagline:"In the worst moment of your career, this module will be your muscle memory.",
   story:`The call comes at 06:20. "Doctor, patient fitting in the toilet!"\n\nYou run. She is on the floor, convulsing. Her family is screaming. A student nurse looks paralysed with fear. You have approximately 90 seconds before cerebral hypoxia becomes a serious concern.\n\nYour hands move before your mind consciously processes. Left lateral. Airway. Call for help. MgSO4. Time the seizure.\n\nWhere did those movements come from? Not from textbooks read once in medical school. They came from deep, repeated, embodied learning. They came from courses like this one.\n\nThis module is your rehearsal for that moment. Read it. Then close your eyes and rehearse it again.`,
   sections:[
     {h:"⚡ The Eclamptic Seizure — Your 5-Minute Emergency Protocol",
      a:"The first 5 minutes of an eclamptic emergency are the most critical. Every second of delay increases cerebral hypoxia. Every wrong move adds to the cascade. This protocol must be automatic. Practice it until it is.",
      c:`THE ABCDE APPROACH:\n\nA — AIRWAY: Left lateral IMMEDIATELY. Do NOT insert anything in the mouth. Suction if obstructed. O2 10-15L/min.\n\nB — BREATHING: Monitor SpO2 — target >94%. If apnoeic >60 seconds: bag-mask, call anaesthetics.\n\nC — CIRCULATION: Large bore IV access (x2). Blood: FBC, UE, LFT, clotting, G&S. Do NOT fluid challenge aggressively.\n\nD — DRUGS:\n• MgSO4 4g IV over 5 minutes (loading dose)\n• Already on MgSO4: give further 2g IV over 5 minutes\n• Seizing >5 min despite MgSO4: diazepam 10mg IV or lorazepam 4mg IV\n• Do NOT use phenytoin first-line (Collaborative Eclampsia Trial 1995)\n\nE — EVERYTHING ELSE: Foetal HR (deceleration usually self-resolves). Check blood glucose. Plan delivery AFTER stabilisation.\n\nTIME TARGETS:\n0–2 min: Left lateral, O2, IV access\n2–5 min: MgSO4 loading\n5–15 min: BP control if ≥160/110\n15–30 min: Plan delivery\n\nSeizure >10 minutes = status eclampticus = call anaesthetics for intubation.`,
      kp:["FIRST movement: LEFT LATERAL — before any drug","MgSO4 4g IV over 5 min is first-line — NOT diazepam, NOT phenytoin","If already on MgSO4: give 2g IV top-up","Seizure >10 min = status eclampticus = anaesthetic team"],
      callouts:[
        {role:"student",type:"exam",text:"OSCE scenario: You witness an eclamptic seizure. First action? LEFT LATERAL POSITION — before any drug, before calling for help, before anything else. This is the most commonly failed step in simulation because students reach for drugs first. Airway before everything."},
        {role:"student",type:"clinical",text:"Memorise this drug hierarchy for eclampsia: MgSO4 first, always. Diazepam or lorazepam only if seizure persists beyond 5 minutes despite MgSO4. Phenytoin is not recommended (inferior evidence, more side effects). This hierarchy is evidence-based and life-saving."},
        {role:"nurse",type:"clinical",text:"The moment a seizure starts, your role is: call for help (shout, activate emergency bell), protect airway (left lateral, suction if available, O2), time the seizure, establish IV access if not already present. Do NOT leave the patient. Do NOT restrain her violently. Document the seizure character, duration, and recovery."},
        {role:"pharmacist",type:"clinical",text:"Prepare MgSO4 4g IV loading doses in advance for high-risk patients. In a seizing patient there is no time for preparation. Many units now keep a pre-drawn 'eclampsia kit' — standardised MgSO4 loading dose + calcium gluconate antidote + documentation sheet — at every labour ward bed. Advocate for this in your institution."},
        {role:"doctor",type:"clinical",text:"After stabilising the eclamptic patient, plan delivery — but not immediately. Optimise BP first (labetalol or hydralazine), ensure MgSO4 is running, correct any coagulopathy, and have theatre and neonatal team on standby. Delivery route depends on gestational age, cervical status, and foetal condition — not on the fact that she seized."},
      ]},
     {h:"🏥 HELLP Syndrome — Recognition, Classification & Management",
      a:`HELLP syndrome is PE's most dangerous accomplice. It arrives sometimes without the full PE costume — no severe hypertension, minimal proteinuria. It disguises itself as gastroenteritis, 'indigestion,' hepatitis. By the time the disguise falls, the liver may be haemorrhaging.`,
      c:`TENNESSEE CLASSIFICATION:\n• Class 1: Platelets <50,000/μL\n• Class 2: Platelets 50,000–100,000/μL\n• Class 3: Platelets 100,000–150,000/μL\n\nMISSISSIPPI TRIPLE-CLASS (ALL criteria required):\nHaemolysis (abnormal film + LDH ≥600) + EL (AST ≥70) + LP (platelets ≤150,000)\n\nMANAGEMENT:\n• Class 3: Steroids, expectant if <34 weeks, deliver ≥34 weeks\n• Class 2: Steroids, deliver within 24-48h regardless of GA\n• Class 1/Mississippi Severe: Deliver IMMEDIATELY. FFP, platelets, cryoprecipitate as needed.\n\nCORTICOSTEROIDS: Dexamethasone 10mg IV 12-hourly: temporary platelet improvement. Buys time for lung maturity — does NOT change maternal outcome. Do NOT delay delivery for steroids in severe cases.\n\nSUBCAPSULAR HAEMATOMA: Suspect if severe RUQ pain + haemodynamic instability + rising Hct. Bedside ultrasound → surgical emergency if ruptured.`,
      kp:["HELLP can occur WITHOUT PE features — diagnose on labs alone","Mississippi: ALL three criteria required","Class 1 (platelets <50k): delivery within hours, regardless of gestation","Dexamethasone: temporary platelet boost only — does not alter outcome"],
      callouts:[
        {role:"student",type:"exam",text:"Common exam trap: HELLP is NOT diagnosed by hypertension alone. You need the full triad — Haemolysis + Elevated Liver enzymes + Low Platelets — all three. Atypical HELLP (without hypertension or proteinuria) is tested at higher exam levels and catches many students out."},
        {role:"labtech",type:"practical",text:"When HELLP is suspected, report results to the clinical team BY PHONE — do not wait for electronic results. A platelet of 45,000 with rising AST and LDH in a pregnant woman requires immediate clinical decision-making. Your verbal communication is part of the patient safety chain."},
        {role:"student",type:"clinical",text:"Dexamethasone in HELLP is an important nuance: it temporarily improves platelet count (sometimes by 30-50,000) — enough to allow regional anaesthesia or buy time for lung maturity. But it does not change the eventual downward trend. Delivery remains the only cure. Steroids are a bridge, not a treatment."},
      ]},
   ],
   ev:"Collaborative Eclampsia Trial 1995; Magpie Trial 2002; RCOG GTG 10A 2022; Martin HELLP Classification; WHO 2023"},

  {id:7,num:"07",icon:"🚀",free:false,dur:"1h 45m",lessons:6,color:"#1a237e",
   title:"The Future",sub:"New Biomarkers, Novel Therapies & AI in PE/E",
   aud:["doctor","nurse","pharmacist","labtech","student"],
   tagline:"The medicine of tomorrow is being written in laboratories today. Read the drafts.",
   story:`It is 2031. Dr. Afia Boateng opens her app. Her patient — 10 weeks pregnant — has just had her wearable sensor data uploaded. The AI flags a 23% elevation in composite risk score. PlGF is trending down. Uterine artery resistance mildly elevated. Blood pressure variability increased overnight.\n\nNo symptoms. No clinical signs. But the AI — trained on 4 million pregnancies — is certain: this woman needs aspirin, 200mg, tonight.\n\nIs this science fiction? Partially. But only partially. The seeds of this future are already germinating — in journals, in trials, in the laptops of researchers at UGMS, in London, in Boston, in Nairobi.\n\nThis final module shows you the seeds.`,
   sections:[
     {h:"🤖 Artificial Intelligence — The New Obstetrician's Stethoscope",
      a:"AI in obstetrics is not a replacement for the clinician. It is an amplifier. It processes thousands of data points you cannot consciously track and surfaces the signal from the noise. Think of it as a stethoscope that listens to the entire body simultaneously — and gets better the more it listens.",
      c:`GOOGLE HEALTH & DEEPMIND:\nA 2023 Nature Medicine study demonstrated a deep learning model trained on routine antenatal data predicted PE with AUROC 0.91 — outperforming existing clinical risk tools.\n\nWEARABLE CONTINUOUS BP MONITORING:\nContinuous 24-hour BP variability metrics are stronger predictors of adverse outcomes than single clinic readings. Trial data (2023): continuous monitoring reduced treatment delays by 40%.\n\nPLACENTAL BIOMARKER PANELS:\n• Cell-free placental DNA (cfDNA): methylation signatures distinguish PE placenta at 10–14 weeks\n• Placental exosomes: PE-specific microRNA profiles detectable from 8 weeks\n\nUGMS OPPORTUNITY: Ghana Health Service antenatal records from 3,000+ facilities represent a unique LMIC data resource. An AI model trained on African pregnancies would be far more applicable to African populations than models trained on European cohorts.`,
      kp:["Deep learning AUROC 0.91 for PE prediction from routine antenatal data","Continuous BP monitoring reduces treatment delays by 40%","cfDNA methylation signatures identify PE placenta from 8-10 weeks","UGMS + GHS data = unique LMIC AI research opportunity"],
      callouts:[
        {role:"student",type:"exam",text:"For your final MB/ChB or exit exams, AI in obstetrics is increasingly appearing as a short essay or discussion topic. Key points: (1) AI supplements but doesn't replace clinical judgement. (2) LMIC-specific models are urgently needed. (3) Ethical issues: data privacy, algorithmic bias, equity of access."},
        {role:"student",type:"clinical",text:"You are the generation that will deploy AI in Ghanaian obstetrics. The researchers who trained the Nature Medicine 2023 model needed clinical experts to validate outputs, interpret edge cases, and guide ethical implementation. That will be your role — not just using AI, but governing it."},
        {role:"doctor",type:"clinical",text:"Practical horizon: within 5 years, sFlt-1/PlGF will likely be integrated into AI risk-stratification apps used at the point of care. Your job is to understand the underlying biology well enough to know when the algorithm is right — and when it is wrong."},
      ]},
     {h:"💊 Emerging Therapeutics — The Next Arsenal",
      a:"The drug pipeline for preeclampsia is finally filling. After decades of relying on aspirin, calcium, and antihypertensives, we have promising agents targeting actual molecular mechanisms. None are yet standard of care. But within 5-10 years, the PE treatment algorithm will look very different.",
      c:`PRAVASTATIN: STAMP trial (2022): pravastatin 20mg daily from 24 weeks reduced sFlt-1 and prolonged pregnancy by mean 9 days in established PE. Phase III trials ongoing.\n\nMETFORMIN: Activates AMPK, reducing sFlt-1. PreMet Trial (Lancet 2023): metformin 3g/day in established PE. Results awaited.\n\nCOMT INHIBITORS: Supplemental 2-methoxyestradiol (2-ME): Phase 1 trials show promise.\n\nTHE LONG GAME — POSTPARTUM CARDIOVASCULAR RISK:\nA woman who has had PE has:\n• 4× increased lifetime risk of hypertension\n• 2× increased risk of ischaemic heart disease\n• 2× increased stroke risk\n• Risk equivalent to smoking 1 pack/day for 10 years\n\nEvery woman who has had PE must be tracked long-term. This message — still poorly understood globally — may be the most important clinical teaching of this entire course. Remember Akosua from Module 1? Even if we save her today, our job is not done until we protect her heart for the next 40 years.`,
      kp:["Pravastatin reduces sFlt-1 and prolongs pregnancy in established PE — Phase III pending","Metformin (PreMet Trial): promising via AMPK-COMT pathway","PE confers 4× lifetime hypertension risk and 2× cardiovascular risk","Every PE survivor needs long-term cardiovascular surveillance — a global blind spot"],
      callouts:[
        {role:"student",type:"exam",text:"Long-term PE complications are appearing in final year exams. Key statistic: PE survivors have 4× lifetime hypertension risk and 2× cardiovascular disease risk — equivalent to smoking a pack a day for 10 years. You will be asked about long-term follow-up recommendations for women with a PE history."},
        {role:"pharmacist",type:"clinical",text:"When a patient presents for routine medication review and her history includes 'PE in previous pregnancy,' this should trigger a medication/risk factor check: Is her BP adequately controlled? Is she on statin therapy if cardiovascular risk warrants it? Does she know about her long-term risk? This is high-impact pharmaceutical care hiding in plain sight."},
        {role:"nurse",type:"clinical",text:"Postnatal discharge education for PE patients must include: 'You have a higher lifetime risk of high blood pressure and heart disease. Get your BP checked every year. Tell every doctor you see in the future that you had preeclampsia.' This 30-second conversation could save her life 20 years from now."},
        {role:"student",type:"clinical",text:"Think about the public health impact: if every PE survivor in Ghana received annual BP monitoring and appropriate cardiovascular risk management, we would prevent a significant proportion of hypertensive heart disease and stroke in women aged 40-60. You have the power to deliver this — starting with your first patient."},
      ]},
   ],
   ev:"Nature Medicine 2023; PreMet Trial Lancet 2023; STAMP Trial 2022; ESC Guidelines 2024"},
];


const PRE_Q=[
  {q:"What is the ISSHP 2018 BP threshold for diagnosing preeclampsia?",opts:["≥140/90 mmHg once","≥140/90 mmHg on two occasions ≥4h apart","≥160/110 mmHg once","≥130/80 mmHg twice"],ans:1},
  {q:"Which angiogenic imbalance is the molecular hallmark of preeclampsia?",opts:["Elevated VEGF and low PlGF","Elevated sFlt-1 and reduced free PlGF","Reduced sFlt-1 and elevated PAPP-A","Elevated angiopoietin-2 alone"],ans:1},
  {q:"The ASPRE trial: which regimen reduces preterm PE by ~62%?",opts:["Aspirin 75mg morning from 16 weeks","Aspirin 150mg at bedtime from 11–14 weeks","Heparin from first trimester","Calcium 2g/day alone"],ans:1},
  {q:"In MgSO4 toxicity, which sign appears FIRST?",opts:["Respiratory depression","Cardiac arrest","Loss of deep tendon reflexes","Pupillary dilation"],ans:2},
  {q:"HELLP syndrome is defined by which triad?",opts:["Haemolysis + Elevated Liver enzymes + Low Platelets","High Edema + Liver Enlargement + Low Proteinuria","Haemolysis + Elevated LFTs + Low Phosphate","Hypertension + Elevated Lactate + Low Platelets"],ans:0},
];

const POST_Q=[
  {q:"28yo primigravida at 34 weeks: BP 158/105 (x2), headache, PCR 45 mg/mmol. Most appropriate immediate management?",opts:["Discharge with outpatient monitoring","Admit, start labetalol, give MgSO4, plan delivery","Give nifedipine, review in 1 week","Emergency caesarean section immediately"],ans:1},
  {q:"sFlt-1/PlGF ratio ≤38 at 24–36 weeks in suspected PE has which clinical utility?",opts:["Confirms PE diagnosis","Rules out PE onset within 1 week (NPV >99%)","Predicts eclampsia risk directly","Guides corticosteroid timing"],ans:1},
  {q:"Patient on MgSO4 develops RR 10/min and absent knee jerks. Immediate action?",opts:["Increase infusion rate","IV calcium gluconate 10mL of 10% over 10 min","IV diazepam 10mg","Intubate immediately"],ans:1},
  {q:"In the two-stage model (Redman & Sargent), Stage 1 refers to?",opts:["Clinical symptoms of PE","Impaired trophoblast invasion and placental ischaemia","Maternal endothelial activation and organ dysfunction","Systemic inflammatory response syndrome"],ans:1},
  {q:"Which is NOT a recognised first-line antihypertensive for acute severe PE?",opts:["Labetalol IV","Nifedipine oral","Hydralazine IV","Enalapril IV"],ans:3},
];

const PE_PLANS_BASE=[
  {id:"full",label:"Full Course",ghcStd:350,ghcStu:200,usdStd:35,usdStu:20,
   features:["All 7 Modules","Downloadable Notes","Pre & Post Tests","Discussion Access"]},
  {id:"cert",label:"Course + Certificate",ghcStd:500,ghcStu:300,usdStd:50,usdStu:30,featured:true,
   features:["Everything in Full","Official UGMS Certificate","3 Signatories","Digital Badge","Verifiable QR ID"]},
  {id:"inst",label:"Institutional (20 seats)",ghcStd:4000,ghcStu:4000,usdStd:400,usdStu:400,
   features:["20 Licences","Admin Dashboard","Group Certificate","Priority Support"]},
];



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
        {[0.8,1,1.25,1.5].map(r=><button key={r} onClick={()=>setRate(r)} style={{background:rate===r?color:"#f0f4ff",color:rate===r?"#fff":C.muted,border:"none",borderRadius:5,padding:"3px 7px",fontSize:11,cursor:"pointer"}}>{r}×</button>)}
      </div>
    </div>
  );
}

function Quiz({qs,ans,setAns,done,onSubmit,onSkip}){
  return(
    <div>
      {qs.map((q,qi)=>(
        <div key={qi} style={{background:"#fff",borderRadius:18,padding:28,marginBottom:20,boxShadow:"0 4px 20px rgba(0,48,135,.08)"}}>
          <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:C.gold,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>Q {qi+1} of {qs.length}</div>
          <p style={{fontFamily:"'Georgia',serif",fontSize:16,color:C.txt,lineHeight:1.85,marginBottom:18}}>{q.q}</p>
          {q.opts.map((opt,oi)=>{
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
          {mod.story.split("\n\n").map((p,i)=><p key={i} style={{fontFamily:"'Georgia',serif",fontSize:15.5,lineHeight:2,color:C.txt,marginBottom:14,fontStyle:"italic"}}>{p}</p>)}
        </div>

        {/* Sections */}
        {mod.sections.map((sec,si)=>{
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
                  {sec.c.split("\n\n").map((para,pi)=><p key={pi} style={{fontFamily:"'Georgia',serif",fontSize:15,lineHeight:1.95,color:C.txt,marginBottom:14,whiteSpace:"pre-line"}}>{para.trim()}</p>)}
                  <div style={{background:mod.color+"09",borderRadius:12,padding:"17px 22px",marginTop:20,border:"1px solid "+mod.color+"20"}}>
                    <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:mod.color,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>📌 Key Learning Points</div>
                    {sec.kp.map((kp,ki)=>(
                      <div key={ki} style={{display:"flex",gap:11,marginBottom:10,alignItems:"flex-start"}}>
                        <span style={{color:C.gold,fontWeight:700,fontSize:14,flexShrink:0}}>✦</span>
                        <span style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:14,color:C.txt,lineHeight:1.7}}>{kp}</span>
                      </div>
                    ))}
                  </div>
                  {sec.callouts&&sec.callouts.length>0&&(
                    <div style={{marginTop:20}}>
                      <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:C.muted,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>🗂 Role-Specific Notes</div>
                      {myCallouts.map((cl,i)=><Callout key={"my"+i} item={cl} userRole={userRole}/>)}
                      {otherCallouts.map((cl,i)=><Callout key={"ot"+i} item={cl} userRole={userRole}/>)}
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



// ─────────────── PE COURSE SHELL ───────────────
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

// ─────────────── ADMIN PAGE ───────────────
function AdminPage({onBack}){
  const [aPw,setAPw]=useState("");
  const [auth,setAuth]=useState(false);
  const [err,setErr]=useState("");
  const [tab,setTab]=useState("dashboard");
  const login=()=>{if(aPw===ADMIN_PW){setAuth(true);setErr("");}else setErr("Invalid credentials.");};

  if(!auth) return(
    <div style={{maxWidth:400,margin:"80px auto",padding:"0 24px"}}>
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:48,marginBottom:12}}>🔐</div>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:28,fontWeight:700,color:C.dark,marginBottom:6}}>Admin Access</h1>
        <p style={{color:C.muted,fontFamily:"'Source Sans 3',sans-serif",fontSize:14}}>LegonMed Platform Administrator</p>
      </div>
      <div style={{background:"#fff",borderRadius:18,padding:28,boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
        <label style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt,display:"block",marginBottom:7}}>Password</label>
        <input style={inp({marginBottom:12})} type="password" placeholder="Admin password" value={aPw} onChange={e=>setAPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()}/>
        {err&&<div style={{color:C.err,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,marginBottom:10}}>❌ {err}</div>}
        <button style={btn("primary",{width:"100%"})} onClick={login}>Login →</button>
        <p style={{fontSize:11.5,color:C.muted,textAlign:"center",marginTop:12,fontFamily:"'Source Sans 3',sans-serif"}}>Default: <strong>legonmed@UGMS2025!</strong> — change before going live</p>
      </div>
      <div style={{textAlign:"center",marginTop:20}}><button style={btn("secondary")} onClick={onBack}>← Back</button></div>
    </div>
  );

  const TABS=["dashboard","registrations","completions","payments","subscribers","feedback"];
  return(
    <div style={{maxWidth:1200,margin:"0 auto",padding:"32px 24px"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24,flexWrap:"wrap",gap:12}}>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(22px,4vw,34px)",fontWeight:700,color:C.dark}}>⚙ Admin Dashboard</h1>
        <div style={{display:"flex",gap:10}}>
          <button style={btn("secondary",{padding:"8px 14px",fontSize:13})} onClick={onBack}>← Platform</button>
          <button style={btn("secondary",{padding:"8px 14px",fontSize:13})} onClick={()=>setAuth(false)}>Logout</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12,marginBottom:24}}>
        {[{l:"Registrations",v:DB.count("registrations"),ic:"👥",col:C.blue},{l:"Completions",v:DB.count("completions"),ic:"🏆",col:C.ok},{l:"Subscribers",v:DB.count("subscribers"),ic:"🔔",col:"#6E2C00"},{l:"Feedback",v:DB.count("feedback"),ic:"💬",col:"#1a5276"},{l:"Payments",v:DB.count("payments"),ic:"💳",col:"#1a237e"},{l:"Revenue GHS",v:"₵"+DB.get("payments").reduce((s,p)=>s+(p.amountGHS||0),0).toLocaleString(),ic:"💰",col:C.ok}].map(s=>(
          <div key={s.l} style={{background:"#fff",borderRadius:12,padding:"16px 14px",textAlign:"center",boxShadow:"0 2px 12px rgba(0,48,135,.06)",borderTop:"3px solid "+s.col}}>
            <div style={{fontSize:22,marginBottom:5}}>{s.ic}</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:900,color:s.col}}>{s.v}</div>
            <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11,color:C.muted,marginTop:3}}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Tab nav */}
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:22}}>
        {TABS.map(t=><button key={t} onClick={()=>setTab(t)} style={{padding:"8px 16px",borderRadius:8,border:"none",background:tab===t?C.blue:"#fff",color:tab===t?"#fff":C.txt,fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer",boxShadow:"0 2px 8px rgba(0,48,135,.06)",textTransform:"capitalize"}}>{t}</button>)}
      </div>

      {/* Dashboard tab */}
      {tab==="dashboard"&&(
        <div style={{background:"#fff",borderRadius:18,padding:24,boxShadow:"0 4px 24px rgba(0,48,135,.08)"}}>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:C.blue,marginBottom:14}}>Platform Overview — All 9 Pillars</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:12}}>
            {PILLARS.map(p=>(
              <div key={p.id} style={{padding:"12px 14px",borderRadius:10,background:C.bg,borderLeft:"4px solid "+p.color}}>
                <div style={{display:"flex",gap:9,alignItems:"center"}}>
                  <span style={{fontSize:18}}>{p.icon}</span>
                  <div>
                    <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:13,fontWeight:700,color:C.txt}}>{p.name}</div>
                    <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:C.muted}}>{p.categories?.reduce((s,c)=>s+c.courses.length,0)||0} courses · Pillar {p.num}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Data tables */}
      {["registrations","completions","payments","subscribers"].includes(tab)&&(
        <div style={{background:"#fff",borderRadius:18,padding:24,boxShadow:"0 4px 24px rgba(0,48,135,.08)",overflowX:"auto"}}>
          <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:18,color:C.blue,marginBottom:16,textTransform:"capitalize"}}>{tab} ({DB.count(tab)})</h3>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"'Source Sans 3',sans-serif",fontSize:13}}>
            <thead>
              <tr style={{background:C.bg}}>
                {tab==="registrations"&&["Name","Email","Profession","Country","Institution","Date"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:C.blue,fontWeight:700,borderBottom:"2px solid "+C.blue+"18",whiteSpace:"nowrap"}}>{h}</th>)}
                {tab==="completions"&&["Name","Email","Pre","Post","Δ","Profession","Date"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:C.blue,fontWeight:700,borderBottom:"2px solid "+C.blue+"18",whiteSpace:"nowrap"}}>{h}</th>)}
                {tab==="payments"&&["Name","Email","Plan","GHS","Reference","Date"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:C.blue,fontWeight:700,borderBottom:"2px solid "+C.blue+"18",whiteSpace:"nowrap"}}>{h}</th>)}
                {tab==="subscribers"&&["Name","Email","Profession","Country","Interests","Date"].map(h=><th key={h} style={{padding:"10px 12px",textAlign:"left",color:C.blue,fontWeight:700,borderBottom:"2px solid "+C.blue+"18",whiteSpace:"nowrap"}}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {DB.get(tab).reverse().map(r=>(
                <tr key={r.id} style={{borderBottom:"1px solid #f5f5f5"}} onMouseOver={e=>e.currentTarget.style.background=C.bg} onMouseOut={e=>e.currentTarget.style.background="#fff"}>
                  {tab==="registrations"&&<><td style={{padding:"9px 12px",fontWeight:600}}>{r.name}</td><td style={{padding:"9px 12px",color:C.muted}}>{r.email}</td><td style={{padding:"9px 12px"}}><span style={{background:(RC[r.profession]||C.blue)+"18",color:RC[r.profession]||C.blue,padding:"2px 8px",borderRadius:20,fontSize:11,fontWeight:600}}>{r.profession}</span></td><td style={{padding:"9px 12px"}}>{r.country}</td><td style={{padding:"9px 12px",color:C.muted}}>{r.institution||"—"}</td><td style={{padding:"9px 12px",color:C.muted}}>{new Date(r.createdAt).toLocaleDateString()}</td></>}
                  {tab==="completions"&&<><td style={{padding:"9px 12px",fontWeight:600}}>{r.name}</td><td style={{padding:"9px 12px",color:C.muted}}>{r.email}</td><td style={{padding:"9px 12px"}}>{r.preScore??"-"}/5</td><td style={{padding:"9px 12px",fontWeight:700,color:r.postScore>=3?C.ok:C.blue}}>{r.postScore}/5</td><td style={{padding:"9px 12px",color:r.postScore>r.preScore?C.ok:C.muted}}>{r.preScore!=null?(r.postScore>r.preScore?"+"+( r.postScore-r.preScore):"="):"—"}</td><td style={{padding:"9px 12px"}}>{r.profession||"—"}</td><td style={{padding:"9px 12px",color:C.muted}}>{new Date(r.createdAt).toLocaleDateString()}</td></>}
                  {tab==="payments"&&<><td style={{padding:"9px 12px",fontWeight:600}}>{r.name}</td><td style={{padding:"9px 12px",color:C.muted}}>{r.email}</td><td style={{padding:"9px 12px"}}>{r.plan}</td><td style={{padding:"9px 12px",fontWeight:700,color:C.ok}}>₵{(r.amountGHS||0).toLocaleString()}</td><td style={{padding:"9px 12px",color:C.muted,fontSize:11}}>{r.ref}</td><td style={{padding:"9px 12px",color:C.muted}}>{new Date(r.createdAt).toLocaleDateString()}</td></>}
                  {tab==="subscribers"&&<><td style={{padding:"9px 12px",fontWeight:600}}>{r.name}</td><td style={{padding:"9px 12px",color:C.muted}}>{r.email}</td><td style={{padding:"9px 12px"}}>{r.profession||"—"}</td><td style={{padding:"9px 12px"}}>{r.country||"—"}</td><td style={{padding:"9px 12px",color:C.muted,fontSize:11}}>{(r.topics||[]).join(", ")||"—"}</td><td style={{padding:"9px 12px",color:C.muted}}>{new Date(r.createdAt).toLocaleDateString()}</td></>}
                </tr>
              ))}
              {DB.count(tab)===0&&<tr><td colSpan={8} style={{padding:20,textAlign:"center",color:C.muted,fontFamily:"'Source Sans 3',sans-serif"}}>No records yet.</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {tab==="feedback"&&(
        <div>
          {DB.get("feedback").length===0&&<div style={{background:"#fff",borderRadius:18,padding:30,textAlign:"center",color:C.muted,fontFamily:"'Source Sans 3',sans-serif"}}>No feedback yet.</div>}
          {DB.get("feedback").reverse().map(f=>(
            <div key={f.id} style={{background:"#fff",borderRadius:14,padding:"20px 22px",marginBottom:14,boxShadow:"0 2px 14px rgba(0,48,135,.07)",borderLeft:"4px solid "+C.gold}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,flexWrap:"wrap",gap:8}}>
                <div><div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:14,fontWeight:700}}>{f.name||"Anonymous"}</div><div style={{fontSize:16}}>{"⭐".repeat(f.rating||0)}</div></div>
                <div style={{fontFamily:"'Source Sans 3',sans-serif",fontSize:11.5,color:C.muted}}>{new Date(f.createdAt).toLocaleDateString()}</div>
              </div>
              {f.wow&&<p style={{fontFamily:"'Georgia',serif",fontSize:14,color:C.txt,fontStyle:"italic"}}>"{f.wow}"</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



