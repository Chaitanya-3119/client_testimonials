import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import 'animate.css';

// Define the page data structure
const webDevPageData = {
  hero: {
    title: "Web & Mobile Development",
    subtitle: "We combine in-depth industry expertise with world-class technical knowledge to help you create compelling software-based products that deliver exceptional user experiences.",
    backgroundImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  intro: {
    title: "Transforming Ideas into Digital Reality",
    description: "We have a plethora of web and mobile application services with enriched UI/UX that caters to all your business needs. Our esteemed programmers are always dedicated to delivering custom web application development that drives results.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  services: [
    {
      id: "web-design",
      title: "Web Design",
      icon: "fa-palette",
      description: "Web 3.0 is designed to be a 'smarter web' resulting from the amalgamation of content, social, business, and community. We create interactive, shareable, and connected websites that help prospective clients find relevant information.",
      features: [
        "User Experience & User Interface Design (UI/UX)",
        "High quality responsive designs",
        "Multi-device friendly layouts",
        "Easy content management",
        "Fast loading and SEO friendly",
        "24/7 customer support & Cloud Hosting"
      ],
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
      color: "#4158D0"
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      icon: "fa-shopping-cart",
      description: "There are many factors that make an e-commerce site user-friendly, from information loading to fast checkout processes. Everything should be dynamic, responsive, and fast. We aim for robust, easy-to-handle websites with all the features you need.",
      features: [
        "Secure payment gateways",
        "Inventory management",
        "Mobile-optimized shopping experience",
        "Customer account management",
        "Order tracking and history",
        "Analytics and reporting"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#C850C0"
    },
    {
      id: "web-app",
      title: "Web Applications",
      icon: "fa-laptop-code",
      description: "Web-based applications communicate with users via HTTP and can range from light applications like calculators and calendars to intensive applications like word processors and spreadsheets. We develop robust, scalable web applications tailored to your business needs.",
      features: [
        "Progressive Web Apps (PWAs)",
        "Single Page Applications (SPAs)",
        "Custom business applications",
        "Cloud-based solutions",
        "API development and integration",
        "Real-time data processing"
      ],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#43cea2"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      icon: "fa-bullhorn",
      description: "Digital marketing is essential in today's fast-paced digital world. From online advertising to social media management, we ensure your digital presence is optimized for maximum impact and engagement with your target audience.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Pay-Per-Click (PPC) Advertising",
        "Analytics and Performance Tracking"
      ],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#F37335"
    }
  ],
  technologies: {
    title: "Technologies We Use",
    description: "We leverage the latest technologies to build robust, scalable, and future-proof applications.",
    techs: [
      { name: "React", icon: "fab fa-react" },
      { name: "Angular", icon: "fab fa-angular" },
      { name: "Vue.js", icon: "fab fa-vuejs" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "PHP", icon: "fab fa-php" },
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "Python", icon: "fab fa-python" },
      { name: "Swift", icon: "fab fa-swift" },
      { name: "Android", icon: "fab fa-android" }
    ]
  },
  cta: {
    title: "Ready to Transform Your Digital Presence?",
    text: "Our expertise will help you succeed in the digital world. Contact us and we'll have one of our experts reach out to you to discover how we can lead your project to success.",
    buttonText: "Start Your Project",
    buttonLink: "/contact"
  }
};

const WebDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCtaButtonHovered, setIsCtaButtonHovered] = useState(false);
  const [activeService, setActiveService] = useState("web-design");
  const [animatedElements, setAnimatedElements] = useState({});
  const elementsRef = useRef({});

  // Style constants
  const primaryColor = '#007bff';
  const primaryDarkColor = '#0056b3';
  const primaryRgb = '0,123,255';

  // Button styles
  const ctaButtonBaseStyle = {
    padding: '1.2rem 3rem',
    fontSize: '1.2rem',
    background: `linear-gradient(95deg, ${primaryColor}, ${primaryDarkColor})`,
    border: 'none',
    borderRadius: '50px',
    boxShadow: `0 8px 25px rgba(${primaryRgb}, 0.3)`,
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: 'translateY(0)',
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const ctaButtonHoverStyle = {
    boxShadow: `0 15px 30px rgba(${primaryRgb}, 0.4)`,
    transform: 'translateY(-3px)'
  };

  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with refs
    Object.keys(elementsRef.current).forEach((key) => {
      if (elementsRef.current[key]) {
        observer.observe(elementsRef.current[key]);
      }
    });

    return () => {
      Object.keys(elementsRef.current).forEach((key) => {
        if (elementsRef.current[key]) {
          observer.unobserve(elementsRef.current[key]);
        }
      });
    };
  }, []);

  // Helper function to create refs
  const createRef = (id) => {
    if (!elementsRef.current[id]) {
      elementsRef.current[id] = React.createRef();
    }
    return elementsRef.current[id];
  };

  return (
    <div className="webdev-page overflow-hidden">
      {/* Hero Section */}
      <section
        className="webdev-hero d-flex align-items-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 41, 86, 0.8), rgba(0, 41, 86, 0.8)), url(${webDevPageData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          position: 'relative'
        }}
      >
        <Container className="position-relative z-index-1">
          <h1 className="display-2 fw-bolder mb-4 animate__animated animate__fadeInDown animate__slow" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
            {webDevPageData.hero.title}
          </h1>
          <p className="lead mb-5 mx-auto animate__animated animate__fadeInUp animate__slow" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0,0,0,0.4)', fontSize: '1.35rem' }}>
            {webDevPageData.hero.subtitle}
          </p>
          <Link
            to="/contact"
            className="btn btn-lg rounded-pill fw-bold animate__animated animate__zoomIn animate__delay-1s"
            style={{
              ...ctaButtonBaseStyle,
              ...(isCtaButtonHovered ? ctaButtonHoverStyle : {})
            }}
            onMouseEnter={() => setIsCtaButtonHovered(true)}
            onMouseLeave={() => setIsCtaButtonHovered(false)}
          >
            Get Started <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-5 bg-light" id="intro-section" ref={(el) => (elementsRef.current['intro-section'] = el)}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className={`mb-4 mb-lg-0 ${animatedElements['intro-section'] ? 'animate__animated animate__fadeInLeft' : ''}`}>
              <div className="position-relative">
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(0, 123, 255, 0.2)',
                    borderRadius: '30px',
                    color: primaryColor,
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 123, 255, 0.3)',
                    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.2)'
                  }}
                >
                  <i className="fas fa-code me-2"></i> Expert Development
                </span>
              </div>
              <h2 className="display-4 fw-bold mb-4" style={{ color: primaryDarkColor }}>
                {webDevPageData.intro.title}
              </h2>
              <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {webDevPageData.intro.description}
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Badge bg="primary" className="p-3 rounded-pill">Responsive Design</Badge>
                <Badge bg="info" className="p-3 rounded-pill">User Experience</Badge>
                <Badge bg="success" className="p-3 rounded-pill">Performance</Badge>
                <Badge bg="warning" text="dark" className="p-3 rounded-pill">Accessibility</Badge>
              </div>
            </Col>
            <Col lg={6} className={`${animatedElements['intro-section'] ? 'animate__animated animate__fadeInRight' : ''}`}>
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <img
                  src={webDevPageData.intro.image}
                  alt="Web Development Team"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)' }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5" id="services-section" ref={(el) => (elementsRef.current['services-section'] = el)}>
        <Container>
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(0, 123, 255, 0.1)',
                borderRadius: '30px',
                color: primaryColor,
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 123, 255, 0.2)',
                boxShadow: '0 5px 15px rgba(0, 123, 255, 0.1)'
              }}
            >
              <i className="fas fa-th-large me-2"></i> Our Services
            </span>
            <h2 className="display-4 fw-bold mb-3">Comprehensive Web Solutions</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We offer a wide range of web and mobile development services to meet your business needs.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="service-tabs mb-5">
            <div className="d-flex justify-content-center flex-wrap">
              {webDevPageData.services.map((service) => (
                <Button
                  key={service.id}
                  variant={activeService === service.id ? "primary" : "outline-primary"}
                  className="m-2 rounded-pill px-4 py-2"
                  onClick={() => setActiveService(service.id)}
                >
                  <i className={`fas ${service.icon} me-2`}></i>
                  {service.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Service Content */}
          {webDevPageData.services.map((service) => (
            <div
              key={service.id}
              className={`service-content ${activeService === service.id ? 'd-block' : 'd-none'}`}
            >
              <Row className="align-items-center g-5">
                <Col lg={6} className="order-lg-2">
                  <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ height: '400px' }}>
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${service.color}80 0%, transparent 100%)`,
                        zIndex: 1
                      }}
                    ></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Col>
                <Col lg={6} className="order-lg-1">
                  <h3 className="display-5 fw-bold mb-4" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="lead mb-4">
                    {service.description}
                  </p>
                  <div className="features-list">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item d-flex align-items-start mb-3 transition-all" style={{ transition: 'all 0.3s ease' }}>
                        <div
                          className="feature-icon me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: `${service.color}20`,
                            color: service.color,
                            flexShrink: 0
                          }}
                        >
                          <i className="fas fa-check"></i>
                        </div>
                        <div>
                          <p className="mb-0 fw-medium">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-5 bg-light" id="tech-section" ref={(el) => (elementsRef.current['tech-section'] = el)}>
        <Container>
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(0, 123, 255, 0.1)',
                borderRadius: '30px',
                color: primaryColor,
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 123, 255, 0.2)',
                boxShadow: '0 5px 15px rgba(0, 123, 255, 0.1)'
              }}
            >
              <i className="fas fa-laptop-code me-2"></i> Our Tech Stack
            </span>
            <h2 className="display-4 fw-bold mb-3">{webDevPageData.technologies.title}</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              {webDevPageData.technologies.description}
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="tech-grid">
                <Row className="g-4">
                  {webDevPageData.technologies.techs.map((tech, index) => (
                    <Col xs={6} sm={4} md={3} key={index}>
                      <div
                        className={`tech-item text-center p-4 rounded-4 h-100 ${animatedElements['tech-section'] ? 'animate__animated animate__fadeIn' : ''}`}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          backgroundColor: 'white',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                          transform: 'translateY(0)',
                          border: '1px solid rgba(0, 0, 0, 0.05)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-10px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                          e.currentTarget.style.borderColor = primaryColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.05)';
                        }}
                      >
                        <div className="tech-icon mb-3">
                          <i className={`${tech.icon} fa-3x`} style={{ color: primaryColor }}></i>
                        </div>
                        <h5 className="tech-name">{tech.name}</h5>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-white"
        id="cta-section"
        ref={(el) => (elementsRef.current['cta-section'] = el)}
        style={{
          background: `linear-gradient(135deg, #4158D0 0%, #C850C0 50%, #FFCC70 100%)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated background elements */}
        <div className="animated-bg">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="animated-shape"
              style={{
                position: 'absolute',
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                zIndex: 0
              }}
            ></div>
          ))}
        </div>

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8} className={animatedElements['cta-section'] ? 'animate__animated animate__fadeInUp' : ''}>
              <h2 className="display-4 fw-bold mb-4">{webDevPageData.cta.title}</h2>
              <p className="lead mb-5" style={{ fontSize: '1.2rem' }}>
                {webDevPageData.cta.text}
              </p>
              <Link
                to={webDevPageData.cta.buttonLink}
                className="btn btn-light btn-lg rounded-pill fw-bold px-5 py-3"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}
              >
                {webDevPageData.cta.buttonText} <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Global CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </div>
  );
};

export default WebDevPage;
