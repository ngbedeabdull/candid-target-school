import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text-content">
              <div className="hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Recognized Center of Academic Distinction
              </div>
              <h1 className="hero-title">
                Aiming for Excellence at <span>Candid Target</span> Secondary School
              </h1>
              <p className="hero-subtitle">
                Empowering ambitious young minds through rigorous scholarship, moral integrity, innovation, and leadership for a rapidly advancing world.
              </p>
              <div className="hero-actions">
                <Link to="/academics" className="btn btn-primary btn-lg">
                  Explore Academics
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">
                  Book a Campus Tour
                </Link>
              </div>
            </div>

            <div className="hero-card-preview">
              <div className="card-visual">
                <div className="card-visual-crest">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 style={{ color: '#FFF', fontSize: '1.35rem', marginBottom: '0.35rem' }}>
                  Candid Target Academy
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.88rem' }}>
                  Discipline • Diligence • Distinction
                </p>
              </div>
              <div className="hero-badge-pill">
                ★ Top 1% Regional WAEC/NECO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Stats Bar */}
      <section className="stats-strip" aria-label="School Statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Senior Exam Pass Rate (Distinction)</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15:1</div>
              <div className="stat-label">Student-to-Teacher Ratio</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Extracurricular Clubs &amp; Sports</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">University &amp; College Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Welcome */}
      <section className="section">
        <div className="container">
          <div className="principal-grid">
            <div className="principal-photo-frame">
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background: 'var(--color-navy)',
                    color: 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem auto',
                    border: '3px solid var(--color-gold)'
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Dr. E. O. Adeyemi, Ph.D.</h4>
                <p
                  style={{
                    color: 'var(--color-gold-dark)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  Principal &amp; Head of School
                </p>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  25+ Years in Educational Leadership
                </span>
              </div>
            </div>
            <div>
              <span className="section-eyebrow">Welcome Message</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
                Nurturing Potential, Shaping Future Global Leaders
              </h2>
              <div className="principal-quote">
                "At Candid Target Secondary School, we believe every child arrives with unique promise. Our mission is to guide them candidly toward their highest target in academics, morals, and creative innovation."
              </div>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem', fontSize: '1.05rem' }}>
                Welcome to our academic family. Since our founding, Candid Target Secondary School has provided an inspiring sanctuary where disciplined scholarship meets holistic character building. Our dedicated educators mentor students to become compassionate, critical thinkers equipped to lead in an ever-evolving global society.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.75rem', fontSize: '1.05rem' }}>
                We invite you to explore our campus, witness our state-of-the-art laboratories, and experience the warm, vibrant culture that makes our community exceptional.
              </p>
              <Link to="/about" className="btn btn-navy">
                Read Our Full Story &amp; Leadership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Pillars */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Candid Advantage</span>
            <h2>Why Families Choose Candid Target</h2>
            <p>Four pillars that define our relentless pursuit of educational quality and moral fortitude.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(27,54,93,0.1)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy)',
                  marginBottom: '1.25rem'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Dual Curricular Rigor</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                National curriculum integrated with international STEM best practices, preparing students for both domestic and global honors.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(212,175,55,0.15)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-dark)',
                  marginBottom: '1.25rem'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Modern Tech &amp; Robotics</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Fiber-connected ICT hub, digital language labs, and competitive robotics programs from Junior Secondary through Graduation.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(27,54,93,0.1)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-navy)',
                  marginBottom: '1.25rem'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Moral &amp; Leadership Mentorship</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Structured advisory circles, public speaking societies, and student prefectship building confident, responsible citizens.
              </p>
            </div>

            <div className="card" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  background: 'rgba(212,175,55,0.15)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-dark)',
                  marginBottom: '1.25rem'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Track Record of Merit</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Consistently top-ranking in National Mathematics Olympiads, debate championships, and inter-school sports galas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Upcoming Events */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Campus Updates</span>
            <h2>Latest News &amp; Upcoming Events</h2>
            <p>Stay connected with academic milestones, student triumphs, and community gatherings.</p>
          </div>
          <div className="news-grid">
            {/* Card 1 */}
            <article className="card">
              <div className="news-card-img">
                <span className="news-date-badge">Nov 28, 2026</span>
                <div style={{ textAlign: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <div style={{ fontSize: '0.8rem', marginTop: '0.35rem', color: '#E2E8F0' }}>Academic Competition</div>
                </div>
              </div>
              <div className="news-content">
                <span className="news-category">Science &amp; Innovation</span>
                <h3 className="news-title">
                  <Link to="/academics">Candid Target Secures 1st Position in National STEM Olympiad</Link>
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                  Our Senior Secondary robotics team was awarded top honors for their smart irrigation and solar tracker innovation.
                </p>
                <Link
                  to="/academics"
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  Read Article →
                </Link>
              </div>
            </article>

            {/* Card 2 */}
            <article className="card">
              <div className="news-card-img">
                <span className="news-date-badge">Dec 12, 2026</span>
                <div style={{ textAlign: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <div style={{ fontSize: '0.8rem', marginTop: '0.35rem', color: '#E2E8F0' }}>School Community</div>
                </div>
              </div>
              <div className="news-content">
                <span className="news-category">Campus Life</span>
                <h3 className="news-title">
                  <Link to="/admissions">Annual Inter-House Sports Festival &amp; Cultural Gala Announced</Link>
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                  Join our students, faculty, and alumni for a celebration of athletic prowess, track &amp; field events, and creative arts.
                </p>
                <Link
                  to="/admissions"
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  Event Details →
                </Link>
              </div>
            </article>

            {/* Card 3 */}
            <article className="card">
              <div className="news-card-img">
                <span className="news-date-badge">Jan 10, 2027</span>
                <div style={{ textAlign: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <div style={{ fontSize: '0.8rem', marginTop: '0.35rem', color: '#E2E8F0' }}>Admissions Cohort</div>
                </div>
              </div>
              <div className="news-content">
                <span className="news-category">Admissions</span>
                <h3 className="news-title">
                  <Link to="/admissions">2027/2028 Academic Session Entrance Examination Open</Link>
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                  Registration is now formally open for prospective JSS1 students and mid-stream senior high school transfers.
                </p>
                <Link
                  to="/admissions"
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-navy)',
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  Application Guide →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="section section-navy" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge" style={{ marginBottom: '1rem' }}>
            Your Journey Begins Here
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Give Your Child the Candid Target Advantage
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', marginBottom: '2rem' }}>
            Applications for the forthcoming academic year are now being processed. Schedule a personal tour or complete the online inquiry today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-primary btn-lg">
              Start Online Application
            </Link>
            <Link to="/contact" className="btn btn-outline-white btn-lg">
              Speak with Admissions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
