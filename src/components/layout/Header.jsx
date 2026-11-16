import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect on header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open & handle Escape key
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="site-topbar">
        <div className="container topbar-content">
          <div className="topbar-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Admissions Hotline: <a href="tel:+2348031234567" style={{ color: 'inherit' }}>+234 (0) 803 123 4567</a></span>
          </div>
          <div className="topbar-links">
            <span className="topbar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:admissions@candidtarget.edu.ng" style={{ color: 'inherit' }}>admissions@candidtarget.edu.ng</a>
            </span>
            <span className="topbar-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Mon – Fri: 7:45 AM – 4:00 PM
            </span>
          </div>
        </div>
      </aside>

      {/* Sticky Header Navigation */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="site-nav" aria-label="Main Navigation">
            {/* Logo */}
            <Link to="/" className="brand-logo" aria-label="Candid Target Secondary School Home">
              <div className="logo-crest">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-title">Candid Target</span>
                <span className="logo-subtitle">Secondary School</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/academics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Admissions
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Action Buttons & Hamburger Toggle */}
            <div className="nav-actions">
              <Link to="/admissions" className="btn btn-primary btn-sm">
                Apply Now
              </Link>
              <button
                className="menu-toggle"
                id="menuToggle"
                aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-drawer ${isMenuOpen ? 'is-open' : ''}`}
        id="mobileDrawer"
        onClick={(e) => {
          if (e.target.id === 'mobileDrawer') {
            closeMenu();
          }
        }}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.1rem' }}>Menu</span>
            <button
              id="closeMenuBtn"
              onClick={closeMenu}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-navy)', padding: '5px' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} end>
            Home <span>→</span>
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
            About Us <span>→</span>
          </NavLink>
          <NavLink to="/academics" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
            Academics <span>→</span>
          </NavLink>
          <NavLink to="/admissions" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
            Admissions <span>→</span>
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
            Contact <span>→</span>
          </NavLink>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/admissions" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%' }}>
              Apply for 2026/2027
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
