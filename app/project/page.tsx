"use client"

import React, { useState, useEffect, useRef, CSSProperties } from "react"
import Footer from "../components/Footer"
import BackButton from "../components/component"

interface Screen {
  title: string
  description: string
  image: string
}

const screens: Screen[] = [
  {
    title: "Tender Kanban View",
    description: "Tenders organized as cards under stages like Submitted, Approved, Rejected.",
    image: "/p1.png",
  },
  {
    title: "Module Management",
    description:
      "Access and manage all active modules like iERP, Project, MyTime, Asset, Timesheet, Tendering, and more from a centralized dashboard.",
    image: "/p2.png",
  },
  {
    title: "Project Planning",
    description:
      "Visualize and schedule project activities using a Gantt-style chart organized by stages, phases, and timelines.",
    image: "/p3.png",
  },
  {
    title: "BOQ Uploads",
    description:
      "Upload and track Bill of Quantities (BOQ) for each project with visibility into Drawing & QAP and Material status.",
    image: "/p4.png",
  },
  {
    title: "Drawing & QAP Dashboard",
    description: "Status of drawing and QAP by design team and vendors with upload cards.",
    image: "/p15.png",
  },
  {
    title: "Final BOQ Approval",
    description:
      "Approve or review final BOQ entries submitted for projects, including quantities, work items, and remarks before locking.",
    image: "/p5.png",
  },
  {
    title: "Bill Of Quantities Details",
    description:
      "Detailed view of BOQ items including descriptions, units, quantities, rates, and remarks for each work item.",
    image: "/p6.png",
  },
  {
    title: "BILL Details/Items",
    description:
      "Review and manage detailed bill items including completion percentage, executed quantities, approved values, and remarks.",
    image: "/p17.png",
  },
  {
    title: "Tender Management Table",
    description:
      "Access and manage all active modules like iERP, Project, MyTime, Asset, Timesheet, and Tendering from a unified interface.",
    image: "/p8.png",
  },
  {
    title: "Project Overview",
    description:
      "Track overall project progress with grouped stages, activity timelines, and visual indicators for each work phase.",
    image: "/p9.png",
  },
  {
    title: "Type Of Work Overview",
    description:
      "Overview of various work types across multiple tenders or projects with progress bars, assigned teams, and stage-wise tracking.",
    image: "/p10.png",
  },
  {
    title: "Step of Work Overview",
    description:
      "Detailed breakdown of each step involved in the execution of work items across various projects with visual stage indicators.",
    image: "/p11.png",
  },
  {
    title: "Project Planning (Detailed View)",
    description:
      "Zoomed-in project planning screen showing granular task timelines, team assignments, or execution progress by phase.",
    image: "/p3.png",
  },
  {
    title: "Site Wise Status",
    description:
      "Monitor work progress, tasks, and approvals site-wise across different projects with categorized visual indicators and filters.",
    image: "/p12.png",
  },
  {
    title: "Daily Progress Report",
    description:
      "Daily site-level reporting of completed tasks, quantities, remarks, and resource utilization for ongoing project activities.",
    image: "/p13.png",
  },
  {
    title: "RA Bill Generation",
    description:
      "Generate Running Account (RA) bills with itemized entries, measurement details, billing stages, and editable values for approval.",
    image: "/p14.png",
  },
  {
    title: "Drawing and QAP Report",
    description:
      "Track the status of Drawing and Quality Assurance Plan submissions across internal teams and vendors with detailed filtering options.",
    image: "/p15.png",
  },
  {
    title: "User Activity Dashboard",
    description:
      "Monitor individual and team-level task activities including assigned, pending, completed, and overdue tasks using visual progress indicators.",
    image: "/p16.png",
  },
  {
    title: "Customer Master",
    description:
      "This module acts as the central customer database, allowing businesses to: Maintain customer records (names, codes, addresses, GST info). Export/import data for reporting. Connect customer details with other ERP modules (Projects, Planning, Orders, etc.).",
    image: "/T1.png",
  },
    {
    title: "Project Overview",
    description:
      "The Projects Overview screen functions as a central hub for project management, enabling teams to: Track all projects with codes, heads, phases, and descriptions. Prioritize tasks with priority indicators. Switch between list, board, and calendar views for different working styles. Export project data for reporting and compliance.",
    image: "/T2.png",
  },
   {
    title: "Task Management",
    description:
      "The Task Management screen of Proniq ERP. It shows a list of tasks with details like task name, status, priority, progress, assigned team, and actions. Users can view total tasks, see how many are done or pending, and switch between table, card, or calendar views. The page also provides quick filters, a search bar, and an option to create new tasks for efficient tracking and management.",
    image: "/T3.png",
  },
   {
    title: "Task Management – Cards View",
    description:
      "Monitor individual and team-level task activities including assigned, pending, completed, and overdue tasks using visual progress indicators.",
    image: "/T4.png",
  },
   {
    title: "User Activity Dashboard",
    description:
      "Task Management – Calendar View in Proniq ERP. It displays tasks in a calendar format, helping users track assignments by date. The calendar shows the current month (August 2025) with navigation to move between months, weeks, or days. A legend on top highlights task status using colors—green for Done, orange for Working, red for Pending, and blue for Other. Users can quickly view deadlines, monitor workload distribution, and create or adjust tasks directly on specific dates, making it easier to manage schedules and ensure timely completion.",
    image: "/T5.png",
  },
   {
    title: "Task Details",
    description:
      "The Task Details page in Proniq ERP gives a complete view of an individual task. It highlights the task name, status, priority, and type of work, along with linked project details. The page shows scheduling information such as start and end dates, required duration, and actual time spent, as well as billing and tracking data with creation and update timestamps. It also lists the assigned team members and their assignment dates. Additional tabs for comments, issues, and dependencies help in collaboration and tracking, making this page a central point for managing and monitoring a task’s progress.",
    image: "/T7.png",
  },
]

