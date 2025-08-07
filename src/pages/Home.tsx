import React from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const heroStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem 2rem 2rem',
  background: 'linear-gradient(135deg, #0073b1 0%, #00c56b 100%)',
  color: '#fff',
  gap: '3rem',
  flexWrap: 'wrap',
};

const heroTextStyle: CSSProperties = {
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const ctaButtonStyle: CSSProperties = {
  background: 'linear-gradient(90deg, #00c56b 0%, #0073b1 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '30px',
  padding: '1rem 2.5rem',
  fontWeight: 700,
  fontSize: '1.1rem',
  cursor: 'pointer',
  boxShadow: '0 4px 14px 0 rgba(34, 139, 230, 0.2)',
  marginTop: '1rem',
  transition: 'background 0.3s',
};

const heroImgStyle: CSSProperties = {
  width: 340,
  maxWidth: '90vw',
  borderRadius: '18px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
};

const featuresSectionStyle: CSSProperties = {
  background: '#fff',
  color: '#1e3c72',
  padding: '3rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const featuresGridStyle: CSSProperties = {
  display: 'flex',
  gap: '2.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '2rem',
};

const featureCardStyle: CSSProperties = {
  background: 'linear-gradient(120deg, #f8fafc 60%, #e0f5ef 100%)',
  borderRadius: '16px',
  boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)',
  padding: '2rem 1.5rem',
  maxWidth: 270,
  minWidth: 220,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const featureIconStyle: CSSProperties = {
  width: 56,
  height: 56,
  marginBottom: '1rem',
};

const featureCards = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    alt: "Dashboard",
    title: "Unified Dashboard",
    desc: "See all your projects, tasks, and deadlines in one clear, customizable view.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    alt: "Collaboration",
    title: "Team Collaboration",
    desc: "Assign tasks, share updates, and communicate with your team in real time.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    alt: "Analytics",
    title: "Progress Analytics",
    desc: "Track progress, spot bottlenecks, and make data-driven decisions with ease.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/753/753345.png",
    alt: "Productivity",
    title: "Boost Productivity",
    desc: "Stay organized, reduce stress, and deliver projects on time, every time.",
  },
];

const Home: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#f4f7fb', position: 'relative', paddingBottom: '70px' }}>
      {/* Hero Section */}
      <motion.section
        style={heroStyle}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          style={heroTextStyle}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 style={{ fontSize: '2.7rem', fontWeight: 800, lineHeight: 1.1, color: '#ffffff', margin: 0 }}>
            Work Smart. <br /> Stay Unique.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#f3f3f3', margin: 0 }}>
            Proniq empowers teams with intelligent tools to manage projects efficiently while staying true to their unique workflows.
          </p>
          <button
            style={ctaButtonStyle}
            onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #0073b1 0%, #00c56b 100%)')}
            onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #00c56b 0%, #0073b1 100%)')}
            onClick={() => window.location.href = '/project'}
          >
            Get Started
          </button>
        </motion.div>
        <motion.img
          src="/Project.png"
          alt="Project Management Illustration"
          style={heroImgStyle}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 0, color: '#0b4c85' }}>
          Why Choose Proniq?
        </h2>
        <div style={featuresGridStyle}>
          {featureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              style={featureCardStyle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px 0 rgba(31, 38, 135, 0.18)' }}
            >
              <img src={card.icon} alt={card.alt} style={featureIconStyle} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0.5rem 0' }}>{card.title}</h3>
              <p style={{ color: '#1c6078', fontSize: '1rem' }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
