import React from 'react';
import PageBanner from '../components/common/PageBanner';

export default function AboutPage() {
  return (
    <main>
      {/* Page Banner with Breadcrumbs */}
      <PageBanner
        title="About Candid Target Secondary School"
        subtitle="A heritage of purposeful learning, unwavering values, and a future-ready academic community."
        breadcrumbTitle="About Us"
      />

      {/* School History & Foundation */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Our Heritage</span>
              <h2 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Built on Truth, Grounded in Scholarship</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.02rem', marginBottom: '1rem', lineHeight: 1.7 }}>
                Founded with an inspired vision to raise visionary scholars of indomitable character, <strong>Candid Target Secondary School</strong> began as a beacon of academic rectitude. The name <em>"Candid Target"</em> embodies our promise: being truthful and transparent in mentoring every young learner directly toward their highest potential in life.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.02rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Over the decades, our campus has expanded from a modest cohort into an elite institution housing cutting-edge science labs, a dedicated arts amphitheater, digital libraries, and top-tier athletics grounds. We have proudly graduated thousands of students who now thrive in leading universities across Africa, Europe, North America, and beyond.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                  <h4 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '0.15rem' }}>2004</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Year Established</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--color-gray-border)', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '0.15rem' }}>4,500+</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Distinguished Alumni</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--color-gray-border)', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.75rem', color: 'var(--color-navy)', marginBottom: '0.15rem' }}>100%</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Accredited Curriculum</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--color-gray-soft)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--color-gray-border)' }}>
              <div style={{ background: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', marginBottom: '1.5rem', borderLeft: '4px solid var(--color-navy)' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-gold-dark)' }} aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  Our Vision
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  To be a benchmark of secondary academic brilliance across Africa, producing critically minded, morally fortified, and globally competitive young men and women.
                </p>
              </div>

              <div style={{ background: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', borderLeft: '4px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--color-navy)' }} aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="12 8 8 12 12 16 16 12 12 8"></polygon>
                  </svg>
                  Our Mission Statement
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                  To ignite a lifelong quest for knowledge through balanced instruction, experiential STEM exploration, strong ethical foundations, and nurturing mentorship within a safe, world-class campus environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Guiding Principles</span>
            <h2>Our Core Values</h2>
            <p>The foundational pillars that direct our educators, inspire our students, and unite our school community.</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>1. Integrity &amp; Candor</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Upholding truth, honesty, and moral transparency in both academic pursuits and daily peer interactions.
              </p>
            </div>
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>2. Academic Excellence</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Instilling disciplined inquiry, meticulous study habits, and intellectual curiosity that reaches far beyond the syllabus.
              </p>
            </div>
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>3. Respect &amp; Inclusivity</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Cultivating empathy and profound mutual respect across diverse backgrounds, beliefs, and talents.
              </p>
            </div>
            <div className="value-card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>4. Servant Leadership</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Teaching students that true leadership is demonstrated through compassionate community impact and selfless civic duty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Directory */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Administration</span>
            <h2>Leadership &amp; Faculty Heads</h2>
            <p>Guided by seasoned educational leaders with deep scholarly expertise and heartfelt dedication to student welfare.</p>
          </div>

          <div className="leader-grid">
            {/* Leader 1 */}
            <div className="leader-card">
              <div className="leader-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"></path>
                </svg>
              </div>
              <div className="leader-info">
                <h3 className="leader-name">Dr. E. O. Adeyemi</h3>
                <span className="leader-title">Principal &amp; Head of School</span>
                <p className="leader-bio">
                  Ph.D. in Educational Administration (Univ. of Ibadan). Over 25 years leading premier secondary educational curricula and faculty mentorship.
                </p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="leader-card">
              <div className="leader-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"></path>
                </svg>
              </div>
              <div className="leader-info">
                <h3 className="leader-name">Mrs. Grace N. Okafor</h3>
                <span className="leader-title">Vice Principal (Academics)</span>
                <p className="leader-bio">
                  M.Ed. in Curriculum Studies. Specializes in advanced pedagogical methods, WAEC/NECO assessment design, and student learning acceleration.
                </p>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="leader-card">
              <div className="leader-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"></path>
                </svg>
              </div>
              <div className="leader-info">
                <h3 className="leader-name">Mr. Babatunde Lawal</h3>
                <span className="leader-title">Head of Sciences &amp; STEM</span>
                <p className="leader-bio">
                  B.Sc., M.Sc. in Applied Physics. Coordinates robotics, mathematics olympiads, and research-grade physical science laboratory projects.
                </p>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="leader-card">
              <div className="leader-avatar">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2"></path>
                </svg>
              </div>
              <div className="leader-info">
                <h3 className="leader-name">Mrs. Fatima K. Bello</h3>
                <span className="leader-title">Head of Arts &amp; Humanities</span>
                <p className="leader-bio">
                  M.A. in English &amp; Literature. Leads literary competitions, inter-school debates, model UN delegations, and cultural arts festivals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Overview */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">World-Class Infrastructure</span>
            <h2>Campus Facilities</h2>
            <p>Purpose-built environments designed to support rigorous scientific discovery, collaborative study, and athletics.</p>
          </div>

          <div className="facility-grid">
            {/* Facility 1 */}
            <div className="facility-card">
              <div className="facility-visual">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M10 2v7.31L4.66 18.2A2 2 0 0 0 6.36 21h11.28a2 2 0 0 0 1.7-2.8L14 9.31V2"></path>
                </svg>
                <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginTop: '0.75rem' }}>Science Labs</h4>
              </div>
              <div className="facility-details">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dedicated Biology, Chemistry &amp; Physics Labs</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                  Fitted with modern spectrophotometers, microscopes, fume hoods, and digital safety monitors ensuring students experience practical, university-standard experimentation.
                </p>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="facility-card">
              <div className="facility-visual">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginTop: '0.75rem' }}>Scholastic Library</h4>
              </div>
              <div className="facility-details">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Modern Library &amp; E-Research Center</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                  Stocking over 15,000 physical volumes, research periodicals, and terminals connected to premier international scholarly journals and encyclopedias.
                </p>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="facility-card">
              <div className="facility-visual">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginTop: '0.75rem' }}>ICT Center</h4>
              </div>
              <div className="facility-details">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Advanced Computing &amp; Coding Lab</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                  Over 120 high-speed workstations, dedicated server equipment, 3D printers, and robotics development kits preparing learners for the digital frontier.
                </p>
              </div>
            </div>

            {/* Facility 4 */}
            <div className="facility-card">
              <div className="facility-visual">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginTop: '0.75rem' }}>Sports Complex</h4>
              </div>
              <div className="facility-details">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Multi-Sport Arena &amp; Athletic Tracks</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                  Features a regulation football pitch, standard running tracks, basketball and volleyball courts, and an indoor gymnasium for wellness and teamwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
