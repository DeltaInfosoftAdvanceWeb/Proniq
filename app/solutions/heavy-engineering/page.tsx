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

const heroImageStyle = {
  width: '100%',
  maxWidth: '800px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '16px',
  margin: '2rem auto',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
};

const sectionTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '1.5rem',
  marginTop: '2rem',
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

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '1.5rem',
};

const featureCardStyle = {
  background: 'rgba(0, 115, 177, 0.05)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid rgba(0, 115, 177, 0.1)',
  textAlign: 'left',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
};

const featureImageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const featureTitleStyle = {
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '0.5rem',
};

const featureDescStyle = {
  fontSize: '0.95rem',
  color: '#666',
  lineHeight: 1.5,
};

const statsContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginTop: '1.5rem',
};

const statCardStyle = {
  background: 'linear-gradient(135deg, #0073b1, #00c56b)',
  color: 'white',
  borderRadius: '12px',
  padding: '2rem',
  textAlign: 'center',
  boxShadow: '0 8px 16px rgba(0, 115, 177, 0.2)',
};

const statNumberStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '0.5rem',
};

const statLabelStyle = {
  fontSize: '1rem',
  opacity: 0.9,
};

const engineeringClients = [
  { 
    name: 'Dara Engineering', 
    img: '/logos/daraengineering.png',  // add proper path
    description: 'Precision manufacturing & tooling experts', 
    projects: '100+', 
    teamSize: '200', 
    location: 'Ahmedabad, India' 
  },
  { 
    name: 'Smart Builders', 
    img: '/logos/SmartBuilders.png', 
    description: 'Industrial infrastructure & fabrication', 
    projects: '78', 
    teamSize: '95', 
    location: 'Pune, India' 
  },
  { 
    name: 'Advanced Machinery Works', 
    img: '/logos/AdvancedMachinery.png', 
    description: 'Heavy engineering and machinery', 
    projects: '65', 
    teamSize: '85', 
    location: 'Bangalore, India' 
  }
];

const features = [
  {
    title: 'Production Scheduling & Capacity Planning',
    description: 'Plan production cycles, allocate machines and workforce to meet delivery timelines efficiently.',
    image: '/Production Scheduling & Capacity Planning.jpeg'
  },
  {
    title: 'Quality Assurance & Inspection Logs',
    description: 'Track inspections, defects, and corrective actions throughout manufacturing processes.',
    image: '/Quality Assurance & Inspection Logs.jpeg'
  },
  {
    title: 'Inventory & Material Traceability',
    description: 'Manage raw materials, consumables, and finished goods with serial / batch tracking.',
    image: '/Inventory & Material Traceability.jpeg'
  },
  {
    title: 'Work Order & Maintenance Management',
    description: 'Issue and track work orders; schedule preventive maintenance and downtime analysis.',
    image: '/wo.jpeg'
  },
  {
    title: 'Cost vs Actual Reporting & Job Costing',
    description: 'Compare estimated vs actual costs per job / batch to catch overheads early and improve profitability.',
    image: '/Cost vs Actual Reporting & Job Costing.jpeg'
  }
];

const stats = [
  { number: '20+', label: 'Years Manufacturing' },
  { number: '150+', label: 'Clients' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '99%', label: 'Quality Compliance' },
];

const EngineeringPMS = () => {
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
          Engineering & Manufacturing Solutions by Delta Infosoft
        </motion.h1>

        <motion.p style={textStyle}>
          Delta Infosoft’s <strong>Project Management System (PMS)</strong> is designed for engineering and manufacturing firms like Dara Engineering to manage end-to-end operations — from production planning, quality, maintenance, and job costing to audit compliance and delivery timelines.
        </motion.p>

        {/* Hero Image */}
        <motion.img
          src="/heavyengineering.jpeg"
          alt="Engineering & Manufacturing Project Management System"
          style={heroImageStyle}
        />

        {/* Features Grid */}
        <motion.div style={sectionTitleStyle}>Key Features</motion.div>
        <div style={featuresGridStyle}>
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              style={featureCardStyle}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img src={feat.image} alt={feat.title} style={featureImageStyle} />
              <h3 style={featureTitleStyle}>{feat.title}</h3>
              <p style={featureDescStyle}>{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div style={sectionTitleStyle}>By the Numbers</motion.div>
        <motion.div style={statsContainerStyle}>
          {stats.map((stat, i) => (
            <motion.div key={i} style={statCardStyle}>
              <div style={statNumberStyle}>{stat.number}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study */}
        <motion.div style={caseStudyStyle}>
          <motion.h2 style={caseStudyTitleStyle}>
            Case Study: Dara Engineering — End-to-End Manufacturing
          </motion.h2>

          <h3 style={caseStudySubtitleStyle}>Industry</h3>
          <p style={caseStudyTextStyle}>Precision Engineering & Manufacturing</p>

          <h3 style={caseStudySubtitleStyle}>Challenges</h3>
          <ul style={benefitsListStyle}>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Meeting strict tolerances, minimizing rework in fabrication processes.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Managing inventory, raw materials, and supplier lead times.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Scheduling preventive maintenance and reducing unexpected downtime.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Accurate costing per job including overheads, labor, materials, and wastage.</li>
          </ul>

          <h3 style={caseStudySubtitleStyle}>Our Solution: PMS (Project Management System)</h3>
          <p style={caseStudyTextStyle}>
            Dara Engineering adopted Delta Infosoft’s <strong>PMS</strong> to integrate production scheduling, quality tracking, and maintenance workflows into a centralized platform — delivering improved visibility and control across the shop floor.
          </p>

          <h3 style={caseStudySubtitleStyle}>Key Modules Deployed</h3>
          <ul style={benefitsListStyle}>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Production & job scheduling.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Quality inspection & defect tracking.</li>
            <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Inventory & materials traceability.</li>
          </ul>

          <h3 style={caseStudySubtitleStyle}>Impact & Results</h3>
          <div style={caseStudyGridStyle}>
            <motion.div style={caseStudyCardStyle}><div style={caseStudyCardValueStyle}>30%</div><div style={caseStudyCardTitleStyle}>Reduced Downtime</div><div style={caseStudyCardLabelStyle}>Maintenance & planning</div></motion.div>
            <motion.div style={caseStudyCardStyle}><div style={caseStudyCardValueStyle}>25%</div><div style={caseStudyCardTitleStyle}>Material Cost Savings</div><div style={caseStudyCardLabelStyle}>Less wastage & better procurement</div></motion.div>
            <motion.div style={caseStudyCardStyle}><div style={caseStudyCardValueStyle}>20%</div><div style={caseStudyCardTitleStyle}>Increased Throughput</div><div style={caseStudyCardLabelStyle}>Optimized production schedule</div></motion.div>
          </div>
        </motion.div>

        {/* Clients Logos */}
        <motion.h2 style={clientsTitleStyle}>Trusted by Engineering & Manufacturing Leaders</motion.h2>
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
      <Footer />
    </div>
  );
};

export default EngineeringPMS;
