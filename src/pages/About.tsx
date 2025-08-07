import React from 'react';
import Footer from '../components/Footer';

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0d7bcf 0%, #00c56b 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 1rem 5rem 1rem',
};

const cardStyle: React.CSSProperties = {
  background: '#ffffffee',
  borderRadius: '24px',
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
  maxWidth: 720,
  padding: '3rem 2.5rem',
  textAlign: 'center',
  backdropFilter: 'blur(12px)',
};

const logoStyle: React.CSSProperties = {
  width: 120,
  marginBottom: '1.8rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 900,
  color: '#0d7bcf',
  marginBottom: '1.2rem',
};

const textStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  color: '#333',
  marginBottom: '1.8rem',
  lineHeight: 1.75,
};

const taglineStyle: React.CSSProperties = {
  color: '#00c56b',
  fontWeight: 700,
  fontSize: '1.25rem',
  marginTop: '1rem',
};

const About: React.FC = () => (
  <div style={containerStyle}>
    <div style={cardStyle}>
      <img src="/proniq.png" alt="Proniq Logo" style={logoStyle} />
      <h1 style={titleStyle}>About Proniq</h1>
      <p style={textStyle}>
        <strong>Proniq</strong> is a smart project management showcase platform developed by <strong>Delta Infosoft Pvt. Ltd.</strong>.
        It visually demonstrates how modern workflows — from planning to billing — are efficiently handled through our ERP-based project modules.
        <br /><br />
        Each screen on this platform represents a real-world execution stage, making it easy for users to understand how projects are tracked,
        approved, and delivered — site-wise, task-wise, and team-wise.
        <br /><br />
        Whether you're exploring project visibility, workflow automation, or site reporting, Proniq helps you grasp it all — beautifully and clearly.
      </p>
      <p style={taglineStyle}>Work Smart. Stay Unique.</p>
    </div>
    <Footer />
  </div>
);

export default About;
