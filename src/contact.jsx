import React, { useEffect, useRef, useState } from "react";
// import "./Contact.css";
// import { useNavigate } from "react-router-dom";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import axios from "axios";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";

const Contact = () => {
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

  // scroll effect
  // scroll effect
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

  const revealRefs = useRef([]);
  const [formStatus, setFormStatus] = useState("");

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
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // handle input changes in the form
  // handle input changes in the form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const API_URL = import.meta.env.VITE_API_URL;
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

      setFormStatus(
        "Thanks for reaching out. We'll get back to you as soon as possible.",
      );

      console.log("Server response:", data);

      alert("Your message was submitted successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      // console.error("Error:", error);

      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="contact-page">
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
      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="contact-grid-bg"></div>

        <div className="contact-glow contact-glow-one"></div>
        <div className="contact-glow contact-glow-two"></div>

        <div className="contact-hero-content">
          <div className="contact-label">
            <span></span>
            GET IN TOUCH
          </div>

          <h1>
            Let's build
            <span> something great.</span>
          </h1>

          <p>
            Have an idea, a project, or a problem you need solved? Tell us about
            it. Our team is ready to help you turn your technology goals into
            reality.
          </p>

          <div className="contact-hero-pills">
            <span>AI Chatbots</span>
            <span>Data Annotation</span>
            <span>Software Engineering</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}
      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div
            className="contact-information contact-reveal-left"
            ref={addToRefs}
          >
            <div className="contact-label">
              <span></span>
              CONTACT US
            </div>

            <h2>
              Let's talk about
              <span> your project.</span>
            </h2>

            <p className="contact-intro">
              Whether you're looking for an AI chatbot, need help preparing data
              for machine learning, or want to build custom software, we'd love
              to hear from you.
            </p>

            {/* INFO CARDS */}

            <div className="contact-info-card">
              <div className="contact-info-icon">✉</div>

              <div>
                <small>EMAIL</small>
                <h4>hello@yourcompany.com</h4>
                <p>Send us an email and we'll respond shortly.</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">◉</div>

              <div>
                <small>AVAILABILITY</small>
                <h4>Available Worldwide</h4>
                <p>Our distributed team works with clients across the globe.</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">◷</div>

              <div>
                <small>RESPONSE TIME</small>
                <h4>Usually within 24 hours</h4>
                <p>We'll review your message and get back to you.</p>
              </div>
            </div>

            {/* SOCIALS */}

            <div className="contact-socials">
              <span>FOLLOW US</span>

              <div className="social-icons">
                <a href="#" aria-label="LinkedIn">
                  in
                </a>

                <a href="#" aria-label="Twitter">
                  X
                </a>

                <a href="#" aria-label="Facebook">
                  f
                </a>

                <a href="#" aria-label="Instagram">
                  ◎
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            className="contact-form-wrapper contact-reveal-right"
            ref={addToRefs}
          >
            <div className="contact-form-glow"></div>

            <div className="contact-form-header">
              <span>START A CONVERSATION</span>

              <h3>
                Tell us what
                <strong> you need.</strong>
              </h3>

              <p>Fill out the form below and we'll get back to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

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

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

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

              <div className="form-group">
                <label htmlFor="company">
                  Company <span>(Optional)</span>
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

              <div className="form-group">
                <label htmlFor="service">What can we help with?</label>

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

                  <option value="ai-chatbot">AI Chatbot Solutions</option>

                  <option value="data-annotation">Data Annotation</option>

                  <option value="software">Software Engineering</option>

                  <option value="other">Something Else</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">
                  Estimated Budget <span>(Optional)</span>
                </label>

                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select a budget range
                  </option>

                  <option value="under-1k">Under $1,000</option>

                  <option value="1k-5k">$1,000 – $5,000</option>

                  <option value="5k-10k">$5,000 – $10,000</option>

                  <option value="10k-plus">$10,000+</option>

                  <option value="not-sure">I'm not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your project</label>

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

              <button type="submit" className="contact-submit">
                <span>Send Message</span>
                <strong>→</strong>
              </button>

              {formStatus && (
                <div className="form-success">
                  <span>✓</span>
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ================= SERVICES CTA ================= */}
      <section className="contact-services">
        <div
          className="contact-services-heading contact-reveal-up"
          ref={addToRefs}
        >
          <div className="contact-label">
            <span></span>
            WHAT WE CAN HELP WITH
          </div>

          <h2>
            One team.
            <span> Multiple solutions.</span>
          </h2>
        </div>

        <div className="contact-service-grid">
          <div
            className="contact-service-card contact-reveal-up"
            ref={addToRefs}
          >
            <span className="service-index">01</span>

            <div className="contact-service-icon">✦</div>

            <h3>AI Chatbots</h3>

            <p>
              Build intelligent conversational experiences that help automate
              customer support and business processes.
            </p>

            <a href="/services/chatbot">
              Learn more <span>→</span>
            </a>
          </div>

          <div
            className="contact-service-card contact-reveal-up"
            ref={addToRefs}
          >
            <span className="service-index">02</span>

            <div className="contact-service-icon">◈</div>

            <h3>Data Annotation</h3>

            <p>
              Prepare high-quality datasets for machine learning, computer
              vision, NLP, and AI applications.
            </p>

            <a href="/services/data-annotation">
              Learn more <span>→</span>
            </a>
          </div>

          <div
            className="contact-service-card contact-reveal-up"
            ref={addToRefs}
          >
            <span className="service-index">03</span>

            <div className="contact-service-icon">{"</>"}</div>

            <h3>Software Engineering</h3>

            <p>
              Design and build reliable websites, applications, APIs, platforms,
              and custom software.
            </p>

            <a href="/services/software">
              Learn more <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="contact-bottom-cta">
        <div className="contact-bottom-glow"></div>

        <div
          className="contact-bottom-content contact-reveal-up"
          ref={addToRefs}
        >
          <div className="contact-label">
            <span></span>
            HAVE AN IDEA?
          </div>

          <h2>
            Your next big idea
            <span> starts with a conversation.</span>
          </h2>

          <a href="#contact-form" className="contact-bottom-button">
            Tell Us About It
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

export default Contact;
