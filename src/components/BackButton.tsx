import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type BackButtonProps = {
  to?: string;
  label?: string;
};

const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  top: 130, // below the fixed navbar
 left: 230,
  zIndex: 1050,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 12px',
  borderRadius: 10,
  background: 'rgba(255,255,255,0.9)',
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
  color: '#0073b1',
  textDecoration: 'none',
  fontWeight: 700,
  transition: 'opacity 0.3s ease',
};

const BackButton: React.FC<BackButtonProps> = ({ to = '/', label = '← Back Home' }) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      const next = Math.max(0.35, 1 - y / 400); // fade to 35% by ~400px
      
      setScrollOpacity(next);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const computedOpacity = isHovered ? 1 : scrollOpacity;

  return (
    <Link
      to={to}
      style={{ ...buttonStyle, opacity: computedOpacity }}
      aria-label="Go back to home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </Link>
  );
};

export default BackButton;


