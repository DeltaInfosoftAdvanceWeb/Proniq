'use client';
import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import Footer from './components/Footer';

const heroStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem 2rem',
  background: 'linear-gradient(135deg, #0073b1 0%, #00c56b 100%)',
  color: '#fff',
  gap: '2.5rem',
  flexWrap: 'wrap',
  position: 'relative',
  overflow: 'hidden',
};

const heroTextStyle: CSSProperties = {
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const ctaButtonStyle: CSSProperties = {
  background: 'linear-gradient(90deg, #00c56b 0%, #0073b1 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '30px',
  padding: '0.85rem 2rem',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '1.5rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 115, 177, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
};

const heroImgStyle: CSSProperties = {
  width: 340,
  maxWidth: '90vw',
  borderRadius: '12px',
  transition: 'all 0.5s ease',
  filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.2))',
};

const featuresSectionStyle: CSSProperties = {
  background: 'linear-gradient(180deg, #fafafa 0%, #f0f9ff 100%)',
  color: '#333',
  padding: '3.5rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
};

const featuresGridStyle: CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '1.5rem',
};

const featureCardStyle: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(234, 234, 234, 0.3)',
  padding: '2rem 1.5rem',
  maxWidth: 260,
  minWidth: 220,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.4s ease',
};

const featureIconStyle: CSSProperties = {
  width: 50,
  height: 50,
  marginBottom: '1rem',
  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
  transition: 'transform 0.3s ease',
};

/* ——— Industry Section Styles ——— */
const industrySectionStyle: CSSProperties = {
  background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)',
  color: '#2b2b2b',
  padding: '3.5rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
};

const selectorWrapStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const staticPrefixStyle: CSSProperties = {
  fontSize: '1.6rem',
  fontWeight: 800,
  color: '#0a2b3e',
  letterSpacing: '0.2px',
};

const bigGradientWordStyle: CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 900,
  background: 'linear-gradient(90deg, #0073b1, #00c56b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
};

const chipBarStyle: CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '0.75rem',
};

const chipStyle: CSSProperties = {
  border: '1px solid #cfe9f7',
  padding: '0.55rem 0.9rem',
  borderRadius: '999px',
  cursor: 'pointer',
  fontWeight: 700,
  background: '#fff',
  color: '#0073b1',
};

const chipActiveStyle: CSSProperties = {
  ...chipStyle,
  background: 'linear-gradient(90deg, #00c56b, #0073b1)',
  color: '#fff',
  border: 'none',
  boxShadow: '0 6px 18px rgba(0,115,177,0.18)',
};

const dynamicCardStyle: CSSProperties = {
  marginTop: '1.5rem',
  background: '#ffffff',
  borderRadius: '18px',
  border: '1px solid rgba(0,0,0,0.06)',
  padding: '1.5rem',
  maxWidth: 980,
  width: '100%',
  boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
};

const bulletsStyle: CSSProperties = {
  margin: 0,
  paddingLeft: '1.1rem',
  lineHeight: 1.7,
  color: '#384047',
};

const actionsRowStyle: CSSProperties = {
  display: 'flex',
  gap: '0.75rem',
  flexWrap: 'wrap',
  marginTop: '1rem',
};

const ghostButtonStyle: CSSProperties = {
  background: 'transparent',
  color: '#0073b1',
  border: '1px solid #cfe9f7',
  borderRadius: '10px',
  padding: '0.6rem 1rem',
  fontWeight: 600,
  cursor: 'pointer',
};

const solidButtonStyle: CSSProperties = {
  background: 'linear-gradient(90deg, #00c56b 0%, #0073b1 100%)',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  padding: '0.6rem 1rem',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 6px 18px rgba(0,115,177,0.18)',
};
/* ——— End Industry Styles ——— */

const featureCards = [
  { icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', alt: 'Dashboard', title: 'Simple Dashboard', desc: 'All your projects and tasks in one view.' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png', alt: 'Collaboration', title: 'Team Collaboration', desc: 'Work together efficiently in real time.' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', alt: 'Analytics', title: 'Quick Analytics', desc: 'Track progress and identify bottlenecks.' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/753/753345.png', alt: 'Productivity', title: 'Productivity', desc: 'Deliver projects on time, every time.' },
];

