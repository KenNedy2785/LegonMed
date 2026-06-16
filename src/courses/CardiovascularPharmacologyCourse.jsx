import React, { useState } from 'react';
import { CVP_MODS as cvpModules } from '../data/cvp_data.js';

export default function CardiovascularPharmacologyCourse({ session, registered, onBack, onRegister, onGoHome }) {
  const [activeModuleId, setActiveModuleId] = useState(null);

  const activeModule = cvpModules.find(m => m.id === activeModuleId);

  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((str, index) => (
      <p key={index} style={{ marginBottom: '12px', lineHeight: '1.6', color: '#334155' }}>
        {str}
      </p>
    ));
  };

  const getRoleBadgeStyle = (role) => {
    const mapping = {
      doctor: { bg: '#E0F2FE', text: '#0369A1', label: '🩺 Clinical Doctor Perspective' },
      pharmacist: { bg: '#DCFCE7', text: '#15803D', label: '💊 Pharmacy & Kinetics Guardrail' },
      nurse: { bg: '#F3E8FF', text: '#6B21A8', label: '🩹 Nursing Care & Monitoring' },
      labtech: { bg: '#FEF3C7', text: '#B45309', label: '🔬 Laboratory Scientist Alert' },
      student: { bg: '#FCE7F3', text: '#C2185B', label: '📚 High-Yield Exam Pearl' }
    };
    return mapping[role.toLowerCase()] || { bg: '#F1F5F9', text: '#475569', label: role.toUpperCase() };
  };

  return (
    <div style={{ fontFamily: '"Source Sans 3", sans-serif', background: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <button 
            onClick={activeModuleId ? () => setActiveModuleId(null) : onBack}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'white', border: '1px solid #E2E8F0', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', color: '#475569' }}
          >
            ← {activeModuleId ? "Back to Modules" : "Back to Dashboard"}
          </button>
          <button onClick={onGoHome} style={{ background: 'transparent', border: 'none', color: '#64748B', cursor: 'pointer', fontWeight: '500' }}>
            Go Platform Home
          </button>
        </div>

        {/* COURSE LIST VIEW */}
        {!activeModuleId ? (
          <div>
            <div style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', padding: '40px', borderRadius: '16px', color: 'white', marginBottom: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '32px' }}>💊</span>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '36px', fontWeight: '700', marginTop: '12px', marginBottom: '8px' }}>Cardiovascular Pharmacology</h1>
              <p style={{ fontSize: '18px', opacity: '0.9', maxWidth: '700px' }}>Master mechanism-driven clinical prescribing, critical safety windows, and high-yield cardiovascular system management.</p>
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1E293B', marginBottom: '20px' }}>Course Curriculum ({cvpModules.length} Modules)</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cvpModules.map((mod) => (
                <div 
                  key={mod.id} 
                  onClick={() => setActiveModuleId(mod.id)}
                  style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: mod.color || '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0, color: 'white' }}>
                    {mod.icon}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: mod.color || '#3B82F6', textTransform: 'uppercase' }}>Module {mod.num}</span>
                      <span style={{ fontSize: '13px', color: '#64748B' }}>• {mod.dur}</span>
                    </div>
                    <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#1E293B', marginBottom: '6px' }}>{mod.title}</h3>
                    <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '12px' }}>{mod.sub}</p>
                    <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', borderLeft: '3px solid #E2E8F0', paddingLeft: '12px' }}>"{mod.tagline}"</p>
                  </div>
                  <span style={{ fontSize: '18px', color: '#94A3B8', alignSelf: 'center' }}>→</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          
          /* ACTIVE MODULE DETAIL VIEW */
          <div>
            <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: activeModule.color, textTransform: 'uppercase' }}>Module {activeModule.num} Detail</span>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '32px', fontWeight: '700', color: '#1E293B', marginTop: '4px', marginBottom: '8px' }}>{activeModule.title}</h1>
              <p style={{ color: '#64748B', fontSize: '16px' }}>{activeModule.sub}</p>
            </div>

            {/* Case Story Section */}
            {activeModule.story && (
              <div style={{ background: '#FFFDF5', border: '1px solid #FEF3C7', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#B45309', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  📖 Patient Case Exploration
                </h2>
                <div style={{ fontStyle: 'italic', fontSize: '16px', color: '#451A03' }}>
                  {formatText(activeModule.story)}
                </div>
              </div>
            )}

            {/* Core Sections Content */}
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', marginBottom: '16px' }}>Scientific & Clinical Analysis</h2>
            {activeModule.sections && activeModule.sections.map((section, idx) => (
              <div key={idx} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0F172A', marginBottom: '12px', borderBottom: '2px solid #F1F5F9', paddingBottom: '12px' }}>{section.h}</h3>
                <p style={{ fontSize: '15px', color: '#475569', fontWeight: '500', marginBottom: '20px', background: '#F8FAFC', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #CBD5E1' }}>{section.a}</p>
                <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '15px' }}>
                  {formatText(section.c)}
                </div>

                {/* Section Key Points */}
                {section.kp && (
                  <div style={{ marginTop: '24px', background: '#F8FAFC', borderRadius: '12px', padding: '20px', border: '1px solid #E2E8F0' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '12px' }}>✨ Core Takeaways</h4>
                    <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {section.kp.map((point, kIdx) => (
                        <li key={kIdx} style={{ color: '#334155', fontSize: '14.5px', lineHeight: '1.5' }}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Multidisciplinary Team Callouts */}
                {section.callouts && (
                  <div style={{ marginTop: '28px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', marginBottom: '14px' }}>🛡️ Professional Safety & Workflow Integration</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {section.callouts.map((callout, cIdx) => {
                        const style = getRoleBadgeStyle(callout.role);
                        return (
                          <div key={cIdx} style={{ border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                            <div style={{ backgroundColor: style.bg, color: style.text, padding: '8px 16px', fontSize: '13px', fontWeight: '700', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span>{style.label}</span>
                              <span style={{ fontSize: '11px', textTransform: 'uppercase', opacity: '0.8', background: 'rgba(255,255,255,0.4)', padding: '2px 8px', borderRadius: '4px' }}>{callout.type}</span>
                            </div>
                            <div style={{ padding: '14px 16px', backgroundColor: '#FAFAFA', fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
                              {callout.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Module Evidence Base Footer */}
            {activeModule.ev && (
              <div style={{ padding: '20px', borderTop: '1px dashed #CBD5E1', color: '#64748B', fontSize: '13px' }}>
                <strong>Evidence Base & Guidelines:</strong> {activeModule.ev}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
