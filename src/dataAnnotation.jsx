import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

// import "./DataAnnotation.css";

const DataAnnotation = () => {
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
            entry.target.classList.add("da-visible");
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
    <main className="da-page">
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
      {/* =====================================
          HERO
      ===================================== */}

      <section className="da-hero">
        <div className="da-grid"></div>

        <div className="da-glow da-glow-one"></div>
        <div className="da-glow da-glow-two"></div>

        <div className="da-hero-container">
          <div className="da-hero-content">
            <div className="da-label">
              <span></span>
              DATA ANNOTATION SERVICES
            </div>

            <h1>
              Better data.
              <span> Smarter AI.</span>
            </h1>

            <p>
              High-quality human-annotated data designed to help AI and machine
              learning systems understand the world more accurately.
            </p>

            <div className="da-hero-actions">
              <Link to="/getStarted" className="da-primary-button">
                Get Started
                <span>→</span>
              </Link>

              <a href="#services" className="da-secondary-button">
                Explore Services
                <span>↓</span>
              </a>
            </div>

            <div className="da-trust-row">
              <div>
                <strong>TEXT</strong>
                <span>Annotation</span>
              </div>

              <div>
                <strong>IMAGE</strong>
                <span>Annotation</span>
              </div>

              <div>
                <strong>VIDEO</strong>
                <span>Annotation</span>
              </div>

              <div>
                <strong>AUDIO</strong>
                <span>Annotation</span>
              </div>
            </div>
          </div>

          {/* =====================================
              ANNOTATION VISUAL
          ===================================== */}

          <div className="da-visual da-reveal-right" ref={addToRefs}>
            <div className="da-floating-card da-float-one">
              <span className="da-green-dot"></span>
              Human Verified
            </div>

            <div className="da-floating-card da-float-two">
              <span>98.7%</span>
              Accuracy
            </div>

            <div className="da-annotation-window">
              <div className="da-window-header">
                <div className="da-window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="da-window-title">image_annotation.ai</div>
              </div>

              <div className="da-image-area">
                <div className="da-fake-image">
                  <div className="da-car-box">
                    <span>CAR</span>
                  </div>

                  <div className="da-person-box">
                    <span>PERSON</span>
                  </div>

                  <div className="da-road-line"></div>

                  <div className="da-road-line line-two"></div>
                </div>
              </div>

              <div className="da-annotation-data">
                <div className="da-data-row">
                  <span>Objects detected</span>
                  <strong>02</strong>
                </div>

                <div className="da-data-row">
                  <span>Labels applied</span>
                  <strong>02</strong>
                </div>

                <div className="da-data-row">
                  <span>Confidence</span>
                  <strong className="da-confidence">98.7%</strong>
                </div>
              </div>

              <div className="da-window-footer">
                <span>● Annotation Complete</span>

                <span>Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          INTRO
      ===================================== */}

      <section className="da-intro">
        <div className="da-section-heading da-reveal-up" ref={addToRefs}>
          <div className="da-label">
            <span></span>
            WHY DATA ANNOTATION MATTERS
          </div>

          <h2>
            AI is only as good as
            <span> the data behind it.</span>
          </h2>

          <p>
            Machine learning models need accurately labeled examples to learn.
            We help transform raw, unstructured data into high-quality training
            datasets that your AI systems can learn from.
          </p>
        </div>

        <div className="da-stat-grid">
          <div className="da-stat-card da-reveal-up" ref={addToRefs}>
            <strong>01</strong>
            <span>Collect</span>
          </div>

          <div className="da-stat-card da-reveal-up" ref={addToRefs}>
            <strong>02</strong>
            <span>Annotate</span>
          </div>

          <div className="da-stat-card da-reveal-up" ref={addToRefs}>
            <strong>03</strong>
            <span>Review</span>
          </div>

          <div className="da-stat-card da-reveal-up" ref={addToRefs}>
            <strong>04</strong>
            <span>Deliver</span>
          </div>
        </div>
      </section>

      {/* =====================================
          SERVICES
      ===================================== */}

      <section className="da-services" id="services">
        <div className="da-section-heading da-reveal-up" ref={addToRefs}>
          <div className="da-label">
            <span></span>
            OUR SERVICES
          </div>

          <h2>
            Annotation for
            <span> every kind of data.</span>
          </h2>

          <p>
            We provide structured annotation services for the datasets required
            to train, evaluate, and improve modern AI and machine learning
            systems.
          </p>
        </div>

        <div className="da-service-grid">
          {/* IMAGE */}

          <div className="da-service-card da-reveal-left" ref={addToRefs}>
            <div className="da-service-icon">IMG</div>

            <span className="da-card-number">01</span>

            <h3>Image Annotation</h3>

            <p>
              Transform raw images into structured training data for computer
              vision systems.
            </p>

            <ul>
              <li>Bounding boxes</li>
              <li>Polygon annotation</li>
              <li>Semantic segmentation</li>
              <li>Image classification</li>
              <li>Keypoint annotation</li>
            </ul>
          </div>

          {/* VIDEO */}

          <div className="da-service-card da-reveal-up" ref={addToRefs}>
            <div className="da-service-icon">VID</div>

            <span className="da-card-number">02</span>

            <h3>Video Annotation</h3>

            <p>
              Annotate objects, activities, and events across video frames for
              computer vision applications.
            </p>

            <ul>
              <li>Object tracking</li>
              <li>Frame annotation</li>
              <li>Activity recognition</li>
              <li>Event detection</li>
              <li>Video classification</li>
            </ul>
          </div>

          {/* TEXT */}

          <div className="da-service-card da-reveal-right" ref={addToRefs}>
            <div className="da-service-icon">TXT</div>

            <span className="da-card-number">03</span>

            <h3>Text Annotation</h3>

            <p>
              Turn unstructured text into meaningful labeled datasets for NLP
              and language models.
            </p>

            <ul>
              <li>Sentiment analysis</li>
              <li>Named entity recognition</li>
              <li>Text classification</li>
              <li>Intent classification</li>
              <li>Content categorization</li>
            </ul>
          </div>

          {/* AUDIO */}

          <div className="da-service-card da-reveal-left" ref={addToRefs}>
            <div className="da-service-icon">AUD</div>

            <span className="da-card-number">04</span>

            <h3>Audio Annotation</h3>

            <p>
              Create labeled audio datasets for speech recognition,
              conversational AI, and sound classification systems.
            </p>

            <ul>
              <li>Speech transcription</li>
              <li>Speaker identification</li>
              <li>Sound classification</li>
              <li>Audio segmentation</li>
              <li>Speech intent labeling</li>
            </ul>
          </div>

          {/* LLM */}

          <div className="da-service-card da-reveal-up" ref={addToRefs}>
            <div className="da-service-icon">AI</div>

            <span className="da-card-number">05</span>

            <h3>AI & LLM Data</h3>

            <p>
              Prepare high-quality datasets for AI assistants, language models,
              and generative AI applications.
            </p>

            <ul>
              <li>Prompt evaluation</li>
              <li>Response ranking</li>
              <li>Preference labeling</li>
              <li>AI response evaluation</li>
              <li>Instruction datasets</li>
            </ul>
          </div>

          {/* CUSTOM */}

          <div className="da-service-card da-reveal-right" ref={addToRefs}>
            <div className="da-service-icon">+</div>

            <span className="da-card-number">06</span>

            <h3>Custom Annotation</h3>

            <p>
              Have a unique dataset or specialized annotation requirement? We
              can build a workflow around your specific project.
            </p>

            <ul>
              <li>Custom labeling guidelines</li>
              <li>Specialized datasets</li>
              <li>Domain-specific annotation</li>
              <li>Custom workflows</li>
              <li>Quality control systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =====================================
          QUALITY CONTROL
      ===================================== */}

      <section className="da-quality">
        <div className="da-quality-container">
          <div className="da-quality-content da-reveal-left" ref={addToRefs}>
            <div className="da-label">
              <span></span>
              QUALITY CONTROL
            </div>

            <h2>
              Quality isn't an
              <span> afterthought.</span>
            </h2>

            <p>
              Poorly labeled data can negatively affect the performance of an AI
              model. That's why quality control is built into every stage of our
              annotation workflow.
            </p>

            <Link to="/getStarted" className="da-primary-button">
              Start a Data Project
              <span>→</span>
            </Link>
          </div>

          <div className="da-quality-list da-reveal-right" ref={addToRefs}>
            <div className="da-quality-item">
              <div className="da-quality-icon">01</div>

              <div>
                <h3>Clear Guidelines</h3>

                <p>
                  We establish clear annotation instructions before production
                  begins.
                </p>
              </div>
            </div>

            <div className="da-quality-item">
              <div className="da-quality-icon">02</div>

              <div>
                <h3>Trained Annotators</h3>

                <p>
                  Annotators work according to project-specific requirements and
                  labeling standards.
                </p>
              </div>
            </div>

            <div className="da-quality-item">
              <div className="da-quality-icon">03</div>

              <div>
                <h3>Quality Review</h3>

                <p>
                  Completed work goes through review processes to identify
                  inconsistencies and errors.
                </p>
              </div>
            </div>

            <div className="da-quality-item">
              <div className="da-quality-icon">04</div>

              <div>
                <h3>Continuous Improvement</h3>

                <p>
                  Feedback is used to continuously improve annotation
                  consistency throughout the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          USE CASES
      ===================================== */}

      <section className="da-usecases">
        <div className="da-section-heading da-reveal-up" ref={addToRefs}>
          <div className="da-label">
            <span></span>
            INDUSTRIES & APPLICATIONS
          </div>

          <h2>
            Data for the AI
            <span> you're building.</span>
          </h2>
        </div>

        <div className="da-usecase-grid">
          <div className="da-usecase-card da-reveal-up" ref={addToRefs}>
            <span>01</span>
            <h3>Computer Vision</h3>
            <p>
              Training data for object detection, recognition, segmentation, and
              tracking.
            </p>
          </div>

          <div className="da-usecase-card da-reveal-up" ref={addToRefs}>
            <span>02</span>
            <h3>Autonomous Systems</h3>
            <p>
              Labeled visual and sensor data for intelligent machines and
              autonomous technologies.
            </p>
          </div>

          <div className="da-usecase-card da-reveal-up" ref={addToRefs}>
            <span>03</span>
            <h3>Conversational AI</h3>
            <p>
              Human-generated datasets for chatbots, assistants, and
              conversational systems.
            </p>
          </div>

          <div className="da-usecase-card da-reveal-up" ref={addToRefs}>
            <span>04</span>
            <h3>Natural Language Processing</h3>
            <p>
              Structured language datasets for NLP models, classification, and
              information extraction.
            </p>
          </div>

          <div className="da-usecase-card da-reveal-up" ref={addToRefs}>
            <span>05</span>
            <h3>Generative AI</h3>
            <p>
              Human feedback and evaluation data to improve the quality of
              AI-generated responses.
            </p>
          </div>

          <div className="da-usecase-card da-reveal-up" ref={addToRefs}>
            <span>06</span>
            <h3>Machine Learning</h3>
            <p>
              Reliable labeled datasets for training, validating, and evaluating
              machine learning models.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          PROCESS
      ===================================== */}

      <section className="da-process">
        <div className="da-section-heading da-reveal-up" ref={addToRefs}>
          <div className="da-label">
            <span></span>
            OUR WORKFLOW
          </div>

          <h2>
            From raw data to
            <span> AI-ready datasets.</span>
          </h2>

          <p>
            Our process is designed to make large-scale annotation projects
            organized, measurable, and reliable.
          </p>
        </div>

        <div className="da-process-line">
          <div className="da-process-card da-reveal-up" ref={addToRefs}>
            <div className="da-process-number">01</div>

            <h3>Understand</h3>

            <p>
              We learn about your dataset, project goals, annotation
              requirements, and quality standards.
            </p>
          </div>

          <div className="da-process-card da-reveal-up" ref={addToRefs}>
            <div className="da-process-number">02</div>

            <h3>Prepare</h3>

            <p>
              We organize your data and establish clear annotation guidelines
              for the project.
            </p>
          </div>

          <div className="da-process-card da-reveal-up" ref={addToRefs}>
            <div className="da-process-number">03</div>

            <h3>Annotate</h3>

            <p>
              Our annotation team labels your data according to the agreed
              project specifications.
            </p>
          </div>

          <div className="da-process-card da-reveal-up" ref={addToRefs}>
            <div className="da-process-number">04</div>

            <h3>Review</h3>

            <p>
              Data goes through quality checks to identify errors and maintain
              consistency.
            </p>
          </div>

          <div className="da-process-card da-reveal-up" ref={addToRefs}>
            <div className="da-process-number">05</div>

            <h3>Deliver</h3>

            <p>
              Your completed dataset is delivered in the agreed format and ready
              for your AI pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          CTA
      ===================================== */}

      <section className="da-final-cta">
        <div className="da-final-glow"></div>

        <div className="da-final-content da-reveal-up" ref={addToRefs}>
          <div className="da-label">
            <span></span>
            READY TO BUILD BETTER AI?
          </div>

          <h2>
            Let's prepare your
            <span> data for what's next.</span>
          </h2>

          <p>
            Tell us about your dataset, your AI project, and what you're trying
            to achieve. We'll help you determine the right annotation approach
            for your needs.
          </p>

          <Link to="/getStarted" className="da-primary-button da-large-button">
            Get Started
            <span>→</span>
          </Link>
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
    </main>
  );
};

export default DataAnnotation;
