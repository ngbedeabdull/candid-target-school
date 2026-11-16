import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';

export default function NotFoundPage() {
  return (
    <main>
      <PageBanner
        title="Page Not Found (404)"
        subtitle="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        breadcrumbTitle="404"
      />
      <section className="section" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--color-navy)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            404
          </div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>We Couldn't Find That Page</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Please return to our home page or use our main navigation to find the academic information you need.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg">
              Return to Home
            </Link>
            <Link to="/contact" className="btn btn-outline-navy btn-lg">
              Contact School Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
