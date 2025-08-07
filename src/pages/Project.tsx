import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import Footer from '../components/Footer';

interface Screen {
  title: string;
  description: string;
  image: string;
}

const screens: Screen[] = [
  { title: 'Tender Kanban View', description: 'Tenders organized as cards under stages like Submitted, Approved, Rejected.', image: '/1.png' },
  { title: 'Module Management', description: 'Access and manage all active modules like iERP, Project, MyTime, Asset, Timesheet, Tendering, and more from a centralized dashboard.', image: '/2.png' },
  { title: 'Project Planning', description: 'Visualize and schedule project activities using a Gantt-style chart organized by stages, phases, and timelines.', image: '/3.png' },
  { title: 'BOQ Uploads', description: 'Upload and track Bill of Quantities (BOQ) for each project with visibility into Drawing & QAP and Material status.', image: '/4.png' },
  { title: 'Drawing & QAP Dashboard', description: 'Status of drawing and QAP by design team and vendors with upload cards.', image: '/5.png' },
  { title: 'Final BOQ Uploads', description: 'Approve or review final BOQ entries submitted for projects, including quantities, work items, and remarks before locking.', image: '/6.png' },
  { title: 'Bill Of Quantities Details', description: 'Detailed view of BOQ items including descriptions, units, quantities, rates, and remarks for each work item.', image: '/7.png' },
  { title: 'BILL Details/Items', description: 'Review and manage detailed bill items including completion percentage, executed quantities, approved values, and remarks.', image: '/8.png' },
  { title: 'Tender Management Table', description: 'Access and manage all active modules like iERP, Project, MyTime, Asset, Timesheet, and Tendering from a unified interface.', image: '/9.png' },
  { title: 'Project Overview', description: 'Track overall project progress with grouped stages, activity timelines, and visual indicators for each work phase.', image: '/12.png' },
  { title: 'Type Of Work Overview', description: 'Overview of various work types across multiple tenders or projects with progress bars, assigned teams, and stage-wise tracking.', image: '/13.png' },
  { title: 'Step of Work Overview', description: 'Detailed breakdown of each step involved in the execution of work items across various projects with visual stage indicators.', image: '/14.png' },
  { title: 'Project Planning (Detailed View)', description: 'Zoomed-in project planning screen showing granular task timelines, team assignments, or execution progress by phase.', image: '/15.png' },
  { title: 'Site Wise Status', description: 'Monitor work progress, tasks, and approvals site-wise across different projects with categorized visual indicators and filters.', image: '/16.png' },
  { title: 'Daily Progress Report', description: 'Daily site-level reporting of completed tasks, quantities, remarks, and resource utilization for ongoing project activities.', image: '/17.png' },
  { title: 'RA Bill Generation', description: 'Generate Running Account (RA) bills with itemized entries, measurement details, billing stages, and editable values for approval.', image: '/18.png' },
  { title: 'Drawing and QAP Report', description: 'Track the status of Drawing and Quality Assurance Plan submissions across internal teams and vendors with detailed filtering options.', image: '/19.png' },
  { title: 'User Activity Dashboard', description: 'Monitor individual and team-level task activities including assigned, pending, completed, and overdue tasks using visual progress indicators.', image: '/20.png' },
];

const Project: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f4f7fb',
    position: 'relative',
    paddingBottom: '70px',
  };

  const mainContentStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  };

  const screenImageStyle: CSSProperties = {
    maxWidth: '90vw',
    maxHeight: '60vh',
    borderRadius: '18px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
    background: '#fff',
    objectFit: 'contain',
    display: 'block',
    margin: '0 auto',
  };

  const sidebarStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    minWidth: 180,
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.25)',
    boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.10)',
    overflowY: 'auto',
    padding: '1rem 0.5rem',
  };

  const previewStyle = (isSelected: boolean): CSSProperties => ({
    width: 150,
    height: 60,
    borderRadius: '12px',
    border: isSelected ? '3px solid #00c56b' : '2px solid #d5e9e2',
    boxShadow: isSelected ? '0 2px 8px #00c56b33' : 'none',
    objectFit: 'cover',
    cursor: isSelected ? 'default' : 'pointer',
    opacity: isSelected ? 1 : 0.7,
    background: '#fff',
    transition: 'all 0.2s',
    display: 'block',
  });

  return (
    <div style={containerStyle}>
      <div style={mainContentStyle}>
        <img
          src={screens[selected].image}
          alt={screens[selected].title}
          style={screenImageStyle}
        />
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e3c72', margin: 0, textAlign: 'center' }}>
          {screens[selected].title}
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#2a5298', margin: 0, textAlign: 'center', maxWidth: 600 }}>
          {screens[selected].description}
        </p>
      </div>
      <div style={sidebarStyle}>
        {screens.map((screen, idx) => (
          <div
            key={idx}
            style={{ position: 'relative', width: 150, height: 60 }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={screen.image}
              alt={screen.title}
              style={previewStyle(selected === idx)}
              onClick={() => selected !== idx && setSelected(idx)}
            />
            {hovered === idx && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #0073b1 0%, #00c56b 100%)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  zIndex: 2,
                  pointerEvents: 'none',
                  textAlign: 'center',
                  padding: '0.5rem',
                }}
              >
                {screen.title}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Project;
