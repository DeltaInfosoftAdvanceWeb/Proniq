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

const contactGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  marginTop: '1.5rem',
};

const contactCardStyle = {
  background: 'rgba(0, 115, 177, 0.05)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid rgba(0, 115, 177, 0.1)',
  textAlign: 'left',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
};

const contactTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const contactInfoStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: 1.6,
  marginBottom: '0.5rem',
};

const contactLinkStyle = {
  color: '#00c56b',
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'color 0.2s ease',
};

const formStyle = {
  background: 'rgba(0, 115, 177, 0.05)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid rgba(0, 115, 177, 0.1)',
  textAlign: 'left',
};

const formGroupStyle = {
  marginBottom: '1.5rem',
};

const labelStyle = {
  display: 'block',
  fontSize: '1rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '0.5rem',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid rgba(0, 115, 177, 0.2)',
  borderRadius: '8px',
  fontSize: '1rem',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box' as const,
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '120px',
  resize: 'vertical' as const,
};

const buttonStyle = {
  background: 'linear-gradient(135deg, #0073b1, #00c56b)',
  color: 'white',
  border: 'none',
  padding: '1rem 2rem',
  borderRadius: '8px',
  fontSize: '1.1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 4px 12px rgba(0, 115, 177, 0.2)',
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

const officeGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '1.5rem',
};

const officeCardStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '12px',
  padding: '2rem',
  border: '1px solid rgba(0, 115, 177, 0.1)',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const officeTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: 600,
  color: '#0073b1',
  marginBottom: '1rem',
};

