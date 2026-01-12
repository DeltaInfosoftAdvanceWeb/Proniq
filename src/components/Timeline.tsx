'use client';

import React, { memo } from 'react';
import ReactFlow, {
  Background,
  MiniMap,
  Node,
  Edge,
  NodeProps,
  MarkerType,
  useNodesState,
  useEdgesState,
  Position,
  Handle,
  useReactFlow,
  Panel,
  ReactFlowProvider,
  getNodesBounds,
  getViewportForBounds,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import {
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  Minus,
  Maximize,
  Plus,
  Move,
  Download,
  FileDown,
  ImageIcon,
  ArrowRight
} from 'lucide-react';

/* ========================================================
   1. CUSTOM NODE COMPONENTS
   Professional, clean, corporate style
======================================================== */

// Common style for all nodes
const nodeBaseStyle = "bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[220px]";

// 1. Dashboard Node (Control Layer)
const DashboardNode = memo(({ data }: NodeProps) => {
  return (
    <div className={`${nodeBaseStyle} border-l-4 border-l-indigo-600`}>
      <Handle type="target" position={Position.Top} className="!bg-slate-400" />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 border-b border-slate-100 pb-2">
          <LayoutDashboard className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-slate-800 text-sm">Dashboard</h3>
        </div>
        <div className="text-[11px] text-slate-600 space-y-1.5">
          <p className="italic text-slate-500 mb-2">Control & Tracking Layer</p>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> <span>Tender Approvals</span></div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> <span>Final BOQ Status</span></div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> <span>DPR Approvals</span></div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-500" /> <span>RA Bill Status</span></div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="!bg-slate-400" />
    </div>
  );
});

// 2. Module Header Node (For grouping vertical flows)
const ModuleHeaderNode = memo(({ data }: NodeProps) => {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-t-lg border-b-2 border-b-slate-300 p-3 min-w-[220px] text-center">
      <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide">{data.label}</h3>
      {data.subLabel && <p className="text-[10px] text-slate-500 mt-1">{data.subLabel}</p>}
      <Handle type="source" position={Position.Bottom} className="!bg-slate-400 !opacity-0" />
      <Handle type="target" position={Position.Top} className="!bg-slate-400 !opacity-0" />
    </div>
  );
});

