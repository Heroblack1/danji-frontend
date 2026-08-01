import React, { useEffect, useState } from "react";
import videoSrc from "./assets/320732.mp4";
import imgeSrc from "./assets/Gemini_Generated_Image_e2cvxve2cvxve2cv.png";
import imgeSrc1 from "./assets/Gemini_Generated_Image_8qniiz8qniiz8qni.jpg";
import imgeSrc2 from "./assets/Gemini_Generated_Image_zheoyxzheoyxzheo.jpg";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import { useNavigate } from "react-router-dom";

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
        <div id="oops">
          <video id="vid" autoPlay loop muted playsInline>
            <source src={videoSrc} type="video/mp4" />
          </video>

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
              <img
                src={danji}
                alt="Company Logo"
                className="nxnav-logo-image"
              />
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
                  <a href="#chatbots" className="nxnav-dropdown-link">
                    <span className="nxnav-icon">✦</span>
                    <span>
                      <strong>AI Chatbots</strong>
                      <small>Intelligent business automation</small>
                    </span>
                  </a>

                  <a href="#software" className="nxnav-dropdown-link">
                    <span className="nxnav-icon">⌘</span>
                    <span>
                      <strong>Software Development</strong>
                      <small>Custom digital solutions</small>
                    </span>
                  </a>

                  <a href="#annotation" className="nxnav-dropdown-link">
                    <span className="nxnav-icon">◆</span>
                    <span>
                      <strong>Data Annotation</strong>
                      <small>High-quality AI training data</small>
                    </span>
                  </a>
                </div>
              </div>

              {/* NORMAL LINKS */}
              <button
                className="nxnav-item"
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </button>

              <button
                className="nxnav-item"
                onClick={() => navigate("/contact")}
              >
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
          <div className="intro">
            <h1 className="boldWhite">
              AI That works. Software That Scales. Data You Can Trust
            </h1>
            <p className="smallWhite">
              We help businesses auttomate customer interactions, build modern
              web applications, and create high-quality datasets for AI systems
            </p>

            <ul>
              <li className="smallWhite">AI Chatbot Solutions</li>
              <li className="smallWhite">Customer Software Development</li>
              <li className="smallWhite">Data annotation Services</li>
            </ul>

            <button className="floating-btn">Book a free consultation</button>
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

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>DanjiTech</h2>
              <p>
                Building AI chatbots, modern websites, and providing
                professional data annotation services.
              </p>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#projects">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <p>AI Chatbots</p>
              <p>Web Development</p>
              <p>Data Annotation</p>
              <p>Consulting</p>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>
              <p>📧 admin@danjitech.com</p>
              <p>📱 +234 9030877641</p>

              <div className="social-links">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">X</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} DanjiTech. All Rights Reserved.</p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Hompage;
