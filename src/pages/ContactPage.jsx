import React, { useState } from 'react';
import PageBanner from '../components/common/PageBanner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactSubject: '',
    contactMessage: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.contactName.trim()) {
      errs.contactName = "Please enter your full name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.contactEmail.trim() || !emailRegex.test(formData.contactEmail.trim())) {
      errs.contactEmail = "Please enter a valid email address.";
    }
    if (!formData.contactSubject) {
      errs.contactSubject = "Please select a subject for your message.";
    }
    if (formData.contactMessage.trim().length < 10) {
      errs.contactMessage = "Please write your message (at least 10 characters).";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
      });
      const successBanner = document.getElementById('contactSuccessBanner');
      if (successBanner) {
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  return (
    <main>
      {/* Page Banner with Breadcrumbs */}
      <PageBanner
        title="Contact Candid Target"
        subtitle="We welcome prospective families, education partners, and alumni. Reach out to schedule a private tour or inquire about enrollment."
        breadcrumbTitle="Contact"
      />

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left Contact Information Panel */}
            <div className="contact-info-panel">
              <span className="section-eyebrow" style={{ color: 'var(--color-gold)', background: 'rgba(212,175,55,0.18)', borderColor: 'var(--color-gold)' }}>
                Get In Touch
              </span>
              <h3>Connect With Us</h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Our administrative team is available Monday through Friday to address inquiries, arrange campus tours, and support your child's educational pathway.
              </p>

              <ul className="contact-card-list">
                <li className="contact-card-item">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Campus Address</strong>
                    <span style={{ color: '#CBD5E1', fontSize: '0.92rem' }}>
                      12 Candid Target Boulevard, Scholastic Heights, Lagos / Abuja, Nigeria
                    </span>
                  </div>
                </li>

                <li className="contact-card-item">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Admissions &amp; Administration</strong>
                    <span style={{ color: '#CBD5E1', fontSize: '0.92rem' }}>
                      <a href="tel:+2348031234567" style={{ color: 'inherit' }}>+234 (0) 803 123 4567</a><br />
                      <a href="tel:+23418920041" style={{ color: 'inherit' }}>+234 1 892 0041</a>
                    </span>
                  </div>
                </li>

                <li className="contact-card-item">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Official Correspondence</strong>
                    <span style={{ color: '#CBD5E1', fontSize: '0.92rem' }}>
                      <a href="mailto:info@candidtarget.edu.ng" style={{ color: 'inherit' }}>info@candidtarget.edu.ng</a><br />
                      <a href="mailto:admissions@candidtarget.edu.ng" style={{ color: 'inherit' }}>admissions@candidtarget.edu.ng</a>
                    </span>
                  </div>
                </li>

                <li className="contact-card-item">
                  <div className="contact-card-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '0.2rem' }}>Office Hours</strong>
                    <span style={{ color: '#CBD5E1', fontSize: '0.92rem' }}>
                      Monday – Friday: 7:45 AM – 4:30 PM<br />
                      Saturday: 8:30 AM – 1:00 PM (By Appointment)
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Contact Form Panel */}
            <div className="contact-form-panel">
              <span className="section-eyebrow">Message Us Directly</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Send an Official Message</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Fill out the fields below and our front office will route your correspondence directly to the appropriate department.
              </p>

              {/* Success Confirmation Banner */}
              {isSubmitted && (
                <div className="form-success-banner show" id="contactSuccessBanner" role="alert">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p style={{ fontSize: '0.88rem', margin: 0 }}>
                      Thank you for writing to Candid Target Secondary School. Your inquiry has been routed to the appropriate department and a representative will follow up with you promptly.
                    </p>
                  </div>
                </div>
              )}

              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contactName" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className={`form-control ${errors.contactName ? 'is-invalid' : ''}`}
                    placeholder="e.g. Dr. Ngozi Balogun"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                  {errors.contactName && (
                    <div className="form-error show" id="contactNameErr">
                      {errors.contactName}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`}
                    placeholder="ngozi.b@example.com"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                  {errors.contactEmail && (
                    <div className="form-error show" id="contactEmailErr">
                      {errors.contactEmail}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject / Purpose of Contact <span className="required">*</span>
                  </label>
                  <select
                    id="contactSubject"
                    className={`form-control ${errors.contactSubject ? 'is-invalid' : ''}`}
                    value={formData.contactSubject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select subject category...</option>
                    <option value="Admissions &amp; Enrollment">Admissions &amp; Enrollment</option>
                    <option value="Schedule Campus Tour">Schedule Campus Tour</option>
                    <option value="Student Transcripts &amp; Records">Student Transcripts &amp; Records</option>
                    <option value="Tuition &amp; Payment Inquiries">Tuition &amp; Payment Inquiries</option>
                    <option value="Career &amp; Faculty Opportunities">Career &amp; Faculty Opportunities</option>
                    <option value="General Inquiries">General Inquiries</option>
                  </select>
                  {errors.contactSubject && (
                    <div className="form-error show" id="contactSubjectErr">
                      {errors.contactSubject}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage" className="form-label">
                    Your Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    className={`form-control ${errors.contactMessage ? 'is-invalid' : ''}`}
                    rows="5"
                    placeholder="Write your detailed inquiry or message here (minimum 10 characters)..."
                    value={formData.contactMessage}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.contactMessage && (
                    <div className="form-error show" id="contactMessageErr">
                      {errors.contactMessage}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location Interactive Map Frame */}
      <section className="section section-soft" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">Location &amp; Directions</span>
            <h2>Campus Location Map</h2>
            <p>Conveniently located within a serene, secure, and easily accessible academic estate.</p>
          </div>

          <div className="map-frame">
            <div className="map-placeholder-content">
              <div className="map-pin">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ color: '#FFF', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
                Candid Target Secondary School Campus
              </h3>
              <p style={{ color: '#CBD5E1', maxWidth: '550px', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Plot 12, Scholastic Boulevard, Off Academy Way, Expressway Corridor. Equipped with dedicated visitor parking and gated security checkpoints.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                  href="https://maps.google.com/?q=Candid+Target+Secondary+School"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Open in Google Maps →
                </a>
                <button
                  type="button"
                  onClick={() => setDirectionsModalOpen(true)}
                  className="btn btn-outline-white btn-sm"
                >
                  Get Driving Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving Directions Dialog */}
      {directionsModalOpen && (
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
          onClick={() => setDirectionsModalOpen(false)}
        >
          <div
            style={{
              background: 'var(--color-white)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '520px',
              width: '100%',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-xl)',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--color-navy)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', margin: 0 }}>
                Driving Directions to Campus
              </h3>
            </div>
            <ol style={{ paddingLeft: '1.25rem', color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              <li>From Expressway Junction, head north along <strong>Academy Way</strong> (approx. 1.2 km).</li>
              <li>Turn right at the roundabout onto <strong>Candid Target Boulevard</strong>.</li>
              <li>Continue straight past the botanical roundabout for 400 meters.</li>
              <li>Stop at the <strong>Main Security Gate (Gate 1)</strong> for visitor verification and visitor parking pass.</li>
            </ol>
            <button
              onClick={() => setDirectionsModalOpen(false)}
              className="btn btn-navy"
              style={{ width: '100%' }}
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
