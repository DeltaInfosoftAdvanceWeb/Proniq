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
    name: 'UrbanDesign Studio', 
    img: '/Archi.jpg',
    description: 'Leading urban planning and architectural design firm',
    projects: '150+',
    teamSize: '45',
    location: 'Mumbai, India'
  },
  { 
    name: 'Skyline Architects', 
    img: '/Archi.jpg',
    description: 'Specialized in high-rise commercial buildings',
    projects: '89',
    teamSize: '32',
    location: 'Delhi, India'
  },
  { 
    name: 'EcoBuild', 
    img: '/Archi.jpg',
    description: 'Sustainable architecture and green building experts',
    projects: '67',
    teamSize: '28',
    location: 'Bangalore, India'
  },
  { 
    name: 'Heritage Architects', 
    img: '/Archi.jpg',
    description: 'Historic preservation and restoration specialists',
    projects: '234',
    teamSize: '18',
    location: 'Chennai, India'
  },
  { 
    name: 'Modern Spaces', 
    img: '/Archi.jpg',
    description: 'Contemporary residential and mixed-use projects',
    projects: '112',
    teamSize: '25',
    location: 'Pune, India'
  },
];

const features = [
  {
    title: 'Project Planning with Gantt & Milestones',
    description: 'Advanced project scheduling with visual Gantt charts, milestone tracking, and automated timeline management for architectural projects.',
    image: '/Project.png'
  },
  {
    title: 'BOQ, RFQ & Vendor Comparison',
    description: 'Comprehensive Bill of Quantities management, Request for Quotation processing, and automated vendor comparison tools.',
    image: '/T1.png'
  },
  {
    title: 'Drawing & QAP Version Control',
    description: 'Centralized drawing management with version control, Quality Assurance Protocol tracking, and collaborative markup tools.',
    image: '/T2.png'
  },
  {
    title: 'Client Approvals & Change Orders',
    description: 'Streamlined client approval workflows, automated change order processing, and digital signature integration.',
    image: '/T3.png'
  },
  {
    title: 'Resource Scheduling & Timesheets',
    description: 'Team resource allocation, automated timesheet tracking, and capacity planning with utilization analytics.',
    image: '/T4.png'
  },
  {
    title: 'CRM → Estimate → Project → Invoice Workflow',
    description: 'End-to-end workflow from customer relationship management to project delivery and automated invoicing.',
    image: '/T5.png'
  }
];

const benefits = [
  'Reduce project delivery time by 35%',
  'Improve client satisfaction scores by 40%',
  'Cut administrative overhead by 50%',
  'Increase team productivity by 45%',
  'Reduce rework and errors by 60%',
  'Streamline approval processes by 70%'
];

const Architecture = () => {
  return (
    <div style={containerStyle}>
      <BackButton />
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
          Architecture Solutions by Delta Infosoft
        </motion.h1>
        
        <motion.p 
          style={textStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Delta Infosoft Pvt. Ltd. delivers comprehensive ERP-based project management solutions specifically designed for architecture firms. 
          Our Proniq platform streamlines every aspect of architectural project delivery, from initial client consultation to final project completion, 
          helping firms work smarter and stay unique in today's competitive market.
        </motion.p>

        {/* Hero Image */}
        <motion.img
          src="/Archi.jpg"
          alt="Architecture Project Management"
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
            <div style={statLabelStyle}>Projects Delivered</div>
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
            <div style={statLabelStyle}>Architecture Clients</div>
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
            Case Study: UrbanDesign Studio Transformation
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h3 style={caseStudySubtitleStyle}>The Challenge</h3>
            <p style={caseStudyTextStyle}>
              UrbanDesign Studio, a leading architecture firm in Mumbai with 45 team members, was struggling with project delays, 
              communication gaps, and inefficient resource allocation. They were managing 15+ concurrent projects manually, 
              leading to missed deadlines, budget overruns, and client dissatisfaction. Their existing systems couldn't handle 
              the complexity of modern architectural projects.
            </p>

            <h3 style={caseStudySubtitleStyle}>Delta Infosoft Solution</h3>
            <p style={caseStudyTextStyle}>
              Delta Infosoft implemented the Proniq platform with customized modules for architecture firms. The solution included 
              integrated project planning with Gantt charts, automated BOQ management, drawing version control, client portal, 
              and real-time reporting. The implementation was completed in 8 weeks with comprehensive training for all team members.
            </p>

            <h3 style={caseStudySubtitleStyle}>Results Achieved</h3>
            <div style={caseStudyGridStyle}>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>40%</div>
                <div style={caseStudyCardTitleStyle}>Faster Project Delivery</div>
                <div style={caseStudyCardLabelStyle}>Reduced average project timeline</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>60%</div>
                <div style={caseStudyCardTitleStyle}>Reduced Errors</div>
                <div style={caseStudyCardLabelStyle}>Fewer rework cycles</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>85%</div>
                <div style={caseStudyCardTitleStyle}>Client Satisfaction</div>
                <div style={caseStudyCardLabelStyle}>Improved from 65%</div>
              </motion.div>
              <motion.div 
                style={caseStudyCardStyle}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div style={caseStudyCardValueStyle}>₹2.5Cr</div>
                <div style={caseStudyCardTitleStyle}>Cost Savings</div>
                <div style={caseStudyCardLabelStyle}>Annual operational savings</div>
              </motion.div>
            </div>

            <h3 style={caseStudySubtitleStyle}>Key Improvements</h3>
            <ul style={benefitsListStyle}>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Automated project scheduling reduced planning time by 70%
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Real-time client portal improved communication efficiency by 80%
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Integrated drawing management eliminated version conflicts
              </li>
              <li style={benefitItemStyle}>
                <span style={checkIconStyle}>✓</span>
                Automated billing reduced payment delays by 50%
              </li>
            </ul>

            <p style={caseStudyTextStyle}>
              <strong>"Delta Infosoft's Proniq platform transformed how we manage projects. The automated workflows and real-time 
              collaboration features have made us more efficient and our clients happier. We've seen a significant improvement 
              in project delivery times and client satisfaction."</strong> - Rajesh Kumar, Managing Director, UrbanDesign Studio
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
          What We Deliver for Architecture Firms
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
          Trusted by Leading Indian Architecture Firms
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
            Our Proniq platform is designed to help architecture firms manage their projects efficiently with smart workflows, 
            real-time tracking, and comprehensive reporting capabilities. We believe in "Work Smart. Stay Unique." - helping our 
            clients achieve more with intelligent project management solutions.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Architecture;