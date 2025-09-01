import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

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
};

const clientsListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '1.5rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const clientItemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.5rem',
  padding: '2rem',
  background: 'rgba(0, 115, 177, 0.05)',
  borderRadius: '12px',
  border: '1px solid rgba(0, 115, 177, 0.1)',
  transition: 'all 0.3s ease',
};

const clientImageStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '12px',
  objectFit: 'cover',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const clientInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: 1,
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '0.25rem',
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
    name: 'MegaSteel Corp', 
    img: '/HeavyEngineering.jpg',
    description: 'Leading steel manufacturing and fabrication company',
    projects: '180+',
    teamSize: '200',
    location: 'Mumbai, India'
  },
  { 
    name: 'Titan Machinery', 
    img: '/HeavyEngineering.jpg',
    description: 'Heavy machinery and equipment manufacturing',
    projects: '95',
    teamSize: '150',
    location: 'Pune, India'
  },
  { 
    name: 'IronWorks Ltd', 
    img: '/HeavyEngineering.jpg',
    description: 'Specialized iron and steel fabrication',
    projects: '120',
    teamSize: '85',
    location: 'Chennai, India'
  },
  { 
    name: 'Precision Engineering', 
    img: '/HeavyEngineering.jpg',
    description: 'High-precision engineering and manufacturing',
    projects: '75',
    teamSize: '120',
    location: 'Bangalore, India'
  },
  { 
    name: 'Heavy Metal Works', 
    img: '/HeavyEngineering.jpg',
    description: 'Heavy metal fabrication and structural steel',
    projects: '110',
    teamSize: '95',
    location: 'Delhi, India'
  },
];

const features = [
  {
    title: 'Make-to-Order BOM & Routing',
    description: 'Comprehensive Bill of Materials management with detailed routing, work instructions, and production planning for custom manufacturing.',
    image: '/p4.png'
  },
  {
    title: 'Production Planning & Work Orders',
    description: 'Advanced production scheduling, work order management, and capacity planning with real-time machine utilization tracking.',
    image: '/p5.png'
  },
  {
    title: 'Heat/Lot Traceability & QA',
    description: 'Complete traceability for heat numbers, lot tracking, and quality assurance with automated testing and compliance reporting.',
    image: '/p6.png'
  },
  {
    title: 'Machine Utilization & Downtime',
    description: 'Real-time machine monitoring, utilization analytics, and predictive maintenance to minimize downtime and optimize productivity.',
    image: '/p7.png'
  },
  {
    title: 'Dispatch Planning with E-way Docs',
    description: 'Automated dispatch planning, e-way bill generation, and logistics management with real-time shipment tracking.',
    image: '/p8.png'
  },
  {
    title: 'After-Sales Service & Warranty',
    description: 'Comprehensive service management, warranty tracking, and customer support with automated service scheduling.',
    image: '/p9.png'
  }
];

const benefits = [
  'Increase production efficiency by 45%',
  'Reduce machine downtime by 60%',
  'Improve quality compliance by 80%',
  'Cut manufacturing costs by 35%',
  'Enhance traceability by 90%',
  'Streamline dispatch operations by 70%'
];

