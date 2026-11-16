import React from 'react';
import { Link } from 'react-router-dom';

export default function PageBanner({ title, subtitle, breadcrumbTitle }) {
  return (
    <section className="page-banner">
      <div className="banner-pattern" aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="current">{breadcrumbTitle || title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
