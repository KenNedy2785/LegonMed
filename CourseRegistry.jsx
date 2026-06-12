import { Suspense, lazy } from 'react';

const PECourse = lazy(() => import('./courses/PECourse.jsx'));
const OHCourse = lazy(() => import('./courses/OHCourse.jsx'));
const MSSepsisCourse = lazy(() => import('./courses/MSSepsisCourse.jsx'));

const COURSE_REGISTRY = {
  pe: PECourse,
  oh: OHCourse,
  ms: MSSepsisCourse,
};

function CourseLoader({ courseId, session, registered, onBack, onRegister, onGoHome }) {
  const Course = COURSE_REGISTRY[courseId];
  if (!Course) return (
    <div style={{ textAlign: "center", padding: "80px 24px", fontFamily: "Georgia,serif" }}>
      <h2 style={{ color: "#003087" }}>Course not found</h2>
      <button onClick={onGoHome} style={{ marginTop: 20, padding: "10px 24px", background: "#003087", color: "#C8A951", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}>← Home</button>
    </div>
  );
  return (
    <Suspense fallback={
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#001a5e", flexDirection: "column", gap: 16 }}>
        <div style={{ fontFamily: "Georgia,serif", fontSize: 32, fontWeight: 900, color: "#fff" }}>Legon<span style={{ color: "#C8A951" }}>Med</span></div>
        <div style={{ color: "rgba(255,255,255,.6)", fontFamily: "Arial,sans-serif", fontSize: 14 }}>Loading course...</div>
      </div>
    }>
      <Course session={session} registered={registered} onBack={onBack} onRegister={onRegister} onGoHome={onGoHome} />
    </Suspense>
  );
}

export { COURSE_REGISTRY, CourseLoader };
