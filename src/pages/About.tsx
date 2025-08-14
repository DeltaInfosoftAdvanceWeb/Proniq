import React from 'react';
import Footer from '../components/Footer';
import { useRive } from '@rive-app/react-canvas';
import { motion } from 'framer-motion';

const containerStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0073b1 0%, #00c56b 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 1rem 3rem 1rem',
  position: 'relative',
  overflow: 'hidden',
};

const cardStyle: React.CSSProperties = {
  background: 'rgb(255, 255, 255)',
  borderRadius: '16px',
  border: '1px solid rgba(234, 234, 234, 0.3)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
  maxWidth: 720,
  padding: '3rem 2.5rem',
  textAlign: 'center',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 1,
};

const logoStyle: React.CSSProperties = {
  width: 240,
  height: 240,
  margin: '0 auto 2rem auto',
  marginBottom: '1.8rem',
  transition: 'all 0.5s ease',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 700,
  background: 'linear-gradient(90deg, #0073b1, #00c56b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '1.2rem',
};

const textStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  color: '#444',
  marginBottom: '1.8rem',
  lineHeight: 1.75,
};

const taglineStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #0073b1, #00c56b)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontSize: '1.25rem',
  marginTop: '1rem',
};

const About: React.FC = () => {
  // Load the Rive animation
  const { RiveComponent } = useRive({
    src: '/logo.riv',         // Path to your .riv file in public folder
    autoplay: true,
    stateMachines: ['State Machine 1'], // Or animations: ['AnimationName']
  });

  return (
    <div style={containerStyle}>
      {/* Background animated elements */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,197,107,0.2) 0%, rgba(0,115,177,0) 70%)',
          top: '-100px',
          right: '-100px',
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
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,115,177,0.15) 0%, rgba(0,197,107,0) 70%)',
          bottom: '-50px',
          left: '10%',
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
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          top: '30%',
          left: '5%',
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
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
          bottom: '20%',
          right: '15%',
          zIndex: 0
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2
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
        {/* Render the Rive animation instead of an image */}
        <motion.div 
          style={logoStyle}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RiveComponent style={{ width: '100%', height: '100%' }} />
        </motion.div>

        <motion.h1 
          style={titleStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          About proniq
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.p 
            style={textStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              staggerChildren: 0.1
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: 'inline-block' }}
            >
              <strong style={{ color: '#0073b1' }}>proniq</strong> is a smart project management showcase platform developed by <strong style={{ color: '#00c56b' }}>Delta Infosoft Pvt. Ltd.</strong>.
              It visually demonstrates how modern workflows — from planning to billing — are efficiently handled through our ERP-based project modules.
            </motion.span>
            <br /><br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: 'inline-block' }}
            >
              Each screen on this platform represents a real-world execution stage, making it easy for users to understand how projects are tracked,
              approved, and delivered — site-wise, task-wise, and team-wise.
            </motion.span>
            <br /><br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{ display: 'inline-block' }}
            >
              Whether you're exploring project visibility, workflow automation, or site reporting, Proniq helps you grasp it all — beautifully and clearly.
            </motion.span>
          </motion.p>
        </motion.div>
        
        <motion.p 
          style={taglineStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{ 
            scale: 1.05,
            textShadow: '0 0 8px rgba(0, 197, 107, 0.3)'
          }}
        >
          Work Smart. Stay Unique.
        </motion.p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
