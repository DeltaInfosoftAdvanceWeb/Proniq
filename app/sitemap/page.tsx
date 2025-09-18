import Link from 'next/link';
import routes from '../sitemapRoutes';

export const metadata = {
  title: 'Sitemap',
  description: 'A human-friendly overview of all pages on this site',
};

export default function SitemapPage() {
  return (
    <main style={styles.container}>
      <section style={styles.headerSection}>
        <h1 style={styles.title}>Site Map</h1>
        <p style={styles.subtitle}>Quickly find any page on the site.</p>
      </section>

      <ul style={styles.grid}>
        {routes.map((r) => (
          <li key={r.path} style={styles.card}>
            <Link href={r.path} style={styles.link}>
              <span style={styles.cardTitle}>{r.label}</span>
            </Link>
            {r.description ? <p style={styles.cardDesc}>{r.description}</p> : null}
            <div style={styles.pathBadge}>{r.path}</div>
          </li>
        ))}
      </ul>

      <footer style={styles.footer}>
        <a href="/sitemap.xml" style={styles.footerLink}>View XML Sitemap</a>
      </footer>
    </main>
  );
}

// Minimal inline styles for a clean look without external CSS
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '40px 20px',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    margin: 0,
  },
  subtitle: {
    color: '#555',
    marginTop: 8,
  },
  grid: {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 16,
    padding: 0,
    margin: 0,
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 12,
    padding: 16,
    background: 'linear-gradient(180deg, #ffffff, #fafafa)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  },
  link: {
    textDecoration: 'none',
    color: '#111827',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
  cardDesc: {
    marginTop: 8,
    color: '#4b5563',
    fontSize: 14,
    lineHeight: 1.4,
  },
  pathBadge: {
    marginTop: 12,
    display: 'inline-block',
    background: '#f3f4f6',
    color: '#374151',
    fontSize: 12,
    borderRadius: 999,
    padding: '4px 10px',
    border: '1px solid #e5e7eb',
  },
  footer: {
    marginTop: 28,
    textAlign: 'center',
  },
  footerLink: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 600,
  },
};