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

const clientsTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '1.5rem',
  marginTop: '2rem',
  textAlign: 'center' as const,
};

const clientsListStyle = {
  display: 'block',
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const clientItemStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  padding: '1rem 1.5rem',
  background: 'transparent',
  borderRadius: '12px',
  border: 'none',
  transition: 'all 0.3s ease',
};

const clientImageStyle = {
  width: 'auto',
  height: '60px',
  objectFit: 'contain',
  filter: 'grayscale(0%)',
  opacity: 0.95,
};

const clientInfoStyle = {
  display: 'none',
};

const clientNameStyle = {
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '0.25rem',
};

const clientDescStyle = {
  fontSize: '0.95rem',
  color: '#666',
  fontStyle: 'italic',
};

const clientStatsStyle = {
  display: 'none',
};

const clientStatStyle = {
  fontSize: '0.9rem',
  color: '#0073b1',
  fontWeight: 500,
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

const heroImageStyle = {
  width: '100%',
  maxWidth: '800px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '16px',
  margin: '2rem auto',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
};

const clients = [
  { 
    name: 'BuildRight Co.', 
    img: '/ContructionandERP.jpg',
    description: 'Leading construction and infrastructure development company',
    projects: '200+',
    teamSize: '150',
    location: 'Mumbai, India'
  },
  { 
    name: 'ConstructPro', 
    img: '/ContructionandERP.jpg',
    description: 'Specialized in commercial and residential construction',
    projects: '125',
    teamSize: '85',
    location: 'Delhi, India'
  },
  { 
    name: 'NextGen Builders', 
    img: '/ContructionandERP.jpg',
    description: 'Innovative construction with sustainable practices',
    projects: '89',
    teamSize: '65',
    location: 'Bangalore, India'
  },
  { 
    name: 'Metro Construction', 
    img: '/ContructionandERP.jpg',
    description: 'Metro rail and infrastructure specialists',
    projects: '45',
    teamSize: '120',
    location: 'Chennai, India'
  },
  { 
    name: 'Smart Builders', 
    img: '/ContructionandERP.jpg',
    description: 'Smart city and urban development projects',
    projects: '78',
    teamSize: '95',
    location: 'Pune, India'
  },
];

const features = [
  {
    title: 'Site Progress Tracking & DPRs',
    description: 'Real-time site progress monitoring with Daily Progress Reports, automated data collection, and comprehensive project tracking.',
    image: '/T6.png'
  },
  {
    title: 'Material Planning, GRN & Stock Management',
    description: 'Comprehensive material planning, Goods Receipt Notes, and real-time stock management at construction sites.',
    image: '/T7.png'
  },
  {
    title: 'Subcontractor Bills & RA Measurements',
    description: 'Automated subcontractor billing, Running Account measurements, and payment processing with approval workflows.',
    image: '/T8.png'
  },
  {
    title: 'Quality Checklists & Safety Management',
    description: 'Digital quality checklists, snag list management, and comprehensive safety monitoring with compliance tracking.',
    image: '/p1.png'
  },
  {
    title: 'Budget vs Actuals with Cost Codes',
    description: 'Real-time budget tracking, cost code management, and variance analysis with automated reporting.',
    image: '/p2.png'
  },
  {
    title: 'Asset, Tools & Maintenance Logs',
    description: 'Equipment and tool management, maintenance scheduling, and utilization tracking with predictive maintenance.',
    image: '/p3.png'
  }
];

const benefits = [
  'Reduce project completion time by 30%',
  'Improve site safety compliance by 75%',
  'Cut material wastage by 40%',
  'Increase equipment utilization by 50%',
  'Reduce cost overruns by 60%',
  'Streamline subcontractor management by 65%'
];

const Construction = () => {
  return (
    <div style={containerStyle}>
      <BackButton label="← Back Home" href="/" />
      {/* Background animated elements */}
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,197,107,0.2) 0%, rgba(0,115,177,0) 70%)',
          top: '-150px',
          right: '-150px',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,115,177,0.15) 0%, rgba(0,197,107,0) 70%)',
          bottom: '-100px',
          left: '5%',
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          top: '30%',
          left: '10%',
          zIndex: 0
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      <motion.div 
        style={cardStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        whileHover={{ 
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          y: -5
        }}
      >
        <motion.h1 
          style={titleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Construction Solutions by Delta Infosoft
        </motion.h1>
        
        <motion.p 
          style={textStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Delta Infosoft Pvt. Ltd. delivers comprehensive ERP-based project management solutions specifically designed for construction companies. 
          Our Proniq platform streamlines every aspect of construction project delivery, from site planning to final handover, 
          helping construction firms work smarter and stay unique in today's competitive market.
        </motion.p>

        {/* Hero Image */}
        <motion.img
          src="/construction.jpeg"
          alt="Construction Project Management"
          style={heroImageStyle}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        />

        {/* Statistics Section */}
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Delta Infosoft Impact
        </motion.h2>

        <motion.div 
          style={statsContainerStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>13+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </motion.div>
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>30+</div>
            <div style={statLabelStyle}>Construction Projects</div>
          </motion.div>
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>98%</div>
            <div style={statLabelStyle}>Client Satisfaction</div>
          </motion.div>
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>10+</div>
            <div style={statLabelStyle}>Construction Clients</div>
          </motion.div>
        </motion.div>

        {/* Case Study Section */}
        <motion.div 
          style={caseStudyStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.h2 
            style={caseStudyTitleStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Case Study: GA Infra — Construction & Contracting
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 style={caseStudySubtitleStyle}>Industry</h3>
            <p style={caseStudyTextStyle}>Construction & Contracting</p>

            <h3 style={caseStudySubtitleStyle}>Challenges</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Handling complex tendering & bidding processes with EMD tracking.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Difficulty in stage-wise payment approvals and monitoring sub-contractor work.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Manual BOQ planning led to procurement delays and cost overruns.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Inefficient RA bill processing slowed down client billing cycles.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Lack of integration between site activity, accounts, and project management.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Employee-related processes like payroll, attendance, and F&F were disconnected from project execution.</li>
            </ul>

            <h3 style={caseStudySubtitleStyle}>Our Solution: Delta iERP for Construction & Contracting</h3>
            <p style={caseStudyTextStyle}>
              GA Infra implemented Delta iERP — a specialized ERP system built for contract-based projects.
            </p>

            <h3 style={caseStudySubtitleStyle}>Key Modules Deployed</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Tendering & Bidding</strong>: Centralized tender management with EMD tracking.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>BOQ Planning → Procurement</strong>: Streamlined procurement cycle linked with project budgets.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Work Order Processing</strong>: Stage-wise approvals for site execution and subcontractors.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>RA Bills & Payment Management</strong>: Automated client billing and stage-wise payment reconciliation.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Subcontract Management</strong>: Transparent tracking of subcontractor performance and payments.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Accounts & Finance Integration</strong>: Unified financial & project accounting for real-time cost visibility.</li>
            </ul>

            <h3 style={caseStudySubtitleStyle}>HR & Employee Modules</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Interview to Joining Process automation.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Payroll & Attendance integrated with project teams.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Salary, Reports & Statutory Compliance automated.</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> Full & Final Settlement workflows digitized.</li>
            </ul>

            <h3 style={caseStudySubtitleStyle}>Results & Impact</h3>
            <div style={caseStudyGridStyle}>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>30%</div>
                <div style={caseStudyCardTitleStyle}>Faster Tender Approvals</div>
                <div style={caseStudyCardLabelStyle}>Digital workflows</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>25%</div>
                <div style={caseStudyCardTitleStyle}>Procurement Cost Savings</div>
                <div style={caseStudyCardLabelStyle}>BOQ → procurement link</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>98%</div>
                <div style={caseStudyCardTitleStyle}>Accuracy in RA Bills</div>
                <div style={caseStudyCardLabelStyle}>Stage-wise calculation</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>Real-time</div>
                <div style={caseStudyCardTitleStyle}>Financial Visibility</div>
                <div style={caseStudyCardLabelStyle}>Unified finance + project data</div>
              </motion.div>
            </div>

            <p style={caseStudyTextStyle}>
              <strong>“Delta iERP has transformed the way we manage our projects. From tendering to RA bills, everything is transparent, faster, and easier to track. Our teams save time, and management gets real-time visibility into costs and progress.”</strong> — GA Infra, Project Director
            </p>

            <h3 style={caseStudySubtitleStyle}>Case Study Summary</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Client</strong>: GA Infra</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Industry</strong>: Construction & Contracting</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>ERP Used</strong>: Delta iERP</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Focus Areas</strong>: Tendering, BOQ Procurement, Subcontracting, RA Bills, Project Accounting, HRMS</li>
              <li style={benefitItemStyle}><span style={checkIconStyle}>✓</span> <strong>Business Impact</strong>: Faster approvals, reduced costs, higher accuracy, better compliance</li>
            </ul>
          </motion.div>
        </motion.div>

       

        {/* Benefits Section */}
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          Proven Benefits with Delta Infosoft
        </motion.h2>

        <motion.ul 
          style={benefitsListStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {benefits.map((benefit, index) => (
            <motion.li 
              key={benefit}
              style={benefitItemStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
            >
              <span style={checkIconStyle}>✓</span>
              {benefit}
            </motion.li>
          ))}
        </motion.ul>

        {/* Clients Section */}
        <motion.h2 
          style={clientsTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          Trusted by Leading Indian Companies
        </motion.h2>

        {/* Logos Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
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

        {/* Company Info */}
        <motion.div
          style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'rgba(0, 115, 177, 0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 115, 177, 0.1)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          <h3 style={{ color: '#0073b1', marginBottom: '1rem', fontSize: '1.3rem' }}>
            About Delta Infosoft Pvt. Ltd.
          </h3>
          <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>
            Delta Infosoft is a leading software development company specializing in ERP solutions for project-based industries. 
            Our Proniq platform is designed to help construction companies manage their projects efficiently with smart workflows, 
            real-time tracking, and comprehensive reporting capabilities. We believe in "Work Smart. Stay Unique." - helping our 
            clients achieve more with intelligent project management solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Construction;