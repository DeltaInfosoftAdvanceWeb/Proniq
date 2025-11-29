'use client';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Tender Creation' },
    position: { x: 0, y: 0 },
    style: {
      background: '#2563eb',
      color: '#fff',
      borderRadius: '12px',
      padding: '12px',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  },
  {
    id: '2',
    data: { label: 'BOQ Upload' },
    position: { x: 250, y: 0 },
    style: {
      background: '#f97316',
      color: '#fff',
      borderRadius: '12px',
      padding: '12px',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  },
  {
    id: '3',
    data: { label: 'Planning Docs' },
    position: { x: 500, y: 0 },
    style: {
      background: '#8b5cf6',
      color: '#fff',
      borderRadius: '12px',
      padding: '12px',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  },
  {
    id: '4',
    data: { label: 'Project Creation' },
    position: { x: 750, y: 0 },
    style: {
      background: '#14b8a6',
      color: '#fff',
      borderRadius: '12px',
      padding: '12px',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  },
  {
    id: '5',
    data: { label: 'RA Bill Generation' },
    position: { x: 1000, y: 0 },
    style: {
      background: '#6366f1',
      color: '#fff',
      borderRadius: '12px',
      padding: '12px',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];

export default function ProniqFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10 text-gradient">Proniq Workflow</h2>
        <div className="h-[400px] rounded-xl border border-gray-200 shadow-md overflow-hidden">
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              panOnScroll={false}
              zoomOnScroll={false}
              zoomOnPinch={false}
              panOnDrag={false}
              attributionPosition="bottom-left"
            />
          </ReactFlowProvider>
        </div>
      </div>
    </section>
  );
}