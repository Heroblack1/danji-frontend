import { useEffect, useState, useRef } from "react";
import React from "react";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const navigate = useNavigate();

  // scrolling options
  // scrolling options
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
    <main className="about-page">
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
          <button className="nxnav-cta" onClick={() => navigate("/getStarted")}>
            <span>Get Started</span>
            <span className="nxnav-arrow">→</span>
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="about-hero-content">
          <div className="about-label">
            <span></span>
            ABOUT OUR COMPANY
          </div>

          <h1>
            Building the technology
            <span> behind tomorrow.</span>
          </h1>

          <p>
            We are a technology company helping businesses harness the power of
            artificial intelligence, high-quality data, and modern software
            engineering to build better digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#our-story" className="about-primary-btn">
              Discover Our Story
              <span>→</span>
            </a>

            <a href="#services" className="about-secondary-btn">
              What We Do
            </a>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit-ring orbit-ring-one"></div>
          <div className="orbit-ring orbit-ring-two"></div>
          <div className="orbit-center">
            <span>AI</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="about-stats" ref={addToRefs}>
        <div className="stat-item">
          <strong>3+</strong>
          <span>Technology Services</span>
        </div>

        <div className="stat-item">
          <strong>100%</strong>
          <span>Remote & Global Talent</span>
        </div>

        <div className="stat-item">
          <strong>24/7</strong>
          <span>Digital Capabilities</span>
        </div>

        <div className="stat-item">
          <strong>∞</strong>
          <span>Possibilities</span>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="story-section" id="our-story">
        <div className="story-image reveal-left" ref={addToRefs}>
          <div className="image-card">
            <div className="image-overlay"></div>

            <div className="floating-code code-one">{"<AI />"}</div>

            <div className="floating-code code-two">{"{ DATA }"}</div>

            <div className="story-image-content">
              <span>INNOVATION</span>
              <h3>
                Technology should
                <br />
                solve real problems.
              </h3>
            </div>
          </div>
        </div>

        <div className="story-content reveal-right" ref={addToRefs}>
          <div className="about-label">
            <span></span>
            OUR STORY
          </div>

          <h2>
            We combine people,
            <span> data & technology.</span>
          </h2>

          <p>
            Businesses today are surrounded by enormous amounts of data and
            rapidly evolving technology. We exist to help them turn that
            complexity into practical solutions.
          </p>

          <p>
            Our company brings together experienced professionals across
            artificial intelligence, data annotation, software development,
            automation, and digital product development.
          </p>

          <p>
            Instead of building a large traditional workforce, we have developed
            a flexible network of skilled professionals from around the world.
            This allows us to assemble the right expertise for every project
            while keeping our services efficient and scalable.
          </p>

          <div className="story-highlight">
            <span className="highlight-icon">✦</span>

            <div>
              <strong>Global talent. Local understanding.</strong>
              <p>
                We bring together diverse professionals with experience working
                on projects for clients across different industries and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">
        <div className="section-heading reveal-up" ref={addToRefs}>
          <div className="about-label">
            <span></span>
            OUR PEOPLE
          </div>

          <h2>
            Experienced people.
            <span> Exceptional work.</span>
          </h2>

          <p>
            Great technology starts with great people. Our team is made up of
            experienced professionals with diverse technical backgrounds and
            practical experience across a wide range of projects.
          </p>
        </div>

        <div className="team-content">
          <div className="team-text reveal-left" ref={addToRefs}>
            <h3>
              Talent sourced from
              <span> leading global platforms.</span>
            </h3>

            <p>
              Our professionals have been sourced through leading global
              freelance marketplaces, professional networks, and our own
              recruitment process.
            </p>

            <p>
              Many of our team members have built their careers working directly
              with businesses and clients around the world through platforms
              such as <strong>Upwork and Fiverr</strong>.
            </p>

            <p>
              This means our team is not built solely around academic
              qualifications. We value something equally important:
              <strong> real-world experience.</strong>
            </p>

            <div className="platforms">
              <div className="platform-card">
                <div className="platform-icon">U</div>
                <div>
                  <strong>Upwork</strong>
                  <span>Global freelance experience</span>
                </div>
              </div>

              <div className="platform-card">
                <div className="platform-icon">F</div>
                <div>
                  <strong>Fiverr</strong>
                  <span>Specialized creative talent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="team-features reveal-right" ref={addToRefs}>
            <div className="team-feature">
              <div className="feature-number">01</div>
              <div>
                <h4>Proven Experience</h4>
                <p>
                  Our professionals bring practical experience from real client
                  projects and production environments.
                </p>
              </div>
            </div>

            <div className="team-feature">
              <div className="feature-number">02</div>
              <div>
                <h4>Global Perspective</h4>
                <p>
                  Our distributed talent pool gives us access to different
                  perspectives, skills, and approaches to problem solving.
                </p>
              </div>
            </div>

            <div className="team-feature">
              <div className="feature-number">03</div>
              <div>
                <h4>Specialized Skills</h4>
                <p>
                  We connect projects with professionals who have the specific
                  technical skills required to get the job done.
                </p>
              </div>
            </div>

            <div className="team-feature">
              <div className="feature-number">04</div>
              <div>
                <h4>Quality Focused</h4>
                <p>
                  Every project goes through structured processes designed to
                  maintain consistency and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section" id="services">
        <div className="section-heading reveal-up" ref={addToRefs}>
          <div className="about-label">
            <span></span>
            WHAT WE DO
          </div>

          <h2>
            Technology built around
            <span> your goals.</span>
          </h2>

          <p>
            We provide specialized technology services designed to help
            businesses build, improve, and scale their digital operations.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal-up" ref={addToRefs}>
            <div className="service-number">01</div>

            <div className="service-icon">✦</div>

            <h3>AI Chatbot Solutions</h3>

            <p>
              Intelligent conversational systems designed to automate customer
              interactions, improve support, and help businesses operate more
              efficiently.
            </p>

            <ul>
              <li>AI customer support</li>
              <li>Conversational AI</li>
              <li>Business automation</li>
              <li>Custom AI assistants</li>
            </ul>

            <a href="/services/chatbot">
              Explore service <span>→</span>
            </a>
          </div>

          <div
            className="service-card featured-service reveal-up"
            ref={addToRefs}
          >
            <div className="service-number">02</div>

            <div className="service-icon">◈</div>

            <h3>Data Annotation</h3>

            <p>
              High-quality human-labeled datasets that help machine learning
              systems understand images, text, audio, video, and other forms of
              data.
            </p>

            <ul>
              <li>Image annotation</li>
              <li>Text annotation</li>
              <li>Audio & video labeling</li>
              <li>AI training datasets</li>
            </ul>

            <a href="/services/data-annotation">
              Explore service <span>→</span>
            </a>
          </div>

          <div className="service-card reveal-up" ref={addToRefs}>
            <div className="service-number">03</div>

            <div className="service-icon">{"</>"}</div>

            <h3>Software Engineering</h3>

            <p>
              Modern software solutions built around your business needs, from
              websites and web applications to custom platforms and digital
              products.
            </p>

            <ul>
              <li>Web applications</li>
              <li>Custom software</li>
              <li>API development</li>
              <li>Product development</li>
            </ul>

            <a href="/services/software">
              Explore service <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">
        <div className="section-heading reveal-up" ref={addToRefs}>
          <div className="about-label">
            <span></span>
            HOW WE WORK
          </div>

          <h2>
            Simple process.
            <span> Serious results.</span>
          </h2>

          <p>
            We keep our process straightforward so you can focus on your
            business while we focus on delivering the technology.
          </p>
        </div>

        <div className="process-line">
          <div className="process-step reveal-up" ref={addToRefs}>
            <div className="process-circle">01</div>
            <h3>Understand</h3>
            <p>
              We learn about your business, objectives, challenges, and
              requirements.
            </p>
          </div>

          <div className="process-step reveal-up" ref={addToRefs}>
            <div className="process-circle">02</div>
            <h3>Plan</h3>
            <p>
              We develop a clear strategy and identify the people, technologies,
              and resources needed.
            </p>
          </div>

          <div className="process-step reveal-up" ref={addToRefs}>
            <div className="process-circle">03</div>
            <h3>Build</h3>
            <p>
              Our specialists work on your project using modern tools,
              technologies, and proven development practices.
            </p>
          </div>

          <div className="process-step reveal-up" ref={addToRefs}>
            <div className="process-circle">04</div>
            <h3>Deliver</h3>
            <p>
              We test, refine, and deliver a solution designed to create
              measurable value for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="values-section">
        <div className="values-content">
          <div className="values-heading reveal-left" ref={addToRefs}>
            <div className="about-label">
              <span></span>
              OUR VALUES
            </div>

            <h2>
              The principles
              <span> behind our work.</span>
            </h2>

            <p>
              Technology changes quickly. Our commitment to quality,
              transparency, and meaningful results does not.
            </p>
          </div>

          <div className="values-grid reveal-right" ref={addToRefs}>
            <div className="value-card">
              <span>01</span>
              <h3>Quality</h3>
              <p>
                We believe good enough is not good enough. We strive to deliver
                reliable, useful, and carefully executed work.
              </p>
            </div>

            <div className="value-card">
              <span>02</span>
              <h3>Innovation</h3>
              <p>
                We continuously explore better technologies and smarter ways to
                solve difficult problems.
              </p>
            </div>

            <div className="value-card">
              <span>03</span>
              <h3>Integrity</h3>
              <p>
                We communicate honestly, set realistic expectations, and
                maintain transparency throughout every engagement.
              </p>
            </div>

            <div className="value-card">
              <span>04</span>
              <h3>Impact</h3>
              <p>
                Our goal is not simply to deliver technology. It is to create
                solutions that make a meaningful difference to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="cta-glow"></div>

        <div className="cta-content reveal-up" ref={addToRefs}>
          <div className="about-label">
            <span></span>
            LET'S BUILD SOMETHING
          </div>

          <h2>
            Have a challenge?
            <br />
            <span>Let's solve it together.</span>
          </h2>

          <p>
            Whether you need an AI chatbot, high-quality data annotation, or
            custom software, our team is ready to help turn your idea into
            reality.
          </p>

          <a href="/contact" className="cta-button">
            Start a Conversation
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

export default About;
