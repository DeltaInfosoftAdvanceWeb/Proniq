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

  const containerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    background: '#f4f7fb',
    padding: '2rem 1rem 2rem 1rem',
    gap: '1rem', // small gap between image & scroll strip
  };

  const imageStyle: CSSProperties = {
    width: 'min(100%, 1100px)',
    maxHeight: '65vh',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(31,38,135,0.18)',
    background: '#fff',
  };

  const titleStyle: CSSProperties = {
    fontSize: 'clamp(1.5rem, 1.2rem + 1vw, 2rem)',
    fontWeight: 800,
    color: '#1e3c72',
    textAlign: 'center',
    margin: 0,
  };

  const descStyle: CSSProperties = {
    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.15rem)',
    color: '#2a5298',
    textAlign: 'center',
    maxWidth: '62ch',
    margin: 0,
  };

  const scrollStrip: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.75rem',
    overflowX: 'auto',
    padding: '0.25rem 0',
    scrollbarWidth: 'thin',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    maxWidth: '100%',
  };

  const thumbStyle = (isSelected: boolean): CSSProperties => ({
    flex: '0 0 auto',
    width: 140,
    height: 78,
    borderRadius: '10px',
    border: isSelected ? '3px solid #00c56b' : '2px solid #d5e9e2',
    boxShadow: isSelected ? '0 2px 10px #00c56b33' : 'none',
    objectFit: 'cover',
    cursor: 'pointer',
    scrollSnapAlign: 'center',
    background: '#fff',
    position: 'relative',
  });

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: 1,
    transition: 'opacity 0.2s ease',
    marginBottom: '5px',
    zIndex: 10,
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div style={containerStyle}>
        <img
          src={screens[selected].image}
          alt={screens[selected].title}
          style={imageStyle}
        />
        <h1 style={titleStyle}>{screens[selected].title}</h1>
        <p style={descStyle}>{screens[selected].description}</p>

        {/* Scroll strip under the image */}
        <div style={scrollStrip}>
          {screens.map((screen, idx) => (
            <div 
              key={idx} 
              style={{ position: 'relative' }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={screen.image}
                alt={screen.title}
                style={thumbStyle(selected === idx)}
                onClick={() => setSelected(idx)}
              />
              {hoveredIndex === idx && (
                <div style={tooltipStyle}>
                  {screen.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
