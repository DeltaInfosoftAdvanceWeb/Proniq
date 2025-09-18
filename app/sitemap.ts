import type { MetadataRoute } from 'next';
import routes from './sitemapRoutes';

// Base URL for absolute URLs in the XML sitemap
// Set NEXT_PUBLIC_SITE_URL in your environment (e.g., https://www.example.com)
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/+$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r.priority ?? 0.5,
  }));
}