import React, { useState } from 'react';
import PageBanner from '../components/common/PageBanner';

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState('dept-sciences');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleDownloadProspectus = (e) => {
    e.preventDefault();
    setDownloadModalOpen(true);
  };

  return (
    <main>
      {/* Page Banner */}
      <PageBanner
        title="Academic Excellence & Curriculum"
        subtitle="A rigorous dual framework harmonizing national educational standards with 21st-century global competencies."
        breadcrumbTitle="Academics"
      />

      {/* Curriculum Divisions (JSS & SSS) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Structure</span>
            <h2>Curriculum Divisions</h2>
            <p>Carefully staged learning trajectories designed to support adolescent cognitive growth from foundational discovery to specialized mastery.</p>
          </div>

          <div className="division-grid">
            {/* Junior Secondary School */}
            <div className="division-card">
              <span className="division-tag tag-jss">Junior Secondary (JSS 1 – JSS 3)</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Foundational Knowledge &amp; Discovery</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                The Junior Secondary phase establishes profound mastery in fundamental core competencies: mathematical logic, linguistic expression, introductory scientific inquiry, and digital literacy. Culminating in the Basic Education Certificate Examination (BECE).
              </p>
              <h4 style={{ fontSize: '1rem', marginTop: '1.5rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Core Subject Offerings:
              </h4>
              <ul className="subject-list">
                <li>Mathematics &amp; Reasoning</li>
                <li>English Language &amp; Literature</li>
                <li>Basic Science &amp; Technology</li>
                <li>Social Studies &amp; Civic Edu</li>
                <li>Agricultural Science</li>
                <li>Information &amp; Comm. Tech</li>
                <li>French &amp; Indigenous Lang</li>
                <li>Creative &amp; Cultural Arts</li>
              </ul>
            </div>

            {/* Senior Secondary School */}
            <div className="division-card">
              <span className="division-tag tag-sss">Senior Secondary (SSS 1 – SSS 3)</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>Specialization &amp; University Preparation</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Senior students select tailored pathways based on career aspirations: Pure Sciences, Commercial Studies, Humanities, or Applied Technology. Prepares learners for WAEC, NECO, JAMB/UTME, and international SAT/IELTS assessments.
              </p>
              <h4 style={{ fontSize: '1rem', marginTop: '1.5rem', color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Specialized Pathways:
              </h4>
              <ul className="subject-list">
                <li>Physics, Chem, Biology</li>
                <li>Further Mathematics</li>
                <li>Financial Accounting &amp; Econ</li>
                <li>Government &amp; Civic Studies</li>
                <li>Literature-in-English</li>
                <li>Technical Drawing &amp; Coding</li>
                <li>Commerce &amp; Marketing</li>
                <li>Geography &amp; Data Proc</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Department Navigator */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Academic Faculty</span>
            <h2>Subject Departments</h2>
            <p>Click below to explore our four faculty pillars, course offerings, and instructional methodologies.</p>
          </div>

          {/* Navigation Tabs */}
          <div className="dept-tabs-nav" role="tablist">
            <button
              className={`dept-tab-btn ${activeTab === 'dept-sciences' ? 'active' : ''}`}
              onClick={() => setActiveTab('dept-sciences')}
              role="tab"
              aria-selected={activeTab === 'dept-sciences'}
            >
              🔬 Sciences &amp; Mathematics
            </button>
            <button
              className={`dept-tab-btn ${activeTab === 'dept-arts' ? 'active' : ''}`}
              onClick={() => setActiveTab('dept-arts')}
              role="tab"
              aria-selected={activeTab === 'dept-arts'}
            >
              📚 Arts &amp; Humanities
            </button>
            <button
              className={`dept-tab-btn ${activeTab === 'dept-commercial' ? 'active' : ''}`}
              onClick={() => setActiveTab('dept-commercial')}
              role="tab"
              aria-selected={activeTab === 'dept-commercial'}
            >
              💼 Commercial &amp; Business
            </button>
            <button
              className={`dept-tab-btn ${activeTab === 'dept-tech' ? 'active' : ''}`}
              onClick={() => setActiveTab('dept-tech')}
              role="tab"
              aria-selected={activeTab === 'dept-tech'}
            >
              💻 Technology &amp; Vocational
            </button>
          </div>

          {/* Panel 1: Sciences */}
          <div className={`dept-tab-panel ${activeTab === 'dept-sciences' ? 'active' : ''}`} role="tabpanel">
            <div className="dept-detail-card">
              <div>
                <span className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Department of Sciences</span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>Igniting Curiosity Through Practical Experimentation</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  Our science department trains aspiring doctors, aerospace engineers, pharmacists, and research scholars. Every theoretical concept is reinforced with mandatory weekly bench laboratory investigations in our modern science wing.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                  <li><strong>Core Disciplines:</strong> Pure Physics, Chemistry, Biology, Agricultural Science, Further Mathematics.</li>
                  <li><strong>Special Programs:</strong> National Olympiad Coaching, STEM Innovation Fair, Astronomy &amp; Rocketry Circle.</li>
                  <li><strong>Faculty Lead:</strong> Mr. Babatunde Lawal (M.Sc. Applied Physics).</li>
                </ul>
              </div>
              <div style={{ background: 'var(--color-navy)', color: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>99.2%</div>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>Distinction rate in WAEC &amp; NECO Science subjects over the past five consecutive sessions.</p>
              </div>
            </div>
          </div>

          {/* Panel 2: Arts & Humanities */}
          <div className={`dept-tab-panel ${activeTab === 'dept-arts' ? 'active' : ''}`} role="tabpanel">
            <div className="dept-detail-card">
              <div>
                <span className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Department of Arts &amp; Humanities</span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>Articulate Thought, Cultural Literacy &amp; Eloquence</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  Fostering deep analytical reading, rhetorical finesse, creative writing, and legal foundations. Our humanities scholars frequently represent the state in national debate rounds and Model United Nations summits.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                  <li><strong>Core Disciplines:</strong> Literature-in-English, Government, History, Christian &amp; Islamic Religious Studies, French.</li>
                  <li><strong>Special Programs:</strong> Annual Shakespeare Play, Parliamentary Debate Society, Press &amp; Journalism Bureau.</li>
                  <li><strong>Faculty Lead:</strong> Mrs. Fatima K. Bello (M.A. English &amp; Literature).</li>
                </ul>
              </div>
              <div style={{ background: 'var(--color-navy)', color: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>#1</div>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>State Debate Champions for three consecutive academic tournaments.</p>
              </div>
            </div>
          </div>

          {/* Panel 3: Commercial */}
          <div className={`dept-tab-panel ${activeTab === 'dept-commercial' ? 'active' : ''}`} role="tabpanel">
            <div className="dept-detail-card">
              <div>
                <span className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Department of Commercial Studies</span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>Financial Acumen, Trade &amp; Enterprise Leadership</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  Equipping future corporate executives, accountants, chartered bankers, and entrepreneurs with rigorous financial literacy, market analysis, and ethical commerce standards.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                  <li><strong>Core Disciplines:</strong> Financial Accounting, Commerce, Economics, Bookkeeping, Marketing &amp; Salesmanship.</li>
                  <li><strong>Special Programs:</strong> Student Investment Club, Mock Stock Exchange Challenge, Young Entrepreneurs Venture Pitch.</li>
                  <li><strong>Faculty Lead:</strong> Mr. Chinedu Eze (B.Sc., ACA Chartered Accountant).</li>
                </ul>
              </div>
              <div style={{ background: 'var(--color-navy)', color: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>100%</div>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>Success in professional foundation examinations and national commerce evaluations.</p>
              </div>
            </div>
          </div>

          {/* Panel 4: Technology & Vocational */}
          <div className={`dept-tab-panel ${activeTab === 'dept-tech' ? 'active' : ''}`} role="tabpanel">
            <div className="dept-detail-card">
              <div>
                <span className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Department of Technology &amp; Vocational</span>
                <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>Coding, Applied Engineering &amp; Creative Craft</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                  Bridging intellect with practical dexterity. Students master algorithmic thinking, python coding, computer-aided design (CAD), electronics, and vocational culinary arts.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                  <li><strong>Core Disciplines:</strong> Computer Studies &amp; Data Processing, Technical Drawing, Basic Electricity, Foods &amp; Nutrition.</li>
                  <li><strong>Special Programs:</strong> Python &amp; Web Development Bootcamp, Arduino Robotics Lab, Graphic Design Workshop.</li>
                  <li><strong>Faculty Lead:</strong> Engr. Samuel Oladipo (B.Eng. Computer Engineering).</li>
                </ul>
              </div>
              <div style={{ background: 'var(--color-navy)', color: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>30+</div>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>Student-built web and robotic prototypes showcased at annual Innovation Expos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curriculars & Student Clubs */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Beyond the Classroom</span>
            <h2>Co-Curriculars &amp; Sports Programs</h2>
            <p>Developing character, sportsmanship, and teamwork through active participation in vibrant clubs and athletics.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>⚽</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Competitive Athletics</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Football teams, basketball leagues, track and field sprint squads, lawn tennis, table tennis, and swimming training.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Robotics &amp; Coding Guild</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Hands-on electronics breadboarding, micro-controller programming, autonomous drones, and web development.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🗣️</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Literary &amp; Debating Society</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Extemporaneous public speaking, parliamentary debate protocols, mock trials, and regional oratory contests.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🎵</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Orchestra &amp; Cultural Troupe</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                Classical choral training, wind/brass instruments, piano mastery, and traditional theatrical dance choreography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar & Prospectus Download */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Planning Ahead</span>
            <h2>2026/2027 Academic Calendar Highlights</h2>
            <p>Key milestone dates across the First, Second, and Third Academic Terms.</p>
          </div>

          <div style={{ overflowX: 'auto', marginBottom: '3.5rem' }}>
            <table className="calendar-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Resumption Date</th>
                  <th>Mid-Term Break</th>
                  <th>Final Examinations</th>
                  <th>Vacation Begins</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>First Term (Harmattan)</strong></td>
                  <td>Monday, 14 Sept 2026</td>
                  <td>26 – 30 Oct 2026</td>
                  <td>30 Nov – 9 Dec 2026</td>
                  <td>Friday, 18 Dec 2026</td>
                </tr>
                <tr>
                  <td><strong>Second Term (Lent)</strong></td>
                  <td>Monday, 11 Jan 2027</td>
                  <td>15 – 19 Feb 2027</td>
                  <td>22 – 31 Mar 2027</td>
                  <td>Friday, 9 Apr 2027</td>
                </tr>
                <tr>
                  <td><strong>Third Term (Trinity)</strong></td>
                  <td>Monday, 26 Apr 2027</td>
                  <td>7 – 11 Jun 2027</td>
                  <td>5 – 16 Jul 2027</td>
                  <td>Friday, 23 Jul 2027</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Download Prospectus / Syllabus Banner */}
          <div className="prospectus-box">
            <div>
              <span
                className="section-eyebrow"
                style={{
                  color: 'var(--color-gold)',
                  background: 'rgba(212,175,55,0.2)',
                  borderColor: 'var(--color-gold)',
                  marginBottom: '0.75rem'
                }}
              >
                Download Information Package
              </span>
              <h3 style={{ color: '#FFF', fontSize: '1.85rem', marginBottom: '0.5rem' }}>
                Curriculum Guide &amp; Prospectus
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '1rem', maxWidth: '650px' }}>
                Get the complete syllabus outline, booklist guidelines, grading metrics, and co-curricular schedule in one comprehensive PDF guide.
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={handleDownloadProspectus}
                className="btn btn-primary btn-lg"
                style={{ whiteSpace: 'nowrap' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prospectus Confirmation Modal */}
      {downloadModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 31, 56, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '1.5rem'
          }}
          onClick={() => setDownloadModalOpen(false)}
        >
          <div
            style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '500px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-xl)',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--color-gold-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Downloading Prospectus</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              The <strong>Candid Target Secondary School 2026/2027 Prospectus &amp; Curriculum Guide</strong> has been generated and queued for download.
            </p>
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="btn btn-navy"
              style={{ width: '100%' }}
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