const officeAddressStyle = {
  fontSize: '1rem',
  color: '#666',
  lineHeight: 1.6,
  marginBottom: '0.5rem',
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div style={containerStyle as React.CSSProperties}>
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
        style={cardStyle as React.CSSProperties}
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
          Contact Us
        </motion.h1>
        
        <motion.p 
          style={textStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get in touch with Delta Infosoft Pvt. Ltd. We're here to help you transform your business with our innovative ERP solutions. 
          Whether you have questions about our Proniq platform or want to discuss your specific requirements, our team is ready to assist you.
        </motion.p>

        {/* Statistics Section */}
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Why Choose Delta Infosoft
        </motion.h2>

        <motion.div 
          style={statsContainerStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.div 
            style={statCardStyle as React.CSSProperties}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>13+</div>
            <div style={statLabelStyle}>Years Experience</div>
          </motion.div>
          <motion.div 
            style={statCardStyle as React.CSSProperties}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>100+</div>
            <div style={statLabelStyle}>Happy Clients</div>
          </motion.div>
          <motion.div 
            style={statCardStyle as React.CSSProperties}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>24/7</div>
            <div style={statLabelStyle}>Support Available</div>
          </motion.div>
          <motion.div 
            style={statCardStyle as React.CSSProperties}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div style={statNumberStyle}>98%</div>
            <div style={statLabelStyle}>Client Satisfaction</div>
          </motion.div>
        </motion.div>

        {/* Contact Information Section */}
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          style={contactGridStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.div 
            style={contactCardStyle as React.CSSProperties}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 16px rgba(0, 115, 177, 0.15)',
              background: 'rgba(0, 115, 177, 0.08)'
            }}
          >
            <h3 style={contactTitleStyle}>
              📧 Email Us
            </h3>
            <p style={contactInfoStyle}>
              <strong>General Inquiries:</strong><br />
              <a href="mailto:info@deltainfosoft.com" style={contactLinkStyle}>
                info@deltainfosoft.com
              </a>
            </p>
            <p style={contactInfoStyle}>
              <strong>Sales & Business:</strong><br />
              <a href="mailto:sales@deltainfosoft.com" style={contactLinkStyle}>
                sales@deltainfosoft.com
              </a>
            </p>
            <p style={contactInfoStyle}>
              <strong>Technical Support:</strong><br />
              <a href="mailto:support@deltainfosoft.com" style={contactLinkStyle}>
                support@deltainfosoft.com
              </a>
            </p>
          </motion.div>

          <motion.div 
            style={contactCardStyle as React.CSSProperties}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 16px rgba(0, 115, 177, 0.15)',
              background: 'rgba(0, 115, 177, 0.08)'
            }}
          >
            <h3 style={contactTitleStyle}>
              📞 Call Us
            </h3>
            <p style={contactInfoStyle}>
              <strong>Main Office:</strong><br />
              <a href="tel:+91 79403 71010" style={contactLinkStyle}>
              +91 79403 71010
              </a>
            </p>
            <p style={contactInfoStyle}>
              <strong>Sales & Business:</strong><br />
              <a href="tel:+91 84012 81010" style={contactLinkStyle}>
              +91 84012 81010
              </a>
            </p>
            <p style={contactInfoStyle}>
              <strong>Technical Support:</strong><br />
              <a href="tel:+918401281010" style={contactLinkStyle}>
                +91 84012 81010
              </a>
            </p>
          </motion.div>

          <motion.div 
            style={contactCardStyle as React.CSSProperties}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 8px 16px rgba(0, 115, 177, 0.15)',
              background: 'rgba(0, 115, 177, 0.08)'
            }}
          >
            <h3 style={contactTitleStyle}>
              💬 Connect With Us
            </h3>
            <p style={contactInfoStyle}>
              <strong>LinkedIn:</strong><br />
              <a href="https://linkedin.com/company/delta-infosoft-pvt-ltd/" style={contactLinkStyle} target="_blank" rel="noopener noreferrer">
                Delta Infosoft Pvt. Ltd.
              </a>
            </p>
            <p style={contactInfoStyle}>
              <strong>Twitter/X:</strong><br />
              <a href="https://x.com/delta_infosoft" style={contactLinkStyle} target="_blank" rel="noopener noreferrer">
                @delta_infosoft
              </a>
            </p>
            <p style={contactInfoStyle}>
              <strong>Facebook:</strong><br />
              <a href="https://www.facebook.com/DeltaInfoSoft/" style={contactLinkStyle} target="_blank" rel="noopener noreferrer">
                Delta Infosoft
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Office Locations Section */}
        <motion.h2 
          style={sectionTitleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Our Office Locations
        </motion.h2>

        <motion.div 
          style={officeGridStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <motion.div 
            style={officeCardStyle as React.CSSProperties}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={officeTitleStyle}>Ahmedabad - Head Office</h3>
            <p style={officeAddressStyle}>
              Delta Infosoft Pvt. Ltd.<br />
              A-701, Safal Profitaire,<br />
              Opp. Ramada Hotel, Corporate Road, Satellite,<br />
              Ahmedabad, Gujarat - 380015<br />
              India
            </p>
          </motion.div>

          <motion.div 
            style={officeCardStyle as React.CSSProperties}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={officeTitleStyle}>Palanpur - Branch Office</h3>
            <p style={officeAddressStyle}>
              Delta Infosoft Pvt. Ltd.<br />
              206-Valkeshwar Complex, Cozy Road,<br />
              Behind Gitanjali Complex, <br />
              Palanpur, Gujarat - 385001<br />
              India
            </p>
          </motion.div>

          <motion.div 
            style={officeCardStyle as React.CSSProperties}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.9 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={officeTitleStyle}>Jaipur - Client Side Office</h3>
            <p style={officeAddressStyle}>
              Delta Infosoft Pvt. Ltd.<br />
              3rd Floor, Mahima Trinity Mall,<br />
              Swej Farm Rd, Radha Vihar, Shiva Colony,<br />
              Govindpuri, Jaipur, Rajasthan - 302019<br />
              India
            </p>
          </motion.div>
        </motion.div>

        {/* Business Hours */}
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
            Business Hours
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <strong style={{ color: '#0073b1' }}>Monday - Friday:</strong><br />
              <span style={{ color: '#666' }}>9:00 AM - 6:00 PM IST</span>
            </div>
            <div>
              <strong style={{ color: '#0073b1' }}>Saturday:</strong><br />
              <span style={{ color: '#666' }}>9:00 AM - 2:00 PM IST</span>
            </div>
            <div>
              <strong style={{ color: '#0073b1' }}>Sunday:</strong><br />
              <span style={{ color: '#666' }}>Closed</span>
            </div>
            <div>
              <strong style={{ color: '#0073b1' }}>Emergency Support:</strong><br />
              <span style={{ color: '#666' }}>24/7 for critical issues</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Contact;