const HeavyEngineering = () => {
  return (
    <div style={containerStyle}>
      <BackButton label="← Back Home" />
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
          Heavy Engineering Solutions by Delta Infosoft
        </motion.h1>
        
        <motion.p 
          style={textStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Delta Infosoft Pvt. Ltd. delivers comprehensive ERP-based manufacturing solutions specifically designed for heavy engineering companies. 
          Our Proniq platform streamlines every aspect of manufacturing operations, from production planning to after-sales service, 
          helping heavy engineering firms work smarter and stay unique in today's competitive market.
        </motion.p>

        {/* Hero Image */}
        <motion.img
          src="/HeavyEngineering.jpg"
          alt="Heavy Engineering Manufacturing"
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
            <div style={statNumberStyle}>15+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </motion.div>
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>600+</div>
            <div style={statLabelStyle}>Manufacturing Projects</div>
          </motion.div>
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>96%</div>
            <div style={statLabelStyle}>Client Satisfaction</div>
          </motion.div>
          <motion.div 
            style={statCardStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>40+</div>
            <div style={statLabelStyle}>Engineering Clients</div>
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
            Case Study: MegaSteel Corp Manufacturing Excellence
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 style={caseStudySubtitleStyle}>The Challenge</h3>
            <p style={caseStudyTextStyle}>
              MegaSteel Corp, a leading steel manufacturing company in Mumbai with 200 team members, was struggling with production inefficiencies, 
              quality control issues, and poor traceability. They were managing complex manufacturing processes with manual systems, 
              leading to production delays, quality defects, and customer complaints. Their existing systems couldn't handle the complexity 
              of modern heavy engineering manufacturing.
            </p>

            <h3 style={caseStudySubtitleStyle}>Delta Infosoft Solution</h3>
            <p style={caseStudyTextStyle}>
              Delta Infosoft implemented the Proniq platform with specialized manufacturing modules. The solution included 
              comprehensive BOM management, production planning, quality control systems, machine monitoring, and traceability features. 
              The implementation was completed in 12 weeks with extensive training for all manufacturing teams.
            </p>

            <h3 style={caseStudySubtitleStyle}>Results Achieved</h3>
            <div style={caseStudyGridStyle}>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>45%</div>
                <div style={caseStudyCardTitleStyle}>Production Efficiency</div>
                <div style={caseStudyCardLabelStyle}>Increased output</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>60%</div>
                <div style={caseStudyCardTitleStyle}>Reduced Downtime</div>
                <div style={caseStudyCardLabelStyle}>Machine optimization</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>80%</div>
                <div style={caseStudyCardTitleStyle}>Quality Improvement</div>
                <div style={caseStudyCardLabelStyle}>Defect reduction</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>₹4.8Cr</div>
                <div style={caseStudyCardTitleStyle}>Cost Savings</div>
                <div style={caseStudyCardLabelStyle}>Annual operational savings</div>
              </motion.div>
            </div>

            <h3 style={caseStudySubtitleStyle}>Key Improvements</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Automated BOM management reduced planning time by 70%
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Real-time machine monitoring improved utilization by 60%
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Complete traceability eliminated quality issues
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Automated dispatch planning reduced delivery delays by 50%
        </li>
            </ul>

            <p style={caseStudyTextStyle}>
              <strong>"Delta Infosoft's Proniq platform transformed our manufacturing operations. The automated production planning and 
              real-time monitoring have made us more efficient and quality-focused. We've seen significant improvements in production 
              output and customer satisfaction."</strong> - Vikram Singh, CEO, MegaSteel Corp
            </p>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          What We Deliver for Heavy Engineering Companies
        </motion.h2>

        <motion.div 
          style={featuresGridStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              style={featureCardStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 8px 16px rgba(0, 115, 177, 0.15)',
                background: 'rgba(0, 115, 177, 0.08)'
              }}
            >
              <motion.img 
                src={feature.image} 
                alt={feature.title}
                style={featureImageStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.description}</p>
            </motion.div>
          ))}
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
          Trusted by Leading Indian Heavy Engineering Companies
        </motion.h2>

        <motion.ul 
          style={clientsListStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {clients.length === 0 ? (
            <motion.li 
              style={clientItemStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              Loading...
            </motion.li>
          ) : (
            clients.map((client, index) => (
              <motion.li 
                key={client.name}
                style={clientItemStyle}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 8px 16px rgba(0, 115, 177, 0.15)',
                  background: 'rgba(0, 115, 177, 0.08)'
                }}
              >
                <motion.img 
                  src={client.img} 
                  alt={client.name} 
                  style={clientImageStyle}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <div style={clientInfoStyle}>
                  <span style={clientNameStyle}>{client.name}</span>
                  <span style={clientDescStyle}>{client.description}</span>
                </div>
                <div style={clientStatsStyle}>
                  <span style={clientStatStyle}>{client.projects} Projects</span>
                  <span style={clientStatStyle}>{client.teamSize} Team Members</span>
                  <span style={clientStatStyle}>{client.location}</span>
                </div>
              </motion.li>
            ))
          )}
        </motion.ul>

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
            Our Proniq platform is designed to help heavy engineering companies manage their manufacturing operations efficiently 
            with smart workflows, real-time tracking, and comprehensive reporting capabilities. We believe in "Work Smart. Stay Unique." 
            - helping our clients achieve more with intelligent manufacturing solutions.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
  </div>
);
};

export default HeavyEngineering;