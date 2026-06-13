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
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: "#f8fafc", minHeight: "100vh", padding: "24px" }}>
      {/* Header Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", padding: "16px 24px", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", marginBottom: "24px" }}>
        <div>
          <button onClick={onBack} style={{ background: "none", border: "none", color: "#7D6608", fontWeight: "700", cursor: "pointer", marginRight: "16px", fontSize: "14px" }}>← Back to Pillar</button>
          <button onClick={onGoHome} style={{ background: "none", border: "none", color: "#64748b", fontWeight: "600", cursor: "pointer", fontSize: "14px" }}>Home Dashboard</button>
        </div>
        <div style={{ fontWeight: "800", color: "#1e293b", fontSize: "18px" }}>🧬 General Pharmacology Institute</div>
        <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "700", background: "#f1f5f9", padding: "6px 12px", borderRadius: "20px" }}>Module {syllabusModules[currentModuleIdx].num} of 08</div>
      </div>

      <div style={{ display: "flex", gap: "24px", alignItems: "start" }}>
        {/* Left Side Module Navigation Shells */}
        <div style={{ width: "340px", background: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8", marginBottom: "12px", paddingLeft: "8px", fontWeight: "700" }}>Course Syllabus</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {syllabusModules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentModuleIdx(idx);
                  setActiveTab('objectives');
                }}
                style={{
                  textAlign: "left",
                  padding: "12px",
                  borderRadius: "8px",
                  border: idx === currentModuleIdx ? "1px solid #f5cba7" : "1px solid transparent",
                  background: idx === currentModuleIdx ? "#fdf2e9" : "transparent",
                  color: idx === currentModuleIdx ? "#7D6608" : "#334155",
                  fontWeight: idx === currentModuleIdx ? "700" : "500",
                  cursor: "pointer",
                  fontSize: "13px",
                  lineHeight: "1.4"
                }}
              >
                Module {mod.num}: {mod.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Content Canvas Shell */}
        <div style={{ flex: 1, background: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <span style={{ background: "#fdf2e9", color: "#7D6608", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>MODULE {syllabusModules[currentModuleIdx].num}</span>
          <h2 style={{ fontSize: "24px", fontWeight: "900", color: "#1e293b", marginTop: "8px", marginBottom: "24px" }}>{syllabusModules[currentModuleIdx].title}</h2>
          
          <div style={{ display: "flex", borderBottom: "2px solid #e2e8f0", marginBottom: "24px", gap: "20px" }}>
            {['objectives', 'content', 'quiz'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 8px",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab ? "3px solid #7D6608" : "3px solid transparent",
                  color: activeTab === tab ? "#7D6608" : "#64748b",
                  fontWeight: "700",
                  cursor: "pointer",
                  fontSize: "14px",
                  textTransform: "uppercase"
                }}
              >
                {tab === 'objectives' ? '📋 Objectives' : tab === 'content' ? '🔬 Core Science' : '🎯 Assessment'}
              </button>
            ))}
          </div>

          <div style={{ padding: "8px 0" }}>
            {activeTab === 'objectives' && (
              <div style={{ color: "#475569", fontSize: "15px", lineHeight: "1.6" }}>
                <p style={{ marginBottom: "12px", fontWeight: "600" }}>Learning Objectives Shell:</p>
                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
                  Educational benchmarks and core targets for {syllabusModules[currentModuleIdx].title} are actively parsing.
                </div>
              </div>
            )}
            {activeTab === 'content' && (
              <div style={{ color: "#475569", fontSize: "15px", lineHeight: "1.6" }}>
                <p style={{ marginBottom: "12px", fontWeight: "600" }}>Core Science Canvas:</p>
                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
                  Detailed scientific principles, illustrations, and clinical parameters for this section are ready to connect.
                </div>
              </div>
            )}
            {activeTab === 'quiz' && (
              <div style={{ color: "#475569", fontSize: "15px", lineHeight: "1.6" }}>
                <p style={{ marginBottom: "12px", fontWeight: "600" }}>Evaluation Matrix:</p>
                <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "8px", border: "1px dashed #cbd5e1" }}>
                  Interactive knowledge checking blocks and board-style questions are staging here.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
