import React, { useEffect, useRef, useState } from "react";
// import "./GetStarted.css";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

const GetStarted = () => {
  const revealRefs = useRef([]);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // scrolling options
  // scrolling options
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // formdata
  // formdata
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

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
            entry.target.classList.add("gs-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // handle input changes in the form
  // handle input changes in the form
  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  // submitting formdata
  // submitting formdata

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   setFormStatus(
  //     "Thanks for reaching out. We'll get back to you as soon as possible.",
  //   );

  //   e.target.reset();
  // };
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // SUCCESS
      console.log("Server response:", data);

      // This is what makes .gs-success appear
      setSubmitted(true);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);

      alert(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="get-started-page">
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
      {/* =========================================
          HERO
      ========================================= */}

      <section className="gs-hero">
        <div className="gs-grid"></div>

        <div className="gs-glow gs-glow-one"></div>
        <div className="gs-glow gs-glow-two"></div>

        <div className="gs-hero-content">
          <div className="gs-label">
            <span></span>
            LET'S GET STARTED
          </div>

          <h1>
            Your idea.
            <span> Our expertise.</span>
          </h1>

          <p>
            Tell us what you're trying to build, improve, or solve. We'll help
            you find the right technology and the right people to bring it to
            life.
          </p>

          <a href="#project-form" className="gs-hero-button">
            Start Your Project
            <span>↓</span>
          </a>
        </div>

        <div className="gs-scroll-indicator">
          <span></span>
          Explore
        </div>
      </section>

      {/* =========================================
          PROCESS INTRO
      ========================================= */}

      <section className="gs-intro">
        <div className="gs-section-heading gs-reveal-up" ref={addToRefs}>
          <div className="gs-label">
            <span></span>
            HOW IT WORKS
          </div>

          <h2>
            Getting started is
            <span> simple.</span>
          </h2>

          <p>
            You don't need to have everything figured out before contacting us.
            Give us an idea of what you need and we'll help you work out the
            rest.
          </p>
        </div>

        <div className="gs-process">
          <div className="gs-process-card gs-reveal-up" ref={addToRefs}>
            <div className="gs-process-number">01</div>

            <div className="gs-process-icon">✦</div>

            <h3>Tell us what you need</h3>

            <p>
              Describe your project, challenge, or idea. It can be as simple or
              detailed as you want.
            </p>
          </div>

          <div className="gs-process-card gs-reveal-up" ref={addToRefs}>
            <div className="gs-process-number">02</div>

            <div className="gs-process-icon">◈</div>

            <h3>We review your requirements</h3>

            <p>
              Our team evaluates your needs and identifies the most appropriate
              approach and resources.
            </p>
          </div>

          <div className="gs-process-card gs-reveal-up" ref={addToRefs}>
            <div className="gs-process-number">03</div>

            <div className="gs-process-icon">{"</>"}</div>

            <h3>We create a plan</h3>

            <p>
              We'll discuss the scope, timeline, deliverables, and next steps
              before work begins.
            </p>
          </div>

          <div className="gs-process-card gs-reveal-up" ref={addToRefs}>
            <div className="gs-process-number">04</div>

            <div className="gs-process-icon">✓</div>

            <h3>We get to work</h3>

            <p>
              Once everything is agreed upon, our specialists begin turning your
              requirements into results.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SERVICE SELECTION
      ========================================= */}

      <section className="gs-services">
        <div className="gs-section-heading gs-reveal-up" ref={addToRefs}>
          <div className="gs-label">
            <span></span>
            WHAT ARE YOU LOOKING FOR?
          </div>

          <h2>
            Choose where
            <span> we can help.</span>
          </h2>

          <p>
            Whether you're building an AI product, preparing data for machine
            learning, or developing software, our team can help.
          </p>
        </div>

        <div className="gs-service-grid">
          <div className="gs-service-card gs-reveal-left" ref={addToRefs}>
            <div className="gs-service-top">
              <span>01</span>

              <div className="gs-service-icon">✦</div>
            </div>

            <h3>AI Chatbot Solutions</h3>

            <p>
              Build intelligent AI assistants and conversational systems that
              automate interactions and improve customer experiences.
            </p>

            <div className="gs-service-tags">
              <span>AI Assistants</span>
              <span>Automation</span>
              <span>Customer Support</span>
            </div>
          </div>

          <div className="gs-service-card gs-reveal-up" ref={addToRefs}>
            <div className="gs-service-top">
              <span>02</span>

              <div className="gs-service-icon">◈</div>
            </div>

            <h3>Data Annotation</h3>

            <p>
              Create accurate, structured datasets for artificial intelligence
              and machine learning applications.
            </p>

            <div className="gs-service-tags">
              <span>Image</span>
              <span>Text</span>
              <span>Audio</span>
              <span>Video</span>
            </div>
          </div>

          <div className="gs-service-card gs-reveal-right" ref={addToRefs}>
            <div className="gs-service-top">
              <span>03</span>

              <div className="gs-service-icon">{"</>"}</div>
            </div>

            <h3>Software Engineering</h3>

            <p>
              Build websites, web applications, APIs, platforms, and custom
              software tailored to your business.
            </p>

            <div className="gs-service-tags">
              <span>Web Apps</span>
              <span>APIs</span>
              <span>Custom Software</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROJECT FORM
      ========================================= */}

      <section className="gs-form-section" id="project-form">
        <div className="gs-form-container">
          {/* LEFT */}
          <div className="gs-form-info gs-reveal-left" ref={addToRefs}>
            <div className="gs-label">
              <span></span>
              START YOUR PROJECT
            </div>

            <h2>
              Let's turn your
              <span> idea into reality.</span>
            </h2>

            <p>
              The more information you provide, the better we can understand
              what you need. Don't worry if you don't know all the technical
              details.
            </p>

            <div className="gs-form-points">
              <div>
                <span>✓</span>
                No commitment required
              </div>

              <div>
                <span>✓</span>
                Discuss your project with our team
              </div>

              <div>
                <span>✓</span>
                Get recommendations tailored to your needs
              </div>

              <div>
                <span>✓</span>
                Clear next steps before work begins
              </div>
            </div>

            <div className="gs-help-box">
              <div className="gs-help-icon">?</div>

              <div>
                <strong>Not sure what you need?</strong>

                <p>
                  That's completely fine. Just describe the problem you're
                  trying to solve and we'll help you figure out the best
                  approach.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="gs-form-wrapper gs-reveal-right" ref={addToRefs}>
            {!submitted ? (
              <form className="gs-form" onSubmit={handleSubmit}>
                <div className="gs-form-heading">
                  <span>PROJECT DETAILS</span>

                  <h3>Tell us about your project</h3>

                  <p>This should only take a few minutes.</p>
                </div>

                {/* NAME + EMAIL */}

                <div className="gs-form-row">
                  <div className="gs-field">
                    <label>Full Name</label>

                    <input
                      name="name"
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="gs-field">
                    <label>Email Address</label>

                    <input
                      name="email"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* COMPANY */}

                <div className="gs-field">
                  <label>
                    Company Name
                    <span> (Optional)</span>
                  </label>

                  <input
                    name="company"
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                {/* SERVICE */}

                <div className="gs-field">
                  <label>What service do you need?</label>

                  <select
                    name="service"
                    id="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="chatbot">AI Chatbot Solutions</option>

                    <option value="annotation">Data Annotation</option>

                    <option value="software">Software Engineering</option>

                    <option value="multiple">Multiple Services</option>

                    <option value="unsure">I'm not sure yet</option>
                  </select>
                </div>

                {/* PROJECT TYPE */}

                {/* <div className="gs-field">
                  <label>What are you looking to accomplish?</label>

                  <select defaultValue="" required>
                    <option value="" disabled>
                      Choose an option
                    </option>

                    <option value="new-project">Build something new</option>

                    <option value="improve">Improve an existing product</option>

                    <option value="automation">Automate a process</option>

                    <option value="dataset">Prepare data for AI / ML</option>

                    <option value="other">Something else</option>
                  </select>
                </div> */}

                {/* BUDGET */}

                <div className="gs-field">
                  <label>
                    Estimated Budget
                    <span> (Optional)</span>
                  </label>

                  <select
                    name="budget"
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a range
                    </option>

                    <option value="under-1000">Under $1,000</option>

                    <option value="1000-5000">$1,000 – $5,000</option>

                    <option value="5000-10000">$5,000 – $10,000</option>

                    <option value="10000-plus">$10,000+</option>

                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div className="gs-field">
                  <label>Tell us about your project</label>

                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    placeholder="Tell us about your project, what you're trying to build, or the problem you're trying to solve..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="gs-submit">
                  <span>Submit Project Request</span>

                  <strong>→</strong>
                </button>

                <p className="gs-form-note">
                  By submitting this form, you agree to be contacted regarding
                  your project.
                </p>
              </form>
            ) : (
              <div className="gs-success">
                <div className="gs-success-icon">✓</div>

                <div className="gs-success-label">REQUEST RECEIVED</div>

                <h3>Thanks for reaching out.</h3>

                <p>
                  We've received your project details. Our team will review your
                  requirements and get back to you as soon as possible.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="gs-again-button"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="gs-final">
        <div className="gs-final-glow"></div>

        <div className="gs-final-content gs-reveal-up" ref={addToRefs}>
          <div className="gs-label">
            <span></span>
            READY WHEN YOU ARE
          </div>

          <h2>
            Let's build something
            <span> worth talking about.</span>
          </h2>

          <p>
            Great products start with good conversations. Tell us where you want
            to go.
          </p>

          <a href="/contact" className="gs-final-button">
            Contact Our Team
            <span>→</span>
          </a>
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

export default GetStarted;
