import React, { useState, useEffect, useRef } from 'react';
import Button from '../../Reusable/Button/Button';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

import './LandingPage.css';
import Contactus from '../Contectus/Contactus';

interface LandingPageProps {
  onGetStarted: () => void;
}

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  /* Intersection observer for stats counter animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const revenue = useCounter(98, 2000, statsVisible);
  const claims = useCounter(500, 2000, statsVisible);
  const clients = useCounter(200, 2000, statsVisible);
  const years = useCounter(10, 1500, statsVisible);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="landing-page">
      {/* ── Background Decorations ── */}
      <div className="landing-bg-gradient" />
      <div className="landing-bg-circles">
        <div className="bg-circle circle-1" />
        <div className="bg-circle circle-2" />
        <div className="bg-circle circle-3" />
      </div>

      {/* ══════════ NAVIGATION ══════════ */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <svg className="nav-logo-svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#navLogo)" />
              <path d="M18 9v18M9 18h18" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="navLogo" x1="2" y1="2" x2="34" y2="34">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
            <span className="nav-title">Revian Globel</span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#why-us" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <Button variant="primary" size="sm" onClick={onGetStarted}>
              Open Dashboard
            </Button>
            <button className="nav-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              TRUSTED RCM PARTNER
            </div>

            <h1 className="hero-title">
              Unravel the Complexities of{' '}
              <span className="hero-highlight">Revenue Cycle Management</span>
            </h1>

            <p className="hero-subtitle">
              We understand the frustrations of RCM all too well. That's why we've made it our mission
              to streamline your billing operations with cutting-edge technology, proven expertise, and
              a collaborative approach — so you can focus on delivering exceptional patient care.
            </p>

            <div className="hero-buttons">
              <Button variant="primary" size="lg" onClick={onGetStarted}>
                Get Started Today
              </Button>
              <Button variant="secondary" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Solutions
              </Button>
            </div>

            <div className="hero-trust-row">
              <div className="trust-item">
                <span className="trust-icon">                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="trust-text">200+ Healthcare Providers</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="trust-text">HIPAA Compliant</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="trust-icon">
                  
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3H7v6a5 5 0 0010 0V3z" />
                    <path d="M5 3v2a7 7 0 0014 0V3" />
                    <path d="M12 17v4" />
                    <path d="M8 21h8" />
                  </svg>
                </span>
                <span className="trust-text">Industry Recognized</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-main-card">
              <div className="dashboard-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="mockup-title">Revenue Dashboard</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-chart">
                    <div className="chart-bar" style={{ height: '40%' }} />
                    <div className="chart-bar chart-bar-accent" style={{ height: '70%' }} />
                    <div className="chart-bar" style={{ height: '55%' }} />
                    <div className="chart-bar chart-bar-accent" style={{ height: '90%' }} />
                    <div className="chart-bar" style={{ height: '45%' }} />
                    <div className="chart-bar chart-bar-accent" style={{ height: '75%' }} />
                    <div className="chart-bar" style={{ height: '60%' }} />
                    <div className="chart-bar chart-bar-accent" style={{ height: '95%' }} />
                  </div>
                  <div className="mockup-stats-row">
                    <div className="mockup-stat-pill"><span className="pill-dot pill-green" />Collected: $2.4M</div>
                    <div className="mockup-stat-pill"><span className="pill-dot pill-yellow" />Pending: $340K</div>
                    <div className="mockup-stat-pill"><span className="pill-dot pill-red" />Denied: $28K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="hero-float-card float-card-revenue">
              <span className="float-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
              </span>
              <div>
                <div className="float-card-label">Monthly Revenue</div>
                <div className="float-card-value">$2.4M</div>
              </div>
            </div>
            <div className="hero-float-card float-card-claims">
              <span className="float-card-icon">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="12" width="4" height="8" rx="1" />
                  <rect x="9" y="8" width="4" height="12" rx="1" />
                  <rect x="15" y="4" width="4" height="16" rx="1" />
                </svg>
              </span>
              <div>
                <div className="float-card-label float-card-label-claims">Clean Claim Rate</div>
                <div className="float-card-value text-green">98.5%</div>
              </div>
            </div>
            <div className="hero-float-card float-card-growth">
              <span className="float-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 13 8 17 8 7 22 11 14 7 14 13 2" />
                </svg>
              </span>
              <div>
                <div className="float-card-label">Faster Collections</div>
                <div className="float-card-value text-blue">3× Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUSTED BY / PARTNERS ══════════ */}
      <section className="trusted-section">
        <div className="section-container">
          <p className="trusted-label">Trusted by Healthcare Organizations Nationwide</p>
          <div className="trusted-logos">
            <div className="trusted-logo-item">
              <span className="trusted-logo-svg hospital">

                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M12 7v10M7 12h10" />
                </svg>
              </span>
              Regional Hospitals
            </div>
            <div className="trusted-logo-item">
              <span className="trusted-logo-svg health-system">
                
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 8h8v8H8z" />
                </svg>
              </span>
              Health Systems
            </div>
            <div className="trusted-logo-item">
              <span className="trusted-logo-svg physician">
                {/* Physician SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 20v-2a6 6 0 0112 0v2" />
                </svg>
              </span>
              Physician Groups
            </div>
            <div className="trusted-logo-item">
              <span className="trusted-logo-svg lab">
                {/* Lab SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 2v7l-4 8a5 5 0 0010 0l-4-8V2" />
                </svg>
              </span>
              Labs & Imaging
            </div>
            <div className="trusted-logo-item">
              <span className="trusted-logo-svg behavioral">
                {/* Brain SVG for Behavioral Health */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 017 7v2a7 7 0 01-7 7" />
                  <path d="M12 2a7 7 0 00-7 7v2a7 7 0 007 7" />
                </svg>
              </span>
              Behavioral Health
            </div>
            <div className="trusted-logo-item">
              <span className="trusted-logo-svg community">
                {/* Home SVG for Community Health */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12l9-9 9 9" />
                  <path d="M9 21V9h6v12" />
                </svg>
              </span>
              Community Health
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES / SOLUTIONS ══════════ */}
      <section className="services-section" id="services">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Our Solutions</div>
            <h2 className="section-title">
              Comprehensive Revenue Cycle{' '}
              <span className="hero-highlight">Management Solutions</span>
            </h2>
            <p className="section-subtitle">
              Our expertise, your advantage: industry-leading RCM solutions tailored to your
              organization's unique needs.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              </div>
              <h3 className="service-title">Medical Billing Services</h3>
              <p className="service-description">
                End-to-end billing solutions including charge capture, claim submission,
                payment posting, and patient billing to maximize your revenue.
              </p>
              <a href="/medical-billing-services" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="service-title">Denial Management</h3>
              <p className="service-description">
                Proactive denial prevention, rapid appeals processing, and root-cause
                analysis to recover lost revenue and reduce future denials.
              </p>
              <a href="/denial-management" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-purple">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="service-title">Claims Processing</h3>
              <p className="service-description">
                AI-powered claims scrubbing, electronic submission, and real-time
                tracking to ensure clean claims and faster reimbursements.
              </p>
              <a href="/claims-processing" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-cyan">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <h3 className="service-title">AR &amp; Collections</h3>
              <p className="service-description">
                Strategic AR follow-up, aged receivables management, and automated
                workflows to accelerate cash flow and reduce days in AR.
              </p>
              <a href="/ar-collections" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-amber">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <h3 className="service-title">Analytics &amp; Reporting</h3>
              <p className="service-description">
                Real-time dashboards, KPI tracking, and custom financial reports that
                provide actionable intelligence to drive growth.
              </p>
              <a href="/analytics" className="service-link">Learn More →</a>
            </div>

            <div className="service-card">
              <div className="service-icon service-icon-rose">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="service-title">Compliance &amp; Credentialing</h3>
              <p className="service-description">
                Stay compliant with HIPAA, payer regulations, and coding standards.
                We handle provider credentialing and enrollment seamlessly.
              </p>
              <a href="/compliance-credentialing" className="service-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ STATS COUNTER ══════════ */}
      <section className="stats-section" ref={statsRef}>
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-counter-card">
              <span className="stat-counter-value">{revenue}%</span>
              <span className="stat-counter-label">Clean Claim Rate</span>
              <span className="stat-counter-desc">Industry-leading first-pass acceptance</span>
            </div>
            <div className="stat-counter-card">
              <span className="stat-counter-value">{claims}K+</span>
              <span className="stat-counter-label">Claims Processed</span>
              <span className="stat-counter-desc">Monthly claims handled with precision</span>
            </div>
            <div className="stat-counter-card">
              <span className="stat-counter-value">{clients}+</span>
              <span className="stat-counter-label">Healthcare Clients</span>
              <span className="stat-counter-desc">Providers trusting us nationwide</span>
            </div>
            <div className="stat-counter-card">
              <span className="stat-counter-value">{years}+</span>
              <span className="stat-counter-label">Years of Excellence</span>
              <span className="stat-counter-desc">Decades of proven RCM expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="why-section" id="why-us">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">The Revian Globel Advantage</div>
            <h2 className="section-title">
              Why Leading Healthcare Organizations{' '}
              <span className="hero-highlight">Partner With Us</span>
            </h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>
              <h3 className="why-title">Customized RCM Approach</h3>
              <p className="why-description">
                Every organization is unique. We tailor our processes, technology, and team
                to align with your workflows, specialty, and financial goals.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">02</div>
              <h3 className="why-title">High-Performance Technology</h3>
              <p className="why-description">
                Our modern platform combines AI, automation, and deep integrations with your EHR.
                The result is a workflow that delivers real-time insights and predictable revenue.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">03</div>
              <h3 className="why-title">Dedicated Expert Teams</h3>
              <p className="why-description">
                Gain direct access to certified coders, billing specialists, and AR analysts
                who work as an extension of your team — available when you need them.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">04</div>
              <h3 className="why-title">Complete Transparency</h3>
              <p className="why-description">
                Real-time dashboards, detailed reporting, and open communication give you
                full visibility into every claim, payment, and financial metric.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">05</div>
              <h3 className="why-title">Revenue Reliability</h3>
              <p className="why-description">
                Consistent, predictable cash flow means you can focus on care delivery.
                Our strategies ensure you meet and exceed financial benchmarks.
              </p>
            </div>
            <div className="why-card">
              <div className="why-number">06</div>
              <h3 className="why-title">Regulatory Compliance</h3>
              <p className="why-description">
                Stay confident you're always up-to-date with changing regulations, payer rules,
                and coding standards — we handle the complexity so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-container">
          <div className="section-header">
            <div className="section-badge">Client Success</div>
            <h2 className="section-title">
              What Our <span className="hero-highlight">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Healthcare organizations nationwide trust us to transform their financial performance.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote className="testimonial-quote">
                "Since partnering with Revian Globel, we've seen a major increase in collections
                and a significant reduction in claim denials. They truly understand the complexities
                of healthcare billing."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JD</div>
                <div>
                  <div className="testimonial-name">Dr. James Davis</div>
                  <div className="testimonial-role">CFO, Regional Health System</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card testimonial-featured">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote className="testimonial-quote">
                "Revian Globel is not just a billing service — they're a true partner. Our AR has
                improved dramatically, collections are consistent, and we finally have complete
                visibility into our revenue cycle."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SR</div>
                <div>
                  <div className="testimonial-name">Sarah Rodriguez, MD</div>
                  <div className="testimonial-role">Medical Director, Multi-Specialty Group</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <blockquote className="testimonial-quote">
                "It's one of the best decisions we've ever made. Our first-pass claim rate is
                above industry standards, and the team is incredibly responsive."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MK</div>
                <div>
                  <div className="testimonial-name">Michael Kim</div>
                  <div className="testimonial-role">Administrator, Orthopedic Practice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA SECTION ══════════ */}
      <section className="cta-section" id="contact">
        <div className="section-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Transform Your Revenue Cycle?</h2>
              <p className="cta-subtitle">
                Talk to us today for a complimentary, no-obligation benchmark assessment.
                Discover how we can accelerate your cash flow and reduce administrative burdens.
              </p>
              <div className="cta-buttons">
                <Button variant="primary" size="lg" onClick={onGetStarted}>
                  Schedule a Consultation
                </Button>
                  <Button variant="secondary" size="lg" onClick={() => setContactOpen(true)}>
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="cta-visual">
              <div className="cta-stat">
                <span className="cta-stat-icon">
                  {/* Phone SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92V21a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 01-.45 2.11l-2.2 2.2a16.06 16.06 0 006.29 6.29l2.2-2.2a2 2 0 012.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <span className="cta-stat-text">Free Assessment</span>
              </div>
              <div className="cta-stat">
                <span className="cta-stat-icon">
                  {/* Lightning SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 13 8 17 8 7 22 11 14 7 14 13 2" />
                  </svg>
                </span>
                <span className="cta-stat-text">Fast Onboarding</span>
              </div>
              <div className="cta-stat">
                <span className="cta-stat-icon">
                  {/* Handshake SVG */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                    <path d="M16 3h2a2 2 0 012 2v6" />
                    <path d="M8 3H6a2 2 0 00-2 2v6" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </span>
                <span className="cta-stat-text">Dedicated Team</span>
              </div>
            </div>
          </div>
        </div>
          <Contactus   open={contactOpen} onClose={() => setContactOpen(false)} />
      </section>
      

      {/* ══════════ FOOTER ══════════ */}
      <footer className="landing-footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="footer-brand">
                <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                  <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#fLogo)" />
                  <path d="M18 9v18M9 18h18" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="fLogo" x1="2" y1="2" x2="34" y2="34">
                      <stop stopColor="#60a5fa" />
                      <stop offset="1" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="footer-brand-name">Revian Globel</span>
              </div>
              <p className="footer-brand-desc">
                Streamline your financial operations and improve profitability with
                our comprehensive RCM solutions.
              </p>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Solutions</h4>
              <a href="/medical-billing" className="footer-link">Medical Billing</a>
              <a href="/denial-management" className="footer-link">Denial Management</a>
              <a href="/claims-processing" className="footer-link">Claims Processing</a>
              <a href="/ar-collections" className="footer-link">AR &amp; Collections</a>
              <a href="/analytics" className="footer-link">Analytics</a>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Who We Serve</h4>
              <a href="/physician-groups" className="footer-link">Physician Groups</a>
              <a href="/health-systems" className="footer-link">Health Systems</a>
              <a href="/hospitals" className="footer-link">Hospitals</a>
              <a href="/labs-imaging" className="footer-link">Labs &amp; Imaging</a>
              <a href="/behavioral-health" className="footer-link">Behavioral Health</a>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-col-title">Company</h4>
              <a href="/about" className="footer-link">About Us</a>
              <a href="/careers" className="footer-link">Careers</a>
              <a href="/blog" className="footer-link">Blog</a>
              <a href="/contact" className="footer-link">Contact</a>
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 Revian Globel. All rights reserved.</p>
            <div className="footer-socials">
              <a href="https://linkedin.com" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://twitter.com" className="footer-social" aria-label="Twitter" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://facebook.com" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
