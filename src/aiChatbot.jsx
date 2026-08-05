import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import danji from "./assets/ChatGPT Image Jul 4, 2026, 06_12_53 PM.png";
import { useNavigate } from "react-router-dom";

// import "./AIChatbot.css";

const AIChatbot = () => {
  const revealRefs = useRef([]);

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
            entry.target.classList.add("ai-visible");
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
    <main className="ai-page">
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
      {/* =========================================
          HERO
      ========================================= */}

      <section className="ai-hero">
        <div className="ai-grid"></div>

        <div className="ai-glow ai-glow-one"></div>
        <div className="ai-glow ai-glow-two"></div>

        <div className="ai-hero-container">
          {/* LEFT */}

          <div className="ai-hero-content">
            <div className="ai-label">
              <span></span>
              AI CHATBOT SOLUTIONS
            </div>

            <h1>
              Make your business
              <span> more intelligent.</span>
            </h1>

            <p>
              We build intelligent AI chatbots that help businesses automate
              conversations, support customers, answer questions, and turn
              everyday interactions into meaningful experiences.
            </p>

            <div className="ai-hero-actions">
              <Link to="/get-started" className="ai-primary-button">
                Get Started
                <span>→</span>
              </Link>

              <a href="#capabilities" className="ai-secondary-button">
                Explore Solutions
                <span>↓</span>
              </a>
            </div>

            <div className="ai-hero-trust">
              <div>
                <strong>24/7</strong>
                <span>Availability</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Powered</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Scalable</span>
              </div>
            </div>
          </div>

          {/* CHATBOT VISUAL */}

          <div className="ai-chat-visual" ref={addToRefs}>
            <div className="ai-orbit ai-orbit-one"></div>
            <div className="ai-orbit ai-orbit-two"></div>

            <div className="ai-chat-window">
              <div className="ai-chat-header">
                <div className="ai-bot-avatar">✦</div>

                <div>
                  <strong>AI Assistant</strong>
                  <span>
                    <i></i>
                    Online
                  </span>
                </div>

                <div className="ai-menu">•••</div>
              </div>

              <div className="ai-chat-body">
                <div className="ai-message ai-message-bot">
                  Hello! 👋
                  <br />
                  How can I help you today?
                </div>

                <div className="ai-message ai-message-user">
                  I'd like to know more about your services.
                </div>

                <div className="ai-message ai-message-bot">
                  Absolutely. We provide AI chatbot solutions, data annotation,
                  and custom software engineering.
                </div>

                <div className="ai-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="ai-chat-input">
                <span>Type your message...</span>
                <button>↑</button>
              </div>
            </div>

            <div className="ai-floating-card ai-card-top">
              <span>✦</span>
              Intelligent Responses
            </div>

            <div className="ai-floating-card ai-card-bottom">
              <span>✓</span>
              Available 24/7
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="ai-intro">
        <div className="ai-section-heading ai-reveal-up" ref={addToRefs}>
          <div className="ai-label">
            <span></span>
            WHY AI CHATBOTS?
          </div>

          <h2>
            Your customers have
            <span> questions.</span>
          </h2>

          <p>
            Your business shouldn't have to answer the same ones over and over
            again. Our AI chatbot solutions help businesses provide instant,
            intelligent, and personalized responses at scale.
          </p>
        </div>

        <div className="ai-stat-grid">
          <div className="ai-stat-card ai-reveal-up" ref={addToRefs}>
            <strong>24/7</strong>
            <span>Customer availability</span>
          </div>

          <div className="ai-stat-card ai-reveal-up" ref={addToRefs}>
            <strong>∞</strong>
            <span>Conversations at scale</span>
          </div>

          <div className="ai-stat-card ai-reveal-up" ref={addToRefs}>
            <strong>AI</strong>
            <span>Intelligent automation</span>
          </div>

          <div className="ai-stat-card ai-reveal-up" ref={addToRefs}>
            <strong>1:1</strong>
            <span>Personalized experiences</span>
          </div>
        </div>
      </section>

      {/* =========================================
          CAPABILITIES
      ========================================= */}

      <section className="ai-capabilities" id="capabilities">
        <div className="ai-section-heading ai-reveal-up" ref={addToRefs}>
          <div className="ai-label">
            <span></span>
            WHAT WE BUILD
          </div>

          <h2>
            Chatbots designed
            <span> around your business.</span>
          </h2>

          <p>
            We don't believe in one-size-fits-all AI. We create chatbot
            experiences based on your business, customers, workflows, and goals.
          </p>
        </div>

        <div className="ai-capability-grid">
          <div className="ai-capability-card ai-reveal-left" ref={addToRefs}>
            <div className="ai-capability-icon">✦</div>

            <span className="ai-card-number">01</span>

            <h3>AI Customer Support</h3>

            <p>
              Give your customers instant answers to common questions without
              requiring your team to be available every hour of the day.
            </p>

            <ul>
              <li>Instant responses</li>
              <li>FAQ automation</li>
              <li>Customer assistance</li>
            </ul>
          </div>

          <div className="ai-capability-card ai-reveal-up" ref={addToRefs}>
            <div className="ai-capability-icon">◈</div>

            <span className="ai-card-number">02</span>

            <h3>Business Automation</h3>

            <p>
              Automate repetitive conversations and workflows so your team can
              spend more time focusing on important work.
            </p>

            <ul>
              <li>Lead qualification</li>
              <li>Workflow automation</li>
              <li>Information retrieval</li>
            </ul>
          </div>

          <div className="ai-capability-card ai-reveal-right" ref={addToRefs}>
            <div className="ai-capability-icon">{"</>"}</div>

            <span className="ai-card-number">03</span>

            <h3>Custom AI Assistants</h3>

            <p>
              Build specialized AI assistants trained around your business
              information, processes, and customer needs.
            </p>

            <ul>
              <li>Custom knowledge bases</li>
              <li>Business-specific responses</li>
              <li>Tailored AI experiences</li>
            </ul>
          </div>

          <div className="ai-capability-card ai-reveal-left" ref={addToRefs}>
            <div className="ai-capability-icon">◎</div>

            <span className="ai-card-number">04</span>

            <h3>Website Chatbots</h3>

            <p>
              Add an intelligent conversational assistant directly to your
              website and give visitors help whenever they need it.
            </p>

            <ul>
              <li>Website integration</li>
              <li>Interactive conversations</li>
              <li>Lead generation</li>
            </ul>
          </div>

          <div className="ai-capability-card ai-reveal-up" ref={addToRefs}>
            <div className="ai-capability-icon">↯</div>

            <span className="ai-card-number">05</span>

            <h3>AI-Powered Lead Generation</h3>

            <p>
              Let your chatbot engage visitors, understand their needs, qualify
              leads, and guide them toward the right next step.
            </p>

            <ul>
              <li>Lead qualification</li>
              <li>Visitor engagement</li>
              <li>Smart recommendations</li>
            </ul>
          </div>

          <div className="ai-capability-card ai-reveal-right" ref={addToRefs}>
            <div className="ai-capability-icon">+</div>

            <span className="ai-card-number">06</span>

            <h3>AI Integrations</h3>

            <p>
              Connect your chatbot to the tools and systems your business
              already uses to create a more powerful workflow.
            </p>

            <ul>
              <li>APIs</li>
              <li>Business tools</li>
              <li>Custom integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================
          BENEFITS
      ========================================= */}

      <section className="ai-benefits">
        <div className="ai-benefits-container">
          <div className="ai-benefits-content ai-reveal-left" ref={addToRefs}>
            <div className="ai-label">
              <span></span>
              BUILT FOR RESULTS
            </div>

            <h2>
              More than a chatbot.
              <span> A digital teammate.</span>
            </h2>

            <p>
              A well-designed AI assistant can become an important part of your
              business operations, helping your team work smarter while giving
              customers a better experience.
            </p>

            <Link to="/get-started" className="ai-primary-button">
              Build Your AI Chatbot
              <span>→</span>
            </Link>
          </div>

          <div className="ai-benefits-list ai-reveal-right" ref={addToRefs}>
            <div className="ai-benefit">
              <div className="ai-benefit-icon">01</div>

              <div>
                <h3>Save time</h3>

                <p>
                  Automate repetitive conversations and reduce the workload on
                  your team.
                </p>
              </div>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">02</div>

              <div>
                <h3>Respond faster</h3>

                <p>
                  Give customers immediate answers instead of making them wait
                  for a response.
                </p>
              </div>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">03</div>

              <div>
                <h3>Scale effortlessly</h3>

                <p>
                  Handle multiple conversations simultaneously without
                  increasing your support workload.
                </p>
              </div>
            </div>

            <div className="ai-benefit">
              <div className="ai-benefit-icon">04</div>

              <div>
                <h3>Improve customer experience</h3>

                <p>
                  Provide consistent, helpful, and personalized interactions
                  across your customer journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          USE CASES
      ========================================= */}

      <section className="ai-use-cases">
        <div className="ai-section-heading ai-reveal-up" ref={addToRefs}>
          <div className="ai-label">
            <span></span>
            POSSIBILITIES
          </div>

          <h2>
            What could your
            <span> chatbot do?</span>
          </h2>
        </div>

        <div className="ai-use-grid">
          <div className="ai-use-card ai-reveal-up" ref={addToRefs}>
            <span>01</span>
            <h3>Answer questions</h3>
            <p>
              Give customers instant answers about your products, services,
              policies, or business.
            </p>
          </div>

          <div className="ai-use-card ai-reveal-up" ref={addToRefs}>
            <span>02</span>
            <h3>Generate leads</h3>
            <p>
              Engage visitors and collect useful information from potential
              customers.
            </p>
          </div>

          <div className="ai-use-card ai-reveal-up" ref={addToRefs}>
            <span>03</span>
            <h3>Book appointments</h3>
            <p>
              Help customers find suitable times and streamline appointment
              scheduling.
            </p>
          </div>

          <div className="ai-use-card ai-reveal-up" ref={addToRefs}>
            <span>04</span>
            <h3>Guide customers</h3>
            <p>
              Help users navigate your products, services, website, or digital
              platform.
            </p>
          </div>

          <div className="ai-use-card ai-reveal-up" ref={addToRefs}>
            <span>05</span>
            <h3>Support your team</h3>
            <p>
              Give employees quick access to useful internal information and
              resources.
            </p>
          </div>

          <div className="ai-use-card ai-reveal-up" ref={addToRefs}>
            <span>06</span>
            <h3>Automate workflows</h3>
            <p>
              Connect conversations with business processes to reduce repetitive
              manual tasks.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="ai-process">
        <div className="ai-section-heading ai-reveal-up" ref={addToRefs}>
          <div className="ai-label">
            <span></span>
            OUR PROCESS
          </div>

          <h2>
            From idea to
            <span> intelligent assistant.</span>
          </h2>
        </div>

        <div className="ai-process-line">
          <div className="ai-process-step ai-reveal-up" ref={addToRefs}>
            <div>01</div>
            <h3>Understand</h3>
            <p>
              We learn about your business, customers, goals, and the problem
              you want to solve.
            </p>
          </div>

          <div className="ai-process-step ai-reveal-up" ref={addToRefs}>
            <div>02</div>
            <h3>Design</h3>
            <p>
              We design the conversation flow, functionality, and AI experience
              around your requirements.
            </p>
          </div>

          <div className="ai-process-step ai-reveal-up" ref={addToRefs}>
            <div>03</div>
            <h3>Build</h3>
            <p>
              Our team develops and integrates your chatbot with the necessary
              systems and platforms.
            </p>
          </div>

          <div className="ai-process-step ai-reveal-up" ref={addToRefs}>
            <div>04</div>
            <h3>Launch</h3>
            <p>
              We test, refine, and deploy your AI assistant so it is ready to
              interact with your users.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="ai-final-cta">
        <div className="ai-final-glow"></div>

        <div className="ai-final-content ai-reveal-up" ref={addToRefs}>
          <div className="ai-label">
            <span></span>
            READY TO BUILD?
          </div>

          <h2>
            Give your business
            <span> an AI advantage.</span>
          </h2>

          <p>
            Tell us what you want your chatbot to accomplish and we'll help you
            turn the idea into a working AI solution.
          </p>

          <Link to="/get-started" className="ai-primary-button ai-large-button">
            Get Started With AI
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

export default AIChatbot;