const Project = () => {
  const [selected, setSelected] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const thumbRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setSelected((prev) => (prev + 1) % screens.length)
          setIsTransitioning(false)
        }, 150)
      }, 2000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  // Auto-scroll to selected thumbnail
  useEffect(() => {
    const selectedThumb = thumbRefs.current[selected]
    if (selectedThumb && scrollContainerRef.current) {
      selectedThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    }
  }, [selected])

  const handleImageMouseEnter = () => setIsPaused(true)
  const handleImageMouseLeave = () => setIsPaused(false)

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    background: "white",
    padding: "2rem 1rem 2rem 1rem",
    gap: "1rem",
    perspective: "1000px",
    perspectiveOrigin: "center center",
  }

  const imageStyle: CSSProperties = {
    width: "min(100%, 1100px)",
    maxHeight: "65vh",
    objectFit: "contain",
    borderRadius: "20px",
    boxShadow: isTransitioning ? "0 25px 50px rgba(0,0,0,0.4)" : "0 20px 40px rgba(0,0,0,0.3)",
    background: "#fff",
    transform: isTransitioning
      ? "scale(0.95) rotateY(5deg) translateZ(-20px)"
      : "scale(1) rotateY(0deg) translateZ(0px)",
    transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: isTransitioning ? 0.7 : 1,
    filter: isTransitioning ? "blur(2px)" : "blur(0px)",
  }

  const titleStyle: CSSProperties = {
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)",
    fontWeight: 800,
    color: "black",
    textAlign: "center",
    margin: 0,
    transform: isTransitioning ? "translateY(10px)" : "translateY(0px)",
    opacity: isTransitioning ? 0.8 : 1,
    transition: "all 0.4s ease",
  }

  const descStyle: CSSProperties = {
    fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.15rem)",
    color: "black",
    textAlign: "center",
    maxWidth: "62ch",
    margin: 0,
    transform: isTransitioning ? "translateY(15px)" : "translateY(0px)",
    opacity: isTransitioning ? 0.7 : 1,
    transition: "all 0.5s ease",
  }

  const scrollStrip: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "0.75rem",
    justifyContent: "flex-start",
    padding: "0.25rem 0",
    maxWidth: "1100px",
    overflowX: "auto",
    overflowY: "hidden",
    margin: "0 auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#888 #eee",
  }

  const thumbStyle = (isSelected: boolean, idx: number): CSSProperties => ({
    flex: "0 0 auto",
    width: 140,
    height: 78,
    borderRadius: "12px",
    marginTop: "15px",
    border: isSelected ? "2px solid black" : "2px solid rgba(255,255,255,0.3)",
    objectFit: "cover",
    cursor: "pointer",
    background: "#fff",
    position: "relative",
    transform: isSelected
      ? "scale(1.1) translateY(-5px) rotateY(0deg)"
      : hoveredIndex === idx
        ? "scale(1.05) translateY(-2px) rotateY(2deg)"
        : "scale(1) translateY(0px) rotateY(0deg)",
    filter: isSelected ? "brightness(1.1)" : hoveredIndex === idx ? "brightness(1.05)" : "brightness(1)",
    zIndex: isSelected ? 10 : hoveredIndex === idx ? 5 : 1,
  })

  const tooltipStyle: CSSProperties = {
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%) translateZ(20px)",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    opacity: 1,
    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    marginBottom: "8px",
    zIndex: 20,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)",
  }

  const handleThumbnailClick = (idx: number) => {
    if (idx !== selected) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelected(idx)
        setIsTransitioning(false)
      }, 150)
    }
  }

  return (
    <>
      <div style={containerStyle}>
        <img
          src={screens[selected].image || "/placeholder.svg"}
          alt={screens[selected].title}
          style={imageStyle}
          onMouseEnter={handleImageMouseEnter}
          onMouseLeave={handleImageMouseLeave}
        />
        <h1 style={titleStyle}>{screens[selected].title}</h1>
        <p style={descStyle}>{screens[selected].description}</p>

        <div style={scrollStrip} ref={scrollContainerRef}>
          {screens.map((screen, idx) => (
            <div
              key={idx}
              style={{ position: "relative" }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                ref={el => { thumbRefs.current[idx] = el }}
                src={screen.image || "/placeholder.svg"}
                alt={screen.title}
                style={thumbStyle(selected === idx, idx)}
                onClick={() => handleThumbnailClick(idx)}
              />
              {hoveredIndex === idx && <div style={tooltipStyle}>{screen.title}</div>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Project