import React, { useEffect, useRef, useState } from "react";

import danji from "./assets/logo.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Freelancer Clone",
    category: "Web Application",
    description:
      "A modern freelance marketplace platform inspired by the workflow of leading freelancing platforms. The application was designed to provide a smooth and intuitive experience for users exploring services, projects, and professional opportunities.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "Component-Based Architecture",
    ],
    video:
      "https://res.cloudinary.com/dbpykrfeg/video/upload/v1787473549/freelancer_clone_j5srcy.mp4",
  },

  {
    id: 2,
    title: "Demo Application",
    category: "Software Application",
    description:
      "A responsive software application built with a strong focus on clean user experience, structured interfaces, and smooth interaction. The project demonstrates the use of reusable components and modern frontend development practices to create a polished digital product.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "UI/UX Implementation",
      "Responsive Web Design",
    ],
    video:
      "https://res.cloudinary.com/dbpykrfeg/video/upload/v1774990489/demo_rgusen.mp4",
  },

  {
    id: 3,
    title: "Lastank",
    category: "Web Platform",
    description:
      "Lastank is a custom-built web platform developed to deliver a modern and engaging digital experience. The project combines thoughtful interface design with responsive development to ensure that the application performs smoothly across different devices and screen sizes.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "Modern Web Development",
    ],
    video:
      "https://res.cloudinary.com/dbpykrfeg/video/upload/v1787473504/lastank_ix9v1q.mp4",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const revealRefs = useRef([]);
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sd-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
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
      {/* HERO SECTION */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="portfolio-tag">OUR WORK</span>

          <h1>
            Turning Ideas Into
            <span> Digital Solutions.</span>
          </h1>

          <p>
            Explore a selection of software applications and digital products
            developed by DanjiTech. Each project reflects our commitment to
            clean design, modern technology, and practical solutions.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="portfolio-section">
        <div className="portfolio-heading">
          <span>FEATURED PROJECTS</span>

          <h2>Software Built for Real-World Experiences</h2>

          <p>
            From interactive web applications to fully responsive digital
            platforms, our projects are built with modern technologies and a
            focus on usability.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className="portfolio-card"
              key={project.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="portfolio-preview">
                <video
                  src={project.video}
                  muted
                  preload="metadata"
                  className="preview-video"
                />

                <div className="preview-overlay">
                  <button
                    className="play-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span className="play-icon">▶</span>
                    View Project
                  </button>
                </div>
              </div>

              <div className="portfolio-card-content">
                <div className="project-category">{project.category}</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <button
                  className="view-project-link"
                  onClick={() => setSelectedProject(project)}
                >
                  Watch Project Demo
                  <span>↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div>
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>Let's Build Something Amazing Together.</h2>

          <p>
            Whether you need a custom web application, AI-powered solution, or
            software product, DanjiTech can help bring your idea to life.
          </p>

          <a href="/getStarted" className="portfolio-cta-btn">
            Start Your Project
            <span>→</span>
          </a>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {selectedProject && (
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div
            className="video-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={closeModal}
              aria-label="Close video"
            >
              ×
            </button>

            <div className="modal-header">
              <div>
                <span>{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
              </div>
            </div>

            <div className="video-container">
              <video
                src={selectedProject.video}
                controls
                autoPlay
                className="portfolio-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default Portfolio;
