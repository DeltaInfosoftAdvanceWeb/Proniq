"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import LogosCarousel from '../../components/LogosCarousel';

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0073b1 0%, #00c56b 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 0',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
};

const cardStyle = {
  background: 'rgb(255, 255, 255)',
  borderRadius: '16px',
  border: '1px solid rgba(234, 234, 234, 0.3)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
  width: '95%',
  maxWidth: '1400px',
  padding: '3rem 2.5rem',
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 1,
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  background: 'linear-gradient(90deg, #0073b1, #00c56b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '1.2rem',
};

const textStyle = {
  fontSize: '1.15rem',
  color: '#444',
  marginBottom: '1.8rem',
  lineHeight: 1.75,
};

const sectionTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '1.5rem',
  marginTop: '2rem',
};

const heroImageStyle = {
  width: '100%',
  maxWidth: '800px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '16px',
  margin: '2rem auto',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
};

const benefitsListStyle = {
  textAlign: 'left',
  listStyle: 'none',
  padding: 0,
  margin: '1.5rem 0',
};

const benefitItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.75rem 0',
  fontSize: '1rem',
  color: '#444',
};

const checkIconStyle = {
  color: '#00c56b',
  fontSize: '1.2rem',
  fontWeight: 'bold',
};

const caseStudyStyle = {
  background: 'linear-gradient(135deg, rgba(0, 115, 177, 0.08) 0%, rgba(0, 197, 107, 0.05) 100%)',
  borderRadius: '16px',
  padding: '3rem',
  marginTop: '2rem',
  border: '1px solid rgba(0, 115, 177, 0.15)',
  textAlign: 'left',
};

const caseStudyTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#0073b1',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const caseStudySubtitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#00c56b',
  marginBottom: '0.75rem',
};

const caseStudyTextStyle = {
  fontSize: '1rem',
  color: '#555',
  lineHeight: 1.6,
  marginBottom: '1.5rem',
};

const caseStudyGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
};

const caseStudyCardStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid rgba(0, 115, 177, 0.1)',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const caseStudyCardTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '0.5rem',
};

const caseStudyCardValueStyle = {
  fontSize: '2.2rem',
  fontWeight: 700,
  color: '#00c56b',
  marginBottom: '0.25rem',
};

const caseStudyCardLabelStyle = {
  fontSize: '0.95rem',
  color: '#666',
};

const clientsTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '1.5rem',
  marginTop: '2rem',
  textAlign: 'center' as const,
};

const Architecture = () => {
  return (
    <div style={containerStyle}>
      <BackButton label="← Back Home" href="/" />

      <motion.div 
        style={cardStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <motion.h1 style={titleStyle}>
          Architecture Solutions by Delta Infosoft
        </motion.h1>
        
        <motion.p style={textStyle}>
          Delta Infosoft Pvt. Ltd. provides specialized ERP and workforce 
          solutions for architecture and design firms. 
          Our <strong>MyTime platform</strong> simplifies project time tracking, 
          resource allocation, and client billing, helping 
          architectural teams focus on creativity while ensuring efficiency.
        </motion.p>

        {/* Hero Image */}
        <motion.img
          src="/architecture.jpeg"
          alt="Architecture Project Management"
          style={heroImageStyle}
        />

        {/* Case Study */}
        <motion.div style={caseStudyStyle}>
          <motion.h2 style={caseStudyTitleStyle}>
            Case Study: DNC INFRA — Architecture & Design
          </motion.h2>

          <h3 style={caseStudySubtitleStyle}>Industry</h3>
          <p style={caseStudyTextStyle}>Architecture & Infrastructure Design</p>

          <h3 style={caseStudySubtitleStyle}>Challenges</h3>
          <ul style={benefitsListStyle}>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Tracking billable vs non-billable hours across multiple design projects.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Coordinating architects, engineers, and contractors on shared timelines.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Managing approvals and revisions between design and client teams.</li>
          </ul>

          <h3 style={caseStudySubtitleStyle}>Our Solution: Delta MyTime</h3>
          <p style={caseStudyTextStyle}>
            DNC INFRA implemented <strong>Delta MyTime</strong> to streamline 
            time tracking, project costing, and workforce management for its 
            architectural projects.
          </p>

          <h3 style={caseStudySubtitleStyle}>Key Features Deployed</h3>
          <ul style={benefitsListStyle}>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Centralized timesheets for architects and engineers.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Project-based cost allocation and billing integration.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Real-time dashboards for project managers.</li>
          </ul>

          <h3 style={caseStudySubtitleStyle}>Results & Impact</h3>
          <div style={caseStudyGridStyle}>
            <motion.div style={caseStudyCardStyle}>
              <div style={caseStudyCardValueStyle}>40%</div>
              <div style={caseStudyCardTitleStyle}>Faster Billing</div>
              <div style={caseStudyCardLabelStyle}>Automated timesheets</div>
            </motion.div>
            <motion.div style={caseStudyCardStyle}>
              <div style={caseStudyCardValueStyle}>30%</div>
              <div style={caseStudyCardTitleStyle}>Reduced Rework</div>
              <div style={caseStudyCardLabelStyle}>Better revision tracking</div>
            </motion.div>
            <motion.div style={caseStudyCardStyle}>
              <div style={caseStudyCardValueStyle}>Real-time</div>
              <div style={caseStudyCardTitleStyle}>Resource Visibility</div>
              <div style={caseStudyCardLabelStyle}>Improved allocation</div>
            </motion.div>
          </div>

          <p style={caseStudyTextStyle}>
            <strong>“With Delta MyTime, our projects run smoother. Billing is faster, 
            teams collaborate better, and clients appreciate the transparency.”</strong> — DNC INFRA, Managing Director
          </p>

          <h3 style={caseStudySubtitleStyle}>Case Study Summary</h3>
          <ul style={benefitsListStyle}>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Client</strong>: DNC INFRA</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Industry</strong>: Architecture & Infrastructure</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Product</strong>: Delta MyTime</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Focus Areas</strong>: Time Tracking, Costing, Collaboration</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Impact</strong>: Faster billing, fewer delays, better client visibility</li>
          </ul>
        </motion.div>

        {/* Clients Logos */}
        <motion.h2 style={clientsTitleStyle}>Trusted by Architecture & Infra Leaders</motion.h2>
        <LogosCarousel 
          logos={[
            "/logos/Aditya Birla.png",
            "/logos/ALGO.png",
            "/logos/Angel.png",
            "/logos/Bansan Dairy.png",
            "/logos/CHEM 1.png",
            "/logos/DEL.png",
            "/logos/Desire.png",
            "/logos/DNC.png",
            "/logos/Duke.png",
            "/logos/Flotech.png",
            "/logos/FlowTech.png",
            "/logos/GA.png",
            "/logos/Group 1000005864.png",
            "/logos/Harsiddh.png",
            "/logos/KSB.png",
            "/logos/Lahoty.png",
            "/logos/Leak-Proof.png",
            "/logos/Mascot.png",
            "/logos/Oswal.png",
            "/logos/Pluga.png",
            "/logos/Prompt.png",
            "/logos/Ratnamani.png",
            "/logos/Unnati.png",
            "/logos/Waterman.png",
          ]}
          height={100}
          gap={48}
          duration={25}
          ariaLabel="Trusted partners logos carousel"
        />
      </motion.div>
    </div>
  );
};

export default Architecture;
