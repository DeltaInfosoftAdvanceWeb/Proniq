import React from 'react';

const footerStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.18)',
  color: '#185a9d',
  textAlign: 'center',
  padding: '1.2rem 0',
  fontSize: '1rem',
  fontWeight: 500,
  position: 'fixed',
  left: 0,
  bottom: 0,
  zIndex: 100,
  letterSpacing: '0.5px',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 2px 16px rgba(24,90,157,0.12)',
  borderTop: '1px solid rgba(24,90,157,0.12)',
};

const Footer: React.FC = () => (
  <footer style={footerStyle}>
    © {new Date().getFullYear()} Proniq. All rights reserved.
    Work Smart. Stay Unique.
  </footer>
);

export default Footer;