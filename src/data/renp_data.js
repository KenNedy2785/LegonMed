// ============================================================
// renp_data.js — Renal Pharmacology: Drugs & the Kidney
// LegonMed Platform · Course ID: renp
// Modules 1–3 of 16
// ============================================================

export const RENP_MODS = [

  // ────────────────────────────────────────────────────────
  // MODULE 1 — Renal Anatomy & Physiology for Pharmacologists
  // ────────────────────────────────────────────────────────
  {
    id: 1, num: "01", icon: "🫘", free: true, dur: "2h", lessons: 6, color: "#0369a1",
    title: "Renal Anatomy & Physiology for Pharmacologists",
    sub: "The Architecture That Controls Every Drug the Kidney Handles",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "You cannot understand why drugs accumulate, fail to work, or become toxic in renal disease without first understanding the extraordinary machinery of the nephron — every transporter, every segment, every haemodynamic signal.",
    story: `Nephrology Ward, Korle Bu Teaching Hospital, Accra.

Dr. Abena Asante, a first-year pharmacology resident, is reviewing Mr. Kwabena Darko — 58 years old, hypertension, type 2 diabetes — who has developed toxicity on two different drugs in the same week. His gentamicin levels are through the roof. His metformin is causing lactic acidosis. And his furosemide isn't working.

"How can the same organ cause three completely different drug failures at the same time?" she asks her consultant, Professor Quartey.

The professor pulls up a diagram of a nephron. "Every one of those failures has a different address," he says. "Gentamicin accumulates in the proximal tubule — here. Metformin is cleared by OCT transporters — here. Furosemide needs to reach the thick ascending limb — here. If you don't know the anatomy, you cannot understand the pharmacology. So before we touch another drug on this ward, we learn the nephron."`,
    sections: [
      {
        h: "🫘 Nephron Architecture & Glomerular Filtration",
        a: `The nephron is the functional unit of the kidney — and for pharmacologists, it is a map of drug handling. Each segment has a distinct transport system, a distinct vulnerability, and a distinct set of drugs that act on or are processed by it. Understanding where a drug goes in the nephron determines everything: its efficacy, its toxicity, and how to adjust it when the kidney fails.`,
        c: `THE NEPHRON — SEGMENTS OF PHARMACOLOGICAL RELEVANCE:

→ GLOMERULUS: The filtration barrier. A 3-layer structure (fenestrated endothelium, glomerular basement membrane, podocyte foot processes with filtration slits). Only UNBOUND, SMALL MOLECULES cross freely. Molecular weight threshold ~50,000 Da; albumin (66,000 Da) is largely excluded. Drug filtration = GFR × free drug concentration. Protein-bound drugs (warfarin 99%, phenytoin 90%) have minimal filtration — their elimination depends on hepatic metabolism.

→ PROXIMAL CONVOLUTED TUBULE (PCT): Bulk reabsorption — 60-70% of filtered Na+, water, glucose, amino acids. Also the SECRETION SITE for most drugs via:
  - OAT1/3 (Organic Anion Transporters): furosemide, penicillins, methotrexate, NSAIDs, acyclovir
  - OCT2 (Organic Cation Transporter): metformin, creatinine, trimethoprim
  - MATE1/2 (apical efflux): metformin, creatinine
  - P-glycoprotein: digoxin, cyclosporine, dabigatran
  Clinical implication: Drugs competing for OAT/OCT transporters interact at this level. Probenecid blocks OAT → prolongs penicillin half-life (historically exploited). Trimethoprim blocks OCT2 → raises creatinine WITHOUT reducing GFR (factitious rise).

→ LOOP OF HENLE (Thick Ascending Limb — TAL): Reabsorbs 25% of filtered NaCl via NKCC2 (Na+/K+/2Cl− cotransporter). Impermeable to water → creates hyperosmotic medullary gradient enabling urine concentration. LOOP DIURETICS act exclusively here.

→ DISTAL CONVOLUTED TUBULE (DCT): Reabsorbs 5-8% of filtered NaCl via NCC (Na+/Cl− cotransporter). Site of THIAZIDE action. Also site of regulated Ca2+ reabsorption (NCX, TRPV5) — explains hypercalcaemia with thiazides.

→ COLLECTING DUCT (CD): Final fine-tuning. Principal cells reabsorb Na+ (ENaC) and secrete K+ (ROMK). Regulated by ALDOSTERONE. Intercalated cells regulate acid-base via H+-ATPase and HCO3−/Cl− exchangers. ADH (vasopressin) inserts AQP2 aquaporin channels here → water reabsorption. Drugs acting here: amiloride (ENaC block), spironolactone (aldosterone antagonist), tolvaptan (V2 antagonist).

GLOMERULAR FILTRATION RATE (GFR):
→ Normal: 90–120 mL/min/1.73m²
→ Determinants (Starling equation): GFR = Kf[(Pgc − PB) − (πgc − πB)]
→ Autoregulation maintains GFR between MAP 80–180 mmHg via myogenic reflex and tubuloglomerular feedback (TGF)
→ RAAS: Low renal perfusion → renin → Ang I → Ang II (via ACE) → efferent constriction → maintains GFR; also → aldosterone → Na+/water retention

DRUG CLEARANCE PRINCIPLES:
→ Renal clearance (CLr) = (U × V̇) / P
→ CLr = GFR: filtration only (inulin — gold standard)
→ CLr > GFR: net tubular SECRETION (PAH ~650 mL/min)
→ CLr < GFR: net tubular REABSORPTION (weak lipophilic drugs)
→ Passive reabsorption: exploited clinically — urinary alkalinisation (NaHCO3) ionises weak acids (aspirin, methotrexate) → traps them in tubule → ↑ excretion`,
        kp: [
          "Drug filtration = GFR × free drug fraction — highly protein-bound drugs (warfarin, phenytoin) have minimal renal filtration; hepatic routes dominate",
          "PCT OAT/OCT transporters are the site of most drug-drug interactions in the kidney — probenecid blocks OAT (prolongs penicillin); trimethoprim blocks OCT2 (raises creatinine without true GFR fall)",
          "CLr > GFR = net tubular secretion; CLr < GFR = net reabsorption; CLr = GFR = filtration only — this single rule unlocks most renal pharmacokinetics questions",
          "Alkalinise urine (NaHCO3) to trap weak acids (aspirin, methotrexate) in tubular lumen and enhance excretion — standard management of aspirin overdose",
          "In Ghana, CKD is under-diagnosed — always check eGFR before prescribing aminoglycosides, digoxin, metformin, or vancomycin; creatinine alone underestimates severity in elderly and malnourished patients"
        ],
        callouts: [
          {
            role: "student", type: "exam", text: "Creatinine is filtered AND secreted by OCT2 in the PCT. As CKD worsens, more creatinine is secreted relative to filtered — this means serum creatinine UNDERESTIMATES the severity of GFR loss in advanced CKD. Cystatin C (filtered, completely reabsorbed/catabolised, NOT secreted) is more accurate in advanced CKD, elderly, and malnourished patients. For drug dosing, use Cockcroft-Gault CrCl = [(140 − age) × weight] / (72 × SCr in mg/dL) × 0.85 for females."
          },
          {
            role: "doctor", type: "clinical", text: "The 'Triple Whammy' — NSAIDs + ACE inhibitor + diuretic — is the most common preventable cause of AKI in outpatients. NSAIDs block prostaglandin-mediated afferent dilation; ACEi/ARBs block Ang II-mediated efferent constriction; diuretics reduce circulating volume. Remove all three haemodynamic compensatory mechanisms simultaneously and GFR collapses. This combination must be actively avoided in any patient with CKD, heart failure, or cirrhosis — document it as a contraindicated combination in the patient's record."
          },
          {
            role: "pharmacist", type: "clinical", text: "When trimethoprim is added to a patient's regimen and creatinine rises by 15–30 μmol/L within 24–48h, this is almost always FACTITIOUS — trimethoprim blocks OCT2-mediated tubular creatinine secretion, raising serum creatinine without any true change in GFR. Do not reduce doses of renally cleared drugs based on this artefact. Request cystatin C if true GFR needs confirmation. This distinction prevents dangerous under-dosing of essential medications."
          },
          {
            role: "nurse", type: "clinical", text: "Urine output is your bedside GFR monitor. Oliguria (<0.5 mL/kg/hr for 2+ consecutive hours) is an early AKI signal — report it before waiting for lab results. In patients receiving aminoglycosides, contrast, or high-dose NSAIDs, hourly urine output records can detect nephrotoxicity 24–48h before creatinine rises, because creatinine only rises after significant nephron loss has occurred."
          },
          {
            role: "labtech", type: "practical", text: "eGFR equations matter for clinical decisions: CKD-EPI (2021, race-free) for CKD STAGING — this is what appears on lab reports. Cockcroft-Gault CrCl for DRUG DOSING — validated in clinical trials used to set dose-adjustment thresholds. These two equations give different numbers for the same patient. When a prescriber asks 'what is the GFR for dosing?', report both values and specify which is for staging (CKD-EPI) and which is for drug dosing (Cockcroft-Gault)."
          }
        ]
      },
      {
        h: "⚗️ Tubular Transport, Drug-pH Interactions & RAAS Pharmacology",
        a: `Beyond filtration, the kidney's transport proteins and pH-regulation systems are exploited deliberately in therapeutics and are the source of the most clinically significant drug-drug and drug-disease interactions in nephrology. Understanding the RAAS — and how drugs at every step alter renal haemodynamics — is essential for safe prescribing across specialties.`,
        c: `URINARY pH MANIPULATION IN CLINICAL PRACTICE:

pH determines ionisation state of weak acids and bases in tubular fluid:
→ Henderson-Hasselbalch: pH = pKa + log([A−]/[HA])
→ Ionised drugs CANNOT diffuse back across tubular epithelium → trapped → excreted

ALKALINISATION (target urine pH 7.5–8.0 with IV NaHCO3):
→ Aspirin overdose (pKa 3.5): ionises salicylate → ↑ renal excretion; reduces brain entry
→ Methotrexate overdose/high-dose chemotherapy: prevents tubular precipitation
→ Uric acid nephrolithiasis: alkaline urine keeps uric acid (pKa 5.4) ionised → soluble → prevents stones

ACIDIFICATION (ammonium chloride — rarely used):
→ Amphetamine/phencyclidine overdose: ionises weak bases → ↑ excretion; rarely used due to risk

RAAS — PHARMACOLOGICAL TARGETS AT EVERY STEP:
→ Renin (JG cells): blocked by ALISKIREN (direct renin inhibitor) — not widely used in Ghana
→ ACE (lung, vascular endothelium): blocked by ACE INHIBITORS — lisinopril, enalapril, ramipril, captopril, perindopril
  - Effect: ↓ Ang II → ↓ efferent constriction → ↓ intraglomerular pressure (RENOPROTECTIVE)
  - ↓ Bradykinin degradation → bradykinin accumulates → COUGH (10–20%, higher in West Africans) + angioedema (rare, life-threatening)
→ AT1 receptor: blocked by ARBs — losartan, valsartan, irbesartan, candesartan, telmisartan
  - Same renoprotective effect as ACEi; NO bradykinin effect → no cough
  - Losartan UNIQUE: also uricosuric (blocks URAT1) → lowers uric acid — benefit in gout + hypertension
→ Aldosterone (mineralocorticoid receptor): blocked by SPIRONOLACTONE (non-selective, anti-androgenic SE) or EPLERENONE (selective, fewer SE)
  - Effect: ↓ ENaC expression → ↓ Na+ reabsorption → ↓ K+ secretion → K+-SPARING
→ ENaC directly: blocked by AMILORIDE and TRIAMTERENE
→ V2 receptor (ADH): blocked by TOLVAPTAN (aquaretic — excretes free water without Na+)
  - Indication: SIADH, polycystic kidney disease (PKD — slows cyst growth, TEMPO trial)

ACEi/ARBs RENAL HAEMODYNAMICS:
→ Dilate efferent arteriole → ↓ glomerular capillary pressure → REDUCES PROTEINURIA AND GLOMERULOSCLEROSIS
→ Expected creatinine rise ≤30% in first 2 weeks: ACCEPTABLE — reflects reduced intraglomerular pressure (beneficial); do NOT stop
→ Rise >30% or sudden: investigate for bilateral renal artery stenosis (RAS)
→ BILATERAL RAS: ABSOLUTE CONTRAINDICATION — GFR maintained solely by efferent constriction; blocking it → acute severe AKI

COUNTERCURRENT SYSTEM AND DRUG TARGETS:
→ Medullary interstitial gradient (300–1200 mOsm/kg) created by loop of Henle (NKCC2 — thick ascending limb)
→ LOOP DIURETICS block NKCC2 → ↓ medullary gradient → impaired urine concentration → massive diuresis
→ ADH/Vasopressin → V2 receptor → AQP2 insertion → water reabsorption
→ Tolvaptan blocks V2 → AQP2 not inserted → free water excretion (aquaresis, not natriuresis)`,
        kp: [
          "Alkalinise urine for weak acid toxicity (aspirin pKa 3.5, methotrexate) — target urine pH 7.5–8.0 with IV NaHCO3; ionised drug trapped in tubule cannot be reabsorbed",
          "ACEi: ↓ efferent constriction → ↓ intraglomerular pressure → renoprotective; cough from bradykinin accumulation (10–20%); angioedema rare but life-threatening — never rechallenge; contraindicated bilateral RAS",
          "ARBs: same renoprotection as ACEi, NO cough; losartan is uniquely uricosuric (lowers uric acid); do NOT combine ACEi + ARB (ONTARGET trial — excess AKI/hyperkalaemia, no added benefit)",
          "Creatinine rise ≤30% after starting ACEi/ARB: expected and beneficial — reflects reduced glomerular hypertension; only investigate if >30% or abrupt",
          "Tolvaptan (V2 antagonist): aquaretic — excretes free water without Na+; used for SIADH and PKD (TEMPO trial — slows cyst growth)"
        ],
        callouts: [
          {
            role: "student", type: "exam", text: "ACEi vs ARB mechanism distinction: Both block Ang II effects at the kidney (efferent dilation → ↓ glomerular pressure). ACEi also prevents bradykinin degradation → bradykinin accumulates → cough (ALL ACEi, class effect, not dose-dependent) and angioedema (rare). ARBs do NOT affect bradykinin → no cough. This is why cough mandates SWITCHING to ARB (not reducing ACEi dose). Angioedema from ACEi is also bradykinin-mediated — ARBs can be used cautiously in most cases but with monitoring (1–2% cross-reactivity)."
          },
          {
            role: "doctor", type: "clinical", text: "In Ghana, ACEi-associated cough affects 20–25% of Ghanaian patients (higher than European populations — likely genetic CYP and kinin receptor variation). This cough is frequently misattributed to TB, upper respiratory infection, or 'harmattan cough'. When a hypertensive or CKD patient on lisinopril or enalapril reports persistent dry cough, document ACEi as the cause and switch to an ARB. A missed ACEi cough leads to unnecessary investigations, antibiotics, and TB workup."
          },
          {
            role: "pharmacist", type: "clinical", text: "Dual RAAS blockade — ACEi + ARB — is contraindicated following the ONTARGET trial (increased AKI, hyperkalaemia, hypotension without additional CV or renal benefit over monotherapy). The only exception sometimes still seen is specialist-supervised use in resistant proteinuria — always requires nephrology oversight. Never dispense both an ACEi and an ARB for the same patient without checking this is an intentional specialist decision."
          },
          {
            role: "nurse", type: "clinical", text: "Angioedema from ACEi is a medical emergency — laryngeal oedema causes fatal airway obstruction within minutes. Recognition: sudden facial, lip, or tongue swelling in a patient on lisinopril/enalapril/ramipril, often without urticaria (unlike allergic angioedema). Management: STOP ACEi immediately, IV adrenaline (if airway compromise), IV hydrocortisone + antihistamine, airway support. Document prominently in drug allergy section: 'ACE inhibitor — angioedema'. No ACEi ever again."
          },
          {
            role: "labtech", type: "practical", text: "Urine pH testing for clinical decisions: dipstick measures pH 5–9 in 1-unit increments — adequate for monitoring alkalinisation during aspirin overdose management (target ≥7.5) or uric acid stone prevention. For precise urine pH measurement (e.g., distal RTA where urine pH fails to fall below 5.3 despite acidosis), use a pH meter — dipsticks are insufficiently precise. Always note urine temperature and processing time as pH drifts with CO2 loss."
          }
        ]
      }
    ],
    ev: "KDIGO CKD Guidelines 2024; Cockcroft-Gault J Nephrol 1976; CKD-EPI 2021 Race-Free Equation; ONTARGET Trial NEJM 2008; TEMPO Trial NEJM 2012; BTS Aspirin Overdose Guidelines; WHO Essential Medicines List 2023"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 2 — Drug Elimination & Renal Clearance
  // ────────────────────────────────────────────────────────
  {
    id: 2, num: "02", icon: "⚗️", free: false, dur: "2h 30m", lessons: 6, color: "#6d28d9",
    title: "Drug Elimination & Renal Clearance",
    sub: "Quantifying How the Kidney Clears Drugs — and What Happens When It Fails",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Two patients, same drug, same dose — one recovers, one develops fatal toxicity. The only difference is their renal clearance. This module gives you the tools to predict that difference before it happens.",
    story: `Department of Medical Pharmacology, University of Ghana Medical School, Legon.

Dr. Kwame Acheampong is running a clinical pharmacokinetics tutorial. He presents two case histories side by side on the projector.

Patient A: 25-year-old male, serum creatinine 72 μmol/L. Prescribed gentamicin 240 mg daily for Gram-negative sepsis. Day 7: infection cleared. Discharged well.

Patient B: 78-year-old woman, serum creatinine 110 μmol/L. "Her creatinine isn't that bad," the admitting doctor noted. Prescribed the same gentamicin 240 mg daily. Day 5: rising creatinine. Day 7: acute tubular necrosis. Transferred to dialysis unit.

"Same creatinine range," Dr. Acheampong says. "Why completely different outcomes?"

A student raises her hand: "Because their creatinine clearances are completely different?"

"Exactly. Her creatinine of 110 gives a CrCl of approximately 28 mL/min — less than a quarter of his. Her gentamicin half-life was not 2 hours. It was 14 hours. By day 5, she had accumulated a toxic trough. And no one calculated her clearance."`,
    sections: [
      {
        h: "📐 Renal Clearance — Principles, Equations & Clinical Calculation",
        a: `Renal clearance is the single most important pharmacokinetic parameter in prescribing for patients with kidney disease. It determines whether a drug accumulates to toxic levels, whether dosing intervals need extending, and whether a drug should be used at all. Understanding it precisely — not approximately — is a clinical survival skill.`,
        c: `RENAL CLEARANCE (CLr) — DEFINITION AND FORMULA:
CLr = volume of plasma completely cleared of drug by the kidney per unit time (mL/min)

CLr = (Ae / AUC) — from urinary excretion studies
Alternatively: CLr = (U × V̇) / P
where U = urinary drug concentration, V̇ = urine flow rate, P = plasma concentration

INTERPRETATION BY COMPARISON TO GFR:
→ CLr = GFR (~120 mL/min): FILTRATION ONLY — drug is not secreted or reabsorbed (inulin is the gold standard marker)
→ CLr > GFR: NET TUBULAR SECRETION — drug actively transported into tubule in addition to filtration (e.g., para-aminohippurate (PAH) CLr ~650 mL/min; furosemide, penicillins, metformin)
→ CLr < GFR: NET TUBULAR REABSORPTION — drug passively diffuses back across tubular epithelium after filtration (e.g., lipophilic drugs, uric acid at physiological levels)

COCKCROFT-GAULT CREATININE CLEARANCE — THE DRUG DOSING FORMULA:
CrCl (mL/min) = [(140 − age) × weight (kg)] / [72 × SCr (mg/dL)] × 0.85 (if female)
→ This formula was validated in dosing trials and is USED FOR DRUG DOSE ADJUSTMENT — not CKD staging
→ Use ACTUAL BODY WEIGHT in most patients; IDEAL BODY WEIGHT (IBW) in obese patients (to avoid overestimating kidney function)
→ Limitations: Unreliable in: rapidly changing creatinine (AKI), extreme muscle mass (body builders), muscle wasting (malnutrition, amputees, cirrhosis), elderly women with very low creatinine
→ In these situations, cystatin C-based eGFR is preferred

HALF-LIFE IN RENAL IMPAIRMENT:
t½ = (0.693 × Vd) / CL
When renal clearance ↓ (as in CKD) → total CL ↓ → t½ INCREASES → drug ACCUMULATES

Examples:
→ Gentamicin: t½ 2h (normal) → t½ 20h (eGFR ~20 mL/min) → 10-fold accumulation risk
→ Digoxin: t½ 36h (normal) → t½ 4–5 DAYS (ESRD) — one missed dose adjustment → toxicity
→ Morphine metabolite M6G: t½ several hours (normal) → prolonged sedation/respiratory depression in ESRD
→ Metformin: completely renally cleared; normal t½ ~6h → accumulation in CKD → lactic acidosis

Q-FACTOR METHOD — DOSE ADJUSTMENT CALCULATION:
Q = 1 − [fe × (1 − KF)]
where:
fe = fraction of drug excreted renally unchanged
KF = patient GFR / 120 (normal GFR)

Options after calculating Q:
→ DOSE REDUCTION (same interval): Adjusted dose = Normal dose × Q
  Best when: drug concentration-independent; when peaks cause toxicity; narrow therapeutic index drugs where troughs matter (e.g., vancomycin)
→ INTERVAL EXTENSION (same dose): Adjusted interval = Normal interval / Q
  Best when: concentration-dependent killing antibiotics (aminoglycosides — high peak needed for efficacy); patient can tolerate trough periods

WORKED EXAMPLE — Amoxicillin (fe = 0.80), patient GFR = 30 mL/min:
KF = 30 / 120 = 0.25
Q = 1 − [0.80 × (1 − 0.25)] = 1 − 0.60 = 0.40
→ Give 40% of normal dose (e.g., 500mg → 200mg) OR extend interval by 1/Q = 2.5× (every 8h → every 20h)`,
        kp: [
          "CLr > GFR = net secretion; CLr < GFR = net reabsorption; CLr = GFR = filtration only — know all three interpretations",
          "Cockcroft-Gault CrCl is for DRUG DOSING (validated in dosing trials) — different from CKD-EPI eGFR which is for STAGING; they give different numbers for the same patient",
          "In elderly, malnourished, and female patients, serum creatinine severely overestimates renal function — a creatinine of 90 μmol/L in a 75-year-old woman may represent CrCl of only 25–30 mL/min",
          "Q-factor: dose reduction preferred for narrow-TI drugs (vancomycin, digoxin); interval extension preferred for concentration-dependent antibiotics (aminoglycosides)",
          "Drugs with fe >50% (gentamicin 95%, vancomycin 90%, digoxin 70%, metformin 100%, atenolol 90%) MUST have doses adjusted in CKD — accumulation is predictable and preventable"
        ],
        callouts: [
          {
            role: "student", type: "exam", text: "The Q-factor formula Q = 1 − [fe(1 − KF)] is the systematic way to calculate dose adjustment. BUT you need to know what fe means: it is the fraction of drug excreted renally UNCHANGED. A drug metabolised 90% by the liver has fe = 0.10 — even if the metabolites are renally cleared. The metabolites still matter clinically (morphine M6G accumulates in ESRD causing prolonged opioid effect), but the Q-factor calculation uses only the parent drug's renal fraction. Always state which value you are using in exam calculations."
          },
          {
            role: "doctor", type: "clinical", text: "The most dangerous scenario: a 75+ year-old Ghanaian woman with apparent 'normal' creatinine of 80–100 μmol/L. Her low muscle mass means this creatinine represents very little creatinine PRODUCTION — her actual GFR may be 20–35 mL/min. Prescribing standard doses of gentamicin, vancomycin, or digoxin in this patient without calculating CrCl is a sentinel-level prescribing error. Always calculate CrCl before prescribing any narrow-TI renally cleared drug — it takes 30 seconds and prevents disasters."
          },
          {
            role: "pharmacist", type: "clinical", text: "Practical dose adjustment tools for Ghana: (1) Renal Drug Database (renaldrugdatabase.com) — the most comprehensive eGFR-based dosing tool, available as a web app; (2) BNF Appendix 3 — widely available in Ghana's tertiary centres; (3) WHO EML prescribing guidance for resource-limited settings. For drugs not in these references, calculate the Q-factor. For every CKD inpatient, a pharmacist-led medicines reconciliation checking renal doses should be standard of care."
          },
          {
            role: "nurse", type: "clinical", text: "Therapeutic drug monitoring (TDM) saves lives when managing renally cleared narrow-TI drugs: VANCOMYCIN — trough 10–20 mg/L (check before 4th dose for steady state); GENTAMICIN once-daily — trough <1 mg/L before next dose, peak 5–10 mg/L (1h post-dose); DIGOXIN — trough 0.5–0.9 ng/mL (6–8h post-dose). Know when to draw the sample: a peak drawn too early, or a trough drawn too late, gives a misleading result and may lead to toxic dosing decisions."
          },
          {
            role: "labtech", type: "practical", text: "Cystatin C offers significant advantages over creatinine for GFR estimation in: elderly patients (creatinine low due to muscle loss — overestimates function), obesity (creatinine high due to muscle mass — underestimates function), liver failure (reduced creatinine production), and patients with amputations. It is not affected by dietary protein intake. If a lab result has creatinine-based eGFR but clinical picture suggests unreliable result, flag cystatin C as an alternative — request both to allow CKD-EPI creatinine-cystatin combined equation for maximum accuracy."
          }
        ]
      },
      {
        h: "💊 High-Risk Drug Categories in CKD — When to Adjust, When to Avoid",
        a: `Knowing which drugs require adjustment is not enough — knowing exactly how to adjust them, what to monitor, and when to stop entirely are equally important. This section profiles the most commonly prescribed high-risk drug categories in West African clinical settings, with specific thresholds and rationale.`,
        c: `ANTIBIOTICS — HIGHEST RISK FOR DOSING ERRORS IN CKD:

GENTAMICIN (fe ~95%):
→ Normal t½ ~2h; in CKD (eGFR 20): t½ ~20h
→ Extended-interval (once-daily) dosing: 5–7 mg/kg IV OD (even in mild-moderate CKD — reduces trough accumulation)
→ Monitor: trough <1 mg/L before next dose; if trough >2 mg/L → delay next dose
→ Nephrotoxicity: non-oliguric AKI appearing day 5–7 (PCT megalin-receptor accumulation → ROS → ATN)
→ Ototoxicity: synergistic with furosemide; irreversible sensorineural loss

VANCOMYCIN (fe ~90%):
→ AUC-guided dosing: target AUC/MIC 400–600 mg·h/L
→ eGFR 30–60: reduce dose and extend interval; eGFR <30: check level before every dose
→ Monitor trough 10–20 mg/L (pre-4th dose for steady-state); nephrotoxic especially with concurrent aminoglycosides

NITROFURANTOIN: CONTRAINDICATED if eGFR <45
→ Not dialysed into urine adequately → ineffective; accumulates in serum → peripheral neuropathy
→ Switch to trimethoprim or cephalexin for UTI prophylaxis when eGFR <45

CARDIOVASCULAR DRUGS:
DIGOXIN (fe ~70%):
→ Normal t½ 36h → ESRD t½ 4–5 days
→ Target level 0.5–0.9 ng/mL (lower therapeutic target in CKD due to ↑ sensitivity)
→ Spironolactone interferes with digoxin immunoassay → falsely elevated levels
→ Dose: 0.0625 mg alternate days in severe CKD; 3× weekly in dialysis patients

ATENOLOL (fe ~90%):
→ Significantly renally cleared → accumulates in CKD
→ Switch to hepatically metabolised beta-blockers: METOPROLOL SUCCINATE (MERIT-HF evidence for HFrEF; no renal adjustment needed) or BISOPROLOL (once-daily, hepatic)
→ SOTALOL: fe ~75% → QT prolongation risk in CKD — avoid

ANALGESICS — CRITICAL:
MORPHINE:
→ Hepatically metabolised but active metabolite MORPHINE-6-GLUCURONIDE (M6G) is renally cleared
→ M6G accumulates in CKD → prolonged sedation, respiratory depression
→ In CKD stages 4–5: prefer FENTANYL (short-acting, no active renal metabolites) or HYDROMORPHONE
→ NEVER codeine in CKD (metabolised to morphine → M6G accumulation)

NSAIDs — AVOID IN CKD:
→ Block prostaglandin-mediated afferent dilation → ↓ GFR (haemodynamic)
→ Analgesic nephropathy with chronic use → papillary necrosis
→ Alternative: paracetamol 1g QDS (safe in CKD; avoid in hepatic impairment)

ANTIDIABETICS:
METFORMIN (fe ~100%):
→ CONTRAINDICATED eGFR <30 (lactic acidosis risk)
→ CAUTION eGFR 30–45: maximum 500 mg BD
→ HOLD 48h before IV contrast and 48h after (contrast can precipitate AKI → lactic acidosis in patient already on metformin)

SGLT2 INHIBITORS (empagliflozin, dapagliflozin, canagliflozin):
→ Glycaemic efficacy lost at eGFR <30 (insufficient glucose filtered)
→ BUT renal/CV protective effect maintained down to eGFR 20 (CREDENCE, DAPA-CKD, EMPA-KIDNEY trials)
→ KDIGO 2024: recommend in CKD + T2DM AND CKD without T2DM if eGFR >20 + proteinuria
→ HOLD 3–4 days before surgery (DKA risk)

ANTICOAGULANTS:
LMWH (enoxaparin): fe ~60% → accumulates in CKD → supratherapeutic anti-Xa → bleeding
→ eGFR <30: switch to UNFRACTIONATED HEPARIN (monitored by APTT; not renally cleared)
→ If LMWH used: monitor anti-Xa levels (therapeutic peak 0.6–1.0 IU/mL BD dosing)`,
        kp: [
          "Gentamicin: once-daily dosing reduces trough accumulation; monitor trough <1 mg/L; nephrotoxicity appears day 5–7 (non-oliguric ATN); synergistic ototoxicity with furosemide — avoid combination",
          "Metformin: hold at eGFR <30; caution 30–45; always hold 48h before IV contrast procedures",
          "Morphine M6G accumulates in CKD → respiratory depression — prefer fentanyl or hydromorphone in eGFR <30",
          "NSAIDs: avoid in CKD — haemodynamic AKI + analgesic nephropathy; paracetamol is the safe alternative",
          "SGLT2 inhibitors: lose glycaemic efficacy at eGFR <30 BUT retain renoprotection to eGFR 20 — do not stop based on glycaemic failure alone; hold perioperatively for DKA risk"
        ],
        callouts: [
          {
            role: "student", type: "exam", text: "Morphine metabolism in CKD is a classic exam trap. Morphine itself is metabolised by the liver (UGT2B7) — so it has low fe. But its major active metabolite morphine-6-glucuronide (M6G) is renally cleared and accumulates in ESRD, causing prolonged and severe opioid effects. The exam question usually presents an ESRD patient who becomes increasingly drowsy and develops respiratory depression on day 3 of standard morphine dosing. Answer: switch to fentanyl (no active renal metabolites). Same concept applies to codeine (prodrug → morphine → M6G)."
          },
          {
            role: "doctor", type: "clinical", text: "SGLT2 inhibitors represent a paradigm shift for CKD management — the DAPA-CKD trial showed dapagliflozin reduced CKD progression in patients WITHOUT diabetes. The mechanism is haemodynamic (tubuloglomerular feedback via ↑ NaCl delivery to macula densa → afferent constriction → ↓ glomerular pressure), not glycaemic. KDIGO 2024 now recommends SGLT2i alongside ACEi/ARBs as the renoprotection dual backbone. In Ghana, access is improving through NHIS; advocate for eligible patients."
          },
          {
            role: "pharmacist", type: "clinical", text: "The HOLD list for any patient admitted acutely with AKI — implement this the day AKI is confirmed: STOP metformin, NSAIDs, renally cleared antibiotics at unadjusted doses, SGLT2 inhibitors, enoxaparin (switch to UFH). DOSE REVIEW: digoxin, vancomycin, aminoglycosides, gabapentin/pregabalin (highly renally cleared — accumulate severely in AKI causing sedation and respiratory depression). This HOLD/REVIEW protocol prevents the second wave of iatrogenic harm in AKI."
          },
          {
            role: "nurse", type: "clinical", text: "In a patient with suspected morphine M6G accumulation (increasing drowsiness, respiratory rate <10, miosis, on morphine in CKD): DO NOT wait for labs. Administer naloxone 400 mcg IV, titrating with 100 mcg increments if needed. Call the prescriber to review and switch to fentanyl. Document clearly: 'morphine held — suspected M6G accumulation in renal impairment — switched to fentanyl.' Naloxone half-life (~60–90 min) is shorter than fentanyl and much shorter than M6G — re-dosing may be needed."
          },
          {
            role: "labtech", type: "practical", text: "Anti-Xa monitoring for LMWH in CKD: draw 4h after subcutaneous injection for peak level (therapeutic peak 0.6–1.0 IU/mL for therapeutic twice-daily dosing; 0.2–0.5 IU/mL for prophylactic dosing). A trough level just before the next dose detects accumulation (should be <0.1 IU/mL for twice-daily therapeutic dosing). Supratherapeutic anti-Xa in a patient with haematuria or bleeding = urgent result to prescriber. Most Ghanaian labs can run anti-Xa — KBTH and KATH labs have chromogenic anti-Xa assays."
          }
        ]
      }
    ],
    ev: "KDIGO AKI Guidelines 2012; KDIGO CKD Guidelines 2024; DAPA-CKD Trial NEJM 2020; EMPA-KIDNEY Trial NEJM 2022; Renal Drug Handbook Ashley & Dunleavy 2022; BNF Appendix 3; Cockcroft-Gault Equation 1976; MERIT-HF Trial Lancet 1999"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 3 — Diuretics: Overview & Classification
  // ────────────────────────────────────────────────────────
  {
    id: 3, num: "03", icon: "💧", free: false, dur: "2h", lessons: 6, color: "#0891b2",
    title: "Diuretics: Overview & Classification",
    sub: "The Nephron Map of Diuretic Action — From Proximal Tubule to Collecting Duct",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "A 'water tablet' is not just a water tablet. Five structurally and mechanistically distinct drug classes act at five different nephron segments. Getting the right one to the right patient — and knowing why — separates excellent prescribing from dangerous guesswork.",
    story: `Cardiology-Nephrology Outpatient Clinic, Komfo Anokye Teaching Hospital, Kumasi.

Sister Adjoa Mensah has been a senior nurse at KATH for 22 years. This morning, she sits with two patients who are both confused about their 'water tablets.'

Mr. Adu Poku, 64, heart failure, is on furosemide 80 mg twice daily. He's losing 1 kg a day in oedema. "This one," he says, holding up his tablet, "works very fast. Too fast sometimes. I cannot even walk to the market before I need the toilet."

Mrs. Dede Amponsah, 72, hypertension only, mild ankle swelling — is on hydrochlorothiazide 25 mg once daily. "Mine is gentle," she says. "I go to toilet maybe two or three times extra. Not like his."

Sister Adjoa explains: "They are different drugs. His works here" — she points to a diagram of the loop of Henle — "where 25% of sodium is absorbed. That is why it is so powerful. Yours works here" — she points to the distal tubule — "where only 5% is absorbed. That is why it is gentler."

"So why can't they both take the same one?" Mr. Adu Poku asks.

"Because the right diuretic depends on what you need, where your problem is, and what your kidneys can handle."`,
    sections: [
      {
        h: "🗺️ Diuretic Classification — Site, Mechanism & Potency",
        a: `Every diuretic works by blocking sodium reabsorption at a specific nephron segment. The segment determines potency, side effect profile, clinical indication, and interaction with kidney function. Mastering the classification map is the foundation for every prescribing decision that follows.`,
        c: `THE FUNDAMENTAL PRINCIPLE:
About 99% of filtered sodium is normally reabsorbed. Diuretics block Na+ reabsorption at specific nephron sites — since water follows Na+ osmotically, increased Na+ excretion drives water excretion. Even a 1–2% block in total Na+ reabsorption produces clinically significant diuresis.

CLASSIFICATION BY NEPHRON SITE:

1. PROXIMAL CONVOLUTED TUBULE (PCT):
→ CARBONIC ANHYDRASE INHIBITORS (CAIs): ACETAZOLAMIDE
  - Blocks CA → less H+ available for Na+/H+ exchange → less NaHCO3 reabsorption
  - Natriuretic potency: LOW (~5% Na+ excreted)
  - Creates ALKALINE urine (HCO3− loss) and METABOLIC ACIDOSIS (self-limiting)
  - Clinical uses: glaucoma (↓ aqueous humour), altitude sickness, idiopathic intracranial hypertension, metabolic alkalosis correction
→ OSMOTIC DIURETICS: MANNITOL
  - Freely filtered, NOT reabsorbed → retains water in tubule osmotically
  - IV ONLY — not orally absorbed
  - Primarily reduces ICP and IOP (draws water from brain/eye into plasma)
  - NOT a natriuretic agent — primarily an aquaretic for osmotic purposes

2. LOOP OF HENLE — THICK ASCENDING LIMB (TAL):
→ LOOP DIURETICS: FUROSEMIDE, BUMETANIDE, TORASEMIDE, ETHACRYNIC ACID
  - Block NKCC2 (Na+/K+/2Cl− cotransporter, SLC12A1)
  - HIGHEST POTENCY: 25–30% of filtered Na+ excreted — 'ceiling' diuretics
  - Destroy medullary osmotic gradient → impair urine concentration
  - Effective EVEN IN SEVERE CKD (eGFR as low as 5–10 mL/min)
  - Must reach luminal surface via OAT secretion — NSAIDs/probenecid reduce efficacy

3. DISTAL CONVOLUTED TUBULE (DCT):
→ THIAZIDES: HYDROCHLOROTHIAZIDE (HCTZ), BENDROFLUMETHIAZIDE, CHLOROTHIAZIDE
→ THIAZIDE-LIKE: CHLORTHALIDONE, INDAPAMIDE, METOLAZONE
  - Block NCC (Na+/Cl− cotransporter, SLC12A3)
  - Moderate potency: 5–8% Na+ excreted
  - LOSE DIURETIC EFFICACY when eGFR <30 (reduced NCC expression in CKD)
  - EXCEPTION: METOLAZONE — effective even in severe CKD; acts at both PCT and DCT
  - Antihypertensive vascular effect persists even when diuretic effect lost in CKD

4. COLLECTING DUCT (CD):
→ K+-SPARING (ENaC blockers): AMILORIDE, TRIAMTERENE
  - Directly block ENaC (epithelial Na+ channel) — independent of aldosterone
  - Low natriuretic potency (~2–3%)
  - Increase K+ retention — used to counteract hypokalaemia from loop/thiazide diuretics
  - Amiloride: specific for LIDDLE SYNDROME (gain-of-function ENaC mutation)
→ ALDOSTERONE ANTAGONISTS (MRAs): SPIRONOLACTONE, EPLERENONE, FINERENONE
  - Block mineralocorticoid receptor → ↓ ENaC/Na+K+ATPase transcription
  - Onset delayed 2–3 days (requires reversal of protein synthesis)
  - K+-sparing; anti-fibrotic at cardiac and renal MR
  - Spironolactone: non-selective → anti-androgenic SE (gynaecomastia, menstrual irregularity)
  - Eplerenone: selective → fewer hormonal SE
  - Finerenone: non-steroidal, highly selective; reduces CKD progression in T2DM (FIDELIO-DKD)

5. AQUARETICS (V2 ANTAGONISTS):
→ TOLVAPTAN: blocks V2 (ADH receptor) → no AQP2 insertion → free water excretion WITHOUT Na+ loss
  - Indication: SIADH, polycystic kidney disease
  - Corrects hyponatraemia without causing hypotension or electrolyte wasting

POTENCY RANKING (% filtered Na+ excreted):
Loop (~25–30%) >> Thiazides (~5–8%) > CAIs (~5%) > K+-sparing (~2–3%) > Aquaretics (water only)`,
        kp: [
          "Loop diuretics block NKCC2 in TAL — highest potency (25–30%); effective even in severe CKD; furosemide needs OAT secretion to reach lumen (NSAIDs reduce efficacy by competing for OAT)",
          "Thiazides block NCC in DCT — moderate potency (5–8%); lose DIURETIC efficacy at eGFR <30 but ANTIHYPERTENSIVE effect persists; metolazone exception — works even in severe CKD",
          "K+-sparing diuretics: amiloride (ENaC block, aldosterone-independent) vs spironolactone (MR block, aldosterone-dependent) — different mechanisms, same potassium-sparing result; hyperkalaemia is the shared critical risk",
          "Spironolactone onset 2–3 days — plan ahead; eplerenone selective (fewer hormonal SE); finerenone reduces CKD/CV events in T2DM (FIDELIO-DKD trial)",
          "Tolvaptan (V2 antagonist): aquaresis without natriuresis — corrects SIADH without causing hypotension; also slows PKD cyst growth (TEMPO trial)"
        ],
        callouts: [
          {
            role: "student", type: "exam", text: "The most-tested diuretic distinction: Loop diuretics cause HYPOCALCAEMIA (block paracellular Ca2+ reabsorption in TAL — abolished by NKCC2 blockade which generates the positive lumen potential driving Ca2+ reabsorption). Thiazides cause HYPERCALCAEMIA (increase transcellular Ca2+ reabsorption in DCT via NCX — works opposite direction). This explains why: furosemide + IV saline is used to TREAT hypercalcaemia of malignancy; thiazides are used to PREVENT hypercalciuria and calcium kidney stones. Two drug classes, opposite effects on calcium — know both directions."
          },
          {
            role: "doctor", type: "clinical", text: "Diuretic resistance — defined as inadequate response to adequate doses — affects 20–30% of chronic heart failure patients. Mechanisms: (1) NSAID co-prescription (most common preventable cause — blocks prostaglandin-mediated afferent dilation + competes with furosemide for OAT); (2) Dietary Na+ excess overwhelming diuresis; (3) Gut oedema reducing oral furosemide absorption (switch to IV); (4) RAAS activation — Ang II-driven proximal Na+ reabsorption counters loop diuretic effect. Management strategy: sequential nephron blockade — add METOLAZONE to loop diuretic (blocks DCT reabsorption that compensated after loop blockade). Dramatic diuresis often results — monitor electrolytes daily."
          },
          {
            role: "pharmacist", type: "clinical", text: "Thiazide diuretics interact with LITHIUM in a high-risk and often overlooked way: thiazides reduce ECF Na+ → compensatory increase in proximal tubular Li+ reabsorption (Li+ handled like Na+) → Li+ CLEARANCE FALLS by ~25% → Li+ TOXICITY. This is a dangerous interaction because lithium has a narrow therapeutic index (0.6–1.2 mmol/L therapeutic vs >1.5 mmol/L toxic). Never start a thiazide in a patient on lithium without: (a) informing the prescriber; (b) arranging more frequent lithium level monitoring; (c) potentially reducing the lithium dose."
          },
          {
            role: "nurse", type: "clinical", text: "Timing of diuretic administration critically affects patient quality of life and adherence: furosemide morning dose (or split morning + midday) prevents nocturia; bumetanide twice daily → give by 2 pm for the second dose. Document urine output charting after IV furosemide — expect response within 30 min. If no response at 2 hours, escalate: may need IV bolus increase, switch to continuous infusion, or nephrology review. In cirrhotic patients, lying down (supine) improves drug absorption and diuretic response — advise rest after oral dose."
          },
          {
            role: "labtech", type: "practical", text: "Baseline and monitoring electrolytes for patients starting diuretics: (1) At baseline: Na+, K+, Mg2+, Ca2+, creatinine, uric acid, glucose; (2) At 1–2 weeks: Na+, K+, creatinine (to detect early hypokalaemia, hyponatraemia, or pre-renal deterioration); (3) Ongoing: U&E every 3–6 months when stable. Critical values requiring urgent prescriber notification: K+ <3.0 mEq/L (dangerous arrhythmia risk especially on digoxin); Na+ <130 mEq/L (symptomatic hyponatraemia risk, especially with thiazides in elderly); K+ >5.5 mEq/L on K+-sparing diuretics."
          }
        ]
      },
      {
        h: "🎯 Clinical Diuretic Selection — Matching Drug to Clinical Scenario",
        a: `Classification is only useful if it translates to clinical decisions. Each clinical scenario — from acute pulmonary oedema to nephrogenic diabetes insipidus to Conn's syndrome — has a specific diuretic rationale that flows directly from the mechanism. Knowing the 'why' behind each choice is what prevents harmful substitutions.`,
        c: `CLINICAL SELECTION FRAMEWORK — MATCH MECHANISM TO SCENARIO:

ACUTE PULMONARY OEDEMA / SEVERE HEART FAILURE:
→ FUROSEMIDE IV 40–80 mg bolus STAT
→ Reason: (1) Rapid venodilation within 5 min (prostaglandin-mediated, before diuresis begins); (2) Massive diuresis (25–30% Na+ block); (3) Works even in reduced GFR
→ If no response in 1h: double dose; consider infusion 5–10 mg/h
→ IV preferred over oral in acute HF: gut oedema makes oral furosemide absorption unpredictable (bioavailability 10–90%)

CHRONIC HEART FAILURE (HFrEF):
→ FUROSEMIDE oral + SPIRONOLACTONE 25–50 mg (RALES trial: 30% mortality ↓) OR EPLERENONE (EMPHASIS-HF)
→ Spironolactone adds: anti-fibrotic MR blockade, K+-sparing, mild additional natriuresis
→ Monitor: K+ <5.0 before starting MRA; recheck at 1 and 4 weeks

HYPERTENSION — UNCOMPLICATED:
→ CHLORTHALIDONE (preferred) or HCTZ
→ Chlorthalidone t½ 40–60h → better 24-hour BP control than HCTZ (t½ 8–12h) — ALLHAT trial
→ In Ghana: Black African patients respond well to thiazides + CCBs as first-line (lower-renin phenotype)

HYPERTENSION — WITH PROTEINURIA/CKD:
→ ACEi or ARB first (renoprotective); add thiazide/thiazide-like for volume
→ At eGFR <30: switch thiazide to FUROSEMIDE for volume management

CIRRHOSIS WITH ASCITES:
→ SPIRONOLACTONE + FUROSEMIDE (in fixed 100 mg:40 mg ratio to prevent dyselectrolytaemia)
→ Secondary hyperaldosteronism in cirrhosis makes MR blockade the primary agent
→ Titrate upward maintaining ratio; maximum spiro 400 mg; stop if K+ >5.5 or Na+ <125

HYPERCALCAEMIA OF MALIGNANCY:
→ IV FUROSEMIDE + aggressive IV saline hydration
→ Furosemide blocks paracellular Ca2+ reabsorption in TAL → promotes Ca2+ excretion

HYPERCALCIURIA / CALCIUM NEPHROLITHIASIS:
→ THIAZIDE (HCTZ 25 mg BD) → ↑ DCT Ca2+ reabsorption → ↓ urinary Ca2+ → prevents stone recurrence

NEPHROGENIC DIABETES INSIPIDUS (lithium-induced, congenital):
→ THIAZIDE — PARADOXICAL effect
→ Mechanism: mild Na+ depletion → ↑ proximal tubular water reabsorption → less water reaches collecting duct → ↓ polyuria
→ Combined with amiloride in lithium-induced NDI (amiloride blocks Li+ entry via ENaC into collecting duct cells — reduces lithium nephrotoxicity)

RAISED INTRACRANIAL PRESSURE:
→ MANNITOL 20% IV (0.25–1 g/kg over 15–30 min) — draws water from brain into vasculature
→ OR HYPERTONIC SALINE 3–23.4% — increasingly preferred; does not cause rebound oedema
→ Monitor: serum osmolality (stop mannitol if >320 mOsm/kg); electrolytes hourly in ITU

SIADH (dilutional hyponatraemia):
→ TOLVAPTAN — aquaresis without Na+ loss; corrects serum Na+ without fluid restriction
→ Contraindicated in hepatic impairment (risk of fatal liver injury — TEMPO trial signal)
→ Monitor Na+ correction rate: NO faster than 8–10 mEq/L in first 24h (osmotic demyelination risk)

RESISTANT HYPERTENSION (Step 4):
→ SPIRONOLACTONE 25–50 mg (PATHWAY-2 trial: most effective 4th-line agent)
→ Adds MR blockade on top of ACEi/ARB + CCB + thiazide triple combination
→ Check K+ before starting and at 1 week (hyperkalaemia risk with existing RAAS blockade)

PRIMARY HYPERALDOSTERONISM (CONN'S SYNDROME):
→ SPIRONOLACTONE (or eplerenone): drug of choice for conservative management
→ Controls both hypertension and hypokalaemia by blocking excess aldosterone at MR
→ If bilateral adrenal hyperplasia: lifelong MRA; if unilateral adenoma: refer for adrenalectomy

GLAUCOMA / ALTITUDE SICKNESS:
→ ACETAZOLAMIDE: reduces aqueous humour (CA inhibition in ciliary body); altitude — forced metabolic acidosis → hyperventilation compensates for altitude hypoxia`,
        kp: [
          "Acute pulmonary oedema: IV furosemide — venodilatory effect within 5 min (before diuresis); IV preferred over oral due to unpredictable gut absorption in HF",
          "Cirrhosis + ascites: spironolactone:furosemide in fixed 100 mg:40 mg ratio — maintains electrolyte balance while treating secondary hyperaldosteronism",
          "Thiazides paradoxically REDUCE urine volume in nephrogenic DI — mild Na+ depletion increases proximal reabsorption, reducing water reaching the collecting duct",
          "Resistant hypertension: add spironolactone 4th-line (PATHWAY-2 trial — most effective agent); check K+ before and 1 week after starting with concurrent ACEi/ARB",
          "Mannitol: stop if serum osmolality >320 mOsm/kg (osmotic nephropathy risk); contraindicated in anuria (cannot filter — stays in vasculature → pulmonary oedema)"
        ],
        callouts: [
          {
            role: "student", type: "exam", text: "The paradox of thiazides in nephrogenic DI (NDI) is a classic exam question because the drug normally makes you urinate MORE but in NDI it reduces urine output. Mechanism: Thiazide causes mild Na+ wasting → ECF volume contracts slightly → proximal tubule compensatorily increases Na+ AND water reabsorption (ADH-independent) → less water delivered to the collecting duct where ADH response is absent → less polyuria. In lithium-induced NDI, ADD amiloride to block Li+ entry into principal cells via ENaC, protecting tubular cell function."
          },
          {
            role: "doctor", type: "clinical", text: "Sequential nephron blockade — adding metolazone to loop diuretics — can produce dramatic diuresis (2–5 L/day) in diuretic-resistant HF or nephrotic syndrome. But it is dangerous if not monitored: profound hypokalaemia, hyponatraemia, and pre-renal AKI can develop rapidly. Protocol: metolazone 2.5–5 mg oral, given 30–60 min BEFORE furosemide dose; daily weight, daily U&E for first 3–5 days; potassium replacement proactively (oral KCl 40–60 mEq/day). Never start both drugs and send the patient home without follow-up."
          },
          {
            role: "pharmacist", type: "clinical", text: "ALLHAT trial pharmacological lesson: chlorthalidone (t½ 40–60h) was superior to amlodipine and lisinopril for preventing heart failure and equivalent for other major outcomes in high-risk hypertensive patients. It is preferred over HCTZ (t½ 8–12h) because of continuous 24-hour Na+ reabsorption block — HCTZ wears off overnight, allowing nocturnal Na+ recovery and BP surge. In Ghana where HCTZ is still more commonly stocked, advocate for chlorthalidone where possible; if HCTZ is used, it should be at 12.5–25 mg to minimise metabolic risks."
          },
          {
            role: "nurse", type: "clinical", text: "Diuretic monitoring targets patients need to know: daily WEIGHT (most reliable fluid balance indicator; target loss 0.5–1.0 kg/day in chronic HF oedema; max 1.5 kg/day); URINE OUTPUT (target >30 mL/hr in AKI management with diuretics); BLOOD PRESSURE lying and standing (orthostatic hypotension signals over-diuresis). Teach HF patients to bring their weight diary to every appointment and to call if weight increases >2 kg in 2 days (early oedema recurrence) or decreases >2 kg in 2 days unexpectedly (over-diuresis risk)."
          },
          {
            role: "labtech", type: "practical", text: "Urine sodium (spot urine Na+) distinguishes diuretic resistance patterns: low urine Na+ (<20 mmol/L) = avid Na+ reabsorption occurring — patient is volume-depleted OR on insufficient diuretic dose with RAAS activation; high urine Na+ (>40 mmol/L) = adequate diuretic is reaching the tubule but patient is recurrently consuming excess dietary Na+ overcoming the diuresis. This simple spot test guides whether the problem is pharmacological (dose/route) or behavioural (dietary). Report with a note on clinical context when requested specifically for diuretic management."
          }
        ]
      }
    ],
    ev: "ALLHAT Trial JAMA 2002; RALES Trial NEJM 1999; EMPHASIS-HF Trial NEJM 2011; PATHWAY-2 Trial Lancet 2015; FIDELIO-DKD Trial NEJM 2020; TEMPO Trial NEJM 2012; KDIGO CKD Guidelines 2024; ESC Heart Failure Guidelines 2021; Ghana Hypertension Society Guidelines 2020"
  },

];

// ─────────────────────────────────────────────────────────────
// PRE & POST QUIZ EXPORTS — Modules 1–3
// ─────────────────────────────────────────────────────────────

export const RENP_PRE_Q_M1 = [
  {
    q: "A patient with aspirin overdose is brought to A&E. Which urinary intervention will most effectively enhance aspirin excretion?",
    opts: [
      "Urinary acidification with ammonium chloride",
      "Urinary alkalinisation with IV sodium bicarbonate (target pH 7.5–8.0)",
      "Forced diuresis with furosemide alone, without pH adjustment",
      "No urinary intervention — aspirin is entirely hepatically eliminated"
    ],
    ans: 1
  },
  {
    q: "A drug has a renal clearance of 580 mL/min, while GFR is measured at 120 mL/min. What does this indicate about this drug's renal handling?",
    opts: [
      "The drug undergoes net tubular reabsorption",
      "The drug undergoes net tubular secretion in addition to filtration",
      "The measurement is erroneous — CLr cannot exceed GFR",
      "The drug has very high protein binding preventing filtration"
    ],
    ans: 1
  },
  {
    q: "Trimethoprim is started for a UTI. The next day, serum creatinine rises from 88 to 118 μmol/L. The most likely explanation is:",
    opts: [
      "Trimethoprim has caused acute tubular necrosis",
      "Trimethoprim inhibits OCT2-mediated tubular creatinine secretion, raising measured creatinine without reducing true GFR",
      "Trimethoprim reduces GFR by blocking prostaglandin synthesis like NSAIDs",
      "Trimethoprim has caused allergic interstitial nephritis"
    ],
    ans: 1
  },
  {
    q: "Which pharmacokinetic property of a drug is MOST strongly associated with its clearance being affected by renal impairment?",
    opts: [
      "High lipophilicity and extensive hepatic first-pass metabolism",
      "High fraction excreted renally unchanged (fe >50%)",
      "High volume of distribution (Vd >2 L/kg)",
      "Strong plasma protein binding (>90%)"
    ],
    ans: 1
  },
  {
    q: "The juxtaglomerular apparatus releases renin in response to:",
    opts: [
      "High sodium delivery to the macula densa",
      "Elevated systemic blood pressure",
      "Low renal perfusion pressure and low NaCl delivery to macula densa",
      "High plasma potassium concentration"
    ],
    ans: 2
  }
];

export const RENP_POST_Q_M1 = [
  {
    q: "A 78-year-old woman (weight 48 kg) has serum creatinine 95 μmol/L (1.07 mg/dL). Her doctor says 'kidneys are fine — creatinine is almost normal.' Using Cockcroft-Gault, her estimated CrCl is approximately:",
    opts: [
      "85 mL/min — adequate renal function, no drug adjustment needed",
      "22 mL/min — significant impairment requiring dose adjustment for renally cleared drugs",
      "65 mL/min — mildly reduced, monitor only",
      "45 mL/min — moderate impairment"
    ],
    ans: 1
  },
  {
    q: "A patient on bilateral renal artery stenosis is admitted with hypertensive emergency (BP 210/120). Which antihypertensive is ABSOLUTELY CONTRAINDICATED?",
    opts: [
      "Amlodipine 5–10 mg oral",
      "Ramipril 2.5 mg oral — ACE inhibitor will reduce the only mechanism maintaining GFR in bilateral RAS, causing severe acute renal failure",
      "IV labetalol infusion",
      "Hydralazine 5 mg IV slow injection"
    ],
    ans: 1
  },
  {
    q: "A Ghanaian patient started on lisinopril 3 months ago reports a dry irritating cough for 8 weeks. Chest X-ray is clear. TB sputum is negative. The most appropriate management is:",
    opts: [
      "Add a cough suppressant and continue lisinopril — cough is unrelated to the drug",
      "Switch to an ARB (e.g., losartan) — ACEi cough is bradykinin-mediated (class effect), more common in West Africans; ARBs provide equivalent renoprotection without this effect",
      "Reduce the lisinopril dose — cough is dose-dependent",
      "Stop all antihypertensives and observe"
    ],
    ans: 1
  },
  {
    q: "In the proximal tubule, which transporter is responsible for the secretion of furosemide, penicillins, and methotrexate into the tubular lumen?",
    opts: [
      "OCT2 (Organic Cation Transporter 2)",
      "OAT1/3 (Organic Anion Transporters 1 and 3)",
      "P-glycoprotein",
      "NKCC2"
    ],
    ans: 1
  },
  {
    q: "Which statement about the RAAS and intraglomerular pressure is most accurate?",
    opts: [
      "Angiotensin II dilates the efferent arteriole, reducing glomerular pressure",
      "Angiotensin II constricts the efferent arteriole — maintaining GFR in low-perfusion states; ACEi/ARBs reduce this efferent constriction, lowering intraglomerular pressure and providing renoprotection",
      "ACEi reduce intraglomerular pressure by constricting the afferent arteriole",
      "Aldosterone directly controls glomerular filtration pressure"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M2 = [
  {
    q: "A drug has fe = 0.90 and is normally dosed 500 mg every 8 hours. A patient has eGFR 30 mL/min. Using the Q-factor method, what is the adjusted dosing frequency?",
    opts: [
      "Every 8 hours — no adjustment needed for this eGFR",
      "Every 12 hours — moderate reduction",
      "Every 32 hours — calculated from Q = 0.25, interval extended by 1/Q = 4×",
      "Every 48 hours"
    ],
    ans: 2
  },
  {
    q: "Which of the following drugs is CONTRAINDICATED at eGFR <45 mL/min because it becomes both ineffective AND neurotoxic?",
    opts: [
      "Amoxicillin",
      "Nitrofurantoin",
      "Trimethoprim",
      "Metronidazole"
    ],
    ans: 1
  },
  {
    q: "A patient with ESRD on morphine for post-operative pain becomes progressively drowsy on day 3 with respiratory rate of 8/min. The most likely mechanism is:",
    opts: [
      "Morphine itself accumulating due to reduced hepatic clearance",
      "Morphine-6-glucuronide (M6G), an active renally-cleared metabolite, accumulating and causing prolonged opioid effect",
      "Renal failure reducing morphine protein binding, increasing free drug levels",
      "Dialysis removing morphine antidote from the system"
    ],
    ans: 1
  },
  {
    q: "The DAPA-CKD trial demonstrated that dapagliflozin reduces CKD progression in patients WITHOUT diabetes. What is the primary renal mechanism responsible?",
    opts: [
      "SGLT2 inhibition corrects hyperglycaemia, which was causing renal damage even in non-diabetics",
      "SGLT2 inhibition increases NaCl delivery to the macula densa, activating tubuloglomerular feedback and reducing intraglomerular pressure",
      "SGLT2 inhibition directly reduces podocyte apoptosis via AMPK activation",
      "SGLT2 inhibition reduces aldosterone levels, decreasing fibrosis"
    ],
    ans: 1
  },
  {
    q: "Which beta-blocker is preferred for heart failure management in a patient with eGFR 25 mL/min?",
    opts: [
      "Atenolol — proven HF evidence and well tolerated",
      "Sotalol — dual beta-blocking and antiarrhythmic benefit",
      "Metoprolol succinate — predominantly hepatically metabolised with HFrEF evidence (MERIT-HF); no renal dose adjustment required",
      "Propranolol — extensive first-pass metabolism limits renal accumulation"
    ],
    ans: 2
  }
];

export const RENP_POST_Q_M2 = [
  {
    q: "A 75-year-old woman (weight 52 kg, SCr 1.1 mg/dL) is prescribed gentamicin for pyelonephritis. Her calculated CrCl (Cockcroft-Gault) is approximately 28 mL/min. What is the most appropriate gentamicin strategy?",
    opts: [
      "Standard 5–7 mg/kg OD — once-daily dosing is safe regardless of renal function",
      "Extend the dosing interval significantly (e.g., every 36–48h) with trough monitoring (<1 mg/L before next dose); her CrCl indicates severe impairment — standard OD dosing will cause toxicity",
      "Avoid gentamicin entirely — use amoxicillin instead for all pyelonephritis",
      "Reduce dose to 2 mg/kg OD and give every 8 hours"
    ],
    ans: 1
  },
  {
    q: "A patient with eGFR 22 mL/min is on enoxaparin 1 mg/kg BD for pulmonary embolism. On day 4, she develops haematuria. Anti-Xa level is 1.9 IU/mL (therapeutic peak range 0.6–1.0). What does this indicate and what should be done?",
    opts: [
      "Therapeutic anti-Xa — haematuria is coincidental; continue enoxaparin",
      "Supratherapeutic anti-Xa due to LMWH accumulation in CKD; switch to unfractionated heparin (not renally cleared, monitored by APTT) and manage haematuria",
      "Sub-therapeutic — increase enoxaparin dose",
      "Anti-Xa assay is unreliable in CKD — repeat creatinine and continue current dose"
    ],
    ans: 1
  },
  {
    q: "A patient with AKI is found to have the following medications on their list: metformin, ibuprofen, digoxin 0.25 mg OD, and co-amoxiclav. Which single intervention carries the highest immediate priority?",
    opts: [
      "Halve the co-amoxiclav dose — beta-lactams are renally cleared",
      "Stop metformin and ibuprofen immediately; review digoxin dose urgently (t½ extends to days in AKI — toxicity risk); co-amoxiclav dose-adjust per eGFR",
      "Start furosemide to convert to non-oliguric AKI and improve clearance",
      "Continue all medications — drug adjustments are only needed in chronic CKD, not AKI"
    ],
    ans: 1
  },
  {
    q: "A new nurse asks why the prescription says 'Digoxin 0.0625 mg' for an ESRD patient when she is used to seeing 0.125 mg or 0.25 mg. The correct explanation is:",
    opts: [
      "ESRD patients need less digoxin because their hearts are more sensitive to it",
      "Digoxin is ~70% renally excreted; in ESRD, t½ extends from 36h to 4–5 days — standard doses accumulate to toxic levels; 0.0625 mg (half the minimum standard dose) prevents toxicity while maintaining therapeutic effect",
      "ESRD patients clear digoxin faster via dialysis, requiring smaller doses",
      "This is a prescribing error — digoxin is contraindicated in ESRD"
    ],
    ans: 1
  },
  {
    q: "A patient on tacrolimus post-renal transplant is started on fluconazole for oral candidiasis. What is the expected pharmacokinetic interaction and required management?",
    opts: [
      "Fluconazole induces CYP3A4 — reduce tacrolimus dose",
      "Fluconazole inhibits CYP3A4 — tacrolimus levels will rise significantly, risking nephrotoxicity; reduce tacrolimus dose and check trough level urgently (target 5–15 ng/mL)",
      "No interaction — tacrolimus is not CYP3A4 metabolised",
      "Fluconazole is contraindicated in transplant patients — use topical nystatin only"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M3 = [
  {
    q: "Which diuretic acts by blocking the NKCC2 cotransporter and has the highest natriuretic potency of all diuretic classes?",
    opts: [
      "Hydrochlorothiazide",
      "Spironolactone",
      "Furosemide",
      "Acetazolamide"
    ],
    ans: 2
  },
  {
    q: "A patient with eGFR 22 mL/min has severe oedema requiring diuresis. Which diuretic will remain effective?",
    opts: [
      "Hydrochlorothiazide 50 mg — maximum dose for maximum effect",
      "Furosemide — loop diuretics remain effective even at very low eGFR as they act before urine concentrating mechanisms",
      "Indapamide — better tolerated in CKD",
      "Amiloride — K+-sparing diuretics are preferred in severe CKD"
    ],
    ans: 1
  },
  {
    q: "Thiazide diuretics PARADOXICALLY reduce urine volume in nephrogenic diabetes insipidus. What is the mechanism?",
    opts: [
      "Thiazides stimulate V2 receptors, increasing AQP2 insertion",
      "Thiazides cause mild Na+ depletion → increased proximal tubular water reabsorption → less water delivered to the collecting duct where ADH response is absent",
      "Thiazides block ADH degradation, prolonging its antidiuretic effect",
      "Thiazides directly reduce aquaporin-2 degradation in principal cells"
    ],
    ans: 1
  },
  {
    q: "Why does furosemide cause HYPOCALCAEMIA while hydrochlorothiazide causes HYPERCALCAEMIA?",
    opts: [
      "Furosemide stimulates PTH; HCTZ suppresses it",
      "Furosemide blocks paracellular Ca2+ reabsorption in the thick ascending limb; HCTZ increases transcellular Ca2+ reabsorption in the DCT via NCX",
      "Both drugs affect calcium via carbonic anhydrase inhibition",
      "Furosemide reduces intestinal Ca2+ absorption; HCTZ increases it"
    ],
    ans: 1
  },
  {
    q: "Spironolactone's onset of action is 2–3 days, unlike furosemide's effect within 30 minutes. What explains this delay?",
    opts: [
      "Spironolactone has poor oral absorption requiring several doses to accumulate",
      "Spironolactone acts by blocking the mineralocorticoid receptor intracellularly — it must reverse existing aldosterone-driven protein synthesis (ENaC subunits, Na+K+ATPase) which takes days",
      "Spironolactone is a prodrug requiring hepatic activation over several days",
      "Spironolactone acts on V2 receptors which take time to downregulate"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M3 = [
  {
    q: "A patient with cirrhosis and tense ascites is started on spironolactone 100 mg + furosemide 40 mg. After 5 days, ascites persists and serum K+ is 3.9 mEq/L. What is the correct next step?",
    opts: [
      "Add amiloride to increase K+-sparing diuresis",
      "Double both drugs maintaining the 100:40 mg spironolactone:furosemide ratio — K+ is safe to proceed; this ratio preserves electrolyte balance during escalation",
      "Switch to IV furosemide alone for more powerful diuresis",
      "Stop spironolactone — gynaecomastia risk outweighs benefit in male patients"
    ],
    ans: 1
  },
  {
    q: "A patient on HCTZ and digoxin for atrial fibrillation develops visual disturbances, nausea, and frequent ectopics. ECG shows frequent ventricular premature beats. K+ is 2.9 mEq/L. The most important drug interaction here is:",
    opts: [
      "HCTZ directly inhibits digoxin metabolism, raising digoxin levels",
      "Hypokalaemia from HCTZ potentiates digoxin toxicity — K+ and digoxin compete for Na+/K+ ATPase binding; low K+ increases digoxin binding and effect even at therapeutic digoxin levels",
      "HCTZ displaces digoxin from albumin binding, raising free digoxin",
      "HCTZ and digoxin both prolong QT interval independently"
    ],
    ans: 1
  },
  {
    q: "A patient is started on spironolactone 25 mg for HFrEF (already on lisinopril 10 mg). After 1 week, K+ is 5.6 mEq/L. eGFR is 38. What is the correct action?",
    opts: [
      "Continue — K+ 5.6 is acceptable in HFrEF on MRA therapy",
      "Halve spironolactone dose and recheck K+ in 5–7 days; K+ 5.6 with eGFR 38 + concurrent ACEi = significant hyperkalaemia risk; if K+ continues rising above 6.0 → stop spironolactone",
      "Stop lisinopril to allow spironolactone to continue safely",
      "Add kayexalate and continue both medications unchanged"
    ],
    ans: 1
  },
  {
    q: "A patient with resistant hypertension is on lisinopril, amlodipine, and chlorthalidone at maximum doses. BP remains 162/98. According to the PATHWAY-2 trial, what is the most effective 4th agent to add?",
    opts: [
      "Atenolol 25 mg OD — beta-blockade for additional sympathetic suppression",
      "Spironolactone 25 mg OD — the PATHWAY-2 trial demonstrated spironolactone was significantly more effective than bisoprolol, doxazosin, or placebo as a 4th-line agent in resistant hypertension",
      "Doxazosin 4 mg OD — alpha-1 blockade adds vascular relaxation",
      "Hydralazine 25 mg BD — direct vasodilator for residual hypertension"
    ],
    ans: 1
  },
  {
    q: "A woman with a history of calcium oxalate kidney stones asks about preventive medication. Which diuretic reduces urinary calcium excretion and prevents recurrence?",
    opts: [
      "Furosemide — promotes calcium excretion and clears the urinary tract",
      "Hydrochlorothiazide 25 mg BD — increases DCT calcium reabsorption via NCX, reducing urinary calcium concentration and preventing calcium crystal formation",
      "Spironolactone — reduces aldosterone-driven calcium wasting",
      "Acetazolamide — alkalinises urine and dissolves calcium stones"
    ],
    ans: 1
  }
];
// ============================================================
// renp_data.js — Renal Pharmacology: Drugs & the Kidney
// LegonMed Platform · Course ID: renp
// Modules 4–6 of 16
// ============================================================

export const RENP_MODS_4_6 = [

  // ────────────────────────────────────────────────────────
  // MODULE 4 — Loop Diuretics
  // ────────────────────────────────────────────────────────
  {
    id: 4, num: "04", icon: "🌊", free: false, dur: "2h 30m", lessons: 6, color: "#1d4ed8",
    title: "Loop Diuretics",
    sub: "Furosemide & the NKCC2 Story — Mechanism, Clinical Use & Dangers",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "The most potent diuretics in clinical medicine act on a single transporter in a single nephron segment — yet their effects ripple across the entire body. Master furosemide and you hold the key to managing oedema, heart failure, hypercalcaemia, and acute kidney injury.",
    story: `Emergency Department, Ridge Hospital, Accra. 11:20pm.

Mr. Emmanuel Boateng, 62, arrives by taxi. He cannot lie flat. Oxygen saturation 82% on room air. Bilateral crepitations from base to mid-zone. Jugular venous pressure raised to the angle of the jaw. He is drowning in his own lungs.

The registrar — Dr. Kweku Owusu — does not wait for the echo or the BNP. "Acute pulmonary oedema. Furosemide 80 mg IV. Now."

The nurse preparing the syringe pauses. "Sir — won't it take 30 minutes for him to start passing urine? He's in distress right now."

"He'll feel better in 5 minutes," Dr. Owusu says. "Before a single drop of urine comes out. Furosemide is a venodilator before it's a diuretic. That's not a side effect — that's a feature."

Twenty minutes later, Mr. Boateng is sitting upright. Saturation 94%. Breathing easier. The diuresis hasn't even peaked yet.

"How did you know it would work so fast?" the nurse asks.

"Because I understand what furosemide actually does — and when it does it."`,
    sections: [
      {
        h: "🌊 NKCC2 Blockade — Mechanism, Pharmacokinetics & The Venodilator Effect",
        a: `Furosemide is the most widely used diuretic in the world. But its mechanism is more nuanced than most prescribers appreciate — it is simultaneously a venodilator, a diuretic, a calciuric agent, and a potentially ototoxic drug. Each of these properties flows from the same molecular interaction with NKCC2 and downstream prostaglandin signalling.`,
        c: `DRUGS IN CLASS:
→ FUROSEMIDE (frusemide): most widely available in Ghana; IV and oral; bioavailability 50% (range 10–90% — highly variable due to gut oedema in HF)
→ BUMETANIDE: 40× more potent by weight (1 mg bumetanide = 40 mg furosemide); oral bioavailability >95% — preferred when gut oedema limits furosemide absorption
→ TORASEMIDE: oral bioavailability 80–90%; once-daily dosing; longer duration than furosemide (t½ ~3–4h vs 1.5–2h); also has anti-aldosterone properties; evidence for reducing cardiac fibrosis in HF
→ ETHACRYNIC ACID: the ONLY non-sulfonamide loop diuretic; used in confirmed sulfonamide allergy; more ototoxic than furosemide — reserve for allergy cases only

MECHANISM OF ACTION — NKCC2 BLOCKADE:
Site: Thick ascending limb (TAL) of the Loop of Henle
Target: NKCC2 (Na+/K+/2Cl− cotransporter, SLC12A1)

Loop diuretics bind NKCC2 from the LUMINAL side (must be secreted into tubule via OAT to be active):
→ Block simultaneous cotransport of 1 Na+, 1 K+, 2 Cl− into tubular cells
→ Consequences:
  (1) 25–30% of filtered Na+ not reabsorbed → massive natriuresis and diuresis
  (2) ↓ medullary interstitial osmolality (countercurrent gradient destroyed) → impaired urine concentrating ability
  (3) ↓ positive lumen potential (normally generated by K+ recycling back into lumen) → ↓ PARACELLULAR reabsorption of Mg2+ and Ca2+ → HYPOMAGNESAEMIA + HYPOCALCAEMIA
  (4) ↑ NaCl delivery to macula densa → ↑ renin secretion → RAAS activation
  (5) ↑ renal prostaglandin synthesis → VENODILATION (rapid, within 5 min of IV dose) — this is the mechanism of the early effect in acute pulmonary oedema

THE VENODILATOR EFFECT — CLINICAL IMPORTANCE:
→ IV furosemide stimulates renal PGE2 and PGI2 synthesis
→ Prostaglandins cause systemic venodilation → ↓ venous return → ↓ cardiac preload → ↓ pulmonary capillary wedge pressure
→ Onset: 5–10 min (before diuresis begins at 20–30 min)
→ Clinical pearl: in acute pulmonary oedema, patient relief precedes diuresis; this is not placebo — it is prostaglandin pharmacology
→ NSAIDs block prostaglandin synthesis → BLUNT THIS VENODILATORY EFFECT and reduce diuretic efficacy by competing for OAT secretion — two mechanisms of NSAID-loop diuretic antagonism

PHARMACOKINETICS — FUROSEMIDE:
→ Oral bioavailability: 50% (range 10–90%); highly variable in heart failure (gut oedema)
→ Protein binding: 95–99% (albumin); enters tubule via OAT secretion, NOT filtration
→ t½: 1.5–2h (normal); prolonged in CKD and nephrotic syndrome
→ Renal excretion: 65% unchanged via OAT1/3 (explains OAT drug interactions)
→ NEPHROTIC SYNDROME: albumin in tubular lumen binds furosemide → less free drug reaches NKCC2 → diuretic resistance → strategy: IV albumin + IV furosemide together

EFFICACY ACROSS GFR RANGE:
→ Loop diuretics work at eGFR as low as 5–10 mL/min
→ BUT higher doses needed in CKD (↓ secretion via OAT as renal mass falls): standard 40 mg may need to be 160–250 mg in CKD stage 4–5
→ CEILING EFFECT: each loop diuretic has a maximum response ceiling — above the ceiling dose, more drug does not produce more diuresis (but does increase toxicity); ceiling dose rises in CKD`,
        kp: [
          "Furosemide venodilatory effect within 5 min of IV dose (prostaglandin-mediated) — precedes diuresis; explains early relief in acute pulmonary oedema; NSAIDs blunt this effect",
          "NKCC2 blockade destroys medullary gradient → impairs urine concentrating ability even between doses; causes hypomagnesaemia and hypocalcaemia (abolished positive lumen potential)",
          "Furosemide oral bioavailability 50% and highly variable in HF (gut oedema) — IV preferred in acute decompensation; bumetanide >95% bioavailability is a useful oral alternative",
          "Nephrotic syndrome diuretic resistance: albumin in tubular lumen binds furosemide → reduced NKCC2 access → strategy is IV albumin + IV furosemide co-administration",
          "Ethacrynic acid: only non-sulfonamide loop diuretic — use when sulfonamide allergy confirmed; more ototoxic than furosemide — not a first choice"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The ototoxicity mechanism of loop diuretics is tested frequently: NKCC1 (a related cotransporter isoform) is expressed in the stria vascularis of the cochlea. Loop diuretics block NKCC1 here → ↓ endolymph production → altered ionic composition → hair cell depolarisation failure → sensorineural hearing loss. Risk factors: rapid IV infusion (>4 mg/min furosemide), high doses, concurrent aminoglycosides (synergistic cochlear toxicity), pre-existing hearing impairment. Prevention: slow IV infusion or continuous infusion. Ethacrynic acid is MOST ototoxic — reserve for sulfonamide allergy only."
          },
          {
            role: "doctor", type: "clinical",
            text: "Furosemide stress test (FST) in early AKI: administer 1–1.5 mg/kg IV furosemide (if no prior loop diuretic exposure) in stage 1–2 AKI. Urine output <200 mL in the subsequent 2 hours predicts progression to stage 3 AKI with ~87% sensitivity. This is not treatment — it is a prognostic tool that identifies patients who need early nephrology involvement, dialysis planning, and aggressive avoidance of further nephrotoxins. A positive FST should trigger immediate ICU referral and renal team review."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Furosemide + gentamicin is the highest-priority combination to flag on any ward. Both are ototoxic via cochlear NKCC1 (furosemide) and hair cell ROS generation (gentamicin) — concurrent use multiplies risk. Both are nephrotoxic. In practice, this combination is common in septic patients with fluid overload — if it cannot be avoided, ensure: (1) gentamicin TDM (trough <1 mg/L); (2) furosemide infused slowly (<4 mg/min); (3) audiological baseline documented; (4) combination duration minimised to <5 days where possible."
          },
          {
            role: "nurse", type: "clinical",
            text: "IV furosemide infusion rate matters for patient safety: infuse at ≤4 mg/min (e.g., 80 mg over minimum 20 minutes; 250 mg over minimum 60 minutes). Rapid bolus increases ototoxicity risk dramatically. After IV furosemide, expect: venodilation within 5–10 min (patient may feel warm, less breathless); diuresis beginning 20–30 min; peak diuresis 1–2h. Document urine output hourly. If no urine output at 2h post-IV furosemide → escalate immediately — may indicate AKI, inadequate dose, or obstructive cause."
          },
          {
            role: "labtech", type: "practical",
            text: "Hypomagnesaemia from loop diuretics causes REFRACTORY HYPOKALAEMIA — a clinically important and often missed connection. Mechanism: Mg2+ is required for renal K+ reabsorption (ROMK channel function); hypomagnesaemia → impaired K+ retention → K+ replacement fails to correct serum K+. When a patient on furosemide has persistent hypokalaemia despite K+ supplementation, check Mg2+ — if low (normal 0.7–1.0 mmol/L), correct Mg2+ first and K+ will correct more readily. Always report Mg2+ alongside K+ in loop diuretic patients."
          }
        ]
      },
      {
        h: "⚠️ Clinical Uses, Adverse Effects & Drug Interactions",
        a: `Loop diuretics are among the most prescribed drugs in Ghana's hospitals — yet their adverse effects, drug interactions, and the nuances of their clinical use are frequently underappreciated. This section maps every major clinical scenario, every dangerous electrolyte consequence, and every interaction that creates patient harm.`,
        c: `CLINICAL USES — FUROSEMIDE BY INDICATION:

ACUTE PULMONARY OEDEMA: 40–80 mg IV bolus STAT; repeat at 1h if inadequate response; switch to infusion 5–10 mg/h for sustained effect. IV preferred — oral bioavailability unreliable in acute HF

CHRONIC HEART FAILURE (fluid balance): Oral 20–160 mg OD–BD; titrate to daily weight target (loss 0.5–1 kg/day); combine with spironolactone/eplerenone (mortality benefit)

NEPHROTIC SYNDROME OEDEMA: High-dose oral or IV furosemide + IV albumin in severe hypoalbuminaemia (albumin <20 g/L); doses of 250–500 mg may be needed

HYPERCALCAEMIA OF MALIGNANCY: IV furosemide 80–160 mg + aggressive IV saline (2–4 L); furosemide blocks paracellular Ca2+ reabsorption in TAL → promotes calciuria; rehydrate first before furosemide (hypovolaemia worsens hypercalcaemia)

RESISTANT OEDEMA (CKD): Furosemide remains effective even at low eGFR; doses up to 1000 mg/day in refractory cases (specialist use); metolazone addition for sequential nephron blockade

HYPERTENSIVE EMERGENCY WITH VOLUME OVERLOAD: IV furosemide adjunct to vasodilators when volume component confirmed

OLIGURIC AKI (CONVERTING): Furosemide may convert oliguric to non-oliguric AKI (easing fluid management) but does NOT improve survival, reduce dialysis need, or hasten recovery — multiple RCTs confirm NO prognostic benefit; prescribe only for fluid management, not as 'renal rescue'

ADVERSE EFFECTS — THE ELECTROLYTE PENTAD:

1. HYPOKALAEMIA (most common, most dangerous):
→ ↑ Na+ delivery to collecting duct → ↑ aldosterone-driven K+ secretion + ↑ flow-dependent K+ loss
→ Risk: ventricular arrhythmias; potentiates digoxin toxicity (K+ competes with digoxin at Na+/K+ ATPase)
→ Management: dietary K+ (tomatoes, bananas), oral KCl supplementation, or add K+-sparing diuretic
→ Target K+ >4.0 mEq/L in patients on digoxin or with cardiac arrhythmia history

2. HYPONATRAEMIA: volume depletion → ADH release → water retention → dilutional hyponatraemia

3. HYPOMAGNESAEMIA: ↓ paracellular Mg2+ reabsorption in TAL; causes refractory hypokalaemia, cardiac arrhythmias, muscle cramps; supplement if Mg2+ <0.7 mmol/L

4. HYPOCALCAEMIA: ↓ paracellular Ca2+ reabsorption (abolished positive lumen potential)

5. METABOLIC ALKALOSIS (contraction alkalosis): H+ and Cl− lost in urine + ECF volume contraction → relative HCO3− excess; paradoxically may worsen if severe

OTHER ADVERSE EFFECTS:
→ OTOTOXICITY: sensorineural hearing loss (usually reversible if caught early; irreversible with prolonged high-dose use)
→ HYPERURICAEMIA: furosemide competes with urate for OAT secretion → ↓ urate excretion → gout exacerbation
→ HYPERGLYCAEMIA: mild (less than thiazides)
→ PHOTOSENSITIVITY: sulfonamide structure
→ THROMBOCYTOPENIA: rare immune-mediated

KEY DRUG INTERACTIONS:
→ NSAIDs: (1) block prostaglandin-mediated afferent dilation → ↓ GFR; (2) compete with furosemide for OAT secretion → ↓ furosemide entry into tubular lumen → DUAL ATTENUATION of loop diuretic effect
→ AMINOGLYCOSIDES: synergistic ototoxicity (cochlear NKCC1 + hair cell ROS) AND nephrotoxicity — minimise co-use; TDM essential
→ DIGOXIN: furosemide-induced hypokalaemia → ↑ digoxin toxicity; furosemide also reduces digoxin renal clearance
→ ACEi/ARBs: first-dose hypotension (beneficial long-term in HF); if AKI develops, consider temporary dose reduction
→ LITHIUM: furosemide reduces Li+ clearance → Li+ toxicity risk; monitor levels
→ WARFARIN: displacement from albumin → ↑ anticoagulant effect; monitor INR

DOSING GUIDE:
→ Mild oedema: 20–40 mg oral OD
→ Moderate HF: 40–80 mg oral OD–BD
→ Acute decompensated HF: 40–80 mg IV (2× usual oral dose if already on oral furosemide)
→ Severe resistant oedema: 250–500 mg oral/IV
→ Infusion: 5–10 mg/h IV for continuous response
→ Maximum in refractory cases: up to 1000 mg/day IV (specialist use, electrolyte monitoring every 4–6h)`,
        kp: [
          "Furosemide in AKI: converts oliguric to non-oliguric (management benefit) but does NOT improve survival or reduce dialysis need — multiple RCTs confirm; prescribe for fluid management, not as 'renal rescue'",
          "Hypokalaemia from loop diuretics potentiates digoxin toxicity — K+ competes with digoxin at Na+/K+ ATPase; maintain K+ >4.0 mEq/L in patients on digoxin",
          "NSAIDs attenuate loop diuretic effect by TWO mechanisms: ↓ afferent dilation (↓ GFR) AND OAT competition (↓ furosemide secretion into lumen); avoid combination in oedema management",
          "Hypercalcaemia management: IV saline first (rehydrate), THEN furosemide — giving furosemide to a volume-depleted hypercalcaemic patient worsens calcium reabsorption",
          "Ototoxicity: infuse furosemide at ≤4 mg/min IV; continuous infusion safer than bolus at high doses; synergistic cochlear damage with aminoglycosides"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Metabolic alkalosis from loop diuretics ('contraction alkalosis') is explained by two mechanisms: (1) H+ and Cl− are lost in urine (loop diuretics increase H+ secretion in collecting duct due to increased aldosterone from RAAS activation); (2) ECF volume contraction means the remaining HCO3− is distributed in a smaller volume — 'concentrated' alkalosis. This is a pure metabolic alkalosis (↑ HCO3−, ↑ pH, compensatory ↑ PaCO2). Treatment: correct volume depletion (saline) + potassium (hypokalaemia perpetuates alkalosis by shifting H+ intracellularly). Do NOT give acid — address the mechanism."
          },
          {
            role: "doctor", type: "clinical",
            text: "IV vs oral furosemide in acute HF: the DOSE trial (NEJM 2011) showed no significant difference in outcomes between high-dose vs low-dose, or continuous infusion vs bolus, in acute decompensated HF — the key finding was that adequacy of decongestion mattered more than the delivery method. However, in patients with gut oedema and unreliable oral absorption, IV delivery is essential. A practical rule: if the patient's oral furosemide dose is ≥80 mg and they are acutely decompensated, their IV bolus dose should be at least their daily oral dose."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Furosemide + lithium: furosemide causes Na+ depletion → proximal tubule compensatorily reabsorbs more Na+ AND Li+ (handled identically) → Li+ clearance falls → toxicity. This interaction is frequently missed because the prescribers for HF (cardiologist) and bipolar disorder (psychiatrist) may not communicate. Warn any patient on lithium who is started on furosemide: check Li+ level 5–7 days after starting furosemide; consider pre-emptive Li+ dose reduction. Signs of Li+ toxicity: coarse tremor, confusion, ataxia, vomiting."
          },
          {
            role: "nurse", type: "clinical",
            text: "Daily weight is the most reliable guide to diuretic efficacy in chronic HF and oedema management — more reliable than urine output alone. Weigh the patient at the same time each morning, after voiding, before breakfast, with the same clothing. Target weight loss 0.5–1.0 kg/day in active oedema. Document weights on a trend chart — a plateau despite increased diuretic dose signals diuretic resistance requiring medical review. Sudden weight loss >1.5 kg/day signals over-diuresis — check BP for orthostasis and review for pre-renal AKI."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine chloride (spot urine Cl−) distinguishes the cause of metabolic alkalosis in a patient on loop diuretics: LOW urine Cl− (<25 mmol/L) = chloride-responsive alkalosis — volume depleted; furosemide-induced; correct with saline. HIGH urine Cl− (>40 mmol/L) = chloride-resistant alkalosis — ongoing mineralocorticoid excess (Conn's syndrome, Cushing's); severe hypokalaemia. This is important because treating chloride-responsive alkalosis with more furosemide worsens it. Report urine Na+ and Cl− together when alkalosis workup is requested."
          }
        ]
      }
    ],
    ev: "DOSE Trial NEJM 2011; RALES Trial NEJM 1999; ESC Heart Failure Guidelines 2021; BTS Acute Heart Failure Guidelines; KDIGO AKI Guidelines 2012; Furosemide Stress Test — Koyner JL CJASN 2015; MHRA Drug Safety Update Loop Diuretics"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 5 — Thiazide & Thiazide-like Diuretics
  // ────────────────────────────────────────────────────────
  {
    id: 5, num: "05", icon: "🩺", free: false, dur: "2h", lessons: 6, color: "#7c3aed",
    title: "Thiazide & Thiazide-like Diuretics",
    sub: "First-Line Hypertension Agents — Mechanism, Metabolic Effects & Special Populations",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "The most prescribed antihypertensive diuretics in the world — yet their metabolic triad of hypokalaemia, hyperglycaemia, and hyperuricaemia causes preventable harm daily. Knowing when to use them, which one, and at what dose separates safe from dangerous prescribing.",
    story: `Medical Outpatient Department, Legon Hospital, Accra.

Mrs. Akosua Boateng, 58, sits across from Dr. Kwame Mensah for her 6-month blood pressure review. She was started on hydrochlorothiazide 25 mg six months ago.

Good news: her BP is now 128/82 mmHg.

Less good news: her fasting glucose has risen from 5.4 to 7.2 mmol/L. Her potassium is 3.1 mEq/L. Her uric acid is elevated. She has had two episodes of acute gout.

"The tablet is working for my blood pressure," she says. "But everything else is going wrong."

Dr. Mensah studies her results. She has type 2 diabetes risk factors, gout, and hypokalaemia — three of the four main metabolic complications of HCTZ, all in one patient.

"We have two choices," he tells her. "We can switch you to a thiazide-like diuretic with a better metabolic profile — indapamide. Or we can continue HCTZ but manage each complication separately. But there is something I should have done six months ago: chosen a better drug for you from the start."`,
    sections: [
      {
        h: "🧱 NCC Blockade, Calcium Effects & Pharmacokinetic Differences",
        a: `Thiazides and thiazide-like diuretics share the same primary mechanism — NCC blockade in the distal convoluted tubule — but differ significantly in pharmacokinetics, metabolic profiles, and clinical evidence. These differences determine which agent to choose and for which patient.`,
        c: `DRUGS IN CLASS:

THIAZIDES (benzothiadiazine structure):
→ HYDROCHLOROTHIAZIDE (HCTZ): 12.5–50 mg OD; most widely available in Ghana; t½ 8–12h; oral bioavailability 70–80%; renally excreted unchanged
→ BENDROFLUMETHIAZIDE: 2.5 mg OD; used in UK guidelines; rarely available in Ghana
→ CHLOROTHIAZIDE: IV available — useful in ICU when oral route unavailable

THIAZIDE-LIKE (same NCC mechanism, different chemical structure):
→ CHLORTHALIDONE: 12.5–25 mg OD; t½ 40–60h (accumulates in erythrocytes → prolonged action); superior 24-hour BP control vs HCTZ; ALLHAT trial — first-line evidence; metabolically similar to HCTZ but longer duration covers nocturnal BP surge
→ INDAPAMIDE: 1.25–2.5 mg OD; t½ ~18h; hepatically metabolised (safe in mild-moderate CKD for BP control); unique: also direct vascular smooth muscle relaxant (calcium channel-like effect); metabolically MOST FAVOURABLE — minimal glucose, lipid, and uric acid effects
→ METOLAZONE: 2.5–10 mg OD; acts at BOTH proximal tubule and DCT; effective even in severe CKD (eGFR <15); used exclusively for sequential nephron blockade with loop diuretics in resistant oedema — NOT first-line for hypertension

MECHANISM OF ACTION:
Site: Early distal convoluted tubule (DCT1)
Target: NCC (Na+/Cl− cotransporter, SLC12A3)
→ Thiazides competitively block NCC → ↓ Na+ and Cl− reabsorption
→ Increased Na+ delivery to collecting duct → ↑ aldosterone-driven K+ secretion → HYPOKALAEMIA
→ Antihypertensive effect: initially diuretic (↓ ECF volume); chronic use → DIRECT VASCULAR SMOOTH MUSCLE RELAXATION (reduced intracellular Ca2+ responsiveness) — explains BP reduction even after ECF volume normalises

CALCIUM EFFECT — THE HCTZ PARADOX:
→ Thiazides cause HYPERCALCAEMIA (opposite of loop diuretics):
  - ↓ intracellular Na+ in DCT cells (NCC blocked) → ↑ basolateral NCX (Na+/Ca2+ exchanger) activity → ↑ transcellular Ca2+ reabsorption → ↓ urinary Ca2+ → ↑ serum Ca2+
  - Additionally: ↓ ECF volume → ↑ proximal tubular Ca2+ reabsorption (passive, following Na+)
→ Clinical exploitation: HCTZ 25 mg BD for HYPERCALCIURIA — reduces urinary Ca2+ and prevents recurrent calcium oxalate stones
→ Secondary benefit: INCREASED BONE DENSITY — observational data show thiazide users have lower hip fracture rates; ↓ urinary Ca2+ → Ca2+ retained in bone

PHARMACOKINETICS — KEY DIFFERENCES:
→ HCTZ: t½ 8–12h → once-daily dosing allows 12h of diuretic inactivity → nocturnal Na+ reabsorption → BP recovers overnight → LESS EFFECTIVE than chlorthalidone for 24-hour BP control (confirmed in head-to-head comparisons)
→ CHLORTHALIDONE: t½ 40–60h → continuous 24h NCC blockade → no nocturnal BP surge → preferred for BP control
→ INDAPAMIDE: hepatically metabolised → safe to use for antihypertensive effect in CKD (even when diuretic effect lost at eGFR <30); best metabolic profile of the class
→ METOLAZONE: unique PCT + DCT action → maintains diuretic efficacy even at eGFR <10 → reserved for combination with loop diuretics`,
        kp: [
          "Chlorthalidone preferred over HCTZ: t½ 40–60h vs 8–12h → better 24-hour BP control, no nocturnal rebound; ALLHAT trial evidence; advocate chlorthalidone when available in Ghana",
          "Thiazides cause HYPERCALCAEMIA (↑ DCT Ca2+ reabsorption via NCX) — opposite of loop diuretics; clinically exploited to prevent calcium kidney stones (hypercalciuria) and increase bone density",
          "Indapamide: most metabolically favourable thiazide-like agent — minimal glucose, lipid, uric acid effects; hepatically metabolised → antihypertensive effect persists in CKD even when diuresis lost",
          "Metolazone: only thiazide-like effective for diuresis in severe CKD; acts at PCT + DCT; used exclusively for sequential nephron blockade — not for routine hypertension",
          "Thiazide antihypertensive mechanism: acute phase = diuresis (↓ ECF volume); chronic phase = direct vascular smooth muscle relaxation (↓ intracellular Ca2+ responsiveness) — BP reduction persists even after volume normalises"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The Ca2+ effects of diuretics are one of the most commonly tested contrasts: LOOP diuretics block the positive lumen potential in the TAL → ↓ paracellular Ca2+ reabsorption → HYPOCALCAEMIA. THIAZIDES reduce intracellular Na+ in DCT cells → ↑ NCX basolateral activity → ↑ transcellular Ca2+ reabsorption → HYPERCALCAEMIA. Clinical applications: furosemide + saline to TREAT hypercalcaemia; HCTZ to PREVENT calcium stones (hypercalciuria). The direction is opposite — never confuse them. 'Loops lose Ca2+; Thiazides take it back.'"
          },
          {
            role: "doctor", type: "clinical",
            text: "The ALLHAT trial (2002, n=33,357) is the landmark trial for thiazide use — chlorthalidone was superior to amlodipine in preventing heart failure, and equivalent to lisinopril for most outcomes, at a fraction of the cost. In Black African patients (who made up 35% of ALLHAT), chlorthalidone and amlodipine were superior to lisinopril for stroke and heart failure prevention. This has direct relevance to Ghana: our patients have a lower-renin phenotype that responds less well to ACEi/ARB monotherapy — thiazides and CCBs are the preferred first-line agents unless there is a specific indication (proteinuria, post-MI, HFrEF) for ACEi."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "HCTZ doses above 25 mg add metabolic risk without proportionally increasing antihypertensive effect — the dose-response curve for BP flattens above 25 mg but the metabolic triad (hypokalaemia, hyperglycaemia, hyperuricaemia) continues to worsen dose-dependently. In Ghana where HCTZ 25 mg is still commonly prescribed, recommend: (1) use 12.5 mg where possible if adding to an ACEi or CCB; (2) prefer chlorthalidone 12.5 mg or indapamide 1.25 mg when available; (3) monitor K+, glucose, and urate at 4 weeks and 3 months after starting."
          },
          {
            role: "nurse", type: "clinical",
            text: "Thiazide-associated hyponatraemia is the most dangerous electrolyte complication — particularly dangerous in elderly women in whom it can develop rapidly (within days) and may present with confusion, falls, or seizures. Risk factors: female, elderly, low body weight, high fluid intake, concurrent SSRIs or NSAIDs. Monitor Na+ at 1 week and 4 weeks after starting thiazides in any elderly patient. Report Na+ <132 mEq/L as urgent; Na+ <125 mEq/L as a medical emergency. Do NOT give more oral fluids to 'wash out' the low sodium — this worsens dilutional hyponatraemia."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine calcium measurement context: when a clinician requests urine calcium on a patient being considered for thiazide therapy for hypercalciuria — they need a 24-hour urine calcium collection (not a spot). Normal: <7.5 mmol/24h (300 mg/24h). Hypercalciuria (>7.5 mmol/24h) is an indication for HCTZ 25 mg BD to reduce stone recurrence. Report alongside serum calcium, PTH, and vitamin D to allow the clinician to distinguish idiopathic hypercalciuria (thiazide indicated) from primary hyperparathyroidism (surgical referral needed, not thiazide)."
          }
        ]
      },
      {
        h: "⚗️ Metabolic Triad, Special Populations & Clinical Selection",
        a: `The thiazide metabolic triad — hypokalaemia, hyperglycaemia, and hyperuricaemia — causes preventable harm when the wrong agent is chosen or doses are not individualised. This section addresses each metabolic effect mechanistically, identifies which patients are most at risk, and provides the evidence-based framework for thiazide selection in Ghana's patient population.`,
        c: `THE METABOLIC TRIAD — MECHANISMS AND MANAGEMENT:

1. HYPOKALAEMIA:
→ Mechanism: ↑ Na+ delivery to collecting duct → ↑ flow-dependent K+ secretion + ↑ aldosterone (RAAS activated by ↓ ECF volume) → K+ loss
→ Incidence: K+ <3.5 mEq/L in 10–40% of patients on standard doses
→ Risk amplified by: high dietary Na+ (overcomes diuresis-driven K+ saving), low dietary K+, concurrent corticosteroids, secondary hyperaldosteronism
→ Dangerous in: patients on DIGOXIN (↓ K+ → ↑ digoxin binding to Na+/K+ ATPase → TOXICITY); patients with cardiac arrhythmias (K+ <3.0 mEq/L → ventricular ectopics)
→ Management: dietary K+ (tomatoes, palm soup, groundnut soup, avocado — common in Ghana), oral KCl, or add AMILORIDE/SPIRONOLACTONE (K+-sparing); target K+ >3.5 mEq/L, >4.0 mEq/L in digoxin-treated patients

2. HYPERGLYCAEMIA:
→ Mechanism: thiazide-induced hypokalaemia → impairs pancreatic beta-cell insulin secretion (K+ required for membrane repolarisation between action potentials → Ca2+ entry → insulin exocytosis); also ↓ peripheral insulin sensitivity
→ HCTZ MOST OFFENDING; indapamide LEAST — this difference matters for drug selection
→ Clinical impact: new-onset diabetes in ~1% per year on high-dose HCTZ; worsening glycaemic control in established T2DM
→ Management: prefer indapamide in patients with diabetes/pre-diabetes; if HCTZ required, monitor fasting glucose at 3 months; add/adjust antidiabetic therapy if needed
→ Hypokalaemia correction often improves hyperglycaemia — the two are mechanistically linked

3. HYPERURICAEMIA:
→ Mechanism: thiazides compete with urate for OAT1/3 secretion in PCT → ↓ urate excretion → ↑ serum urate; also ECF volume contraction → ↑ proximal urate reabsorption
→ Risk: gout exacerbation in predisposed patients (previous gout, family history, high purine diet — organ meat, sardines common in Ghana)
→ Management: if thiazide essential in gout patient → add ALLOPURINOL and consider LOSARTAN (ARB with uricosuric property — lowers urate, partially offsets thiazide effect); avoid high-purine diet counselling
→ Avoid HCTZ in active gout; use indapamide (least uricosuric effect) or amlodipine/ACEi instead

ADDITIONAL METABOLIC EFFECTS:
→ HYPERLIPIDAEMIA: transient ↑ LDL and triglycerides with high-dose HCTZ (dose-dependent; minimal at ≤12.5 mg)
→ HYPONATRAEMIA: most dangerous electrolyte complication; see above
→ ERECTILE DYSFUNCTION: more common than with other antihypertensives; discuss with male patients

THIAZIDE USE IN SPECIAL POPULATIONS — GHANA CONTEXT:

ELDERLY (>65 years):
→ High efficacy for isolated systolic hypertension (SHEP trial)
→ HIGH RISK of hyponatraemia — monitor Na+ at 1 week after starting
→ Orthostatic hypotension risk → falls → start at lowest dose (HCTZ 12.5 mg)
→ Prefer indapamide 1.25 mg SR (lowest metabolic and Na+ risk of class)

BLACK AFRICAN PATIENTS:
→ Lower-renin phenotype → ACEi/ARBs less effective as monotherapy
→ Thiazides and CCBs are preferred first-line agents (Ghana Hypertension Society 2020; ISH 2020)
→ Preferred agent: chlorthalidone 12.5 mg (when available) > indapamide 1.25 mg > HCTZ 12.5–25 mg
→ With proteinuria or CKD: ADD ACEi/ARB alongside thiazide/CCB

DIABETES:
→ Avoid HCTZ >12.5 mg; prefer indapamide (metabolically neutral) or amlodipine
→ If HCTZ used, monitor HbA1c every 3 months and adjust antidiabetic therapy

GOUT:
→ Avoid thiazides if possible; use CCB or ACEi/ARB instead
→ If thiazide essential: LOSARTAN (uricosuric) + ALLOPURINOL combination; indapamide has least uricosuric effect

CKD (eGFR 30–60):
→ Thiazides maintain ANTIHYPERTENSIVE effect even as diuretic effect diminishes
→ Indapamide (hepatic metabolism): continues to lower BP even at eGFR <30 for BP control
→ For DIURESIS in CKD: switch to loop diuretics or add metolazone

CALCIUM KIDNEY STONES (hypercalciuria):
→ HCTZ 25 mg BD: reduces urinary Ca2+ → prevents stone recurrence
→ Potassium citrate added: prevents hypokalaemia AND provides citrate (inhibits stone nucleation)

OSTEOPOROSIS:
→ Thiazide use associated with ↑ bone mineral density and ↓ hip fracture risk (↑ Ca2+ reabsorption → Ca2+ retained in bone)
→ Can be considered a secondary benefit in elderly patients with osteoporosis risk`,
        kp: [
          "HCTZ metabolic triad: hypokalaemia (↑ collecting duct K+ loss) + hyperglycaemia (K+ depletion → ↓ insulin secretion) + hyperuricaemia (OAT competition) — indapamide has least metabolic impact of the class",
          "Correct hypokalaemia to correct hyperglycaemia — they are mechanistically linked via pancreatic beta-cell K+ dependence; K+ supplementation improves glucose tolerance in thiazide-treated patients",
          "Black African patients: thiazides + CCBs are preferred first-line antihypertensives (low-renin phenotype, less ACEi/ARB response) — Ghana Hypertension Society and ISH 2020 guidelines",
          "Thiazide + lithium interaction: ↓ ECF Na+ → proximal tubule reabsorbs more Li+ → Li+ clearance ↓ → toxicity; monitor Li+ levels 5–7 days after starting thiazide",
          "HCTZ in diabetes: worsen glycaemic control; prefer indapamide 1.25 mg (metabolically neutral) or switch to CCB/ACEi; if HCTZ essential, monitor HbA1c quarterly"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Thiazide-induced hyperglycaemia mechanism is a two-step process: (1) Thiazide causes hypokalaemia; (2) Low K+ impairs pancreatic beta-cell function — K+ is required for membrane repolarisation after each action potential that triggers Ca2+ entry and insulin granule exocytosis. Low K+ means incomplete repolarisation between action potentials → reduced Ca2+ entry → reduced insulin secretion. The exam implication: correcting hypokalaemia (K+ supplementation) often partially corrects thiazide-induced hyperglycaemia — they are not separate effects but linked by the same mechanism."
          },
          {
            role: "doctor", type: "clinical",
            text: "The nephrogenic DI paradox with thiazides is one of the most counterintuitive effects in pharmacology. In lithium-induced NDI: thiazide + amiloride is the combination of choice. Amiloride's role is DUAL: (1) blocks ENaC in the collecting duct → reduces Li+ entry into principal cells via ENaC → protects against lithium nephrotoxicity; (2) offsets thiazide-induced hypokalaemia. Thiazide's role: mild ECF volume depletion → proximal reabsorption increase → less water delivered to the ADH-insensitive collecting duct → reduced polyuria. Tell patients this will not 'fix' DI — it reduces symptoms by 30–50%."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "The thiazide-lithium interaction requires proactive management, not reactive monitoring. When a patient on lithium is newly prescribed a thiazide: (1) Inform the psychiatrist immediately; (2) Check baseline Li+ level before starting thiazide; (3) Plan to check Li+ level at day 5–7 (not weeks later when toxicity may already have developed); (4) Consider pre-emptive Li+ dose reduction of 25–30%; (5) Counsel patient on signs of Li+ toxicity: coarse tremor (different from fine tremor of therapeutic Li+), confusion, slurred speech, diarrhoea, vomiting — instruct to stop both drugs and go to A&E."
          },
          {
            role: "nurse", type: "clinical",
            text: "Thiazide diuretic patient education for new prescriptions: (1) Take in the morning to avoid nocturia; (2) Increase dietary K+ (tomatoes, oranges, avocado, bananas — widely available in Ghana); (3) Report symptoms of low K+ (muscle cramps, weakness, palpitations) or low Na+ (headache, confusion, nausea) immediately; (4) Monitor BP at home if possible — call if dizzy on standing (orthostatic hypotension); (5) Gout patients: stay well hydrated and avoid organ meat, sardines, and alcohol; (6) Return in 4 weeks for blood test check."
          },
          {
            role: "labtech", type: "practical",
            text: "Serum uric acid interpretation in thiazide-treated patients: thiazides raise uric acid by 15–20% above baseline in most patients. A uric acid of 480 μmol/L in a thiazide-treated patient who had a baseline of 400 μmol/L represents drug effect, not an independent problem requiring separate urology workup. Always request a baseline uric acid before starting thiazides in patients with gout history. Uric acid >600 μmol/L in a gout-prone patient on thiazides: flag to prescriber — allopurinol or drug substitution should be discussed."
          }
        ]
      }
    ],
    ev: "ALLHAT Trial JAMA 2002; SHEP Trial JAMA 1991; ACCOMPLISH Trial NEJM 2008; ISH Global Hypertension Guidelines 2020; Ghana Hypertension Society Guidelines 2020; PATHWAY-2 Trial Lancet 2015; Thiazides and Bone Density — Bolland MJ JCEM 2010"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 6 — Potassium-Sparing Diuretics & Aldosterone Antagonists
  // ────────────────────────────────────────────────────────
  {
    id: 6, num: "06", icon: "⚖️", free: false, dur: "2h", lessons: 6, color: "#059669",
    title: "Potassium-Sparing Diuretics & Aldosterone Antagonists",
    sub: "Protect Potassium, Fight Aldosterone, Save Lives in Heart Failure",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Spironolactone is one of the few drugs proven to reduce death in heart failure — not primarily by its diuretic effect, but by blocking the fibrotic, inflammatory, and arrhythmogenic effects of aldosterone on the heart and kidneys. This is pharmacology beyond diuresis.",
    story: `National Cardiothoracic Centre, Korle Bu Teaching Hospital, Accra.

Mr. Kofi Asante, 54, has ischaemic cardiomyopathy with an ejection fraction of 26%. He is on furosemide 80 mg BD and lisinopril 10 mg OD. His oedema is controlled. His blood pressure is fine.

His cardiologist, Dr. Adjoa Quansah, reviews the latest data and adds spironolactone 25 mg OD to his regimen.

The ward pharmacist, Mr. Ato Koomson, counsels Mr. Asante on the new drug. "It is another diuretic," Mr. Koomson explains, "but it works in a very different way from your furosemide."

"But I am not swelling again," Mr. Asante says. "Why do I need another water tablet?"

Mr. Koomson pauses. "Because this one is not really about water. It is about your heart. Aldosterone — the hormone that makes your kidneys hold salt — also scars your heart muscle. This drug blocks that scarring. The RALES trial — one of the most important heart failure studies ever done — showed it reduced the risk of dying by 30 percent."

Mr. Asante is quiet. "A 30 percent reduction in dying?"

"In patients exactly like you, yes."`,
    sections: [
      {
        h: "🔬 Mechanism — ENaC Blockade vs Mineralocorticoid Receptor Antagonism",
        a: `Two distinct mechanisms converge on the same endpoint — reduced sodium reabsorption and potassium retention in the collecting duct. But the pharmacological distinction between direct ENaC blockers (amiloride, triamterene) and mineralocorticoid receptor antagonists (spironolactone, eplerenone, finerenone) determines which drug to use for which clinical indication — and getting it wrong produces treatment failure.`,
        c: `DRUGS IN CLASS:

DIRECT ENaC BLOCKERS:
→ AMILORIDE: 2.5–10 mg OD; directly blocks ENaC (epithelial Na+ channel) in principal cells of collecting duct — INDEPENDENT OF ALDOSTERONE LEVELS; rapid onset (2–4h); renally excreted (accumulates in CKD — use with caution eGFR <30)
→ TRIAMTERENE: 50–100 mg BD; also blocks ENaC directly; forms poorly soluble metabolites → RENAL STONES risk; rarely used as monotherapy

MINERALOCORTICOID RECEPTOR ANTAGONISTS (MRAs):
→ SPIRONOLACTONE: 25–200 mg OD; competitive antagonist at cytoplasmic mineralocorticoid receptor (MR); prodrug → active metabolites (canrenone t½ ~16h, 7α-thiomethylspironolactone); DELAYED ONSET 2–3 days (must reverse existing aldosterone-driven protein synthesis); NON-SELECTIVE — also blocks androgen receptor → anti-androgenic side effects; also blocks progesterone receptor
→ EPLERENONE: 25–50 mg OD; SELECTIVE MR antagonist (100× selectivity for MR vs androgen receptor vs progesterone receptor) → fewer hormonal side effects; shorter t½ than canrenone; CYP3A4 substrate (significant drug interactions)
→ FINERENONE: 10–20 mg OD; NON-STEROIDAL MRA — structurally different from spironolactone/eplerenone; highest MR selectivity; no CYP3A4 metabolism; FIDELIO-DKD + FIGARO-DKD trials: reduces CKD progression AND CV events in T2DM + CKD independently of BP

ALDOSTERONE PATHWAY — TARGET OF MRAs:
→ Low renal perfusion / RAAS activation → adrenal zona glomerulosa → ALDOSTERONE release
→ Aldosterone crosses principal cell membrane → binds CYTOPLASMIC MINERALOCORTICOID RECEPTOR (MR)
→ MR-aldosterone complex → nucleus → ↑ transcription of:
  (a) ENaC subunits (↑ apical Na+ entry)
  (b) Na+/K+ ATPase subunits (↑ basolateral Na+ exit)
  (c) SGK1 (serine/glucocorticoid kinase 1) — stabilises ENaC at membrane surface
→ Net effect: ↑ Na+ reabsorption + ↑ K+ secretion + ↑ H+ secretion

MRA BLOCKADE CONSEQUENCES:
→ ↓ ENaC/ATPase transcription → ↓ Na+ reabsorption → mild natriuresis (2–3% filtered Na+)
→ ↓ K+ secretion → HYPERKALAEMIA (critical risk — monitor)
→ ↓ H+ secretion → mild metabolic acidosis (especially in CKD)

CARDIAC AND RENAL MR — BEYOND COLLECTING DUCT:
→ Aldosterone acts on cardiac fibroblasts → collagen deposition → MYOCARDIAL FIBROSIS → ↑ ventricular stiffness + ↑ arrhythmia substrate
→ MRA blockade → ↓ cardiac fibrosis → improved LV compliance → ↓ mortality (RALES mechanism)
→ Aldosterone acts on renal mesangium → fibrosis → CKD progression
→ MRA blockade → ↓ renal fibrosis → finerenone: CKD protection in FIDELIO-DKD
→ This is why MRAs reduce mortality in HF INDEPENDENT OF their diuretic effect

AMILORIDE vs SPIRONOLACTONE — WHEN TO USE WHICH:
→ HIGH ALDOSTERONE STATE (cirrhosis, HF, Conn's syndrome, secondary hyperaldosteronism): SPIRONOLACTONE — blocks elevated aldosterone at its receptor
→ NORMAL/LOW ALDOSTERONE STATE (Liddle syndrome — gain-of-function ENaC mutation, primary hyperaldosteronism post-adrenalectomy adjunct): AMILORIDE — blocks constitutively active ENaC directly, where aldosterone levels are already low
→ COMBINATION HCTZ + AMILORIDE (e.g., co-amilozide): prevents thiazide-induced hypokalaemia; amiloride blocks the compensatory K+ loss at collecting duct without requiring elevated aldosterone`,
        kp: [
          "MRAs block mineralocorticoid receptor → ↓ ENaC/ATPase transcription → onset 2–3 days (reversal of existing protein synthesis); amiloride blocks ENaC directly → onset 2–4h — know the mechanism difference",
          "Spironolactone reduces mortality in HFrEF (RALES) by blocking cardiac MR-mediated fibrosis — NOT primarily diuresis; anti-fibrotic mechanism independent of diuretic effect",
          "Amiloride is specific for LOW/NORMAL aldosterone states (e.g., Liddle syndrome); spironolactone is appropriate for HIGH aldosterone states (cirrhosis, HF, Conn's, secondary hyperaldosteronism)",
          "Finerenone (non-steroidal MRA): FIDELIO-DKD trial — reduces CKD progression AND CV events in T2DM + CKD; no CYP3A4 metabolism; highest MR selectivity with no hormonal side effects",
          "Eplerenone: selective MRA (no anti-androgenic SE); CYP3A4 substrate — significant interactions with azole antifungals, clarithromycin (↑ eplerenone levels → hyperkalaemia); preferred over spironolactone when gynaecomastia is intolerable"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Liddle syndrome is the paradigm case distinguishing amiloride from spironolactone. Liddle syndrome: autosomal dominant gain-of-function mutation in ENaC beta or gamma subunits → ENaC constitutively active regardless of aldosterone → hypertension + hypokalaemia + LOW aldosterone (feedback suppresses RAAS). Treatment: AMILORIDE (or triamterene) — blocks constitutively active ENaC; NOT spironolactone (aldosterone is already suppressed, blocking its receptor achieves nothing). In exam scenarios: 'young patient with hypertension, hypokalaemia, LOW aldosterone, LOW renin' → Liddle syndrome → amiloride."
          },
          {
            role: "doctor", type: "clinical",
            text: "The RALES trial (NEJM 1999) is the landmark evidence: spironolactone 25 mg OD vs placebo in severe HFrEF (EF <35%, NYHA III–IV) → 30% reduction in all-cause mortality, 35% reduction in hospitalisations. The EMPHASIS-HF trial (NEJM 2011) extended this to mild-moderate HFrEF (EF <35%, NYHA II) with eplerenone 50 mg. Current ESC 2021 guidelines: MRA is Class I recommendation (Level A) for ALL symptomatic HFrEF patients already on ACEi/ARNI + beta-blocker, provided K+ <5.0 mEq/L and eGFR >30 mL/min. This means most HFrEF patients in Ghana should be on MRA — check if your HF patients are."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Spironolactone interferes with digoxin immunoassays — this is a laboratory interaction that causes clinical harm. Spironolactone metabolites cross-react with the antibodies in digoxin immunoassay kits, causing FALSELY ELEVATED digoxin levels. A patient on spironolactone 100 mg who has digoxin level reported as 2.8 ng/mL may actually have a level of 1.2 ng/mL — treatment may be unnecessarily withheld or dose reduced. Alert the lab and clinician when requesting digoxin levels in spironolactone-treated patients; some labs have correction factors or use more specific assays."
          },
          {
            role: "nurse", type: "clinical",
            text: "Hyperkalaemia monitoring protocol for spironolactone initiation in HFrEF: check K+ and creatinine at BASELINE, then at DAY 5–7, then at WEEK 4, then every 3–6 months if stable. Spironolactone is contraindicated if K+ ≥5.0 mEq/L before starting. Action thresholds during treatment: K+ 5.0–5.5 → halve the dose and recheck in 5 days; K+ >5.5 → STOP and recheck in 3 days; K+ >6.0 → STOP, treat hyperkalaemia as emergency, do not restart without nephrology/cardiology review."
          },
          {
            role: "labtech", type: "practical",
            text: "Serum potassium specimen handling is critical for MRA monitoring — spurious hyperkalaemia from poor specimen technique is a major source of unnecessary drug withdrawal. Causes of falsely high K+: haemolysis during venepuncture (K+ released from RBCs — always report haemolysis visually), prolonged tourniquet time (K+ shifts out of ischaemic muscle), delay between collection and centrifugation (RBC glycolysis releases K+), fist clenching during draw. When K+ result is unexpected in a MRA patient: repeat using a free-flowing vein, short tourniquet time, immediate transport to lab. A repeat normal result avoids unnecessary and potentially harmful spironolactone withdrawal."
          }
        ]
      },
      {
        h: "💊 Clinical Uses, Adverse Effects & Prescribing Safety",
        a: `The clinical applications of K+-sparing diuretics and MRAs span from life-saving heart failure therapy to endocrine tumour management to dermatology. But hyperkalaemia — the shared critical risk — requires a systematic monitoring approach that must be embedded in every prescription.`,
        c: `CLINICAL USES:

HEART FAILURE (HFrEF) — EVIDENCE-BASED:
→ SPIRONOLACTONE 25–50 mg OD (RALES trial: 30% mortality ↓ in NYHA III–IV, EF <35%)
→ EPLERENONE 25–50 mg OD (EMPHASIS-HF: mortality and hospitalisation ↓ in NYHA II, EF <35%)
→ Both: Class I, Level A recommendation in ESC 2021 HF guidelines
→ Initiation criteria: K+ <5.0 mEq/L, eGFR >30 mL/min, no concurrent potassium-raising medications at maximum dose
→ Mechanism of benefit: anti-fibrotic (cardiac MR) + anti-arrhythmic (prevents hypokalaemia from loop diuretics) + mild additional natriuresis

HYPERTENSION — RESISTANT (STEP 4):
→ SPIRONOLACTONE 25–50 mg (PATHWAY-2 trial: most effective 4th-line agent vs bisoprolol, doxazosin, placebo)
→ Mechanism: most resistant hypertension has a volume-dependent, aldosterone-excess component even without overt Conn's syndrome

PRIMARY HYPERALDOSTERONISM (CONN'S SYNDROME):
→ SPIRONOLACTONE: drug of choice for medical management (bilateral hyperplasia or pre-surgical)
→ Controls both hypertension and hypokalaemia by blocking excess aldosterone at MR
→ EPLERENONE: alternative when spironolactone SE intolerable
→ Bilateral adrenal hyperplasia: lifelong MRA; Unilateral adenoma: refer for laparoscopic adrenalectomy (surgical cure)

CIRRHOSIS WITH ASCITES:
→ SPIRONOLACTONE 100 mg + FUROSEMIDE 40 mg in fixed ratio — secondary hyperaldosteronism is the primary driver; MRA is the anchor agent
→ Titrate upward maintaining 100:40 ratio (max spiro 400 mg); goal: Na+ in urine >78 mmol/day (or Na+/K+ ratio >1 in spot urine)
→ STOP if: K+ >5.5, Na+ <120, hepatorenal syndrome (hypotension + rising creatinine)

DIABETIC KIDNEY DISEASE (NEW INDICATION — FINERENONE):
→ FINERENONE 10–20 mg OD: non-steroidal MRA; FIDELIO-DKD trial (2020): reduced composite of renal failure, creatinine doubling, and renal death by 18%; FIGARO-DKD: reduced CV events
→ Combines with ACEi/ARB + SGLT2i in the new triple renoprotection strategy (KDIGO 2024)
→ Advantage: less hyperkalaemia than spironolactone in T2DM+CKD

POLYCYSTIC OVARY SYNDROME (PCOS):
→ SPIRONOLACTONE 50–200 mg OD: anti-androgenic effect (blocks androgen receptor) → reduces hirsutism, acne, seborrhoea
→ Used where anti-androgenic therapy is indicated and hormonal contraceptives are insufficient or unsuitable

ADVERSE EFFECTS:

HYPERKALAEMIA (ALL AGENTS — CRITICAL):
→ Risk ↑ with: CKD, concurrent ACEi/ARBs or NSAIDs, diabetes (type 4 RTA — reduced aldosterone response), older age, high K+ diet
→ FATAL COMBINATION: ACEi + ARB + MRA (triple RAAS blockade) — excessive hyperkalaemia, AKI; CONTRAINDICATED
→ Management: dietary K+ restriction (avoid coconut water, groundnut soup excess, potassium supplements), dose reduction, new K+ binders (patiromer, sodium zirconium cyclosilicate — limited Ghana availability)

SPIRONOLACTONE-SPECIFIC (ANTI-ANDROGENIC):
→ GYNAECOMASTIA and breast tenderness (men): dose-dependent; blocks androgen receptor + ↑ oestrogen (aromatase induction) → treat by switching to EPLERENONE
→ MENSTRUAL IRREGULARITY and LIBIDO CHANGES (premenopausal women)
→ ERECTILE DYSFUNCTION

EPLERENONE-SPECIFIC:
→ CYP3A4 substrate: STRONG CYP3A4 INHIBITORS (ketoconazole, itraconazole, clarithromycin, ritonavir) → ↑ eplerenone levels → hyperkalaemia → CONTRAINDICATED with strong CYP3A4 inhibitors
→ Available fungal infections requiring systemic azoles in Ghana must prompt eplerenone dose reduction or switch to spironolactone

AMILORIDE:
→ Avoid in CKD (renally excreted → accumulates → hyperkalaemia)
→ Megaloblastic anaemia (rare — inhibits dihydrofolate reductase)
→ Nausea, GI upset

TRIAMTERENE:
→ Crystalluria and renal stones (poorly soluble metabolites)
→ Photosensitivity
→ Avoid in CKD

PRESCRIBING SAFETY PROTOCOL:
Before starting MRA in HF:
→ eGFR >30 mL/min
→ K+ <5.0 mEq/L
→ Review all concurrent K+-raising medications

After starting:
→ K+ and creatinine at 5–7 days, 4 weeks, then every 3–6 months
→ Counsel on K+-rich foods in Ghana: coconut water (very high K+), beans, groundnut soup with large protein load, avocado
→ K+ >5.5: halve dose; K+ >6.0: stop; K+ >6.5 with ECG changes: emergency management`,
        kp: [
          "RALES (NEJM 1999): spironolactone 25 mg → 30% mortality ↓ in HFrEF; EMPHASIS-HF (NEJM 2011): eplerenone → mortality ↓ in mild HFrEF; both Class I Level A in ESC 2021 — mandatory in eligible HFrEF",
          "ACEi + ARB + MRA = TRIPLE WHAMMY for hyperkalaemia — absolutely contraindicated; dual ACEi + MRA acceptable with careful monitoring; dual ARB + MRA same",
          "Spironolactone gynaecomastia: anti-androgenic (androgen receptor block + ↑ aromatase) — switch to eplerenone (selective MRA, no androgen receptor affinity); frequency increases with dose and duration",
          "Finerenone (non-steroidal MRA): FIDELIO-DKD — reduces CKD progression in T2DM; combines with ACEi/ARB + SGLT2i for triple renoprotection (KDIGO 2024); less hyperkalaemia than spironolactone",
          "Eplerenone is a CYP3A4 substrate: strong inhibitors (ketoconazole, clarithromycin) dramatically increase eplerenone levels → life-threatening hyperkalaemia; CONTRAINDICATED combination"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The mechanism of spironolactone's delayed onset is a common exam distinction. Spironolactone blocks the mineralocorticoid receptor INTRACELLULARLY — but the receptor's effect is GENOMIC (gene transcription). Aldosterone has already caused ENaC and Na+/K+ ATPase proteins to be synthesised and sitting in the membrane. Spironolactone stops new transcription but cannot remove already-existing protein. These proteins have a biological half-life of ~48–72h — hence 2–3 days to maximal effect. Contrast with amiloride: directly blocks existing ENaC at the channel pore → immediate onset within hours."
          },
          {
            role: "doctor", type: "clinical",
            text: "Initiating spironolactone in advanced HFrEF in Ghana requires managing the real-world risk of hyperkalaemia in a population where: (1) many patients also have CKD (common co-morbidity); (2) dietary K+ is high (local staple foods); (3) ACEi is already prescribed. Start at 12.5–25 mg (not 50 mg) and recheck K+ at day 5–7 — not week 4. If K+ is stable at 4 weeks, increase to 50 mg if tolerated. Use the RALES protocol: stop immediately if K+ >5.5. Spironolactone should not be withheld from eligible HFrEF patients for fear of hyperkalaemia — with proper monitoring the benefit is overwhelmingly proven."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "PCOS and spironolactone prescribing: spironolactone at doses of 100–200 mg for PCOS is an anti-androgen, not primarily a diuretic. However, it still causes hyperkalaemia (especially if patient is also on NSAIDs for dysmenorrhoea — very common). Advise against NSAID self-medication. Contraception is essential during spironolactone therapy in women of childbearing potential — teratogenic risk (feminisation of male fetus). Combined OCP is often co-prescribed; remind patients not to stop OCP without discussing with their doctor. Also: monitor BP — spironolactone at high doses lowers BP; some PCOS patients are normotensive and may become hypotensive."
          },
          {
            role: "nurse", type: "clinical",
            text: "Recognising hyperkalaemia symptoms in a patient on spironolactone: initial symptoms are NON-SPECIFIC — mild weakness, fatigue, palpitations. As K+ rises: paralysis (ascending, starting in legs), bradycardia, hypotension. ECG changes precede symptoms: first peaked T waves (K+ 5.5–6.5), then wide QRS, then sinusoidal pattern, then cardiac arrest (K+ >7.0). Never dismiss a complaint of new weakness or palpitations in a patient on spironolactone — check K+ THAT DAY. If peaked T waves on ECG: treat as emergency — IV calcium gluconate, insulin/dextrose, salbutamol nebuliser, cardiac monitoring."
          },
          {
            role: "labtech", type: "practical",
            text: "Aldosterone and renin measurements for diagnosing primary hyperaldosteronism (Conn's syndrome) — a key condition where spironolactone/eplerenone is the drug of choice: Screening: aldosterone-to-renin ratio (ARR) — collect morning specimen after patient has been seated for 15 min. Interpretation: ARR >30 (with aldosterone >15 ng/dL) = positive screen. Confounders: beta-blockers ↑ ARR (suppress renin more than aldosterone); ACEi/ARBs ↓ ARR (raise renin). Spironolactone itself invalidates the test — must be stopped 4–6 weeks before testing. Ideally switch to amiloride as an interim diuretic to control BP/K+ while stopping spironolactone before the diagnostic test."
          }
        ]
      }
    ],
    ev: "RALES Trial NEJM 1999; EMPHASIS-HF Trial NEJM 2011; PATHWAY-2 Trial Lancet 2015; FIDELIO-DKD Trial NEJM 2020; FIGARO-DKD Trial NEJM 2021; ESC Heart Failure Guidelines 2021; KDIGO CKD Guidelines 2024; Endocrine Society Primary Hyperaldosteronism Guidelines 2016"
  },

];

// ─────────────────────────────────────────────────────────────
// PRE & POST QUIZ EXPORTS — Modules 4–6
// ─────────────────────────────────────────────────────────────

export const RENP_PRE_Q_M4 = [
  {
    q: "IV furosemide relieves breathlessness in acute pulmonary oedema within 5 minutes — before significant diuresis occurs. What is the mechanism of this early effect?",
    opts: [
      "Rapid NKCC2 blockade reduces plasma volume within minutes",
      "Furosemide stimulates renal prostaglandin synthesis causing systemic venodilation and reducing cardiac preload",
      "Furosemide directly relaxes pulmonary bronchial smooth muscle",
      "Furosemide increases GFR acutely by dilating the afferent arteriole"
    ],
    ans: 1
  },
  {
    q: "A patient with nephrotic syndrome (albumin 16 g/L) has resistant oedema despite furosemide 160 mg BD oral. What is the pharmacokinetic basis of this resistance?",
    opts: [
      "Furosemide absorption is reduced by the nephrotic gut",
      "Albumin in the tubular lumen binds furosemide, reducing free drug available to reach NKCC2 in the tubular lumen",
      "Hypoalbuminaemia increases furosemide distribution volume preventing tubular secretion",
      "Furosemide is blocked from OAT secretion by the elevated proteinuria"
    ],
    ans: 1
  },
  {
    q: "A patient on furosemide and gentamicin develops sudden bilateral hearing loss. Which mechanism explains this combination's synergistic ototoxicity?",
    opts: [
      "Both drugs accumulate in the auditory cortex and cause central hearing loss",
      "Furosemide blocks cochlear NKCC1 (disrupting endolymph); gentamicin generates ROS destroying cochlear hair cells — both mechanisms converge on the same cochlear injury",
      "Both drugs cause middle ear fluid accumulation blocking sound transmission",
      "Furosemide displaces gentamicin from protein binding, increasing free gentamicin reaching the cochlea"
    ],
    ans: 1
  },
  {
    q: "Which statement about furosemide use in oliguric AKI is most evidence-based?",
    opts: [
      "Furosemide reduces mortality and dialysis need in AKI — use early",
      "Furosemide may convert oliguric to non-oliguric AKI but does NOT improve mortality, renal recovery, or dialysis need — multiple RCTs confirm no prognostic benefit",
      "Furosemide should be withheld entirely in AKI — it worsens all outcomes",
      "Furosemide works best in AKI when given as high-dose oral therapy"
    ],
    ans: 1
  },
  {
    q: "Why does furosemide have reduced efficacy in a patient concurrently prescribed ibuprofen?",
    opts: [
      "Ibuprofen raises blood pressure, counteracting furosemide's antihypertensive effect",
      "NSAIDs block prostaglandin-mediated afferent dilation (reducing GFR) AND compete with furosemide for OAT tubular secretion — two mechanisms reducing loop diuretic effect",
      "Ibuprofen alkalinises urine, trapping furosemide in ionised form",
      "Ibuprofen induces CYP3A4, accelerating furosemide metabolism"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M4 = [
  {
    q: "A patient on furosemide 80 mg BD develops progressive muscle weakness and palpitations. K+ is 2.6 mEq/L. He is also taking digoxin 0.125 mg OD. What is the immediate priority?",
    opts: [
      "Stop furosemide and observe",
      "Urgent K+ replacement IV (monitoring ECG) + review digoxin level — hypokalaemia potentiates digoxin toxicity at Na+/K+ ATPase; K+ 2.6 with concurrent digoxin = life-threatening arrhythmia risk",
      "Add amiloride for K+-sparing and wait for oral K+ to correct levels",
      "Increase digoxin to overcome the arrhythmia"
    ],
    ans: 1
  },
  {
    q: "A patient with hypercalcaemia (Ca2+ 3.6 mmol/L) due to metastatic breast cancer is referred for pharmacological management. She is dehydrated. What is the correct sequence?",
    opts: [
      "IV furosemide immediately to promote calciuria — the priority is reducing calcium fast",
      "IV isotonic saline first (rehydration) THEN IV furosemide — giving furosemide to a volume-depleted patient worsens calcium reabsorption; rehydration must precede furosemide",
      "Oral furosemide + oral saline — IV access is not needed",
      "Thiazide diuretic — promotes calcium reabsorption in the DCT"
    ],
    ans: 1
  },
  {
    q: "A patient with heart failure receives furosemide 250 mg IV infusion. 90 minutes later, the nurse notes that the infusion rate was 50 mg/min (10× too fast). What adverse effect is most immediately concerning?",
    opts: [
      "Severe hyperkalaemia from rapid Na+ excretion",
      "Acute sensorineural ototoxicity — rapid IV infusion rate (>4 mg/min) dramatically increases cochlear NKCC1 blockade and risk of irreversible hearing loss",
      "Pulmonary oedema from rapid volume shifts",
      "Metabolic acidosis from acute bicarbonate excretion"
    ],
    ans: 1
  },
  {
    q: "A patient with CKD stage 4 (eGFR 18) and resistant oedema is on furosemide 160 mg BD with poor diuresis. The most appropriate addition for sequential nephron blockade is:",
    opts: [
      "Hydrochlorothiazide 25 mg — adds DCT blockade",
      "Metolazone 2.5–5 mg — the only thiazide-like agent effective for diuresis even at very low eGFR; acts at proximal tubule + DCT; give 30–60 min before furosemide dose",
      "Spironolactone 100 mg — K+-sparing will help retain fluid",
      "Chlorthalidone 25 mg — longer duration provides sustained DCT blockade"
    ],
    ans: 1
  },
  {
    q: "A patient with advanced cirrhosis (Child-Pugh C) has tense ascites. After starting furosemide 40 mg alone, his ascites is unchanged but his K+ has fallen to 3.0 mEq/L. What does this suggest and what should be done?",
    opts: [
      "Furosemide dose is inadequate — increase to 160 mg alone",
      "Secondary hyperaldosteronism in cirrhosis means spironolactone should be the primary agent — start spironolactone 100 mg with furosemide 40 mg (100:40 ratio); K+ fell because furosemide alone drove K+ loss without aldosterone antagonism",
      "Add amiloride instead of spironolactone — faster onset",
      "The ascites requires paracentesis only — diuretics are contraindicated in Child-Pugh C"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M5 = [
  {
    q: "Hydrochlorothiazide causes hypercalcaemia while furosemide causes hypocalcaemia. What is the mechanism explaining HCTZ's effect on calcium?",
    opts: [
      "HCTZ stimulates parathyroid hormone secretion, increasing bone calcium release",
      "HCTZ reduces intracellular Na+ in DCT cells, increasing basolateral NCX (Na+/Ca2+ exchanger) activity and promoting transcellular Ca2+ reabsorption into the blood",
      "HCTZ blocks the positive lumen potential in the TAL, reducing paracellular Ca2+ loss",
      "HCTZ increases intestinal calcium absorption via vitamin D activation"
    ],
    ans: 1
  },
  {
    q: "Why is chlorthalidone preferred over hydrochlorothiazide for 24-hour blood pressure control?",
    opts: [
      "Chlorthalidone has fewer metabolic side effects than HCTZ",
      "Chlorthalidone has a t½ of 40–60h vs HCTZ's 8–12h, providing continuous NCC blockade without nocturnal BP rebound",
      "Chlorthalidone has superior evidence specifically in Black African patients",
      "Chlorthalidone is less nephrotoxic in CKD"
    ],
    ans: 1
  },
  {
    q: "A patient on HCTZ 25 mg develops new-onset gout. Which ARB could be added to the regimen to partially offset the thiazide's uricosuric effect?",
    opts: [
      "Valsartan — most potent ARB for BP control",
      "Losartan — the only ARB with a uricosuric property (blocks URAT1 renal urate reabsorption), partially offsetting HCTZ-induced hyperuricaemia",
      "Candesartan — highest AT1 receptor affinity",
      "Telmisartan — longest half-life for 24h coverage"
    ],
    ans: 1
  },
  {
    q: "Which thiazide-like diuretic maintains diuretic efficacy even at eGFR <15 mL/min and is used specifically for sequential nephron blockade?",
    opts: [
      "Indapamide — hepatic metabolism allows use in CKD",
      "Chlorthalidone — long half-life maintains efficacy",
      "Metolazone — acts at proximal tubule AND DCT; maintains diuresis even in severe CKD",
      "Bendroflumethiazide — highest potency of the thiazide class"
    ],
    ans: 2
  },
  {
    q: "HCTZ-induced hypokalaemia causes hyperglycaemia through which mechanism?",
    opts: [
      "Hypokalaemia stimulates hepatic gluconeogenesis directly",
      "Hypokalaemia impairs pancreatic beta-cell insulin secretion — K+ is required for membrane repolarisation between action potentials triggering Ca2+ entry and insulin exocytosis",
      "Hypokalaemia increases glucagon secretion from pancreatic alpha cells",
      "Hypokalaemia causes peripheral insulin resistance by reducing GLUT4 translocation"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M5 = [
  {
    q: "A 70-year-old woman on HCTZ 25 mg for hypertension presents with confusion and Na+ 118 mEq/L. What is the most likely mechanism?",
    opts: [
      "HCTZ directly inhibits ADH, causing free water retention",
      "NCC blockade causes primary Na+ loss; ECF volume contraction triggers ADH release causing water retention; impaired diluting capacity in DCT concentrates this hyponatraemia — elderly women are most susceptible",
      "HCTZ causes SIADH through a central mechanism",
      "HCTZ induces tubular necrosis, losing Na+ throughout the nephron"
    ],
    ans: 1
  },
  {
    q: "A Ghanaian patient with hypertension, type 2 diabetes, and a history of gout needs a diuretic for better BP control. Which thiazide-like agent is most appropriate?",
    opts: [
      "HCTZ 25 mg — best evidence for BP reduction in Ghana",
      "Indapamide 1.25 mg — most metabolically neutral thiazide-like agent; minimal glucose, uric acid, and lipid effects; hepatically metabolised; preferred in diabetes and gout risk",
      "Metolazone 2.5 mg — most potent option",
      "Chlorthalidone 25 mg — longest duration and ALLHAT evidence"
    ],
    ans: 1
  },
  {
    q: "A 45-year-old woman with recurrent calcium oxalate kidney stones and 24-hour urinary Ca2+ of 9.2 mmol/day is referred for pharmacological prevention. What is the most appropriate treatment?",
    opts: [
      "Furosemide — promotes calcium excretion to prevent stone formation",
      "HCTZ 25 mg BD + potassium citrate — thiazide reduces urinary Ca2+ via DCT reabsorption; potassium citrate replaces K+ lost from thiazide and provides citrate which inhibits calcium crystal nucleation",
      "Spironolactone — aldosterone antagonism reduces urinary calcium",
      "Acetazolamide — alkaline urine dissolves calcium oxalate stones"
    ],
    ans: 1
  },
  {
    q: "A patient stable on lithium 800 mg BD (Li+ level 0.8 mmol/L) for bipolar disorder is started on HCTZ 25 mg for newly diagnosed hypertension. Five days later he presents with coarse tremor, confusion, and diarrhoea. Li+ level is 1.9 mmol/L. What is the explanation?",
    opts: [
      "HCTZ directly inhibits lithium excretion by blocking tubular secretion",
      "HCTZ causes ECF Na+ depletion; the proximal tubule compensatorily increases Na+ AND Li+ reabsorption (Li+ handled like Na+); Li+ clearance falls ~25% → toxicity at previously therapeutic dose",
      "HCTZ and lithium compete for OCT2 tubular secretion",
      "HCTZ increases lithium absorption from the gut"
    ],
    ans: 1
  },
  {
    q: "A patient with nephrogenic diabetes insipidus (lithium-induced) has polyuria of 8 L/day. Thiazide + amiloride combination is prescribed. What is amiloride's specific role in this regimen beyond K+-sparing?",
    opts: [
      "Amiloride stimulates V2 receptors to restore some ADH sensitivity",
      "Amiloride blocks ENaC in principal cells, reducing Li+ entry into collecting duct cells via ENaC — protecting tubular cell mitochondrial function and reducing lithium nephrotoxicity",
      "Amiloride increases proximal tubular water reabsorption, enhancing the thiazide effect",
      "Amiloride reduces urine pH, trapping lithium in the tubule and increasing its excretion"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M6 = [
  {
    q: "The RALES trial demonstrated a 30% reduction in mortality with spironolactone in HFrEF. What is the primary pharmacological mechanism responsible, beyond diuresis?",
    opts: [
      "Spironolactone prevents hypokalaemia from concurrent loop diuretics, reducing arrhythmia risk",
      "Spironolactone blocks cardiac mineralocorticoid receptors, reducing aldosterone-driven myocardial fibrosis and improving ventricular compliance",
      "Spironolactone reduces blood pressure by 5–8 mmHg, reducing cardiac workload",
      "Spironolactone increases urinary Na+ excretion, reducing preload"
    ],
    ans: 1
  },
  {
    q: "A patient with Liddle syndrome (gain-of-function ENaC mutation, low aldosterone, low renin) has hypertension and hypokalaemia. Which drug is specifically indicated?",
    opts: [
      "Spironolactone — blocks the overactive aldosterone driving ENaC",
      "Amiloride — directly blocks the constitutively active ENaC channel regardless of aldosterone levels",
      "Finerenone — most selective MR antagonist available",
      "Furosemide — addresses the hypertension and hypokalaemia simultaneously"
    ],
    ans: 1
  },
  {
    q: "Why does spironolactone have a 2–3 day onset while amiloride works within hours?",
    opts: [
      "Spironolactone is poorly absorbed orally, taking days to reach therapeutic plasma levels",
      "Spironolactone blocks the mineralocorticoid receptor stopping new ENaC transcription, but must wait for existing ENaC protein (t½ ~48–72h) to degrade; amiloride directly plugs existing ENaC channels immediately",
      "Spironolactone requires hepatic conversion to active canrenone, which takes several days",
      "Amiloride is renally concentrated, achieving high tubular levels rapidly"
    ],
    ans: 1
  },
  {
    q: "A man on spironolactone 150 mg for primary hyperaldosteronism develops painful gynaecomastia. What is the most appropriate management?",
    opts: [
      "Reduce spironolactone to 25 mg — gynaecomastia is entirely dose-dependent",
      "Switch to eplerenone — selective MR antagonist with 100× selectivity for MR vs androgen receptor, providing equivalent aldosterone blockade without anti-androgenic side effects",
      "Add tamoxifen to block breast oestrogen receptors while continuing spironolactone",
      "Switch to amiloride — provides same K+-sparing without anti-androgenic effects"
    ],
    ans: 1
  },
  {
    q: "Eplerenone is prescribed for post-MI heart failure. The patient is also started on clarithromycin for a chest infection. What is the critical interaction?",
    opts: [
      "Clarithromycin reduces eplerenone levels by inducing CYP3A4",
      "Clarithromycin is a strong CYP3A4 inhibitor — dramatically increases eplerenone plasma levels → potentially life-threatening hyperkalaemia; this combination is contraindicated",
      "Clarithromycin displaces eplerenone from protein binding, increasing free drug",
      "No interaction — eplerenone is not CYP3A4 metabolised"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M6 = [
  {
    q: "A patient with HFrEF (EF 28%) on furosemide 80 mg BD and lisinopril 10 mg OD has K+ 4.6 mEq/L and eGFR 42. Spironolactone 25 mg is added. What monitoring is required?",
    opts: [
      "Monthly K+ checks are sufficient — eGFR 42 is safe for MRA initiation",
      "K+ and creatinine at day 5–7, week 4, then every 3 months — eGFR 42 and concurrent ACEi increase hyperkalaemia risk; early monitoring is mandatory; hold if K+ >5.5 mEq/L",
      "No specific monitoring needed below eGFR 60",
      "Check K+ only at month 6 — takes this long for spironolactone to reach steady state"
    ],
    ans: 1
  },
  {
    q: "A patient with cirrhosis and ascites is on spironolactone 200 mg + furosemide 80 mg. Ascites remains. K+ is 4.1 mEq/L. Na+ is 131 mEq/L. What is the appropriate next step?",
    opts: [
      "Double furosemide to 160 mg — loop diuretics are most potent for ascites",
      "Increase both drugs maintaining the 100:40 ratio (spiro 300 mg:furo 120 mg) — K+ is safe to escalate; Na+ 131 requires monitoring but not immediate dose reduction; ratio must be maintained to prevent electrolyte imbalance",
      "Stop furosemide — Na+ 131 means patient is hyponatraemic; furosemide worsens this",
      "Add amiloride on top of spironolactone for additional K+-sparing effect"
    ],
    ans: 1
  },
  {
    q: "A patient on spironolactone 100 mg has digoxin level reported at 3.1 ng/mL (therapeutic range 0.5–2.0 ng/mL). He has no symptoms of digoxin toxicity. What is the most likely explanation?",
    opts: [
      "Spironolactone reduces digoxin renal clearance, causing true accumulation",
      "Spironolactone metabolites cross-react with digoxin immunoassay antibodies, causing a falsely elevated result — confirm with a more specific assay; clinical assessment and true ECG monitoring are more reliable than this result",
      "The patient has been taking extra digoxin doses",
      "Spironolactone induces CYP3A4, paradoxically increasing digoxin levels"
    ],
    ans: 1
  },
  {
    q: "The FIDELIO-DKD trial showed finerenone reduced CKD progression in T2DM. How does finerenone differ from spironolactone in its pharmacological profile?",
    opts: [
      "Finerenone has the same structure as spironolactone but a higher dose",
      "Finerenone is a non-steroidal MRA with highest MR selectivity (no anti-androgenic/progestogenic effects), no CYP3A4 metabolism, reduced hyperkalaemia risk vs spironolactone; complementary to ACEi/ARB + SGLT2i in KDIGO 2024 renoprotection strategy",
      "Finerenone blocks ENaC directly like amiloride but at higher potency",
      "Finerenone acts identically to eplerenone but is taken twice daily"
    ],
    ans: 1
  },
  {
    q: "A patient on spironolactone and ACE inhibitor develops K+ of 6.4 mEq/L with peaked T waves on ECG. What is the immediate management sequence?",
    opts: [
      "Stop spironolactone and repeat K+ in 48 hours",
      "IV calcium gluconate 10 mL 10% immediately (membrane stabilisation) → insulin 10u + 50 mL 50% dextrose (K+ shift) → nebulised salbutamol (K+ shift) → stop spironolactone and ACEi → arrange urgent ECG monitoring; consider RRT if refractory",
      "Oral calcium resonium 15 g TDS — adequate for K+ 6.4",
      "Reduce spironolactone dose to 12.5 mg and recheck K+ next week"
    ],
    ans: 1
  }
];
// ============================================================
// renp_data.js — Renal Pharmacology: Drugs & the Kidney
// LegonMed Platform · Course ID: renp
// Modules 7–9 of 16
// ============================================================

export const RENP_MODS_7_9 = [

  // ────────────────────────────────────────────────────────
  // MODULE 7 — Osmotic Diuretics & Carbonic Anhydrase Inhibitors
  // ────────────────────────────────────────────────────────
  {
    id: 7, num: "07", icon: "🔬", free: false, dur: "2h", lessons: 6, color: "#b45309",
    title: "Osmotic Diuretics & Carbonic Anhydrase Inhibitors",
    sub: "Mannitol, Acetazolamide & the Proximal Tubule — Niche but Life-Saving",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Two drug classes that act at the proximal tubule — one by osmotic retention of water, one by blocking bicarbonate reabsorption. Neither is a powerful natriuretic, but both can save lives in neurosurgical emergencies, glaucoma, and altitude sickness where no other drug comes close.",
    story: `Neurosurgical ICU, 37 Military Hospital, Accra. 2:17am.

A 28-year-old man is brought in following a road traffic accident on the Accra-Kasoa road. GCS 9. CT shows diffuse cerebral oedema with midline shift. ICP monitor reads 34 mmHg.

The neurosurgeon, Dr. Kweku Amponsah, orders: "Mannitol 20% — 1 gram per kilogram IV, over 20 minutes. Now."

The night nurse, Sister Comfort Agyei, prepares the infusion. She has given mannitol before but not at this dose. She asks: "Doctor — his urine output has been dropping since admission. Is it safe to give?"

Dr. Amponsah checks the notes. "Urine output dropping but not anuric — GFR is still there. Good. If he were anuric, mannitol would kill him. With residual GFR, it will save his brain."

Twenty-five minutes later, the ICP monitor reads 21 mmHg. The midline shift on repeat CT has partially corrected.

"How does it work so fast?" Sister Agyei asks.

"It pulls water from the brain before it even reaches the kidney," Dr. Amponsah says. "The brain effect is vascular. The diuresis comes later."`,
    sections: [
      {
        h: "💧 Osmotic Diuretics — Mannitol: Mechanism, Uses & Dangers",
        a: `Mannitol is not a conventional diuretic — it does not block a transporter or antagonise a hormone. It is a freely filtered, non-reabsorbable osmole that retains water in the tubular lumen. But its most clinically important effect happens before it even reaches the kidney — in the vasculature, where it raises plasma osmolality and draws water out of the brain. Understanding this dual mechanism is essential for every prescriber who may face a patient with raised intracranial pressure.`,
        c: `MANNITOL — DRUG PROFILE:
→ 6-carbon sugar alcohol; MW 182 Da; freely filtered at glomerulus
→ NOT reabsorbed in any nephron segment (no tubular transporter)
→ NOT metabolised (excreted unchanged)
→ IV ONLY — not orally absorbed (stays in gut lumen, causes osmotic diarrhoea)
→ Available as 10%, 15%, 20% IV solutions; most commonly used as 20% in Ghana's neurosurgical units

MECHANISM — DUAL ACTION:

1. PLASMA OSMOLALITY EXPANSION (BRAIN EFFECT — IMMEDIATE):
→ Mannitol raises serum osmolality by 10–20 mOsm/kg
→ Creates osmotic gradient: plasma > brain interstitium > intracellular fluid
→ Water shifts FROM brain cells INTO plasma → ↓ cerebral oedema → ↓ ICP
→ Onset: 15–30 min; peak effect: 30–60 min; duration: 2–6h
→ REQUIRES INTACT BLOOD-BRAIN BARRIER (BBB): if BBB disrupted (severe trauma, tumour necrosis), mannitol leaks into brain → WORSENS oedema (paradoxical ICP rise)
→ ICP monitoring essential during repeated dosing

2. OSMOTIC DIURESIS (KIDNEY EFFECT — DELAYED):
→ Filtered mannitol stays in tubular lumen → creates osmotic pressure opposing water reabsorption
→ PCT and descending loop: increased tubular flow → Na+, K+, Mg2+, Ca2+ washed out
→ NOT a powerful natriuretic — primarily increases water excretion (aquaretic-like)
→ Onset: 30–60 min after infusion; requires RESIDUAL GFR to work

CLINICAL USES:

RAISED INTRACRANIAL PRESSURE (PRIMARY INDICATION):
→ Dose: 0.25–1 g/kg IV over 15–30 min
→ Repeat every 4–6h as needed; monitor ICP response
→ Serum osmolality target: do NOT exceed 320 mOsm/kg (risk of osmotic nephropathy → AKI)
→ Osmolal gap monitoring: if osmolal gap >10 mOsm/kg above baseline → mannitol accumulating
→ Alternative in resource-limited settings: HYPERTONIC SALINE (3–23.4% NaCl) — sustained ICP reduction, no osmotic nephropathy risk, may be superior in some settings (ATLS guidelines 2018)

ACUTE ANGLE-CLOSURE GLAUCOMA:
→ Rapidly reduces intraocular pressure (IOP) by drawing water from vitreous humour
→ Bridge to definitive laser/surgical treatment

RHABDOMYOLYSIS / MYOGLOBINURIA:
→ Increases tubular flow → flushes myoglobin from tubules → prevents cast formation
→ Combine with IV saline + sodium bicarbonate (alkalinise to pH >6.5 → keeps myoglobin soluble)

HAEMOLYTIC TRANSFUSION REACTION:
→ Forced diuresis to prevent haemoglobin cast nephropathy

CONTRAINDICATIONS — CRITICAL:
→ ANURIA: mannitol cannot be filtered → stays in vasculature → raises plasma osmolality → draws fluid from interstitium into vasculature → ACUTE PULMONARY OEDEMA; no diuresis occurs
→ ACTIVE INTRACRANIAL BLEEDING: expanding haematoma + disrupted BBB → mannitol leaks in → worsens oedema
→ SEVERE HEART FAILURE: initial plasma volume expansion (before diuresis) may precipitate flash pulmonary oedema
→ SEVERE DEHYDRATION: further volume shifts dangerous

ADVERSE EFFECTS:
→ Initial plasma volume EXPANSION (before diuresis): risk in cardiac failure and pulmonary oedema
→ HYPERNATRAEMIA: free water loss > Na+ loss in urine
→ HYPONATRAEMIA (paradoxical — early): water drawn from intracellular space dilutes plasma Na+ transiently
→ OSMOTIC NEPHROPATHY: tubular vacuolation at serum osmolality >320 mOsm/kg; AKI
→ ICP REBOUND: as mannitol effect wanes, water re-enters brain if serum osmolality normalises; re-dose or switch to hypertonic saline
→ ELECTROLYTE LOSSES: K+, Mg2+, Ca2+ with repeated dosing
→ CRYSTALLISATION: mannitol 20% may crystallise at temperatures <15°C — warm bag before use (hold under warm running water); do NOT microwave`,
        kp: [
          "Mannitol's BRAIN effect (↓ ICP) is vascular — raises plasma osmolality drawing water from brain; onset 15–30 min; requires intact BBB; KIDNEY effect (diuresis) is secondary and requires residual GFR",
          "ANURIA = absolute contraindication to mannitol — cannot filter → accumulates in vasculature → pulmonary oedema; check urine output before every dose",
          "Target serum osmolality <320 mOsm/kg with repeated mannitol dosing — above this threshold osmotic nephropathy (AKI) develops; monitor osmolal gap",
          "Rhabdomyolysis: IV saline + sodium bicarbonate (alkalinise urine to pH >6.5) is the cornerstone; mannitol adds tubular flushing; target urine output >200 mL/h",
          "Mannitol 20% crystallises at <15°C — inspect bag before use; warm if crystals visible; never microwave"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The contraindication of mannitol in anuria is a fundamental physiology question. Mannitol must be FILTERED at the glomerulus to enter the tubular lumen and exert its osmotic diuretic effect. In anuria (GFR = 0), no mannitol is filtered — it remains entirely in the vascular compartment. Here it raises plasma osmolality and draws fluid from the interstitium into the vasculature (the same mechanism used in the brain). With no diuresis to relieve this volume load, the patient develops acute pulmonary oedema. The clinical rule: 'If there is no urine, do not give mannitol — it has nowhere to go and will flood the lungs.'"
          },
          {
            role: "doctor", type: "clinical",
            text: "Mannitol vs hypertonic saline for raised ICP — the practical comparison for Ghana's neurosurgical units: both work by raising plasma osmolality. Hypertonic saline advantages: (1) no osmotic nephropathy risk; (2) sustained ICP reduction (no rebound); (3) also restores intravascular volume (useful in trauma + hypovolaemia + raised ICP). Mannitol advantages: (2) widely available; (2) established evidence base. Current ATLS 2018 and NICE TBI guidelines give no strong preference — use what is available and monitor osmolality (mannitol) or Na+ (hypertonic saline, target Na+ 145–155 mEq/L for ICP management)."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Mannitol IV preparation at KBTH and KATH: 20% mannitol (200 g/L) is administered via a filter needle or blood administration set (it can crystallise in standard IV tubing at room temperature or below). If crystals are visible in the bag: submerge in warm water bath (not >70°C) until dissolved, then allow to cool to body temperature before infusion. Never administer cloudy or crystalline mannitol — crystalline infusion causes venous sclerosis and systemic microvascular injury."
          },
          {
            role: "nurse", type: "clinical",
            text: "ICP monitoring while administering mannitol: document ICP reading before dose, at 15 min, 30 min, and 60 min post-infusion. Urine output must be measured hourly — if urine output ceases during mannitol therapy, stop infusion and escalate immediately (anuria developing during treatment is a critical sign). Monitor serum osmolality every 4–6h with repeated dosing. Daily electrolytes: K+, Na+, Mg2+ require frequent replacement with repeated mannitol courses. Temperature of IV bag must be checked — never give a bag from a cold store without warming."
          },
          {
            role: "labtech", type: "practical",
            text: "Serum osmolality calculation and osmolal gap for mannitol monitoring: Calculated osmolality = 2(Na+) + glucose + urea (all in mmol/L). Measured osmolality by freezing point depression on osmometer. Osmolal gap = Measured − Calculated (normal <10 mOsm/kg). In mannitol therapy: rising osmolal gap = mannitol accumulating in serum (not yet excreted). Osmolal gap >20 = significant accumulation; >30 = excessive accumulation with AKI risk → inform ICU team to hold next mannitol dose. This is one of the most important bedside calculations in neurosurgical ICU care."
          }
        ]
      },
      {
        h: "🧪 Carbonic Anhydrase Inhibitors — Acetazolamide: Mechanism, Uses & Toxicity",
        a: `Acetazolamide is pharmacologically unique — by blocking a single enzyme, it simultaneously alters urine pH, creates metabolic acidosis, reduces aqueous humour production, stimulates ventilation, and prevents altitude sickness. Each of these effects flows from the same enzymatic inhibition at different anatomical sites. Understanding the enzyme is the key to understanding every use.`,
        c: `CARBONIC ANHYDRASE (CA) — THE TARGET ENZYME:
Catalyses: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−
Located in: (1) PCT luminal brush border and intracellular; (2) Ciliary body of eye; (3) Choroid plexus of brain; (4) Erythrocytes; (5) Gastric mucosa

DRUGS:
→ ACETAZOLAMIDE: systemic; oral 250 mg QDS or 500 mg BD (SR); IV available; sulfonamide structure
→ DORZOLAMIDE: topical ophthalmic (2% drops); minimal systemic absorption; used for glaucoma
→ BRINZOLAMIDE: topical ophthalmic; same indication as dorzolamide; more comfortable (less stinging)
→ METHAZOLAMIDE: oral; longer t½ than acetazolamide; less used

MECHANISM IN THE PROXIMAL TUBULE:
Normal PCT: CA catalyses → H+ secreted into lumen via Na+/H+ exchanger → H+ + HCO3− → H2CO3 → CO2 + H2O (reabsorbed) → net NaHCO3 reabsorption

Acetazolamide blocks CA:
→ Less H+ generated → less Na+/H+ exchange → less NaHCO3 reabsorbed
→ HCO3− passes into urine → ALKALINE URINE
→ Plasma HCO3− falls → METABOLIC ACIDOSIS (self-limiting: acidosis reduces CA inhibition effect as less HCO3− available to work on)
→ Na+ excretion increased (moderate, ~5%) — not a powerful natriuretic
→ K+ loss (increased distal K+ secretion from increased Na+ delivery)

CLINICAL USES:

1. GLAUCOMA (PRIMARY SYSTEMIC USE):
→ Mechanism: CA inhibition in CILIARY BODY → ↓ aqueous humour production → ↓ IOP
→ Reduces aqueous by ~50%
→ Oral: 250 mg QDS or 500 mg SR BD
→ Topical (dorzolamide/brinzolamide): less IOP reduction but no systemic effects
→ Acute angle-closure glaucoma: IV acetazolamide 500 mg (faster onset) as bridge to surgery

2. ALTITUDE SICKNESS (ACUTE MOUNTAIN SICKNESS — AMS):
→ At altitude: hypobaric hypoxia → hyperventilation → respiratory alkalosis → inhibits further respiratory drive (peripheral chemoreceptors sense ↑ pH → reduce drive)
→ Acetazolamide forces bicarbonate excretion → METABOLIC ACIDOSIS → central chemoreceptors stimulated (↓ pH + ↓ PaCO2 baseline) → MAINTAINED HYPERVENTILATION → higher PaO2
→ This is chemical acclimatisation — not a cure but a physiological bridge
→ Dose: 125–250 mg BD starting 24–48h BEFORE ascent; continue for 2 days at altitude
→ Side effect at altitude: forces greater diuresis (helpful — reduces mild AMS oedema)
→ Contraindicated: sulfonamide allergy

3. IDIOPATHIC INTRACRANIAL HYPERTENSION (PSEUDOTUMOUR CEREBRI):
→ CA inhibition in CHOROID PLEXUS → ↓ CSF production → ↓ ICP
→ First-line pharmacological treatment
→ Dose: 500–2000 mg/day in divided doses; titrate to symptom control
→ Monitor: visual fields (papilloedema), weight (obesity is a risk factor — weight loss also reduces ICP)

4. METABOLIC ALKALOSIS CORRECTION:
→ Acetazolamide increases urinary HCO3− excretion → corrects post-diuretic contraction alkalosis when diuretics cannot be stopped (e.g., HF with metabolic alkalosis)
→ Dose: 250–500 mg OD–BD for short-term correction

5. EPILEPSY (ADJUNCT):
→ Mechanism incompletely understood — possible CO2 accumulation effect + direct carbonic acid effects in brain
→ Adjunct for absence seizures and catamenial epilepsy (seizures around menstruation — acetazolamide reduces cyclical neuronal excitability)

6. URINE ALKALINISATION:
→ Alkaline urine traps weak acid drugs in ionised form → ↑ excretion
→ Uses: aspirin overdose (with NaHCO3 primarily), methotrexate high-dose clearance, cystine stone prevention (keep urine pH >6.5)

ADVERSE EFFECTS:
→ METABOLIC ACIDOSIS: dose-dependent; self-limiting but significant in CKD or hepatic failure
→ HYPOKALAEMIA: increased distal K+ secretion
→ PARAESTHESIAE (TINGLING): very common; hands, feet, perioral; due to CO2 accumulation (CA inhibited in erythrocytes → less CO2 transport); not dangerous but frequently causes discontinuation
→ RENAL STONES (CALCIUM PHOSPHATE): alkaline urine + ↓ citrate excretion → calcium phosphate precipitates; risk increases with prolonged use
→ SULFONAMIDE HYPERSENSITIVITY: aplastic anaemia, agranulocytosis, thrombocytopenia (rare but potentially fatal); Stevens-Johnson syndrome
→ TERATOGENICITY: animal data shows limb defects; AVOID in pregnancy
→ DROWSINESS, FATIGUE, TASTE ALTERATION (metallic taste — common)

CONTRAINDICATIONS:
→ SULFONAMIDE ALLERGY: cross-reactivity with all sulfonamide drugs
→ HEPATIC CIRRHOSIS: CA inhibition impairs NH4+ metabolism → hepatic encephalopathy risk (ammonia cannot be converted to urea → accumulates)
→ SEVERE CKD: accumulates; metabolic acidosis worsened; electrolyte disturbances amplified
→ ADRENAL FAILURE: cannot generate cortisol response to acidosis
→ HYPONATRAEMIA or HYPOKALAEMIA: worsened by drug`,
        kp: [
          "Acetazolamide blocks CA → less H+/HCO3− cycling in PCT → alkaline urine + metabolic acidosis (self-limiting); useful for glaucoma (ciliary body), altitude sickness (forces acclimatisation), idiopathic intracranial hypertension (choroid plexus), metabolic alkalosis correction",
          "Altitude sickness mechanism: acetazolamide forces metabolic acidosis → stimulates hyperventilation at maintained rate → higher PaO2 at altitude; start 24–48h BEFORE ascent",
          "Contraindicated in sulfonamide allergy (cross-reactivity), hepatic cirrhosis (NH4+ metabolism impaired → encephalopathy), severe CKD",
          "Paraesthesiae (tingling in hands/feet) is the most common side effect — due to CO2 accumulation (CA inhibited in RBCs); warn patients to prevent unnecessary discontinuation",
          "Renal stones (calcium phosphate): alkaline urine + ↓ citrate with prolonged acetazolamide use; encourage high fluid intake and monitor urinary pH"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Acetazolamide in hepatic failure is contraindicated because of the NH4+/urea cycle dependence on CA. In the liver, CA converts CO2 + H2O → H2CO3 → H+ + HCO3−; the H+ is used to convert NH3 (toxic) → NH4+ (less toxic, excreted in urine). Acetazolamide inhibits this → NH3 accumulates → hepatic encephalopathy. This is why cirrhotics on acetazolamide can develop acute encephalopathy. Additionally, metabolic acidosis from acetazolamide is poorly tolerated in cirrhotics who have reduced hepatic buffering capacity. Both mechanisms converge to make acetazolamide dangerous in liver disease."
          },
          {
            role: "doctor", type: "clinical",
            text: "Idiopathic intracranial hypertension (IIH) management with acetazolamide: the IIH Treatment Trial (JAMA 2014) — acetazolamide + low-calorie diet superior to diet alone in visual field improvement. Typical dosing: start 500 mg BD (250 mg BD in smaller patients), titrate up to 4 g/day based on response and tolerability. Main limiting factors: paraesthesiae (occurs in ~40%), GI upset, metallic taste, fatigue. The paraesthesiae can be partially offset by oral potassium supplementation (corrects associated hypokalaemia). Monitor visual fields monthly — papilloedema is the key danger sign."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Altitude sickness prophylaxis counselling with acetazolamide: (1) Start 24–48h before ascent to allow physiological acclimatisation to begin; (2) Dose 125–250 mg BD — not 500 mg (higher doses increase side effects without adding AMS prevention benefit); (3) Common side effects: tingling (harmless, very common — warn all patients), increased urination, blurred vision (mild); (4) Contraindicated in sulfonamide allergy — ask before dispensing; (5) Continue for 2 days after reaching highest altitude; (6) Does NOT prevent severe altitude illness (HACE, HAPE) — descent is the definitive treatment for severe altitude sickness."
          },
          {
            role: "nurse", type: "clinical",
            text: "Acetazolamide IV for acute angle-closure glaucoma in A&E: administer 500 mg IV slowly over 5 minutes; expect nausea at this dose — have antiemetic ready; monitor urine output (expect increased diuresis within 30 min); check blood glucose in diabetics (acetazolamide can alter glucose metabolism); document baseline visual acuity and pain score; reassess IOP response at 30 and 60 minutes. IV acetazolamide lowers IOP within 30 min — it is a bridge to laser iridotomy or surgical management, not a definitive treatment."
          },
          {
            role: "labtech", type: "practical",
            text: "Arterial blood gas interpretation in patients on acetazolamide: expect METABOLIC ACIDOSIS (↓ HCO3−, ↓ pH, compensatory ↓ PaCO2 from hyperventilation). This is predictable and expected. Do NOT flag this as a pathological finding without clinical context. In patients on acetazolamide for IIH or altitude prophylaxis, HCO3− of 18–20 mEq/L is therapeutic, not dangerous. Alert the clinician if pH falls below 7.30 or HCO3− below 15 — at this level, acidosis may be exceeding the therapeutic range and dose reduction should be considered."
          }
        ]
      }
    ],
    ev: "ATLS Guidelines 2018 — TBI Management; IIH Treatment Trial JAMA 2014; NICE Head Injury Guidelines 2023; Wilderness Medical Society AMS Guidelines 2019; KDIGO AKI Guidelines 2012; Acetazolamide Cochrane Review — Altitude Sickness"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 8 — ACE Inhibitors & ARBs in Renal Disease
  // ────────────────────────────────────────────────────────
  {
    id: 8, num: "08", icon: "🫀", free: false, dur: "2h 30m", lessons: 6, color: "#dc2626",
    title: "ACE Inhibitors & ARBs in Renal Disease",
    sub: "Renoprotection Beyond Blood Pressure — RAAS Blockade & the Glomerulus",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "A drug that raises creatinine by 20% in the first two weeks is not harming the kidney — it is protecting it. Understanding why ACE inhibitors and ARBs cause an expected creatinine rise, and when that rise should trigger alarm rather than reassurance, is one of the most important distinctions in all of nephrology.",
    story: `Nephrology Outpatient Clinic, Tema General Hospital, Greater Accra.

Mr. Ebo Quansah, 48, has had type 2 diabetes for 14 years. His GP refers him urgently: "Creatinine has risen from 92 to 118 μmol/L since starting lisinopril 10 mg three weeks ago — possible ACEi nephrotoxicity. Please review."

Dr. Afia Tamakloe, the nephrologist, reads the referral and smiles slightly. She reviews his urine ACR: 68 mg/mmol at last check, now 41 mg/mmol. His BP: 144/90 before lisinopril, now 128/78.

"Mr. Quansah," she says, "your kidney function numbers have gone up slightly. But your kidney protein leakage has gone down by 40%. And your blood pressure is well controlled. Your GP was right to check — but this is exactly what we want to see."

"So my kidneys are not getting worse?"

"Your creatinine rise is a sign the drug is working — reducing the pressure inside your kidney filters. That is renoprotection. The creatinine rise is the expected effect of a drug doing its job correctly. Stopping it would be the mistake."`,
    sections: [
      {
        h: "🔬 RAAS in Renal Disease — How ACEi & ARBs Protect the Kidney",
        a: `Angiotensin II is not just a blood pressure hormone — in the context of renal disease, it is a fibrotic, hypertensive, and proteinuric driver that progressively destroys nephron mass. ACE inhibitors and ARBs interrupt this process at different points in the same pathway, and their renoprotective effect is distinct from and additional to their antihypertensive effect.`,
        c: `THE RAAS IN RENAL DISEASE — THE PROBLEM:
In CKD and diabetic nephropathy, the intrarenal RAAS is tonically overactivated:
→ Ang II constricts EFFERENT arteriole >> afferent → raises intraglomerular hydraulic pressure
→ High filtration pressure → podocyte mechanical stress → podocyte effacement → PROTEINURIA
→ Ang II activates TGF-β in mesangial cells and tubular cells → ECM deposition → GLOMERULOSCLEROSIS
→ Aldosterone (from Ang II stimulation) → podocyte injury + interstitial fibrosis
→ NET RESULT: progressive nephron loss → CKD progression

ACE INHIBITORS — MECHANISM:
Drugs: LISINOPRIL 5–40 mg OD; RAMIPRIL 2.5–10 mg OD (not a prodrug — directly active); ENALAPRIL 5–40 mg OD–BD (prodrug → enalaprilat); CAPTOPRIL 12.5–50 mg TDS; PERINDOPRIL 4–8 mg OD

Mechanism:
→ Block ACE (kininase II) → ↓ Ang I → Ang II conversion
→ ↓ Ang II → efferent arteriole DILATES → ↓ intraglomerular pressure → ↓ podocyte stress
→ ↓ TGF-β → ↓ glomerulosclerosis progression
→ ↓ Aldosterone → ↓ Na+/water retention + ↓ podocyte/interstitial fibrosis
→ ↑ Bradykinin (ACE also degrades bradykinin) → vasodilation + cough + angioedema

ARBs — MECHANISM:
Drugs: LOSARTAN 25–100 mg OD (+ uricosuric); VALSARTAN 80–320 mg OD; IRBESARTAN 150–300 mg OD; CANDESARTAN 4–32 mg OD; TELMISARTAN 40–80 mg OD (longest t½); OLMESARTAN 10–40 mg OD

Mechanism:
→ Block AT1 receptor → same downstream effects as ACEi (↓ efferent constriction, ↓ TGF-β, ↓ aldosterone)
→ Allow Ang II to stimulate AT2 receptor → vasodilation + anti-proliferative + anti-fibrotic
→ Do NOT affect bradykinin → NO cough; NO angioedema (1–2% cross-reactivity — monitor if switching after ACEi angioedema)

THE EXPECTED CREATININE RISE — A MARKER OF RENOPROTECTION:
→ ACEi/ARBs dilate efferent arteriole → ↓ filtration pressure → ↓ GFR → creatinine rises
→ ACCEPTABLE RISE: ≤30% above baseline in first 2 weeks
→ This rise CONFIRMS the drug is achieving its haemodynamic renoprotective effect
→ DO NOT STOP based on this rise — continuing provides long-term nephron protection
→ INVESTIGATE if: rise >30%, abrupt, or associated with other AKI features
→ Sudden large rise (>50% or >200 μmol/L absolute in known CKD) → investigate for BILATERAL RENAL ARTERY STENOSIS

BILATERAL RENAL ARTERY STENOSIS (RAS) — ABSOLUTE CONTRAINDICATION:
→ In RAS, renal perfusion is critically reduced → RAAS massively activated → efferent constriction is the ONLY mechanism maintaining GFR
→ ACEi/ARBs remove this efferent constriction → acute severe renal failure
→ Clinical clues: flash pulmonary oedema (bilateral RAS), resistant hypertension, asymmetric kidneys on imaging, bruit over renal arteries, atherosclerotic disease elsewhere
→ Diagnosis: CT angiography or MR angiography; Doppler ultrasound (less sensitive)

KEY PHARMACOLOGICAL DIFFERENCES WITHIN CLASS:
CAPTOPRIL: sulfhydryl group → chelates zinc at ACE active site; rash and taste disturbance (sulfhydryl-specific); short t½ (2h) requires TDS dosing; active drug (not prodrug)
LISINOPRIL: not a prodrug → active immediately; most commonly used in Ghana; renally excreted → dose reduce in CKD
RAMIPRIL: prodrug → ramiprilat; HOPE trial (post-MI, high CV risk); strong tissue ACE affinity
ENALAPRIL: prodrug → enalaprilat; IV enalaprilat available for hypertensive emergencies
PERINDOPRIL: high tissue ACE affinity; EUROPA trial (stable CAD); once-daily

LOSARTAN unique properties:
→ Only ARB with URICOSURIC effect (blocks URAT1 renal urate reabsorber) → lowers uric acid by ~10–15%
→ Particularly useful in hypertension + gout (where thiazides would worsen uric acid)
→ CYP2C9 metabolism → genetic variants (CYP2C9*3) → reduced losartan-to-active-metabolite conversion → reduced efficacy in some patients`,
        kp: [
          "ACEi/ARBs dilate efferent arteriole → ↓ intraglomerular pressure → ↓ proteinuria + ↓ glomerulosclerosis; creatinine rise ≤30% in 2 weeks is EXPECTED and BENEFICIAL — do not stop",
          "Bilateral renal artery stenosis: efferent constriction is the ONLY mechanism maintaining GFR; ACEi/ARBs remove it → acute renal failure; absolute contraindication — investigate when sudden >50% creatinine rise after starting",
          "ACEi cough is bradykinin-mediated (class effect — all ACEi); switch to ARB; ARBs do not affect bradykinin metabolism (no cough); angioedema is also bradykinin-mediated — never rechallenge with any ACEi",
          "Losartan unique: only uricosuric ARB (blocks URAT1); preferred when hypertension + gout coexist (thiazides would worsen uric acid); CYP2C9 metabolism — genetic variants affect conversion to active metabolite",
          "Dual ACEi + ARB (ONTARGET trial): no additional renoprotection; excess AKI, hyperkalaemia, hypotension — CONTRAINDICATED as routine combination"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The efferent arteriole distinction is the most important haemodynamic concept in renal pharmacology. Ang II preferentially constricts the efferent arteriole > afferent. This MAINTAINS GFR in low-perfusion states (HF, RAS, dehydration) by raising filtration pressure. ACEi/ARBs reduce this efferent constriction → filtration pressure falls → creatinine rises. This is therapeutic (reduces hyperfiltration damage) in most patients. But in bilateral RAS, efferent constriction is ALL that is maintaining GFR — remove it and GFR collapses. Same pharmacological action: beneficial effect in one context, life-threatening in another. The context is everything."
          },
          {
            role: "doctor", type: "clinical",
            text: "The landmark renoprotection trials establish when ACEi/ARBs are mandatory regardless of BP: CAPTOPRIL STUDY (1993) — captopril halved risk of ESRD and creatinine doubling in T1DM nephropathy vs placebo, with similar BP control — proving direct renoprotection beyond BP. RENAAL (2001) — losartan reduced ESRD by 28% in T2DM + nephropathy. IDNT (2001) — irbesartan reduced ESRD by 23% vs amlodipine (same BP). All three proved the mechanism was intrarenal, not just antihypertensive. Implication: even a normotensive patient with CKD + significant proteinuria (UACR >30 mg/mmol) benefits from ACEi/ARB — the drug target is the glomerulus, not the BP."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "ACEi cough prevalence in West Africa: 20–25% of Ghanaian patients on ACEi develop the dry persistent cough (compared to 5–10% in European populations). The mechanism is bradykinin accumulation — class effect of all ACEi, not dose-dependent, not preventable by dose reduction. Management: document clearly in the patient record as 'ACEi-associated cough — switch to ARB'; switch to losartan or valsartan (provide equivalent renoprotection without bradykinin effect). Never label this as 'recurrent upper respiratory infection' or 'harmattan cough' without ruling out the most common cause in a patient on ACEi."
          },
          {
            role: "nurse", type: "clinical",
            text: "Angioedema from ACEi is a medical emergency that can develop days to years after starting the drug — not just at initiation. Recognition: sudden facial swelling (especially lips, tongue, periorbital), throat tightness, change in voice quality, stridor in a patient on lisinopril/enalapril/ramipril. Action: call for emergency help immediately; the airway is at risk; administer IM adrenaline 500 mcg if airway compromise; IV hydrocortisone and antihistamine as adjuncts. Document prominently: 'ACE INHIBITOR — ANGIOEDEMA — DO NOT RECHALLENGE WITH ANY ACEi.' This must be in the allergy section of every future hospital encounter."
          },
          {
            role: "labtech", type: "practical",
            text: "UACR (urine albumin-to-creatinine ratio) is the primary monitoring tool for CKD renoprotection therapy response: collect a first-morning void (most concentrated, reduces day-to-day variability); report in mg/mmol (SI) or mg/g (non-SI); normal <3 mg/mmol; microalbuminuria 3–30; macroalbuminuria >30. A >30% reduction in UACR after starting ACEi/ARB indicates therapeutic renoprotection is occurring — this is the monitoring target alongside creatinine stability. Rising UACR despite ACEi/ARB = progressive disease requiring intensification (add SGLT2i per KDIGO 2024)."
          }
        ]
      },
      {
        h: "💊 Evidence Base, Clinical Uses & Prescribing Framework",
        a: `ACEi and ARBs are among the most evidence-rich drugs in medicine for renoprotection. But clinical practice in Ghana requires adapting that evidence to local realities — prevalent hypertension, high rates of undiagnosed CKD, HBV-associated kidney disease, and the high incidence of ACEi cough in West African populations. This section translates the evidence into actionable prescribing decisions.`,
        c: `EVIDENCE BASE — KEY TRIALS:

DIABETIC NEPHROPATHY:
→ CAPTOPRIL STUDY (Lewis 1993): T1DM + nephropathy → captopril 50 mg TDS vs placebo; 50% reduction in ESRD and creatinine doubling at similar BP → first proof of direct renoprotection
→ MICRO-HOPE (Ramipril HOPE substudy): T2DM + high CV risk → ramipril reduced new nephropathy, microalbuminuria progression
→ RENAAL (2001): T2DM + nephropathy → LOSARTAN 100 mg → 28% reduction ESRD; 25% reduction creatinine doubling
→ IDNT (2001): T2DM + nephropathy → IRBESARTAN 300 mg → 23% reduction ESRD vs amlodipine (same BP) → proves effect is renoprotective not antihypertensive

NON-DIABETIC CKD:
→ AIPRI / REIN / REIN-2: ramipril reduces proteinuria and slows GFR decline in non-diabetic CKD with proteinuria ≥1 g/24h
→ Benefit most pronounced when proteinuria >0.5 g/24h — this is the threshold for ARB/ACEi renoprotection in non-diabetic CKD

CARDIOVASCULAR (RENAL ENDPOINT DATA):
→ HOPE (NEJM 2000): ramipril 10 mg → 22% CV event reduction + renal protection in high CV risk patients with/without DM
→ EUROPA: perindopril in stable CAD → CV events + reduced new renal dysfunction

DUAL BLOCKADE — WHAT DOES NOT WORK:
→ ONTARGET (NEJM 2008): telmisartan + ramipril vs either alone → NO additional renoprotection; INCREASED AKI, hyperkalaemia, hypotension → combination CONTRAINDICATED for routine use
→ Exception: specialist-supervised short-term use in highly selected severe proteinuria cases (IgA nephropathy) — not standard practice

CURRENT CLINICAL USES:

DIABETIC NEPHROPATHY (T1DM and T2DM):
→ ACEi first-line in T1DM (captopril evidence strongest); ACEi or ARB in T2DM
→ Initiate at MICROALBUMINURIA stage (UACR >3 mg/mmol) even if normotensive — direct glomerular benefit
→ Target UACR reduction >30%

NON-DIABETIC CKD + PROTEINURIA:
→ ACEi or ARB if UACR >30 mg/mmol (moderately to severely increased)
→ IgA nephropathy, FSGS, lupus nephritis (all classes) — mandatory antiproteinuric treatment
→ BP target <130/80 mmHg (all CKD with proteinuria)

HYPERTENSION IN CKD:
→ First-line when proteinuria present (ACEi/ARB mandatory)
→ When no proteinuria: any first-line agent acceptable; ACEi/ARB still preferred by most guidelines

HEART FAILURE (HFrEF):
→ ACEi (CONSENSUS, SOLVD-T) or ARB if ACEi intolerant (Val-HeFT, CHARM-Alternative)
→ ARNI (sacubitril/valsartan — PARADIGM-HF): superior to enalapril for HFrEF outcomes; now preferred initial RAAS therapy in HFrEF
→ CANNOT combine ACEi with ARNI (both affect bradykinin → angioedema risk)

SCLERODERMA RENAL CRISIS:
→ CAPTOPRIL drug of choice — reverses microvascular angiopathy; start immediately at diagnosis even if BP not yet elevated

MONITORING AND PRESCRIBING PROTOCOL:

Before starting ACEi/ARB:
→ Baseline: U&E (K+, creatinine), UACR, BP
→ Rule out bilateral RAS (if clinical clues present)
→ Check for: volume depletion (may need to withhold diuretic temporarily), concurrent nephrotoxins, CKD staging

First 2 weeks:
→ Recheck K+ and creatinine at 1–2 weeks
→ Acceptable: SCr rise ≤30%; K+ rise <0.5 mEq/L
→ Alarm: SCr rise >30% → STOP and investigate for bilateral RAS

Ongoing:
→ U&E every 3–6 months (CKD stages 3–4), monthly (stages 4–5 or recent dose change)
→ UACR every 6–12 months — track treatment response
→ BP at every visit — target <130/80 in CKD + proteinuria

PERIOPERATIVE MANAGEMENT:
→ HOLD ACEi/ARBs on the morning of surgery (risk of refractory hypotension under anaesthesia — VISION study)
→ Restart 24–48h post-operatively when euvolaemia confirmed and creatinine stable
→ Do NOT restart in early post-op period if patient remains hypotensive or oliguric`,
        kp: [
          "ACEi in T1DM + nephropathy (CAPTOPRIL study), ARBs in T2DM + nephropathy (RENAAL, IDNT) — proven renoprotection beyond BP; initiate at microalbuminuria (UACR >3 mg/mmol) even if normotensive",
          "ONTARGET trial: ACEi + ARB dual blockade = more AKI, hyperkalaemia, hypotension, no benefit — CONTRAINDICATED; ARNI (sacubitril/valsartan) superior to enalapril in HFrEF (PARADIGM-HF) but cannot be combined with ACEi",
          "Hold ACEi/ARBs morning of surgery — refractory intraoperative hypotension risk; restart 24–48h post-op when euvolaemic and creatinine stable",
          "Scleroderma renal crisis: captopril drug of choice — start immediately regardless of BP; specific microvascular mechanism that ACEi uniquely reverses",
          "UACR target: >30% reduction after starting ACEi/ARB confirms renoprotection; rising UACR despite therapy = progressive disease → add SGLT2i (KDIGO 2024)"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The IDNT trial is the strongest evidence that irbesartan's renoprotection is independent of BP: three arms — irbesartan, amlodipine, placebo — all achieved similar BP control. Irbesartan reduced ESRD by 23% vs amlodipine. Since both reduced BP equally, the difference must be intrarenal (↓ efferent constriction, ↓ TGF-β, ↓ proteinuria). This definitively proved that ARBs protect the kidney through haemodynamic and anti-fibrotic mechanisms beyond BP reduction. Apply this logic: a diabetic patient with UACR 45 mg/mmol whose BP is already controlled on amlodipine should still have an ARB added — the benefit is additional and independent."
          },
          {
            role: "doctor", type: "clinical",
            text: "When to investigate for renal artery stenosis after starting ACEi/ARB: the clinical scenario that should trigger investigation is: (1) creatinine rise >50% (not the expected 10–30%); (2) rapid onset (within 48–72h of starting); (3) patient has other features of renovascular disease (flash pulmonary oedema, resistant hypertension on ≥3 drugs, peripheral vascular disease, abdominal bruit, asymmetric kidneys). In these cases, stop the ACEi/ARB, arrange renal Doppler ultrasound or CT angiography, and refer to nephrology. Bilateral RAS in Ghana is most commonly atheromatous — screen patients with diabetes, smoking history, and widespread atherosclerosis."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Sacubitril/valsartan (Entresto) — the ARNI interaction with ACEi: sacubitril inhibits neprilysin (which degrades bradykinin and natriuretic peptides). Combined with valsartan (ARB), it inhibits both neprilysin AND AT1 receptors. If combined with an ACEi: neprilysin inhibition + ACEi both increase bradykinin → severe angioedema risk. MINIMUM 36-HOUR WASHOUT required when switching from ACEi to sacubitril/valsartan. This is not optional — it is a life-threatening drug interaction if not observed. Document this requirement prominently when dispensing ARNI to patients previously on ACEi."
          },
          {
            role: "nurse", type: "clinical",
            text: "First-dose hypotension with ACEi/ARBs: most dangerous in volume-depleted patients (on diuretics, poor oral intake, diarrhoea) and high-renin states (severe HF, bilateral RAS). Advice: give the first dose at bedtime (patient is supine — hypotension less symptomatic); check sitting and standing BP 1h after first dose in high-risk patients; advise patient to sit on the edge of the bed before standing in the morning for the first week; hold the morning diuretic dose on the first day of ACEi initiation to reduce cumulative hypotensive risk."
          },
          {
            role: "labtech", type: "practical",
            text: "Potassium and creatinine monitoring timing after ACEi/ARB initiation: the critical window is 5–14 days after starting or dose-increasing. Steady state is reached in 4–5 half-lives — for lisinopril (t½ 12h) this is 2–3 days; for ramipril (t½ 17h) 3–4 days. Check K+ and creatinine at day 7–10 for a reliable steady-state reading. Checking at 24h gives a partial picture; checking at 4 weeks may miss early hyperkalaemia that resolves before the check. In CKD stages 4–5 patients, weekly K+ for the first month is appropriate — flag K+ >5.5 mEq/L as urgent regardless of symptoms."
          }
        ]
      }
    ],
    ev: "Captopril Study Lewis EJ NEJM 1993; RENAAL Trial NEJM 2001; IDNT Trial NEJM 2001; HOPE Trial NEJM 2000; ONTARGET Trial NEJM 2008; PARADIGM-HF Trial NEJM 2014; VISION Study Lancet 2014; KDIGO CKD Guidelines 2024; ESC Guidelines Chronic Heart Failure 2021"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 9 — Hypertension & the Kidney — Renoprotective Agents
  // ────────────────────────────────────────────────────────
  {
    id: 9, num: "09", icon: "🩸", free: false, dur: "2h 30m", lessons: 6, color: "#9333ea",
    title: "Hypertension & the Kidney — Renoprotective Agents",
    sub: "Building the Evidence-Based Regimen for CKD Hypertension in Ghana",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Hypertension is the second leading cause of kidney failure in sub-Saharan Africa. The choice of antihypertensive agent determines not just blood pressure numbers — it determines the trajectory of an entire kidney over years. Ghana's patient population demands context-specific prescribing that integrates global evidence with local realities.",
    story: `Hypertension-Nephrology Clinic, Korle Bu Teaching Hospital, Accra.

Madam Abena Owusu, 61, sits across from Dr. Kwabena Asante for what feels like the hundredth time. She has had hypertension for 18 years, poorly controlled despite multiple medications. Today's results: BP 176/106 mmHg on three drugs. eGFR 39 mL/min. UACR 145 mg/mmol. She is not diabetic.

"We have been here before," she says wearily. "You keep adding tablets."

Dr. Asante understands her frustration. But today is different. He has three things to add to her regimen — not just drugs, but a strategy.

"Madam Owusu," he says, "your kidneys are declining partly because of your blood pressure, and partly because we have not had the right combination of drugs protecting them. Today we are going to build a proper regimen — not one tablet at a time, but a plan."

He draws out the RAAS-SGLT2i-MRA cascade on a notepad.

"This," he says, pointing to the sketch, "is what your kidneys need."`,
    sections: [
      {
        h: "🏗️ Antihypertensive Drug Classes — Renal Effects & Rational Selection",
        a: `Not all antihypertensives are equal in the kidney. Some reduce blood pressure and incidentally provide renoprotection. Others reduce blood pressure while actually increasing intraglomerular pressure. The distinction is not academic — it determines CKD trajectory over years. This section maps every major antihypertensive class against its renal haemodynamic and fibrotic effects.`,
        c: `ANTIHYPERTENSIVE CLASSES AND THEIR RENAL EFFECTS:

ACEi / ARBs (covered fully in Module 8 — RENOPROTECTIVE ANCHOR):
→ Dilate efferent arteriole → ↓ intraglomerular pressure
→ ↓ TGF-β → ↓ fibrosis
→ Reduce proteinuria independently of BP
→ MANDATORY when proteinuria present (UACR >30 mg/mmol)

CALCIUM CHANNEL BLOCKERS (CCBs):
Dihydropyridines (amlodipine, nifedipine, felodipine):
→ Dilate AFFERENT arteriole preferentially (smooth muscle L-type Ca2+ channel blockade)
→ If used WITHOUT ACEi/ARB: may INCREASE intraglomerular pressure (open afferent without compensating efferent)
→ If used WITH ACEi/ARB: complementary — afferent dilation (CCB) + efferent dilation (ACEi/ARB) = REDUCED intraglomerular pressure bilaterally
→ ACCOMPLISH trial (NEJM 2008): ACEi + amlodipine SUPERIOR to ACEi + HCTZ for renal and CV outcomes
→ Reduce proteinuria LESS than ACEi/ARBs alone but acceptable as combination partner

Non-dihydropyridines (verapamil, diltiazem):
→ Dilate afferent AND efferent arterioles → reduce glomerular pressure
→ Reduce proteinuria independently (useful when ACEi/ARB not tolerated)
→ BUT: negative inotropy — avoid in HFrEF; AV node suppression — caution in bradycardia/heart block
→ Diltiazem INCREASES cyclosporine levels (CYP3A4 inhibition) — critical in transplant patients

BETA-BLOCKERS:
→ Reduce renin secretion (β1 blockade of JG cells) → ↓ Ang II → mild RAAS suppression
→ Carvedilol (α+β): also reduces proteinuria in CKD via α1-mediated efferent dilation
→ Nebivolol: vasodilatory (NO-mediated) + β1-selective — preferred in CKD
→ Atenolol: fe ~90% → accumulates in CKD → QTc prolongation, bradycardia — AVOID, switch to metoprolol or bisoprolol
→ Generally 2nd or 3rd line in CKD hypertension without compelling indication (HF, post-MI, AF)

THIAZIDE/LOOP DIURETICS:
→ Thiazides: lose diuretic efficacy at eGFR <30; BUT antihypertensive effect persists (vascular smooth muscle relaxation)
→ Chlorthalidone/indapamide: preferred for BP in CKD stages 2–3b
→ Loop diuretics (furosemide): essential for volume control in CKD stages 4–5; also antihypertensive via volume depletion

MINERALOCORTICOID RECEPTOR ANTAGONISTS (MRAs):
→ Spironolactone: 4th-line resistant hypertension (PATHWAY-2)
→ Finerenone: added to ACEi + SGLT2i for CKD + T2DM (FIDELIO/FIGARO trials)
→ Anti-fibrotic and antiproteinuric independently of BP reduction

DIRECT VASODILATORS:
→ HYDRALAZINE: arteriolar vasodilator; used in resistant hypertension and hypertensive emergencies (especially pre-eclampsia); reflex tachycardia → give with beta-blocker; lupus-like syndrome with high doses
→ MINOXIDIL: very potent; retained for resistant hypertension as last resort; causes fluid retention (must combine with loop diuretic) and hirsutism; reflex tachycardia (give with beta-blocker)

ALPHA-1 BLOCKERS (DOXAZOSIN, PRAZOSIN):
→ Vasodilation; no direct renoprotection
→ Useful in: resistant hypertension (4th/5th line), BPH with hypertension (doxazosin treats both)
→ Postural hypotension — significant in elderly Ghanaian patients

CENTRAL AGENTS (MOXONIDINE, METHYLDOPA):
→ Moxonidine: I1 imidazoline receptor agonist; reduces sympathetic outflow; useful in resistant hypertension
→ Methyldopa: safe in pregnancy (first-line); haemolytic anaemia risk; sedation

BP TARGETS IN CKD — CURRENT GUIDELINES:
→ CKD + PROTEINURIA (UACR >30 mg/mmol): <130/80 mmHg (KDIGO 2021, ESC 2018)
→ CKD WITHOUT PROTEINURIA: <140/90 mmHg (KDIGO 2021)
→ ELDERLY (>75) with frailty: <140/90 mmHg — aggressive lowering increases falls and AKI risk (SPRINT sub-analysis)
→ SPRINT trial (SBP <120 vs <140): reduced CV events but increased AKI and electrolyte disorders; benefit in CKD was attenuated; individual risk-benefit required
→ SPRINT did NOT include patients with proteinuric CKD, T2DM, or prior stroke — limitations for direct application in Ghana's population`,
        kp: [
          "CCB (amlodipine) dilates AFFERENT arteriole → may increase glomerular pressure if used alone without ACEi/ARB; ACCOMPLISH trial: ACEi + amlodipine superior to ACEi + HCTZ for renal and CV outcomes",
          "Non-dihydropyridine CCBs (verapamil, diltiazem) reduce proteinuria independently; but diltiazem inhibits CYP3A4 → increases cyclosporine levels in transplant patients — critical interaction",
          "Atenolol: fe ~90% → accumulates significantly in CKD; switch to metoprolol succinate (MERIT-HF evidence for HFrEF) or bisoprolol — both hepatically metabolised",
          "BP targets in CKD: <130/80 with proteinuria (UACR >30); <140/90 without proteinuria; individualize in elderly (frailty risk with aggressive targets)",
          "SPRINT trial limitation for Ghana: excluded proteinuric CKD, T2DM, stroke — majority of Ghana's hypertensive CKD population; apply SPRINT findings cautiously"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The ACCOMPLISH trial outcome is frequently tested: ACEi + amlodipine was superior to ACEi + HCTZ for cardiovascular events AND renal outcomes (secondary endpoint). The renal explanation: amlodipine dilates the afferent arteriole, but when combined with an ACEi (which dilates the efferent), BOTH arterioles are dilated — reducing intraglomerular pressure bilaterally. HCTZ combined with ACEi reduces volume but does not provide this dual vascular protection. Clinical implication: when adding a second agent to ACEi/ARB in CKD, prefer a CCB (particularly amlodipine) over a thiazide for renoprotection."
          },
          {
            role: "doctor", type: "clinical",
            text: "Building the renoprotective regimen for a proteinuric CKD patient in Ghana — the 2024 standard of care: STEP 1: ACEi or ARB (mandatory — renoprotective anchor); STEP 2: Add amlodipine 5–10 mg OD (ACCOMPLISH evidence; BP + afferent dilation); STEP 3: Add SGLT2i (empagliflozin/dapagliflozin — KDIGO 2024 recommendation for eGFR >20 + UACR >22 mg/mmol, with or without T2DM); STEP 4: Add finerenone (if T2DM + CKD — FIDELIO/FIGARO evidence); STEP 5: Add loop diuretic for volume (eGFR <30) or chlorthalidone for additional BP control (eGFR >30). This is a 3–5 drug regimen for advanced CKD — each drug has an evidence-based role beyond BP."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Medication adherence in hypertensive CKD patients in Ghana is the biggest gap between evidence and outcomes. Key barriers: cost (ACEi generic lisinopril is affordable; ARBs more expensive; SGLT2i currently expensive — advocate for NHIS inclusion), pill burden (patients on 4–6 medications are less adherent), and lack of symptoms (patients feel well → stop 'unnecessary' pills). Strategies: single-pill combinations when available; blister packs or sachet dispensing; community pharmacy BP monitoring (Accra pharmacies increasingly offering this); SMS medication reminders (Ghana Health Service MHealth initiative)."
          },
          {
            role: "nurse", type: "clinical",
            text: "Blood pressure measurement technique for CKD patients with vascular disease: measure BOTH arms at first visit — a difference >10 mmHg between arms suggests subclavian stenosis or aortic coarctation (more common in atherosclerotic CKD patients); use the HIGHER reading for management decisions. For home monitoring: ensure patient uses a validated automated device; measure after 5 minutes rest, no caffeine or smoking for 30 minutes; two readings 1 minute apart, record both. Ambulatory BP monitoring (ABPM) is the gold standard — patients with white-coat hypertension and masked hypertension are common in CKD and need ABPM for true BP assessment."
          },
          {
            role: "labtech", type: "practical",
            text: "eGFR trend monitoring is more informative than single eGFR values for assessing CKD progression: calculate rate of eGFR decline (mL/min/1.73m²/year) from at least 3 measurements over 12 months. Normal age-related decline: 1–2 mL/min/year. Rapid progression: >5 mL/min/year = high risk of ESRD within 5 years — urgently refer. When antihypertensive therapy is optimised, the rate of decline should slow. A patient on ACEi + SGLT2i whose eGFR is stable at 35 over 2 years is a therapeutic success — not a failure requiring dose escalation. Report eGFR trends graphically where possible to support clinical review."
          }
        ]
      },
      {
        h: "🚀 SGLT2 Inhibitors — The Renoprotection Revolution",
        a: `SGLT2 inhibitors were developed as glucose-lowering agents. They became renoprotective drugs by accident — and then intentionally. The CREDENCE, DAPA-CKD, and EMPA-KIDNEY trials transformed the standard of care for CKD, demonstrating benefits independent of glucose-lowering, independent of diabetes, and operating through a haemodynamic mechanism that complements everything ACEi/ARBs do. This is the most important pharmacological development in nephrology in two decades.`,
        c: `SGLT2 INHIBITORS — DRUG PROFILES:
→ EMPAGLIFLOZIN (Jardiance): 10–25 mg OD; EMPA-REG OUTCOME (CV), EMPA-KIDNEY (renal)
→ DAPAGLIFLOZIN (Farxiga): 10 mg OD; DAPA-CKD (renal, including non-diabetics), DAPA-HF
→ CANAGLIFLOZIN (Invokana): 100–300 mg OD; CREDENCE (T2DM + CKD), CANVAS (CV)
→ ERTUGLIFLOZIN: 5–15 mg OD; less renal evidence

MECHANISM — FOUR COMPLEMENTARY RENOPROTECTIVE PATHWAYS:

1. TUBULOGLOMERULAR FEEDBACK (PRIMARY HAEMODYNAMIC MECHANISM):
→ SGLT2 blocked in PCT → ↓ glucose AND Na+ reabsorption → ↑ NaCl delivery to MACULA DENSA
→ Macula densa senses ↑ NaCl → TUBULOGLOMERULAR FEEDBACK (TGF) activated → adenosine released → AFFERENT ARTERIOLE CONSTRICTS
→ ↓ intraglomerular pressure → ↓ glomerular hyperfiltration → ↓ podocyte stress → ↓ proteinuria
→ This mechanism is INDEPENDENT OF GLUCOSE LOWERING — explains benefit in non-diabetic CKD

2. HAEMODYNAMIC EFFECTS (SYSTEMIC):
→ Natriuresis + glycosuria → ↓ body weight → ↓ BP (3–5 mmHg systolic)
→ ↓ RAAS activation (volume reduction reduces renin)
→ ↑ Erythropoietin-like effect → ↑ Hb (improved tubular O2 delivery)

3. METABOLIC EFFECTS:
→ Ketonaemia (mild) → ketones as alternative fuel for tubular cells → ↓ tubular metabolic stress
→ ↓ Uric acid (some SGLT2i — empagliflozin) → uricosuric effect

4. ANTI-INFLAMMATORY / ANTI-FIBROTIC:
→ ↓ NF-κB activation → ↓ pro-inflammatory cytokines in tubular cells
→ ↓ TGF-β signalling → ↓ interstitial fibrosis

KEY TRIALS:
CREDENCE (2019 — NEJM): canagliflozin 100 mg in T2DM + CKD (eGFR 30–90, UACR >300) → 30% reduction in primary renal composite (ESRD, doubling creatinine, renal death) vs placebo; ALL on ACEi/ARB background

DAPA-CKD (2020 — NEJM): dapagliflozin 10 mg in CKD (eGFR 25–75, UACR >22) — 33% with NO DIABETES → 39% reduction in primary composite (≥50% eGFR decline, ESRD, renal death, CV death); FIRST TRIAL TO SHOW SGLT2i BENEFIT IN NON-DIABETIC CKD

EMPA-KIDNEY (2022 — NEJM): empagliflozin 10 mg in CKD (eGFR 20–45 OR eGFR 45–90 with UACR >200) — 46% without diabetes → 28% reduction in disease progression or CV death; LOWEST eGFR STUDIED (down to eGFR 20)

CURRENT KDIGO 2024 RECOMMENDATIONS:
→ SGLT2i recommended for: CKD + T2DM + eGFR >20 + UACR >22 mg/mmol
→ SGLT2i recommended for: CKD WITHOUT T2DM + eGFR >20 + UACR >22 mg/mmol (based on DAPA-CKD, EMPA-KIDNEY)
→ SGLT2i + ACEi/ARB = STANDARD RENOPROTECTION DUAL BACKBONE

IMPORTANT PRESCRIBING POINTS:
→ Glucose-lowering efficacy LOST at eGFR <30 (insufficient glucose filtered to cause meaningful glycosuria)
→ RENOPROTECTION MAINTAINED down to eGFR 20 — do NOT stop SGLT2i based on glucose numbers alone in CKD
→ HOLD 3–4 days before surgery (perioperative DKA risk — euglycaemic DKA is a class complication)
→ Genitourinary infections: more frequent (especially women); manage symptomatically; rarely requires drug cessation
→ Fournier's gangrene: rare but serious — perineal necrotising fasciitis; warn patients to report genital swelling, pain, or redness

ADVERSE EFFECTS:
→ Genitourinary infections (most common): vulvovaginal candidiasis, balanitis → treat with antifungal; good hygiene
→ UTI: modest increase; serious urosepsis rare
→ Euglycaemic DKA: occurs without marked hyperglycaemia; triggered by: fasting, surgery, illness, alcohol, low carb diet; hold perioperatively
→ Fournier's gangrene: rare; perineal pain/swelling in diabetic → emergency surgical referral
→ Volume depletion/hypotension: especially with concurrent diuretics; elderly patients
→ Limb amputations: canagliflozin-specific signal (CANVAS trial) — mechanism uncertain; monitor in peripheral vascular disease`,
        kp: [
          "SGLT2i renoprotection primary mechanism: ↑ NaCl delivery to macula densa → TGF activation → afferent constriction → ↓ intraglomerular pressure — INDEPENDENT OF GLUCOSE LOWERING; explains DAPA-CKD benefit in non-diabetic CKD",
          "DAPA-CKD (2020): dapagliflozin reduces CKD progression in patients WITHOUT diabetes — first proof of SGLT2i renoprotection independent of glycaemic effect; landmark paradigm shift",
          "Glucose-lowering lost at eGFR <30 but renoprotection maintained to eGFR 20 — do NOT stop SGLT2i based on loss of glucose-lowering effect in advanced CKD",
          "Hold SGLT2i 3–4 days before surgery — euglycaemic DKA risk; restart when eating normally post-operatively",
          "KDIGO 2024: SGLT2i + ACEi/ARB = dual renoprotective backbone for CKD + proteinuria regardless of diabetes status (eGFR >20, UACR >22 mg/mmol)"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The DAPA-CKD trial is the most important recent trial for renal pharmacology examinations. Key facts: (1) Population: CKD eGFR 25–75 + UACR >22 mg/mmol — 33% had NO DIABETES; (2) Drug: dapagliflozin 10 mg OD; (3) ALL patients on ACEi/ARB background; (4) Outcome: 39% reduction in primary composite (ESRD, ≥50% eGFR decline, renal/CV death); (5) Benefit was CONSISTENT in both diabetic and non-diabetic subgroups — proving the mechanism is haemodynamic (TGF), not glycaemic. This trial extended SGLT2i indication from diabetes to CKD per se."
          },
          {
            role: "doctor", type: "clinical",
            text: "Initiating SGLT2i in a Ghanaian CKD patient — practical checklist: (1) Confirm eGFR >20 (renoprotection maintained; start before eGFR falls further); (2) UACR >22 mg/mmol (proteinuria confirms SGLT2i benefit); (3) Already on ACEi/ARB (SGLT2i adds to, not replaces, RAAS blockade); (4) No history of recurrent genitourinary infections (relative caution); (5) Ensure good genital hygiene counselling and patient education; (6) Sick day rule: HOLD empagliflozin/dapagliflozin during acute illness with reduced oral intake, fever, or surgical procedures — DKA risk. Currently empagliflozin (Jardiance) and dapagliflozin (Farxiga) are available in Ghana through select facilities; advocate for NHIS inclusion."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Euglycaemic DKA counselling for SGLT2i patients: unlike classic DKA, blood glucose may be NORMAL or only mildly elevated (typically <14 mmol/L) — this misleads patients and clinicians who do not check ketones. Triggers: fasting (Ramadan), low-carbohydrate diet, major surgery, acute illness with vomiting, alcohol binge. Symptoms: nausea, vomiting, abdominal pain, lethargy, shortness of breath (from metabolic acidosis). Emergency management: stop SGLT2i, IV fluids, insulin even if glucose is normal (DKA treatment standard). Ensure every patient starting an SGLT2i is counselled on sick day rules and when to withhold."
          },
          {
            role: "nurse", type: "clinical",
            text: "Monitoring patients on SGLT2i in the CKD clinic: at each visit check: (1) eGFR and UACR — track renoprotection response; (2) Enquire about genitourinary symptoms (itching, discharge, dysuria) — treat proactively, do not routinely stop drug; (3) BP and orthostatic readings — SGLT2i cause 3–5 mmHg SBP reduction; may need diuretic dose reduction; (4) Weight (natriuresis causes 1–3 kg weight loss in first weeks — reassure patient this is expected); (5) Signs of volume depletion in elderly: light-headedness, reduced skin turgor, raised creatinine. The expected initial eGFR dip of 3–5 mL/min after starting SGLT2i is haemodynamic and reversible — like the ACEi creatinine rise, it does not indicate harm."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine glucose in SGLT2i-treated patients: SGLT2i cause glycosuria (glucose in urine) even in non-diabetic patients. A dipstick positive for glucose in a CKD patient on dapagliflozin or empagliflozin is EXPECTED — it is the drug working, not a diagnostic finding. Do NOT diagnose new diabetes based on urine glucose in a patient on SGLT2i. Serum glucose or HbA1c must be used for diabetes diagnosis in these patients. Additionally: urine osmolality is reduced (SGLT2i causes osmotic diuresis) — note this on reports to prevent misinterpretation as diabetes insipidus."
          }
        ]
      }
    ],
    ev: "ACCOMPLISH Trial NEJM 2008; CREDENCE Trial NEJM 2019; DAPA-CKD Trial NEJM 2020; EMPA-KIDNEY Trial NEJM 2022; SPRINT Trial NEJM 2015; PATHWAY-2 Trial Lancet 2015; KDIGO CKD Guidelines 2024; ISH Global Hypertension Practice Guidelines 2020; Ghana Hypertension Society Guidelines 2020; ESC/ESH Hypertension Guidelines 2018"
  },

];

// ─────────────────────────────────────────────────────────────
// PRE & POST QUIZ EXPORTS — Modules 7–9
// ─────────────────────────────────────────────────────────────

export const RENP_PRE_Q_M7 = [
  {
    q: "Why is mannitol absolutely contraindicated in a patient with anuria?",
    opts: [
      "Mannitol has nephrotoxic metabolites that worsen tubular injury in anuria",
      "Mannitol must be filtered at the glomerulus to exert its diuretic effect; in anuria it cannot be filtered, accumulates in the vasculature, draws fluid from interstitium into the circulation, and causes acute pulmonary oedema",
      "Mannitol is converted to glucose in anuric patients causing dangerous hyperglycaemia",
      "Mannitol crystals block the renal tubules worsening the anuria"
    ],
    ans: 1
  },
  {
    q: "A neurosurgical patient receives repeated mannitol doses for raised ICP. After the 4th dose, serum osmolality is 326 mOsm/kg. What is the priority concern?",
    opts: [
      "The mannitol is not working — switch to furosemide for ICP control",
      "Osmolality >320 mOsm/kg indicates mannitol accumulation with risk of osmotic nephropathy (AKI) — hold further doses and reassess; switch to hypertonic saline if ICP reduction is still needed",
      "This osmolality level is within normal range — continue mannitol",
      "Increased osmolality confirms ICP is under control — reduce monitoring frequency"
    ],
    ans: 1
  },
  {
    q: "A patient on acetazolamide for idiopathic intracranial hypertension reports tingling in both hands and feet. What is the mechanism and correct management?",
    opts: [
      "Peripheral neuropathy from acetazolamide — stop immediately",
      "CO2 accumulation due to CA inhibition in red blood cells (reduced CO2 transport) causing paraesthesiae — this is expected and harmless; reassure patient and continue unless symptoms are intolerable",
      "Hypocalcaemia from renal calcium wasting causing paraesthesiae — check serum calcium",
      "Metabolic acidosis-induced respiratory compensation causing peripheral tingling"
    ],
    ans: 1
  },
  {
    q: "Acetazolamide is contraindicated in hepatic cirrhosis. What is the pharmacological basis?",
    opts: [
      "Acetazolamide is hepatically metabolised and accumulates in cirrhosis causing systemic toxicity",
      "CA inhibition impairs NH4+ formation in the liver (NH3 cannot be converted to NH4+ for urinary excretion), and metabolic acidosis from acetazolamide worsens hepatic buffering — both mechanisms increase risk of hepatic encephalopathy",
      "Acetazolamide increases portal pressure by reducing renal Na+ excretion",
      "Acetazolamide's alkaline urine prevents clearance of hepatotoxic metabolites"
    ],
    ans: 1
  },
  {
    q: "Acetazolamide prevents acute mountain sickness by which mechanism?",
    opts: [
      "Dilating pulmonary vasculature, reducing altitude-induced pulmonary hypertension",
      "Forcing metabolic acidosis via HCO3− excretion, which stimulates maintained hyperventilation despite altitude-induced respiratory alkalosis, raising PaO2",
      "Expanding plasma volume to compensate for altitude-related haemoconcentration",
      "Stimulating erythropoietin production, increasing O2-carrying capacity within hours"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M7 = [
  {
    q: "A patient with a GCS of 8 and CT evidence of diffuse cerebral oedema is given mannitol 20% 1g/kg IV. 25 minutes later, ICP has improved but urine output has dropped significantly. The next dose is due. What should be done?",
    opts: [
      "Give the next mannitol dose on schedule — the ICP improvement confirms it is working",
      "Check serum osmolality and urine output urgently before next dose — rising osmolality approaching 320 mOsm/kg or oliguria developing during mannitol therapy signals accumulation and AKI risk; consider switching to hypertonic saline",
      "Double the next mannitol dose to ensure sustained ICP reduction",
      "Add furosemide 40 mg IV to increase urine output alongside mannitol"
    ],
    ans: 1
  },
  {
    q: "A trekker heading to the Rwenzori mountains starts acetazolamide 250 mg BD 24 hours before ascent. On day 2 at altitude, she reports metallic taste, increased urination, and tingling in her feet. She is concerned about side effects. The correct response is:",
    opts: [
      "Stop acetazolamide — these side effects indicate serious toxicity",
      "Reassure her — metallic taste, increased urination, and peripheral paraesthesiae are expected, common, and harmless side effects of acetazolamide; they confirm the drug is working; continue for 2 days at peak altitude",
      "Reduce dose to 125 mg OD — the full dose is causing excessive side effects",
      "Add potassium supplements only — the other symptoms need no management"
    ],
    ans: 1
  },
  {
    q: "A patient with rhabdomyolysis (CK 98,000 U/L) and oliguria (urine output 20 mL/h) is referred for pharmacological management. Serum creatinine is rising. What is the priority regimen?",
    opts: [
      "Furosemide 200 mg IV bolus immediately to force diuresis and flush myoglobin",
      "Aggressive IV isotonic saline (500–1000 mL/h) targeting urine output >200 mL/h + IV sodium bicarbonate to alkalinise urine to pH >6.5 — myoglobin is more soluble and less tubulotoxic at alkaline pH; furosemide only added once euvolaemic",
      "Mannitol 20% 1g/kg IV — osmotic diuresis to flush myoglobin casts",
      "Haemodialysis immediately — myoglobin must be removed by dialysis"
    ],
    ans: 1
  },
  {
    q: "A patient with chronic open-angle glaucoma is on oral acetazolamide 250 mg QDS. She asks if there is an alternative with fewer systemic side effects. What is the most appropriate recommendation?",
    opts: [
      "Switch to furosemide — also reduces intraocular pressure via a different mechanism",
      "Switch to topical dorzolamide or brinzolamide (topical CA inhibitors) — achieve local IOP reduction in the ciliary body with minimal systemic absorption and none of the systemic side effects of oral acetazolamide",
      "Reduce oral acetazolamide to 125 mg QDS — lower systemic effects at lower dose",
      "Switch to mannitol IV infusions every 6 hours for sustained IOP control"
    ],
    ans: 1
  },
  {
    q: "A patient develops metabolic alkalosis (pH 7.52, HCO3− 36 mEq/L) after aggressive diuresis for heart failure. Furosemide cannot be stopped. Which drug corrects this alkalosis pharmacologically?",
    opts: [
      "IV hydrochloric acid — directly replaces the lost chloride and acid",
      "Acetazolamide 250–500 mg OD — increases renal HCO3− excretion, correcting the alkalosis without requiring diuretic cessation; particularly useful in post-diuretic contraction alkalosis in HF",
      "Spironolactone — blocks aldosterone-driven acid excretion in collecting duct",
      "IV potassium chloride alone — corrects the underlying hypokalaemia driving the alkalosis"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M8 = [
  {
    q: "A patient starts lisinopril 5 mg OD for diabetic nephropathy. Two weeks later, creatinine has risen from 96 to 122 μmol/L (27% increase). UACR has fallen from 68 to 44 mg/mmol. What is the correct interpretation?",
    opts: [
      "Stop lisinopril — acute kidney injury from ACEi nephrotoxicity has occurred",
      "Continue lisinopril — the creatinine rise (≤30%) reflects reduced intraglomerular pressure (expected therapeutic effect); the UACR reduction of 35% confirms renoprotection is occurring",
      "Reduce lisinopril dose to 2.5 mg — the creatinine rise indicates the dose is too high",
      "Add an ARB to provide greater renoprotection despite the creatinine rise"
    ],
    ans: 1
  },
  {
    q: "Which ARB has a unique uricosuric property making it specifically useful in hypertension complicated by gout?",
    opts: [
      "Valsartan — most potent AT1 receptor blockade reduces uric acid indirectly",
      "Losartan — blocks URAT1 renal urate reabsorber, reducing serum uric acid by 10–15%; the only ARB with this uricosuric property",
      "Candesartan — highest AT1 receptor affinity prevents RAAS-driven urate retention",
      "Telmisartan — longest half-life reduces nocturnal urate spikes"
    ],
    ans: 1
  },
  {
    q: "A patient on ramipril develops sudden lip and tongue swelling requiring emergency airway management. The mechanism and management are:",
    opts: [
      "IgE-mediated anaphylaxis to ramipril — adrenaline, antihistamine, steroid; switch to ARB safely",
      "Bradykinin-mediated angioedema (ACE inhibition prevents bradykinin degradation); treat with adrenaline IM, airway support; NEVER rechallenge with any ACEi; ARB can be used with extreme caution (1–2% cross-reactivity)",
      "Allergic reaction to the ramipril excipients — switch to a different ACEi brand",
      "Complement-mediated angioedema; treat with C1-inhibitor concentrate; ACEi rechallenge is safe after resolution"
    ],
    ans: 1
  },
  {
    q: "The ONTARGET trial combined telmisartan with ramipril. What were the results and their clinical implication?",
    opts: [
      "Combination was superior for renal outcomes — dual blockade is now recommended",
      "Combination showed no additional renoprotection versus either agent alone, with significantly more AKI, hyperkalaemia, and hypotension — dual ACEi + ARB therapy is contraindicated for routine use",
      "Combination was safe but not superior — can be used when single-agent control is inadequate",
      "Combination improved cardiac but worsened renal outcomes — use only in heart failure"
    ],
    ans: 1
  },
  {
    q: "A patient on sacubitril/valsartan (ARNI) for HFrEF needs to switch to an ACE inhibitor. What is the mandatory washout requirement and why?",
    opts: [
      "No washout needed — ARBs and ACEi can be switched without a gap",
      "Minimum 36-hour washout: sacubitril inhibits neprilysin (delays bradykinin degradation); if ACEi started immediately, both agents increase bradykinin simultaneously causing a high risk of potentially fatal angioedema",
      "7-day washout: sacubitril accumulates in myocardium and interacts for 7 days after stopping",
      "12-hour washout: sufficient for the short half-life of valsartan component"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M8 = [
  {
    q: "A 55-year-old patient with resistant hypertension and asymmetric kidneys (right kidney 8 cm, left 11 cm on USS) is started on lisinopril. Within 48 hours, creatinine rises from 110 to 198 μmol/L (80% increase). What does this pattern indicate?",
    opts: [
      "Expected ACEi response — continue and recheck in 2 weeks",
      "Bilateral or functionally significant unilateral renal artery stenosis — the efferent constriction maintaining GFR has been removed; STOP lisinopril immediately and arrange urgent renal angiography",
      "ACEi-induced interstitial nephritis — start prednisolone and continue lisinopril at lower dose",
      "Pre-renal AKI from first-dose hypotension — rehydrate and restart lisinopril"
    ],
    ans: 1
  },
  {
    q: "A normotensive patient with IgA nephropathy has UACR persistently 85 mg/mmol and eGFR stable at 62 mL/min. Should an ACEi or ARB be started?",
    opts: [
      "No — ACEi/ARBs are only indicated when hypertension is present",
      "Yes — UACR >30 mg/mmol with proteinuric CKD is an indication for ACEi/ARB regardless of blood pressure; the drug target is the glomerulus (↓ intraglomerular pressure + ↓ TGF-β fibrosis), not blood pressure",
      "Only after BP exceeds 140/90 mmHg on repeated measurements",
      "Only if diabetes is also present — non-diabetic CKD does not benefit from RAAS blockade"
    ],
    ans: 1
  },
  {
    q: "A patient with scleroderma presents with rapidly rising BP (220/140) and creatinine doubling over 48 hours. Urinalysis shows red cell casts. Which drug is specifically indicated?",
    opts: [
      "IV labetalol — best antihypertensive for emergencies in connective tissue disease",
      "Captopril — drug of choice for scleroderma renal crisis; ACEi (specifically captopril) reverses the microvascular angiopathy; must be started immediately even if BP not yet severely elevated in high-risk scleroderma patients",
      "IV methylprednisolone — autoimmune glomerulonephritis requires immunosuppression urgently",
      "Oral losartan — ARBs have equivalent evidence to captopril in scleroderma renal crisis"
    ],
    ans: 1
  },
  {
    q: "A 68-year-old woman on enalapril undergoes elective hip replacement. Her enalapril is given as usual on the morning of surgery. Intraoperatively, she develops refractory hypotension (MAP 48 mmHg) not responding to IV fluids. What is the most likely explanation?",
    opts: [
      "Enalapril has caused intraoperative AKI reducing vascular tone",
      "ACEi on the morning of surgery blocks angiotensin II, which is the key vasoconstrictor maintaining anaesthesia-induced vasoplegia; this causes refractory hypotension that does not respond to fluids; vasopressin is often needed; ACEi should have been held",
      "The patient developed septic shock intraoperatively — unrelated to enalapril",
      "Enalapril interacted with the anaesthetic agent causing excessive negative inotropy"
    ],
    ans: 1
  },
  {
    q: "A patient on ramipril 10 mg OD for diabetic nephropathy has UACR that has risen from 45 to 78 mg/mmol over 12 months, despite good BP control (128/76 mmHg). What does this indicate and what should be added?",
    opts: [
      "Ramipril is not working — switch to an ARB instead",
      "Progressive CKD despite maximal RAAS blockade — add dapagliflozin or empagliflozin (SGLT2i); KDIGO 2024 recommends ACEi/ARB + SGLT2i as dual renoprotective backbone; rising UACR on ACEi alone indicates need for intensification",
      "Increase ramipril dose beyond 10 mg OD for greater ACE inhibition",
      "Add losartan to ramipril — dual RAAS blockade will halt the proteinuria progression"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M9 = [
  {
    q: "The ACCOMPLISH trial compared ACEi + amlodipine vs ACEi + HCTZ. What were the results and their clinical implication for CKD patients?",
    opts: [
      "Both combinations were equally effective — choose based on side effect profile",
      "ACEi + amlodipine was superior for renal and cardiovascular outcomes; amlodipine dilates the afferent arteriole while ACEi dilates the efferent — reducing intraglomerular pressure bilaterally; HCTZ combination does not provide this dual vascular protection",
      "ACEi + HCTZ was superior because volume reduction reduces glomerular filtration pressure",
      "ACEi + amlodipine was superior only in diabetic patients — HCTZ preferred in non-diabetic CKD"
    ],
    ans: 1
  },
  {
    q: "A patient with CKD stage 4 (eGFR 24) is on atenolol for hypertension. What is the main concern and what should be done?",
    opts: [
      "Atenolol is safe in CKD — it reduces renin and provides renoprotection",
      "Atenolol fe ~90% — accumulates significantly in CKD causing bradycardia, hypotension, and QTc prolongation; switch to metoprolol succinate or bisoprolol (both hepatically metabolised, no renal dose adjustment needed)",
      "Atenolol should be increased in CKD — higher doses are needed to achieve the same effect",
      "Only reduce atenolol dose by 50% — accumulation is not clinically significant"
    ],
    ans: 1
  },
  {
    q: "What is the primary renal mechanism by which SGLT2 inhibitors provide renoprotection, independent of glucose-lowering?",
    opts: [
      "SGLT2 inhibition reduces renal glucose toxicity, preventing diabetic glomerulosclerosis",
      "SGLT2 inhibition increases NaCl delivery to the macula densa, activating tubuloglomerular feedback causing afferent constriction and reducing intraglomerular hyperfiltration pressure",
      "SGLT2 inhibition reduces podocyte VEGF expression, preventing proteinuria",
      "SGLT2 inhibition causes systemic volume depletion reducing cardiac output and renal perfusion pressure"
    ],
    ans: 1
  },
  {
    q: "The DAPA-CKD trial was a paradigm shift in SGLT2i therapy. What was the most important finding?",
    opts: [
      "Dapagliflozin reduced HbA1c by >1% in CKD patients, improving glycaemic control",
      "Dapagliflozin reduced CKD progression in patients WITHOUT type 2 diabetes, proving the renoprotective mechanism is haemodynamic (TGF), not glycaemic",
      "Dapagliflozin was superior to ACEi/ARB as monotherapy in diabetic nephropathy",
      "Dapagliflozin prevented dialysis initiation in all CKD stage 4–5 patients studied"
    ],
    ans: 1
  },
  {
    q: "At which eGFR threshold does the glucose-lowering effect of SGLT2 inhibitors become ineffective, and what is the implication for their renoprotective use?",
    opts: [
      "eGFR <45 — stop SGLT2i as both glucose-lowering and renoprotection are lost",
      "eGFR <30 — glucose-lowering is lost (insufficient glucose filtered) but renoprotection is maintained down to eGFR 20; do not stop based on loss of glycaemic efficacy alone",
      "eGFR <60 — both effects are reduced proportionally; halve the dose",
      "eGFR <15 — SGLT2i can be used safely at any eGFR above 15"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M9 = [
  {
    q: "A 62-year-old Ghanaian man with hypertension, CKD stage 3a (eGFR 52), and UACR 110 mg/mmol is currently on amlodipine 10 mg alone with BP 148/92 mmHg. Which change best optimises his renoprotective regimen?",
    opts: [
      "Add HCTZ 25 mg — volume reduction will improve both BP and CKD",
      "Add losartan 50 mg — ACEi/ARB is mandatory in CKD with UACR >30 mg/mmol regardless of race; then add dapagliflozin 10 mg per KDIGO 2024 dual backbone recommendation",
      "Switch amlodipine to diltiazem — non-dihydropyridine CCBs have better antiproteinuric effect",
      "Add atenolol — RAAS blockade plus beta-blockade provides superior renoprotection"
    ],
    ans: 1
  },
  {
    q: "A patient with T2DM, eGFR 28, and UACR 340 mg/mmol is on lisinopril 10 mg and empagliflozin 10 mg. Their HbA1c has risen to 9.2% — the endocrinologist queries stopping empagliflozin as it is 'no longer effective for diabetes'. What is your response?",
    opts: [
      "Agree — if glycaemic control is failing, stop empagliflozin and switch to insulin",
      "Disagree — at eGFR 28 empagliflozin loses glucose-lowering efficacy but RETAINS renoprotection down to eGFR 20 (EMPA-KIDNEY); stopping it removes proven CKD protection; add insulin for glycaemic control but continue empagliflozin",
      "Agree — at eGFR 28 empagliflozin is contraindicated due to DKA risk",
      "Switch to canagliflozin — a higher dose SGLT2i will restore both glycaemic and renal effects"
    ],
    ans: 1
  },
  {
    q: "A patient on dapagliflozin for CKD presents pre-operatively for elective knee replacement. They took their dapagliflozin this morning as usual. What is the priority concern and management?",
    opts: [
      "No concern — SGLT2i are safe perioperatively and should be continued",
      "Risk of euglycaemic DKA — SGLT2i should have been held 3–4 days before surgery; check blood ketones urgently; if positive, postpone surgery and manage DKA; educate patient on sick day rules going forward",
      "Risk of severe hypoglycaemia intraoperatively — give IV dextrose preoperatively",
      "Risk of renal failure from contrast use — ensure N-saline pre-hydration and stop dapagliflozin only if contrast is planned"
    ],
    ans: 1
  },
  {
    q: "A 58-year-old woman with resistant hypertension is on lisinopril 20 mg, amlodipine 10 mg, and chlorthalidone 25 mg with BP persistently 162/98 mmHg. K+ is 4.2 mEq/L, eGFR 48. What is the most evidence-based 4th agent to add?",
    opts: [
      "Atenolol 25 mg — beta-blockade addresses residual sympathetic drive",
      "Spironolactone 25 mg OD — PATHWAY-2 trial showed spironolactone is significantly superior to bisoprolol or doxazosin as 4th-line agent in resistant hypertension; check K+ at 1 week given concurrent ACEi",
      "Doxazosin 4 mg OD — alpha-1 blockade provides additional vasodilation",
      "Hydralazine 25 mg BD — direct vasodilator for residual resistance"
    ],
    ans: 1
  },
  {
    q: "A patient on empagliflozin reports white clumpy vaginal discharge and itching 3 weeks after starting the drug. She is concerned. What is the explanation and management?",
    opts: [
      "This represents a severe drug hypersensitivity reaction — stop empagliflozin immediately",
      "Vulvovaginal candidiasis — a known and common side effect of SGLT2i (glycosuria creates a favourable environment for Candida); treat with a single dose of oral fluconazole 150 mg or topical clotrimazole; continue empagliflozin with good hygiene counselling; only stop if recurrent and unmanageable",
      "This is a UTI from SGLT2i-associated bacteriuria — treat with trimethoprim and stop empagliflozin",
      "SGLT2i-induced interstitial cystitis — refer to gynaecology and stop the drug"
    ],
    ans: 1
  }
];
// ============================================================
// renp_data.js — Renal Pharmacology: Drugs & the Kidney
// LegonMed Platform · Course ID: renp
// Modules 10–12 of 16
// ============================================================

export const RENP_MODS_10_12 = [

  // ────────────────────────────────────────────────────────
  // MODULE 10 — Drug-Induced Nephrotoxicity
  // ────────────────────────────────────────────────────────
  {
    id: 10, num: "10", icon: "⚠️", free: false, dur: "2h 30m", lessons: 6, color: "#ea580c",
    title: "Drug-Induced Nephrotoxicity",
    sub: "Identifying, Preventing & Managing the Most Dangerous Drug-Kidney Interactions",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Drug-induced nephrotoxicity accounts for up to 30% of all hospital-acquired acute kidney injury. Every drug on this list has been responsible for preventable renal failure in Ghana's teaching hospitals. Know the mechanism, recognise the pattern, and act before the dialysis machine is the only option left.",
    story: `Renal Unit, Korle Bu Teaching Hospital, Accra.

Dr. Efua Mensah is reviewing three patients admitted this week with acute kidney injury. She has been asked to present their cases at the monthly morbidity and mortality meeting.

Patient 1: A 45-year-old man with HIV, on tenofovir-based ART for 5 years. Creatinine 310 μmol/L. Urine shows glycosuria despite normal blood glucose. Phosphate 0.48 mmol/L.

Patient 2: A 72-year-old woman prescribed ibuprofen for knee pain by her orthopaedic surgeon. She was already on lisinopril and furosemide. Admitted 4 days later with creatinine 398 μmol/L and oliguria.

Patient 3: A 58-year-old man who received IV gentamicin for 8 days at a private hospital. Day 6: creatinine began rising. Non-oliguric AKI with granular casts.

Three different drugs. Three different mechanisms. Three entirely preventable cases of renal failure.

"What is the common theme?" Dr. Mensah asks her team.

A junior doctor answers quietly: "No one checked the kidney before prescribing."`,
    sections: [
      {
        h: "🔬 Mechanisms of Drug-Induced Nephrotoxicity — The Six Patterns",
        a: `Drug-induced nephrotoxicity is not a single disease — it is six distinct injury patterns, each with a different target, a different timeline, and a different set of culprit drugs. Recognising which pattern a patient has determines the management approach. Getting the pattern wrong leads to the wrong treatment — or worse, continuing the offending drug.`,
        c: `OVERVIEW — WHY THE KIDNEY IS VULNERABLE:
The kidney concentrates drugs 10–100-fold in tubular fluid. It receives 25% of cardiac output — more drug exposure than any organ. It actively secretes drugs via OAT/OCT transporters, accumulating them in tubular cells. Its medulla is normally relatively hypoxic — marginal oxygen delivery makes it exquisitely sensitive to vascular insults.

THE SIX PATTERNS OF DRUG-INDUCED NEPHROTOXICITY:

1. HAEMODYNAMIC AKI (PRE-RENAL MECHANISM):
→ Drugs that reduce GFR by altering glomerular haemodynamics without structural damage
→ REVERSIBLE if drug stopped early

NSAIDs (COX-1 and COX-2 inhibitors — ibuprofen, diclofenac, naproxen, celecoxib):
→ Normal: prostaglandins (PGE2, PGI2) maintain afferent arteriolar dilation in low-flow states
→ NSAIDs block COX → ↓ prostaglandins → afferent CONSTRICTS → ↓ GFR
→ Most dangerous in: 'Triple Whammy' (NSAID + ACEi/ARB + diuretic), pre-existing CKD, HF, cirrhosis, dehydration, elderly
→ Features: oliguria, rising creatinine within 1–5 days of starting; normal urinalysis; FENa <1% (pre-renal pattern)
→ Chronic use → analgesic nephropathy → papillary necrosis → haematuria ± obstruction
→ COX-2 selective NSAIDs: NO renal protection advantage — same haemodynamic risk

ACEi/ARBs in bilateral RAS: covered in Module 8

Calcineurin Inhibitors (cyclosporine, tacrolimus — acute dose-dependent):
→ ↑ Endothelin + ↓ NO → afferent vasoconstriction → ↓ GFR
→ Reversible with dose reduction; distinguishable from rejection by drug level + biopsy

2. ACUTE TUBULAR NECROSIS (ATN — DIRECT TUBULAR TOXICITY):
→ Drugs accumulate in tubular cells → oxidative stress → mitochondrial dysfunction → cell death

AMINOGLYCOSIDES (gentamicin, tobramycin, amikacin):
→ Mechanism: filtered → bind megalin receptor on PCT brush border → endocytosed into lysosomes → generate ROS → mitochondrial injury → cell apoptosis/necrosis
→ Features: NON-OLIGURIC AKI (distinguishes from haemodynamic AKI) appearing day 5–7; granular/RTECs casts; hypomagnesaemia, hypokalaemia (PCT dysfunction)
→ Risk factors: high trough levels, prolonged therapy (>7 days), concurrent furosemide, pre-existing CKD, elderly, dehydration
→ Prevention: once-daily dosing (extended-interval reduces trough accumulation); TDM (trough <1 mg/L gentamicin); hydration; limit course to <7 days; avoid concurrent furosemide

VANCOMYCIN (especially with concurrent piperacillin-tazobactam):
→ Direct tubular toxicity via oxidative stress; also promotes tubular cast formation
→ Risk: AUC/MIC >600 mg·h/L, prolonged high levels, concurrent aminoglycosides
→ VANCOMYCIN + PIPERACILLIN-TAZOBACTAM: synergistically nephrotoxic in multiple studies — avoid combination when equivalent alternatives exist

3. CRYSTAL NEPHROPATHY (TUBULAR OBSTRUCTION):
→ Drug or metabolite precipitates in tubular lumen → obstruction → back-pressure → AKI
→ ACYCLOVIR IV: highly insoluble; crystals form in distal tubule + collecting duct; prevent with IV hydration (ensure urine output >100 mL/h) and slow infusion
→ METHOTREXATE: precipitates in acidic urine; prevent with IV fluids + urinary alkalinisation (NaHCO3, target pH >7.0)
→ INDINAVIR (protease inhibitor): urinary crystals + renal colic + flank pain
→ SULFADIAZINE: crystal nephropathy in HIV patients; alkalinise urine
→ TRIAMTERENE: poorly soluble; deposits as yellow-brown crystals

4. ACUTE INTERSTITIAL NEPHRITIS (AIN — IMMUNE MEDIATED):
→ Type IV hypersensitivity (T-cell mediated) → interstitial lymphocytic inflammation → tubular dysfunction
→ Classic triad (only 10–15% have all three): FEVER + RASH + EOSINOPHILIA + AKI
→ Urine: eosinophiluria (Hansel stain), WBC casts, subnephrotic proteinuria
→ Biopsy: interstitial lymphocytic infiltrate with eosinophils
→ Culprit drugs: ANTIBIOTICS (penicillins, cephalosporins, ciprofloxacin, rifampicin, sulfonamides); PPIs (omeprazole, lansoprazole — now MOST COMMON cause of drug-AIN; latent period weeks to months); NSAIDs (AIN + minimal change nephropathy simultaneously); diuretics (furosemide, thiazides); allopurinol; checkpoint inhibitors (nivolumab, pembrolizumab)
→ Management: STOP offending drug; corticosteroids (prednisolone 1 mg/kg/day × 4–8 weeks) if AKI persists after drug withdrawal

5. GLOMERULAR INJURY:
→ MEMBRANOUS NEPHROPATHY: NSAIDs, gold, penicillamine, captopril, mercury
→ THROMBOTIC MICROANGIOPATHY (TMA): quinine, gemcitabine, mitomycin C, cyclosporine, tacrolimus, bevacizumab
→ FOCAL SEGMENTAL GLOMERULOSCLEROSIS (FSGS): pamidronate, heroin (collapsing FSGS), interferon

6. RENAL PAPILLARY NECROSIS:
→ Medullary ischaemia from chronic vasoconstriction → papillary sloughing → haematuria ± obstruction ± recurrent UTI
→ Causes: CHRONIC NSAID USE (analgesic nephropathy), phenacetin (withdrawn), sickle cell, diabetes, obstruction
→ Clinical: haematuria, flank pain, passage of tissue fragments; IVP/CT: 'ring shadow' appearance`,
        kp: [
          "Six patterns of nephrotoxicity: haemodynamic (NSAIDs, CNIs), ATN (aminoglycosides, vancomycin), crystal (acyclovir, methotrexate), AIN (PPIs now most common — latent weeks to months, fever/rash/eosinophilia), glomerular (NSAIDs → MN), papillary necrosis (chronic NSAIDs)",
          "NSAID Triple Whammy: NSAID + ACEi/ARB + diuretic = remove all autoregulatory mechanisms → precipitous GFR collapse; most common preventable outpatient AKI combination in Ghana",
          "Aminoglycoside ATN: non-oliguric, appears day 5–7, granular casts, hypomagnesaemia; prevent with once-daily dosing + TDM (trough <1 mg/L) + limit to <7 days + hydration",
          "PPIs now the most common cause of drug-AIN — latent period weeks to months; classic triad only in 10–15%; biopsy + stop PPI + prednisolone if AKI persists",
          "Crystal nephropathy prevention: IV hydration for acyclovir (urine output >100 mL/h); urinary alkalinisation for methotrexate (pH >7.0); slow infusion rates for all crystallogenic IV drugs"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Distinguishing the patterns by urinalysis is critical for examination and clinical practice. HAEMODYNAMIC AKI (NSAIDs, bilateral RAS): bland urinalysis, FENa <1%, no casts. ATN (aminoglycosides, contrast): granular 'muddy brown' casts + renal tubular epithelial cells (RTECs); FENa >2%. AIN: WBC casts + eosinophiluria (Hansel stain) + subnephrotic proteinuria. CRYSTAL NEPHROPATHY: crystals visible on urine microscopy (acyclovir, sulfadiazine, triamterene each have characteristic crystal shapes). GLOMERULAR: dysmorphic RBCs + RBC casts + heavy proteinuria. Each pattern has a urinalysis fingerprint — the microscope tells you what the drug has done."
          },
          {
            role: "doctor", type: "clinical",
            text: "PPI-associated AIN has become the dominant drug-AIN cause in hospitalised patients, surpassing antibiotics. The challenge: latency of weeks to months means the patient has often been on the PPI for a long time before AKI appears, making causation easy to miss. Clinical features: slowly progressive AKI, often without fever or rash (distinguishing it from antibiotic AIN), subnephrotic proteinuria. Key clue: all other causes excluded + patient on long-term PPI. Management: stop PPI, switch to ranitidine or antacids; if AKI does not recover within 2–4 weeks, renal biopsy + prednisolone 1 mg/kg/day × 4–8 weeks. Document in drug allergy — avoid all PPIs permanently once AIN confirmed."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "The Triple Whammy NSAID combination must be actively prevented at the dispensing stage. In Ghana, ibuprofen and diclofenac are widely available OTC. A patient on lisinopril and furosemide who buys ibuprofen from a community pharmacy for back pain is walking into Triple Whammy territory. Community pharmacists are the last line of defence: screen every NSAID sale for concurrent ACEi/ARB and diuretic; counsel alternatives (paracetamol, topical diclofenac gel — much lower systemic exposure); document and alert if the patient refuses. This is one of the highest-impact pharmacist interventions for preventing AKI in Ghana."
          },
          {
            role: "nurse", type: "clinical",
            text: "Monitoring for aminoglycoside nephrotoxicity: the timeline matters — creatinine does NOT rise immediately; it rises on day 5–7 when PCT cell loss has reached a critical threshold. Do not reassure yourself that the day-3 creatinine is normal. Daily creatinine monitoring is required for any patient on aminoglycosides >48h. Signs of ATN from aminoglycosides: rising creatinine despite maintained urine output (non-oliguric); urine that looks dark or contains sediment (granular casts); hypomagnesaemia causing muscle cramps or arrhythmias. Report rising creatinine on aminoglycosides on day 4–5 immediately — stopping on day 6 vs day 8 makes a significant difference to renal recovery."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine eosinophil staining for AIN diagnosis: Hansel stain (methylene blue-eosin Y) is preferred over Wright stain for detecting urinary eosinophils — more sensitive. Positive result: >1% eosinophils among urine white cells. Important caveat: eosinophiluria is NOT specific for drug-AIN — also seen in atheroembolic renal disease, urinary schistosomiasis, and urinary tract infections (particularly with eosinophilic cystitis). Report the percentage of eosinophils and note the clinical context. In Ghana where schistosomiasis is endemic, eosinophiluria in a febrile patient with AKI requires careful clinical correlation before attributing to drug-AIN."
          }
        ]
      },
      {
        h: "💊 High-Yield Nephrotoxins in Ghana — ART, Contrast & Traditional Medicine",
        a: `Beyond the textbook nephrotoxins, Ghana's clinical context adds three critical nephrotoxicity scenarios that require specific understanding: antiretroviral therapy nephrotoxicity (affecting over 350,000 Ghanaians on ART), contrast-induced AKI (relevant to every radiological procedure), and traditional medicine nephrotoxicity (relevant to every patient who uses herbal preparations — which is the majority).`,
        c: `ANTIRETROVIRAL NEPHROTOXICITY — A GHANAIAN PUBLIC HEALTH PRIORITY:

TENOFOVIR DISOPROXIL FUMARATE (TDF):
→ Standard component of Ghana's 1st-line ART (TDF/3TC/EFV or TDF/3TC/DTG)
→ Mechanism: OAT1/3 secretion into PCT → accumulates in mitochondria → inhibits mitochondrial gamma-DNA polymerase → mitochondrial DNA depletion → PCT cell dysfunction
→ Clinical syndromes (may present simultaneously):
  (a) FANCONI SYNDROME: PCT multi-transporter failure → normoglycaemic glycosuria + phosphaturia + hypophosphataemia + aminoaciduria + uricosuria
  (b) OSTEOMALACIA and fractures (phosphate wasting → poor bone mineralisation)
  (c) Nephrogenic diabetes insipidus (collecting duct dysfunction)
  (d) AKI (acute PCT necrosis, especially with concurrent boosted PI)
  (e) Chronic CKD with long-term use (3–5% risk after 5 years)
→ Risk factors: boosted PI co-administration (ritonavir/cobicistat inhibit P-glycoprotein and MRP4 → ↑ TDF intracellular accumulation); low body weight; baseline CKD; elderly
→ KEY DIAGNOSTIC CLUE: NORMOGLYCAEMIC GLYCOSURIA (glucose in urine with NORMAL blood glucose) = Fanconi syndrome from TDF until proven otherwise
→ Monitoring: eGFR and urine phosphate/glucose every 3 months in all TDF-treated patients; phosphate <0.65 mmol/L = significant tubular dysfunction
→ Management: switch to TAF (TENOFOVIR ALAFENAMIDE FUMARATE) — same antiviral activity, 90% lower plasma TDF exposure, much lower renal and bone toxicity; or switch to ABACAVIR (no nephrotoxicity; requires HLA-B*5701 testing first — hypersensitivity risk in carriers)

INDINAVIR (older PI — still used in some resource-limited settings):
→ Forms crystals in urine → renal colic, haematuria, crystal nephropathy
→ Prevent with high fluid intake (>2.5 L/day)

CONTRAST-INDUCED AKI (CI-AKI):
Definition: SCr rise ≥26.5 μmol/L (0.3 mg/dL) OR ≥25% rise within 48h of IV iodinated contrast
Mechanism: (1) Direct PCT toxicity from osmotically active contrast molecules; (2) Medullary vasoconstriction → medullary ischaemia (where O2 delivery is already marginal normally)
Risk factors: CKD (eGFR <60), diabetes + CKD, dehydration, HF, high contrast volume, concurrent nephrotoxins, multiple procedures

PREVENTION (evidence-based):
→ IV ISOTONIC SALINE: 1 mL/kg/h for 6h before and 6h after contrast — the MOST EFFECTIVE prevention; adequate hydration is everything
→ LOW/ISO-OSMOLAR CONTRAST: iohexol, iodixanol preferred over high-osmolar agents
→ MINIMISE CONTRAST VOLUME: use the minimum effective dose; staged procedures when possible
→ HOLD METFORMIN 48h before and 48h after: metformin itself is not nephrotoxic but if CI-AKI develops → metformin accumulates → lactic acidosis
→ N-ACETYLCYSTEINE (600 mg oral BD × 2 days): benefit is controversial (meta-analyses conflicting); widely used in Ghana's resource-limited settings as low-cost, low-risk adjunct; antioxidant mechanism; not harmful even if benefit uncertain
→ AVOID: NSAIDs, aminoglycosides 24–48h before and after; maintain euvolaemia

GADOLINIUM (MRI contrast): CONTRAINDICATED in eGFR <30 mL/min
→ Causes NEPHROGENIC SYSTEMIC FIBROSIS (NSF) — irreversible fibrosing dermopathy + internal organ fibrosis
→ Gadolinium deposits in skin, joints, viscera when not renally cleared
→ Macrocyclic gadolinium agents (gadobutrol) have LOWER NSF risk than linear agents
→ If MRI essential in eGFR <30: use macrocyclic agent at minimum dose; discuss risk-benefit

TRADITIONAL MEDICINE NEPHROTOXICITY — GHANA-SPECIFIC:
→ Surveys at KBTH suggest 60–80% of patients with unexplained CKD used traditional herbal preparations
→ Common nephrotoxic preparations in Ghana:
  - ARISTOLOCHIC ACID: found in some 'herbal bitters' and traditional kidney preparations; causes ARISTOLOCHIC ACID NEPHROPATHY — rapidly progressive tubulointerstitial fibrosis; IRREVERSIBLE; associated with urothelial carcinoma
  - DJENKOLIC ACID (djenkol bean): tubular crystal precipitation; haematuria, renal colic
  - CHROMIUM-CONTAINING PREPARATIONS: used for diabetes — nephrotoxic
  - COPPER SULPHATE (some preparations): ATN
  - CALLILEPIS LAUREOLA (impila) — not Ghana-specific but illustrates pattern: ATN + hepatic failure
→ History-taking MUST include all traditional medicines; patients often do not volunteer this information unless specifically asked
→ Never dismiss herbal medicine use as 'harmless' — many preparations have not been safety-tested and contain undisclosed toxic compounds`,
        kp: [
          "TDF Fanconi syndrome: normoglycaemic glycosuria + hypophosphataemia + proteinuria in ART patient = TDF toxicity until proven otherwise; switch to TAF (90% less renal TDF exposure) or abacavir",
          "CI-AKI prevention: IV isotonic saline 1 mL/kg/h ×6h before and after = most effective intervention; hold metformin 48h either side (lactic acidosis risk if AKI occurs); NAC widely used in Ghana despite conflicting evidence",
          "Gadolinium contraindicated in eGFR <30 (nephrogenic systemic fibrosis); if essential, use macrocyclic agent at minimum dose with risk-benefit discussion",
          "Aristolochic acid (in some Ghanaian herbal preparations): causes irreversible progressive tubulointerstitial fibrosis + urothelial carcinoma — ask about herbal use in every patient with unexplained CKD",
          "Vancomycin + piperacillin-tazobactam: synergistically nephrotoxic in multiple studies — avoid combination when equivalent alternatives exist; AUC-guided vancomycin dosing reduces nephrotoxicity risk"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "TDF Fanconi syndrome is a distinctive clinical picture worth memorising in full. The proximal tubule normally reabsorbs glucose, phosphate, amino acids, uric acid, and bicarbonate. TDF damages all these transporters simultaneously. Result: GLYCOSURIA (normal blood glucose), HYPOPHOSPHATAEMIA (phosphaturia), AMINOACIDURIA, URICOSURIA (low uric acid), PROXIMAL RTA (HCO3− wasting, hyperchloraemic acidosis). If asked: 'An HIV patient on TDF has glucose in their urine but normal blood glucose and low phosphate — what is the diagnosis?' Answer: TDF-induced Fanconi syndrome. Management: switch to TAF."
          },
          {
            role: "doctor", type: "clinical",
            text: "Traditional medicine nephrotoxicity is under-recognised in Ghana and sub-Saharan Africa. A clinical approach: in any patient with unexplained CKD, renal biopsy showing tubulointerstitial fibrosis without a clear cause, or progressive CKD in a young patient with no hypertension or diabetes, ask explicitly about: herbal bitters, root preparations, traditional healers' medicines, and locally brewed treatments for any condition. Aristolochic acid nephropathy progresses even after stopping the offending preparation — it triggers a self-perpetuating immune fibrosis. There is no treatment — prevention through awareness is everything. Report suspected cases to the Ghana Food and Drugs Authority."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Metformin and contrast — the practical protocol: Day -2: hold metformin (if elective procedure); Day 0 (contrast day): metformin already held, contrast given with IV saline hydration; check creatinine 48h after. If creatinine unchanged from baseline: restart metformin. If creatinine risen: do NOT restart metformin until creatinine returns to baseline + eGFR confirmed >45 mL/min. This protocol prevents the cascade: CI-AKI → metformin accumulation (renally cleared) → lactic acidosis. For emergency contrast: accept the risk but monitor creatinine closely and hold metformin at the earliest opportunity."
          },
          {
            role: "nurse", type: "clinical",
            text: "Pre-contrast hydration protocol: start IV 0.9% NaCl at 1 mL/kg/h (use 0.5 mL/kg/h in HF patients — fluid-restricted) at least 6 hours before contrast procedure; continue for 6–12 hours after. Monitor urine output hourly during hydration — target >50 mL/h. Document baseline creatinine and eGFR on the contrast request form and again 24–48h after procedure. In outpatients undergoing contrast CT: encourage oral fluids (1–2 L water the evening before); give IV hydration at radiology if eGFR <60 mL/min or CKD + diabetes. A patient returned from radiology without post-contrast hydration prescribed should have this queried."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine phosphate measurement for TDF monitoring: spot urine phosphate-to-creatinine ratio (TmP/GFR) is the most practical test. Normal TmP/GFR >0.8 mmol/mmol; TmP/GFR <0.8 = tubular phosphate wasting. Simultaneously measure: spot urine glucose (with blood glucose) to detect normoglycaemic glycosuria; urine protein-to-creatinine ratio. This trio — glycosuria + phosphaturia + proteinuria in an ART patient — is virtually diagnostic of TDF Fanconi syndrome. All three can be measured on a single urine specimen. Flag as a package when ART patient is sent for 'renal function monitoring' with known TDF exposure."
          }
        ]
      }
    ],
    ev: "KDIGO AKI Guidelines 2012; WHO ART Guidelines 2021; Ghana National ART Programme NACP 2023; Tenofovir Nephrotoxicity Review — Fernandez-Fernandez B NDT 2011; CI-AKI Prevention — KDIGO Contrast Media Guidelines 2018; Aristolochic Acid Nephropathy — Debelle FD JASN 2008; PPI-AIN Review — Brewster UC CJASN 2007"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 11 — Drug Dosing in CKD & Renal Impairment
  // ────────────────────────────────────────────────────────
  {
    id: 11, num: "11", icon: "📊", free: false, dur: "2h", lessons: 6, color: "#0284c7",
    title: "Drug Dosing in CKD & Renal Impairment",
    sub: "Precision Prescribing When Kidneys Fail — Calculations, Thresholds & Clinical Tools",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "CKD does not just reduce renal drug clearance — it alters absorption, distribution, protein binding, hepatic metabolism, and receptor sensitivity simultaneously. Every pharmacokinetic parameter changes. Safe prescribing in CKD requires a systematic approach, not an assumption that the 'standard dose will be fine.'",
    story: `Ward 7B, Cape Coast Teaching Hospital.

The pharmacy team is doing a medicines reconciliation round. Mrs. Akua Poku, 78 years old, was admitted 3 days ago with a urinary tract infection and confusion. Her creatinine on admission: 138 μmol/L. Her weight: 47 kg.

The pharmacist, Mr. Daniel Ackon, calculates her CrCl: [(140 − 78) × 47] / (72 × 1.56) × 0.85 = 22 mL/min.

He looks at her drug chart. She is receiving:
- Metformin 500 mg BD (prescribed for diabetes)
- Nitrofurantoin 100 mg BD (for the UTI)
- Morphine 10 mg every 4 hours (for osteoarthritis pain)
- Co-amoxiclav 625 mg every 8 hours (for the UTI)

Mr. Ackon counts quietly: three out of four drugs are either contraindicated or seriously problematic at a CrCl of 22 mL/min.

He calls the medical team. "I have a drug safety concern about Mrs. Poku. Her actual kidney function is much lower than her creatinine suggests. We have three drugs that need immediate action."

The junior doctor pauses. "Her creatinine is only 138. I thought that was acceptable."

"Her creatinine tells you what her muscles are producing. Her CrCl tells you what her kidneys can clear. In a 78-year-old woman with low muscle mass, they are very different numbers."`,
    sections: [
      {
        h: "🧮 CKD Pharmacokinetics — How Every Parameter Changes",
        a: `CKD is not simply a state of reduced drug excretion. It is a systemic pharmacokinetic disorder that alters how drugs are absorbed, distributed, metabolised, and excreted — often simultaneously and unpredictably. Understanding these changes allows safe prescribing; ignoring them causes preventable toxicity.`,
        c: `PHARMACOKINETIC CHANGES IN CKD — SYSTEMATIC REVIEW:

ABSORPTION:
→ Uraemic enteropathy: nausea, vomiting, delayed gastric emptying → reduced or erratic absorption
→ Elevated gastric pH (uraemia → ammonia production → alkaline stomach) → affects drug dissolution
→ Phosphate binders (calcium carbonate, sevelamer): chelate fluoroquinolones, iron, mycophenolate → ↓ absorption; SEPARATE BY 2 HOURS
→ Net effect: unpredictable oral bioavailability → IV preferred in acute CKD

DISTRIBUTION (Vd):
→ HYPOALBUMINAEMIA (proteinuria, malnutrition) → ↓ protein binding → ↑ FREE DRUG fraction
  - Phenytoin: normally 90% protein-bound; in hypoalbuminaemia → more free phenytoin → toxic at 'therapeutic' total levels; measure FREE phenytoin
  - Furosemide: 99% bound → albumin in tubular lumen reduces NKCC2 access (diuretic resistance)
→ FLUID OVERLOAD (oedema, ascites) → ↑ Vd for hydrophilic drugs → larger loading dose needed
→ ACIDOSIS (metabolic, from CKD) → shifts drug ionisation → alters tissue distribution

METABOLISM:
→ CKD reduces CYP450 enzyme activity by up to 50% in ESRD (CYP1A2, CYP2C9, CYP3A4 all affected)
→ 'Hepatically metabolised' drugs still accumulate if their METABOLITES are renally cleared
  - Morphine → M6G (pharmacologically active, renal excretion → accumulates)
  - Codeine → morphine → M6G → accumulates
  - Allopurinol → oxypurinol (active, renal excretion → accumulates → toxicity)
  - Enalapril → enalaprilat (renally cleared; slower clearance in CKD)
→ URAEMIC TOXINS inhibit CYP450 directly → reduced first-pass + systemic metabolism

EXCRETION:
→ ↓ GFR → ↓ filtered load
→ ↓ Tubular secretion (OAT/OCT) → ↓ secretion of organic acids and cations
→ ↓ Tubular reabsorption of some filtered drugs (less relevant)
→ Net: t½ prolongation proportional to GFR decline for drugs with high fe

RECEPTOR SENSITIVITY CHANGES IN CKD:
→ OPIOIDS: increased CNS sensitivity (uraemic BBB changes + M6G accumulation)
→ DIGOXIN: ↑ myocardial sensitivity (electrolyte shifts, Na+/K+ ATPase changes)
→ WARFARIN: ↑ sensitivity (reduced Vitamin K-dependent factor synthesis, albumin changes)
→ NEUROMUSCULAR BLOCKING AGENTS: vecuronium and rocuronium → active metabolites accumulate → prolonged blockade; ATRACURIUM preferred (Hofmann elimination — temperature and pH dependent, not renal)

THE Q-FACTOR METHOD — REVIEW AND WORKED EXAMPLES:
Q = 1 − [fe × (1 − KF)] where KF = patient GFR / 120

Example 1: DIGOXIN in CKD:
fe = 0.70; Patient GFR = 20 mL/min; KF = 20/120 = 0.17
Q = 1 − [0.70 × (1 − 0.17)] = 1 − [0.70 × 0.83] = 1 − 0.58 = 0.42
→ Give 42% of normal dose: 0.125 mg → 0.0525 mg ≈ 0.0625 mg (nearest available dose)
→ OR extend interval: normal OD → OD/Q = OD/0.42 = every 2.4 days → practical: alternate days

Example 2: CIPROFLOXACIN in CKD:
fe = 0.40; Patient GFR = 30 mL/min; KF = 30/120 = 0.25
Q = 1 − [0.40 × (1 − 0.25)] = 1 − [0.40 × 0.75] = 1 − 0.30 = 0.70
→ Give 70% of normal dose OR extend interval by 1/0.70 = 1.4×
→ 500 mg every 12h → 500 mg every 17h (round to every 18h practically)
→ Alternatively: 250 mg every 12h (dose reduction strategy)

WHICH STRATEGY — DOSE REDUCTION OR INTERVAL EXTENSION?
→ DOSE REDUCTION (same interval): maintains steady-state; avoids troughs below MIC for time-dependent antibiotics; preferred for drugs where peak causes toxicity or where trough levels matter (vancomycin, digoxin)
→ INTERVAL EXTENSION (same dose): maintains peak (important for concentration-dependent antibiotics: aminoglycosides — need high peak for bacterial killing); patient-convenient; risk of prolonged sub-therapeutic troughs`,
        kp: [
          "CKD alters ALL pharmacokinetic phases — not just excretion; hypoalbuminaemia increases free drug fraction (phenytoin toxic at 'therapeutic' total levels — measure free phenytoin); oedema increases Vd of hydrophilic drugs",
          "Hepatic metabolism does not protect against CKD toxicity when metabolites are renally cleared: morphine → M6G; allopurinol → oxypurinol; codeine → morphine → M6G; enalapril → enalaprilat",
          "Atracurium preferred neuromuscular blocker in CKD (Hofmann elimination — temperature/pH dependent, no renal clearance); avoid vecuronium and rocuronium (renal metabolite accumulation → prolonged paralysis)",
          "Dose reduction: preferred for narrow-TI drugs where peaks cause toxicity (vancomycin, digoxin); interval extension: preferred for concentration-dependent antibiotics requiring high peaks (aminoglycosides)",
          "CKD increases receptor sensitivity to opioids (uraemic BBB), digoxin (electrolyte shifts), and warfarin (reduced clotting factor synthesis) — toxicity can occur at normally therapeutic levels"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Phenytoin in CKD + hypoalbuminaemia is a classic pharmacokinetic calculation scenario. Phenytoin is 90% protein-bound. In hypoalbuminaemia (albumin 20 g/L vs normal 40 g/L), binding is halved → free fraction doubles. A total phenytoin of 10 mg/L (therapeutic range 10–20 mg/L) in a normal patient represents 1 mg/L free drug. In hypoalbuminaemia, 10 mg/L total = 2 mg/L free drug — potentially toxic. The Sheiner-Tozer equation corrects for albumin: Adjusted phenytoin = Measured / [(0.2 × albumin/40) + 0.1]. Or simply: measure FREE phenytoin directly (therapeutic range 1–2 mg/L)."
          },
          {
            role: "doctor", type: "clinical",
            text: "Perioperative management of CKD patients — the drug hold/restart protocol: HOLD on morning of surgery: ACEi/ARBs (refractory intraoperative hypotension), metformin (lactic acidosis risk if AKI occurs), SGLT2i (euglycaemic DKA risk), K+-sparing diuretics (hyperkalaemia risk with surgical stress), NSAIDs (haemodynamic AKI). CONTINUE: antihypertensives for haemodynamic stability (CCBs, beta-blockers), antiepileptics (seizure risk if stopped), thyroid medications, corticosteroids (adrenal insufficiency risk). RESTART: ACEi/ARBs and SGLT2i only when euvolaemic, eating normally, and creatinine confirmed stable (24–48h post-op minimum)."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "The Renal Drug Database (renaldrugdatabase.com) is the most comprehensive and practical tool for CKD dosing in clinical practice — available as a free web app and used by nephrology pharmacists worldwide. For Ghana's context: BNF Appendix 3 is widely available and gives eGFR-banded dose recommendations. For drugs not in standard references, the Q-factor method provides a systematic calculation. The most important rule: if the drug has fe >50% and the patient has eGFR <60 — it MUST be reviewed. Do not assume; calculate."
          },
          {
            role: "nurse", type: "clinical",
            text: "In patients with CKD admitted to ward: document ACTUAL BODY WEIGHT and the Cockcroft-Gault calculation in the nursing notes at admission. This value changes the prescribing for multiple drugs. A standard ward admission proforma that includes CrCl calculation for all patients aged >65 or with creatinine >90 μmol/L would prevent the majority of CKD dosing errors. When a nurse checks a drug before administration and the patient is known to have CKD, the drug dosing should be a standard verification step — not assumed correct because a doctor wrote it."
          },
          {
            role: "labtech", type: "practical",
            text: "When to report eGFR thresholds as urgent for drug safety purposes: in most labs, eGFR results below standard thresholds are auto-flagged. Suggested critical value thresholds for immediate prescriber notification: eGFR <15 mL/min (ESRD range — multiple drug contraindications); acute fall of >50% from baseline within 48h (AKI diagnosis); creatinine >500 μmol/L (independent of baseline — dialysis territory). Additionally: any patient with creatinine rising on aminoglycosides or vancomycin — flag as drug-monitoring result, not just a renal function report. Time-critical communication: phone the prescriber, do not wait for lab results to be reviewed on the system."
          }
        ]
      },
      {
        h: "📋 Drug-Specific Thresholds — The High-Risk List",
        a: `Abstract principles only become clinically useful when applied to specific drugs with specific eGFR thresholds. This section provides the actionable prescribing thresholds for the most commonly prescribed high-risk drugs in Ghana's clinical settings — the list a prescriber or pharmacist needs when standing at a patient's bedside in CKD.`,
        c: `ANTIBIOTICS — HIGHEST RISK CATEGORY FOR DOSE ERRORS IN CKD:

GENTAMICIN:
→ fe ~95%; normal t½ 2h → eGFR 20: t½ ~20h
→ Standard regimen in CKD: EXTENDED INTERVAL — 5–7 mg/kg every 36–48h
→ TDM: trough <1 mg/L before next dose; if trough 1–2 mg/L → delay 12h; if >2 mg/L → hold and recheck
→ Maximum duration: 5–7 days; avoid concurrent furosemide

VANCOMYCIN:
→ fe ~90%; requires significant dose reduction and interval extension
→ AUC-guided dosing now preferred: target AUC/MIC 400–600 mg·h/L
→ eGFR <30: check trough before every dose (target 10–20 mg/L)
→ High-flux HD removes 50–60% per session → dose after each dialysis session

NITROFURANTOIN:
→ CONTRAINDICATED eGFR <45 mL/min (ABSOLUTE)
→ Below this threshold: (1) Inadequate urinary concentration → ineffective; (2) Drug accumulates systemically → peripheral neuropathy
→ Alternative for UTI at eGFR <45: trimethoprim (dose reduce if eGFR <15), cefalexin 500 mg BD

TRIMETHOPRIM:
→ Reduce dose if eGFR <15 mL/min; avoid prolonged courses in CKD stages 4–5
→ Blocks OCT2 → factitious creatinine rise (does not indicate true GFR fall)
→ Blocks collecting duct K+ excretion (like K+-sparing diuretic) → hyperkalaemia risk in CKD + ACEi/ARB

CIPROFLOXACIN:
→ fe ~40%; dose reduce by ~50% in eGFR <30 (500 mg every 12h → 250–500 mg every 18–24h)
→ Lower seizure threshold in CKD (uraemia + fluoroquinolone synergy) — caution in epilepsy

CARDIOVASCULAR DRUGS:

DIGOXIN:
→ fe ~70%; t½ 36h (normal) → 4–5 DAYS (ESRD)
→ CKD stages 3–4: 0.0625–0.125 mg OD
→ ESRD/dialysis: 0.0625 mg alternate days or 3× weekly
→ Target serum level: 0.5–0.9 ng/mL (lower range than non-CKD)
→ NOT removed by haemodialysis (large Vd 7 L/kg, high tissue binding)

ATENOLOL: fe ~90% → switch to METOPROLOL SUCCINATE or BISOPROLOL (hepatic)
SOTALOL: fe ~75% → QT prolongation risk amplified in CKD → avoid

ANTICOAGULANTS:
ENOXAPARIN (LMWH): fe ~60% → accumulates → supratherapeutic anti-Xa → bleeding
→ eGFR <30: switch to UNFRACTIONATED HEPARIN (APTT monitoring, not renally cleared)
→ eGFR 30–60: reduce dose or monitor anti-Xa (therapeutic peak 0.6–1.0 IU/mL)
DOACs (apixaban, rivaroxaban, dabigatran): all renally cleared to varying degrees
→ DABIGATRAN: fe ~80% → CONTRAINDICATED in eGFR <30 (most renally dependent DOAC)
→ RIVAROXABAN: fe ~35%; use with caution eGFR 30–50; avoid <30 for AF
→ APIXABAN: fe ~27%; most renal-safe DOAC; can use at eGFR >25 with dose reduction

ANALGESICS:
MORPHINE: switch to fentanyl or hydromorphone at eGFR <30
CODEINE: avoid in CKD (→ morphine → M6G accumulation)
TRAMADOL: halve dose; avoid in ESRD; seizure risk
GABAPENTIN: fe ~100% → profound sedation and respiratory depression in CKD; dose reduce dramatically; 100–300 mg per dose at eGFR <30

ANTIDIABETICS:
METFORMIN: contraindicated eGFR <30; maximum 1000 mg/day at eGFR 30–45; hold perioperatively
GLIBENCLAMIDE: AVOID (long-acting active metabolites → prolonged hypoglycaemia in CKD)
GLICLAZIDE/GLIPIZIDE: preferred sulfonylureas (safer metabolite profiles)
SITAGLIPTIN: dose reduce at eGFR <50 (50 mg OD vs normal 100 mg OD); <30: 25 mg OD
SGLT2i: glycaemic efficacy lost <30 but renoprotection maintained to eGFR 20
INSULIN: kidneys degrade 30–40% of circulating insulin → insulin dose requirements FALL in CKD → HYPOGLYCAEMIA risk; reduce dose proactively as eGFR declines

IMMUNOSUPPRESSANTS (RENAL TRANSPLANT):
TACROLIMUS: target trough 5–15 ng/mL; nephrotoxic → CNI nephropathy
CICLOSPORIN: similar nephrotoxicity; CYP3A4 substrate — multiple interactions
MYCOPHENOLATE MOFETIL (MMF): GI toxicity; bone marrow suppression; teratogenic
AZATHIOPRINE: CONTRAINDICATED with allopurinol (xanthine oxidase inhibition → toxic 6-TGN accumulation → fatal bone marrow suppression)`,
        kp: [
          "Nitrofurantoin: CONTRAINDICATED eGFR <45 (ineffective + peripheral neuropathy) — memorise this threshold; use cefalexin or trimethoprim for UTI at eGFR <45",
          "Dabigatran: most renally dependent DOAC (fe ~80%) — contraindicated eGFR <30; apixaban safest DOAC in CKD (fe ~27%) — can use to eGFR 25 with dose reduction",
          "Gabapentin: fe ~100% → profound sedation in CKD; reduce to 100–300 mg per dose at eGFR <30; a common and underappreciated cause of AKI-related drowsiness and respiratory depression",
          "Insulin requirements FALL as CKD progresses (kidneys degrade 30–40% of insulin) — proactively reduce insulin doses in declining eGFR to prevent hypoglycaemia",
          "Azathioprine + allopurinol: absolutely contraindicated — allopurinol inhibits xanthine oxidase needed to catabolise azathioprine → 6-TGN accumulation → fatal bone marrow suppression; switch to MMF if allopurinol needed"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The DOAC ranking by renal dependence is frequently tested in examination scenarios involving CKD and anticoagulation: DABIGATRAN fe ~80% (most renal) → contraindicated eGFR <30; RIVAROXABAN fe ~35% → caution eGFR <50, avoid <30 in AF; EDOXABAN fe ~50% → avoid eGFR <15; APIXABAN fe ~27% (least renal) → safest in CKD, dose reduce at eGFR 25–30. When asked which DOAC to choose in a patient with eGFR 28 needing anticoagulation for AF: the answer is APIXABAN 2.5 mg BD (dose-reduced), with monitoring. Never dabigatran."
          },
          {
            role: "doctor", type: "clinical",
            text: "Insulin management in progressive CKD is an underappreciated risk of hypoglycaemia. As eGFR falls: (1) Insulin clearance reduces (kidneys degrade ~30–40% of circulating insulin); (2) Counter-regulatory responses (glucagon, adrenaline) may be blunted by autonomic uraemic neuropathy; (3) Dietary intake may be reduced (uraemic anorexia). As a practical rule: when eGFR falls below 30, proactively reduce insulin dose by 25%; below 15 (or on dialysis), reduce by 50% and review frequently. Dialysis itself removes insulin during sessions — post-dialysis hypoglycaemia is particularly common."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Gabapentin is an increasingly prescribed and increasingly dangerous drug in CKD. It is 100% renally cleared, and as eGFR falls, its half-life extends from ~7h (normal) to >100h (ESRD). In CKD patients hospitalised for AKI, gabapentin prescribed for diabetic neuropathy or chronic pain can reach toxic levels within days, presenting as sedation, respiratory depression, and worsening confusion that is misattributed to uraemic encephalopathy. Standard dose 300 mg TDS in eGFR 15 is equivalent to an enormous accumulating dose. Reduce to 100 mg OD–BD at eGFR 15–30; hold at eGFR <15 unless dialysed."
          },
          {
            role: "nurse", type: "clinical",
            text: "Checking DOAC safety in CKD: when a patient with CKD is admitted on a DOAC, three pieces of information are needed immediately: (1) Which DOAC (dabigatran, rivaroxaban, apixaban, or edoxaban); (2) Their current eGFR; (3) The prescribed dose. Cross-reference these against the drug's renal contraindication thresholds. A patient on dabigatran 150 mg BD with eGFR 24 is on a CONTRAINDICATED drug — this requires immediate prescriber notification and switch to apixaban (with dose adjustment). Do not wait for a bleed to discover this."
          },
          {
            role: "labtech", type: "practical",
            text: "HbA1c unreliability in CKD: HbA1c is falsely LOW in CKD for two reasons: (1) Shortened red cell survival (uraemia → haemolysis → fewer old cells carrying glycated Hb); (2) EPO therapy increases reticulocyte count → more young non-glycated Hb. This means a CKD patient with HbA1c of 6.5% may actually have much higher average glucose. Alternative glycaemic markers: fructosamine (reflects 2–3 week average, unaffected by RBC turnover); glycated albumin (1–2 week average). Report HbA1c in CKD patients with a comment noting potential underestimation of true glycaemic control."
          }
        ]
      }
    ],
    ev: "Renal Drug Handbook Ashley & Dunleavy 2022; BNF Appendix 3 — Renal Impairment; KDIGO CKD Guidelines 2024; Gabapentin in CKD — Matzke GR J Pharmacokinet Biopharm 1987; DOAC Renal Guidelines — EHRA 2021; Phenytoin Protein Binding — Sheiner LB Clin Pharmacokinet 1978; Azathioprine-Allopurinol Interaction — Decker DA Ann Intern Med 1966"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 12 — Drugs in Acute Kidney Injury (AKI)
  // ────────────────────────────────────────────────────────
  {
    id: 12, num: "12", icon: "🚨", free: false, dur: "2h 30m", lessons: 6, color: "#be123c",
    title: "Drugs in Acute Kidney Injury (AKI)",
    sub: "Fluid Resuscitation, Vasopressors & What Does NOT Work in AKI",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "AKI pharmacology is as much about what NOT to give as what to give. Knowing that low-dose dopamine is a myth, that loop diuretics don't improve AKI outcomes, and that the wrong fluid can cause harm — while knowing exactly which vasopressors, which fluids, and which timing matter — is the pharmacology that saves lives in the ICU.",
    story: `Medical ICU, Korle Bu Teaching Hospital, Accra.

Mr. Emmanuel Quaye, 55, is brought in by ambulance in septic shock. Source: urinary tract infection. Blood pressure 78/50 mmHg. Urine output 8 mL over the last hour. Creatinine 326 μmol/L, up from 88 μmol/L two days ago — a 3.7× rise. KDIGO Stage 3 AKI.

The intensivist, Dr. Kojo Asamoah, reviews the case with his registrar.

"What should we give him?" the registrar asks.

"Fluids first. Then vasopressors. Then nothing else that can't be justified."

"What about furosemide to make him produce urine?"

"Furosemide will make him produce more urine. It will not protect his kidneys, shorten his AKI, or reduce his dialysis risk. Multiple randomised controlled trials confirm this. What it will do is give us a false sense of security while the tubular injury progresses."

"Dopamine? Renal dose?"

"There is no such thing as a beneficial renal dose of dopamine. Another myth buried by a randomised trial. Noradrenaline to restore MAP, fluids to restore perfusion, treat the infection, and protect the remaining function. That is what works."`,
    sections: [
      {
        h: "🩺 AKI Staging, Fluid Resuscitation & Vasopressor Selection",
        a: `The pharmacological management of AKI begins before the nephrology team arrives. The fluid choice, the vasopressor, and the MAP target set in the first 2 hours determine whether an AKI is reversible or progressive. Every decision in this window is pharmacological, and every decision is evidence-based — or it should be.`,
        c: `AKI DEFINITION AND STAGING — KDIGO 2012:
AKI = any of:
→ SCr rise ≥26.5 μmol/L within 48h
→ SCr rise ≥1.5× baseline within 7 days
→ Urine output <0.5 mL/kg/hr for ≥6 hours

KDIGO STAGING:
Stage 1: SCr 1.5–1.9× baseline OR ≥26.5 μmol/L rise; UO <0.5 mL/kg/hr ×6–12h
Stage 2: SCr 2.0–2.9× baseline; UO <0.5 mL/kg/hr ×≥12h
Stage 3: SCr ≥3× baseline OR ≥353.6 μmol/L OR started on RRT; UO <0.3 mL/kg/hr ×≥24h or anuria

FLUID RESUSCITATION — PHARMACOLOGY OF IV FLUIDS:

ISOTONIC CRYSTALLOIDS — FIRST-LINE:
→ BALANCED CRYSTALLOIDS (Hartmann's/Lactated Ringer's/Plasma-Lyte): PREFERRED
  - SMART trial (NEJM 2018): balanced crystalloids vs 0.9% saline in ICU → balanced crystalloids reduced composite of death, RRT, and persistent renal dysfunction
  - 0.9% saline large volumes → hyperchloraemic metabolic acidosis → renal afferent vasoconstriction → worsens AKI
  - Mechanism of saline harm: supraphysiological Cl− load (154 mmol/L vs plasma 103 mmol/L) → hyperchloraemia → afferent vasoconstriction (chloride-mediated TGF activation)
→ 0.9% SALINE: still widely used in Ghana; preferred for hyponatraemia correction, head injury (Hartmann's hypotonic risk), hypochloraemic alkalosis
→ DOSE: 250–500 mL IV bolus over 15–30 min; reassess volume responsiveness before further boluses

AVOID SYNTHETIC COLLOIDS (HES/STARCHES):
→ HES (hydroxyethyl starch): CONTRAINDICATED in AKI and sepsis (CHEST trial, 6S trial)
→ Mechanism of harm: HES accumulates in renal tubular cells (proximal tubule vacuolation) → irreversible tubular injury
→ HES products: Voluven, Volulyte, Haemohes — avoid in all patients with AKI or risk of AKI

ALBUMIN:
→ 4–5% albumin: alternative resuscitation fluid; no outcome benefit over crystalloids in most AKI
→ 20–25% albumin: indicated in specific scenarios: cirrhotic AKI (hepatorenal syndrome), severe hypoalbuminaemia-related diuretic resistance in nephrotic syndrome
→ SBP trial: albumin + terlipressin superior to terlipressin alone in hepatorenal syndrome

FLUID OVERLOAD IN AKI:
→ Fluid overload (>10% body weight) is independently associated with increased AKI mortality
→ Cumulative fluid balance → interstitial oedema → impairs tubular recovery
→ Four-phase fluid management: Rescue (bolus for shock) → Optimisation (goal-directed) → Stabilisation (conservative) → De-escalation (remove excess fluid)
→ PICARD study: positive fluid balance in AKI associated with increased mortality

VASOPRESSORS IN SEPTIC AKI:

NORADRENALINE (NOREPINEPHRINE) — FIRST-LINE:
→ α1 receptor vasoconstriction → ↑ MAP; some β1 (mild inotropic)
→ Target MAP ≥65 mmHg; in established CKD: MAP ≥65–70 mmHg (higher threshold to maintain renal perfusion)
→ Dose: 0.01–1.0 mcg/kg/min IV infusion; CENTRAL VENOUS ACCESS preferred (peripheral extravasation → tissue necrosis)
→ Restores renal perfusion pressure → allows renal autoregulation to resume

VASOPRESSIN:
→ V1 receptor vasoconstriction; V2 receptor (collecting duct) — at low doses, renal effect minimal
→ Second vasopressor for noradrenaline-refractory septic shock
→ VASST trial: vasopressin non-inferior to noradrenaline; possible benefit in less severe septic shock
→ Dose: 0.01–0.04 units/min (fixed — do not titrate above 0.04 as ischaemic complications rise)
→ May allow noradrenaline dose reduction ('vasopressin-sparing')

DOBUTAMINE:
→ β1+β2 agonist — inotrope (not vasopressor); increases CO → improves renal perfusion in CARDIOGENIC AKI or low-CO septic shock
→ Dose: 2.5–20 mcg/kg/min; titrate to cardiac output improvement

ADRENALINE (EPINEPHRINE):
→ Second or third-line vasopressor in refractory shock
→ Caution: raises lactate (inhibits pyruvate dehydrogenase → excess lactate) — confuses lactate monitoring
→ α1 + β1 + β2 effects — tachyarrhythmia risk

DOPAMINE — THE MYTH:
→ 'Renal dose' (1–3 mcg/kg/min) stimulates D1 receptors → renal vasodilation → ↑ urine output
→ MULTIPLE RCTs (AUNZ trial Bellomo 2000, ANZICS 2000) and SYSTEMATIC REVIEWS: NO BENEFIT in AKI prevention or treatment; no reduction in dialysis need or mortality
→ ABANDONED in modern evidence-based practice
→ Still occasionally requested in Ghana's hospitals — this is not current evidence-based care
→ Higher doses (5–20 mcg/kg/min): vasopressor; acceptable if noradrenaline unavailable but inferior (more arrhythmias)`,
        kp: [
          "SMART trial: balanced crystalloids (Hartmann's) superior to 0.9% saline for AKI in ICU — hyperchloraemia from large-volume saline causes afferent vasoconstriction via TGF; use Hartmann's when available",
          "HES/starches: CONTRAINDICATED in AKI and sepsis (CHEST trial) — accumulate in PCT cells causing vacuolation and irreversible tubular injury; never give Voluven or Volulyte in AKI",
          "Noradrenaline: first-line vasopressor in septic AKI; target MAP ≥65 mmHg; vasopressin as second agent for noradrenaline-sparing; dobutamine for cardiogenic AKI",
          "Low-dose dopamine ('renal dose'): definitively proven ineffective by multiple RCTs — no benefit in AKI; do not use; dopamine at vasopressor doses acceptable only if noradrenaline unavailable",
          "Fluid overload in AKI independently increases mortality (PICARD study) — four-phase fluid management: Rescue, Optimisation, Stabilisation, De-escalation"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The 'renal dose dopamine' question appears in virtually every critical care and nephrology examination — and the correct answer is always that it does NOT work. The AUNZ trial (Bellomo, NEJM 2000) randomised 328 ICU patients with at least two SIRS criteria and oliguria to low-dose dopamine vs placebo: NO difference in peak creatinine, dialysis requirement, time to renal recovery, length of ICU stay, or mortality. Mechanism in theory (D1-mediated renal vasodilation and natriuresis) does not translate to clinical benefit. The clinical question is not 'will dopamine increase urine output' (it will, temporarily) — it is 'will it improve outcomes' (it will not)."
          },
          {
            role: "doctor", type: "clinical",
            text: "MAP target individualisation in AKI patients with pre-existing hypertension: the standard MAP ≥65 mmHg is derived from sepsis trials in patients with normal baseline BP. A patient with longstanding hypertension has shifted their renal autoregulatory curve — they require a higher MAP to maintain adequate renal perfusion (their lower limit of autoregulation may be 75–80 mmHg, not 60 mmHg). For hypertensive patients with CKD and AKI in septic shock, target MAP 70–75 mmHg. The SEPSISPAM trial demonstrated that targeting MAP 80–85 mmHg reduced need for RRT in patients with pre-existing hypertension — subgroup finding, but clinically plausible."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Central access vs peripheral noradrenaline — the Ghana practical reality: in facilities where central venous access is not immediately available, peripheral noradrenaline can be administered short-term (maximum 12 hours) via a large-bore IV in an antecubital fossa, with close monitoring for extravasation signs (pain, swelling, blanching). Extravasation of noradrenaline causes ischaemic necrosis — if suspected, stop immediately and infiltrate with phentolamine (an alpha-blocker: 5–10 mg in 10 mL saline) to reverse vasoconstriction. Phentolamine should be available in any ICU using vasopressors. Document location and appearance hourly when peripherally administered."
          },
          {
            role: "nurse", type: "clinical",
            text: "Urine output monitoring in AKI requires precision — not estimation. Strict hourly urine output via an indwelling catheter must be documented to 1 mL accuracy. In AKI management: oliguria (<0.5 mL/kg/hr for 2h) = reassess fluid status before escalating vasopressors; anuria (<50 mL in 12h) = consider dialysis planning. After fluid bolus: expect urine output response within 30–60 min in pre-renal AKI; no response suggests ATN or obstruction. Communicate urine output trends to the medical team in real time — hourly, not at the end of shift. Chart it graphically when possible to show trends."
          },
          {
            role: "labtech", type: "practical",
            text: "Lactate monitoring in septic AKI on vasopressors: initial lactate (arterial or venous) gives severity data; serial lactate every 2h guides resuscitation adequacy (target lactate clearance ≥10% per hour). NOTE: adrenaline (epinephrine) artificially raises lactate by inhibiting pyruvate dehydrogenase — a rising lactate in a patient recently started on adrenaline may reflect drug effect, not worsening tissue perfusion. Flag to the ICU team when adrenaline is being used and lactate is being tracked as a perfusion marker. Also: a low lactate does not rule out tissue hypoxia in sepsis with mitochondrial dysfunction."
          }
        ]
      },
      {
        h: "💉 What Does NOT Work in AKI + Specific Scenarios & RRT Indications",
        a: `AKI pharmacology is littered with interventions that seemed logical, were widely adopted, and then failed in rigorous trials. Knowing what does not work is not a negative lesson — it is essential knowledge that prevents harmful overtreatment and redirects clinical energy toward what actually helps. This section also covers the evidence-based pharmacological approach to specific AKI causes that are common in Ghana.`,
        c: `INTERVENTIONS PROVEN NOT TO WORK IN AKI — EVIDENCE SUMMARY:

1. LOW-DOSE DOPAMINE: Proven ineffective — multiple RCTs (AUNZ 2000); abandoned
2. LOOP DIURETICS FOR AKI TREATMENT: Furosemide converts oliguric to non-oliguric AKI (management benefit — easier fluid balance) but DOES NOT reduce mortality, dialysis need, or time to renal recovery (SPARK trial, Cochrane review). Use only for fluid management — NOT as 'renal rescue'
3. MANNITOL IN ESTABLISHED ATN: Proposed mechanism (flush tubular debris) not supported by clinical evidence; risk of volume overload in anuric/oliguric patients
4. N-ACETYLCYSTEINE (NAC) FOR ESTABLISHED AKI: Limited to contrast prophylaxis (uncertain benefit even here); no evidence for treatment of established AKI
5. ANP (ATRIAL NATRIURETIC PEPTIDE): Early promise not confirmed in RCTs; not in clinical use
6. ERYTHROPOIETIN FOR AKI: Proposed renoprotection — not confirmed in human trials; not recommended
7. ALKALINE PHOSPHATASE: Experimental in septic AKI; insufficient evidence

SPECIFIC AKI SCENARIOS — GHANA CONTEXT:

SEPTIC AKI (MOST COMMON ICU AKI):
→ Treat sepsis: IV antibiotics within 1 hour of septic shock recognition (Surviving Sepsis Campaign)
→ Source control: urological AKI → urinary catheter or nephrostomy; intra-abdominal → surgery
→ Fluids (balanced crystalloids) + noradrenaline (MAP ≥65)
→ STOP all nephrotoxins: NSAIDs, aminoglycosides (unless essential with TDM), IV contrast, metformin, SGLT2i, ACEi/ARBs acutely (reassess)

RHABDOMYOLYSIS AKI:
→ Most common precipitants in Ghana: road traffic accidents, electric shock, heat stroke during Harmattan exertion, falciparum malaria, sickle cell vaso-occlusive crisis, extreme exertion
→ PHARMACOLOGICAL MANAGEMENT:
  (1) IV ISOTONIC SALINE: 200–500 mL/h initially; target urine output >200–300 mL/h; continue until myoglobinuria clears (urine clears to normal colour)
  (2) SODIUM BICARBONATE (50–100 mEq/L added to IV fluids): alkalinise urine to pH >6.5 → myoglobin remains in ionised/soluble form → ↓ tubular precipitation; also prevents myoglobin-induced lipid peroxidation
  (3) FUROSEMIDE: only AFTER euvolaemia confirmed; maintain flow in non-oliguric patients
  (4) Monitor: urine pH, urine output, electrolytes (hyperkalaemia and hypocalcaemia common in rhabdomyolysis), CK trend

HEPATORENAL SYNDROME (HRS-AKI):
→ Pathophysiology: hepatic decompensation → splanchnic vasodilation → ↓ effective circulating volume → extreme RAAS/SNS activation → renal vasoconstriction
→ TYPE 1 HRS (now HRS-AKI): SCr doubling within 2 weeks; rapidly progressive; poor prognosis without liver transplant
→ PHARMACOLOGICAL MANAGEMENT:
  (1) TERLIPRESSIN 0.5–2 mg IV every 4–6h: V1 receptor vasoconstriction of splanchnic vasculature → ↑ effective circulating volume → ↑ MAP → ↑ renal perfusion; CONFIRM trial: terlipressin significantly increased HRS reversal vs placebo
  (2) ALBUMIN 1 g/kg day 1 (max 100g), then 20–40 g/day: maintains oncotic pressure, volume expansion, possible anti-inflammatory
  (3) NORADRENALINE (if terlipressin unavailable): 0.5–3 mg/h + albumin; equivalent efficacy, lower cost, requires ICU monitoring
  (4) AVOID ACEi/ARBs, NSAIDs, aminoglycosides, diuretics (beyond minimum for oedema control)
  (5) DEFINITIVE: liver transplant

OBSTRUCTIVE AKI (POST-RENAL):
→ Most common cause: BPH (elderly men — very common in Ghana's male population >60)
→ IMMEDIATE: urethral catheterisation → bladder decompression → expect rapid creatinine improvement
→ POST-OBSTRUCTIVE DIURESIS: common after relieving prolonged obstruction → large urine volumes (may exceed 500–1000 mL/h) → risk of volume depletion and electrolyte disturbances
→ Management: replace ~50–80% of urine output with IV saline; daily electrolytes
→ Ureteric obstruction: nephrostomy or ureteric stenting (urology)

MALARIA-ASSOCIATED AKI (GHANA-SPECIFIC):
→ Plasmodium falciparum AKI: haemolysis → haemoglobinaemia → tubular toxicity; direct endothelial injury; cytokine storm
→ Treatment: IV ARTESUNATE (SEVERE malaria — WHO recommended) as first priority
→ AKI management: supportive — cautious IV fluids (risk of pulmonary oedema in severe malaria), RRT if needed
→ AVOID: quinine + aminoglycosides (synergistic nephrotoxicity + ototoxicity); NSAIDs for fever control

RENAL REPLACEMENT THERAPY (RRT) — INDICATIONS:
Emergency indications — 'AEIOU':
A — ACIDOSIS: pH <7.10 refractory to bicarbonate
E — ELECTROLYTES: K+ ≥6.5 mEq/L with ECG changes refractory to medical management; severe hyponatraemia or hypernatraemia
I — INTOXICATION: dialysable poison (lithium, salicylates/aspirin, methanol, ethylene glycol, metformin, theophylline, vancomycin)
O — OVERLOAD: pulmonary oedema refractory to diuretics with AKI
U — URAEMIA: uraemic encephalopathy, uraemic pericarditis, uraemic bleeding

NOT DIALYSABLE (do not expect RRT to clear):
→ Digoxin (large Vd 7 L/kg) → use DIGIBIND (Digoxin-specific Fab)
→ Warfarin (99% protein bound) → use Vitamin K + FFP/PCC
→ TCAs (large Vd, high protein binding) → IV sodium bicarbonate
→ Chloroquine (Vd 250–800 L/kg) → NOT dialysable; supportive care + diazepam for seizures
→ Benzodiazepines → flumazenil (antagonist)
→ Opioids → naloxone (antagonist)`,
        kp: [
          "Furosemide in AKI: converts oliguria to non-oliguria (management benefit) but does NOT reduce mortality or dialysis need (SPARK trial, Cochrane review) — prescribe for fluid management only, never as 'renal rescue'",
          "Rhabdomyolysis: aggressive IV saline (200–500 mL/h) + urinary alkalinisation (NaHCO3, target pH >6.5) + target urine output >200 mL/h; furosemide only after euvolaemia; common precipitants in Ghana: RTAs, heat stroke, falciparum malaria",
          "HRS-AKI: terlipressin (V1 agonist → splanchnic vasoconstriction) + albumin = pharmacological treatment (CONFIRM trial); noradrenaline + albumin if terlipressin unavailable; definitive = liver transplant",
          "Emergency dialysis indications: AEIOU — Acidosis (pH <7.10), Electrolytes (K+ ≥6.5 + ECG changes), Intoxication (lithium, salicylate, methanol, metformin), Overload (refractory pulmonary oedema), Uraemia (encephalopathy, pericarditis)",
          "Chloroquine overdose: NOT dialysable (Vd 250–800 L/kg) — do not attempt haemoperfusion; management is supportive with diazepam (reduces cardiotoxicity) + adrenaline + sodium bicarbonate"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The AEIOU mnemonic for emergency dialysis indications is one of the most important clinical knowledge items in renal pharmacology. A is for Acidosis (pH <7.10 refractory to medical management). E is for Electrolytes — specifically K+ ≥6.5 mEq/L with ECG changes (peaked T waves, wide QRS, sine wave) not responding to insulin/dextrose/salbutamol/calcium gluconate. I is for Intoxication — dialysable toxins only; know the list. O is for Overload — pulmonary oedema with AKI where diuretics have failed or are ineffective. U is for Uraemia — uraemic encephalopathy (confusion, asterixis, myoclonus), uraemic pericarditis (friction rub), uraemic bleeding (platelet dysfunction). Any one of these, in the right clinical context, is an indication for emergency RRT."
          },
          {
            role: "doctor", type: "clinical",
            text: "Terlipressin availability and alternative strategies in HRS-AKI in Ghana: terlipressin is available at KBTH and KATH tertiary centres but expensive and not universally accessible. The noradrenaline + albumin protocol is an effective alternative: noradrenaline 0.5–3 mg/h IV titrated to MAP ≥80 mmHg (higher target than sepsis, because HRS requires more aggressive MAP to restore renal perfusion) + albumin 1 g/kg day 1, then 20–40 g/day. Response criteria: SCr reduction of ≥25% from baseline by day 3 suggests treatment response. If neither available: midodrine (7.5–12.5 mg TDS oral) + octreotide (100–200 mcg TDS SC) + albumin — less effective but accessible."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Intoxication requiring dialysis — the Ghana emergency list: LITHIUM (toxicity common with concurrent thiazide or NSAID; monitor if level >4 mEq/L with severe symptoms); ASPIRIN/SALICYLATE (overdose common with OTC availability; dialyse if level >700 mg/L or pH <7.10 or severe CNS symptoms); METFORMIN (lactic acidosis with AKI; dialyse if pH <7.10 or lactate >20 mmol/L); THEOPHYLLINE (narrow TI drug; dialyse if level >90 mg/L with severe toxicity); METHANOL/ETHYLENE GLYCOL (antifreeze, illicit alcohol — emerging problem; dialyse urgently + fomepizole or ethanol to inhibit alcohol dehydrogenase while dialysis is being set up)."
          },
          {
            role: "nurse", type: "clinical",
            text: "Post-obstructive diuresis management after urinary catheterisation in BPH: after placing the catheter, urine may flow rapidly — record the first hour's output. If output >500 mL/h: (1) Commence IV fluid replacement (0.9% saline at 50–80% of urine output rate); (2) Hourly electrolytes — post-obstructive diuresis causes profound hypokalaemia, hypomagnesaemia, and hyponatraemia as the kidneys rapidly excrete retained solutes; (3) Do NOT clamp the catheter after 500 mL as was once taught — this practice is no longer recommended and does not prevent bleeding; (4) Monitor BP for sudden hypotension from rapid volume redistribution. Diuresis usually subsides within 24–48h as the kidneys equilibrate."
          },
          {
            role: "labtech", type: "practical",
            text: "Myoglobin vs haemoglobin in urine — the clinical distinction: dipstick will be positive for 'blood' in both haemolysis (haemoglobin in urine) and rhabdomyolysis (myoglobin in urine). Distinguishing features: HAEMOGLOBIN — urine appears red or pink, plasma appears pink (haemolysis frees Hb into plasma), serum haptoglobin low, LDH elevated; MYOGLOBIN — urine appears dark brown/tea-coloured or cola-coloured, plasma appears CLEAR (myoglobin quickly cleared by liver), CK markedly elevated (>5× ULN, often >10,000 U/L), serum haptoglobin normal. Formal myoglobin measurement available at KBTH — order when dipstick positive for blood but no RBCs on microscopy and clinical suspicion of rhabdomyolysis."
          }
        ]
      }
    ],
    ev: "SMART Trial NEJM 2018; CHEST Trial NEJM 2012; VASST Trial NEJM 2008; AUNZ Dopamine Trial NEJM 2000; SPARK Trial Clin J Am Soc Nephrol 2014; CONFIRM Trial — Terlipressin in HRS NEJM 2021; Surviving Sepsis Campaign 2021; PICARD Study — Fluid Overload in AKI Am J Kidney Dis 2004; KDIGO AKI Guidelines 2012"
  },

];

// ─────────────────────────────────────────────────────────────
// PRE & POST QUIZ EXPORTS — Modules 10–12
// ─────────────────────────────────────────────────────────────

export const RENP_PRE_Q_M10 = [
  {
    q: "A 45-year-old man on TDF/3TC/EFV for 5 years has urine glucose 2+ on dipstick with a blood glucose of 4.8 mmol/L, phosphate of 0.51 mmol/L, and eGFR of 48. What is the most likely diagnosis?",
    opts: [
      "New onset type 2 diabetes — start metformin",
      "TDF-induced Fanconi syndrome — proximal tubule mitochondrial toxicity causing normoglycaemic glycosuria and phosphaturia; switch to TAF or abacavir",
      "Contrast-induced AKI from a recent CT scan — check radiology records",
      "Primary hyperparathyroidism — check serum calcium and PTH"
    ],
    ans: 1
  },
  {
    q: "Which of the following is the most important intervention for preventing contrast-induced AKI before an elective CT with IV iodinated contrast in a patient with eGFR 45?",
    opts: [
      "N-acetylcysteine 600 mg oral BD × 2 days before the procedure",
      "IV isotonic saline at 1 mL/kg/h for 6h before and 6h after the procedure",
      "Withholding ACE inhibitors for 48 hours before contrast",
      "Pre-medication with IV hydrocortisone to prevent allergic nephritis"
    ],
    ans: 1
  },
  {
    q: "A patient develops AKI after 7 days of IV gentamicin for Gram-negative sepsis. Urine output is maintained at 1.8 mL/kg/hr. What pattern of AKI is most characteristic of aminoglycoside toxicity?",
    opts: [
      "Oliguric AKI with anuria — aminoglycosides obstruct collecting ducts",
      "Non-oliguric AKI — aminoglycosides cause PCT cell injury (megalin-receptor mediated ROS) without complete obstruction of filtration; urine output is maintained despite rising creatinine",
      "Pre-renal AKI — aminoglycosides cause haemodynamic changes like NSAIDs",
      "Post-renal AKI — aminoglycoside crystals obstruct the ureter bilaterally"
    ],
    ans: 1
  },
  {
    q: "A hospitalised patient on long-term omeprazole for GORD develops AKI with subnephrotic proteinuria, white cell casts on urine microscopy, and eosinophiluria. There is no fever or rash. What is the most likely diagnosis?",
    opts: [
      "Omeprazole-induced ATN from direct tubular toxicity",
      "PPI-associated acute interstitial nephritis — now the most common cause of drug-AIN; classic fever/rash triad is absent in majority of PPI-AIN cases; biopsy shows interstitial lymphocytic infiltrate; stop PPI and consider prednisolone",
      "GORD-related reflux nephropathy causing obstructive AKI",
      "Allergic glomerulonephritis from omeprazole — check ANCA levels"
    ],
    ans: 1
  },
  {
    q: "Why is gadolinium-based MRI contrast contraindicated in patients with eGFR <30 mL/min?",
    opts: [
      "Gadolinium causes haemodynamic AKI by reducing renal prostaglandins at low eGFR",
      "Gadolinium is not renally cleared below eGFR 30 and deposits in skin, joints, and organs causing nephrogenic systemic fibrosis — an irreversible fibrosing condition",
      "Gadolinium accumulates in the kidney below eGFR 30 causing tubular crystal precipitation",
      "Gadolinium interferes with creatinine assays below eGFR 30 giving falsely elevated results"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M10 = [
  {
    q: "A patient on ibuprofen 400 mg TDS for knee arthritis, lisinopril 10 mg OD for hypertension, and furosemide 40 mg OD for mild ankle oedema presents with creatinine of 387 μmol/L (was 92 three weeks ago) and oliguria. What combination caused this AKI?",
    opts: [
      "Furosemide and lisinopril together — both reduce blood pressure causing renal underperfusion",
      "The Triple Whammy: NSAIDs block prostaglandin-mediated afferent dilation; ACEi blocks angiotensin-mediated efferent constriction; diuretic reduces circulating volume — all three autoregulatory mechanisms maintaining GFR are removed simultaneously",
      "Ibuprofen-induced crystal nephropathy — NSAIDs precipitate in acidic urine",
      "Lisinopril-induced bilateral renal artery stenosis was unmasked by adding ibuprofen"
    ],
    ans: 1
  },
  {
    q: "A 38-year-old HIV patient on TDF-based ART is found to have eGFR declining from 78 to 51 over 18 months with phosphate 0.58 mmol/L and normoglycaemic glycosuria. What is the recommended switch?",
    opts: [
      "Switch to zidovudine (AZT) — no renal toxicity",
      "Switch to tenofovir alafenamide (TAF) — provides equivalent antiviral activity with 90% lower plasma tenofovir exposure and dramatically reduced renal and bone toxicity; or switch to abacavir after HLA-B*5701 testing",
      "Continue TDF with dose reduction to 200 mg alternate days",
      "Add probenecid to block TDF tubular secretion and reduce intracellular accumulation"
    ],
    ans: 1
  },
  {
    q: "A patient with acyclovir-induced AKI is identified. Urine microscopy shows sheaf-like needle crystals. What is the primary preventive strategy for future acyclovir use?",
    opts: [
      "Reduce acyclovir dose by 50% in all patients regardless of hydration status",
      "Ensure IV hydration maintaining urine output >100 mL/h during IV acyclovir infusion; infuse slowly over 1 hour (not rapid bolus); the drug is highly insoluble in concentrated urine and crystals form in the distal tubule",
      "Alkalinise urine to pH >7.5 — acyclovir crystals dissolve in alkaline urine",
      "Switch to topical acyclovir — systemic exposure causes crystal nephropathy but topical does not"
    ],
    ans: 1
  },
  {
    q: "A patient is on azathioprine 100 mg OD for inflammatory bowel disease and develops gout. Allopurinol 300 mg OD is started by a different clinician. What is the critical interaction and what should be done immediately?",
    opts: [
      "Allopurinol reduces azathioprine levels — increase azathioprine dose to compensate",
      "Allopurinol inhibits xanthine oxidase (required to catabolise azathioprine's toxic 6-mercaptopurine metabolite to 6-thiouric acid) → toxic 6-thioguanine nucleotide accumulation → profound bone marrow suppression; STOP allopurinol immediately; reduce azathioprine dose by 75% or switch to mycophenolate mofetil",
      "This is a low-risk interaction — monitor FBC at 1 month",
      "Allopurinol causes urate crystal precipitation in renal tubules, damaging the same tubules that clear azathioprine"
    ],
    ans: 1
  },
  {
    q: "A patient presents with AKI following use of a traditional herbal preparation for 'kidney cleansing' purchased from a traditional healer. Renal biopsy shows severe tubulointerstitial fibrosis with loss of tubular architecture. Which nephrotoxin is most likely responsible and what is the prognosis?",
    opts: [
      "Herbal diuretic compounds — cause temporary oedema resolving with cessation",
      "Aristolochic acid — found in some traditional preparations in Ghana and across Africa; causes aristolochic acid nephropathy with irreversible progressive tubulointerstitial fibrosis even after stopping; also associated with urothelial carcinoma; no specific treatment; supportive care and transplant assessment if ESRD develops",
      "Heavy metal contamination — respond well to chelation therapy",
      "Oxalic acid from herbal leaves — causes reversible crystal nephropathy"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M11 = [
  {
    q: "A 78-year-old woman weighs 48 kg and has serum creatinine of 110 μmol/L (1.24 mg/dL). Using Cockcroft-Gault, her estimated CrCl is approximately:",
    opts: [
      "55 mL/min — mild impairment, no significant dose adjustments needed",
      "19 mL/min — severe impairment; multiple drugs will require dose adjustment or avoidance",
      "38 mL/min — moderate impairment; monitor closely",
      "72 mL/min — within acceptable range for standard dosing"
    ],
    ans: 1
  },
  {
    q: "A patient with CKD stage 4 (eGFR 22) develops painful osteoarthritis and is prescribed morphine 10 mg every 4 hours. By day 3 she is somnolent with a respiratory rate of 8/min. What is the pharmacokinetic explanation?",
    opts: [
      "Morphine itself accumulates due to reduced hepatic metabolism in CKD",
      "Morphine-6-glucuronide (M6G), an active renally-cleared metabolite of morphine, accumulates in CKD causing prolonged and enhanced opioid effects including respiratory depression",
      "CKD reduces blood-brain barrier permeability, concentrating morphine in the CNS",
      "CKD increases morphine protein binding, releasing a toxicity-causing free drug fraction"
    ],
    ans: 1
  },
  {
    q: "Why does phenytoin toxicity occur at 'therapeutic' total plasma levels in patients with hypoalbuminaemia and CKD?",
    opts: [
      "CKD reduces hepatic phenytoin metabolism, increasing total drug levels",
      "Phenytoin is 90% protein-bound; hypoalbuminaemia doubles the free (active) fraction — a 'therapeutic' total level of 15 mg/L with low albumin may represent dangerously high free drug; measure free phenytoin to guide dosing",
      "CKD increases phenytoin renal excretion, requiring higher doses to maintain total levels",
      "CKD reduces phenytoin protein binding by altering the drug's pKa"
    ],
    ans: 1
  },
  {
    q: "Which DOAC is most appropriate for a patient with CKD (eGFR 26 mL/min) requiring anticoagulation for atrial fibrillation?",
    opts: [
      "Dabigatran 150 mg BD — most potent anticoagulation for AF stroke prevention",
      "Apixaban 2.5 mg BD (dose-reduced) — least renally dependent DOAC (fe ~27%); can be used down to eGFR 25 with dose adjustment; safest choice in this scenario",
      "Rivaroxaban 20 mg OD — once-daily dosing improves adherence in CKD",
      "Edoxaban 60 mg OD — standard dose remains effective at this eGFR"
    ],
    ans: 1
  },
  {
    q: "A patient with eGFR 14 mL/min is on gabapentin 300 mg TDS for diabetic neuropathy. She is admitted with increasing sedation, confusion, and respiratory rate of 10/min. What is the most likely pharmacokinetic explanation?",
    opts: [
      "Gabapentin has caused allergic encephalitis",
      "Gabapentin is ~100% renally cleared; at eGFR 14, its half-life extends dramatically and it accumulates to toxic levels causing sedation and respiratory depression; reduce to 100 mg every 48–72h or hold entirely",
      "Uraemic encephalopathy is worsening independently of gabapentin",
      "Gabapentin has inhibited CYP3A4 causing accumulation of concurrent medications"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M11 = [
  {
    q: "A patient with eGFR 38 mL/min has a UTI confirmed on MSU culture. Nitrofurantoin is prescribed. What is the most appropriate response?",
    opts: [
      "Dispense nitrofurantoin at reduced dose — 50 mg BD is safe at eGFR 38",
      "Do not dispense nitrofurantoin — it is contraindicated below eGFR 45 (both ineffective due to inadequate urinary concentration AND causes peripheral neuropathy from systemic accumulation); prescribe cefalexin 500 mg BD or trimethoprim 200 mg BD instead",
      "Nitrofurantoin 100 mg BD is acceptable — eGFR 38 is within the mild impairment range",
      "Switch to IV nitrofurantoin — oral bioavailability is reduced in CKD"
    ],
    ans: 1
  },
  {
    q: "An elderly patient on insulin for type 2 diabetes has progressive CKD with eGFR declining from 52 to 31 over 18 months. He has been having more frequent hypoglycaemic episodes. What is the pharmacokinetic explanation and management?",
    opts: [
      "CKD increases insulin absorption from SC injection sites — reduce injection site rotation",
      "The kidneys degrade 30–40% of circulating insulin; as eGFR declines, insulin clearance falls, insulin half-life extends, and insulin requirements fall — proactively reduce insulin doses by 25–50% as eGFR declines below 30 to prevent hypoglycaemia",
      "CKD decreases glucagon counter-regulation — add glucagon injection kit",
      "The patient is absorbing excess dietary glucose from uraemic gut changes — reduce carbohydrate intake"
    ],
    ans: 1
  },
  {
    q: "A renal transplant patient is on tacrolimus 3 mg BD with trough levels 8 ng/mL. They develop a severe Candida infection requiring systemic fluconazole. What is the expected pharmacokinetic interaction?",
    opts: [
      "Fluconazole induces CYP3A4, reducing tacrolimus levels — increase tacrolimus dose",
      "Fluconazole inhibits CYP3A4, dramatically increasing tacrolimus plasma levels — reduce tacrolimus dose proactively (often by 50%) and monitor trough levels every 2–3 days; target trough 5–15 ng/mL; tacrolimus toxicity (nephrotoxicity, neurotoxicity) is a real and serious risk",
      "No interaction — tacrolimus is metabolised by CYP2D6, not CYP3A4",
      "Fluconazole and tacrolimus compete for renal excretion — separate dosing times by 4 hours"
    ],
    ans: 1
  },
  {
    q: "A patient with eGFR 28 is admitted and found to be on the following: atenolol 50 mg OD, sotalol 80 mg BD, dabigatran 150 mg BD, and gabapentin 300 mg TDS. Prioritising by risk of harm, which requires the most urgent intervention?",
    opts: [
      "Atenolol — it is the least renal-safe beta-blocker in this list",
      "Dabigatran — contraindicated at eGFR <30 (fe ~80%); risk of life-threatening bleeding; switch to apixaban (dose-reduced) immediately; additionally sotalol requires urgent QTc review (accumulates in CKD → QT prolongation → torsades); dabigatran takes priority as it has an absolute contraindication",
      "Gabapentin — most sedating drug in the list",
      "Sotalol — QT prolongation risk is the most immediately life-threatening"
    ],
    ans: 1
  },
  {
    q: "Which neuromuscular blocking agent is preferred for a patient with eGFR 8 requiring intubation in the ICU, and why?",
    opts: [
      "Vecuronium — metabolised to active compounds that have minimal renal clearance",
      "Atracurium — undergoes Hofmann elimination (spontaneous chemical degradation dependent on temperature and pH, not organ function); no active renal metabolites; safe in ESRD without dose adjustment",
      "Rocuronium — reversed by sugammadex which overcomes any accumulation",
      "Suxamethonium (succinylcholine) — pseudocholinesterase metabolism avoids renal clearance entirely"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M12 = [
  {
    q: "A patient in septic shock with AKI is started on 0.9% normal saline for resuscitation. The SMART trial demonstrated that balanced crystalloids (Hartmann's) are superior. What is the mechanism of harm from large-volume 0.9% saline?",
    opts: [
      "Normal saline causes hypernatraemia, which directly damages renal tubular cells",
      "Supraphysiological chloride load (154 mmol/L vs plasma 103 mmol/L) causes hyperchloraemia, which activates tubuloglomerular feedback causing afferent vasoconstriction and worsening AKI",
      "Normal saline's lack of bicarbonate worsens the metabolic acidosis of AKI",
      "Normal saline causes dilutional hypoalbuminaemia, reducing oncotic pressure in glomerular capillaries"
    ],
    ans: 1
  },
  {
    q: "What did the AUNZ trial (Bellomo 2000) conclusively demonstrate about low-dose dopamine in AKI?",
    opts: [
      "Low-dose dopamine (1–3 mcg/kg/min) reduced AKI progression by 20% via D1-mediated renal vasodilation",
      "Low-dose dopamine had no benefit over placebo in AKI — no reduction in peak creatinine, dialysis need, time to renal recovery, or mortality; the concept of 'renal dose dopamine' was definitively refuted",
      "Low-dose dopamine was beneficial only in oliguric AKI but not non-oliguric",
      "Low-dose dopamine reduced mortality in septic AKI but not other causes"
    ],
    ans: 1
  },
  {
    q: "Which IV fluid is CONTRAINDICATED in sepsis-related AKI based on the CHEST trial?",
    opts: [
      "Hartmann's solution (lactated Ringer's) — lactate is harmful in liver failure",
      "Hydroxyethyl starch (HES/starches such as Voluven) — accumulate in renal tubular cells causing vacuolation and irreversible tubular injury; associated with increased need for RRT and mortality in sepsis",
      "4% albumin solution — oncotic pressure increase damages glomerular filtration",
      "Plasmalyte 148 — hyperosmolality worsens medullary ischaemia"
    ],
    ans: 1
  },
  {
    q: "A patient with hepatorenal syndrome type 1 (HRS-AKI) is admitted with rapidly rising creatinine and tense ascites. What is the evidence-based pharmacological treatment?",
    opts: [
      "IV furosemide at high doses to treat the ascites driving the AKI",
      "Terlipressin (V1 receptor agonist causing splanchnic vasoconstriction → ↑ effective circulating volume → ↑ renal perfusion) + albumin (volume expansion + anti-inflammatory); CONFIRM trial: significantly increased HRS reversal vs placebo",
      "ACE inhibitor to reduce the elevated angiotensin II driving renal vasoconstriction in cirrhosis",
      "Dopamine infusion to cause renal vasodilation and increase urine output"
    ],
    ans: 1
  },
  {
    q: "The AEIOU mnemonic describes emergency dialysis indications. What does 'I' represent, and name two specific dialysable drugs?",
    opts: [
      "I = Inflammation — dialysis removes pro-inflammatory cytokines in sepsis",
      "I = Intoxication — poisoning with dialysable substances; examples: lithium (low Vd, no protein binding, MW 7 Da) and salicylate/aspirin (low Vd, becomes dialysable at high levels when protein binding is saturated)",
      "I = Immunosuppression — dialysis removes immunosuppressants after transplant rejection",
      "I = Infection — dialysis removes bacterial endotoxins causing urosepsis"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M12 = [
  {
    q: "A 42-year-old man presents with CK of 142,000 U/L following a road traffic accident on the Accra-Kumasi road. Creatinine is 186 μmol/L and rising. Urine is dark brown. What is the priority pharmacological management?",
    opts: [
      "IV furosemide 200 mg immediately to flush myoglobin through the tubules",
      "Aggressive IV isotonic saline 500 mL/h targeting urine output >200–300 mL/h + IV sodium bicarbonate to alkalinise urine to pH >6.5 (myoglobin is more soluble and less tubulotoxic at alkaline pH); furosemide only added after euvolaemia is confirmed",
      "IV mannitol 20% 1g/kg to force diuresis and flush tubular casts",
      "Urgent haemodialysis to remove myoglobin from the circulation"
    ],
    ans: 1
  },
  {
    q: "An intensivist is managing a patient in septic AKI whose MAP remains 54 mmHg despite 3L of Hartmann's solution. Noradrenaline is started. The registrar asks if dopamine should be added for 'renal protection'. What is the correct response?",
    opts: [
      "Yes — add dopamine 2 mcg/kg/min; D1 receptor stimulation will protect remaining nephrons",
      "No — low-dose dopamine has no benefit in AKI and is not renoprotective; the AUNZ trial definitively showed no reduction in AKI progression or dialysis need; optimise noradrenaline dose to achieve MAP ≥65 mmHg and ensure adequate volume resuscitation — these are what actually protect the kidney",
      "Yes — add dopamine at 5 mcg/kg/min; the higher dose provides better renal vasodilation",
      "Only if MAP does not improve after 30 minutes on noradrenaline — dopamine is a second-line renal protectant"
    ],
    ans: 1
  },
  {
    q: "A patient with AKI has K+ of 6.8 mEq/L with peaked T waves and widened QRS on ECG. Despite IV calcium gluconate, insulin/dextrose, and nebulised salbutamol, K+ remains 6.4 mEq/L and ECG shows a sinusoidal pattern. What is the definitive management?",
    opts: [
      "Give a second round of insulin/dextrose and repeat calcium gluconate",
      "Emergency renal replacement therapy (AEIOU-I: Electrolyte — K+ ≥6.5 with ECG changes refractory to medical management is an absolute emergency dialysis indication); prepare for immediate RRT while continuing medical stabilisation measures",
      "IV sodium bicarbonate 8.4% — shifts K+ intracellularly and buys more time",
      "Oral calcium resonium 30 g — will bind K+ in the gut within 4–6 hours"
    ],
    ans: 1
  },
  {
    q: "A 66-year-old man with BPH is catheterised after presenting with acute urinary retention and AKI (creatinine 320 μmol/L). After catheterisation, urine output is 800 mL in the first hour. What is the priority management?",
    opts: [
      "Clamp the catheter after 500 mL to prevent rapid decompression haemorrhage",
      "Replace 50–80% of urine output with IV isotonic saline and monitor electrolytes hourly — post-obstructive diuresis causes rapid K+, Na+, and Mg2+ depletion as the kidneys excrete retained solutes; do NOT clamp the catheter (this practice is no longer recommended); diuresis usually resolves within 24–48h",
      "Give furosemide to maintain the diuretic flow and flush the tubules",
      "No fluid replacement needed — the patient is producing adequate urine"
    ],
    ans: 1
  },
  {
    q: "A patient takes an overdose of chloroquine (Vd 250–800 L/kg). The toxicology team asks whether emergency haemodialysis should be started. What is the correct pharmacological reasoning?",
    opts: [
      "Yes — chloroquine has low molecular weight and would be efficiently dialysed",
      "No — chloroquine has an extremely large volume of distribution (250–800 L/kg), meaning the vast majority of drug is in tissues, not in plasma; haemodialysis only clears plasma drug and would remove an insignificant fraction; management is supportive with IV diazepam (reduces cardiotoxicity), IV adrenaline (manages hypotension), and sodium bicarbonate (widens QRS correction)",
      "Yes — chloroquine inhibits renal tubular secretion of itself, making dialysis more effective",
      "Only if serum chloroquine level exceeds 5 mg/L — below this threshold dialysis is not indicated"
    ],
    ans: 1
  }
];
// ============================================================
// renp_data.js — Renal Pharmacology: Drugs & the Kidney
// LegonMed Platform · Course ID: renp
// Modules 13–16 of 16
// ============================================================

export const RENP_MODS_13_16 = [

  // ────────────────────────────────────────────────────────
  // MODULE 13 — Dialysis Pharmacology & Drug Removal
  // ────────────────────────────────────────────────────────
  {
    id: 13, num: "13", icon: "🔄", free: false, dur: "2h", lessons: 6, color: "#0369a1",
    title: "Dialysis Pharmacology & Drug Removal",
    sub: "What Dialysis Removes, What It Cannot, and How It Changes Every Drug Decision",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "A patient on thrice-weekly haemodialysis is not simply a patient with zero kidney function. They are a patient with an artificial, intermittent, partially effective kidney — and every drug prescribed must account for what that machine removes, what it does not, and when it is running.",
    story: `Renal Dialysis Unit, Korle Bu Teaching Hospital, Accra. Tuesday morning.

Mrs. Ama Owusu-Acheampong, 52, arrives for her scheduled 4-hour haemodialysis session. She was admitted last night with a right foot cellulitis that is not improving. The surgical team has recommended IV vancomycin for MRSA coverage.

The dialysis nurse, Sister Abena Danso, checks the prescription: Vancomycin 1g IV every 12 hours.

She calls the ward pharmacist, Mr. Kwabena Oti. "This patient is on three-times-weekly dialysis with a high-flux membrane. She has another session in 48 hours. This dose schedule doesn't seem right."

Mr. Oti agrees. "High-flux haemodialysis removes about 50–60% of vancomycin per session. If we give 1g every 12 hours, we're overdosing her between sessions and then the dialysis removes half of it before it can work. She needs a post-dialysis dose strategy with trough monitoring before each session."

Sister Danso: "So what she needs is not a standard antibiotic schedule — it's a dialysis-synchronised one?"

"Exactly. The machine is part of the drug's clearance system. If you don't account for it, the prescription is wrong by design."`,
    sections: [
      {
        h: "⚗️ Principles of Drug Removal by Dialysis",
        a: `Dialysis removes drugs by the same physical principles as glomerular filtration — diffusion across a semipermeable membrane down a concentration gradient. But unlike the glomerulus, which filters continuously, dialysis filters intermittently. This creates a pharmacokinetic environment unlike anything in normal physiology, and prescribing must be adapted to it.`,
        c: `MECHANISMS OF DRUG REMOVAL BY DIALYSIS:

DIFFUSION: Primary mechanism in conventional haemodialysis (HD)
→ Drug moves from blood (high concentration) → dialysate (low concentration) across membrane
→ Driving force: concentration gradient
→ Efficient for: small, water-soluble, low-protein-bound molecules

CONVECTION: Primary in haemofiltration (HF) and haemodiafiltration (HDF)
→ Drug carried across membrane with water (solvent drag)
→ More efficient for larger molecules (molecular weight up to ~30,000 Da)
→ CRRT uses predominantly convective clearance

ADSORPTION:
→ Drug binds to dialysis membrane material
→ High-flux membranes (polysulfone, polyamide) more adsorbent than low-flux (cuprophan)
→ Clinically relevant for vancomycin (significantly adsorbed to high-flux membranes)

FOUR DETERMINANTS OF DIALYSABILITY:

1. MOLECULAR WEIGHT (MW):
→ Low-flux HD: efficiently removes <500 Da
→ High-flux HD: efficiently removes up to ~15,000 Da
→ CRRT (convective): removes up to ~30,000 Da (including cytokines, beta-2 microglobulin)
→ Examples: lithium (MW 7 Da — very dialysable), vancomycin (MW 1,449 Da — dialysable with high-flux membranes), albumin (MW 66,000 Da — NOT dialysable)

2. PROTEIN BINDING:
→ Only FREE drug is removed by dialysis
→ High protein binding = poor dialysability regardless of MW
→ Warfarin (99% bound): NOT dialysable despite low MW
→ Digoxin (25% bound): NOT effectively dialysable due to large Vd (see below)
→ Phenytoin (90% bound): NOT effectively dialysable
→ Lithium (0% bound): highly dialysable

3. VOLUME OF DISTRIBUTION (Vd):
→ LOW Vd (<1 L/kg): drug stays in plasma → accessible to dialysis
→ HIGH Vd (>2 L/kg): drug sequestered in tissues → only plasma fraction accessible → dialysis removes small fraction → REBOUND after session (drug redistributes from tissues back to plasma)
→ DIGOXIN: Vd 7 L/kg → NOT effectively dialysable; use DIGIBIND
→ CHLOROQUINE: Vd 250–800 L/kg → dialysis completely ineffective
→ TCAs: Vd 10–30 L/kg → NOT dialysable; IV NaHCO3 is the treatment
→ LITHIUM: Vd 0.7 L/kg → very dialysable; BUT significant rebound (bone/RBC pool)

4. WATER SOLUBILITY:
→ Hydrophilic drugs: concentrated in plasma, dialysable
→ Lipophilic drugs: distributed in tissues, poorly dialysable

DIALYSIS MODALITIES — DRUG REMOVAL EFFICIENCY:

LOW-FLUX HD: removes drugs <500 Da; less efficient for vancomycin
HIGH-FLUX HD: removes drugs up to ~15,000 Da; removes 50–60% vancomycin per session; used at KBTH
CRRT (CVVH/CVVHD/CVVHDF): continuous, gentler; haemodynamically better tolerated; removes drugs over 24h; important for septic AKI patients on multiple antibiotics — clearance occurs continuously
PERITONEAL DIALYSIS (PD): less efficient than HD for drug removal; removes only ~10–20% of HD's drug clearance; mainly removes small molecules; used for peritoneal dialysis-related peritonitis treatment (intraperitoneal antibiotics)`,
        kp: [
          "Four determinants of dialysability: low MW + low protein binding + low Vd + hydrophilic = highly dialysable; high protein binding OR high Vd = poorly dialysable regardless of other properties",
          "High-flux HD removes 50–60% vancomycin per session — dose AFTER dialysis, not on a standard 12-hourly schedule; monitor trough before each session",
          "Lithium: ideal dialysability (MW 7, Vd 0.7 L/kg, 0% protein bound) but significant rebound from bone/RBC compartment after HD — repeat sessions often needed",
          "Digoxin: poor dialysability despite moderate protein binding — large Vd 7 L/kg sequesters drug in myocardium; treatment of overdose is DIGIBIND (Fab fragments), not dialysis",
          "CRRT removes drugs continuously at lower rates than HD — important for ICU patients where continuous drug levels need to be maintained; calculate CRRT contribution to total drug clearance"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The Vd concept in dialysis is the most common source of examination errors. Students assume that because digoxin has only 25% protein binding, it would be well dialysed. Wrong — Vd 7 L/kg means >99% of body digoxin is in the myocardium, skeletal muscle, and other tissues. Dialysis removes only the plasma fraction — a tiny fraction of total body drug. After dialysis, tissue drug redistributes back to plasma (rebound). This is why digoxin overdose is treated with Digoxin-specific Fab (Digibind) — these antibodies penetrate tissues, bind digoxin there, and drag it back to plasma for excretion. Dialysis alone is nearly useless for digoxin toxicity."
          },
          {
            role: "doctor", type: "clinical",
            text: "CRRT drug dosing in the ICU requires calculating the contribution of the extracorporeal circuit to total drug clearance. Total drug clearance (CLtotal) = Residual renal clearance + Hepatic clearance + CRRT clearance. CRRT clearance = sieving coefficient (Sc) × effluent flow rate. Sc for a drug ≈ unbound fraction (fu) for most drugs. Example: vancomycin Sc ≈ 0.7 (70% unbound) × effluent rate 25 mL/kg/h = significant continuous clearance. In a septic ICU patient on CRRT, vancomycin doses often need to be HIGHER than for anuric non-CRRT patients to maintain therapeutic levels — counterintuitive but pharmacokinetically correct."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Antibiotic timing relative to dialysis sessions is the most critical practical prescribing issue in dialysis patients. General rule: give dialysable antibiotics AFTER the dialysis session to ensure therapeutic levels during the inter-dialysis period. If the drug is needed BEFORE the session (e.g., to treat active infection), give it and plan a supplemental dose after dialysis. Specific examples: vancomycin — monitor trough before each HD session; give 500–1000 mg IV post-HD if trough <15 mg/L. Amoxicillin — nearly completely removed; give after HD. Gentamicin — give after HD; trough <1 mg/L before next dose. Metronidazole — minimal removal; give normal dose."
          },
          {
            role: "nurse", type: "clinical",
            text: "Anticoagulation during haemodialysis sessions: standard HD anticoagulation in Ghana's dialysis units uses unfractionated heparin (UFH): loading dose 2,000–5,000 units IV bolus at start of session; maintenance 500–1,000 units/h during session; stop 30–60 minutes before session end. In patients with HIGH BLEEDING RISK (post-surgical, active GI bleed): minimal heparin (500 units loading only) or heparin-free protocol with saline flushes every 15–30 min. Regional citrate anticoagulation: anticoagulates only the extracorporeal circuit; useful in bleeding-risk patients; requires calcium replacement (citrate chelates calcium); monitor ionised calcium closely."
          },
          {
            role: "labtech", type: "practical",
            text: "Pre-dialysis vs post-dialysis drug level interpretation: ALWAYS specify sample timing relative to dialysis session when ordering drug levels in HD patients. PRE-DIALYSIS trough = true steady-state trough (most clinically useful). POST-DIALYSIS level = artificially low (dialysis has removed drug); NOT useful for routine monitoring. REBOUND level (2–4h after HD): reflects redistribution from tissues — useful for lithium (post-HD level underestimates total body burden; check 2–4h post-session for true level). Document on all drug monitoring requests: 'patient on HD, sample drawn [X hours] before/after dialysis session.' Without this, the result cannot be interpreted correctly."
          }
        ]
      },
      {
        h: "💊 Prescribing in Dialysis Patients — Antibiotics, CKD-MBD & Overdose Management",
        a: `Dialysis patients are among the most pharmacologically complex patients in any hospital. They receive drugs for their primary condition, drugs for dialysis-related complications (anaemia, bone disease, hyperphosphataemia), and acute drugs for infections and other intercurrent illness. Every prescription intersects with the dialysis schedule and the altered pharmacokinetics of ESRD.`,
        c: `ANTIBIOTIC PRESCRIBING IN HAEMODIALYSIS — PRACTICAL GUIDE:

VANCOMYCIN:
→ High-flux HD removes 50–60% per 4h session; low-flux HD removes 15–30%
→ Standard approach: 1g IV post-HD; recheck trough before next session (target 10–20 mg/L)
→ Preferred monitoring: AUC-guided (AUC/MIC 400–600); reduce nephrotoxicity while maintaining efficacy
→ Do NOT give on a standard 12-hourly schedule in HD patients

GENTAMICIN:
→ ~80% removed by HD per session
→ Regimen: 1–1.5 mg/kg IV post-HD; check trough pre-HD (<2 mg/L for safety; ideally <1 mg/L)
→ Limit to <5 sessions of gentamicin where possible (ototoxicity risk)

CIPROFLOXACIN:
→ ~30–40% removed by HD; give 250–500 mg post-HD
→ Oral absorption maintained in dialysis patients (unlike many other antibiotics)

AMOXICILLIN / CO-AMOXICLAV:
→ High water solubility, low Vd — significantly removed by HD
→ Give dose after HD session; 250–500 mg amoxicillin post-HD

METRONIDAZOLE:
→ Minimal removal by HD (high protein binding + Vd)
→ Give normal dose; no HD-specific adjustments needed

FLUCONAZOLE:
→ ~80% removed by HD — give 200 mg post-HD (normal daily dose)
→ Dose should be given AFTER session to maintain therapeutic fungicidal levels

INTRAPERITONEAL ANTIBIOTICS (for peritoneal dialysis-related peritonitis — PDAP):
→ Direct instillation into peritoneal cavity achieves high local concentrations
→ VANCOMYCIN IP: 1–1.5g in one bag, dwell ≥6h; repeat every 3–5 days (long half-life in peritoneum)
→ CEFAZOLIN IP: 500 mg/L loading, 125 mg/L maintenance
→ GENTAMICIN IP: 0.6 mg/kg in one bag daily
→ Biofilm on catheter: change catheter if no improvement at 5 days

CKD-MINERAL AND BONE DISORDER (CKD-MBD) MANAGEMENT IN DIALYSIS:

Abnormalities: ↑ phosphate (↓ renal excretion), ↓ active vitamin D (↓ 1-alpha-hydroxylation), ↑ PTH (secondary hyperparathyroidism), ↓ calcium, vascular calcification

PHOSPHATE BINDERS (given with every meal):
→ CALCIUM CARBONATE: cheap; widely available Ghana; risk of hypercalcaemia with concurrent vitamin D
→ CALCIUM ACETATE: more phosphate binding per unit calcium; less GI calcium absorption
→ SEVELAMER HCl / SEVELAMER CARBONATE: NON-calcium, NON-aluminium binder; preferred when hypercalcaemia or vascular calcification; also reduces LDL; expensive
→ LANTHANUM CARBONATE: chewable; non-calcium; expensive
→ DRUG INTERACTION: phosphate binders chelate fluoroquinolones, iron, mycophenolate, levothyroxine → SEPARATE BY 2 HOURS

VITAMIN D THERAPY:
→ ALFACALCIDOL or CALCITRIOL (1α-hydroxylated — active form; kidneys cannot perform final activation step in ESRD)
→ Suppresses PTH; increases calcium and phosphate absorption
→ Risk: HYPERCALCAEMIA and hyperphosphataemia — monitor calcium × phosphate product (<4.4 mmol²/L² to avoid vascular calcification)

CINACALCET (CALCIMIMETIC):
→ Sensitises calcium-sensing receptor (CaSR) on parathyroid gland → ↓ PTH secretion → ↓ bone resorption
→ Does NOT raise calcium or phosphate (unlike vitamin D)
→ Preferred when Ca2+ already high or in calciphylaxis
→ CYP3A4 metabolite; CYP2D6 inhibitor — check interactions

ERYTHROPOIESIS-STIMULATING AGENTS (ESAs) + IV IRON:
→ ESAs (EPOETIN ALFA, DARBEPOETIN): stimulate RBC production; target Hb 100–115 g/L (higher targets increase CV risk — TREAT trial)
→ IV IRON required for ESA response (oral iron poorly absorbed in ESRD + GI intolerance)
→ FERRIC CARBOXYMALTOSE or IRON SUCROSE: given IV at end of HD session; iron stores must be replete (ferritin 200–500 ng/mL, TSAT >20%) for adequate ESA response
→ ESA hyporesponsiveness: causes — iron deficiency, infection/inflammation (hepcidin), severe hyperparathyroidism, aluminium toxicity, folate/B12 deficiency

DRUG OVERDOSE AND DIALYSIS — THE FULL DECISION FRAMEWORK:

DIALYSE (high dialysability):
→ LITHIUM: MW 7, Vd 0.7 L/kg, 0% protein bound → very dialysable; level >4 mEq/L with symptoms; rebound — repeat sessions
→ ASPIRIN (SALICYLATE): dialysable at high levels (protein binding saturated at toxic levels); pH <7.10 or level >700 mg/L or severe CNS symptoms
→ METFORMIN (lactic acidosis): removes metformin AND corrects lactate directly
→ METHANOL / ETHYLENE GLYCOL: removes parent compound AND prevents formation of toxic metabolites (formate, oxalate); combine with FOMEPIZOLE (alcohol dehydrogenase inhibitor) while setting up dialysis
→ THEOPHYLLINE: charcoal haemoperfusion more efficient; HD second choice
→ VANCOMYCIN: if dangerously supratherapeutic in anuric patient — high-flux HD effective

DO NOT DIALYSE (use specific antidotes):
→ DIGOXIN (Vd 7 L/kg): → DIGIBIND (digoxin-specific Fab fragments; dose based on digoxin level × 5.6 × weight in kg / 1000)
→ WARFARIN (99% protein bound): → Vitamin K IV + FFP or 4-factor PCC
→ TCAs (Vd 10–30 L/kg): → IV NaHCO3 (alkalinise plasma → reduces free TCA → reduces Na+ channel blockade)
→ CHLOROQUINE (Vd 250–800 L/kg): → supportive; IV diazepam reduces cardiotoxicity; adrenaline for shock
→ OPIOIDS: → NALOXONE (antagonist; short t½ — may need infusion)
→ BENZODIAZEPINES: → FLUMAZENIL (antagonist; short t½ — resedation common)`,
        kp: [
          "Vancomycin in high-flux HD: 50–60% removed per session; give 1g post-HD with trough monitoring before each session (target 10–20 mg/L); AUC-guided monitoring now preferred",
          "Phosphate binders chelate fluoroquinolones, iron, mycophenolate, levothyroxine — ALWAYS separate by 2 hours; calcium carbonate is cheapest and most available in Ghana",
          "Cinacalcet (calcimimetic): sensitises CaSR → ↓ PTH without raising calcium or phosphate; preferred over vitamin D when calcium already elevated or calciphylaxis present",
          "ESA target Hb 100–115 g/L in dialysis (TREAT trial — higher targets increase CV risk); requires IV iron (oral absorption poor in ESRD); check ferritin and TSAT before starting ESA",
          "Dialysis for overdose: DIALYSE lithium, salicylate, metformin, methanol, ethylene glycol; DO NOT dialyse digoxin (use Digibind), warfarin (use PCC/FFP), TCAs (use NaHCO3), chloroquine (supportive)"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The calcimimetic vs vitamin D distinction in secondary hyperparathyroidism: CALCITRIOL (active vitamin D) suppresses PTH by binding VDR in parathyroid cells → ↓ PTH gene transcription; BUT also increases GI calcium and phosphate absorption → RAISES Ca2+ and PO4. Risk: calcium-phosphate product rises → vascular calcification. CINACALCET sensitises CaSR on parathyroid cell → ↓ PTH without any effect on GI absorption → Ca2+ and PO4 fall (because less bone resorption from lower PTH). Rule: when Ca2+ is already high — use cinacalcet. When Ca2+ is low and you want to raise it while suppressing PTH — use calcitriol. These are complementary, not competing drugs."
          },
          {
            role: "doctor", type: "clinical",
            text: "Calciphylaxis (calcific uraemic arteriolopathy) is one of the most feared complications of advanced CKD and dialysis. Pathophysiology: vascular smooth muscle calcification → ischaemic skin necrosis → excruciatingly painful ulcers with high mortality (50–80% at 1 year). Pharmacological management: (1) STOP calcium-containing phosphate binders (replace with sevelamer); (2) STOP active vitamin D analogues (replaced by cinacalcet); (3) IV SODIUM THIOSULFATE: chelates calcium deposits, dissolves calcification — 25g IV TDS after each dialysis session; evidence limited but clinical benefit reported; (4) Aggressive wound care; (5) Optimise PTH. Prevention: avoid calcium-phosphate product >4.4 mmol²/L²."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Iron management in ESRD — practical Ghana context: IRON SUCROSE (Venofer) is the most widely available IV iron preparation in Ghana's dialysis units. Dose: 200 mg IV over 30 min at end of dialysis session; repeat weekly until ferritin >200 ng/mL. Do NOT give during same session as EPO — space by at least 30 min to avoid iron-EPO interaction. FERRIC CARBOXYMALTOSE: single large dose (500–1000 mg) possible; less frequent dosing; increasingly available. ORAL IRON: unreliable in ESRD due to: hepcidin upregulation blocking GI absorption, GI intolerance, phosphate binder binding to iron in GI tract — IV iron is standard of care."
          },
          {
            role: "nurse", type: "clinical",
            text: "IV iron administration during HD — safety protocol: administer iron sucrose during the LAST 30–60 minutes of the dialysis session (not at the beginning — allows monitoring for reactions without interrupting the session prematurely). Watch for: metallic taste (common, harmless), flushing (slow the infusion), hypotension (stop, give saline, inform doctor). Anaphylaxis is rare (<1:200,000) but possible — have adrenaline and resuscitation equipment at hand. Document the batch number and infusion rate. Do not leave the patient unattended during the first 10 minutes of iron infusion. Record pre- and post-infusion BP."
          },
          {
            role: "labtech", type: "practical",
            text: "Iron studies interpretation in dialysis patients: ferritin is an ACUTE-PHASE REACTANT — elevated in infection and inflammation regardless of iron stores. A dialysis patient with ferritin 800 ng/mL and infection may actually be iron-deficient. Always interpret ferritin WITH transferrin saturation (TSAT): TSAT <20% + ferritin <500 = iron-deficient despite potentially elevated ferritin; TSAT >30% + ferritin >500 = iron-replete (check for haemochromatosis or recent IV iron). Report both values together and flag discordant results (high ferritin + low TSAT = likely functional iron deficiency + inflammation). This distinction determines whether IV iron should be given."
          }
        ]
      }
    ],
    ev: "KDIGO CKD-MBD Guidelines 2017; TREAT Trial NEJM 2009; EVOLVE Trial NEJM 2012; Peritoneal Dialysis-Related Infections Recommendations ISPD 2022; EHRA Practical Guide to DOACs in ESRD 2021; Calciphylaxis Treatment — Brandenburg VM Nat Rev Nephrol 2017"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 14 — Drugs for Nephrotic & Nephritic Syndrome
  // ────────────────────────────────────────────────────────
  {
    id: 14, num: "14", icon: "🧪", free: false, dur: "2h", lessons: 6, color: "#7e22ce",
    title: "Drugs for Nephrotic & Nephritic Syndrome",
    sub: "Immunosuppression, Renoprotection & Supportive Therapy in Glomerular Disease",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Glomerular disease ranges from the highly steroid-sensitive minimal change disease of childhood to the devastating anti-GBM disease of Goodpasture's syndrome. The pharmacological approach spans steroids, calcineurin inhibitors, rituximab, and cyclophosphamide — and choosing the wrong drug or wrong duration is as harmful as treating too late.",
    story: `Nephrology Clinic, University of Ghana Medical Centre, Accra.

Two patients. Same ward. Very different stories.

Bed 4: Kofi Asante, 9 years old. Puffy face, swollen ankles, frothy urine since last week. Urine protein 4+. Albumin 14 g/L. No haematuria. His mother holds his hand, anxious.

Bed 7: Mrs. Akosua Frimpong, 44, referred from Kumasi. Three weeks of haematuria, rising creatinine, and BP 198/118 mmHg despite three antihypertensives. Urine: red cell casts. Kidney biopsy shows crescentic glomerulonephritis.

Dr. Adjoa Asante reviews both cases with her registrar.

"Same organ," the registrar says, "completely different diseases."

"And completely different pharmacology," she agrees. "Kofi probably has minimal change disease — high chance of steroid remission within 8 weeks. No biopsy needed yet. Mrs. Frimpong has rapidly progressive GN with crescents — she needs pulse methylprednisolone tonight and cyclophosphamide within 48 hours or she will lose those kidneys permanently."

Same ward. Same problem. Entirely different urgency, entirely different drugs.`,
    sections: [
      {
        h: "🔬 Nephrotic Syndrome — Disease-Specific Pharmacology",
        a: `Nephrotic syndrome presents with four features — heavy proteinuria, hypoalbuminaemia, oedema, and hyperlipidaemia — but its underlying cause determines the entire pharmacological approach. The most important clinical skill is matching the disease to its specific immunological mechanism and the drug that targets it.`,
        c: `NEPHROTIC SYNDROME — PHARMACOLOGICAL MANAGEMENT BY CAUSE:

MINIMAL CHANGE DISEASE (MCD):
→ Pathophysiology: T-cell mediated podocyte dysfunction → loss of anionic charge barrier → selective proteinuria
→ First-line: PREDNISOLONE 1 mg/kg/day (max 80 mg) OD × 4–16 weeks (adults); 60 mg/m²/day × 4 weeks then 40 mg/m² alternate days × 4 weeks (children)
→ Response: 80–90% remission in children within 4 weeks; 80% adults within 8–16 weeks
→ Steroid-responsive MCD: taper and stop; 50–75% relapse → re-treat with steroids
→ FREQUENTLY RELAPSING / STEROID-DEPENDENT MCD:
  - CYCLOPHOSPHAMIDE 2–3 mg/kg/day PO × 8–12 weeks: alkylating agent; depletes rapidly dividing B and T lymphocytes; prolongs remission significantly; GI toxicity, alopecia, haemorrhagic cystitis (prevent with MESNA and high fluid intake), gonadotoxicity (counsel on fertility)
  - RITUXIMAB (anti-CD20): 375 mg/m² IV × 1–4 doses; depletes B-cell population; growing evidence in steroid-dependent MCD; allows steroid tapering; infusion reactions (pre-medicate with paracetamol + antihistamine + methylprednisolone)
  - MYCOPHENOLATE MOFETIL (MMF): 750–1500 mg BD; inhibits IMPDH → ↓ lymphocyte proliferation; steroid-sparing; GI side effects (diarrhoea, nausea — switch to Myfortic enteric-coated)
  - CALCINEURIN INHIBITORS (CNI): cyclosporine 3–5 mg/kg/day or tacrolimus 0.1–0.2 mg/kg/day; stabilise podocyte cytoskeleton (synaptopodin) independently of calcineurin effect; effective but nephrotoxic with prolonged use

FOCAL SEGMENTAL GLOMERULOSCLEROSIS (FSGS):
→ Pathophysiology: podocyte injury (genetic, immune, secondary) → segmental sclerosis
→ Primary FSGS: circulating permeability factor (suPAR)
→ First-line: PREDNISOLONE 1 mg/kg/day × 4–6 months (LONGER than MCD; only 30–40% remission)
→ Steroid-resistant FSGS: CNI (cyclosporine or tacrolimus) — reduce podocyte actin cytoskeleton injury via synaptopodin stabilisation; partial remission in ~40–50%
→ Second-line: MMF 1500 mg BD × 6–12 months
→ HIVAN (HIV-associated FSGS — collapsing variant): START ART FIRST (dolutegravir-based regimen preferred; avoid TDF-based regimen); ACEi/ARB mandatory; avoid immunosuppression unless on suppressive ART

MEMBRANOUS NEPHROPATHY (MN):
→ Pathophysiology: anti-PLA2R antibodies (80% primary MN) → subepithelial immune complex deposits → complement → podocyte injury
→ HBV-ASSOCIATED MN (very common in Ghana — screen ALL MN patients for HBsAg):
  - TREAT HBV FIRST (entecavir or tenofovir-TAF; do NOT use TDF — nephrotoxic)
  - Many HBV-MN cases remit with viral suppression alone — avoid immunosuppression if possible
  - If immunosuppression needed: must continue antiviral therapy to prevent HBV reactivation
→ PRIMARY MN (anti-PLA2R positive):
  - Conservative first (6 months if tolerated): ACEi/ARB + BP control; 30% spontaneous remission
  - Progressive or refractory: RITUXIMAB 375 mg/m² × 2–4 doses (now first-line in many centres — reduces anti-PLA2R titres; GEMRITUX, MENTOR trials) OR MODIFIED PONTICELLI PROTOCOL: alternating months 1,3,5 (methylprednisolone 1g IV × 3d then prednisolone 0.5 mg/kg × 27d) with months 2,4,6 (chlorambucil 0.2 mg/kg/day or cyclophosphamide)
  - Monitor anti-PLA2R titres: falling titre = treatment response before proteinuria resolves

LUPUS NEPHRITIS (LN):
→ ISN/RPS classification determines treatment intensity
→ CLASS I/II (mild): ACEi/ARB + hydroxychloroquine (200–400 mg OD); no immunosuppression
→ CLASS III/IV (proliferative — MOST SEVERE):
  - INDUCTION: MYCOPHENOLATE MOFETIL 2–3 g/day + PULSE METHYLPREDNISOLONE 500mg–1g IV × 3 days then prednisolone 0.5–1 mg/kg/day (ASPREVA trial: MMF non-inferior to cyclophosphamide with less gonadotoxicity)
  - OR: CYCLOPHOSPHAMIDE IV (Euro-Lupus low-dose: 500 mg IV every 2 weeks × 6 doses) + steroids — preferred in Africa where cost of MMF is prohibitive
  - BELIMUMAB (anti-BLyS): 10 mg/kg IV monthly; add-on to standard therapy; BLISS-LN trial: reduced renal events; expensive; limited Ghana access
  - VOCLOSPORIN: calcineurin inhibitor; AURORA trial — added to MMF + steroids reduced proteinuria faster; podocyte stabilisation benefit
  - MAINTENANCE: MMF 1.5–2 g/day × 3 years minimum OR azathioprine 2 mg/kg/day (cheaper option)
→ HYDROXYCHLOROQUINE: continued throughout ALL LN classes — reduces flares, thrombosis risk, and overall mortality; monitor for retinopathy (baseline ophthalmology; annual review at doses >5 mg/kg/day)
→ CLASS V (membranous): ACEi/ARB + immunosuppression if nephrotic`,
        kp: [
          "MCD: 80–90% steroid remission; cyclophosphamide or rituximab for frequent relapses; CNIs stabilise podocyte synaptopodin independently of calcineurin (dual mechanism in MCD/FSGS)",
          "HBV-associated MN (common in Ghana): treat HBV with entecavir or TAF FIRST; many remit with viral suppression alone; steroids alone risk fatal HBV reactivation",
          "Lupus nephritis class III/IV: MMF + pulse methylprednisolone (ASPREVA trial) or Euro-Lupus cyclophosphamide; hydroxychloroquine continued throughout ALL classes — reduces flares and mortality",
          "Anti-PLA2R antibody titre monitoring in membranous nephropathy: falling titre precedes proteinuria remission — use to track rituximab response before clinical improvement is apparent",
          "Cyclophosphamide haemorrhagic cystitis prevention: MESNA co-administration (reacts with acrolein metabolite in urine) + high fluid intake (>2 L/day) + first morning void before first dose"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The MCD steroid response time is a key examination fact: children with MCD typically respond within 2–4 weeks; adults within 8–16 weeks. If there is NO response at 16 weeks → definition of steroid-resistant nephrotic syndrome → biopsy if not already done → consider CNI or rituximab. The difference in response time between MCD (rapid) and FSGS (slow, incomplete) reflects different pathological mechanisms — MCD has no structural glomerular damage, just functional podocyte charge loss; FSGS has actual scar tissue that must be prevented from expanding, not dissolved."
          },
          {
            role: "doctor", type: "clinical",
            text: "Rituximab for nephrotic syndrome in Ghana — access and practical considerations: rituximab is increasingly used for steroid-dependent MCD, membranous nephropathy, and refractory lupus nephritis. It is expensive but may be available through NHIS for specific indications or via humanitarian access programmes. Practical protocol: pre-medicate with paracetamol 1g oral, chlorpheniramine 10 mg IV, and methylprednisolone 100 mg IV 30 minutes before infusion. Infuse the first 50 mg/h, increase by 50 mg/h every 30 min if no reaction, to max 400 mg/h. Monitor for up to 2h after first infusion. Check hepatitis B surface antigen before starting — reactivation risk is real."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "MMF vs azathioprine in lupus nephritis maintenance — the Ghana practical decision: MMF (2 g/day for induction, 1.5 g/day for maintenance) is superior to azathioprine in preventing LN relapse in most guidelines. However, MMF costs approximately 5–7× more than azathioprine in Ghana. Azathioprine 2 mg/kg/day is an acceptable alternative for maintenance when MMF is not affordable, with similar long-term renal outcomes in many African cohorts. CRITICAL: NEVER prescribe azathioprine to a patient already on allopurinol without reducing AZA dose by 75% — the xanthine oxidase interaction causes fatal bone marrow suppression (Module 11 cross-reference)."
          },
          {
            role: "nurse", type: "clinical",
            text: "Oedema management in nephrotic syndrome — beyond diuretics: (1) Salt restriction <2g Na+/day — counsel specifically about Maggi/Jumbo seasoning cubes (very high Na+), salted fish (koobi), and processed foods widely consumed in Ghana; (2) Elevate oedematous legs when resting; (3) Weigh daily at the same time — target loss 0.5–1 kg/day with diuretics; (4) Protect oedematous skin from pressure ulcers and infections (skin breakdown in oedema is rapid); (5) Measure waist circumference or abdominal girth if ascites present — track treatment response. Document the response to each diuretic adjustment and report resistance (weight plateau despite adequate diuretic dose)."
          },
          {
            role: "labtech", type: "practical",
            text: "Anti-PLA2R antibody testing for membranous nephropathy: ELISA-based assay; available in select Ghanaian laboratories and increasingly at KBTH. Positive result (>14 RU/mL) confirms PRIMARY MN and guides treatment with rituximab. Sensitivity ~70–80% for primary MN; the 20–30% who are anti-PLA2R negative should be tested for anti-THSD7A antibodies. Serial anti-PLA2R levels track treatment response — titre falls 2–4 months before proteinuria improves. Report results as qualitative (positive/negative) AND quantitative (RU/mL) to allow trend monitoring. A patient with negative anti-PLA2R who develops MN in Ghana should be screened for HBsAg, HIV, and malignancy (secondary MN causes)."
          }
        ]
      },
      {
        h: "🚨 Nephritic Syndrome — Rapidly Progressive GN & Immunosuppressive Transplant Therapy",
        a: `Nephritic syndrome and rapidly progressive glomerulonephritis (RPGN) represent the emergency end of glomerular disease — where delay of hours to days can mean permanent loss of renal function. Simultaneously, renal transplantation offers the definitive treatment for ESRD, but requires lifelong immunosuppression with its own complex pharmacology. This section covers both ends of this spectrum.`,
        c: `NEPHRITIC SYNDROME AND RPGN — EMERGENCY PHARMACOLOGY:

CLINICAL FEATURES OF NEPHRITIC SYNDROME:
→ Haematuria (macroscopic or microscopic with RBC casts)
→ Hypertension
→ Oliguria, AKI
→ Subnephrotic proteinuria
→ Oedema (less severe than nephrotic)

CAUSES AND TREATMENT:

POST-STREPTOCOCCAL GN (PSGN):
→ Most common in children in Ghana; follows streptococcal throat/skin infection
→ Complement-mediated (↓ C3, normal C4) → immune complex deposition
→ TREATMENT: SUPPORTIVE — antihypertensives (CCB, loop diuretics for volume overload), treat streptococcal infection if still present (penicillin V × 10 days); NO immunosuppression — disease is self-limiting (95% resolve)
→ Prognosis: excellent in children; adults may develop CKD

IgA NEPHROPATHY (IgAN):
→ Most common GN worldwide; recurrent macroscopic haematuria after URTI; episodic
→ Treatment: ACEi/ARB (antiproteinuric) + optimise BP (<130/80)
→ Supportive + SGLT2i (DAPA-CKD subgroup benefit)
→ Progressive IgAN (proteinuria >1 g/day persisting despite ACEi/ARB × 3 months): SPARSENTAN (dual endothelin/AT1 receptor antagonist — PROTECT trial: significantly reduced proteinuria) — now approved in some countries; CORTICOSTEROIDS remain controversial (STOP-IgAN trial: no benefit; NEFIGAN: benefit with targeted release budesonide — Nefecon)

ANCA-ASSOCIATED VASCULITIS (AAV — GPA, MPA, EGPA):
→ Mechanism: ANCA (PR3-ANCA or MPO-ANCA) → neutrophil activation → small vessel necrotising vasculitis → crescentic GN
→ SEVERE AAV (dialysis-dependent or >50% crescents on biopsy): MEDICAL EMERGENCY
→ INDUCTION: RITUXIMAB 375 mg/m² IV weekly × 4 doses (RAVE trial: non-inferior to cyclophosphamide; preferred for relapsing disease) OR CYCLOPHOSPHAMIDE IV 15 mg/kg every 2–3 weeks × 6 pulses + PULSE METHYLPREDNISOLONE 500–1000 mg × 3 days then prednisolone 1 mg/kg/day (taper over 12–18 months)
→ PLASMA EXCHANGE (PLEX): controversial; PEXIVAS trial showed no additional benefit for renal outcomes; may still be used in dialysis-dependent AAV or pulmonary haemorrhage
→ MAINTENANCE: RITUXIMAB 500 mg IV every 6 months × 2 years (MAINRITSAN trial: superior to azathioprine for preventing relapse) OR AZATHIOPRINE 2 mg/kg/day × 18–24 months

ANTI-GBM DISEASE (GOODPASTURE'S SYNDROME):
→ Mechanism: antibodies against alpha-3 chain of type IV collagen (GBM) → crescentic GN ± pulmonary haemorrhage
→ MEDICAL EMERGENCY — loss of function within days if untreated
→ TREATMENT: PLASMA EXCHANGE × 14 sessions over 21 days (removes circulating anti-GBM antibodies) + CYCLOPHOSPHAMIDE 2–3 mg/kg/day PO × 3 months + PREDNISOLONE 1 mg/kg/day (taper)
→ Prognosis: poor if dialysis-dependent at presentation; excellent if treated before AKI
→ Avoid renal transplant until anti-GBM antibodies undetectable for 6–12 months

RENAL TRANSPLANT IMMUNOSUPPRESSION:

INDUCTION (at transplantation):
→ BASILIXIMAB (anti-CD25 — IL-2 receptor antibody): blocks T-cell activation; 20 mg IV at day 0 and day 4; standard at KBTH for low-immunological-risk recipients
→ ATG (anti-thymocyte globulin): depletes T lymphocytes; high-risk recipients (sensitised, DCD donors)

MAINTENANCE (triple therapy — standard):
→ CALCINEURIN INHIBITOR: TACROLIMUS (preferred over cyclosporine — less hypertension, hirsutism, gingival hyperplasia; superior graft survival); target trough 8–15 ng/mL (months 1–3) then 5–10 ng/mL
→ ANTIPROLIFERATIVE: MYCOPHENOLATE MOFETIL 750–1000 mg BD (inhibits IMPDH → ↓ lymphocyte proliferation); or AZATHIOPRINE (cheaper but less effective; never with allopurinol)
→ CORTICOSTEROID: PREDNISOLONE 5–10 mg OD; attempt weaning after 6–12 months in stable patients

CNI TOXICITIES:
→ TACROLIMUS: nephrotoxicity (afferent vasoconstriction → ↓ GFR; TGF-β fibrosis with prolonged use), neurotoxicity (tremor, headache, seizures), NODAT (new-onset diabetes after transplant — 20% incidence with tacrolimus), hypertension
→ CYCLOSPORINE: nephrotoxicity, hypertension, hyperlipidaemia, GINGIVAL HYPERPLASIA, HIRSUTISM, less NODAT than tacrolimus
→ DRUG INTERACTIONS (BOTH CNIs via CYP3A4): INCREASE levels — azole antifungals (fluconazole, itraconazole, voriconazole), macrolides (clarithromycin, erythromycin), diltiazem, verapamil, grapefruit; DECREASE levels — rifampicin (CRITICAL: dramatically reduces CNI levels → acute rejection risk), carbamazepine, phenytoin, St John's Wort

mTOR INHIBITORS (SIROLIMUS, EVEROLIMUS):
→ Block mTOR → ↓ T and B cell proliferation; alternative/add-on to CNI (allows CNI dose reduction)
→ Impaired wound healing (avoid early post-transplant), proteinuria, hyperlipidaemia, pneumonitis
→ Advantage: less nephrotoxic than CNIs`,
        kp: [
          "PSGN: supportive treatment only (antihypertensives + loop diuretics for volume); NO immunosuppression — self-limiting in 95%; complete with antibiotics if streptococcal infection still active",
          "ANCA vasculitis induction: rituximab (RAVE trial — non-inferior to cyclophosphamide; preferred for relapsing disease) or cyclophosphamide + pulse steroids; PEXIVAS trial — PLEX no additional renal benefit",
          "Anti-GBM disease: plasma exchange (14 sessions) + cyclophosphamide + prednisolone; medical emergency — delay measured in days causes permanent dialysis dependence",
          "Tacrolimus: target trough 8–15 ng/mL (months 1–3) then 5–10 ng/mL; CYP3A4 substrate — rifampicin dramatically reduces levels (rejection risk); fluconazole/macrolides increase levels (nephrotoxicity risk)",
          "NODAT (new-onset diabetes after transplant): 20% incidence with tacrolimus; monitor fasting glucose weekly for first 3 months; switch to cyclosporine or reduce tacrolimus if NODAT develops"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The anti-GBM vs ANCA distinction on renal biopsy and in serology is a common examination scenario. ANTI-GBM (Goodpasture's): LINEAR IgG staining along GBM on immunofluorescence (hallmark); anti-GBM antibody positive; may have pulmonary haemorrhage (lung haemorrhage + renal failure = Goodpasture's syndrome). ANCA: PAUCI-IMMUNE staining (no immune complex deposition) on immunofluorescence; ANCA positive (PR3-ANCA = GPA; MPO-ANCA = MPA/EGPA). Both cause crescentic GN but treatment differs: anti-GBM must have plasma exchange to remove the antibodies; ANCA can be treated with rituximab or cyclophosphamide without mandatory plasma exchange."
          },
          {
            role: "doctor", type: "clinical",
            text: "Renal transplantation in Ghana — current status and pharmacological implications: KBTH performs living-donor renal transplants; cadaveric transplant programme is developing. Post-transplant immunosuppression follow-up remains a challenge in Ghana: tacrolimus levels require regular monitoring (monthly in first year, every 3 months thereafter); CMV prophylaxis (valganciclovir × 3–6 months); PCP prophylaxis (co-trimoxazole × 6–12 months); fungal prophylaxis (fluconazole × 1–3 months). Rifampicin (used for TB — highly prevalent in Ghana) is arguably the most dangerous drug interaction in transplant pharmacology: a patient started on rifampicin for TB while on tacrolimus may reject their graft within weeks from subtherapeutic tacrolimus levels; immediate tacrolimus dose increase (often 2–5×) and very frequent level monitoring is mandatory."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Tacrolimus drug interactions in the Ghanaian context: RIFAMPICIN is the most dangerous (TB is common; rifampicin causes 3–5× increase in tacrolimus dose requirement — must be anticipated and managed proactively when TB diagnosed in a transplant patient). FLUCONAZOLE (commonly used for oral candidiasis in immunosuppressed patients) increases tacrolimus levels 2–3×. CLARITHROMYCIN (commonly prescribed for chest infections) increases levels significantly. HERBAL MEDICINES: St John's Wort decreases tacrolimus levels → rejection risk; many Ghanaian patients take traditional preparations that may contain St John's Wort or plants with similar CYP3A4 induction activity. Always take a full medication history including traditional medicines in every transplant patient."
          },
          {
            role: "nurse", type: "clinical",
            text: "Post-renal transplant patient education priorities — the nursing role: (1) Tacrolimus MUST be taken at the SAME TIME every day (even 2h variation in timing causes significant trough level fluctuation); (2) Tacrolimus capsules should be swallowed whole without food (or consistently with food — not alternating); (3) NEVER crush tacrolimus capsules — dose delivery is disrupted; (4) Grapefruit and grapefruit juice MUST be avoided (CYP3A4 inhibition → ↑ tacrolimus levels → nephrotoxicity); (5) Report immediately: reduced urine output, fever, graft site pain/swelling (rejection signs), severe diarrhoea (MMF toxicity + ↑ tacrolimus absorption)."
          },
          {
            role: "labtech", type: "practical",
            text: "Complement testing for GN diagnosis: C3, C4, and CH50 help narrow the diagnosis. LOW C3, LOW C4: immune complex disease — SLE, mixed cryoglobulinaemia, subacute bacterial endocarditis. LOW C3, NORMAL C4: alternative pathway activation — PSGN (post-streptococcal), C3 glomerulopathy, aHUS. NORMAL C3, NORMAL C4: ANCA vasculitis (pauci-immune), IgA nephropathy, anti-GBM disease, Henoch-Schönlein purpura (IgA vasculitis). This complement pattern is a rapid bedside/lab diagnostic tool. In Ghana, streptococcal titres (ASO titre, anti-DNase B) should accompany complement testing in children with haematuria — PSGN is common and the treatment is entirely different from immune complex GN."
          }
        ]
      }
    ],
    ev: "ASPREVA Trial NEJM 2004; RAVE Trial NEJM 2010; MAINRITSAN Trial NEJM 2014; PEXIVAS Trial NEJM 2020; MENTOR Trial JASN 2019; BLISS-LN Trial NEJM 2020; AURORA Trial JASN 2021; PROTECT Trial JASN 2023; ISN/RPS LN Classification 2018; KDIGO Glomerulonephritis Guidelines 2021"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 15 — UTI Pharmacology & Renal Stone Management
  // ────────────────────────────────────────────────────────
  {
    id: 15, num: "15", icon: "🪨", free: false, dur: "2h", lessons: 6, color: "#65a30d",
    title: "UTI Pharmacology & Renal Stone Management",
    sub: "Antibiotics for Kidney Infections & Drugs That Prevent or Dissolve Renal Stones",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Two conditions that share the urinary tract and nothing else. One demands precise antibiotic selection guided by local resistance patterns. The other demands understanding of stone composition chemistry to select the right preventive drug. Both are common in Ghana. Both are preventable.",
    story: `Urology and Nephrology Outpatient Clinic, Accra Regional Hospital.

Two patients wait side by side in the clinic.

Mrs. Dede Amoah, 32, arrived this morning with fever 38.9°C, right loin pain, and dysuria for 3 days. She is 28 weeks pregnant. MSU sent yesterday is growing E. coli.

Mr. Kwabena Asante, 45, has had his third episode of renal colic in two years. CT KUB shows a 7 mm calculus in his left ureter, and two smaller stones in the right kidney. He passes a stone fragment last year — analysis: calcium oxalate.

Same clinic. Entirely different pharmacological solutions.

Dr. Kofi Amponsah reviews the cases. "Mrs. Amoah needs an antibiotic that is safe in pregnancy, reaches the kidney, and targets this E. coli. Mr. Asante needs something to help this stone pass, and then a long-term plan to prevent the next one. Neither of them needs the same drug as the other."`,
    sections: [
      {
        h: "🦠 UTI Pharmacology — Classification, Antibiotic Selection & Special Populations",
        a: `The pharmacology of urinary tract infections requires knowing not just which antibiotic is active against the organism, but which drug achieves adequate concentration in urine AND renal tissue, which drugs are safe in pregnancy, and how to navigate the growing resistance crisis in Ghana's urban hospitals.`,
        c: `UTI CLASSIFICATION AND PHARMACOLOGICAL IMPLICATIONS:

UNCOMPLICATED CYSTITIS (lower UTI):
→ Premenopausal, non-pregnant women; no structural abnormalities; community-acquired
→ Drug must achieve high URINARY CONCENTRATION — renal tissue penetration not required
→ First-line Ghana options (3–5 days):
  - NITROFURANTOIN 100 mg (modified-release) BD × 5 days: concentrates in urine via renal excretion; excellent coverage of E. coli; minimal systemic absorption → low resistance selection pressure; AVOID if eGFR <45
  - TRIMETHOPRIM 200 mg BD × 7 days: effective if local resistance <20%; increasing resistance in urban Ghana (>60% E. coli resistance in some Accra studies)
  - FOSFOMYCIN TROMETAMOL 3g sachet SINGLE DOSE: active against ESBL-producing E. coli; growing utility for resistant cystitis; available at select pharmacies
  - NOT recommended: fluoroquinolones for uncomplicated cystitis (WHO 'Watch' category — reserve for complicated infections; drives resistance)

ACUTE PYELONEPHRITIS (upper UTI — kidney parenchyma):
→ Drug must achieve therapeutic RENAL TISSUE concentration — not just urinary
→ Nitrofurantoin CANNOT be used for pyelonephritis (does not achieve adequate renal parenchymal levels)
→ Oral (mild-moderate, outpatient, 7–14 days):
  - CIPROFLOXACIN 500 mg BD × 7 days (if local susceptibility confirmed)
  - CO-AMOXICLAV 625 mg TDS × 14 days
→ IV then oral (moderate-severe, hospitalised):
  - CEFTRIAXONE 1–2g OD IV until afebrile 24–48h, then oral switch to co-amoxiclav or ciprofloxacin
  - GENTAMICIN IV × 5 days (with TDM) if Gram-negative sepsis
→ ESBL-producing organisms (increasing in KBTH, KATH):
  - MEROPENEM 1g IV TDS (carbapenem for MDR/ESBL pyelonephritis)
  - Fosfomycin IV: emerging option
→ IV-TO-ORAL SWITCH: when: T° <37.8°C × 24h AND eating AND improving. Amoxicillin oral bioavailability 70–80% — early switch safe and cost-saving

COMPLICATED UTI / CATHETER-ASSOCIATED UTI (CAUTI):
→ Culture-guided: send MSU before antibiotics; treat 7–14 days based on susceptibility
→ CAUTI: do NOT treat ASYMPTOMATIC bacteriuria in catheterised patients (increases resistance; no outcome benefit)
→ Change catheter if possible before antibiotics (reduces biofilm burden)
→ Empirical until culture: co-amoxiclav or cephalosporin; carbapenem for ESBL risk

GHANA ANTIMICROBIAL RESISTANCE CONTEXT:
→ E. coli resistance rates (urban Ghana, 2020–2023 estimates):
  - Ampicillin: >80% resistance
  - Co-trimoxazole: >60% resistance
  - Ciprofloxacin: 30–50% resistance
  - Ceftriaxone: 15–25% resistance
  - Nitrofurantoin: <15% resistance (lowest; preserve)
  - Meropenem: <5% resistance (preserve for MDR)
→ ESBL-producing Enterobacteriaceae: 25–40% of community E. coli in some Accra centres
→ Implication: empirical co-trimoxazole for pyelonephritis is no longer appropriate in Ghana; ciprofloxacin requires susceptibility confirmation

UTI IN SPECIAL POPULATIONS:

PREGNANCY:
→ Asymptomatic bacteriuria MUST be treated (untreated → 25–30% risk of pyelonephritis → preterm birth)
→ SAFE in all trimesters: CEFALEXIN 500 mg QDS × 7 days; CO-AMOXICLAV 625 mg TDS × 7 days
→ SAFE 1st and 2nd trimester only: NITROFURANTOIN (avoid at term — risk of neonatal haemolytic anaemia: G6PD-independent; immature glutathione pathway)
→ AVOID ALL trimesters: FLUOROQUINOLONES (cartilage/joint toxicity in animal studies; not recommended in human pregnancy); TETRACYCLINES (teeth + bone toxicity); TRIMETHOPRIM in 1st trimester (antifolate teratogenicity — neural tube defects at high doses)
→ Recurrent UTI in pregnancy: cefalexin 125 mg OD nocte as prophylaxis

RECURRENT UTI (≥3/year in women):
→ Post-coital prophylaxis: single-dose nitrofurantoin 100 mg or cefalexin 250 mg after intercourse
→ Low-dose continuous prophylaxis: nitrofurantoin 50–100 mg nocte (if eGFR >45) × 6 months
→ VAGINAL OESTROGEN (postmenopausal): restores Lactobacillus flora → reduces UTI frequency; highly effective
→ CRANBERRY PRODUCTS: proanthocyanidins inhibit E. coli P-fimbriae adhesion; modest evidence; widely used in Ghana; safe`,
        kp: [
          "Nitrofurantoin for pyelonephritis: CONTRAINDICATED — concentrates in urine but does NOT achieve renal parenchymal tissue levels; use ciprofloxacin, co-amoxiclav, or ceftriaxone for pyelonephritis",
          "Pregnancy UTI: cefalexin and co-amoxiclav safe throughout; nitrofurantoin safe 1st/2nd trimester only (avoid at term — neonatal haemolytic anaemia); avoid fluoroquinolones and trimethoprim in 1st trimester",
          "Ghana resistance: co-trimoxazole >60% E. coli resistance in urban areas — inadequate for empirical pyelonephritis; ciprofloxacin 30–50% resistance — culture confirmation required; nitrofurantoin <15% resistance — preserve for uncomplicated cystitis",
          "CAUTI: do NOT treat asymptomatic bacteriuria in catheterised patients — increases resistance; treat only if symptomatic; change catheter before starting antibiotics",
          "ESBL pyelonephritis: meropenem (carbapenem) is the drug of choice; fosfomycin IV emerging; nitrofurantoin and cephalosporins inactive against ESBL producers"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Nitrofurantoin's pharmacokinetic limitation — why it cannot treat pyelonephritis — is a classic examination distinction. Nitrofurantoin achieves high URINARY concentration (renal tubular secretion concentrates it in tubular fluid > 100× plasma) but has poor SERUM levels and poor RENAL TISSUE penetration (because it is rapidly excreted without significant parenchymal accumulation). Pyelonephritis requires adequate antibiotic levels in the renal parenchyma (interstitium, tubular cells, medulla). Therefore: nitrofurantoin = adequate for bladder infection; inadequate for kidney infection. Ciprofloxacin, co-amoxiclav, and ceftriaxone penetrate renal tissue adequately."
          },
          {
            role: "doctor", type: "clinical",
            text: "ESBL-producing E. coli in community-acquired UTI is a rapidly growing problem in Accra and Kumasi. Clinical clues: (1) recent hospitalisation; (2) prior fluoroquinolone or cephalosporin exposure; (3) recurrent UTI with previous antibiotic treatment. Empirical management pending culture: FOSFOMYCIN TROMETAMOL 3g sachet single dose has excellent activity against ESBL E. coli and achieves very high urinary concentration; ORAL NITROFURANTOIN is also active against many ESBL producers (different mechanism — not affected by beta-lactamase production); for systemic pyelonephritis or sepsis: MEROPENEM IV pending culture. Avoid carbapenems for uncomplicated cystitis — preserve for systemic infections."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Fluoroquinolone stewardship in Ghana — the most important antimicrobial stewardship message for UTI: ciprofloxacin and levofloxacin are WHO 'Watch' antibiotics — reserved for complicated infections, serious systemic infections, and confirmed-susceptible organisms. Dispensing ciprofloxacin OTC for uncomplicated cystitis (which happens commonly in Ghana's community pharmacies) drives resistance and should be actively discouraged. Advise patients that nitrofurantoin or cefalexin is more appropriate for simple bladder infections and will work just as well. Document requests for fluoroquinolones and ask prescribing physicians to confirm the indication meets threshold criteria for Watch antibiotics."
          },
          {
            role: "nurse", type: "clinical",
            text: "MSU (midstream urine) collection technique matters — a contaminated specimen leads to inappropriate antibiotic treatment. Correct technique: (1) Wash hands and genital area with water (no soap — inhibits bacterial growth); (2) Female: spread labia, collect midstream; Male: retract foreskin; (3) Begin voiding, then collect middle portion (not first or last stream) in a sterile container; (4) Deliver to lab within 2 hours (or refrigerate at 4°C if delay unavoidable); (5) Do NOT collect from catheter bag — sample directly from catheter port if CAUTI suspected. A squamous epithelial cell count >10/HPF on microscopy = contaminated specimen — repeat collection before treating."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine culture reporting for clinical decision-making: colony count thresholds — significant bacteriuria: ≥10⁵ CFU/mL (midstream); ≥10³ CFU/mL (catheter specimen); any growth in suprapubic aspirate. Contamination indicators: >10 squamous epithelial cells/HPF = contaminated; polymicrobial growth with 3+ organisms = likely contamination. For ESBL detection: report ESBL status on all Enterobacteriaceae isolates (E. coli, Klebsiella); most labs use combined disc test (cefotaxime ± clavulanate). Always report the minimum inhibitory concentration (MIC) for ciprofloxacin — an MIC of 0.5 mg/L (intermediate) requires a higher ciprofloxacin dose than a susceptible MIC of 0.125 mg/L."
          }
        ]
      },
      {
        h: "🪨 Renal Stone Pharmacology — Acute Management & Long-term Prevention",
        a: `Renal stones are a clinical and pharmacological problem. The acute phase requires analgesia and stone passage facilitation. The long-term phase requires understanding stone composition chemistry and using drugs that either dissolve existing stones or prevent new crystal formation. In Ghana, dietary factors and low fluid intake are the dominant modifiable risk factors.`,
        c: `RENAL STONE TYPES AND PHARMACOLOGICAL APPROACH:

STONE COMPOSITION DETERMINES TREATMENT:

CALCIUM OXALATE (80% of stones):
→ Risk factors: hypercalciuria, hyperoxaluria, hypocitraturia, low urine volume
→ Does NOT dissolve pharmacologically — requires urological intervention if large
→ PREVENTION:
  - HIGH FLUID INTAKE: most important intervention — target urine output >2.5 L/day
  - THIAZIDE DIURETICS (HCTZ 25 mg BD or chlorthalidone 12.5 mg OD): ↑ DCT Ca2+ reabsorption → ↓ urinary calcium (hypercalciuria)
  - POTASSIUM CITRATE 30–60 mEq/day (10–20 mEq TDS): ↑ urinary citrate (complexes Ca2+ → prevents crystallisation) + ↑ urine pH + replaces K+ lost from thiazide
  - PYRIDOXINE (B6) 25–50 mg OD: in PRIMARY HYPEROXALURIA — reduces endogenous oxalate synthesis (cofactor for glyoxylate aminotransferase)
  - DIETARY: reduce oxalate-rich foods (spinach, nuts, chocolate, tea); normal Ca2+ intake (restricting Ca2+ paradoxically increases oxalate absorption)

URIC ACID STONES (10%):
→ Associated with: gout, acidic urine (uric acid insoluble at pH <5.5), high purine diet
→ CAN BE DISSOLVED pharmacologically — only dissolvable stone type
→ TREATMENT AND PREVENTION:
  - POTASSIUM CITRATE: alkalinise urine to pH 6.5–7.0 → uric acid converts to ionised urate → SOLUBLE → stone DISSOLVES over weeks-months
  - ALLOPURINOL 100–300 mg OD: reduces uric acid production (xanthine oxidase inhibition); indicated when hyperuricaemia or hyperuricosuria is documented
  - HIGH FLUID INTAKE: increases urine volume → dilutes uric acid concentration
  - DIETARY: reduce purine-rich foods (organ meats, sardines, anchovies, alcohol — common in Ghanaian diet)

STRUVITE STONES (INFECTION STONES):
→ Caused by UREASE-PRODUCING BACTERIA (Proteus mirabilis, Klebsiella, Pseudomonas)
→ Urease splits urea → NH3 → alkaline urine → struvite (MgNH4PO4) crystals
→ TREATMENT: eliminate infection first (CULTURE-GUIDED antibiotics for causative organism × 4–6 weeks) + urological stone removal (PCNL for large staghorn calculi)
→ ACETOHYDROXAMIC ACID (AHA): urease inhibitor; reduces stone growth; significant toxicity (teratogenic, phlebitis, haemolytic anaemia) — rarely used; specialist only

CYSTINE STONES (RARE):
→ Autosomal recessive cystinuria → defective cystine tubular reabsorption → crystallisation at low pH
→ TREATMENT: HIGH FLUID INTAKE + POTASSIUM CITRATE (alkalinise, target pH >7.0)
→ D-PENICILLAMINE or TIOPRONIN: form soluble drug-cysteine complexes → ↑ cystine solubility; significant toxicity (nephrotoxicity, proteinuria, bone marrow suppression with D-penicillamine) — reserve for refractory cases
→ CAPTOPRIL: sulfhydryl group forms captopril-cysteine disulphide (more soluble) — mild effect; add-on option

ACUTE RENAL COLIC — PHARMACOLOGICAL MANAGEMENT:

ANALGESIA (priority — act rapidly):
→ NSAIDs FIRST-LINE: DICLOFENAC 75 mg IM or 50 mg oral; KETOROLAC 30 mg IV; INDOMETHACIN 100 mg PR
  - Mechanism: ↓ prostaglandins → ↓ ureteric smooth muscle tone → ↓ intraureteral pressure → analgesia; also ↓ GFR → ↓ urine production → ↓ distension
  - CAUTION: avoid in AKI, solitary kidney, significant CKD, dehydration
→ OPIOIDS: IV MORPHINE 5–10 mg or IV TRAMADOL 100 mg for severe pain refractory to NSAIDs; IV PARACETAMOL 1g (safe in CKD)
→ ANTISPASMODICS (hyoscine/buscopan): NOT recommended for renal colic — no evidence of benefit; ureteric smooth muscle is not the primary pain generator (pelvicalyceal distension is)
→ PAIN REASSESSMENT: at 30 min, 1h, 2h

MEDICAL EXPULSIVE THERAPY (MET) — FACILITATING STONE PASSAGE:
→ Alpha-1 BLOCKERS: TAMSULOSIN 0.4 mg OD × 4 weeks (most evidence)
  - Mechanism: alpha-1D and alpha-1A receptors on distal ureteric smooth muscle → RELAXATION → ↑ ureteric peristalsis amplitude + ↓ spasm frequency → facilitates passage
  - Evidence: meta-analyses show significant benefit for stones 5–10 mm (20–25% improvement in passage rates, shorter passage time, less analgesia needed)
  - ALFUZOSIN 10 mg OD: alternative; less sexual side effects than tamsulosin in some patients
→ CALCIUM CHANNEL BLOCKERS: NIFEDIPINE 30 mg OD: alternative to alpha-blockers; relaxes ureteric smooth muscle via L-type Ca2+ blockade; less evidence than tamsulosin
→ DURATION: 4 weeks; if no passage → urological referral (ureteroscopy, ESWL, PCNL depending on stone size and location)

LONG-TERM STONE PREVENTION — DIETARY COUNSELLING IN GHANA:
→ HIGH FLUID INTAKE (most important): target urine output >2.5 L/day; increase water intake in dry season (Harmattan — Nov–March) when dehydration risk highest
→ REDUCE SALT: high Na+ diet → ↑ urinary Ca2+ → ↑ stone risk; reduce Maggi seasoning, salted fish, processed foods
→ MODERATE ANIMAL PROTEIN: high purine diet → ↑ uric acid and ↑ urinary Ca2+; organ meats and sardines particularly high
→ NORMAL Ca2+ DIET: restricting calcium paradoxically INCREASES oxalate absorption (less Ca2+ in gut to bind oxalate → more oxalate absorbed → more urinary oxalate) → MORE calcium oxalate stones; maintain normal dietary calcium (dairy, beans, leafy greens)`,
        kp: [
          "Nitrofurantoin NOT for pyelonephritis (inadequate renal tissue levels); use ciprofloxacin or co-amoxiclav orally, ceftriaxone IV for hospitalised pyelonephritis",
          "Uric acid stones: the ONLY stone type that can be pharmacologically DISSOLVED — potassium citrate alkalinises urine to pH 6.5–7.0 → uric acid → ionised urate → soluble → dissolves over weeks",
          "Renal colic analgesia: NSAIDs first-line (diclofenac IM, ketorolac IV, indomethacin PR) — reduce ureteric pressure; antispasmodics NOT effective; MET with tamsulosin for 5–10 mm stones — 20–25% improvement in passage rates",
          "Calcium oxalate stone prevention: thiazide diuretics (↓ urinary Ca2+) + potassium citrate (↑ urinary citrate + replaces K+ from thiazide) + high fluid intake; normal (not restricted) dietary Ca2+",
          "Pregnancy UTI: always treat asymptomatic bacteriuria (25–30% progress to pyelonephritis if untreated); cefalexin or co-amoxiclav safe throughout; avoid fluoroquinolones and trimethoprim 1st trimester"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The paradox of calcium restriction in calcium oxalate stones is one of the most counterintuitive facts in stone pharmacology. Instinct: reduce calcium in the diet → less calcium in urine → fewer calcium oxalate stones. Reality: calcium in the GI tract BINDS dietary oxalate → forms insoluble Ca-oxalate complex → NOT absorbed → excreted in stool. Restrict dietary calcium → more oxalate available for intestinal absorption → more urinary oxalate → MORE calcium oxalate stone formation. The pharmacological implication: potassium citrate (not calcium restriction) is the drug of choice for hypocitraturic calcium oxalate stones; dietary calcium should be NORMAL (not restricted)."
          },
          {
            role: "doctor", type: "clinical",
            text: "Tamsulosin for MET — which patients benefit most: the evidence is strongest for stones 5–10 mm in the DISTAL URETER. For stones >10 mm, spontaneous passage is unlikely regardless of MET — refer directly to urology. For stones <5 mm, most (>80%) pass spontaneously without MET — MET reduces pain and time but not passage rates significantly. Advise patients on tamsulosin: postural hypotension (especially first dose — warn to sit before standing); retrograde ejaculation (inform male patients before prescribing); continue for 4 weeks unless stone passed or urological intervention needed. In Ghana's context, alpha-blockers like tamsulosin may be obtained OTC — pharmacists should counsel on appropriate use and duration."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Potassium citrate formulations and counselling: available as oral solution (most bioavailable), powder sachets, or slow-release wax-matrix tablets (Urocit-K). Oral solution: 10 mEq TDS (30 mEq/day minimum for stone prevention); instruct patient to dilute in 120 mL water or juice and take WITH MEALS to reduce GI upset. Monitor serum K+ (can cause hyperkalaemia, especially in CKD or on ACEi/ARBs). Monitor urine pH (patient can test at home with pH strips — target pH 6.5–7.0 for uric acid dissolution; 6.0–6.5 for calcium oxalate prevention). Avoid if severe CKD (K+ accumulation risk), peptic ulcer disease (irritant)."
          },
          {
            role: "nurse", type: "clinical",
            text: "Renal colic nursing management: the most important immediate intervention is ANALGESIA — do not delay for diagnostic confirmation (urine dipstick + clinical picture sufficient to start treatment). Administer prescribed diclofenac IM or IV paracetamol immediately; reassess pain at 30 minutes. Position: patient will be restless and may be most comfortable moving — allow this (unlike peritonitis where patients are still). IV access and IV fluids: ensure IV access; IV fluids help with hydration but excessive fluids do not accelerate stone passage. Document: stone passage (strain all urine — provide a filter or fine gauze); pain scores; urine output. Stone collection for analysis: any passed stone should be collected, dried, and sent for biochemical composition analysis — this directs long-term prevention strategy."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine pH measurement for stone management: dipstick pH (range 5–9, 1-unit increments) is adequate for monitoring: uric acid dissolution (target pH >6.5 → uric acid becomes ionised → soluble → passes); calcium oxalate prevention (do not alkalinise excessively — pH >7.0 increases calcium phosphate stone risk); struvite (alkaline pH >7.5 typically found in struvite stones — alkaline culture result + Proteus/Klebsiella = struvite until proven otherwise). 24-hour urine collection for stone risk profiling: report calcium, oxalate, uric acid, citrate, phosphate, Na+, creatinine, volume, and pH. These guide specific drug selection (thiazide for hypercalciuria; potassium citrate for hypocitraturia; allopurinol for hyperuricosuria; pyridoxine for hyperoxaluria)."
          }
        ]
      }
    ],
    ev: "WHO AWaRe Antibiotic Classification 2021; Ghana Standard Treatment Guidelines 7th Edition; EAU Guidelines on Urological Infections 2023; AUA/CUA/EAU Urolithiasis Guidelines 2022; Tamsulosin MET Meta-analysis — Campschroer T Cochrane 2018; PROTECT Trial JASN 2023; Ghana AMR Surveillance Data NACP 2022"
  },

  // ────────────────────────────────────────────────────────
  // MODULE 16 — Electrolyte Disorders & Drug Management
  // ────────────────────────────────────────────────────────
  {
    id: 16, num: "16", icon: "⚡", free: false, dur: "2h 30m", lessons: 6, color: "#0f766e",
    title: "Electrolyte Disorders & Drug Management",
    sub: "Pharmacological Correction of Na+, K+, Mg2+, Ca2+, and Phosphate Disorders",
    aud: ["doctor", "nurse", "pharmacist", "labtech", "student"],
    tagline: "Electrolyte disorders kill — not slowly and gradually, but suddenly: a K+ of 7.2 mEq/L causes ventricular fibrillation. A Na+ of 112 mEq/L causes cerebral herniation. A Ca2+ of 4.0 mmol/L causes cardiac arrest. Knowing the pharmacological targets, the corrective agents, and the rate of correction that prevents harm from the treatment itself is the final pharmacological skill of renal medicine.",
    story: `Medical Assessment Unit, Korle Bu Teaching Hospital. Friday night.

Three patients arrive within one hour.

Mr. Isaac Osei, 68, CKD stage 4 on spironolactone and lisinopril. Ambulance called by his wife after he collapsed at home. ECG on arrival: peaked T waves, wide QRS. K+ result from the GP earlier today: 6.9 mEq/L. He did not attend his follow-up appointment.

Mrs. Abena Quaye, 74, on chlorthalidone for hypertension. Confused and unsteady. Na+ 118 mEq/L. Her daughter says she "increased her water intake" because she read it was healthy.

Mr. Kweku Boateng, 52, on multiple medications post-renal transplant. He is in hospital with generalised weakness. Ca2+ 3.6 mmol/L. His PTH is suppressed. Chest X-ray shows a right hilar mass.

Three different electrolytes. Three different drug interactions. Three different pharmacological emergencies. All requiring specific and correctly timed drug interventions.

"Welcome to Friday night in nephrology," says Dr. Efua Asante to her SHO. "You will not go home until you understand each of these."`,
    sections: [
      {
        h: "⚡ Potassium and Sodium Disorders — Drugs as Cause and Cure",
        a: `Potassium and sodium disorders are the most common electrolyte emergencies in hospital medicine — and drugs are the most common cause of both. Understanding which drugs cause hyperkalaemia, which cause hyponatraemia, and which drugs are used to correct each disorder determines whether the patient survives the night.`,
        c: `HYPERKALAEMIA (K+ >5.5 mEq/L):

DRUG CAUSES:
→ K+-sparing diuretics (spironolactone, amiloride)
→ ACEi and ARBs (↓ aldosterone → ↓ K+ excretion)
→ NSAIDs (↓ prostaglandins → ↓ renin → ↓ aldosterone → ↓ K+ excretion; also ↓ GFR)
→ Trimethoprim (blocks collecting duct K+ secretion — similar to amiloride)
→ Heparin (inhibits aldosterone synthesis — even in UFH, especially with prolonged use)
→ Beta-blockers (block cellular K+ uptake via Na+/K+ ATPase stimulation)
→ Tacrolimus and cyclosporine (reduce K+ excretion)
→ Digoxin toxicity (blocks Na+/K+ ATPase → K+ cannot enter cells)
→ K+ supplements with any RAAS blockade

TREATMENT — THE SEQUENCE MATTERS:
1. IV CALCIUM GLUCONATE 10 mL 10% IV over 10 min (MEMBRANE STABILISATION ONLY — does NOT lower K+): reverses myocardial conduction defects; acts within 5 min; lasts 30–60 min; REPEAT if ECG worsens; use when ECG changes present (peaked T, wide QRS, sine wave)
2. IV INSULIN 10 units + IV DEXTROSE 50 mL 50% (RAPID K+ SHIFT INTO CELLS): reduces K+ by 0.5–1.5 mEq/L within 20–30 min; effect lasts 4–6h
3. NEBULISED SALBUTAMOL 10–20 mg (RAPID K+ SHIFT INTO CELLS): β2-stimulated Na+/K+ ATPase activation → K+ enters cells; reduces K+ by 0.5–1.5 mEq/L; additive with insulin; onset 20–30 min
4. IV SODIUM BICARBONATE 50–100 mEq (K+ SHIFT — LIMITED BENEFIT IN ACUTE SETTING): shifts K+ in exchange for H+; works best when metabolic acidosis is present; not reliable in non-acidotic hyperkalaemia
5. PATIROMER or SODIUM ZIRCONIUM CYCLOSILICATE (ZS-9): K+ EXCHANGE RESINS — bind K+ in GI tract → K+ excreted in stool; SLOW ONSET (hours to days); NOT for acute emergencies; suitable for chronic/subacute hyperkalaemia management; patiromer and ZS-9 preferred over older SODIUM POLYSTYRENE SULFONATE (Kayexalate — bowel necrosis risk, slow, unreliable)
6. DIALYSIS: definitive K+ removal for refractory hyperkalaemia or in established AKI

HYPOKALAEMIA (K+ <3.5 mEq/L):

DRUG CAUSES: loop diuretics (↑ distal K+ loss), thiazides, corticosteroids, laxative overuse, amphotericin B (renal K+ wasting), aminoglycosides (PCT dysfunction), insulin infusions (shifts K+ into cells)

TREATMENT:
→ ORAL KCl (potassium chloride): 40–80 mEq/day in divided doses; first-line for mild-moderate (K+ 3.0–3.5); available as tablets, slow-release formulations, effervescent tablets
→ IV KCl: for severe (K+ <3.0) or symptomatic (arrhythmia, weakness, ECG changes); NEVER bolus; maximum 10 mEq/h via peripheral vein (40 mEq/h via central vein in monitored setting); DILUTE in saline or dextrose (never undiluted — severe pain, phlebitis, cardiac arrhythmia)
→ Address HYPOMAGNESAEMIA: low Mg2+ impairs renal K+ conservation → refractory hypokalaemia despite supplementation; correct Mg2+ first (IV magnesium sulphate 2–4g over 30–60 min)
→ Remove causative drug if possible

HYPONATRAEMIA (Na+ <135 mEq/L):

DRUG CAUSES:
→ THIAZIDE DIURETICS: most common drug cause; blocks urinary diluting capacity (NCC blockade) + ↑ ADH (volume depletion)
→ SSRI ANTIDEPRESSANTS: cause SIADH (↑ ADH release or sensitisation)
→ CARBAMAZEPINE: stimulates ADH release → SIADH
→ CYCLOPHOSPHAMIDE, VINCRISTINE: SIADH
→ NSAIDs: ↓ prostaglandins that normally inhibit ADH effect → enhanced ADH action
→ DESMOPRESSIN (V2 agonist): overcorrection of DI → hyponatraemia

TREATMENT — CORRECTION RATE IS CRITICAL:
→ DO NOT correct Na+ faster than 8–10 mEq/L in 24h (maximum) → risk of OSMOTIC DEMYELINATION SYNDROME (ODS/central pontine myelinolysis): permanent neurological injury from rapid osmotic shift damaging myelin in pons
→ Target: raise Na+ by 4–6 mEq/L in first 6h if symptomatic seizures; then slow to 8–10 mEq/L per 24h total
→ MILD ASYMPTOMATIC: treat underlying cause; fluid restriction (if SIADH); stop offending drug
→ MODERATE (Na+ 125–134, mild symptoms): fluid restriction 500–1000 mL/day; oral Na+ supplements; stop thiazide
→ SEVERE/SYMPTOMATIC (Na+ <125, seizures, coma): IV 3% HYPERTONIC SALINE at 1–2 mL/kg/h; target 4–6 mEq/L rise in first hour; then slow; frequent Na+ monitoring (every 1–2h)
→ SIADH: fluid restriction; TOLVAPTAN (V2 antagonist) 15–30 mg OD — aquaresis (free water excretion without Na+ loss) — monitor Na+ closely; DEMECLOCYCLINE (inhibits ADH action in collecting duct) — slower, less reliable; avoid in liver/renal failure
→ SALT TABLETS: Na+ supplementation for SIADH where fluid restriction inadequate

HYPERNATRAEMIA (Na+ >145 mEq/L):
DRUG CAUSES: mannitol (osmotic free water loss), lactulose (osmotic diarrhoea), lithium/demeclocycline (nephrogenic DI → free water loss), loop diuretics (lose more water than Na+)
TREATMENT: correct with FREE WATER (enteral water, IV 5% dextrose, or IV 0.45% saline); correct slowly (max 10 mEq/L per 24h — rapid correction → cerebral oedema); calculate free water deficit: 0.6 × weight × [(Na+/140) − 1]`,
        kp: [
          "Hyperkalaemia treatment sequence: calcium gluconate (membrane stabilisation — DOES NOT lower K+) → insulin/dextrose + salbutamol (rapid cellular shift) → patiromer/ZS-9 (GI removal, slow) → dialysis (definitive); kayexalate no longer preferred (bowel necrosis risk)",
          "Hyponatraemia correction rate: maximum 8–10 mEq/L per 24h; faster correction → osmotic demyelination syndrome (central pontine myelinolysis); symptomatic seizures: raise by 4–6 mEq/L in first hour with hypertonic saline, then slow",
          "Thiazides most common drug cause of hyponatraemia — NCC blockade impairs diluting capacity + ADH release; elderly women most vulnerable; check Na+ at 1 week after starting thiazide in elderly patients",
          "Refractory hypokalaemia: always check serum Mg2+ — hypomagnesaemia impairs K+ conservation (blocks ROMK channels); correct Mg2+ first (IV MgSO4) before K+ levels will respond to supplementation",
          "Tolvaptan (V2 antagonist) in SIADH: corrects Na+ via aquaresis (free water loss without Na+ loss); monitor Na+ every 4–6h when starting — over-rapid correction risk; avoid in hepatic impairment"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "The ECG changes of hyperkalaemia follow a predictable sequence as K+ rises — memorise this sequence for examination scenarios and cardiac arrest prevention: K+ 5.5–6.5 → PEAKED (tented) T waves (first sign; narrow base, symmetrical); K+ 6.5–7.0 → PR interval prolongation + P wave flattening; K+ 7.0–8.0 → wide QRS complex (intraventricular conduction delay); K+ >8.0 → SINUSOIDAL pattern (QRS merges with T wave) → ventricular fibrillation → cardiac arrest. Calcium gluconate stabilises the membrane and buys 30–60 min to implement K+-lowering measures. Do not wait for the sine wave to give calcium — give it at peaked T waves with ECG changes."
          },
          {
            role: "doctor", type: "clinical",
            text: "Osmotic demyelination syndrome (ODS) — the most feared complication of hyponatraemia treatment: occurs 2–6 days after OVER-RAPID correction of chronic hyponatraemia (not acute). Pathophysiology: cells adapted to low osmolality by losing organic osmolytes; rapid rise in plasma osmolality dehydrates neurons → myelin injury in pons and extrapontine regions → locked-in syndrome, dysarthria, dysphagia, quadriplegia (often permanent). Prevention: strict correction rate limit (8–10 mEq/L per 24h; in high-risk patients — malnutrition, alcoholism, hypokalaemia — limit to 6–8 mEq/L). If overcorrection occurs: READMINISTER FREE WATER (5% dextrose or desmopressin 2 mcg IV) to slow the correction — rapid reversal back to target rate prevents ODS."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Sodium zirconium cyclosilicate (ZS-9 / Lokelma) and patiromer (Veltassa) — the new K+ binders: both selectively bind K+ in GI tract (ZS-9 in small intestine + colon; patiromer in colon), exchanging K+ for Na+ (ZS-9) or Ca2+ (patiromer). Key differences from old kayexalate: faster onset (ZS-9 acts within 1–6h; patiromer within 7h); better tolerated (no bowel necrosis risk); more selective for K+. DRUG INTERACTIONS: patiromer binds many oral medications → separate other drugs by ≥3 hours. These drugs are currently limited availability in Ghana but are standard of care globally for chronic hyperkalaemia in patients on ACEi/MRA — knowledge prepares prescribers when they become available through NHIS."
          },
          {
            role: "nurse", type: "clinical",
            text: "IV potassium administration safety: peripheral IV K+ infusion must NOT exceed 10 mEq/h via a peripheral vein (pain, phlebitis, cardiac arrhythmia risk). For rates >10 mEq/h → CENTRAL VENOUS ACCESS + CONTINUOUS ECG MONITORING. Never administer undiluted potassium — dilute to a maximum of 40 mEq/L in 0.9% saline or 5% dextrose for peripheral infusion. Two-nurse checking of K+ concentration and rate before starting is best practice. During IV K+ infusion: ECG monitoring, document cardiac rhythm every 30 min, check IV site for extravasation (K+ is very tissue-irritant — causes necrosis if extravasated)."
          },
          {
            role: "labtech", type: "practical",
            text: "Urine sodium and osmolality for hyponatraemia diagnosis — the most important diagnostic tests: URINE OSMOLALITY: >100 mOsm/kg = ADH is active (inappropriate in hyponatraemia unless patient is volume-depleted or truly undergoing SIADH); <100 mOsm/kg = maximal water excretion (primary polydipsia, hypothyroidism, reset osmostat). URINE Na+: <20 mmol/L = Na+ avid (volume-depleted — thiazide hyponatraemia in a volume-depleted patient, vomiting, diarrhoea); >40 mmol/L = renal Na+ loss or SIADH. These two results together allow hyponatraemia classification without sophisticated testing. Report both values together and flag when urine osmolality >100 + urine Na+ >40 in a patient with hyponatraemia (= SIADH pattern)."
          }
        ]
      },
      {
        h: "🧪 Calcium, Magnesium & Phosphate Disorders — Clinical Pharmacology",
        a: `Disorders of calcium, magnesium, and phosphate are the silent electrolyte emergencies — they often present late, after significant physiological derangement has occurred. Each has a distinct pharmacological treatment, and each has distinctive drug interactions that compound the disorder or complicate the treatment.`,
        c: `HYPERCALCAEMIA (Ca2+ >2.60 mmol/L; severe >3.0 mmol/L):

DRUG CAUSES: THIAZIDE DIURETICS (↑ DCT Ca2+ reabsorption), VITAMIN D excess (↑ GI Ca2+ absorption), VITAMIN A toxicity, LITHIUM (↑ PTH secretion), CALCIUM-CONTAINING ANTACIDS excess (milk-alkali syndrome)

TREATMENT (by severity):
→ MILD (Ca2+ 2.6–3.0, asymptomatic): treat underlying cause; adequate hydration; stop thiazides
→ MODERATE-SEVERE (Ca2+ >3.0 or symptomatic): IV fluids first (2–4L 0.9% saline over 24h — rehydrate AND promotes calciuresis via ↑ GFR and ↑ urinary Ca2+ excretion); THEN IV FUROSEMIDE (ONLY after euvolaemia — promotes additional calciuresis); NOT furosemide in dehydrated patient (worsens)
→ BISPHOSPHONATES (ZOLEDRONIC ACID 4 mg IV over 15 min OR PAMIDRONATE 60–90 mg IV over 4h): inhibit osteoclast-mediated bone resorption → ↓ Ca2+ release from bone; ONSET 2–4 days; lasts 3–4 weeks; FIRST-LINE for malignancy-associated hypercalcaemia; reduce dose in CKD; AVOID in CKD <35 mL/min (accumulate → osteonecrosis of jaw risk)
→ CALCITONIN (SALMON CALCITONIN 4–8 IU/kg SC/IM BD): ↓ osteoclast activity + ↑ renal Ca2+ excretion; FAST onset (4–6h) but TACHYPHYLAXIS (loss of effect) within 48h; use as bridge while waiting for bisphosphonate effect; useful in severe cases needing IMMEDIATE effect
→ DENOSUMAB (anti-RANKL): inhibits osteoclast differentiation; SC monthly; used when bisphosphonates contraindicated (CKD) or ineffective; costly; emerging in Ghana
→ STEROIDS (PREDNISOLONE 40–60 mg OD): for hypercalcaemia from granulomatous disease (sarcoidosis, TB) and haematological malignancies (lymphoma, myeloma); inhibit ectopic 1-alpha-hydroxylase → ↓ active vitamin D → ↓ GI Ca2+ absorption
→ DIALYSIS: for severe refractory hypercalcaemia in CKD patients (low-calcium dialysate)

HYPOCALCAEMIA (Ca2+ <2.10 mmol/L corrected):

DRUG CAUSES: LOOP DIURETICS (↑ urinary Ca2+ loss), BISPHOSPHONATES (inhibit bone resorption — reduce Ca2+ flux from bone), CINACALCET (↓ PTH → ↓ Ca2+), FOSCARNET (chelates Ca2+), PHENYTOIN/PHENOBARBITAL (induce CYP → ↑ vitamin D catabolism → ↓ Ca2+ absorption), MAGNESIUM INFUSION (suppresses PTH temporarily)

TREATMENT:
→ MILD-MODERATE SYMPTOMATIC (Ca2+ 1.9–2.1, paraesthesiae, cramps): ORAL CALCIUM SUPPLEMENTS (calcium carbonate 1–2g elemental Ca2+ per day) + ORAL ACTIVE VITAMIN D (alfacalcidol 0.25–1 mcg OD or calcitriol 0.25–0.5 mcg OD)
→ SEVERE/SYMPTOMATIC (Ca2+ <1.9, tetany, Chvostek's/Trousseau's sign, seizures, QT prolongation): IV CALCIUM GLUCONATE 10–20 mL 10% over 10–20 min IV; SLOW infusion (too fast → bradycardia, hypotension, cardiac arrest); repeat as needed; connect to ECG monitor; follow with calcium infusion (10 ampules in 1L 5% dextrose at 50 mL/h) if tetany recurrent
→ Treat underlying cause: vitamin D deficiency → vitamin D3 supplementation + alfacalcidol; hypoparathyroidism → long-term alfacalcidol + oral Ca2+

HYPOMAGNESAEMIA (Mg2+ <0.70 mmol/L):

DRUG CAUSES: LOOP DIURETICS (block Mg2+ reabsorption in TAL — most common), AMINOGLYCOSIDES (renal Mg2+ wasting), AMPHOTERICIN B, CISPLATIN (renal tubular injury), CALCINEURIN INHIBITORS, PROTON PUMP INHIBITORS (impair Mg2+ absorption from gut — CAUSE OF UNEXPLAINED HYPOMAGNESAEMIA in patients on long-term PPIs)

CLINICAL SIGNIFICANCE:
→ REFRACTORY HYPOKALAEMIA: low Mg2+ → ROMK channel dysfunction → K+ cannot be retained → K+ supplementation fails until Mg2+ corrected
→ REFRACTORY HYPOCALCAEMIA: low Mg2+ → ↓ PTH secretion AND ↓ PTH action → hypocalcaemia refractory to Ca2+ supplementation until Mg2+ normalised
→ CARDIAC ARRHYTHMIAS: torsades de pointes; ventricular fibrillation

TREATMENT:
→ MILD (Mg2+ 0.5–0.7, asymptomatic): ORAL MAGNESIUM SUPPLEMENTS (magnesium glycinate, magnesium citrate 300–600 mg elemental Mg2+ per day); note: oral oxide poorly absorbed; glycinate/citrate better tolerated
→ SEVERE/SYMPTOMATIC (Mg2+ <0.5, arrhythmia, tetany): IV MAGNESIUM SULPHATE 2–4g (8–16 mmol) over 20–60 min; then infusion 1g/h × 12–24h; monitor knee jerk reflex (loss = first sign of toxicity); antidote: IV CALCIUM GLUCONATE

HYPERPHOSPHATAEMIA (PO4 >1.45 mmol/L) — PRIMARILY IN CKD/ESRD:

TREATMENT (covered in Module 13): PHOSPHATE BINDERS given with every meal:
→ Calcium carbonate (cheap, Ghana-available) → risk hypercalcaemia
→ Sevelamer (non-calcium; avoids vascular calcification risk) — costly
→ Lanthanum carbonate (chewable; non-calcium) — costly
→ DIETARY RESTRICTION: limit phosphate-rich foods (dairy, nuts, processed foods, carbonated drinks with phosphoric acid)

HYPOPHOSPHATAEMIA (PO4 <0.80 mmol/L):

DRUG CAUSES: ANTACIDS (aluminium/magnesium hydroxide bind dietary phosphate), TDF ART (Fanconi syndrome → renal phosphate wasting), INSULIN (drives phosphate into cells), IV GLUCOSE loads (↑ insulin → phosphate shift)

TREATMENT:
→ MILD-MODERATE: ORAL PHOSPHATE SUPPLEMENTS (sodium or potassium phosphate tablets/effervescent sachets — Phosphate-Sandoz: 16.1 mmol per tablet; 1–2 tablets TDS)
→ SEVERE (<0.32 mmol/L or symptomatic — respiratory muscle weakness, haemolysis, rhabdomyolysis): IV SODIUM PHOSPHATE or POTASSIUM PHOSPHATE infusion (0.08–0.16 mmol/kg/h); monitor for hypocalcaemia (phosphate infusion can precipitate Ca2+ → ↓ serum Ca2+)`,
        kp: [
          "Hypercalcaemia management: IV saline first (rehydrate + calciuresis) THEN furosemide (NOT before rehydration); zoledronic acid (bisphosphonate) for malignancy-associated (onset 2–4 days); calcitonin for immediate effect (onset 4–6h but tachyphylaxis within 48h)",
          "Refractory hypokalaemia: always check Mg2+ — low Mg2+ blocks ROMK channels → K+ cannot be retained → K+ supplementation fails until Mg2+ corrected first (IV MgSO4 2–4g)",
          "PPI-induced hypomagnesaemia: impairs intestinal Mg2+ absorption; may be asymptomatic for months; consider in any patient on long-term PPI with unexplained hypomagnesaemia; stop PPI or switch to H2 blocker",
          "IV calcium gluconate: antidote for both hypocalcaemia AND magnesium toxicity; infuse slowly over 10–20 min (rapid → bradycardia, cardiac arrest); connect to ECG monitor",
          "Bisphosphonates in CKD: reduce dose in eGFR 35–60; AVOID if eGFR <35 (accumulate → osteonecrosis of jaw, atypical femoral fractures); use denosumab as alternative when bisphosphonates contraindicated"
        ],
        callouts: [
          {
            role: "student", type: "exam",
            text: "Calcitonin vs bisphosphonate in hypercalcaemia — the timing distinction is a critical examination point. CALCITONIN: fast onset (4–6h) but causes TACHYPHYLAXIS (loss of effect) within 24–48h due to receptor downregulation. BISPHOSPHONATES (zoledronic acid, pamidronate): slow onset (2–4 days to peak effect) but sustained effect (3–4 weeks). Clinical application: in severe symptomatic hypercalcaemia (Ca2+ 3.8, confusion, arrhythmia), give CALCITONIN FIRST for immediate effect WHILE GIVING ZOLEDRONIC ACID simultaneously — by day 2–4 when calcitonin loses efficacy, the bisphosphonate has kicked in. This 'bridging' strategy uses the strengths of both drugs."
          },
          {
            role: "doctor", type: "clinical",
            text: "PPI-associated hypomagnesaemia — a clinically underrecognised syndrome in Ghana. Long-term PPIs (>3 months, more common after >1 year) impair active intestinal Mg2+ absorption via TRPM6/TRPM7 channel inhibition. The resulting hypomagnesaemia is refractory to oral Mg2+ supplementation (same absorption pathway is blocked). Clinical features: muscle cramps, tetany, hypocalcaemia and hypokalaemia (refractory). Management: STOP PPI; switch to H2-receptor antagonist (famotidine, ranitidine — does not affect Mg2+ absorption); if PPI cannot be stopped: IV Mg2+ replacement (ongoing requirement) and twice-weekly IV MgSO4 administration. Screen Mg2+ in any patient on long-term PPIs presenting with unexplained cramps or hypokalaemia."
          },
          {
            role: "pharmacist", type: "clinical",
            text: "Calcium and vitamin D supplementation — the formulation matters: CALCIUM CARBONATE: highest elemental Ca2+ per tablet (40%); must be taken WITH FOOD (requires acid for absorption — reduced in achlorhydria and in patients on PPIs; this is why PPIs also impair Ca2+ absorption and increase osteoporosis risk). CALCIUM CITRATE: 21% elemental Ca2+; acid-independent absorption → can be taken fasting or with PPIs; preferred in elderly, achlorhydric patients, and PPI users. ALFACALCIDOL (1-alpha-hydroxyvitamin D): already 25-hydroxylated → only requires final liver hydroxylation (not renal); suitable for CKD. CALCITRIOL: fully activated vitamin D → suitable even in severe CKD (does not require any hydroxylation)."
          },
          {
            role: "nurse", type: "clinical",
            text: "IV magnesium sulphate safety monitoring: the sequence of magnesium toxicity must be known by every nurse administering MgSO4: (1) ↓ Deep tendon reflexes (DTR — check PATELLAR REFLEX before and during infusion); (2) Flushing and diaphoresis; (3) Hypotension; (4) Respiratory depression (rate <12/min → STOP infusion); (5) Cardiac arrest (Mg2+ >5 mmol/L). Check patellar reflex every 15–30 min during infusion — absent reflex = STOP. Antidote: IV CALCIUM GLUCONATE 10 mL 10% over 5 min — should be at the bedside during every MgSO4 infusion. This monitoring protocol is identical whether treating eclampsia, severe asthma, or hypomagnesaemia."
          },
          {
            role: "labtech", type: "practical",
            text: "Corrected calcium calculation — essential for all calcium results in hypoalbuminaemic patients (very common in CKD, liver disease, nephrotic syndrome): Corrected Ca2+ = Measured Ca2+ + 0.02 × (40 − albumin in g/L). Example: measured Ca2+ 2.0 mmol/L, albumin 22 g/L → Corrected Ca2+ = 2.0 + 0.02 × (40 − 22) = 2.0 + 0.36 = 2.36 mmol/L (not hypocalcaemia). Conversely: Ca2+ 2.8, albumin 50 g/L → Corrected = 2.8 + 0.02 × (40 − 50) = 2.8 − 0.2 = 2.6 (mild hypercalcaemia, not flagged on total calcium alone). Always report BOTH total and corrected calcium in patients with abnormal albumin. Ionised calcium (direct measurement, pH-corrected) is the gold standard when albumin is very abnormal."
          }
        ]
      }
    ],
    ev: "KDIGO CKD-MBD Guidelines 2017; Hyperkalaemia Management — KDIGO 2020; ZS-9 (Lokelma) Trial NEJM 2015; Patiromer Trial NEJM 2014; Hyponatraemia Management — EASD/ECS Joint Guidelines 2014; Osmotic Demyelination — Sterns RH NEJM 1986; Bisphosphonate Safety in CKD — KDIGO 2017; Calcitonin Tachyphylaxis Review — Thamsborg G Bone 1990; PPI Hypomagnesaemia — Cundy T NEJM 2012"
  },

];

// ─────────────────────────────────────────────────────────────
// PRE & POST QUIZ EXPORTS — Modules 13–16
// ─────────────────────────────────────────────────────────────

export const RENP_PRE_Q_M13 = [
  {
    q: "A patient on thrice-weekly haemodialysis (high-flux membrane) is prescribed vancomycin 1g IV every 12h for MRSA bacteraemia. What is the main pharmacokinetic error in this regimen?",
    opts: [
      "Vancomycin is not removed by haemodialysis and will accumulate to toxic levels",
      "High-flux haemodialysis removes 50–60% of vancomycin per session; standard 12-hourly dosing ignores this removal, leading to subtherapeutic levels after sessions and unnecessary drug exposure between them; correct approach is post-dialysis dosing with pre-dialysis trough monitoring",
      "Vancomycin should be given orally in dialysis patients to avoid IV-related access infections",
      "The dose is too low — dialysis patients need 2g every 12h to compensate for removal"
    ],
    ans: 1
  },
  {
    q: "Which combination of pharmacokinetic properties makes digoxin poorly removed by haemodialysis?",
    opts: [
      "High molecular weight and strong protein binding",
      "Very large volume of distribution (7 L/kg) and moderate protein binding — the vast majority of body digoxin resides in tissues (heart, muscle), not plasma; dialysis only clears plasma drug; use Digibind for digoxin overdose",
      "Digoxin is too polar for diffusion across dialysis membranes",
      "High protein binding (95%) prevents any free drug reaching the dialysis membrane"
    ],
    ans: 1
  },
  {
    q: "A dialysis patient's phosphate binder (calcium carbonate) is prescribed at the same time as their oral ciprofloxacin for a UTI. What is the likely consequence?",
    opts: [
      "Calcium carbonate increases ciprofloxacin levels through CYP3A4 inhibition",
      "Calcium carbonate chelates ciprofloxacin in the GI tract forming an insoluble complex, dramatically reducing ciprofloxacin absorption and bioavailability; separate by at least 2 hours",
      "No significant interaction — phosphate binders only affect phosphate absorption",
      "Ciprofloxacin interferes with calcium carbonate's phosphate-binding capacity, worsening hyperphosphataemia"
    ],
    ans: 1
  },
  {
    q: "The TREAT trial established the haemoglobin target for ESA therapy in dialysis patients. What was the key finding?",
    opts: [
      "Target Hb >130 g/L — maximising haemoglobin improves quality of life and survival",
      "Target Hb 100–115 g/L — higher targets (>130 g/L) increased cardiovascular events and stroke without improving quality of life; ESA dose should be limited to achieve this lower range",
      "ESAs are not beneficial in dialysis — all patients should receive IV iron alone",
      "Target Hb depends on dialysis modality — higher targets for PD vs HD"
    ],
    ans: 1
  },
  {
    q: "Cinacalcet is preferred over calcitriol for controlling PTH in a dialysis patient with a corrected calcium of 2.78 mmol/L. Why?",
    opts: [
      "Cinacalcet is cheaper and more available than calcitriol in Ghana",
      "Cinacalcet sensitises the calcium-sensing receptor (CaSR) on parathyroid cells, suppressing PTH without raising calcium or phosphate; calcitriol increases GI calcium and phosphate absorption, further raising an already elevated calcium; cinacalcet is the correct choice when calcium is already high",
      "Calcitriol requires renal activation and cannot be used in dialysis patients",
      "Cinacalcet has fewer drug interactions than calcitriol in immunosuppressed dialysis patients"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M13 = [
  {
    q: "Lithium toxicity (level 3.9 mEq/L) with coarse tremor, confusion, and myoclonus is confirmed. Haemodialysis is started. The post-dialysis lithium level is 1.2 mEq/L. Three hours later the patient becomes confused again and level rebounds to 2.6 mEq/L. Why and what should be done?",
    opts: [
      "The dialysis machine was faulty — repeat dialysis with a different machine",
      "Lithium redistributes from bone, red blood cells, and intracellular compartments back to plasma after dialysis (rebound); repeat haemodialysis sessions are required until the rebound level remains below the toxic threshold; check level 2–4h after each session",
      "The patient took additional lithium post-dialysis — check adherence",
      "Rebound is normal and harmless — monitor and discharge once level <2.0"
    ],
    ans: 1
  },
  {
    q: "A patient is started on calcitriol for secondary hyperparathyroidism. Three weeks later, calcium-phosphate product is 5.2 mmol²/L². What is the concern and management?",
    opts: [
      "No concern — calcium-phosphate product up to 6.0 mmol²/L² is acceptable in dialysis",
      "Calcium-phosphate product >4.4 mmol²/L² indicates risk of vascular calcification and soft-tissue calcification; stop or reduce calcitriol; switch to cinacalcet (lowers PTH without raising calcium or phosphate); review phosphate binder adequacy; increase dietary phosphate restriction",
      "Switch to a higher dose of calcitriol — secondary hyperparathyroidism is undertreated",
      "Start bisphosphonate therapy to reduce vascular calcium deposition"
    ],
    ans: 1
  },
  {
    q: "A patient with peritoneal dialysis-related peritonitis (PDAP) has Staphylococcus aureus grown from dialysate. What is the preferred treatment route and why?",
    opts: [
      "IV vancomycin via a peripheral vein — systemic route ensures adequate peritoneal penetration",
      "Intraperitoneal (IP) vancomycin directly into the dialysate bag — achieves very high local peritoneal concentration with minimal systemic exposure; standard treatment for PDAP per ISPD guidelines; 1–1.5g IP in a bag with ≥6h dwell time, repeated every 3–5 days",
      "Oral vancomycin — achieves adequate peritoneal levels through GI absorption",
      "IP gentamicin alone — superior to vancomycin for Staphylococcal PDAP"
    ],
    ans: 1
  },
  {
    q: "An ESRD patient on haemodialysis takes a significant aspirin overdose (salicylate level 820 mg/L, pH 7.08). Is haemodialysis indicated and why?",
    opts: [
      "No — aspirin is highly protein-bound and will not be removed by dialysis",
      "Yes — at toxic levels, aspirin protein binding is saturated, making salicylate dialysable; level >700 mg/L AND pH <7.10 are absolute indications; dialysis also corrects the metabolic acidosis; continue urinary alkalinisation as adjunct",
      "No — urinary alkalinisation alone is sufficient even at this level",
      "Only if level exceeds 1000 mg/L — this level is manageable with conservative measures"
    ],
    ans: 1
  },
  {
    q: "A renal transplant patient on tacrolimus 4 mg BD (trough 9 ng/mL) is started on rifampicin for confirmed pulmonary TB. What immediate action is required?",
    opts: [
      "No dose change needed — rifampicin and tacrolimus do not interact",
      "Dramatically increase tacrolimus dose (often 2–5× the current dose) and monitor levels every 2–3 days urgently; rifampicin is a potent CYP3A4 inducer that reduces tacrolimus levels to sub-therapeutic within days, causing acute allograft rejection; close coordination between nephrology and TB teams is essential throughout the treatment course",
      "Switch rifampicin to isoniazid alone — rifampicin is contraindicated in transplant patients",
      "Stop tacrolimus and switch to a non-CYP3A4-dependent immunosuppressant immediately"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M14 = [
  {
    q: "A 9-year-old boy with nephrotic syndrome achieves remission with prednisolone but relapses for the fourth time in 18 months. He has significant steroid toxicity (growth retardation, cushingoid features). What is the most appropriate next pharmacological step?",
    opts: [
      "Continue high-dose prednisolone indefinitely to prevent further relapses",
      "Cyclophosphamide 2–3 mg/kg/day × 8–12 weeks or rituximab — frequently relapsing/steroid-dependent MCD is a standard indication for steroid-sparing therapy; cyclophosphamide induces sustained remission; rituximab increasingly used with excellent evidence",
      "Perform renal biopsy — four relapses confirms FSGS not MCD, requiring different treatment",
      "Switch to oral prednisolone alternate-day dosing — reduces toxicity while maintaining effect"
    ],
    ans: 1
  },
  {
    q: "A Ghanaian patient is diagnosed with membranous nephropathy on renal biopsy. Before starting immunosuppression, which essential screening test must be performed?",
    opts: [
      "Anti-GBM antibodies — membranous nephropathy and anti-GBM disease require similar treatment",
      "Hepatitis B surface antigen (HBsAg) — HBV-associated MN is common in Ghana; steroids alone without antiviral therapy risk fatal HBV reactivation; treat HBV first (entecavir or TAF) as many cases remit with viral suppression alone",
      "ANCA levels — distinguish membranous from pauci-immune GN before treatment",
      "Complement C3/C4 — low complement confirms membranous nephropathy and guides treatment intensity"
    ],
    ans: 1
  },
  {
    q: "The RAVE trial compared rituximab to cyclophosphamide for ANCA-associated vasculitis induction. What was the key finding?",
    opts: [
      "Cyclophosphamide was superior for all patients with ANCA vasculitis",
      "Rituximab was non-inferior to cyclophosphamide for induction and superior for relapsing disease; rituximab is now the preferred induction agent for relapsing AAV and an equivalent alternative for new-onset severe disease",
      "Both agents were equally effective but rituximab caused significantly more infections",
      "Rituximab reduced mortality but cyclophosphamide achieved better renal function preservation"
    ],
    ans: 1
  },
  {
    q: "Why is hydroxychloroquine continued throughout ALL classes of lupus nephritis, even class I/II?",
    opts: [
      "Hydroxychloroquine prevents nephrotoxicity from other immunosuppressive drugs",
      "Hydroxychloroquine reduces lupus flare frequency, thrombosis risk (particularly in lupus anticoagulant-positive patients), and overall mortality across all LN classes; it is disease-modifying, not just symptom-relieving",
      "Hydroxychloroquine treats the skin manifestations of SLE that accompany all classes of LN",
      "Hydroxychloroquine reduces the steroid doses needed for LN management"
    ],
    ans: 1
  },
  {
    q: "A patient on tacrolimus for renal transplantation develops new-onset diabetes (NODAT). What is the most likely pharmacological cause and management?",
    opts: [
      "Steroids are the primary cause — reduce prednisolone dose first",
      "Tacrolimus causes NODAT in ~20% of recipients by impairing pancreatic beta-cell function and insulin secretion; consider switching to cyclosporine (less diabetogenic), reducing tacrolimus dose with MMF dose optimisation, or adding metformin/insulin for glycaemic control if tacrolimus must be continued",
      "MMF causes NODAT by interfering with glucose metabolism in the gut",
      "NODAT is caused by the surgical stress of transplantation and always resolves spontaneously"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M14 = [
  {
    q: "A patient with class IV lupus nephritis (proliferative) is started on pulse methylprednisolone and mycophenolate mofetil (MMF) 3g/day. Three weeks later she develops severe diarrhoea and leucopenia. What is the most appropriate management?",
    opts: [
      "Stop MMF and switch to cyclophosphamide — GI toxicity and leucopenia confirm MMF failure",
      "Switch from MMF capsules to Myfortic (enteric-coated mycophenolic acid) — GI symptoms are often reduced with the enteric-coated formulation; additionally reduce MMF dose to 2g/day temporarily while reassessing leucopenia; check CMV status (CMV infection causes similar symptoms in immunosuppressed patients)",
      "Stop MMF and switch to azathioprine — equally effective with better GI tolerability",
      "Continue MMF — GI effects always resolve after 4 weeks without dose adjustment"
    ],
    ans: 1
  },
  {
    q: "A patient with anti-GBM disease (Goodpasture's) presents with creatinine of 820 μmol/L (dialysis-dependent) and bilateral pulmonary haemorrhage. Is plasma exchange indicated and why?",
    opts: [
      "No — PEXIVAS trial showed plasma exchange has no benefit in crescentic GN",
      "Yes — anti-GBM disease is a specific exception where plasma exchange is indicated: plasma exchange removes circulating anti-GBM antibodies; while renal prognosis is poor at presentation (dialysis-dependent), plasma exchange is essential to prevent further alveolar haemorrhage (the immediately life-threatening complication); PEXIVAS results apply to ANCA vasculitis, not anti-GBM disease",
      "Only if pulmonary haemorrhage is confirmed — renal indications alone are insufficient",
      "Plasma exchange is contraindicated once the patient is dialysis-dependent"
    ],
    ans: 1
  },
  {
    q: "A patient on cyclosporine post-renal transplant develops worsening hypertension and hyperlipidaemia, while a colleague on tacrolimus for the same indication has NODAT. Which statement best summarises the comparative toxicity profiles?",
    opts: [
      "Tacrolimus and cyclosporine have identical side effect profiles and are interchangeable",
      "Cyclosporine: more hypertension, hyperlipidaemia, gingival hyperplasia, hirsutism, less NODAT; Tacrolimus: more NODAT (~20%), tremor, neurotoxicity, less cosmetic side effects; tacrolimus generally provides superior graft survival and is now the preferred CNI in most centres",
      "Cyclosporine causes NODAT more than tacrolimus in all population groups",
      "Tacrolimus has more vascular toxicity (hypertension, dyslipidaemia) than cyclosporine"
    ],
    ans: 1
  },
  {
    q: "A patient with IgA nephropathy has UACR 95 mg/mmol and eGFR 58 mL/min despite maximal ACEi therapy. According to recent trial evidence (PROTECT trial), what pharmacological option shows significant antiproteinuric benefit?",
    opts: [
      "Add an ARB to the ACEi for dual RAAS blockade",
      "Sparsentan (dual endothelin A/AT1 receptor antagonist) — the PROTECT trial showed significant proteinuria reduction in IgA nephropathy compared to irbesartan; also add dapagliflozin per KDIGO 2024 (DAPA-CKD showed benefit in IgA nephropathy subgroup)",
      "Start cyclophosphamide — IgA nephropathy is an immune-mediated disease requiring immunosuppression",
      "Start fish oil supplementation — the only evidence-based treatment for IgA nephropathy beyond ACEi"
    ],
    ans: 1
  },
  {
    q: "A renal transplant patient develops acute allograft rejection on tacrolimus + MMF + prednisolone. The nephrologist prescribes IV methylprednisolone 500 mg daily × 3 days. What is the mechanism of action for pulse steroids in acute rejection?",
    opts: [
      "High-dose steroids cause direct cytotoxicity to alloreactive T cells infiltrating the graft",
      "Pulse methylprednisolone rapidly suppresses cytokine transcription (IL-2, IL-6, TNF-α, IFN-γ) via glucocorticoid receptor-mediated gene suppression, reducing the effector T-cell immune response driving tubulitis and endotheliitis; pulse doses achieve intracellular GR saturation rapidly, reversing rejection in ~70–80% of acute cellular rejection episodes",
      "High-dose steroids reverse rejection by restoring regulatory T-cell function",
      "Pulse methylprednisolone removes donor-specific antibodies causing antibody-mediated rejection"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M15 = [
  {
    q: "Why should nitrofurantoin NOT be used to treat acute pyelonephritis?",
    opts: [
      "Nitrofurantoin is inactivated by the low urinary pH in pyelonephritis",
      "Nitrofurantoin concentrates in urine via renal tubular secretion but does not achieve adequate levels in renal parenchymal tissue; pyelonephritis requires tissue penetration which nitrofurantoin cannot achieve; ciprofloxacin, co-amoxiclav, or ceftriaxone are appropriate alternatives",
      "Nitrofurantoin is nephrotoxic and worsens the AKI that commonly accompanies pyelonephritis",
      "Nitrofurantoin spectrum does not cover E. coli — the most common pyelonephritis pathogen"
    ],
    ans: 1
  },
  {
    q: "A pregnant woman (34 weeks) has asymptomatic bacteriuria confirmed on MSU (E. coli >10⁵ CFU/mL). She asks if treatment is really necessary as she has no symptoms. What is the evidence-based response?",
    opts: [
      "No treatment needed — asymptomatic bacteriuria in pregnancy is normal and resolves spontaneously",
      "Treatment is mandatory — untreated asymptomatic bacteriuria progresses to pyelonephritis in 25–30% of pregnant women and is associated with preterm birth and low birth weight; prescribe cefalexin 500 mg QDS × 7 days (safe throughout pregnancy)",
      "Treatment is optional — only treat if symptoms develop within 2 weeks",
      "Nitrofurantoin 100 mg BD × 5 days is the safest option throughout pregnancy including the third trimester"
    ],
    ans: 1
  },
  {
    q: "A 45-year-old man has his third episode of renal colic from a 7 mm ureteric stone confirmed on CT. Tamsulosin 0.4 mg OD is prescribed as medical expulsive therapy. What is the mechanism of action?",
    opts: [
      "Tamsulosin relaxes urethral smooth muscle allowing easier stone passage through the urethra",
      "Tamsulosin blocks alpha-1D and alpha-1A receptors on distal ureteric smooth muscle, causing relaxation and reducing ureteric spasm frequency while increasing the amplitude of peristaltic waves — facilitating passage of stones 5–10 mm in the distal ureter",
      "Tamsulosin increases urine flow rate, washing the stone distally by increased hydrostatic pressure",
      "Tamsulosin has anti-inflammatory properties that reduce ureteric oedema around the stone"
    ],
    ans: 1
  },
  {
    q: "A patient with recurrent uric acid kidney stones has urine pH consistently 5.0–5.2. What is the pharmacological treatment of choice that can actually dissolve existing uric acid stones?",
    opts: [
      "Allopurinol 300 mg OD — reduces uric acid production, dissolving stones",
      "Potassium citrate 10–20 mEq TDS — alkalinises urine to pH 6.5–7.0 converting uric acid to ionised urate (soluble); this is the ONLY pharmacological approach that can dissolve existing stones in situ; allopurinol reduces production but cannot dissolve existing stones",
      "HCTZ 25 mg BD — reduces urinary calcium, reducing the calcium component of uric acid stones",
      "High-dose vitamin C — acidifies urine further, preventing new stone formation"
    ],
    ans: 1
  },
  {
    q: "Why does restricting dietary calcium WORSEN calcium oxalate stone formation?",
    opts: [
      "Low calcium diet stimulates PTH, increasing renal calcium reabsorption and stone formation",
      "Dietary calcium binds oxalate in the GI tract forming insoluble calcium-oxalate complexes that are excreted in stool; restricting calcium leaves more free oxalate to be absorbed from the gut, increasing urinary oxalate excretion and calcium oxalate supersaturation",
      "Calcium restriction increases vitamin D levels, increasing renal calcium excretion",
      "Low calcium diet causes acidic urine that promotes calcium oxalate precipitation"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M15 = [
  {
    q: "A 28-week pregnant woman grows E. coli on MSU with resistance to ampicillin, co-trimoxazole, and ciprofloxacin, but susceptibility to cephalosporins and nitrofurantoin. She has pyelonephritis with fever and loin pain. What is the most appropriate antibiotic?",
    opts: [
      "Nitrofurantoin 100 mg BD × 7 days — E. coli is susceptible and it is safe in pregnancy",
      "Ceftriaxone 1–2g IV OD — pyelonephritis requires renal tissue penetration; nitrofurantoin is contraindicated for pyelonephritis (inadequate tissue levels); ceftriaxone is safe throughout pregnancy and achieves adequate renal tissue concentrations; step down to cefalexin when afebrile",
      "Ciprofloxacin 500 mg BD — culture susceptibility confirms it is appropriate despite general pregnancy caution",
      "Co-trimoxazole DS BD — urinary concentration is sufficient for kidney infection"
    ],
    ans: 1
  },
  {
    q: "A 70-year-old woman with recurrent UTIs (4 episodes in 12 months) is postmenopausal and not on hormone replacement. What pharmacological strategy has the strongest evidence for reducing UTI recurrence in her specific demographic?",
    opts: [
      "Continuous low-dose nitrofurantoin prophylaxis — most effective strategy regardless of menopausal status",
      "Topical vaginal oestrogen — restores Lactobacillus-dominated vaginal flora, reducing vaginal pH and preventing uropathogen colonisation; in postmenopausal women this is highly effective and has minimal systemic absorption; can be combined with post-coital or continuous antibiotic prophylaxis",
      "Cranberry tablets daily — strongest evidence in postmenopausal women with recurrent UTI",
      "D-mannose 2g daily — binds E. coli P-fimbriae preventing adhesion to uroepithelium"
    ],
    ans: 1
  },
  {
    q: "An orthopedic surgeon prescribes ketorolac 30 mg IV for a patient with acute renal colic and eGFR of 22 mL/min. What is your response as the clinical pharmacist?",
    opts: [
      "Dispense as prescribed — ketorolac is the most effective analgesic for renal colic and should not be withheld",
      "Flag to the prescriber: NSAIDs are relatively contraindicated in significant CKD (eGFR 22) — prostaglandin-dependent afferent dilation is critical at this low eGFR and NSAID inhibition risks precipitating AKI; recommend IV paracetamol 1g + IV morphine 5–10 mg as alternatives; if NSAID is absolutely required, use the minimum dose for the shortest possible duration with close renal monitoring",
      "Halve the ketorolac dose to 15 mg — renal dose adjustment makes it safe at eGFR 22",
      "Substitute with intramuscular diclofenac — safer route of administration in CKD than IV ketorolac"
    ],
    ans: 1
  },
  {
    q: "A patient with calcium oxalate stones has 24-hour urinary calcium of 8.9 mmol/day (hypercalciuria) and urinary citrate of 1.1 mmol/day (hypocitraturia). Which combination of drugs addresses both risk factors?",
    opts: [
      "Allopurinol + high fluid intake — reduces uric acid seeding of calcium oxalate stones",
      "HCTZ 25 mg BD (reduces urinary calcium via DCT Ca2+ reabsorption) + POTASSIUM CITRATE 20 mEq TDS (increases urinary citrate — inhibits calcium crystal nucleation — while also replacing K+ lost from thiazide); this combination addresses both the hypercalciuria AND the hypocitraturia simultaneously",
      "Furosemide + calcium supplements — loop diuretics reduce calcium and supplementing orally prevents bone loss",
      "Pyridoxine 50 mg OD + magnesium oxide — reduces oxalate production and increases urinary magnesium"
    ],
    ans: 1
  },
  {
    q: "A patient presents with acute renal colic. Urine dipstick shows leucocytes and nitrites alongside blood. Temperature is 38.7°C. CT confirms a 6 mm right ureteric stone. What does the combination of infection signs and obstruction represent, and what is the priority management?",
    opts: [
      "This is typical uncomplicated cystitis accompanying a stone — treat with oral antibiotics and tamsulosin",
      "Obstructed infected kidney (sepsis + obstruction) is a urological emergency — IV antibiotics immediately (ceftriaxone or piperacillin-tazobactam depending on local resistance) AND urgent urological decompression (nephrostomy or ureteric stenting within hours); do NOT attempt medical expulsive therapy in an obstructed infected kidney — decompression takes priority over stone passage facilitation",
      "Give tamsulosin first to pass the stone; antibiotics for 3 days then reassess",
      "IV fluids + diclofenac IM for analgesia + oral ciprofloxacin and review in 48h"
    ],
    ans: 1
  }
];

export const RENP_PRE_Q_M16 = [
  {
    q: "A patient with K+ 7.1 mEq/L and sinusoidal ECG pattern is admitted. IV calcium gluconate is administered. What is the correct understanding of calcium gluconate's effect on potassium?",
    opts: [
      "Calcium gluconate lowers serum potassium by promoting renal K+ excretion",
      "Calcium gluconate does NOT lower serum potassium — it stabilises the cardiac membrane by restoring the electrical gradient across myocardial cells (raises the threshold for depolarisation), preventing arrhythmia; separate agents (insulin/dextrose, salbutamol) are required to actually shift K+ into cells",
      "Calcium gluconate shifts potassium into cells by stimulating Na+/K+ ATPase",
      "Calcium gluconate chelates potassium ions in the plasma reducing free K+ concentration"
    ],
    ans: 1
  },
  {
    q: "An elderly patient on HCTZ 25 mg OD develops Na+ of 121 mEq/L after 3 weeks. She is confused. What is the maximum safe rate of Na+ correction in the first 24 hours?",
    opts: [
      "Correct Na+ rapidly to 135 mEq/L within 6 hours to restore consciousness urgently",
      "Maximum 8–10 mEq/L per 24 hours; faster correction causes osmotic demyelination syndrome (central pontine myelinolysis) — permanent neurological injury; for symptomatic patients with seizures, raise Na+ by 4–6 mEq/L in the first hour using 3% hypertonic saline, then slow to complete no more than 8–10 mEq/L total in 24h",
      "Correct at 15 mEq/L per 24h — elderly patients tolerate faster correction",
      "Correct as fast as possible — osmotic demyelination only occurs in alcoholics and malnourished patients"
    ],
    ans: 1
  },
  {
    q: "A patient has persistent hypokalaemia (K+ 2.9 mEq/L) despite receiving 120 mEq of oral KCl over 3 days. What electrolyte abnormality should be checked and why?",
    opts: [
      "Serum calcium — hypocalcaemia competes with K+ for renal tubular reabsorption",
      "Serum magnesium — hypomagnesaemia impairs ROMK channel function in the collecting duct, preventing renal K+ conservation; K+ supplementation fails until Mg2+ is corrected first; treat with IV magnesium sulphate 2–4g",
      "Serum phosphate — hypophosphataemia causes cellular K+ release masking the true deficit",
      "Serum bicarbonate — metabolic alkalosis causes K+ shift into cells making it difficult to correct"
    ],
    ans: 1
  },
  {
    q: "A patient with malignancy-associated hypercalcaemia (Ca2+ 3.4 mmol/L) requires immediate treatment. Calcitonin and zoledronic acid are both prescribed. What is the rationale for this combination?",
    opts: [
      "Calcitonin and zoledronic acid have synergistic mechanisms that amplify each other's effect on calcium",
      "Calcitonin has rapid onset (4–6h) but causes tachyphylaxis within 48h; zoledronic acid has slow onset (2–4 days) but sustained effect (3–4 weeks); the combination uses calcitonin as a bridge until zoledronic acid reaches peak efficacy, providing immediate AND sustained calcium control",
      "Calcitonin prevents the bone pain side effect of zoledronic acid infusion",
      "Zoledronic acid is given to prevent hypocalcaemia from calcitonin's strong effect on bone"
    ],
    ans: 1
  },
  {
    q: "A patient on long-term omeprazole 40 mg OD for GORD presents with muscle cramps, fatigue, and Mg2+ of 0.52 mmol/L. Oral magnesium supplements have been tried for 4 weeks without improvement. What is the pharmacological explanation and management?",
    opts: [
      "Oral magnesium absorption requires gastric acid and is blocked by omeprazole — give IV magnesium",
      "PPIs inhibit intestinal TRPM6/TRPM7 magnesium channels, which are required for active Mg2+ absorption from the gut; oral Mg2+ supplements cannot be adequately absorbed when this channel is blocked; management: stop omeprazole and switch to H2 receptor antagonist (famotidine — does not block TRPM6); provide IV MgSO4 for acute correction; long-term oral Mg2+ will recover once PPI stopped",
      "Omeprazole chelates magnesium in the gut forming insoluble complexes",
      "GORD itself causes magnesium malabsorption through oesophageal inflammation"
    ],
    ans: 1
  }
];

export const RENP_POST_Q_M16 = [
  {
    q: "A patient with K+ 6.4 mEq/L and peaked T waves on ECG receives calcium gluconate, insulin/dextrose, and nebulised salbutamol. Thirty minutes later K+ is 5.8 mEq/L and ECG has normalised. What is the correct next step?",
    opts: [
      "Discharge the patient — K+ is now below 6.0 and ECG is normal",
      "The treatments given (calcium gluconate, insulin, salbutamol) are temporary measures that shift K+ into cells without removing it from the body; total body K+ is unchanged; prescribe patiromer or sodium zirconium cyclosilicate (or arrange dialysis if AKI is present) to provide definitive K+ removal; identify and address the cause (stop K+-sparing drugs if present); monitor K+ every 1–2h as redistribution from cells may cause K+ to rise again",
      "Repeat the same treatment cycle — the acute phase has been successfully managed",
      "Start oral potassium supplementation — the insulin/dextrose caused relative hypokalaemia"
    ],
    ans: 1
  },
  {
    q: "A patient's Na+ is corrected from 112 to 128 mEq/L over 8 hours (16 mEq/L rise) using 3% hypertonic saline. The patient is still confused. What is the immediate priority?",
    opts: [
      "Continue hypertonic saline at the same rate — the confusion confirms the Na+ is still too low",
      "Stop hypertonic saline immediately — 16 mEq/L in 8h far exceeds the safe rate (maximum 8–10 mEq/L per 24h); administer IV 5% dextrose or desmopressin 2 mcg IV to intentionally slow the correction rate; monitor Na+ every 1–2h; confusion may reflect the underlying condition, not requiring faster correction; osmotic demyelination syndrome risk is now significant",
      "Reduce to 0.9% saline and continue at the same rate",
      "The correction rate is appropriate — 16 mEq/L per 8h is within guidelines for symptomatic severe hyponatraemia"
    ],
    ans: 1
  },
  {
    q: "A patient with hypercalcaemia (Ca2+ 3.2 mmol/L) from sarcoidosis is treated with IV saline and furosemide. Calcium falls to 3.0 mmol/L. What additional treatment targets the specific pathophysiology of sarcoidosis-related hypercalcaemia?",
    opts: [
      "Zoledronic acid 4 mg IV — bisphosphonate is first-line for all hypercalcaemia",
      "Prednisolone 40–60 mg OD — sarcoid granulomas contain activated macrophages with ectopic 1-alpha-hydroxylase that convert 25-hydroxyvitamin D to active calcitriol independently of PTH; steroids inhibit this ectopic enzyme activity, reducing calcitriol production and GI calcium absorption; this is the specific mechanism of sarcoidosis hypercalcaemia and steroids are the disease-specific treatment",
      "Calcitonin SC — fastest-acting agent for sustained hypercalcaemia correction",
      "Denosumab SC — anti-RANKL therapy addresses the bone resorption component"
    ],
    ans: 1
  },
  {
    q: "A patient with TDF-induced Fanconi syndrome has hypophosphataemia (PO4 0.44 mmol/L) with bone pain and proximal muscle weakness. TDF has been switched to TAF. What additional pharmacological management is needed?",
    opts: [
      "Oral calcium carbonate — phosphate wasting causes secondary calcium deficiency",
      "Oral phosphate supplementation (sodium or potassium phosphate effervescent tablets 16.1 mmol TDS) to correct hypophosphataemia; active vitamin D (alfacalcidol) to support phosphate absorption and bone remineralisation; physiotherapy for proximal myopathy; monitor phosphate weekly until normalised — Fanconi syndrome phosphate wasting may take months to resolve even after switching ART",
      "IV zoledronic acid — bisphosphonate therapy to prevent further bone demineralisation",
      "High-dose vitamin D3 50,000 units weekly — vitamin D deficiency is the primary cause"
    ],
    ans: 1
  },
  {
    q: "A 64-year-old man on long-term loop diuretic therapy presents with muscle weakness, cramps, and an irregular pulse. Laboratory: K+ 2.7 mEq/L, Mg2+ 0.48 mmol/L, Na+ 133 mEq/L. ECG: frequent ventricular ectopics and U waves. What is the correct sequence of electrolyte replacement?",
    opts: [
      "Start K+ replacement immediately and aggressively — hypokalaemia is the most dangerous finding",
      "Correct Mg2+ FIRST (IV MgSO4 2–4g over 30–60 min) before or alongside K+ replacement — hypomagnesaemia impairs renal K+ conservation (blocks ROMK channels) and impairs PTH secretion causing secondary hypocalcaemia; K+ supplementation will fail to maintain serum K+ until Mg2+ is corrected; then give IV KCl 10–20 mEq/h via central vein with continuous ECG monitoring; Na+ is mildly low and will correct with volume",
      "Give IV NaCl 3% to correct hyponatraemia first — this is the most immediately dangerous abnormality",
      "Correct all three simultaneously in separate IV lines to save time"
    ],
    ans: 1
  }
];
