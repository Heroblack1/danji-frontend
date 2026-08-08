import { useEffect, useState } from "react";
import React from "react";
import danji from "./assets/logo.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

const pricingPlans = [
  {
    id: 1,
    title: "Data Annotation",
    price: "Starting at $12/hr per Agent",
    description:
      "High-quality image, text, audio, and video annotation tailored to your AI projects.",
    features: [
      "Image & Video Annotation",
      "Text & NLP Labeling",
      "Quality Assurance",
      "Fast Delivery",
      "Dedicated Support",
    ],
    button: "Get a Quote",
    featured: false,
  },
  {
    id: 2,
    title: "AI Chatbots",
    price: "Starting at $1,500",
    description:
      "Custom AI chatbots that automate customer support and business operations.",
    features: [
      "Custom AI Chatbot",
      "Website Integration",
      "API Integration",
      "Training & Deployment",
      "30 Days Support",
    ],
    button: "Get Started",
    featured: true,
  },
  {
    id: 3,
    title: "Software Development",
    price: "Custom Pricing",
    description:
      "Scalable web and mobile applications built specifically for your business.",
    features: [
      "Web Applications",
      "Mobile Applications",
      "Cloud Deployment",
      "Maintenance",
      "Project Consultation",
    ],
    button: "Contact Us",
    featured: false,
  },
];

function Pricing() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Change navbar appearance after scrolling
      setScrolled(currentScrollY > 30);

      // Keep navbar visible at the very top
      if (currentScrollY <= 80) {
        setShowNavbar(true);
      }

      // User is scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      // User is scrolling up
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="pricing-section" id="pricing">
      <nav
        className={`nxnav ${
          showNavbar ? "nxnav-visible" : "nxnav-hidden"
        } ${scrolled ? "nxnav-scrolled" : ""}`}
      >
        {/* LOGO */}
        <button
          className="nxnav-logo"
          onClick={() => navigate("/")}
          aria-label="Home"
        >
          <img src={danji} alt="Company Logo" className="nxnav-logo-image" />
        </button>

        {/* NAVIGATION */}
        <div className="nxnav-menu">
          {/* SERVICES */}
          <div className="nxnav-dropdown">
            <button
              className={`nxnav-item ${
                location.pathname.startsWith("/service") ? "nxnav-active" : ""
              }`}
            >
              Services
              <span className="nxnav-chevron">⌄</span>
            </button>

            <div className="nxnav-dropdown-menu">
              <Link className="nxnav-dropdown-link" to="/service/aiChatbot">
                <span className="nxnav-icon">✦</span>
                <span>
                  <strong>AI Chatbots</strong>
                  <small>Intelligent business automation</small>
                </span>
              </Link>

              <Link
                className="nxnav-dropdown-link"
                to="/service/softwareDevelopment"
              >
                <span className="nxnav-icon">⌘</span>
                <span>
                  <strong>Software Development</strong>
                  <small>Custom digital solutions</small>
                </span>
              </Link>

              <Link
                className="nxnav-dropdown-link"
                to="/service/dataAnnotation"
              >
                <span className="nxnav-icon">◆</span>
                <span>
                  <strong>Data Annotation</strong>
                  <small>High-quality AI training data</small>
                </span>
              </Link>
            </div>
          </div>

          {/* NORMAL LINKS */}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `nxnav-item ${isActive ? "nxnav-active" : ""}`
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nxnav-item ${isActive ? "nxnav-active" : ""}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nxnav-item ${isActive ? "nxnav-active" : ""}`
            }
          >
            About
          </NavLink>

          {/* CTA */}
          <button className="nxnav-cta" onClick={() => navigate("/getStarted")}>
            <span>Get Started</span>
            <span className="nxnav-arrow">→</span>
          </button>
        </div>
      </nav>
      <div className="pricing-header">
        <h2>Our Pricing</h2>
        <p>
          Flexible pricing designed to meet your business needs. Whether you're
          building AI solutions or custom software, we've got you covered.
        </p>
      </div>

      <div className="pricing-container">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
          >
            {plan.featured && (
              <span className="popular-badge">Most Popular</span>
            )}

            <h3>{plan.title}</h3>

            <h4>{plan.price}</h4>

            <p>{plan.description}</p>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>

            <button onClick={() => navigate("/getStarted")}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <footer className="ptx-footer">
        <div className="ptx-footer-glow"></div>

        <div className="ptx-footer-container">
          {/* BRAND */}
          <div className="ptx-footer-brand">
            <div className="ptx-footer-brand-name">
              <span className="ptx-footer-dot"></span>
              DanjiTech
            </div>

            <p>
              Building intelligent AI solutions, scalable software, and
              high-quality data annotation services for modern businesses.
            </p>

            <button
              className="ptx-footer-cta"
              onClick={() => navigate("/getStarted")}
            >
              Start a Project
              <span>→</span>
            </button>
          </div>

          {/* COMPANY */}
          <div className="ptx-footer-column">
            <h3>Company</h3>

            <a href="/">Home</a>

            <a href="/about">About Us</a>

            <a href="/pricing">Pricing</a>

            <a href="/contact">Contact</a>
          </div>

          {/* SERVICES */}
          <div className="ptx-footer-column">
            <h3>Services</h3>

            <a href="#chatbots">AI Chatbots</a>

            <a href="#software">Software Development</a>

            <a href="#annotation">Data Annotation</a>

            <a href="/getStarted">Get Started</a>
          </div>

          {/* CONTACT */}
          <div className="ptx-footer-column ptx-footer-contact">
            <h3>Get in touch</h3>

            <a href="mailto:admin@danjitech.com">admin@danjitech.com</a>

            <a href="tel:+2349030877641">+234 903 087 7641</a>

            <div className="ptx-footer-socials">
              <a href="#" aria-label="GitHub">
                GH
              </a>

              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="X">
                X
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}

        <div className="ptx-footer-bottom">
          <p>© {new Date().getFullYear()} DanjiTech. All rights reserved.</p>

          <div className="ptx-footer-bottom-links">
            <a href="#">Privacy</a>

            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Pricing;
