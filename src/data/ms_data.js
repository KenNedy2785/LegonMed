// Paste your ms_data.js content here, then press Enter and Ctrl+D
// MATERNAL SEPSIS — "The Silent Invasion"
// 4 Modules, 10h, all 5 professions

export const MS_MODS = [
    {
      id:1, num:"01", icon:"🦠", free:true, dur:"2h 30m", lessons:9, color:"#1B4F72",
      title:"The Invisible Enemy", sub:"Pathophysiology & Definitions of Maternal Sepsis",
      aud:["doctor","nurse","pharmacist","labtech","student"],
      tagline:"Sepsis does not announce itself. It creeps in silence — and by the time it shouts, it may already be too late.",
      story:`Ward 7, Ridge Hospital. Tuesday, 3:18 AM.\n\nNana Ama Boateng is 26 years old, five days postpartum after an emergency caesarean section. She has been on the postnatal ward since day two. Obs have been charted four times a day. She has complained of feeling "off" since yesterday afternoon. The junior nurse noted a temperature of 37.9°C. It was attributed to normal postoperative inflammation. The paracetamol was given. The obs were repeated. Temperature came down to 37.4°C.\n\nShe was not escalated.\n\nAt 3:18 AM, Sister Comfort Asante arrives for the night shift and does her own assessment. Nana Ama's hands are cold. Her heart rate is 118. Her blood pressure is 94/62. She looks grey.\n\n"When did she last pass urine?" Sister Comfort asks.\n\nNo one knows. The catheter bag is empty.\n\nIn the next ninety minutes, Nana Ama Boateng will be transferred to the ICU. What went wrong was not dramatic. It was quiet. Invisible. A invasion that began in her uterus and spread, in silence, to her bloodstream.\n\nThis is how maternal sepsis works. This module explains the biology of that silence.`,
      sections:[
        {
          h:"🔬 Defining the Enemy — From Infection to Organ Failure",
          a:`Think of the body's immune response like a fire brigade. A small fire in the kitchen — the brigade arrives, contains it, puts it out, goes home. This is normal infection. But sometimes the fire brigade itself goes rogue — it starts hosing everything down indiscriminately, flooding the entire house. The furniture is destroyed. The walls collapse. The house itself becomes uninhabitable. This is sepsis. The immune response becomes the disease.`,
          c:`SEPSIS-3 DEFINITIONS (Singer et al., JAMA 2016):\n\nINFECTION: Microbial invasion of normally sterile tissue.\n\nSEPSIS: Life-threatening organ dysfunction caused by a dysregulated host response to infection.\nDiagnosed by: Suspected infection + SOFA score ≥2 (or qSOFA ≥2 at bedside)\n\nSEPTIC SHOCK: Sepsis + vasopressor requirement to maintain MAP ≥65mmHg + lactate >2mmol/L despite adequate fluid resuscitation.\nMortality: 40–50% even in high-income settings.\n\nMATERNAL SEPSIS (WHO 2017): Organ dysfunction resulting from infection during pregnancy, childbirth, post-abortion, or postpartum period.\n\nqSOFA BEDSIDE TOOL:\n• Respiratory rate ≥22/min (1 point)\n• Altered mentation (1 point)\n• Systolic BP ≤100mmHg (1 point)\nScore ≥2 = sepsis likely — act immediately.`,
          kp:[
            "Sepsis-3: organ dysfunction from dysregulated host response — NOT just infection plus fever",
            "qSOFA ≥2: RR ≥22 + altered mentation + SBP ≤100 — immediate escalation",
            "Septic shock: vasopressors needed + lactate >2mmol/L despite fluids = 40-50% mortality",
            "Maternal sepsis is the third leading cause of direct maternal death worldwide",
            "Normal temperature does NOT rule out sepsis — hypothermia is equally sinister"
          ],
          callouts:[
            {role:"student", type:"exam", text:"Sepsis-3 replaced the old SIRS criteria. SIRS (fever, tachycardia, raised WBC) was too sensitive and too non-specific. Sepsis-3 requires organ dysfunction — SOFA ≥2. qSOFA is the bedside screening tool. Know both and know the difference."},
            {role:"nurse", type:"clinical", text:"The most dangerous word in sepsis nursing is 'probably'. 'She probably has a UTI.' 'It's probably just normal post-op inflammation.' If your patient looks wrong — cold peripheries, tachycardia, confusion, reduced urine output — escalate. Do not wait for a temperature. Sepsis can be afebrile or hypothermic."},
            {role:"doctor", type:"clinical", text:"In obstetrics, sepsis is uniquely deceptive. Normal physiological changes of pregnancy — tachycardia, leukocytosis, mild hypotension — mimic early sepsis. The key discriminator is the TREND and the clinical gestalt. A HR of 105 in a postnatal woman who 'looks wrong' is sepsis until proven otherwise."},
            {role:"pharmacist", type:"clinical", text:"The one-hour sepsis bundle includes antibiotics. Your role begins at diagnosis. Know your unit's empirical antibiotic protocol for maternal sepsis (typically piperacillin-tazobactam or meropenem + metronidazole for post-caesarean infections). Delays in antibiotic administration beyond one hour increase mortality by 7% per hour."},
            {role:"labtech", type:"practical", text:"Blood cultures must be taken BEFORE antibiotics — ideally two sets from two separate sites. After antibiotics, sensitivity falls by 40–60%. A negative culture post-antibiotics tells you nothing. Ring the clinician: 'Are you about to give antibiotics? Let me take cultures first.' This call protects the diagnostic yield."},
          ]
        },
        {
          h:"⚡ The Cytokine Storm — How Sepsis Destroys Organs",
          a:`Imagine your immune system sends out chemical messengers — cytokines — to fight infection. Normally, they're targeted laser strikes. In sepsis, someone fires every weapon simultaneously in every direction. The cytokine storm that follows damages blood vessel walls, collapses blood pressure, forms microclots in capillaries, and starves organs of oxygen. Every organ is hit. The body's own defence becomes its executioner.`,
          c:`THE PATHOPHYSIOLOGY CASCADE:\n\n1. INFECTION TRIGGER: Bacteria, virus, or fungi breach sterile barrier → release of PAMPs (pathogen-associated molecular patterns)\n\n2. IMMUNE ACTIVATION: Pattern recognition receptors (TLRs) activate → massive release of TNF-α, IL-1, IL-6, IL-8\n\n3. ENDOTHELIAL DAMAGE:\n→ Capillary leak → oedema, hypovolaemia\n→ Loss of vasomotor tone → distributive shock\n→ Microthrombi formation → organ ischaemia\n\n4. ORGAN DYSFUNCTION (SOFA score tracks each):\n→ Lungs: ARDS (PaO2/FiO2 <300)\n→ Kidneys: creatinine >170μmol/L or urine <0.5ml/kg/hr\n→ Liver: bilirubin >34μmol/L\n→ Brain: altered GCS\n→ Coagulation: platelets <150,000\n→ Cardiovascular: vasopressor requirement\n\n5. MITOCHONDRIAL DYSFUNCTION: Cells cannot use oxygen → cellular death despite O2 delivery.\n\nSOURCES IN MATERNAL SEPSIS (ranked):\n1. Chorioamnionitis / endometritis (most common)\n2. Urinary tract infection / pyelonephritis\n3. Wound infection (caesarean, perineal)\n4. Pneumonia\n5. Appendicitis / other abdominal sepsis`,
          kp:[
            "Cytokine storm causes distributive shock — vasodilation, not hypovolaemia, is primary",
            "Endometritis is the most common source of maternal sepsis",
            "SOFA score tracks 6 organs — any organ dysfunction counts toward diagnosis",
            "Microvascular thrombosis causes organ failure even with adequate cardiac output",
            "Cellular oxygen utilisation fails in late sepsis — tissues cannot use delivered oxygen"
          ],
          callouts:[
            {role:"student", type:"exam", text:"The SOFA score (Sequential Organ Failure Assessment) tracks: respiration (PaO2/FiO2), coagulation (platelets), liver (bilirubin), cardiovascular (MAP/vasopressors), CNS (GCS), renal (creatinine/urine output). Each organ scored 0–4. Total ≥2 from baseline = sepsis. Learn the components — they appear in finals."},
            {role:"labtech", type:"practical", text:"Lactate is your single most important sepsis biomarker. Lactate >2mmol/L = tissue hypoperfusion. Lactate >4mmol/L = cryptic shock (even with normal BP). Lactate should be measured at diagnosis and repeated at 2 hours. Failing lactate clearance (reduction <10% at 2h) predicts 60% mortality. Report this trend explicitly."},
            {role:"nurse", type:"clinical", text:"Distributive shock looks different from hypovolaemic shock. The patient may be WARM (vasodilated) initially — bounding pulse, flushed skin, wide pulse pressure. Do not be reassured by warmth. Tachycardia and hypotension in a warm patient post-delivery is septic shock until proven otherwise."},
            {role:"doctor", type:"clinical", text:"Group A Streptococcus (Streptococcus pyogenes) causes fulminant maternal sepsis with a mortality of 20–30% even with optimal care. It can cause death within 24 hours of symptom onset. A postnatal woman with severe sore throat, rash, and rapidly deteriorating obs = GAS sepsis = ICU and IV penicillin NOW."},
            {role:"pharmacist", type:"clinical", text:"Vasopressors in septic shock: noradrenaline (norepinephrine) is first-line — it restores vascular tone in distributive shock. Vasopressin 0.03 units/min can be added as second-line. Dopamine is no longer recommended as first-line due to higher arrhythmia risk (NEJM 2010). Know your ICU vasopressor protocol."},
          ]
        },
        {
          h:"🦠 The Microbiology — Know Your Enemy",
          a:`A general who does not know the enemy's weapons cannot choose the right defence. In maternal sepsis, the antibiotic you choose is your weapon — and it must match the organism. Pick the wrong weapon for the wrong enemy and you lose the battle while the clock runs.`,
          c:`KEY ORGANISMS IN MATERNAL SEPSIS:\n\nGRAM-POSITIVE:\n→ Group A Streptococcus (GAS/S. pyogenes): Most feared. Rapid progression. Necrotising fasciitis. Toxic shock syndrome. Penicillin + clindamycin (to block toxin production).\n→ Group B Streptococcus (GBS): Chorioamnionitis. Neonatal sepsis. Penicillin.\n→ Staphylococcus aureus (incl. MRSA): Wound infection, bacteraemia. Flucloxacillin (MSSA) or vancomycin (MRSA).\n\nGRAM-NEGATIVE:\n→ E. coli: Most common gram-negative. UTI, endometritis. Cephalosporins, co-amoxiclav, gentamicin.\n→ Klebsiella: UTI, pneumonia. Extended spectrum — check sensitivities.\n→ Pseudomonas: Hospital-acquired. Piperacillin-tazobactam, meropenem.\n\nANAEROBES:\n→ Bacteroides, Clostridium: Endometritis, pelvic abscess. Always cover with metronidazole.\n\nEMPIRICAL COVER for post-caesarean maternal sepsis:\nPiperacillin-tazobactam 4.5g IV 8-hourly + metronidazole 500mg IV 8-hourly\nOR Meropenem 1g IV 8-hourly if severe/ICU\nAdd clindamycin if GAS toxin-mediated disease suspected.`,
          kp:[
            "GAS causes the most rapidly fatal maternal sepsis — penicillin + clindamycin immediately",
            "E. coli is the most common gram-negative cause — UTI and endometritis",
            "Always cover anaerobes in post-caesarean or post-abortion sepsis with metronidazole",
            "Take blood cultures x2 BEFORE first antibiotic dose — cultures after antibiotics are unreliable",
            "De-escalate antibiotics at 48–72 hours once cultures and sensitivities are available"
          ],
          callouts:[
            {role:"student", type:"exam", text:"Why clindamycin with penicillin for GAS? Penicillin kills the bacteria but does NOT stop toxin production. Clindamycin blocks the ribosome, halting toxin synthesis immediately. In toxin-mediated disease (necrotising fasciitis, toxic shock), stopping the toxin is as important as killing the bug. This dual mechanism is a classic exam question."},
            {role:"pharmacist", type:"clinical", text:"Antibiotic dosing in pregnancy and postpartum differs from standard dosing. Increased renal clearance in pregnancy means standard doses may give sub-therapeutic levels. Gentamicin: use actual body weight for loading dose; check levels at 18–24 hours. Vancomycin: target AUC/MIC 400–600. Know your unit's sepsis antibiotic guideline and pharmacy-driven TDM protocol."},
            {role:"labtech", type:"practical", text:"Blood culture technique determines result quality. Skin preparation: 70% alcohol + chlorhexidine gluconate — allow 30 seconds to dry. Fill aerobic bottle first (10ml), then anaerobic (10ml). Do not change needles between draw and inoculation — it adds contamination risk. Two sets from two different sites within 10 minutes. Label immediately with time and site."},
            {role:"nurse", type:"clinical", text:"If blood cultures have not been taken and antibiotics are due — hold the antibiotics for the two minutes it takes to take cultures. One correct set of cultures can identify the organism and guide targeted therapy for the next 7 days. Do not give antibiotics first without cultures except in immediate life threat."},
            {role:"doctor", type:"clinical", text:"The antibiotic clock: mortality increases 7% for every hour of delay after septic shock recognition. At the same time, unnecessary broad-spectrum antibiotics drive antimicrobial resistance (AMR). The resolution: take cultures immediately, give empirical broad-spectrum within one hour, de-escalate at 48–72 hours based on sensitivities. Both goals are achievable."},
          ]
        },
      ],
      ev:"Sepsis-3 JAMA 2016; WHO Maternal Sepsis Definition 2017; RCOG GTG 64A 2012; Surviving Sepsis Campaign 2021; NEJM Vasopressors 2010"
    },
  
    {
      id:2, num:"02", icon:"⏱️", free:false, dur:"2h 30m", lessons:9, color:"#154360",
      title:"The Golden Hour", sub:"Recognition, Assessment & The Sepsis Six",
      aud:["doctor","nurse","pharmacist","labtech","student"],
      tagline:"In sepsis, every hour without treatment is an hour the organs spend dying.",
      story:`Dr. Kwesi Mensah has just completed his intern year. Tonight is his second week as a medical officer on the obstetric ward.\n\nHe is called to see Nana Ama Boateng. He sees the obs chart. He sees the temperature — 38.2°C now. He examines her: uterine tenderness, offensive lochia, tachycardia. He thinks: endometritis.\n\nHe prescribes co-amoxiclav oral and documents a plan to review in the morning.\n\nHe does not measure her lactate. He does not take blood cultures. He does not give IV fluids. He does not escalate to the registrar.\n\nHe has made every mistake a junior doctor makes with sepsis — not from carelessness, but from not knowing what he does not know.\n\nBy morning, Nana Ama is in the ICU.\n\nThis module teaches what Dr. Mensah needed to know. What YOU need to know — before you walk onto that ward.`,
      sections:[
        {
          h:"🚨 Recognising Maternal Sepsis — The Signs You Cannot Miss",
          a:`Sepsis is a master of disguise. It borrows symptoms from a dozen other diagnoses. The key is not to chase a specific symptom — it is to recognise a PATTERN. A woman who is tachycardic + confused + not passing urine + has a source of infection is septic until proven otherwise. Trust the pattern over the individual number.`,
          c:`MATERNAL EARLY WARNING SYSTEM (MEWS):\nTrigger any ONE of:\n→ Temperature <36°C or ≥38°C\n→ HR ≥100 bpm\n→ RR ≥25/min\n→ SBP <90 or >160 mmHg\n→ O2 saturation <95%\n→ Urine output <30ml/hr for 2 consecutive hours\n→ Altered mentation\n\nREMEMBER: Normal temperature does NOT rule out sepsis.\nHypothermia (<36°C) in a septic patient = worse prognosis.\n\nSEPSIS RED FLAGS:\n→ Non-blanching rash → meningococcal/GAS\n→ Cold, mottled, clammy skin → decompensated shock\n→ Altered consciousness → cerebral hypoperfusion\n→ Uterine tenderness + offensive discharge → endometritis\n→ Calf tenderness + dyspnoea → septic pelvic thrombophlebitis\n\nTHE MOST MISSED DIAGNOSES:\n1. Sepsis after home delivery / traditional birth\n2. Sepsis in immunocompromised (HIV+, steroids)\n3. GAS sepsis presenting as sore throat / flu-like illness`,
          kp:[
            "ANY single MEWS trigger in an obstetric patient = sepsis screen immediately",
            "Hypothermia is as sinister as fever — do not be falsely reassured by normal temperature",
            "Altered mentation in a postnatal woman = organ dysfunction = sepsis until excluded",
            "Uterine tenderness + offensive lochia + tachycardia = endometritis = IV antibiotics NOW",
            "GAS sepsis can present as sore throat — ask about contacts with streptococcal illness"
          ],
          callouts:[
            {role:"student", type:"exam", text:"Common OSCE station: a postnatal woman with HR 108, RR 22, temperature 38.4°C and uterine tenderness. Expected response: take blood cultures x2, IV access, lactate, IV antibiotics within one hour, senior review. The mistake students make: prescribing oral antibiotics and reviewing in the morning. This scores zero."},
            {role:"nurse", type:"clinical", text:"You are the person most likely to first notice sepsis — you see the patient more than anyone else. Trust your instincts. If a patient 'looks wrong' to you but the numbers are borderline, that clinical gestalt is valid. Document it: 'Patient appears unwell, clinical concern for sepsis, escalated to medical team.' This is professional and protective."},
            {role:"doctor", type:"clinical", text:"Senior review does not mean a phone call. In any patient with suspected sepsis and two or more MEWS triggers, attend at the bedside. 'How does she look?' asked over the phone and 'how does she look?' seen with your own eyes are completely different clinical assessments. Attend."},
            {role:"pharmacist", type:"clinical", text:"When the sepsis alert is activated, be proactive. Contact the ward: confirm which antibiotics are prescribed, check stock availability, confirm dosing is weight-adjusted, check for allergy documentation. Antibiotic errors in sepsis — wrong drug, wrong dose, wrong route — are among the most dangerous medication errors in obstetrics."},
            {role:"labtech", type:"practical", text:"Sepsis screen priority panel: blood cultures x2, FBC, CRP, procalcitonin, lactate, U&E, LFT, coagulation screen. Lactate and blood cultures are time-critical — process immediately on receipt. CRP and procalcitonin trend over 24–48 hours guides antibiotic response. Falling CRP with clinical improvement = effective treatment. Rising CRP = reassess antibiotic choice."},
          ]
        },
        {
          h:"💉 The Sepsis Six — Your 60-Minute Bundle",
          a:`The Sepsis Six is the most evidence-based, most life-saving protocol in acute medicine. Six actions. Sixty minutes. Doing all six within one hour reduces maternal sepsis mortality by 46%. It is not complicated. It does not require a consultant. It requires a team that knows the protocol and acts on it without hesitation.`,
          c:`THE SEPSIS SIX (UK Sepsis Trust / Surviving Sepsis Campaign):\n\nGIVE:\n1. HIGH-FLOW OXYGEN: 15L/min via non-rebreather mask. Target SpO2 ≥94%.\n2. IV ANTIBIOTICS: Empirical broad-spectrum within 1 hour of recognition.\n3. IV FLUID CHALLENGE: 500ml crystalloid (Hartmann's) over 15 min. Reassess. Repeat if still hypotensive.\n\nTAKE:\n4. BLOOD CULTURES: Two sets before antibiotics. Do not delay antibiotics >45 min waiting for cultures.\n5. LACTATE: Venous or arterial. >2mmol/L = impaired perfusion. >4mmol/L = cryptic shock.\n6. URINE OUTPUT: Catheterise. Target ≥0.5ml/kg/hour. Hourly monitoring.\n\nPLUS — SENIOR REVIEW: Any Sepsis Six activation = senior clinician attendance.\n\nTIME TARGETS:\n→ 0–30 min: Cultures, lactate, O2, fluids commenced\n→ 30–60 min: Antibiotics given, catheter inserted\n→ 60 min: Full Sepsis Six complete, senior review done\n→ 2 hours: Lactate re-checked. Response assessed.`,
          kp:[
            "Sepsis Six within 60 minutes reduces mortality by 46% — all six actions matter equally",
            "Antibiotics within 1 hour — delay beyond 1 hour increases mortality 7% per hour",
            "Give 500ml crystalloid challenge first, then reassess — do not give 2L blind",
            "Re-check lactate at 2 hours — failure to clear (>10% reduction) = ICU transfer",
            "Blood cultures BEFORE antibiotics — but never delay antibiotics beyond 45 minutes for cultures"
          ],
          callouts:[
            {role:"student", type:"exam", text:"The Sepsis Six is examined as both a list and as a prioritisation exercise. 'What is the FIRST thing you do?' — Assess airway and give high-flow oxygen. 'What must happen before antibiotics?' — Blood cultures. 'What is the urine output target?' — 0.5ml/kg/hour. Memorise: Give three, Take three."},
            {role:"nurse", type:"clinical", text:"You can initiate four of the Sepsis Six independently before the doctor arrives: oxygen, IV access, blood cultures (if trained), and catheter insertion. Knowing your scope of practice and acting within it without waiting for instruction is what separates a good ward from a great ward."},
            {role:"pharmacist", type:"clinical", text:"Antibiotic timing is your metric. From the time sepsis is recognised to antibiotic administration — this interval should be audited in every unit. If your unit regularly achieves >90 minutes, investigate why. Common causes: antibiotics not stocked on ward, incorrect prescribing requiring pharmacy query, delay in IV preparation. Each cause has a systems solution."},
            {role:"labtech", type:"practical", text:"Lactate must be processed within 15 minutes of collection or kept on ice. Delayed processing gives falsely elevated results — glycolysis continues in the sample tube. If a lactate result surprises the clinician ('she doesn't look that sick'), ask when it was collected and how it was stored. A valid high lactate result requires a valid specimen."},
            {role:"doctor", type:"clinical", text:"Fluid resuscitation in sepsis: give 500ml crystalloid bolus, then reassess. Target: HR falling, BP rising, lactate clearing, urine output improving. If after 2L there is no response — vasopressors, not more fluid. Over-resuscitation with crystalloid causes pulmonary oedema, worsens coagulopathy, and increases mortality. More fluid is not always better fluid."},
          ]
        },
      ],
      ev:"Surviving Sepsis Campaign Guidelines 2021; UK Sepsis Trust Maternal Sepsis Pathway 2019; RCOG GTG 64A; WOMAN Trial Lancet 2017; Sepsis-3 JAMA 2016"
    },
  
    {
      id:3, num:"03", icon:"🧪", free:false, dur:"2h 30m", lessons:9, color:"#0B5345",
      title:"The Laboratory in the Storm", sub:"Investigations, Biomarkers & Monitoring",
      aud:["labtech","doctor","pharmacist","student"],
      tagline:"The laboratory does not diagnose sepsis. But it tells you how bad it is, how fast it is moving, and whether your treatment is working.",
      story:`Emmanuel Asiedu is at the bench again. It is 4:05 AM.\n\nThe sepsis screen arrives. He processes it systematically.\n\nWBC: 18.4 × 10⁹/L with left shift (75% neutrophils, 12% bands)\nCRP: 287 mg/L\nProkalcitonin: 28 ng/mL\nLactate: 4.1 mmol/L\nCreatinine: 198 μmol/L (up from 72 yesterday)\nPlatelets: 88,000\nFibrinogen: 1.4 g/L\nBlood cultures: Gram-positive cocci in chains on preliminary report\n\nEmmanuel looks at the preliminary culture result. Gram-positive cocci in chains. His mind goes immediately to two possibilities: Streptococcus or Enterococcus.\n\nHe calls the ward.\n\n"Your patient's culture is showing gram-positive cocci in chains on preliminary. Combined with her lactate of 4.1 and the coagulopathy picture, this is looking like streptococcal sepsis. She may need her antibiotic cover reviewed for clindamycin."\n\nThe registrar goes silent for three seconds. Then: "Thank you. I'm calling ICU now."\n\nEmmanuel did not make the diagnosis. He gave the intelligence that changed the management.\n\nThis module is that intelligence.`,
      sections:[
        {
          h:"📊 The Sepsis Biomarker Panel — Reading Every Number",
          a:`A biomarker is a biological signal — a number that tells you something specific about what is happening inside the body. In sepsis, no single biomarker tells the whole story. But together, they give you a picture as vivid as any scan — if you know how to read them.`,
          c:`THE MATERNAL SEPSIS PANEL:\n\nLACTATE (Most critical):\n<2 mmol/L = Normal\n2–4 mmol/L = Tissue hypoperfusion — treat aggressively\n>4 mmol/L = Cryptic shock — ICU regardless of BP\nTarget: >10% reduction at 2 hours with treatment\n\nCRP (C-Reactive Protein):\nRises 6–12 hours after infection onset\nPeak at 48 hours\nUseful for TREND not single value\nFalling CRP = responding to treatment\nRising CRP at 48–72 hours = treatment failure\n\nPROCALCITONIN (PCT):\n<0.5 ng/mL = bacterial sepsis unlikely\n0.5–2 ng/mL = possible infection\n>2 ng/mL = probable bacterial sepsis\n>10 ng/mL = severe sepsis/septic shock\nHalf-life 24–35 hours — falls rapidly with effective treatment\nUseful for antibiotic de-escalation decisions at 72 hours\n\nWBC WITH DIFFERENTIAL:\nLeukocytosis >12,000 or leukopenia <4,000 = infection response\nLeft shift (>10% bands) = bone marrow releasing immature neutrophils = serious infection\nPregnancy normally raises WBC to 12,000–18,000 — context is everything\n\nFIBRINOGEN + COAGULATION:\nFibrinogen <2g/L = DIC developing\nPlatelets falling = consumptive coagulopathy\nProlonged PT + APTT = coagulation failure`,
          kp:[
            "Lactate >4mmol/L = cryptic shock — ICU transfer even with normal blood pressure",
            "Procalcitonin guides antibiotic de-escalation at 72 hours — falling PCT = safe to narrow cover",
            "CRP trend over 48 hours is more useful than any single CRP value",
            "Left shift on WBC differential = serious infection — immature neutrophils being released",
            "Pregnancy raises WBC to 18,000 normally — leukocytosis alone does not diagnose sepsis"
          ],
          callouts:[
            {role:"labtech", type:"practical", text:"Procalcitonin has a critical pre-analytical requirement: samples must be spun and separated within 2 hours of collection. Delayed separation causes false elevation. When a PCT result surprises the clinician, ask: 'When was this taken and how long before it was processed?' Document processing time on every PCT report."},
            {role:"student", type:"exam", text:"Lactate clearance is examined more than initial lactate. A lactate of 4.1 mmol/L that falls to 3.6 at 2 hours (12% clearance) = responding. A lactate of 3.2 that rises to 3.8 at 2 hours = deteriorating despite treatment. The direction matters more than the number."},
            {role:"doctor", type:"clinical", text:"Procalcitonin-guided antibiotic stewardship: if PCT is falling at 72 hours and the patient is clinically improving, safely narrow antibiotic cover based on culture sensitivities. This reduces days of broad-spectrum antibiotics, limits AMR emergence, reduces C. difficile risk, and reduces costs. PCT is your de-escalation guide."},
            {role:"pharmacist", type:"clinical", text:"Gentamicin therapeutic drug monitoring in sepsis: take trough level before fourth dose (or level at 6–14 hours post-dose for once-daily dosing). Trough >2mg/L = nephrotoxicity risk — reduce dose or extend interval. In sepsis with AKI, gentamicin accumulates rapidly. Daily creatinine monitoring is mandatory when aminoglycosides are prescribed."},
            {role:"nurse", type:"clinical", text:"Urine output is your bedside lactate surrogate. If your patient is not passing urine despite IV fluids, her organs are underperfused regardless of what her blood pressure shows. Oliguria (<0.5ml/kg/hour for 2 consecutive hours) is a MEWS trigger AND a sign of renal dysfunction. Document it, escalate it, do not wait for the next drug round."},
          ]
        },
        {
          h:"🩸 The Source — Finding Where the Infection Began",
          a:`Treating sepsis without finding the source is like bailing out a boat without finding the hole. The antibiotics buy time — but until the source is controlled, the bacteria have an unlimited supply line. Finding and controlling the source is as important as any drug.`,
          c:`SOURCE IDENTIFICATION IN MATERNAL SEPSIS:\n\nENDOMETRITIS (most common):\nClinical: uterine tenderness, offensive lochia, uterine subinvolution, fever\nInvestigation: pelvic USS (retained products?), endometrial swab\nManagement: IV antibiotics + surgical evacuation if retained products confirmed\n\nWOUND INFECTION (caesarean/perineal):\nClinical: wound erythema, discharge, dehiscence, tracking cellulitis\nInvestigation: wound swab, USS for collection\nManagement: wound opening, debridement, antibiotics. Necrotising fasciitis = emergency surgery\n\nURINARY TRACT / PYELONEPHRITIS:\nClinical: loin pain, dysuria, costovertebral angle tenderness\nInvestigation: MSU, urine culture, renal USS if obstructed\nManagement: IV antibiotics (cephalosporin or gentamicin), hydration\n\nPNEUMONIA:\nClinical: cough, pleuritic pain, consolidation on examination\nInvestigation: CXR, sputum culture\nManagement: co-amoxiclav + clarithromycin (community) or piperacillin-tazobactam (hospital)\n\nSEPTIC PELVIC THROMBOPHLEBITIS:\nClinical: spiking fevers despite antibiotics, pelvic pain, no obvious source\nInvestigation: CT pelvis/abdomen with contrast\nManagement: anticoagulation + antibiotics`,
          kp:[
            "Endometritis is the most common source — uterine tenderness + offensive lochia = investigate",
            "Retained products of conception must be excluded by USS in every case of postpartum sepsis",
            "Necrotising fasciitis of perineal wound = surgical emergency within 6 hours",
            "Septic pelvic thrombophlebitis: consider when fever persists despite 72h of appropriate antibiotics",
            "Source control is the fourth pillar of sepsis management after antibiotics, fluids and monitoring"
          ],
          callouts:[
            {role:"student", type:"exam", text:"Necrotising fasciitis (NF) is the examination favourite for 'don't miss' diagnoses. Features: severe pain disproportionate to appearance, skin changes from erythema → grey/black discolouration, subcutaneous crepitus, systemic toxicity. NF requires surgical debridement within hours — antibiotics alone are inadequate. Know: 'pain out of proportion = NF until proven otherwise'."},
            {role:"doctor", type:"clinical", text:"Septic pelvic thrombophlebitis (SPT) should be on your differential when postpartum sepsis fails to respond to 72 hours of appropriate IV antibiotics. CT with contrast shows thrombus in ovarian or iliac veins. Treatment is anticoagulation (LMWH) plus antibiotics. Failure to consider SPT means prolonged ineffective antibiotic courses."},
            {role:"nurse", type:"clinical", text:"Wound inspection is a nursing skill that saves lives. Every post-caesarean patient's wound should be inspected and documented daily. Increasing erythema tracking beyond the wound edges, fluctuance (fluid collection), or skin colour change (grey, dusky) are emergency signs. Do not wait for the next doctor's round — call immediately."},
            {role:"labtech", type:"practical", text:"Culture specimens from maternal sepsis: aerobic AND anaerobic blood cultures x2, MSU, high vaginal swab, wound swab, and sputum if pneumonia suspected. Each specimen requires correct container, correct temperature, and correct transport time. Anaerobic blood culture bottles must never be refrigerated. Wound swabs dry out within 4 hours — process urgently."},
            {role:"pharmacist", type:"clinical", text:"Antibiotic penetration to source matters. Metronidazole penetrates pelvic abscesses well — essential in endometritis. Aminoglycosides penetrate poorly into abscess cavities. Rifampicin penetrates biofilm in device-associated infections. Understanding penetration guides adjunctive antibiotic choices when first-line treatment fails."},
          ]
        },
      ],
      ev:"RCOG GTG 64A 2012; Surviving Sepsis 2021; UK Sepsis Trust Maternal Pathway; WHO 2017; NICE NG51 Sepsis 2016"
    },
  
    {
      id:4, num:"04", icon:"🌅", free:false, dur:"2h 30m", lessons:9, color:"#1A237E",
      title:"From ICU to Home", sub:"Critical Care, Recovery & Prevention",
      aud:["doctor","nurse","pharmacist","labtech","student"],
      tagline:"Surviving maternal sepsis is not the end of the story. Recovery is a journey, and prevention is the chapter we must write next.",
      story:`Nana Ama Boateng is on day four of her ICU admission.\n\nShe is off vasopressors. Her lactate is 1.1mmol/L. Her urine output is 55ml per hour. Her CRP has fallen from 287 to 64.\n\nShe is winning.\n\nThe ICU consultant stands at the bedside with Dr. Frimpong and Sister Comfort Asante. They review the chart together — antibiotics, fluid balance, the trend of every biomarker.\n\nThen Nana Ama speaks for the first time since intubation. "Where is my baby?"\n\nA long pause. Her baby is in the neonatal unit. He was born healthy. He has been waiting.\n\nThe first thing Nana Ama does when she is moved to the step-down unit is hold her son.\n\nShe survived. But the question that haunts the team — and the question that this module asks — is: could we have prevented this from ever happening?`,
      sections:[
        {
          h:"🏥 ICU Management of Maternal Septic Shock",
          a:`The ICU is not the end of the road — it is the intensive repair shop. Every organ that failed in sepsis needs targeted support while the underlying infection is treated. ICU management is the art of buying time for the antibiotics to work and the immune system to recover.`,
          c:`ICU MANAGEMENT BUNDLE:\n\nHAEMODYNAMIC TARGETS:\n→ MAP ≥65 mmHg (vasopressors if fluid-unresponsive)\n→ Noradrenaline first-line vasopressor\n→ Vasopressin 0.03 units/min as second-line\n→ Avoid dopamine (increased arrhythmias)\n\nRESPIRATORY:\n→ ARDS (PaO2/FiO2 <300): Low tidal volume ventilation 6ml/kg\n→ Prone positioning if PaO2/FiO2 <150\n→ CPAP/NIV before intubation if possible\n\nRENAL:\n→ AKI: strict fluid balance, avoid nephrotoxins\n→ Renal replacement therapy if K+ >6.5, severe acidosis, refractory oliguria\n\nCORTICOSTEROIDS:\n→ Hydrocortisone 200mg/day IV if vasopressor-dependent septic shock\n→ ADRENAL trial (NEJM 2018): no mortality benefit overall — use selectively\n\nGLUCOSE CONTROL:\n→ Target 6–10 mmol/L\n→ Hyperglycaemia worsens outcome; hypoglycaemia equally dangerous\n\nVTE PROPHYLAXIS:\n→ LMWH when haemostasis achieved and platelet >50,000\n→ Compression stockings throughout`,
          kp:[
            "MAP target ≥65mmHg — noradrenaline is first-line vasopressor in septic shock",
            "Low tidal volume ventilation 6ml/kg protects lungs in ARDS",
            "Hydrocortisone only if vasopressor-dependent — not routine in all septic shock",
            "Strict glucose control 6–10mmol/L — both hyper and hypoglycaemia harm",
            "Start LMWH VTE prophylaxis as soon as safe — sepsis dramatically increases DVT risk"
          ],
          callouts:[
            {role:"student", type:"exam", text:"ARDS criteria: PaO2/FiO2 <300 + bilateral infiltrates on CXR + not fully explained by cardiac failure. Protective ventilation: tidal volume 6ml/kg predicted body weight, PEEP ≥5cmH2O, plateau pressure <30cmH2O. These numbers appear in finals and professional exams. Know them."},
            {role:"nurse", type:"clinical", text:"ICU nursing in sepsis is about trend surveillance. Vital signs every 15–30 minutes. Hourly urine output. Daily weight (oedema accumulation). Wound care. Pressure area care. Psychological support. And vigilance for ICU complications: ventilator-associated pneumonia, line infections, delirium. ICU nursing is the difference between a patient who survives and one who thrives."},
            {role:"pharmacist", type:"clinical", text:"ICU pharmacology review in sepsis: daily medication reconciliation. Dose-adjust renally cleared drugs as AKI evolves and resolves. Stop nephrotoxins (NSAIDs, ACE inhibitors, aminoglycosides when no longer needed). Review DVT prophylaxis daily. Steroid weaning protocol when vasopressors are being weaned. Proton pump inhibitor for stress ulcer prophylaxis. This is your daily ICU checklist."},
            {role:"labtech", type:"practical", text:"ICU monitoring frequency: lactate 4–6 hourly while unstable, then daily. FBC and electrolytes daily. CRP and procalcitonin every 48 hours to guide antibiotic decisions. Blood cultures if fever spikes despite antibiotics — looking for secondary infection or treatment failure. Coagulation daily if DIC developing. Communicate critical values with direct phone calls to the bedside nurse — never just electronic reporting in ICU."},
            {role:"doctor", type:"clinical", text:"Timing of delivery in septic pregnant women: sepsis is not an automatic indication for delivery, but if the uterus is the source (chorioamnionitis) and the fetus is viable, delivery removes the source. Discuss with obstetric consultant and neonatology. If delivery is indicated, do not delay for sepsis to be 'under control' first — in chorioamnionitis, delivery IS the source control."},
          ]
        },
        {
          h:"🛡️ Prevention — Stopping Sepsis Before It Starts",
          a:`Every case of maternal sepsis is an opportunity to ask: could this have been prevented? The answer, in the majority of cases, is yes. Prevention in maternal sepsis is not complicated. It is hand hygiene, sterile technique, prophylactic antibiotics at caesarean, early recognition, and staff education. These are not expensive interventions. They are habits. And habits save lives.`,
          c:`EVIDENCE-BASED PREVENTION:\n\n1. ANTIBIOTIC PROPHYLAXIS AT CAESAREAN:\nCefazolin 2g IV at skin incision (not at cord clamping — WHO 2021 update).\nReduces post-CS endometritis by 75%.\nExtend cover to azithromycin 500mg IV in non-elective CS (NEJM 2016: 51% reduction in infection).\n\n2. HAND HYGIENE:\nWHO 5 Moments. Alcohol hand rub before and after every patient contact.\nHand hygiene compliance <60% in most African hospitals (WHO 2019).\nEvery 10% improvement in compliance reduces HAI by 6%.\n\n3. STERILE TECHNIQUE:\nDuring delivery, catheterisation, IV insertion, wound care.\nSingle most important intervention in preventing post-delivery infection.\n\n4. EARLY RECOGNITION PROTOCOLS:\nMEWS implementation reduces time to sepsis recognition by 40%.\nStaff training in sepsis recognition: every midwife, every nurse, every doctor.\n\n5. TREATMENT OF GBS IN PREGNANCY:\nScreen at 35–37 weeks.\nIV penicillin in labour if GBS+.\nReduces neonatal GBS sepsis by 80% and maternal intrapartum infection.\n\n6. POST-ABORTION CARE:\nAll post-abortion patients — safe or unsafe — should receive prophylactic antibiotics.\nDoxycycline 100mg BD for 7 days.\nEarly access to safe abortion services reduces septic abortion rates dramatically.`,
          kp:[
            "Cefazolin at skin incision (not cord clamping) reduces post-CS endometritis by 75%",
            "Hand hygiene: every 10% compliance improvement reduces hospital-acquired infection by 6%",
            "GBS screening at 35–37 weeks + intrapartum penicillin reduces neonatal sepsis by 80%",
            "MEWS implementation reduces time to sepsis recognition by 40%",
            "Every staff member — midwife, cleaner, porter — can break or maintain the infection chain"
          ],
          callouts:[
            {role:"student", type:"exam", text:"Why give cefazolin at skin incision not cord clamping? The 2021 WHO update: giving antibiotics at cord clamping (the old practice) was to avoid fetal exposure. But the fetus is already being delivered — the infection window is before and during surgery, not after. Earlier administration gives better tissue levels during the procedure when contamination occurs. This WHO update is examined."},
            {role:"nurse", type:"clinical", text:"Hand hygiene auditing is a nursing leadership role. Walk your ward. Count the missed moments — before patient contact, after touching surfaces, after removing gloves. Present the data at ward meetings. Peer accountability is more effective than policy documents. One nurse who audits and feeds back can change an entire ward culture."},
            {role:"pharmacist", type:"clinical", text:"Antibiotic prophylaxis stewardship at caesarean section: ensure cefazolin is prescribed and administered at the right time (skin incision, not cord clamping). If patient is penicillin-allergic: clindamycin 900mg IV + gentamicin 1.5mg/kg IV. A single correct prophylactic dose prevents more infections than days of therapeutic antibiotics after the fact."},
            {role:"doctor", type:"clinical", text:"Septic abortion remains a major cause of maternal mortality in Ghana and across sub-Saharan Africa. Every woman presenting after an abortion — safe or unsafe, complete or incomplete — should be assessed for sepsis, treated with antibiotics if infected, and offered compassionate, non-judgmental care. Withholding care on moral grounds kills women. It is never acceptable."},
            {role:"labtech", type:"practical", text:"Your laboratory can drive prevention. Monthly reporting of wound infection rates by organism, antibiotic resistance patterns by ward, and blood stream infection incidence gives the clinical team the intelligence to target interventions. This is clinical microbiology in its most impactful form — not just reporting results, but shaping hospital policy."},
          ]
        },
      ],
      ev:"Surviving Sepsis Campaign 2021; WHO CS Antibiotic Prophylaxis 2021; NEJM Azithromycin CS 2016; UK Sepsis Trust 2019; RCOG GTG 64A; ADRENAL Trial NEJM 2018"
    },
  ];
  
  export const MS_PRE_Q = [
    {q:"Which definition of sepsis is currently recommended?",
     opts:["SIRS criteria: fever + tachycardia + raised WBC","Life-threatening organ dysfunction from dysregulated host response to infection","Any infection requiring IV antibiotics","Temperature >38°C with a positive blood culture"],ans:1},
    {q:"What does a qSOFA score of 2 indicate?",
     opts:["Mild infection — oral antibiotics appropriate","Sepsis likely — immediate action required","Septic shock — vasopressors needed","Normal response to postpartum inflammation"],ans:1},
    {q:"Which is the most common source of maternal sepsis?",
     opts:["Urinary tract infection","Pneumonia","Endometritis","Wound infection"],ans:2},
    {q:"The Sepsis Six includes all EXCEPT:",
     opts:["High-flow oxygen","Blood cultures","Oral antibiotics","IV fluid challenge"],ans:2},
    {q:"A lactate of 4.2mmol/L with normal blood pressure indicates:",
     opts:["The patient is stable — lactate is mildly elevated","Cryptic shock — ICU transfer required","Laboratory error — repeat the test","Dehydration — give oral fluids"],ans:1},
  ];
  
  export const MS_POST_Q = [
    {q:"A postnatal woman has HR 114, RR 24, temperature 38.6°C, uterine tenderness and offensive lochia. Her BP is 96/64. What is the correct immediate management?",
     opts:["Oral co-amoxiclav and review in the morning","Blood cultures, IV access, IV antibiotics within 1 hour, lactate, catheter, senior review","Paracetamol and observation for 4 hours","Pelvic USS only — wait for results before treatment"],ans:1},
    {q:"Blood cultures are taken at 4AM. Gram-positive cocci in chains are reported on preliminary result. The most important addition to the current antibiotic regimen is:",
     opts:["Vancomycin — to cover MRSA","Clindamycin — to block toxin production from streptococcal species","Gentamicin — to provide gram-negative cover","Metronidazole — to cover anaerobes"],ans:1},
    {q:"Lactate at hour 0 is 3.8mmol/L. At hour 2 after treatment it is 3.5mmol/L. How do you interpret this?",
     opts:["Good response — lactate has cleared by >10%","Inadequate response — <10% clearance — reassess and escalate","Normal — lactate always takes 6 hours to clear","Reassuring — any reduction in lactate is acceptable"],ans:1},
    {q:"A postnatal patient continues to spike fevers despite 72 hours of appropriate IV antibiotics. The most likely diagnosis to consider is:",
     opts:["Antibiotic allergy","Viral rather than bacterial infection","Septic pelvic thrombophlebitis","Drug fever from the antibiotics"],ans:2},
    {q:"Which antibiotic prophylaxis regimen for caesarean section does WHO 2021 recommend?",
     opts:["Metronidazole at cord clamping","Cefazolin 2g IV at skin incision","Amoxicillin oral 2 hours before surgery","No prophylaxis is needed for elective caesarean"],ans:1},
  ];