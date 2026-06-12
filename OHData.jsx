
const OH_MODS = [
  {
    id:1, num:"01", icon:"🩸", free:true, dur:"2h 30m", lessons:9, color:"#8B0000",
    title:"The Red Tide", sub:"Pathophysiology & Classification of Obstetric Haemorrhage",
    aud:["doctor","nurse","pharmacist","labtech","student"],
    tagline:"Blood is life. When it refuses to stop, understanding why is the difference between life and death.",
    story:`It is 11:42 PM at Komfo Anokye Teaching Hospital. Theatre 2.\n\nMrs. Adwoa Mensah, 34 years old, fourth pregnancy, has just delivered a healthy baby boy. The midwife smiles. The husband outside is pacing with joy.\n\nThen Sister Efua notices it. The blood is not slowing. The placenta is delivered. The uterus is soft — too soft. She presses down. A gush of blood soaks through the drapes and onto the floor.\n\n"She's bleeding." Simple words. Catastrophic meaning.\n\nIn the next four minutes, Mrs. Mensah will lose 1.5 litres of blood. In the next eight, she will be in haemorrhagic shock. Whether she survives the next hour depends entirely on what the team does in the next four minutes — and whether they understand what is happening inside her body right now.\n\nThis module begins where the bleeding begins.`,
    sections:[
      {
        h:"🔴 Defining the Enemy — What Is Obstetric Haemorrhage?",
        a:`Think of the pregnant uterus as a city with an extraordinary blood supply — at term, 500–800ml of blood flows through it every minute. That is the entire cardiac output of a small child. When that supply is disrupted at delivery, you are not dealing with a slow leak from a garden hose. You are dealing with a burst main pipe. Speed of recognition is everything.`,
        c:`DEFINITIONS:\nPrimary PPH: Blood loss ≥500ml within 24 hours of vaginal delivery, OR ≥1000ml after caesarean section.\nSevere PPH: Blood loss ≥1000ml with signs of haemodynamic compromise.\nMassive PPH: Blood loss ≥2500ml, or transfusion of ≥5 units packed red cells, or treatment for coagulopathy.\n\nWHO 2023 UPDATE: Any blood loss sufficient to cause haemodynamic instability should be treated as PPH regardless of measured volume. Clinical signs trump measured numbers.\n\nAntepartum Haemorrhage (APH): Bleeding from 24 weeks gestation until delivery — primarily placenta praevia and placental abruption.\n\nGLOBAL BURDEN: PPH is the leading cause of maternal mortality worldwide — responsible for 27% of all maternal deaths. In sub-Saharan Africa, this rises to 34%. One woman dies from PPH every 6 minutes globally (WHO 2023).`,
        kp:[
          "PPH defined as ≥500ml after vaginal or ≥1000ml after caesarean delivery",
          "Severe PPH: ≥1000ml with haemodynamic compromise — act immediately",
          "Clinical signs of shock are more reliable than measured blood loss alone",
          "PPH kills one woman every 6 minutes globally — 27% of all maternal deaths",
          "Sub-Saharan Africa bears disproportionate burden at 34% of maternal deaths"
        ],
        callouts:[
          {role:"student", type:"exam", text:"Exam favourite: PPH thresholds. Vaginal delivery ≥500ml = PPH. Caesarean ≥1000ml = PPH. Severe = ≥1000ml WITH signs of compromise. Massive = ≥2500ml or ≥5 units transfused. Know all four."},
          {role:"nurse", type:"clinical", text:"Blood loss is consistently underestimated by up to 50% visually. A soaked standard pad holds only 35–50ml. When you think she's lost 500ml, she may have lost 900ml. Always escalate earlier than you think necessary."},
          {role:"doctor", type:"clinical", text:"The 'shock index' (heart rate ÷ systolic BP) is your rapid bedside tool. Normal <0.9. Index ≥1.0 = significant haemorrhage. Index ≥1.7 = massive haemorrhage requiring immediate intervention. Faster than waiting for formal blood loss estimation."},
          {role:"pharmacist", type:"clinical", text:"Know your unit's massive transfusion protocol trigger. Most activate at ≥2500ml loss or shock index ≥1.7. When activated, your role in preparing blood products, TXA, and fibrinogen concentrate becomes time-critical."},
          {role:"labtech", type:"practical", text:"PPH triggers simultaneous demands for FBC, coagulation screen, crossmatch and fibrinogen. Have a PPH sample priority protocol. Fibrinogen is the most time-critical result — a level below 2g/L predicts progression to severe coagulopathy with 100% sensitivity."},
        ]
      },
      {
        h:"🔺 The Four T's — Understanding Every Cause",
        a:`Imagine a car engine. It can fail for four reasons: no fuel, broken pistons, blocked pipes, or foreign objects jamming the works. Obstetric haemorrhage fails the same way — four categories, each requiring a completely different fix. Miss the category and you treat the wrong problem while the patient bleeds.`,
        c:`THE FOUR T's:\n\n1. TONE (70% of PPH)\nUterine atony — the uterus fails to contract after delivery. Flaccid, boggy uterus. The most common and most treatable cause.\nRisk factors: prolonged labour, grand multiparity, macrosomia, polyhydramnios, oxytocin augmentation, magnesium sulfate, chorioamnionitis, fibroids.\n\n2. TRAUMA (20% of PPH)\nLacerations of the cervix, vagina, perineum or uterus. Broad ligament haematoma. Uterine rupture. Surgical trauma at caesarean.\nKey: uterus is WELL CONTRACTED but bleeding continues = trauma until proven otherwise.\n\n3. TISSUE (10% of PPH)\nRetained placenta, retained placental fragments, placenta accreta spectrum (PAS). Incomplete placental delivery or abnormal placentation.\nKey: always inspect placenta for completeness after delivery.\n\n4. THROMBIN (rare but lethal)\nCoagulopathy — either pre-existing (von Willebrand disease, ITP) or acquired (DIC from abruption, sepsis, amniotic fluid embolism, severe PE, prolonged PPH itself).\nKey: PPH causes coagulopathy, and coagulopathy worsens PPH — a deadly cycle.`,
        kp:[
          "Tone (atony) causes 70% of all PPH — always the first suspect",
          "Contracted uterus still bleeding = Trauma until proven otherwise",
          "Always inspect placenta for completeness — retained tissue causes ongoing bleeding",
          "Coagulopathy causes AND is caused by severe PPH — breaks the clotting cycle",
          "Identifying the correct T determines the correct treatment — diagnosis drives management"
        ],
        callouts:[
          {role:"student", type:"exam", text:"The Four T's is the single most examined PPH topic. Tone 70%, Trauma 20%, Tissue 10%, Thrombin rare. Also know: a FIRM uterus with ongoing bleeding = not atony = look for trauma or tissue."},
          {role:"nurse", type:"clinical", text:"Your bedside assessment: feel the uterine fundus. Soft and high = atony (Tone). Firm but still bleeding = call for speculum examination (Trauma). Placenta not yet delivered or feels incomplete = Tissue. Patient on MgSO4 or bleeding abnormally = suspect Thrombin."},
          {role:"doctor", type:"clinical", text:"In massive PPH the Four T's often coexist. Atony triggers coagulopathy (Thrombin), which worsens bleeding, which causes more atony. Breaking this cycle requires treating ALL contributing factors simultaneously, not sequentially."},
          {role:"pharmacist", type:"clinical", text:"The Four T's drives your drug choices entirely. Tone = uterotonics (oxytocin, ergometrine, carboprost, misoprostol). Thrombin = TXA, fibrinogen, blood products. Trauma and Tissue = surgical, not pharmacological. Know which drugs are useless for which cause."},
          {role:"labtech", type:"practical", text:"When coagulopathy (Thrombin) is suspected: PT, APTT, fibrinogen, D-dimer, FBC with platelets — the full DIC screen. Fibrinogen <2g/L and platelets <100,000 with raised D-dimer = DIC. Report these results with a phone call, not just electronically."},
        ]
      },
      {
        h:"🌊 Haemorrhagic Shock — What Happens Inside",
        a:`Picture a city losing its water supply. First the pressure drops in the outer suburbs — the skin and muscles. The city centre — the brain and heart — is protected longest. But if the mains pressure keeps falling, eventually even the city centre loses water. By then the pipes themselves start to collapse. That is decompensated haemorrhagic shock. And unlike the suburbs, the city centre does not recover easily.`,
        c:`CLASSIFICATION OF HAEMORRHAGIC SHOCK (RCOG/ALSO):\n\nClass I: <750ml lost (15% blood volume). HR <100. BP normal. Anxious. Compensated.\nClass II: 750–1500ml (15–30%). HR 100–120. BP maintained. Pallor, anxiety, reduced urine output.\nClass III: 1500–2000ml (30–40%). HR 120–140. BP FALLING. Confusion, pallor, oliguria. CRITICAL.\nClass IV: >2000ml (>40%). HR >140. BP severely low. Unconscious. Lethal without immediate intervention.\n\nCOMPENSATORY MECHANISMS (why BP drops late):\n- Catecholamine surge → vasoconstriction → maintains BP\n- Peripheral shutdown → protects vital organs\n- BP is the LAST thing to fall — do not wait for hypotension to call for help\n\nSHOCK INDEX: HR ÷ Systolic BP\n≥1.0 = significant. ≥1.7 = massive haemorrhage.`,
        kp:[
          "Blood pressure falls LATE — tachycardia and pallor precede hypotension",
          "Shock index ≥1.0 = significant haemorrhage — act, do not observe",
          "Class III shock (30–40% loss) = approximately 1500–2000ml — ICU-level emergency",
          "Young fit women compensate powerfully and then collapse suddenly — be warned",
          "Urine output <0.5ml/kg/hour = early sign of inadequate organ perfusion"
        ],
        callouts:[
          {role:"student", type:"exam", text:"Know the four shock classes by volume and HR/BP. Exam favourite: 'BP is maintained in Class II shock' — TRUE, because of compensation. 'HR is the first vital sign to change' — TRUE. 'Shock index ≥1.7 = massive haemorrhage' — TRUE."},
          {role:"nurse", type:"clinical", text:"Tachycardia is your earliest warning. A heart rate rising from 80 to 104 in a postnatal woman is not normal. Don't wait for the BP to drop. Chart the trend, escalate immediately, insert a second large-bore IV. Your speed here is the most important intervention."},
          {role:"doctor", type:"clinical", text:"Beware the 'deceptive interval' — young women with high physiological reserve can maintain near-normal BP with 30% blood volume loss. When they decompensate, they collapse fast. If your patient looks anxious, pale, and tachycardic, treat for Class III shock even with normal BP."},
          {role:"pharmacist", type:"clinical", text:"Vasopressors are not first-line in haemorrhagic shock — they worsen organ ischaemia by further vasoconstricting already-shut-down peripheral vessels. Volume resuscitation and haemostasis are the priority. Vasopressors are a bridge only when the above have failed."},
          {role:"labtech", type:"practical", text:"In Class III/IV shock: lactate and base deficit are your tissue perfusion markers. Lactate >4mmol/L = severe tissue hypoxia. Base deficit worse than -6 = significant shock. These guide resuscitation adequacy alongside clinical signs — not just the initial blood loss."},
        ]
      },
    ],
    ev:"WHO 2023 Global Maternal Mortality Report; RCOG GTG 52 2016; FIGO Guidelines 2022; Lancet Global Health 2022; ALSO Manual 8th Ed"
  },

  {
    id:2, num:"02", icon:"⚡", free:false, dur:"2h 45m", lessons:10, color:"#6B0000",
    title:"The First Four Minutes", sub:"Immediate Recognition & Emergency Response",
    aud:["doctor","nurse","pharmacist","labtech","student"],
    tagline:"In obstetric haemorrhage, the first four minutes are worth more than the next four hours.",
    story:`Dr. Abena Frimpong is a medical officer two years out of UGMS. Tonight she is the most senior person in the maternity unit. The consultant is at home. It is 2:15 AM.\n\nThe midwife calls her for a "woman bleeding after delivery." By the time Dr. Frimpong reaches the bedside, the patient has lost an estimated 900ml. HR 118. BP 98/64. The patient is frightened. Two junior nurses are frozen, waiting for instructions.\n\nDr. Frimpong looks at the trolley. There is no blood in the fridge. There is oxytocin but no ergometrine. The anaesthetist is in emergency theatre next door.\n\nIn this moment, what Dr. Frimpong knows — and what she does in the next four minutes — will determine whether this woman is alive at dawn.\n\nThis module is her preparation. And yours.`,
    sections:[
      {
        h:"📢 Call for Help — The Most Underused Intervention",
        a:`In aviation, the most dangerous cockpit is one where the co-pilot is too afraid to speak up. In obstetrics, the most dangerous delivery room is one where a junior doctor or midwife tries to manage a haemorrhage alone. Calling for help is not weakness — it is the first clinical intervention. It costs nothing and saves everything.`,
        c:`THE HAEMORRHAGE CALL:\nWho to call simultaneously:\n→ Most senior obstetrician available\n→ Anaesthetist\n→ Senior midwife/nurse\n→ Blood bank (early crossmatch request)\n→ Theatre team (may need surgical intervention)\n→ Haematologist if coagulopathy suspected\n\nWHEN TO CALL: At first recognition — not after one failed intervention. The RCOG and WHO both state: call for senior help BEFORE the situation deteriorates.\n\nMONETARY COST OF CALLING EARLY: Zero.\nCOST OF CALLING LATE: Preventable death.\n\nCOMMS TOOL — SBAR:\nSituation: "I have a patient with PPH, estimated 900ml, haemodynamically compromised."\nBackground: "G4P3, vaginal delivery 20 mins ago, atonic uterus, oxytocin given."\nAssessment: "HR 118, BP 98/64, shock index 1.2. Deteriorating."\nRecommendation: "I need you here now and blood bank on standby."`,
        kp:[
          "Call for help at FIRST recognition — not after failed first-line treatment",
          "Alert blood bank early — crossmatch takes time you may not have",
          "Use SBAR to communicate urgently and clearly",
          "Assign roles immediately — a team without assigned tasks is a crowd",
          "Document time of recognition, every intervention, every drug, every vital sign"
        ],
        callouts:[
          {role:"student", type:"exam", text:"SBAR communication is increasingly examined in OSCEs and written papers. Practice it: Situation, Background, Assessment, Recommendation. In PPH the Recommendation should always include requesting senior presence, not just advice by phone."},
          {role:"nurse", type:"clinical", text:"As the bedside nurse you will often see the haemorrhage first. You do not need a doctor's instruction to call for help, insert a second IV, start fluid, or activate the haemorrhage trolley. Know your unit's escalation protocol and act on it independently."},
          {role:"doctor", type:"clinical", text:"When you arrive to a PPH: first 30 seconds — assign roles out loud. 'You — on the IV and fluids. You — call blood bank. You — document everything. I am assessing the patient.' A team that knows its roles functions at twice the speed of one that doesn't."},
          {role:"pharmacist", type:"clinical", text:"Blood bank should be alerted at the same time as clinical staff — not after the patient deteriorates. Your early call allows them to pull blood products, prepare FFP, and have platelets on standby. A 20-minute head start in blood bank can be a life-saving 20 minutes."},
          {role:"labtech", type:"practical", text:"When blood bank receives an urgent PPH crossmatch request, the clock starts. O-negative blood can be issued immediately without crossmatch if life-threatening. Type-specific takes 5–10 minutes. Full crossmatch 20–30 minutes. Communicate clearly which is needed and how urgently."},
        ]
      },
      {
        h:"💉 The Resuscitation Bundle — ABC and Two Large Bore IVs",
        a:`Resuscitating a haemorrhaging patient is like trying to refill a bath with the plug out. Your first job is not to add water — it is to find and close the drain. Resuscitation and haemostasis must happen in parallel, not in sequence. Fluid alone without stopping the bleeding is a losing battle.`,
        c:`THE PPH RESUSCITATION BUNDLE (RCOG/WHO):\n\nA — AIRWAY: Ensure patent. High-flow O2 15L/min via non-rebreather mask. Target SpO2 >95%.\n\nB — BREATHING: Assess RR and SpO2. Pregnant/postnatal women desaturate faster.\n\nC — CIRCULATION:\n→ 2 large-bore IV cannulas (14–16G) — both antecubital fossae\n→ Draw bloods simultaneously: FBC, coagulation, U&E, LFT, fibrinogen, crossmatch 4–6 units\n→ Warm IV fluids: crystalloid (Hartmann's) 1L fast — then reassess\n→ Avoid excessive crystalloid: >3.5L dilutes clotting factors and worsens coagulopathy\n→ Catheterise: target urine output ≥30ml/hour\n\nWARM THE PATIENT: Hypothermia below 35°C impairs platelet function and coagulation enzyme activity. Use warm blankets, warm fluids, warm theatre.\n\nRESUSCITATION TARGETS:\nSystolic BP ≥80mmHg (permissive hypotension until surgical haemostasis achieved)\nHb ≥80g/L\nPlatelets ≥50,000\nFibrinogen ≥2g/L\nINR ≤1.5`,
        kp:[
          "Two large-bore IVs simultaneously — send bloods from the same stab",
          "Limit crystalloid to <3.5L — excess dilutes clotting factors",
          "Warm all fluids and the patient — hypothermia kills coagulation",
          "Permissive hypotension (systolic ≥80) until surgical bleeding controlled",
          "Catheterise early — urine output is your organ perfusion monitor"
        ],
        callouts:[
          {role:"student", type:"exam", text:"Key exam number: do NOT give more than 3.5L crystalloid in PPH. Beyond this, dilutional coagulopathy becomes a greater threat than the volume deficit. The answer to massive PPH is blood products, not litres of saline."},
          {role:"nurse", type:"clinical", text:"Two IVs, both 14G or 16G, one in each arm. A 14G cannula delivers twice the flow rate of a 16G. If the veins are shut down from shock, call for a central line or intraosseous access — do not waste time on multiple failed attempts at peripheral IV."},
          {role:"doctor", type:"clinical", text:"Permissive hypotension (target systolic 80–90mmHg) is evidence-based in haemorrhagic shock awaiting surgical control. Aggressive fluid resuscitation to 'normal' BP before haemostasis is achieved dilutes clotting factors, worsens acidosis, and increases bleeding. Less is more until the bleeder is controlled."},
          {role:"pharmacist", type:"clinical", text:"Tranexamic acid (TXA) 1g IV over 10 minutes should be given within 3 hours of delivery — ideally within 30 minutes of PPH recognition. The WOMAN Trial (Lancet 2017) showed TXA reduced PPH death by 31% when given early. Every minute of delay reduces efficacy. It costs pennies and saves lives."},
          {role:"labtech", type:"practical", text:"Point-of-care testing (ROTEM/TEG) in massive PPH provides clot function results in 10–15 minutes versus 45–60 minutes for standard lab coagulation. Where available, ROTEM guides targeted blood product replacement (fibrinogen, FFP, platelets) far more accurately than empirical ratios."},
        ]
      },
      {
        h:"💊 Uterotonics — The Pharmacological Arsenal",
        a:`The uterus after delivery is like a fist that needs to clench to seal off hundreds of open blood vessels. Uterotonic drugs are the signal that tells the fist to clench. Get the signal wrong — wrong drug, wrong dose, wrong route, wrong timing — and the fist stays open. Every second it stays open, blood continues to pour.`,
        c:`FIRST LINE — OXYTOCIN:\nDose: 10 IU IM (prophylaxis) or 5 IU slow IV (treatment) + 40 IU in 500ml at 125ml/hr\nMechanism: binds uterine oxytocin receptors → myometrial contraction\nCaution: rapid IV bolus causes hypotension and tachycardia — ALWAYS give slowly\nStorage: 2–8°C refrigerated. Degrades rapidly at room temperature in tropical climates.\n\nSECOND LINE — ERGOMETRINE:\nDose: 0.5mg IM or slow IV\nContraindications: hypertension, PE, cardiac disease, Raynaud's\nEffect: sustained uterine contraction (tonic)\n\nCARBOPROST (PGF2α):\nDose: 0.25mg IM every 15 min, max 8 doses\nContraindications: asthma (causes bronchospasm)\nHighly effective in refractory atony\n\nMISOPROSTOL:\nDose: 800–1000mcg sublingual or rectal\nAdvantage: stable at room temperature — ideal for low-resource settings\nSide effects: fever, shivering, diarrhoea\n\nSYNTOMETRINE = Oxytocin 5IU + Ergometrine 0.5mg combined`,
        kp:[
          "Oxytocin is always first-line — give IM for prophylaxis, slow IV for treatment",
          "Rapid IV oxytocin bolus causes dangerous hypotension — never push it fast",
          "Ergometrine contraindicated in hypertension — critically important in PE patients",
          "Carboprost contraindicated in asthma — can cause fatal bronchospasm",
          "Misoprostol is heat-stable — the essential uterotonic for low-resource settings"
        ],
        callouts:[
          {role:"student", type:"exam", text:"Most examined drug interaction in PPH: Ergometrine is CONTRAINDICATED in hypertension (including preeclampsia). Giving ergometrine to a PE patient can cause hypertensive crisis and stroke. This combination has killed patients. It will be on your exam."},
          {role:"pharmacist", type:"clinical", text:"Oxytocin storage is your silent quality problem in Ghana. Oxytocin degrades rapidly above 25°C — a common storage temperature on wards without refrigeration. Potency can fall by 50% or more. Advocate for cold chain storage and regular stock rotation. Ineffective oxytocin is one reason PPH fails to respond to 'treatment'."},
          {role:"nurse", type:"clinical", text:"Give oxytocin IM into the outer thigh — it works within 2–3 minutes IM. If giving IV, dilute and run it in over at least 15–20 minutes. Watching the patient crash from a rapid IV oxytocin bolus while trying to treat her PPH is entirely preventable."},
          {role:"doctor", type:"clinical", text:"Uterotonic failure after two agents = refractory atony. Do not continue escalating through the same class of drugs. Escalate to surgical management: uterine balloon tamponade, compression sutures (B-Lynch), uterine artery ligation, or hysterectomy. Time lost on a sixth dose of misoprostol is time the patient does not have."},
          {role:"labtech", type:"practical", text:"Oxytocin assay is not a routine test but understanding its pharmacology helps: oxytocin receptor downregulation occurs with prolonged oxytocin augmentation of labour. This is why augmented labours have higher PPH rates — the receptors are exhausted by the time of delivery. Context your results accordingly."},
        ]
      },
    ],
    ev:"WOMAN Trial Lancet 2017; RCOG GTG 52 2016; WHO Uterotonics Guidelines 2020; FIGO PPH Guidelines 2022; Cochrane Uterotonics Review 2023"
  },

  {
    id:3, num:"03", icon:"🔬", free:false, dur:"2h 15m", lessons:8, color:"#4A0000",
    title:"Reading the Blood", sub:"Laboratory Science in Obstetric Haemorrhage",
    aud:["labtech","doctor","pharmacist","student"],
    tagline:"The numbers tell you what the eye cannot see. Learn to read them before the patient runs out of time.",
    story:`Emmanuel Asiedu has been a medical laboratory scientist for eleven years. He has worked the night shift at Korle-Bu more times than he can count.\n\nAt 3:20 AM his analyser beeps. A PPH sample, marked URGENT. He processes it fast.\n\nFibrinogen: 0.9 g/L\nPlatelets: 44,000\nPT: 28 seconds\nAPTT: 67 seconds\n\nHe has never met Mrs. Adwoa Mensah. He does not know that she delivered two hours ago, that she has already received 2 litres of crystalloid, that her uterus is still soft, that the registrar is debating whether to go to theatre.\n\nBut Emmanuel knows exactly what these numbers mean. He picks up the phone before the results are even fully printed.\n\n"This patient has DIC. She needs fibrinogen concentrate and FFP now. Who is her doctor?"\n\nThat phone call changes everything.\n\nThis module is the science behind that call.`,
    sections:[
      {
        h:"🩸 The Coagulation Cascade — Why PPH Destroys Clotting",
        a:`Think of coagulation like a carefully balanced relay race. Twenty-something proteins must pass the baton in precise order to form a clot. PPH sabotages this race from three directions simultaneously: it consumes the runners (clotting factors), dilutes the track (haemodilution from fluids), and freezes the athletes (hypothermia stops enzyme activity). The result is a race that cannot be finished — DIC.`,
        c:`HOW PPH CAUSES COAGULOPATHY:\n\n1. CONSUMPTION: Massive bleeding activates coagulation continuously → clotting factors and platelets consumed faster than they can be replaced → consumptive coagulopathy.\n\n2. DILUTION: Crystalloid and colloid resuscitation dilutes remaining clotting factors. After 2L crystalloid, factor levels drop to 70% of normal. After 4L, to 40%.\n\n3. HYPOTHERMIA: Coagulation enzymes are temperature-sensitive. At 35°C, efficiency drops 40%. At 33°C, coagulation is effectively non-functional.\n\n4. ACIDOSIS: pH <7.1 inhibits thrombin generation by 90%. The acidosis of haemorrhagic shock directly impairs clot formation.\n\nTHE LETHAL TRIAD:\nHypothermia + Acidosis + Coagulopathy = death spiral. Each worsens the others. Breaking any one improves all three.`,
        kp:[
          "The Lethal Triad: Hypothermia + Acidosis + Coagulopathy — each worsens the others",
          "Fibrinogen is the first clotting factor to fall critically in PPH",
          "Every litre of crystalloid dilutes clotting factors — limit to <3.5L total",
          "pH <7.1 reduces thrombin generation by 90% — treat acidosis aggressively",
          "Temperature <35°C halves coagulation enzyme efficiency — warm the patient"
        ],
        callouts:[
          {role:"student", type:"exam", text:"The Lethal Triad is a core exam concept across surgery, emergency medicine and obstetrics. Learn it: Hypothermia + Acidosis + Coagulopathy. Each element feeds the others. Breaking the cycle requires treating all three simultaneously."},
          {role:"labtech", type:"practical", text:"Sample quality is critical in PPH. Haemolysed samples give falsely elevated potassium and falsely low haemoglobin. Cold samples impair platelet function testing. Citrated tubes for coagulation must be exactly 90% full — underfilling gives falsely prolonged PT/APTT. Reject substandard samples and recollect — wrong results in PPH cause wrong treatment."},
          {role:"doctor", type:"clinical", text:"In massive PPH, empirical 1:1:1 transfusion ratio (packed red cells : FFP : platelets) is standard before lab results return. Once ROTEM/fibrinogen results are available, transition to targeted replacement. Waiting for full lab results before starting blood products in massive haemorrhage is a fatal delay."},
          {role:"pharmacist", type:"clinical", text:"Fibrinogen concentrate (Haemocomplettan/RiaSTAP) is now preferred over cryoprecipitate in many centres for speed and standardised dosing. Target fibrinogen ≥2g/L. Dose: 3–4g IV. Cryoprecipitate contains ~0.3g fibrinogen per unit — you need 10–12 units to match one dose of concentrate. Know what your unit stocks."},
          {role:"nurse", type:"clinical", text:"You may not interpret coagulation results but you must recognise the signs of DIC at the bedside: oozing from IV sites, petechiae, blood that does not clot in the tubes, generalised oozing from surgical wounds. Report these signs immediately — they tell you the coagulation cascade has failed before the lab results arrive."},
        ]
      },
      {
        h:"📊 The Critical Numbers — Your PPH Lab Panel Interpreted",
        a:`Numbers without context are just data. Numbers in context are intelligence. In PPH, four results are your most critical intelligence assets. Think of them as four sentinels, each guarding a different part of the coagulation fortress. When any sentinel falls, the fortress is breached.`,
        c:`THE FOUR CRITICAL PPH RESULTS:\n\n1. FIBRINOGEN (Normal: 2–4g/L in pregnancy)\n<2g/L = treat immediately with fibrinogen concentrate/cryoprecipitate\n<1g/L = critical — massive transfusion protocol, theatre team alert\nPREGNANCY NOTE: Normal non-pregnant fibrinogen is 1.5–3g/L. Pregnancy raises it to 3.5–5g/L. A 'normal' non-pregnant result of 2g/L is dangerously LOW in a pregnant/postnatal woman.\n\n2. PLATELETS (Normal: 150–400 × 10⁹/L)\n<100,000 = significant thrombocytopaenia\n<50,000 = transfuse platelets (threshold for surgery)\n<20,000 = spontaneous bleeding risk — emergency transfusion\n\n3. PT/INR (Normal: 11–13 sec / INR 1.0)\nPT >1.5× normal (>18 sec) = significant coagulopathy\nINR >1.5 = FFP indicated\n\n4. APTT (Normal: 26–38 sec)\n>1.5× normal (>57 sec) = factor deficiency or heparin effect\n\nFIBRINOGEN IS KING: Falls first, falls fastest, predicts DIC before other markers change.`,
        kp:[
          "Fibrinogen is the first and most sensitive marker of PPH coagulopathy",
          "Pregnancy raises fibrinogen to 3.5–5g/L — 'normal' 2g/L is dangerously low postnatally",
          "Platelets <50,000 = transfuse before any surgical intervention",
          "PT >1.5× normal = give FFP — do not wait for clinical bleeding to worsen",
          "Phone critical results immediately — do not rely on electronic reporting alone"
        ],
        callouts:[
          {role:"labtech", type:"practical", text:"The most important action you can take in PPH is a direct phone call with critical results. Fibrinogen <1.5g/L in a postnatal woman is a critical value — call the clinician immediately, state the result, state the clinical implication, confirm they have received it. Document the call with time and name. This is not optional."},
          {role:"student", type:"exam", text:"Pregnancy-specific reference ranges are commonly examined. Fibrinogen is HIGHER in pregnancy (3.5–5g/L) than normal (2–4g/L). A fibrinogen of 2.2g/L sounds 'normal' but in a postnatal woman it represents a significant drop and impending DIC. Know this context."},
          {role:"doctor", type:"clinical", text:"FIBTEM A5 on ROTEM (fibrin clot amplitude at 5 minutes) <7mm = fibrinogen critically low. This result is available within 10 minutes of sample arrival. If ROTEM is available, use it — it guides targeted therapy faster and more accurately than standard coagulation testing."},
          {role:"pharmacist", type:"clinical", text:"Transfusion triggers guide your product preparation. Fibrinogen <2g/L → fibrinogen concentrate. Platelets <50,000 → platelet pool. PT/INR >1.5 → FFP 15ml/kg. These three products should be prepared simultaneously in massive PPH, not sequentially. Know your blood bank's preparation times for each."},
          {role:"nurse", type:"clinical", text:"When blood products arrive from blood bank, check: patient ID against unit label, blood group compatibility, expiry date, and inspect for any discolouration or clumping. These checks take 60 seconds and prevent transfusion reactions that could kill an already critically unwell patient."},
        ]
      },
    ],
    ev:"RCOG GTG 52 2016; WOMAN Trial Lancet 2017; Collins et al FibPPH Trial Lancet 2022; ROTEM Obstetric Guidance 2021; Cochrane Transfusion PPH 2023"
  },

  {
    id:4, num:"04", icon:"🏥", free:false, dur:"2h 30m", lessons:9, color:"#2D0000",
    title:"Beyond Drugs", sub:"Surgical & Interventional Management",
    aud:["doctor","nurse","student"],
    tagline:"When the drugs have failed, the surgeon's hands become the last line between life and death.",
    story:`It is 4:45 AM. Mrs. Mensah has received three uterotonics, 2 units of blood, and FFP. The uterus softens again the moment bimanual compression is released.\n\nThe consultant obstetrician, Professor Ama Owusu, has been called in from home. She examines the patient. She looks at the anaesthetist. She looks at the blood bank results on the screen.\n\nFibrinogen: 1.1 g/L. Platelets: 61,000.\n\n"Theatre. Now."\n\nIn the next forty minutes, Professor Owusu will perform a B-Lynch suture, insert a uterine balloon, and — when neither works — make the hardest decision in obstetrics.\n\nThis module is what happens in that theatre. And why each step matters.`,
    sections:[
      {
        h:"🎈 Uterine Balloon Tamponade — The Inflatable Lifesaver",
        a:`Imagine trying to stop a flood by pressing your hand against a dam wall. Balloon tamponade is the engineering solution — it fills the entire space behind the dam with equal counter-pressure, stopping the flood from every direction simultaneously. It is elegant, fast, and requires no surgical skill to insert.`,
        c:`PRINCIPLE: Inflating a balloon inside the uterine cavity applies intrauterine pressure exceeding the arterial inflow pressure → stops bleeding from the placental bed.\n\nDEVICES:\n→ Bakri balloon (purpose-made): fill with 300–500ml saline\n→ Condom catheter (low-resource): condom tied to Foley, fill with 250–500ml saline — equally effective in RCTs\n→ Sengstaken-Blakemore tube (improvised)\n\nINSERTION: Under aseptic conditions, transcervically under ultrasound guidance if available. Fill until bleeding slows or stops. Leave for 24 hours then deflate slowly.\n\nSUCCESS RATE: 70–85% in uterine atony.\n\nTHE TAMPONADE TEST: If balloon controls bleeding → likely avoids surgery. If balloon fails → proceed immediately to theatre. Do not wait.\n\nPACKING WITH BALLOON: If laparotomy already open, pack uterus and vagina simultaneously for maximum tamponade effect.`,
        kp:[
          "Balloon tamponade works by exceeding arterial inflow pressure — fills the entire cavity",
          "Condom catheter is as effective as Bakri balloon in resource-limited settings",
          "70–85% success rate in atony — high enough to attempt before hysterectomy",
          "The tamponade test: bleeding controlled = avoid surgery; fails = go to theatre immediately",
          "Leave balloon inflated 24 hours — deflate slowly with senior clinician present"
        ],
        callouts:[
          {role:"student", type:"exam", text:"The condom catheter tamponade is an OSCE favourite for low-resource settings. Know how to construct it: size 16F Foley, condom tied over the tip with a silk suture, inflated with 250–500ml saline via a bladder syringe. It costs under GH₵5 and has saved thousands of lives."},
          {role:"nurse", type:"clinical", text:"Once the balloon is inserted, your monitoring protocol: vital signs every 15 minutes for the first 2 hours. Observe per vaginum drainage around the balloon — this estimates ongoing blood loss. If drainage exceeds 500ml/hour despite the balloon, escalate immediately — it is failing."},
          {role:"doctor", type:"clinical", text:"Do not delay the tamponade test. If you are going to theatre anyway for laparotomy, insert the balloon transcervically before opening. If it works during the procedure, you may avoid more complex surgery. If it doesn't, you're already in theatre. Insert early, assess early, decide."},
          {role:"pharmacist", type:"clinical", text:"Continue uterotonics while the balloon is in situ — oxytocin infusion 40IU over 4 hours maintains uterine tone against the balloon. Stopping uterotonics once the balloon is inserted is a common error — the uterus will relax around the balloon and the tamponade effect is lost."},
          {role:"labtech", type:"practical", text:"During balloon tamponade, haematological monitoring continues: FBC and coagulation every 4 hours while balloon is in situ. Fibrinogen must be maintained ≥2g/L throughout — ongoing low-grade bleeding around the balloon continues to consume clotting factors. Alert the team to any further fall."},
        ]
      },
      {
        h:"✂️ Surgical Haemostasis — From Sutures to Hysterectomy",
        a:`A surgeon facing refractory PPH moves through a hierarchy of interventions — like a general deploying escalating forces. The goal is always to use the minimum force necessary to achieve haemostasis. But hesitation in escalating when a step has failed is just as dangerous as escalating too early. Knowing when to move to the next level is the art.`,
        c:`THE SURGICAL HIERARCHY:\n\n1. COMPRESSION SUTURES:\nB-Lynch: longitudinal brace suture compressing the uterine body. Effective in atony.\nHayman: simpler, faster B-Lynch variant for lower segment bleeding.\nSuccess rate: 60–75%.\n\n2. UTERINE ARTERY LIGATION:\nO'Leary suture: bilateral ligation of uterine arteries at the level of the lower uterine segment.\nReduces uterine blood flow by 90%.\nPreserves fertility.\n\n3. INTERNAL ILIAC (HYPOGASTRIC) ARTERY LIGATION:\nReserved for catastrophic haemorrhage.\nTechnically demanding — risk of injury to ureter and iliac vein.\nSuccess rate 40–60%.\n\n4. INTERVENTIONAL RADIOLOGY:\nUterine artery embolisation (UAE): threading a catheter to uterine arteries and blocking with gel foam.\nRequires IR suite and availability — not universally available.\nPreserves fertility.\n\n5. PERIPARTUM HYSTERECTOMY:\nDefinitive. Life-saving. Fertility-ending.\nDo not delay when other measures have failed — delay kills.\nSubtotal faster than total in emergency.\nIncidence: 1–4 per 1000 deliveries.`,
        kp:[
          "B-Lynch suture: first surgical option for atony — 60–75% success",
          "Uterine artery ligation reduces blood flow by 90% and preserves fertility",
          "Peripartum hysterectomy is the definitive life-saving procedure — do not delay",
          "Subtotal hysterectomy is faster than total in emergency haemorrhage",
          "Delayed decision for hysterectomy kills — the uterus can be replaced by surrogacy; the patient cannot be replaced"
        ],
        callouts:[
          {role:"student", type:"exam", text:"B-Lynch suture mechanism: the suture applies vertical compression across the uterine body, mechanically apposing the anterior and posterior walls, compressing the placental bed. Draw it and understand it — it appears in surgical anatomy OSCEs and written papers."},
          {role:"nurse", type:"clinical", text:"As the scrub nurse in a PPH laparotomy, anticipate escalation. Have the B-Lynch suture material ready (1-0 or 2-0 vicryl on a large needle). Know where the balloon is. Know the hysterectomy tray location. The surgical team should not have to ask for anything twice."},
          {role:"doctor", type:"clinical", text:"The most common cause of preventable death in surgical PPH is delayed decision for hysterectomy. The internal dialogue 'one more step before I take the uterus' has cost lives. If three surgical steps have failed and the patient is deteriorating — take the uterus. She can survive without it. She cannot survive another hour of haemorrhage."},
          {role:"pharmacist", type:"clinical", text:"During and after surgical haemorrhage: maintain TXA cover (second dose 1g IV if still bleeding at 30 minutes), continue fibrinogen replacement targeting ≥2g/L, and ensure vasopressors are drawn up if haemodynamic support is needed post-haemostasis. Prepare for ICU transfer and ongoing pharmacological support."},
          {role:"labtech", type:"practical", text:"Intraoperative haemorrhage demands near-continuous lab support. In major centres, point-of-care ROTEM in theatre gives real-time coagulation guidance. Where unavailable: FBC and fibrinogen every 30–60 minutes during active haemorrhage. Ensure a direct phone line to the theatre team — never rely on electronic reporting alone during active surgery."},
        ]
      },
    ],
    ev:"RCOG GTG 52 2016; Bakri Balloon RCT 2021; B-Lynch et al original description; WHO Surgical Care at the District Hospital; FIGO PPH Surgical Guidelines 2022"
  },

  {
    id:5, num:"05", icon:"🌅", free:false, dur:"2h 00m", lessons:7, color:"#1A0000",
    title:"After the Storm", sub:"Recovery, Complications, Prevention & Future",
    aud:["doctor","nurse","pharmacist","labtech","student"],
    tagline:"Surviving the haemorrhage is the beginning. Recovering from it — and preventing the next one — is the mission.",
    story:`Mrs. Adwoa Mensah is in the high dependency unit. The bleeding stopped four hours ago. The balloon was removed this morning. She received 6 units of blood, 4 units of FFP, and fibrinogen concentrate.\n\nShe is alive.\n\nHer husband, Emmanuel, sits beside her holding her hand. Their baby boy is with the neonatal nurses.\n\nDr. Frimpong comes for the morning review. Adwoa looks at her and asks, quietly: "Doctor, will I be able to have another baby?"\n\nDr. Frimpong pauses. This question requires knowledge. Not just of the surgical procedure performed last night — but of Sheehan's syndrome, of pituitary function, of iron deficiency recovery, of the psychological trauma of near-death, and of the risk in a future pregnancy.\n\nThis final module gives you the answers.`,
    sections:[
      {
        h:"🌡️ Post-PPH Complications — What Follows the Bleeding",
        a:`Surviving a major haemorrhage does not mean returning to baseline. The body bears scars — some visible, some hidden deep in endocrine glands and bone marrow. The postnatal ward is not the end of the PPH story. It is the next chapter.`,
        c:`KEY POST-PPH COMPLICATIONS:\n\n1. SHEEHAN'S SYNDROME\nPituitary ischaemia from hypotension during haemorrhage.\nPresentation: failure to lactate (first sign), amenorrhoea, fatigue, hypothyroidism, adrenal insufficiency.\nInvestigations: pituitary hormone panel (TSH, T4, cortisol, FSH/LH, prolactin).\nTreatment: hormone replacement — may be lifelong.\n\n2. IRON DEFICIENCY ANAEMIA\nExpected after significant blood loss.\nTarget Hb recovery: ≥100g/L at 6 weeks.\nOral iron: ferrous sulfate 200mg TDS for 3 months.\nIV iron (Ferinject): faster recovery, preferred if Hb <80g/L or intolerance.\n\n3. ACUTE KIDNEY INJURY (AKI)\nRenal ischaemia from prolonged hypoperfusion.\nMonitor: urine output, creatinine, electrolytes daily.\nLong-term: increased risk of chronic kidney disease.\n\n4. PSYCHOLOGICAL TRAUMA\nPTSD occurs in up to 30% of women after near-miss obstetric events.\nScreen at 6-week check. Refer early.\n\n5. VIRCHOW'S TRIAD — DVT RISK\nBed rest + coagulation activation + blood loss → increased thrombotic risk post-haemorrhage.\nLMWH when Hb stable and bleeding controlled — typically 24–48 hours post-haemorrhage.`,
        kp:[
          "Sheehan's syndrome: failure to lactate postnatally = pituitary ischaemia until proven otherwise",
          "Start thromboprophylaxis 24–48 hours after haemorrhage is controlled",
          "Screen for PTSD at 6-week check — 30% of PPH survivors develop it",
          "Target Hb ≥100g/L at 6 weeks — prescribe adequate iron replacement",
          "AKI post-PPH increases lifetime CKD risk — follow up renal function at 6 weeks"
        ],
        callouts:[
          {role:"student", type:"exam", text:"Sheehan's syndrome is a favourite long-case and OSCE scenario. A woman who cannot breastfeed after PPH = pituitary infarction from ischaemia during shock. Test pituitary hormones. The diagnosis is often delayed by years because it is not considered. Know this."},
          {role:"nurse", type:"clinical", text:"At the 6-week postnatal check, ask three specific questions of every PPH survivor: Are you able to breastfeed? Are your periods returning? Are you experiencing flashbacks or nightmares about the birth? Three questions that screen for Sheehan's, hypothalamic dysfunction, and PTSD respectively."},
          {role:"pharmacist", type:"clinical", text:"IV iron dosing post-PPH: Ferric carboxymaltose (Ferinject) 1000mg single infusion or 500mg if Hb >80g/L. Faster, better-tolerated and more complete repletion than oral iron. Check local formulary — availability varies. If oral iron prescribed: counsel on constipation, dark stools, and importance of completing the full course."},
          {role:"doctor", type:"clinical", text:"Document every PPH in a structured incident report — not for blame, but for learning. Was active management of third stage given? Was oxytocin stored correctly? Was balloon available? Was blood bank alerted in time? Systems analysis of each case prevents the next. A PPH without a debrief is a missed opportunity."},
          {role:"labtech", type:"practical", text:"Six-week post-PPH follow-up bloods: FBC (Hb recovery), iron studies (ferritin, TSAT), renal function (creatinine), and TFTs if Sheehan's suspected. Flag any Hb <100g/L as subtherapeutic and communicate to the clinical team — iron replacement may need to be intensified or switched to IV."},
        ]
      },
      {
        h:"🛡️ Prevention — Stopping the Storm Before It Starts",
        a:`The best obstetric haemorrhage management happens before the first drop of blood is shed. Active management of the third stage of labour is the single most evidence-based, cheapest, most impactful intervention in all of obstetrics. It is not complicated. It is not expensive. And yet its inconsistent application still costs lives every day across Africa and the world.`,
        c:`ACTIVE MANAGEMENT OF THIRD STAGE (AMTSL):\nThree components (WHO 2012):\n1. Uterotonic at delivery of anterior shoulder: Oxytocin 10 IU IM\n2. Controlled cord traction (CCT): gentle traction with uterine counter-pressure\n3. Uterine massage: ONLY if atony develops — no longer recommended routinely\n\nOxytocin 10 IU IM at shoulder delivery reduces PPH risk by 60% (Cochrane 2023).\n\nINTRAPARTUM RISK FACTORS TO ANTICIPATE:\n→ Prolonged labour (>12h active phase)\n→ Grand multiparity (≥4 previous deliveries)\n→ Previous PPH (10× increased risk)\n→ Multiple pregnancy or macrosomia\n→ Placenta praevia or PAS on antenatal scan\n→ Bleeding disorder\n→ Low-lying placenta on third trimester scan\n\nPLACENTA ACCRETA SPECTRUM (PAS) PREPARATION:\nDiagnose antenatally on USS/MRI.\nDeliver in specialist centre with IR, blood bank, and surgical expertise.\nConsent for possible hysterectomy before theatre.\nPrepare 10 units packed cells, FFP, platelets and fibrinogen pre-operatively.`,
        kp:[
          "Oxytocin 10 IU IM at delivery of anterior shoulder reduces PPH by 60%",
          "Active management of third stage is the single most impactful PPH prevention",
          "Previous PPH increases risk 10-fold — plan every such delivery in advance",
          "PAS must be diagnosed antenatally and delivered in a specialist centre",
          "Grand multiparity, prolonged labour, macrosomia = anticipate and prepare, not react"
        ],
        callouts:[
          {role:"student", type:"exam", text:"Active management of third stage: the three components are oxytocin IM, controlled cord traction, and uterine massage ONLY if atony develops (not routine). WHO 2012 removed routine uterine massage from AMTSL. Know this update — examinations are now testing it."},
          {role:"nurse", type:"clinical", text:"You will administer more oxytocin at delivery than any other healthcare professional. Check three things every time: Is it cold-stored and in date? Is the correct dose drawn (10 IU)? Is it given IM at the right time (anterior shoulder delivery, not after placenta)? These three checks are your PPH prevention protocol."},
          {role:"pharmacist", type:"clinical", text:"Oxytocin cold chain advocacy is one of the highest-impact pharmacist interventions in maternal health. Work with your unit to audit storage temperatures, fridge maintenance, and stock rotation. Document findings. Present them. Sub-potent oxytocin from poor storage is an invisible cause of PPH that formal cold chain management can eliminate."},
          {role:"doctor", type:"clinical", text:"PAS is your highest-risk scenario. If the antenatal scan shows placenta praevia with previous caesarean scar, assume accreta until proven otherwise. Book a multidisciplinary planning meeting: radiologist, blood bank, IR team, anaesthetist, senior obstetrician. Do not walk into that theatre without a plan — and a backup plan."},
          {role:"labtech", type:"practical", text:"For planned high-risk deliveries (PAS, previous PPH, grand multipara): blood bank should be proactively alerted 24–48 hours in advance. Pre-position 6–10 units of crossmatched blood, FFP, and platelets. Proactive preparation reduces critical product turnaround time from 30 minutes to under 5 minutes when the emergency actually occurs."},
        ]
      },
    ],
    ev:"WHO AMTSL Guidelines 2012; Cochrane AMTSL Review 2023; RCOG PAS Guidelines 2018; FIGO PPH Prevention 2022; Lancet PPH Series 2022"
  },
];