const INDUSTRIES = [
  {
    key: 'architecture',
    label: 'Architecture',
    title: 'Architecture Firms',
    seeHref: '/solutions/architecture',
    img: '/Archi.jpg',
    bullets: [
      'Project planning with Gantt & milestones',
      'BOQ, RFQ & vendor comparison',
      'Drawing & QAP version control',
      'Client approvals & change orders',
      'Resource scheduling & timesheets',
      'CRM → Estimate → Project → Invoice workflow',
    ],
  },
  {
    key: 'construction',
    label: 'Construction',
    title: 'Construction & EPC',
    seeHref: '/solutions/construction',
    img: '/ContructionandERP.jpg',
    bullets: [
      'Site progress tracking & DPRs',
      'Material planning, GRN & stock at sites',
      'Subcontractor bills & RA measurements',
      'Quality checklists, snag lists & safety',
      'Budget vs Actuals with cost codes',
      'Asset, tools & maintenance logs',
    ],
  },
  {
    key: 'heavy',
    label: 'Heavy Engineering',
    title: 'Heavy Engineering & Fabrication',
    seeHref: '/solutions/heavy-engineering',
    img: '/HeavyEngineering.jpg',
    bullets: [
      'Make-to-order BOM & routing',
      'Production planning & work orders',
      'Heat/lot traceability & QA',
      'Machine utilization & downtime',
      'Dispatch planning with e-way docs',
      'After-sales service & warranty',
    ],
  },
] as const;

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = INDUSTRIES[activeIndex];

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', position: 'relative', paddingBottom: '20px' }}>
      <motion.section
        style={heroStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,197,107,0.2) 0%, rgba(0,115,177,0) 70%)',
            top: '-100px',
            right: '-100px',
            zIndex: 0,
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,115,177,0.15) 0%, rgba(0,197,107,0) 70%)',
            bottom: '-50px',
            left: '10%',
            zIndex: 0,
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        <motion.div
          style={heroTextStyle}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <motion.h1
            style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, color: '#ffffff', margin: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Work Smart. <br />
            <span style={{ background: 'linear-gradient(90deg, #ffffff, #a0e9c8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Stay Unique.
            </span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.15rem', color: '#f3f3f3', margin: 0, lineHeight: 1.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Proniq helps teams manage projects efficiently with simple, powerful tools.
          </motion.p>
          <motion.button
            style={ctaButtonStyle}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(0, 115, 177, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => (window.location.href = '/project')}
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.img
          src="/RF.gif"
          alt="Project Management Illustration"
          style={heroImgStyle}
          initial={{ opacity: 0, x: 30, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.03, filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))', rotate: 2 }}
        />
      </motion.section>

      <section style={featuresSectionStyle}>
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 70% 20%, rgba(0, 197, 107, 0.03) 0%, rgba(0, 115, 177, 0.01) 50%, transparent 70%)',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#0073b1',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose <span style={{ color: '#00c56b' }}>Proniq</span>?
        </motion.h2>
        <div style={featuresGridStyle}>
          {featureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              style={featureCardStyle}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)', borderColor: '#00c56b' }}
            >
              <motion.img src={card.icon} alt={card.alt} style={featureIconStyle} whileHover={{ y: -5, scale: 1.1 }} />
              <motion.h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  margin: '0.7rem 0',
                  background: 'linear-gradient(90deg, #0073b1, #00c56b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {card.title}
              </motion.h3>
              <motion.p style={{ color: '#444', fontSize: '0.95rem', lineHeight: 1.5 }}>{card.desc}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={industrySectionStyle} aria-labelledby="industry-solutions">
        <motion.div
          key={`selector`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '0.75rem' }}
        >
          <div style={selectorWrapStyle}>
            <span style={staticPrefixStyle}>Are you a</span>
            <motion.span
              key={active.key}
              style={bigGradientWordStyle}
            >
              {active.label}
            </motion.span>
            <span style={staticPrefixStyle}>company?</span>
          </div>

          <div style={chipBarStyle} role="tablist" aria-label="Industry selector">
            {INDUSTRIES.map((ind, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.button
                  key={ind.key}
                  role="tab"
                  aria-selected={isActive}
                  style={isActive ? chipActiveStyle : chipStyle}
                  whileHover={{ scale: isActive ? 1.0 : 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIndex(i)}
                >
                  {ind.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          key={`card-${active.key}`}
          style={dynamicCardStyle}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.img
            src={active.img}
            alt={active.title}
            style={{
              width: '100%',
              borderRadius: '12px',
              marginBottom: '1rem',
              objectFit: 'cover',
              maxHeight: '260px',
              filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
            }}
            whileHover={{
              scale: 1.02,
              filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.25))',
            }}
          />

          <motion.h3
            style={{ margin: 0, fontSize: '1.4rem', color: '#0a2b3e' }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {active.title} — What we deliver
          </motion.h3>

          <motion.ul
            style={bulletsStyle}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          >
            {active.bullets.map((b) => (
              <motion.li key={b} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <div style={actionsRowStyle}>
            <button
              style={ghostButtonStyle}
              onClick={() => (window.location.href = active.seeHref)}
              aria-label={`See ${active.title} solutions`}
            >
              See solutions
            </button>
            <button
              style={solidButtonStyle}
              onClick={() => (window.location.href = '/contact')}
              aria-label="Talk to us"
            >
              Talk to us
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
