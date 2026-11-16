import React, { useState } from 'react';
import PageBanner from '../components/common/PageBanner';

export default function AdmissionsPage() {
  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    classApplying: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    inquiryNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Accordion State (open question index, default open first)
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(prev => (prev === index ? -1 : index));
  };

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) {
      errs.studentName = "Please enter the prospective student's name.";
    }
    if (!formData.classApplying) {
      errs.classApplying = "Please select the class applying for.";
    }
    if (!formData.parentName.trim()) {
      errs.parentName = "Please enter the parent or guardian's full name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.parentEmail.trim() || !emailRegex.test(formData.parentEmail.trim())) {
      errs.parentEmail = "Please provide a valid email address.";
    }
    const digits = formData.parentPhone.replace(/[^\d+]/g, '');
    if (digits.length < 7) {
      errs.parentPhone = "Please provide a valid phone number.";
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
        studentName: '',
        classApplying: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        inquiryNotes: ''
      });
      // Scroll smoothly to the form banner
      const section = document.getElementById('inquiry-form-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

  const faqs = [
    {
      q: "When does the registration for 2026/2027 entrance examinations close?",
      a: "Registration for the main national entrance assessment closes on July 31, 2026. However, rolling supplementary assessments are conducted for mid-stream transfer scholars subject to seat availability in our class rosters."
    },
    {
      q: "What subjects are tested during the entrance assessment?",
      a: "Prospective Junior Secondary students are evaluated in Mathematics, English Comprehension & Grammar, Verbal/Quantitative Reasoning, and General Elementary Science. Senior Secondary candidates write papers matched to their chosen academic stream (Sciences, Commercial, or Arts)."
    },
    {
      q: "Does Candid Target Secondary School offer boarding facilities?",
      a: "Yes, we offer both Day and Full Boarding accommodations. Our modern hostels feature 24/7 security surveillance, resident housemasters, structured evening study hours, and hygienic dining services overseen by professional nutritionists."
    },
    {
      q: "How are merit scholarships awarded?",
      a: "The Founder’s Merit Scholarship is strictly performance-based. The top three scorers in our nationwide entrance examination are automatically interviewed by the Board of Governors for full or 50% tuition coverage for their three-year Junior cycle."
    }
  ];

  return (
    <main>
      {/* Page Banner */}
      <PageBanner
        title="Admissions &amp; Enrollment"
        subtitle="Your gateway to purposeful scholarship and leadership. Discover our streamlined application process."
        breadcrumbTitle="Admissions"
      />

      {/* Admission Process Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Clear Steps to Join</span>
            <h2>The 4-Step Admission Journey</h2>
            <p>We ensure a transparent, candid, and seamless experience for prospective scholars and their families.</p>
          </div>

          <div className="timeline-steps">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Inquiry &amp; Tour</h3>
              <p className="step-desc">
                Submit an online inquiry form, download the school prospectus, or book a guided tour around our academic campus.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Application Form</h3>
              <p className="step-desc">
                Purchase and complete the official admission application dossier with past academic transcripts and birth certification.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Exam &amp; Interview</h3>
              <p className="step-desc">
                Candidates sit for the Entrance Assessment (Math, English, General Aptitude) followed by a short candidate &amp; parent interview.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">Formal Enrollment</h3>
              <p className="step-desc">
                Successful applicants receive official admission offers, uniform fittings, boarding allocation, and induction pack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Criteria & Tuition Overview */}
      <section className="section section-soft">
        <div className="container">
          <div className="info-split-grid">
            {/* Entry Requirements */}
            <div className="criteria-box">
              <span className="section-eyebrow">Criteria</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Entry Requirements</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                We welcome candidates who exhibit intellectual curiosity, sound moral deportment, and eagerness to excel.
              </p>

              <div className="criteria-item">
                <div className="criteria-badge">✓</div>
                <div>
                  <strong style={{ color: 'var(--color-navy)' }}>Junior Secondary (JSS 1):</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Candidate must have successfully completed Primary 6 (or equivalent) and be at least 10–11 years old by September of the admission year.
                  </p>
                </div>
              </div>

              <div className="criteria-item">
                <div className="criteria-badge">✓</div>
                <div>
                  <strong style={{ color: 'var(--color-navy)' }}>Transfer Candidates (JSS 2 &amp; SSS 1):</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Official continuous assessment reports and cumulative transcripts from the previous accredited secondary school, plus a letter of good conduct.
                  </p>
                </div>
              </div>

              <div className="criteria-item">
                <div className="criteria-badge">✓</div>
                <div>
                  <strong style={{ color: 'var(--color-navy)' }}>Documentation Needed:</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    4 recent passport photographs, medical immunization report, certified birth certificate, and proof of residence.
                  </p>
                </div>
              </div>
            </div>

            {/* Tuition & Merit Scholarships */}
            <div className="criteria-box">
              <span className="section-eyebrow">Investment &amp; Support</span>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Tuition &amp; Merit Scholarships</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Candid Target Secondary School offers transparent, competitive tuition that reflects the quality of our academic instruction and campus facilities.
              </p>

              <div style={{ background: 'var(--color-gray-soft)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', color: 'var(--color-navy)' }}>Tuition Breakdown Includes:</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  Instruction, laboratory usage, digital library access, sports coaching, and health center coverage. Flexible termly payment schedules are available.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-gold)', paddingLeft: '1.25rem' }}>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>🏆 Founder's Merit Scholarship</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  Up to <strong>100% full tuition waivers</strong> and partial grants are awarded annually to candidates scoring in the top 3% of our Nationwide Entrance Examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Admission Inquiry Form */}
      <section className="section" id="inquiry-form-section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-header">
            <span className="section-eyebrow">Start Here</span>
            <h2>Online Admission Inquiry Form</h2>
            <p>Fill out the preliminary inquiry below. Our admissions registrar will reach out within 24 business hours.</p>
          </div>

          <div className="form-wrapper">
            {/* Success Feedback Banner */}
            {isSubmitted && (
              <div className="form-success-banner show" id="admissionSuccessBanner" role="alert">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <div>
                  <strong>Inquiry Received Successfully!</strong>
                  <p style={{ fontSize: '0.88rem', margin: 0 }}>
                    Thank you for your interest in Candid Target Secondary School. An admissions counselor has been assigned to your inquiry and will contact you via email/phone shortly.
                  </p>
                </div>
              </div>
            )}

            <form id="admissionInquiryForm" onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {/* Student Full Name */}
                <div className="form-group">
                  <label htmlFor="studentName" className="form-label">
                    Student Full Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    className={`form-control ${errors.studentName ? 'is-invalid' : ''}`}
                    placeholder="e.g. Samuel K. Adebayo"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                  />
                  {errors.studentName && (
                    <div className="form-error show" id="studentNameErr">
                      {errors.studentName}
                    </div>
                  )}
                </div>

                {/* Class Applying For */}
                <div className="form-group">
                  <label htmlFor="classApplying" className="form-label">
                    Class Applying For <span className="required">*</span>
                  </label>
                  <select
                    id="classApplying"
                    className={`form-control ${errors.classApplying ? 'is-invalid' : ''}`}
                    value={formData.classApplying}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select entry class...</option>
                    <option value="JSS 1">Junior Secondary 1 (JSS 1)</option>
                    <option value="JSS 2">Junior Secondary 2 (Transfer)</option>
                    <option value="JSS 3">Junior Secondary 3 (Transfer)</option>
                    <option value="SSS 1">Senior Secondary 1 (Science / Commercial / Arts)</option>
                    <option value="SSS 2">Senior Secondary 2 (Transfer)</option>
                  </select>
                  {errors.classApplying && (
                    <div className="form-error show" id="classApplyingErr">
                      {errors.classApplying}
                    </div>
                  )}
                </div>
              </div>

              {/* Parent Name */}
              <div className="form-group">
                <label htmlFor="parentName" className="form-label">
                  Parent / Guardian Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="parentName"
                  className={`form-control ${errors.parentName ? 'is-invalid' : ''}`}
                  placeholder="e.g. Chief &amp; Mrs. O. Adebayo"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />
                {errors.parentName && (
                  <div className="form-error show" id="parentNameErr">
                    {errors.parentName}
                  </div>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                {/* Parent Email */}
                <div className="form-group">
                  <label htmlFor="parentEmail" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="parentEmail"
                    className={`form-control ${errors.parentEmail ? 'is-invalid' : ''}`}
                    placeholder="parent@example.com"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    required
                  />
                  {errors.parentEmail && (
                    <div className="form-error show" id="parentEmailErr">
                      {errors.parentEmail}
                    </div>
                  )}
                </div>

                {/* Parent Phone */}
                <div className="form-group">
                  <label htmlFor="parentPhone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="parentPhone"
                    className={`form-control ${errors.parentPhone ? 'is-invalid' : ''}`}
                    placeholder="+234 803 000 0000"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                  />
                  {errors.parentPhone && (
                    <div className="form-error show" id="parentPhoneErr">
                      {errors.parentPhone}
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label htmlFor="inquiryNotes" className="form-label">
                  Additional Questions or Student Interests (Optional)
                </label>
                <textarea
                  id="inquiryNotes"
                  className="form-control"
                  rows="3"
                  placeholder="Tell us about the candidate's special talents, boarding interest, or any questions..."
                  value={formData.inquiryNotes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Submit Admission Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section section-soft">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="section-header">
            <span className="section-eyebrow">Common Queries</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers regarding admissions deadlines, entrance examinations, and boarding life.</p>
          </div>

          <div className="accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`accordion-item ${isOpen ? 'is-active' : ''}`}>
                  <button
                    type="button"
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="accordion-icon">{isOpen ? '×' : '+'}</span>
                  </button>
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: isOpen ? '250px' : '0px',
                      padding: isOpen ? '0 1.5rem 1.35rem 1.5rem' : '0 1.5rem'
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