// OH PRE-QUIZ
const OH_PRE_Q = [
  {q:"What is the definition of primary PPH after vaginal delivery?",
   opts:["Blood loss ≥250ml within 1 hour","Blood loss ≥500ml within 24 hours","Blood loss ≥1000ml at any time","Blood loss causing any drop in Hb"],ans:1},
  {q:"Which cause accounts for 70% of all PPH cases?",
   opts:["Trauma","Retained placenta","Uterine atony","Coagulopathy"],ans:2},
  {q:"The shock index is calculated as:",
   opts:["Systolic BP ÷ Heart Rate","Heart Rate ÷ Systolic BP","Diastolic BP ÷ Heart Rate","Heart Rate × Respiratory Rate"],ans:1},
  {q:"Which uterotonic is CONTRAINDICATED in a patient with preeclampsia?",
   opts:["Oxytocin","Misoprostol","Ergometrine","Carboprost"],ans:2},
  {q:"The single most effective prevention of PPH is:",
   opts:["Routine uterine massage","Active management of third stage with oxytocin 10 IU IM","IV oxytocin infusion throughout labour","Routine episiotomy"],ans:1},
];

// OH POST-QUIZ
const OH_POST_Q = [
  {q:"A woman delivers vaginally and loses 800ml of blood. HR 112, BP 96/70. Her uterus is FIRM. What is the most likely cause of her PPH?",
   opts:["Uterine atony (Tone)","Genital tract trauma (Trauma)","Retained placenta (Tissue)","Coagulopathy (Thrombin)"],ans:1},
  {q:"Fibrinogen result returns at 0.9g/L in a postnatal woman with ongoing PPH. What is your immediate action?",
   opts:["Repeat the test — likely a lab error","Give fibrinogen concentrate/cryoprecipitate immediately and alert the surgical team","Start heparin to prevent DIC","Give 2L crystalloid bolus"],ans:1},
  {q:"A B-Lynch suture has been placed but bleeding continues. The next step in the surgical hierarchy is:",
   opts:["A second B-Lynch suture","Uterine artery ligation","Peripartum hysterectomy","Uterine balloon tamponade"],ans:1},
  {q:"A woman who had a massive PPH 6 weeks ago presents unable to breastfeed with amenorrhoea and fatigue. The most likely diagnosis is:",
   opts:["Postnatal depression","Iron deficiency anaemia","Sheehan's syndrome","Normal postnatal hormonal changes"],ans:2},
  {q:"The WOMAN Trial (Lancet 2017) demonstrated that tranexamic acid in PPH:",
   opts:["Increased maternal mortality","Reduced death from bleeding by 31% when given within 3 hours","Had no effect on outcome","Should only be given after 2 units of blood transfusion"],ans:1},
];
