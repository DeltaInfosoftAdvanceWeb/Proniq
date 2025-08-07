import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { CSSProperties } from 'react';

const navbarStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 4px 20px rgba(31, 38, 135, 0.1)',
  zIndex: 1000,
};

const logoStyle: CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#1e3c72',
  textDecoration: 'none',
  letterSpacing: '0.02em',
};

const navLinksStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const navLinkStyle = (isActive: boolean): CSSProperties => ({
  color: isActive ? '#185a9d' : '#2a5298',
  textDecoration: 'none',
  fontWeight: isActive ? 600 : 500,
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  background: isActive ? 'rgba(24, 90, 157, 0.1)' : 'transparent',
  border: isActive ? '1px solid rgba(24, 90, 157, 0.2)' : '1px solid transparent',
});

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/project', label: 'Project' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>
        <img
          src="/proniq.png"
          alt="Delta Projects Logo"
          style={{ height: '5rem', marginRight: '0.75rem', verticalAlign: 'middle' }}
        />
      </Link>
      <ul style={navLinksStyle}>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              style={navLinkStyle(location.pathname === item.path)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;