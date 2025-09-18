'use client';
import React from 'react';
import Link from 'next/link';

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

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  padding: '1rem 0',
  background: 'rgba(255,255,255,0.95)',
  boxShadow: '0 2px 8px rgba(24,90,157,0.08)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 200,
};

const linkStyle: React.CSSProperties = {
  color: '#0073b1',
  fontWeight: 700,
  textDecoration: 'none',
  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  transition: 'background 0.2s',
};

const Footer: React.FC = () => (
  <footer style={footerStyle}>
    © {new Date().getFullYear()} proniq. All rights reserved.
    Work Smart. Stay Unique.
  </footer>
);

const Navbar: React.FC = () => (
  <nav style={navStyle}>
    <Link href="/" style={linkStyle}>Home</Link>
    <Link href="/about" style={linkStyle}>About</Link>
    <Link href="/project" style={linkStyle}>Project</Link>
    <Link href="/contact" style={linkStyle}>Contact</Link>
  </nav>
);

export default function SomePage() {
  return (
    <div>
      <Navbar />
      {/* ...rest of your page... */}
      <Footer />
    </div>
  );
}