// 3. Process Step Node (Standard Step)
const ProcessNode = memo(({ data }: NodeProps) => {
  return (
    <div className={`${nodeBaseStyle} border-l-4 border-l-slate-400`}>
      <Handle type="target" position={Position.Top} className="!bg-slate-400" />
      <Handle type="target" position={Position.Left} id="left" className="!bg-slate-400" />
      <div className="p-3">
        <h4 className="font-semibold text-slate-800 text-xs mb-1">{data.label}</h4>
        {data.items && (
          <ul className="list-disc list-inside text-[10px] text-slate-500 leading-tight space-y-0.5">
            {data.items.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-slate-400" />
      <Handle type="source" position={Position.Right} id="right" className="!bg-slate-400" />
    </div>
  );
});

// 4. Decision/Approval Node (Gatekeeper)
const ApprovalNode = memo(({ data }: NodeProps) => {
  return (
    <div className={`${nodeBaseStyle} border-l-4 border-l-amber-500 bg-amber-50/30`}>
      <Handle type="target" position={Position.Top} className="!bg-slate-400" />
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <AlertCircle className="w-4 h-4 text-amber-500" />
          <h4 className="font-semibold text-slate-800 text-xs">{data.label}</h4>
        </div>
        {data.items && (
          <ul className="text-[10px] text-slate-500 leading-tight space-y-0.5 pl-1">
            {data.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-1">
                <span className="mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-slate-400" />
      <Handle type="source" position={Position.Right} id="right" className="!bg-slate-400" />
    </div>
  );
});

const nodeTypes = {
  dashboard: DashboardNode,
  moduleHeader: ModuleHeaderNode,
  process: ProcessNode,
  approval: ApprovalNode,
};

/* ========================================================
   2. DATA & LAYOUT
   Left-to-Right Modules, Top-to-Bottom Steps
======================================================== */

// Column X Positions (approx 300px spacing)
const C1 = 0;    // Dashboard
const C2 = 350;  // Tender
const C3 = 650;  // Project
const C4 = 950;  // WBS
const C5 = 1250; // Planning
const C6 = 1550; // DPR
const C7 = 1850; // Billing
const C8 = 2150; // Reports

// Row Y Positions
const R_HEADER = 0;
const R1 = 80;
const R2 = 200;
const R3 = 320;
const R4 = 440;
const R5 = 560;

const initialNodes: Node[] = [
  // --- 1. DASHBOARD ---
  {
    id: 'dashboard',
    type: 'dashboard',
    position: { x: C1, y: R2 }, // Centered vertically relative to flow
    data: { label: 'Dashboard' },
  },

  // --- 2. TENDER MODULE ---
  { id: 'h_tender', type: 'moduleHeader', position: { x: C2, y: R_HEADER }, data: { label: 'Tender Module', subLabel: 'Pre-Project Stage' } },
  {
    id: 'tender_board',
    type: 'process',
    position: { x: C2, y: R1 },
    data: {
      label: 'Tender Board',
      items: ['Add New Tender', 'Export Data', 'Lifecycle Tracking']
    }
  },
  {
    id: 'approval_list',
    type: 'approval',
    position: { x: C2, y: R2 },
    data: {
      label: 'Approval List',
      items: ['Authority Gate', 'Approve/Reject', 'Updates Dashboard']
    }
  },
  {
    id: 'boq_upload',
    type: 'process',
    position: { x: C2, y: R3 },
    data: {
      label: 'BOQ Upload',
      items: ['Upload BOQ', 'Export Excel', 'Mandatory Step']
    }
  },
  {
    id: 'drawing_qap',
    type: 'process',
    position: { x: C2, y: R4 },
    data: {
      label: 'Drawing & QAP',
      items: ['Search Drawings', 'Attach Tech Docs']
    }
  },
  {
    id: 'final_boq',
    type: 'approval',
    position: { x: C2, y: R5 },
    data: {
      label: 'Final BOQ Approval',
      items: ['Gatekeeper', 'Enables Project Creation']
    }
  },
  // Side Node for Tender
  {
    id: 'past_tenders',
    type: 'process',
    position: { x: C2, y: R_HEADER - 140 }, // Floating above/side
    data: { label: 'Past Tenders', items: ['Read-only history'] },
    style: { borderStyle: 'dashed', opacity: 0.8 }
  },

  // --- 3. PROJECT CREATION ---
  { id: 'h_project', type: 'moduleHeader', position: { x: C3, y: R_HEADER }, data: { label: 'Project Creation' } },
  {
    id: 'project_overview',
    type: 'process',
    position: { x: C3, y: R1 },
    data: {
      label: 'Projects Overview',
      items: ['Code, Name, Client', 'Budget & Dates', 'Map View']
    }
  },
  {
    id: 'geo_setup',
    type: 'process',
    position: { x: C3, y: R2 },
    data: {
      label: 'Geography Setup',
      items: ['Regions → Clusters', 'Villages → Nodes', 'Reused downstream']
    }
  },

  // --- 4. WBS ---
  { id: 'h_wbs', type: 'moduleHeader', position: { x: C4, y: R_HEADER }, data: { label: 'WBS Structure' } },
  {
    id: 'type_work',
    type: 'process',
    position: { x: C4, y: R1 },
    data: {
      label: 'Type of Work',
      items: ['HDPE Pipes', 'Testing & Comm.']
    }
  },
  {
    id: 'step_work',
    type: 'process',
    position: { x: C4, y: R2 },
    data: {
      label: 'Step of Work',
      items: ['Pipe Laying', 'Restoration', 'Used in Planning']
    }
  },

  // --- 5. PLANNING ---
  { id: 'h_plan', type: 'moduleHeader', position: { x: C5, y: R_HEADER }, data: { label: 'Project Planning' } },
  {
    id: 'gantt',
    type: 'process',
    position: { x: C5, y: R1 },
    data: {
      label: 'Gantt Timeline',
      items: ['Time Control', 'Work Type & Steps', 'Start/End Dates']
    }
  },

  // --- 6. DPR ---
  { id: 'h_dpr', type: 'moduleHeader', position: { x: C6, y: R_HEADER }, data: { label: 'DPR Module' } },
  {
    id: 'dpr_entry',
    type: 'process',
    position: { x: C6, y: R1 },
    data: {
      label: 'DPR Entry',
      items: ['Site Data Capture', 'Daily Progress']
    }
  },
  {
    id: 'dpr_approval',
    type: 'approval',
    position: { x: C6, y: R2 },
    data: {
      label: 'DPR Approval',
      items: ['Approve/Reject', 'Check Progress %', 'Updates Dashboard']
    }
  },
  {
    id: 'dpr_reports',
    type: 'process',
    position: { x: C6, y: R3 },
    data: {
      label: 'DPR Reports',
      items: ['Site-wise Status', 'Node Reports']
    }
  },

  // --- 7. BILLING ---
  { id: 'h_billing', type: 'moduleHeader', position: { x: C7, y: R_HEADER }, data: { label: 'Billing Module' } },
  {
    id: 'ra_gen',
    type: 'process',
    position: { x: C7, y: R1 },
    data: {
      label: 'Generate RA Bills',
      items: ['From Approved DPR', 'Linked to BOQ']
    }
  },
  {
    id: 'ra_approval',
    type: 'approval',
    position: { x: C7, y: R2 },
    data: {
      label: 'RA Bill Approval',
      items: ['View PDF', 'Approve/Reject', 'Updates Dashboard']
    }
  },

  // --- 8. REPORTS ---
  { id: 'h_reports', type: 'moduleHeader', position: { x: C8, y: R_HEADER }, data: { label: 'Reports & Analytics' } },
  {
    id: 'daily_book',
    type: 'process',
    position: { x: C8, y: R1 },
    data: {
      label: 'Daily Book Report',
      items: ['KPIs & Counts', 'Audit Tracking']
    }
  },
  {
    id: 'other_reports',
    type: 'process',
    position: { x: C8, y: R2 },
    data: {
      label: 'Other Reports',
      items: ['Consolidated', 'Billing Reports', 'User Logs']
    }
  },


];

/* ========================================================
   3. EDGES
   Solid = Mandatory Flow
   Dotted = Feedback/Reference
======================================================== */

const edgeStyle = { stroke: '#94a3b8', strokeWidth: 1.5 };
const dottedStyle = { stroke: '#94a3b8', strokeWidth: 1.5, strokeDasharray: '5,5' };

const initialEdges: Edge[] = [
  // --- TENDER FLOW (Vertical) ---
  { id: 'e_t1', source: 'tender_board', target: 'approval_list', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },
  { id: 'e_t2', source: 'approval_list', target: 'boq_upload', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },
  { id: 'e_t3', source: 'boq_upload', target: 'drawing_qap', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },
  { id: 'e_t4', source: 'drawing_qap', target: 'final_boq', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- TENDER -> PROJECT (Horizontal) ---
  { id: 'e_tp', source: 'final_boq', target: 'project_overview', sourceHandle: 'right', targetHandle: 'left', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- PROJECT FLOW ---
  { id: 'e_p1', source: 'project_overview', target: 'geo_setup', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- PROJECT -> WBS ---
  { id: 'e_pw', source: 'geo_setup', target: 'type_work', sourceHandle: 'right', targetHandle: 'left', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- WBS FLOW ---
  { id: 'e_w1', source: 'type_work', target: 'step_work', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- WBS -> PLANNING ---
  { id: 'e_wp', source: 'step_work', target: 'gantt', sourceHandle: 'right', targetHandle: 'left', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- PLANNING -> DPR ---
  { id: 'e_pd', source: 'gantt', target: 'dpr_entry', sourceHandle: 'right', targetHandle: 'left', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- DPR FLOW ---
  { id: 'e_d1', source: 'dpr_entry', target: 'dpr_approval', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },
  { id: 'e_d2', source: 'dpr_approval', target: 'dpr_reports', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- DPR -> BILLING ---
  { id: 'e_db', source: 'dpr_approval', target: 'ra_gen', sourceHandle: 'right', targetHandle: 'left', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- BILLING FLOW ---
  { id: 'e_b1', source: 'ra_gen', target: 'ra_approval', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- BILLING -> REPORTS ---
  { id: 'e_br', source: 'ra_approval', target: 'daily_book', sourceHandle: 'right', targetHandle: 'left', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },

  // --- REPORTS FLOW ---
  { id: 'e_r1', source: 'daily_book', target: 'other_reports', type: 'smoothstep', style: edgeStyle, markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' } },



  // --- FEEDBACK LOOPS (Dotted to Dashboard) ---
  { id: 'fb_1', source: 'approval_list', target: 'dashboard', sourceHandle: 'right', type: 'smoothstep', style: dottedStyle, animated: true },
  { id: 'fb_2', source: 'final_boq', target: 'dashboard', sourceHandle: 'right', type: 'smoothstep', style: dottedStyle, animated: true },
  { id: 'fb_3', source: 'dpr_approval', target: 'dashboard', sourceHandle: 'right', type: 'smoothstep', style: dottedStyle, animated: true },
  { id: 'fb_4', source: 'ra_approval', target: 'dashboard', sourceHandle: 'right', type: 'smoothstep', style: dottedStyle, animated: true },

  // --- SIDE REFERENCES ---
  { id: 'ref_1', source: 'past_tenders', target: 'tender_board', type: 'smoothstep', style: dottedStyle },
];

/* ========================================================
   3. CUSTOM ZOOM & EXPORT CONTROLS
======================================================== */
const TimelineControls = () => {
  const { zoomIn, zoomOut, fitView, getNodes } = useReactFlow();

  const exportFullFlow = async (type: 'png' | 'pdf') => {
    const nodes = getNodes();
    if (nodes.length === 0) return;

    const bounds = getNodesBounds(nodes);
    const element = document.querySelector('.react-flow__viewport') as HTMLElement;

    if (!element) return;

    // Calculate dimensions with padding
    const width = bounds.width + 400;
    const height = bounds.height + 400;

    try {
      const dataUrl = await toPng(element, {
        backgroundColor: '#f8fafc',
        width: width,
        height: height,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          // Center the flow in the export
          transform: `translate(${-bounds.x + 200}px, ${-bounds.y + 200}px) scale(1)`,
        },
      });

      if (type === 'png') {
        const link = document.createElement('a');
        link.download = 'proniq-full-workflow.png';
        link.href = dataUrl;
        link.click();
      } else {
        const pdf = new jsPDF('l', 'px', [width, height]);
        pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
        pdf.save('proniq-full-workflow.pdf');
      }
    } catch (err) {
      console.error('Export failed', err);
    }
  };

  return (
    <Panel position="top-right" className="z-[50] m-4">
      <div className="flex flex-col gap-2 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-2xl shadow-indigo-500/10 min-w-[160px] transform origin-top-right">

        {/* Header Section */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest text-nowrap">Workflow Pro</span>
          </div>
          <Download className="w-3 h-3 text-slate-300" />
        </div>

        {/* Buttons List */}
        <div className="space-y-1.5">
          <button
            onClick={() => exportFullFlow('png')}
            className="group w-full flex items-center justify-between gap-2 bg-slate-50 hover:bg-slate-900 text-slate-600 hover:text-white px-2.5 py-2 rounded-xl text-[10px] font-bold transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <ImageIcon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              <span>Full Image</span>
            </div>
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
          </button>

          <button
            onClick={() => exportFullFlow('pdf')}
            className="group w-full flex items-center justify-between gap-2 bg-slate-50 hover:bg-primary text-slate-600 hover:text-white px-2.5 py-2 rounded-xl text-[10px] font-bold transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <FileDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              <span>Full PDF</span>
            </div>
            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between">
          <button onClick={() => zoomOut()} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors" title="Zoom Out">
            <Minus className="w-3.5 h-3.5" />
          </button>
          <div className="h-3 w-px bg-slate-200 mx-1" />
          <button onClick={() => fitView({ duration: 800 })} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors" title="Fit View">
            <Maximize className="w-3.5 h-3.5" />
          </button>
          <div className="h-3 w-px bg-slate-200 mx-1" />
          <button onClick={() => zoomIn()} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 transition-colors" title="Zoom In">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </Panel>
  );
};

/* ========================================================
   4. MAIN COMPONENT
======================================================== */

function Flow({ ref }: { ref: any }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="relative min-h-[60vh] md:min-h-screen bg-slate-50 flex flex-col" ref={ref}>

      {/* Header */}
      <div className="w-full py-10 bg-slate-50/50 shrink-0">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-gradient">
            How proniq Works
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            An end-to-end, approval-driven workflow from tender creation
            to billing and analytics — ensuring full visibility and
            accountability at every stage.
          </p>
          <div className="mt-4 md:hidden flex items-center justify-center gap-2 text-sm text-slate-400 animate-pulse">
            <Move className="w-4 h-4" />
            <span>Pinch to zoom & drag to explore</span>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="absolute inset-0">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={true}
            fitView
            minZoom={0.1}
            maxZoom={2}
            defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
            attributionPosition="bottom-left"
            panOnScroll={false}
            panOnDrag={true}
            zoomOnScroll={false}
            zoomOnPinch={true}
            zoomOnDoubleClick={true}
          >
            <Background gap={24} size={1} color="#e2e8f0" />
            <TimelineControls />
            <MiniMap
              className="!bg-white !border !border-slate-200 !shadow-lg rounded-xl overflow-hidden m-4 hidden md:block"
              nodeColor={(n) => {
                if (n.type === 'dashboard') return '#4f46e5';
                if (n.type === 'approval') return '#f59e0b';
                if (n.type === 'moduleHeader') return '#cbd5e1';
                return '#94a3b8';
              }}
            />
          </ReactFlow>
        </div>
      </div>

    </div>
  );
}

export default function Timeline({ ref }: { ref: any }) {
  return (
    <ReactFlowProvider>
      <Flow ref={ref} />
    </ReactFlowProvider>
  );
}