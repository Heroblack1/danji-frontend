import React, { useEffect, useState } from "react";
import imgeSrc from "./assets/Gemini_Generated_Image_e2cvxve2cvxve2cv.png";
import imgeSrc1 from "./assets/Gemini_Generated_Image_8qniiz8qniiz8qni.jpg";
import imgeSrc2 from "./assets/Gemini_Generated_Image_zheoyxzheoyxzheo.jpg";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import { Link, useNavigate } from "react-router-dom";

const Hompage = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="overall">
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
              <button className="nxnav-item">
                Services
                <span className="nxnav-chevron">⌄</span>
              </button>

              <div className="nxnav-dropdown-menu">
                <Link className="nxnav-dropdown-link" to="/aiChatbot">
                  <span className="nxnav-icon">✦</span>
                  <span>
                    <strong>AI Chatbots</strong>
                    <small>Intelligent business automation</small>
                  </span>
                </Link>

                <Link
                  to="softwareDevelopment"
                  className="nxnav-dropdown-link"
                  href="#chatbots"
                  className="nxnav-dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/softwareDevelopment");
                  }}
                >
                  <span className="nxnav-icon">⌘</span>
                  <span>
                    <strong>Software Development</strong>
                    <small>Custom digital solutions</small>
                  </span>
                </Link>

                <Link
                  to="dataAnnotation"
                  className="nxnav-dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/dataAnnotation");
                  }}
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
            <button className="nxnav-item" onClick={() => navigate("/pricing")}>
              Pricing
            </button>

            <button className="nxnav-item" onClick={() => navigate("/contact")}>
              Contact
            </button>

            <button className="nxnav-item" onClick={() => navigate("/about")}>
              About
            </button>

            {/* CTA */}
            <button
              className="nxnav-cta"
              onClick={() => navigate("/getStarted")}
            >
              <span>Get Started</span>
              <span className="nxnav-arrow">→</span>
            </button>
          </div>
        </nav>
        <div className="dt-hero">
          {/* Animated background */}
          <div className="dt-hero-grid"></div>

          <div className="dt-hero-orb dt-orb-one"></div>
          <div className="dt-hero-orb dt-orb-two"></div>
          <div className="dt-hero-orb dt-orb-three"></div>

          {/* Animated AI visual */}
          <div className="dt-ai-visual">
            <div className="dt-ai-ring dt-ring-one"></div>
            <div className="dt-ai-ring dt-ring-two"></div>
            <div className="dt-ai-ring dt-ring-three"></div>

            <div className="dt-ai-core">
              <div className="dt-ai-core-inner">
                <span>AI</span>
              </div>
            </div>

            {/* Nodes */}
            <div className="dt-ai-node dt-node-one"></div>
            <div className="dt-ai-node dt-node-two"></div>
            <div className="dt-ai-node dt-node-three"></div>
            <div className="dt-ai-node dt-node-four"></div>
            <div className="dt-ai-node dt-node-five"></div>

            {/* Connection lines */}
            <div className="dt-ai-line dt-line-one"></div>
            <div className="dt-ai-line dt-line-two"></div>
            <div className="dt-ai-line dt-line-three"></div>
            <div className="dt-ai-line dt-line-four"></div>

            {/* Floating cards */}
            <div className="dt-floating-card dt-card-one">
              <span className="dt-card-icon">✦</span>
              <div>
                <strong>AI Chatbots</strong>
                <small>Always learning</small>
              </div>
            </div>

            <div className="dt-floating-card dt-card-two">
              <span className="dt-card-icon">◆</span>
              <div>
                <strong>Data</strong>
                <small>99.8% accuracy</small>
              </div>
            </div>

            <div className="dt-floating-card dt-card-three">
              <span className="dt-card-icon">⌘</span>
              <div>
                <strong>Software</strong>
                <small>Built to scale</small>
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="dt-hero-content">
            <span className="dt-hero-label">
              <span></span>
              AI • SOFTWARE • DATA
            </span>

            <h1>
              AI That Works.
              <br />
              <span>Software That Scales.</span>
              <br />
              Data You Can Trust.
            </h1>

            <p>
              We help businesses automate customer interactions, build modern
              web applications, and create high-quality datasets for AI systems.
            </p>

            <div className="dt-hero-services">
              <div>
                <span>✦</span>
                AI Chatbot Solutions
              </div>

              <div>
                <span>⌘</span>
                Custom Software Development
              </div>

              <div>
                <span>◆</span>
                Data Annotation Services
              </div>
            </div>

            <div className="dt-hero-buttons">
              <button
                className="dt-hero-primary"
                onClick={() => navigate("/getStarted")}
              >
                Get Started
                <span>→</span>
              </button>

              <button
                className="dt-hero-secondary"
                onClick={() => navigate("/contact")}
              >
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="dt-scroll">
            <span></span>
            Scroll to explore
          </div>
        </div>

        {/* <section className="nice">
          <section className="container"> */}
        <section className="chatbot-section reveal">
          <div className="glow glow1"></div>
          <div className="glow glow2"></div>

          <div className="container chatbot-container">
            <div className="chatbot-content">
              <span className="section-tag">AI Powered Solutions</span>

              <h2 className="chatbot-title">
                AI Chatbot
                <span> Solutions</span>
              </h2>

              <p className="chatbot-description">
                Automate customer support, increase conversions and provide
                exceptional customer experiences with intelligent AI chatbots.
              </p>

              <div className="feature-grid">
                <div className="feature-card">
                  <h3>Features</h3>

                  <ul>
                    <li>Lead Generation Bots</li>
                    <li>FAQ Assistants</li>
                    <li>Appointment Booking</li>
                    <li>Website Integration</li>
                  </ul>
                </div>

                <div className="feature-card">
                  <h3>Benefits</h3>

                  <ul>
                    <li>24/7 Customer Support</li>
                    <li>Faster Response Times</li>
                    <li>Lower Operational Costs</li>
                    <li>Higher Customer Satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="floating-btn">Get Started</button>
          </div>
          {/* <div className="imageContainer">Int @#
            <img src={imgeSrc} alt="" className="image" />
            <button className="butt">Book a free Demo</button>
          </div> */}
        </section>

        {/* </section>
        </section> */}

        <section className="annotation-section reveal">
          <div className="annotation-glow glow-left"></div>
          <div className="annotation-glow glow-right"></div>

          <div className="annotation-container">
            <div className="annotation-image">
              <div className="annotation-image-border">
                <img
                  src={imgeSrc2}
                  alt="Data Annotation"
                  className="annotation-img"
                />
              </div>
            </div>

            <div className="annotation-content">
              <span className="annotation-tag">AI Training Data</span>

              <h2 className="annotation-title">
                Data
                <span> Annotation Services</span>
              </h2>

              <p className="annotation-description">
                High-quality data annotation services that power Artificial
                Intelligence, Machine Learning, and Computer Vision systems with
                accurate training data.
              </p>

              <div className="annotation-grid">
                <div className="annotation-card">
                  <h3>Annotation</h3>

                  <ul>
                    <li>Image Annotation</li>
                    <li>Video Evaluation</li>
                    <li>Text Annotation</li>
                    <li>Object Detection</li>
                  </ul>
                </div>

                <div className="annotation-card">
                  <h3>Quality</h3>

                  <ul>
                    <li>Classification Tasks</li>
                    <li>Data Categorization</li>
                    <li>Quality Assurance</li>
                    <li>Fast Turnaround</li>
                  </ul>
                </div>
              </div>

              <button className="annotation-btn">Get Started →</button>
            </div>
          </div>
        </section>

        <section className="software-section reveal">
          <div className="glow glow1"></div>
          <div className="glow glow2"></div>

          <div className="software-container">
            <div className="software-content">
              <span className="section-tag">Software Engineering</span>

              <h2 className="software-title">
                Custom
                <span> Software Development</span>
              </h2>

              <p className="software-description">
                We design and develop modern, scalable and responsive software
                tailored to your business needs.
              </p>

              <div className="software-grid">
                <div className="software-card">
                  <h3>Our Services</h3>

                  <ul>
                    <li>Business Websites</li>
                    <li>Web Applications</li>
                    <li>Dashboard Systems</li>
                    <li>Landing Pages</li>
                  </ul>
                </div>

                <div className="software-card">
                  <h3>Development</h3>

                  <ul>
                    <li>Frontend Development</li>
                    <li>Backend APIs</li>
                    <li>API Integration</li>
                    <li>Website Maintenance</li>
                  </ul>
                </div>
              </div>

              <button className="software-btn">Get Started →</button>
            </div>

            <div className="software-image-box">
              <div className="image-border">
                <img src={imgeSrc1} alt="" className="software-image" />
              </div>
            </div>
          </div>
        </section>

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
    </>
  );
};

export default Hompage;
