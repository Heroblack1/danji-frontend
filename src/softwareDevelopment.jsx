import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import "./SoftwareDevelopment.css";

const SoftwareDevelopment = () => {
  const revealRefs = useRef([]);

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
    <main className="sd-page">
      {/* =========================
          HERO
      ========================= */}

      <section className="sd-hero">
        <div className="sd-grid"></div>

        <div className="sd-glow sd-glow-one"></div>
        <div className="sd-glow sd-glow-two"></div>

        <div className="sd-hero-container">
          <div className="sd-hero-content">
            <div className="sd-label">
              <span></span>
              CUSTOM SOFTWARE DEVELOPMENT
            </div>

            <h1>
              We build software
              <span> that moves businesses forward.</span>
            </h1>

            <p>
              We design and develop modern, responsive, and scalable
              applications tailored to your business needs. From websites and
              web applications to mobile platforms and custom business systems,
              we turn ideas into reliable digital products.
            </p>

            <div className="sd-hero-actions">
              <Link to="/get-started" className="sd-primary-button">
                Start Your Project
                <span>→</span>
              </Link>

              <a href="#services" className="sd-secondary-button">
                Explore Services
                <span>↓</span>
              </a>
            </div>

            <div className="sd-trust-row">
              <div>
                <strong>WEB</strong>
                <span>Applications</span>
              </div>

              <div>
                <strong>MOBILE</strong>
                <span>Applications</span>
              </div>

              <div>
                <strong>API</strong>
                <span>Integrations</span>
              </div>
            </div>
          </div>

          {/* CODE / APP VISUAL */}

          <div className="sd-code-visual sd-reveal-right" ref={addToRefs}>
            <div className="sd-floating-tag sd-tag-one">
              <span>●</span>
              Scalable Architecture
            </div>

            <div className="sd-floating-tag sd-tag-two">
              <span>✓</span>
              Production Ready
            </div>

            <div className="sd-code-window">
              <div className="sd-window-header">
                <div className="sd-window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="sd-window-title">project.js</div>
              </div>

              <div className="sd-code-body">
                <div>
                  <span className="sd-code-blue">const</span>{" "}
                  <span className="sd-code-white">application</span> = {"{"}
                </div>

                <div className="sd-indent">
                  <span className="sd-code-light">name:</span>{" "}
                  <span className="sd-code-green">"Your Business"</span>,
                </div>

                <div className="sd-indent">
                  <span className="sd-code-light">scalable:</span>{" "}
                  <span className="sd-code-blue">true</span>,
                </div>

                <div className="sd-indent">
                  <span className="sd-code-light">responsive:</span>{" "}
                  <span className="sd-code-blue">true</span>,
                </div>

                <div className="sd-indent">
                  <span className="sd-code-light">modern:</span>{" "}
                  <span className="sd-code-blue">true</span>,
                </div>

                <div className="sd-indent">
                  <span className="sd-code-light">builtFor:</span>{" "}
                  <span className="sd-code-green">"Growth"</span>
                </div>

                <div>{"};"}</div>

                <br />

                <div>
                  <span className="sd-code-blue">function</span>{" "}
                  <span className="sd-code-yellow">buildSolution</span>
                  () {"{"}
                </div>

                <div className="sd-indent">
                  <span className="sd-code-blue">return</span>{" "}
                  <span className="sd-code-green">"Ready to scale."</span>
                </div>

                <div>{"}"}</div>
              </div>

              <div className="sd-code-footer">
                <span>● Connected</span>

                <span>Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
      ========================= */}

      <section className="sd-intro">
        <div className="sd-section-heading sd-reveal-up" ref={addToRefs}>
          <div className="sd-label">
            <span></span>
            SOFTWARE ENGINEERING
          </div>

          <h2>
            Technology should solve
            <span> real problems.</span>
          </h2>

          <p>
            We don't simply write code. We work with you to understand your
            goals, identify the right solution, and create software that
            supports the way your business actually operates.
          </p>
        </div>

        <div className="sd-stat-grid">
          <div className="sd-stat-card sd-reveal-up" ref={addToRefs}>
            <strong>01</strong>
            <span>Understand</span>
          </div>

          <div className="sd-stat-card sd-reveal-up" ref={addToRefs}>
            <strong>02</strong>
            <span>Design</span>
          </div>

          <div className="sd-stat-card sd-reveal-up" ref={addToRefs}>
            <strong>03</strong>
            <span>Develop</span>
          </div>

          <div className="sd-stat-card sd-reveal-up" ref={addToRefs}>
            <strong>04</strong>
            <span>Launch & Scale</span>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="sd-services" id="services">
        <div className="sd-section-heading sd-reveal-up" ref={addToRefs}>
          <div className="sd-label">
            <span></span>
            WHAT WE BUILD
          </div>

          <h2>
            Software built around
            <span> your requirements.</span>
          </h2>

          <p>
            Whether you need a customer-facing application, internal business
            platform, or a complete digital product, our team can help bring it
            to life.
          </p>
        </div>

        <div className="sd-service-grid">
          <div className="sd-service-card sd-reveal-left" ref={addToRefs}>
            <div className="sd-service-icon">{"</>"}</div>

            <span className="sd-card-number">01</span>

            <h3>Web Applications</h3>

            <p>
              Build powerful web applications that work seamlessly across
              devices and provide your customers with an excellent digital
              experience.
            </p>

            <ul>
              <li>Responsive interfaces</li>
              <li>Business applications</li>
              <li>Customer portals</li>
              <li>Admin dashboards</li>
            </ul>
          </div>

          <div className="sd-service-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-service-icon">◇</div>

            <span className="sd-card-number">02</span>

            <h3>Mobile Applications</h3>

            <p>
              Create mobile experiences that help your customers interact with
              your business wherever they are.
            </p>

            <ul>
              <li>iOS applications</li>
              <li>Android applications</li>
              <li>Cross-platform solutions</li>
              <li>Mobile-first experiences</li>
            </ul>
          </div>

          <div className="sd-service-card sd-reveal-right" ref={addToRefs}>
            <div className="sd-service-icon">◎</div>

            <span className="sd-card-number">03</span>

            <h3>Business Software</h3>

            <p>
              Replace manual processes with custom software designed around your
              team's workflows and operational needs.
            </p>

            <ul>
              <li>Management systems</li>
              <li>Internal tools</li>
              <li>Workflow systems</li>
              <li>Business automation</li>
            </ul>
          </div>

          <div className="sd-service-card sd-reveal-left" ref={addToRefs}>
            <div className="sd-service-icon">API</div>

            <span className="sd-card-number">04</span>

            <h3>APIs & Integrations</h3>

            <p>
              Connect your applications, services, and business systems together
              through reliable integrations and APIs.
            </p>

            <ul>
              <li>REST APIs</li>
              <li>Third-party integrations</li>
              <li>Payment integrations</li>
              <li>Data synchronization</li>
            </ul>
          </div>

          <div className="sd-service-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-service-icon">AI</div>

            <span className="sd-card-number">05</span>

            <h3>AI-Powered Applications</h3>

            <p>
              Add intelligent features to your software using modern AI
              technologies and automation.
            </p>

            <ul>
              <li>AI assistants</li>
              <li>Intelligent automation</li>
              <li>AI-powered search</li>
              <li>Custom AI features</li>
            </ul>
          </div>

          <div className="sd-service-card sd-reveal-right" ref={addToRefs}>
            <div className="sd-service-icon">↗</div>

            <span className="sd-card-number">06</span>

            <h3>Software Modernization</h3>

            <p>
              Improve outdated applications by modernizing their architecture,
              interface, performance, and functionality.
            </p>

            <ul>
              <li>Legacy modernization</li>
              <li>Performance improvements</li>
              <li>UI modernization</li>
              <li>Scalable architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================
          TECHNOLOGY
      ========================= */}

      <section className="sd-technology">
        <div className="sd-tech-container">
          <div className="sd-tech-content sd-reveal-left" ref={addToRefs}>
            <div className="sd-label">
              <span></span>
              MODERN TECHNOLOGY
            </div>

            <h2>
              Built with the
              <span> future in mind.</span>
            </h2>

            <p>
              We use modern development practices and technologies to create
              applications that are fast, maintainable, secure, and ready to
              grow alongside your business.
            </p>

            <Link to="/get-started" className="sd-primary-button">
              Discuss Your Project
              <span>→</span>
            </Link>
          </div>

          <div className="sd-tech-stack sd-reveal-right" ref={addToRefs}>
            <div className="sd-tech-item">
              <strong>React</strong>
              <span>Frontend</span>
            </div>

            <div className="sd-tech-item">
              <strong>Node.js</strong>
              <span>Backend</span>
            </div>

            <div className="sd-tech-item">
              <strong>Python</strong>
              <span>Backend / AI</span>
            </div>

            <div className="sd-tech-item">
              <strong>APIs</strong>
              <span>Integration</span>
            </div>

            <div className="sd-tech-item">
              <strong>Cloud</strong>
              <span>Infrastructure</span>
            </div>

            <div className="sd-tech-item">
              <strong>Database</strong>
              <span>Data Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHY US
      ========================= */}

      <section className="sd-why">
        <div className="sd-section-heading sd-reveal-up" ref={addToRefs}>
          <div className="sd-label">
            <span></span>
            WHY WORK WITH US
          </div>

          <h2>
            We build for
            <span> your success.</span>
          </h2>
        </div>

        <div className="sd-why-grid">
          <div className="sd-why-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-why-number">01</div>

            <h3>Business-focused</h3>

            <p>
              We focus on the business problem behind the software, not just the
              technology.
            </p>
          </div>

          <div className="sd-why-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-why-number">02</div>

            <h3>Scalable</h3>

            <p>
              We create systems designed to accommodate growth instead of
              forcing you to rebuild later.
            </p>
          </div>

          <div className="sd-why-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-why-number">03</div>

            <h3>User-focused</h3>

            <p>
              Every interface and workflow is designed with the people using the
              software in mind.
            </p>
          </div>

          <div className="sd-why-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-why-number">04</div>

            <h3>Built to last</h3>

            <p>
              We prioritize clean architecture and maintainable solutions that
              can evolve with you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}

      <section className="sd-process">
        <div className="sd-section-heading sd-reveal-up" ref={addToRefs}>
          <div className="sd-label">
            <span></span>
            OUR DEVELOPMENT PROCESS
          </div>

          <h2>
            From concept to
            <span> finished product.</span>
          </h2>

          <p>
            We follow a structured development process that keeps your project
            clear, focused, and moving forward.
          </p>
        </div>

        <div className="sd-process-grid">
          <div className="sd-process-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-process-icon">01</div>

            <h3>Discovery</h3>

            <p>
              We discuss your goals, requirements, users, challenges, and
              desired outcomes.
            </p>
          </div>

          <div className="sd-process-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-process-icon">02</div>

            <h3>Planning</h3>

            <p>
              We define the technical approach, architecture, features,
              priorities, and development roadmap.
            </p>
          </div>

          <div className="sd-process-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-process-icon">03</div>

            <h3>Design & Development</h3>

            <p>
              We transform the plan into an intuitive interface and functional
              software product.
            </p>
          </div>

          <div className="sd-process-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-process-icon">04</div>

            <h3>Testing</h3>

            <p>
              We test functionality, responsiveness, usability, and performance
              before launch.
            </p>
          </div>

          <div className="sd-process-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-process-icon">05</div>

            <h3>Launch</h3>

            <p>
              Your application is deployed and prepared for real users and
              real-world usage.
            </p>
          </div>

          <div className="sd-process-card sd-reveal-up" ref={addToRefs}>
            <div className="sd-process-icon">06</div>

            <h3>Improve & Scale</h3>

            <p>
              We can continue improving, maintaining, and expanding your
              software as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="sd-final-cta">
        <div className="sd-final-glow"></div>

        <div className="sd-final-content sd-reveal-up" ref={addToRefs}>
          <div className="sd-label">
            <span></span>
            HAVE AN IDEA?
          </div>

          <h2>
            Let's turn your idea
            <span> into software.</span>
          </h2>

          <p>
            Whether you're starting from scratch, replacing an outdated system,
            or looking to take your existing application to the next level,
            we're ready to help.
          </p>

          <Link to="/get-started" className="sd-primary-button sd-large-button">
            Get Started
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SoftwareDevelopment;
