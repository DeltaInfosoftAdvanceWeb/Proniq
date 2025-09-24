"use client";
import React, { useState, CSSProperties } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';


const navbarStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.8rem 2rem',
  background: '#fff',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 20px rgba(31, 38, 135, 0.1)',
  zIndex: 1000,
};

const logoStyle: CSSProperties = {
  fontSize: '1.7rem',
  fontWeight: 800,
  color: '#fff',
  textDecoration: 'none',
  letterSpacing: '0.04em',
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
};

const navLinksStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  transition: 'all 0.3s',
};

const navLinkStyle = (isActive: boolean): CSSProperties => ({
  color: isActive ? '#00c56b' : '#00c53b97',
  textDecoration: 'none',
  fontWeight: isActive ? 700 : 500,
  padding: '0.5rem 1.2rem',
  borderRadius: '20px',
  transition: 'all 0.2s ease',
  background: isActive ? 'rgba(255,255,255,0.18)' : 'transparent',
  border: isActive ? '2px solid #00c56b' : '2px solid transparent',
  boxShadow: isActive ? '0 2px 8px #00c56b33' : 'none',
  letterSpacing: '0.02em',
  fontSize: '1.05rem',  
  
});

const hamburgerStyle: CSSProperties = {
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  outline: 'none',
  zIndex: 1100,
};

const barStyle: CSSProperties = {
  width: 28,
  height: 4,
  background: '#00c56b',
  margin: '4px 0',
  borderRadius: 2,
  transition: 'all 0.3s',
};

const mobileNavStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(255, 255, 255, 0.92)',
  boxShadow: '0 4px 20px rgba(31, 38, 135, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  zIndex: 2000,
  padding: 0,
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/project', label: 'Project' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 700px) {
            .navbar-links {
              display: none !important;
            }
            .navbar-hamburger {
              display: flex !important;
            }
          }
        `}
      </style>
      <nav style={navbarStyle}>
        <Link href="/" style={logoStyle}>
          <img
            src="/pro-niq.png"
            alt="Proniq Logo"
            style={{ height: '7rem', marginRight: '0.5rem', verticalAlign: 'middle', borderRadius: '8px' }}
          />
          Proniq
        </Link>
        <ul className="navbar-links" style={navLinksStyle}>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                style={navLinkStyle(pathname === item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="navbar-hamburger"
          style={hamburgerStyle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <div style={{ ...barStyle, transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }} />
          <div style={{ ...barStyle, opacity: menuOpen ? 0 : 1 }} />
          <div style={{ ...barStyle, transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none' }} />
        </button>
      </nav>
      {menuOpen && (
        <div style={mobileNavStyle}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={navLinkStyle(pathname === item.path)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;