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
          src="/ContructionandERP.jpg"
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
            Case Study: BuildRight Co. Digital Transformation
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 style={caseStudySubtitleStyle}>The Challenge</h3>
            <p style={caseStudyTextStyle}>
              BuildRight Co., a major construction company in Mumbai with 150 team members, was facing significant challenges with 
              project delays, material wastage, and inefficient site management. They were managing 25+ concurrent construction projects 
              with manual processes, leading to cost overruns, safety incidents, and client dissatisfaction. Their existing systems 
              couldn't handle the complexity of modern construction projects.
            </p>

            <h3 style={caseStudySubtitleStyle}>Delta Infosoft Solution</h3>
            <p style={caseStudyTextStyle}>
              Delta Infosoft implemented the Proniq platform with specialized construction modules. The solution included 
              real-time site progress tracking, automated material management, subcontractor billing, quality control systems, 
              and comprehensive safety monitoring. The implementation was completed in 10 weeks with extensive training for all site teams.
            </p>

            <h3 style={caseStudySubtitleStyle}>Results Achieved</h3>
            <div style={caseStudyGridStyle}>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>30%</div>
                <div style={caseStudyCardTitleStyle}>Faster Completion</div>
                <div style={caseStudyCardLabelStyle}>Reduced project timelines</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>40%</div>
                <div style={caseStudyCardTitleStyle}>Less Material Waste</div>
                <div style={caseStudyCardLabelStyle}>Improved efficiency</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>75%</div>
                <div style={caseStudyCardTitleStyle}>Safety Improvement</div>
                <div style={caseStudyCardLabelStyle}>Reduced incidents</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>₹5.2Cr</div>
                <div style={caseStudyCardTitleStyle}>Cost Savings</div>
                <div style={caseStudyCardLabelStyle}>Annual operational savings</div>
              </motion.div>
            </div>

            <h3 style={caseStudySubtitleStyle}>Key Improvements</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Real-time site monitoring reduced delays by 45%
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Automated material tracking eliminated wastage
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Digital quality checks improved compliance by 80%
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Subcontractor management streamlined by 65%
              </li>
            </ul>

            <p style={caseStudyTextStyle}>
              <strong>"Delta Infosoft's Proniq platform revolutionized our construction operations. The real-time site tracking and 
              automated material management have made us more efficient and safer. We've seen significant improvements in project 
              delivery times and cost control."</strong> - Amit Patel, CEO, BuildRight Co.
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
          What We Deliver for Construction Companies
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
          Trusted by Leading Indian Construction Companies
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
            Our Proniq platform is designed to help construction companies manage their projects efficiently with smart workflows, 
            real-time tracking, and comprehensive reporting capabilities. We believe in "Work Smart. Stay Unique." - helping our 
            clients achieve more with intelligent project management solutions.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
  </div>
);
};

export default Construction;