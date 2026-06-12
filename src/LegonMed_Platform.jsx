import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

// Home sections
import Hero from './sections/Hero';
import VisionMission from './sections/VisionMission';
import Pillars from './sections/Pillars';
import Camps from './sections/Camps';
import NextGathering from './sections/NextGathering'; 
import Journal from './sections/Journal';
import Eternity from './sections/Eternity';

// Pages
import AboutPage from './pages/About';
import MinistriesPage from './pages/Ministries';
import CampMeetingsPage from './pages/CampMeetings';
import EternityPage from './pages/EternityPage';
import JournalPage from './pages/JournalPage';
import RegistrationPage from './pages/RegistrationPage';
import TreasuryPage from './pages/TreasuryPage';
import ChroniclesPage from './pages/ChroniclesPage';
import AdminPage from './pages/AdminPage';
import PrayerWall from './pages/PrayerWall';
import ArticlePage from './pages/ArticlePage';

function HomePage() {
  return (
    <>
      <Hero />
      <VisionMission />
      <Pillars />
      <Camps />
      <NextGathering />
      <Journal />
      <Eternity />
    </>
  );
}

// ── Floating Contact Button ───────────────────────────────────────────────────
function FloatingContactButton() {
  const location = useLocation();
  if (location.pathname === '/contact') return null;
  return (
    <Link to="/contact" style={{
      position: 'fixed', bottom: '32px', right: '32px', zIndex: 999,
      backgroundColor: '#E8440A', color: '#FFF', textDecoration: 'none',
      padding: '12px 20px', fontSize: '0.68rem', fontWeight: '800',
      letterSpacing: '2px', textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
      display: 'flex', alignItems: 'center', gap: '8px',
      boxShadow: '0 4px 24px rgba(232, 68, 10, 0.35)',
    }}>
      ✉ Contact Us
    </Link>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/prayer-wall"  element={<PrayerWall />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/ministries"   element={<MinistriesPage />} />
        <Route path="/camps"        element={<CampMeetingsPage />} />
        <Route path="/register"     element={<RegistrationPage />} />
        <Route path="/treasury"     element={<TreasuryPage />} />
        <Route path="/article/:id"  element={<ArticlePage />} />
        <Route path="/chronicles"   element={<ChroniclesPage />} />
        <Route path="/eternity"     element={<EternityPage />} />
        <Route path="/journal"      element={<JournalPage />} />
        <Route path="/publications" element={<JournalPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="/admin"        element={<AdminPage />} />
      </Routes>
      <FloatingContactButton />
      <Footer />
    </div>
  );
}

export default App;import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';

// Home sections
import Hero from './sections/Hero';
import VisionMission from './sections/VisionMission';
import Pillars from './sections/Pillars';
import Camps from './sections/Camps';
import NextGathering from './sections/NextGathering'; 
import Journal from './sections/Journal';
import Eternity from './sections/Eternity';

// Pages
import AboutPage from './pages/About';
import MinistriesPage from './pages/Ministries';
import CampMeetingsPage from './pages/CampMeetings';
import EternityPage from './pages/EternityPage';
import JournalPage from './pages/JournalPage';
import RegistrationPage from './pages/RegistrationPage';
import TreasuryPage from './pages/TreasuryPage';
import ChroniclesPage from './pages/ChroniclesPage';
import AdminPage from './pages/AdminPage';
import PrayerWall from './pages/PrayerWall';
import ArticlePage from './pages/ArticlePage';

function HomePage() {
  return (
    <>
      <Hero />
      <VisionMission />
      <Pillars />
      <Camps />
      <NextGathering />
      <Journal />
      <Eternity />
    </>
  );
}

// ── Floating Contact Button ───────────────────────────────────────────────────
function FloatingContactButton() {
  const location = useLocation();
  if (location.pathname === '/contact') return null;
  return (
    <Link to="/contact" style={{
      position: 'fixed', bottom: '32px', right: '32px', zIndex: 999,
      backgroundColor: '#E8440A', color: '#FFF', textDecoration: 'none',
      padding: '12px 20px', fontSize: '0.68rem', fontWeight: '800',
      letterSpacing: '2px', textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
      display: 'flex', alignItems: 'center', gap: '8px',
      boxShadow: '0 4px 24px rgba(232, 68, 10, 0.35)',
    }}>
      ✉ Contact Us
    </Link>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#0F0F0F', minHeight: '100vh' }}>
      <Navbar />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/prayer-wall"  element={<PrayerWall />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/ministries"   element={<MinistriesPage />} />
        <Route path="/camps"        element={<CampMeetingsPage />} />
        <Route path="/register"     element={<RegistrationPage />} />
        <Route path="/treasury"     element={<TreasuryPage />} />
        <Route path="/article/:id"  element={<ArticlePage />} />
        <Route path="/chronicles"   element={<ChroniclesPage />} />
        <Route path="/eternity"     element={<EternityPage />} />
        <Route path="/journal"      element={<JournalPage />} />
        <Route path="/publications" element={<JournalPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="/admin"        element={<AdminPage />} />
      </Routes>
      <FloatingContactButton />
      <Footer />
    </div>
  );
}

export default App;