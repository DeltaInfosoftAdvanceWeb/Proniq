export type RouteInfo = {
  path: string;
  label: string;
  description?: string;
  priority?: number;
};

// Centralized list of routes for both XML and HTML sitemaps
const routes: RouteInfo[] = [
  { path: '/', label: 'Home', description: 'Landing page and overview', priority: 1.0 },
  { path: '/about', label: 'About', description: 'Learn about our mission and team', priority: 0.8 },
  { path: '/contact', label: 'Contact', description: 'Get in touch with us', priority: 0.8 },
  { path: '/project', label: 'Projects', description: 'Explore our projects and case studies', priority: 0.8 },
  { path: '/solutions/architecture', label: 'Architecture Solutions', description: 'Solutions tailored for architecture', priority: 0.7 },
  { path: '/solutions/construction', label: 'Construction Solutions', description: 'Solutions designed for construction', priority: 0.7 },
  { path: '/solutions/heavy-engineering', label: 'Heavy Engineering Solutions', description: 'Solutions for heavy engineering', priority: 0.7 },
];

export default routes;