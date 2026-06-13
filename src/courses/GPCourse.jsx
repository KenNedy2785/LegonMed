import React, { useState } from 'react';

export default function GPCourse({ onBack, onGoHome }) {
  const [currentModuleIdx, setCurrentModuleIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('objectives');

  const syllabusModules = [
    { num: "01", title: "Introduction to Pharmacology" },
    { num: "02", title: "Drug Absorption" },
    { num: "03", title: "Drug Distribution" },
    { num: "04", title: "Drug Metabolism" },
    { num: "05", title: "Drug Excretion" },
    { num: "06", title: "Drug Targets & Receptor Interaction" },
    { num: "07", title: "Variation in Drug Response, ADRs & Drug Interactions" },
    { num: "08", title: "Clinical Trials & Pharmacogenomics" }
  ];

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: "#fcfbfa", minHeight: "100vh" }}>
      {/* Platform Navigation Header Consistent with Other Tracks */}
      <div style={{ borderBottom: "1px solid #f2efeb", background: "#fff", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#7D6608", fontWeight: "700", display: "block", marginBottom: "4px" }}>Medical Education Portal</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: "700", color: "#1a1a1a" }}>General Pharmacology Institute</h1>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button onClick={onBack} style={{ background: "none", border: "1px solid #e6e1da", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#4a4a4a", cursor: "pointer" }}>← Back to Pillar</button>
          <button onClick={onGoHome} style={{ background: "#7D6608", border: "none", padding: "10px 20px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#fff", cursor: "pointer" }}>Home Dashboard</button>
        </div>
      </div>

      {/* Main Framework Content Layout Grid */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px", display: "grid", gridTemplateColumns: "360px 1fr", gap: "40px" }}>
        
        {/* Left Track Navigation Panel */}
        <div style={{ background: "#fff", border: "1px solid #e6e1da", borderRadius: "12px", padding: "24px" }}>
          <div style={{ paddingBottom: "16px", borderBottom: "1px solid #f2efeb", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#8a847c", fontWeight: "700" }}>Course Syllabus Tracks</h3>
            <p style={{ fontSize: "13px", color: "#6a6a6a", marginTop: "4px" }}>8 Core Instructional Blocks</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {syllabusModules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentModuleIdx(idx);
                  setActiveTab('objectives');
                }}
                style={{
                  textAlign: "left",
                  padding: "14px 16px",
                  borderRadius: "8px",
                  border: idx === currentModuleIdx ? "1px solid #7D6608" : "1px solid #e6e1da",
                  background: idx === currentModuleIdx ? "#fdfbf7" : "#fff",
                  color: idx === currentModuleIdx ? "#7D6608" : "#2a2a2a",
                  fontWeight: idx === currentModuleIdx ? "700" : "500",
                  cursor: "pointer",
                  fontSize: "13.5px",
                  lineHeight: "1.4"
                }}
              >
                <span style={{ display: "block", fontSize: "11px", color: idx === currentModuleIdx ? "#7D6608" : "#8a847c", fontWeight: "700", marginBottom: "2px" }}>MODULE {mod.num}</span>
                {mod.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Active Workspace Panel */}
        <div style={{ background: "#fff", border: "1px solid #e6e1da", borderRadius: "12px", padding: "40px" }}>
          <div style={{ borderBottom: "1px solid #f2efeb", paddingBottom: "24px", marginBottom: "32px" }}>
            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", color: "#7D6608", fontWeight: "700", background: "#fdfbf7", padding: "6px 12px", borderRadius: "4px", border: "1px solid #f5ebd6" }}>Active Track Frame</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "32px", fontWeight: "700", color: "#1a1a1a", marginTop: "16px" }}>{syllabusModules[currentModuleIdx].title}</h2>
          </div>

          {/* Sub-navigation Tabs matching layout matrices */}
          <div style={{ display: "flex", borderBottom: "1px solid #e6e1da", marginBottom: "32px", gap: "24px" }}>
            {['objectives', 'content', 'quiz'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "14px 4px",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? "2px solid #7D6608" : "2px solid transparent",
                  color: activeTab === tab ? "#7D6608" : "#6a6a6a",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
              >
                {tab === 'objectives' ? '�� Objectives' : tab === 'content' ? '🔬 Core Science' : '🎯 Assessment'}
              </button>
            ))}
          </div>

          {/* Core Display View Windows */}
          <div style={{ minHeight: "300px" }}>
            {activeTab === 'objectives' && (
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1a1a1a", marginBottom: "16px" }}>Learning Objectives & Benchmarks</h4>
                <div style={{ background: "#faf9f6", padding: "24px", borderRadius: "8px", border: "1px dashed #e6e1da", color: "#5a5a5a", fontSize: "14.5px", lineHeight: "1.6" }}>
                  Educational benchmarks and core learning targets for <strong>{syllabusModules[currentModuleIdx].title}</strong> are actively parsing into this view state frame.
                </div>
              </div>
            )}
            {activeTab === 'content' && (
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1a1a1a", marginBottom: "16px" }}>Core Scientific Material</h4>
                <div style={{ background: "#faf9f6", padding: "24px", borderRadius: "8px", border: "1px dashed #e6e1da", color: "#5a5a5a", fontSize: "14.5px", lineHeight: "1.6" }}>
                  Detailed scientific principles, pharmacokinetic parameters, and high-yield system illustrations for this block are preparing to connect.
                </div>
              </div>
            )}
            {activeTab === 'quiz' && (
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#1a1a1a", marginBottom: "16px" }}>Knowledge Check Evaluation</h4>
                <div style={{ background: "#faf9f6", padding: "24px", borderRadius: "8px", border: "1px dashed #e6e1da", color: "#5a5a5a", fontSize: "14.5px", lineHeight: "1.6" }}>
                  Interactive knowledge checking structures, clinical scenario matching blocks, and board-style questions are staging here.
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
