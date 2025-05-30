import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import 'animate.css';

// Define the page data structure
const testingPageData = {
  hero: {
    title: "Quality Assurance & Testing",
    subtitle: "We combine in-depth industry expertise with world-class technical knowledge to help you deliver flawless software products that exceed expectations.",
    backgroundImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3900eebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  intro: {
    title: "Comprehensive Testing Solutions",
    description: "Makonis is a technology solutions company specializing in Software Test Engineering, Accessibility Assurance, and Product Engineering. We partner with our clients to create a transparent, value-based relationship, leveraging the extensive experience of our team to provide innovative solutions in a wide range of technology domains that enable our customers to successfully attain their business goals.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  services: [
    {
      id: "functional",
      title: "Functional Testing",
      icon: "fa-check-circle",
      description: "Our Functional Testing Services ensure the independent verification and validation of applications for software vendors and enterprises. We employ a comprehensive approach to test all aspects of your application's functionality.",
      features: [
        "Manual Testing",
        "Regression Testing",
        "Integration Testing",
        "User Acceptance Testing",
        "Exploratory Testing",
        "Compatibility Testing"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#4158D0"
    },
    {
      id: "automation",
      title: "Test Automation",
      icon: "fa-robot",
      description: "Our test automation Center of Excellence leverages Selenium and other leading tools for automating web application testing, performing functional regression automation, and developing and maintaining automated test suites.",
      features: [
        "Selenium WebDriver",
        "Appium for Mobile",
        "API Automation",
        "Continuous Integration",
        "Test Framework Development",
        "BDD with Cucumber"
      ],
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      color: "#C850C0"
    },
    {
      id: "performance",
      title: "Performance Testing",
      icon: "fa-tachometer-alt",
      description: "Our Performance Engineering & Testing teams have extensive experience in providing cutting-edge services to global clients. We ensure your applications can handle expected loads and identify bottlenecks before they impact users.",
      features: [
        "Load Testing",
        "Stress Testing",
        "Endurance Testing",
        "Scalability Testing",
        "Capacity Planning",
        "Performance Monitoring"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#43cea2"
    },
    {
      id: "security",
      title: "Security Testing",
      icon: "fa-shield-alt",
      description: "Security testing has become an absolutely critical part of an organization's development strategy. This is due to the increase in the number of privacy breaches that organizations are facing today. Our comprehensive security testing helps identify vulnerabilities before they can be exploited.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Code Review",
        "Compliance Testing",
        "Risk Assessment",
        "Security Monitoring"
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#F37335"
    },
    {
      id: "erp",
      title: "ERP Testing",
      icon: "fa-cogs",
      description: "Our ERP testing practice offers a full suite of integrated ERP testing services across the lifecycle of ERP projects – Implementation, Upgrade, Rollout, Production Support, and Maintenance. Our comprehensive testing strategy ensures smooth ERP operations.",
      features: [
        "SAP Testing",
        "Oracle ERP Testing",
        "Microsoft Dynamics Testing",
        "Integration Testing",
        "Data Migration Testing",
        "Business Process Testing"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#3494E6"
    },
    {
      id: "mobile",
      title: "Mobile Testing",
      icon: "fa-mobile-alt",
      description: "We offer mobile testing services for both functional and non-functional testing of mobile applications. We have extensive experience in mobile testing for various domains such as Banking, Insurance, Travel, and Retail, leveraging leading industry tools and best practices.",
      features: [
        "Native App Testing",
        "Hybrid App Testing",
        "Cross-Platform Testing",
        "Device Compatibility",
        "Usability Testing",
        "Performance Testing"
      ],
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#FF416C"
    }
  ],
  process: {
    title: "Our Testing Process",
    description: "We follow a systematic approach to ensure comprehensive testing coverage and quality assurance for your applications.",
    steps: [
      {
        number: "01",
        title: "Requirements Analysis",
        description: "We analyze your requirements to understand the application functionality and create a detailed test strategy."
      },
      {
        number: "02",
        title: "Test Planning",
        description: "Our team develops comprehensive test plans, test cases, and test data to ensure thorough coverage."
      },
      {
        number: "03",
        title: "Test Execution",
        description: "We execute tests meticulously, documenting results and identifying defects with detailed reproduction steps."
      },
      {
        number: "04",
        title: "Defect Management",
        description: "We track and manage defects through their lifecycle, ensuring proper resolution and verification."
      },
      {
        number: "05",
        title: "Reporting & Analytics",
        description: "We provide detailed reports with metrics and insights to help you make informed decisions."
      }
    ]
  },
  tools: {
    title: "Testing Tools & Technologies",
    description: "We leverage industry-leading tools and technologies to deliver efficient and effective testing services.",
    categories: [
      {
        name: "Automation",
        tools: ["Selenium", "Appium", "Cypress", "TestComplete", "Katalon Studio", "Robot Framework"]
      },
      {
        name: "Performance",
        tools: ["JMeter", "LoadRunner", "Gatling", "NeoLoad", "BlazeMeter", "K6"]
      },
      {
        name: "API Testing",
        tools: ["Postman", "SoapUI", "REST Assured", "Karate DSL", "Pact", "ReadyAPI"]
      },
      {
        name: "DevOps",
        tools: ["Jenkins", "Docker", "Kubernetes", "Azure DevOps", "GitLab CI", "CircleCI"]
      }
    ]
  },
  stats: [
    { value: "500+", label: "Projects Delivered", icon: "fa-project-diagram" },
    { value: "98%", label: "Defect Detection Rate", icon: "fa-bug" },
    { value: "60%", label: "Testing Cost Reduction", icon: "fa-dollar-sign" },
    { value: "24/7", label: "Support Coverage", icon: "fa-headset" }
  ],
  cta: {
    title: "Ready to Ensure Quality in Your Software?",
    text: "Our testing expertise will help you deliver flawless applications. Contact us and we'll have one of our testing experts reach out to you to discover how we can lead your project to success.",
    buttonText: "Get Started with Testing",
    buttonLink: "/contact"
  }
};

const TestingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCtaButtonHovered, setIsCtaButtonHovered] = useState(false);
  const [activeService, setActiveService] = useState("functional");
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
    <div className="testing-page overflow-hidden">
      {/* Hero Section */}
      <section
        className="testing-hero d-flex align-items-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 41, 86, 0.8), rgba(0, 41, 86, 0.8)), url(${testingPageData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          position: 'relative'
        }}
      >
        <Container className="position-relative z-index-1">
          <h1 className="display-2 fw-bolder mb-4 animate__animated animate__fadeInDown animate__slow" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
            {testingPageData.hero.title}
          </h1>
          <p className="lead mb-5 mx-auto animate__animated animate__fadeInUp animate__slow" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0,0,0,0.4)', fontSize: '1.35rem' }}>
            {testingPageData.hero.subtitle}
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
                  <i className="fas fa-check-double me-2"></i> Quality Assurance
                </span>
              </div>
              <h2 className="display-4 fw-bold mb-4" style={{ color: primaryDarkColor }}>
                {testingPageData.intro.title}
              </h2>
              <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {testingPageData.intro.description}
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Badge bg="primary" className="p-3 rounded-pill">Comprehensive Testing</Badge>
                <Badge bg="info" className="p-3 rounded-pill">Quality Assurance</Badge>
                <Badge bg="success" className="p-3 rounded-pill">Test Automation</Badge>
                <Badge bg="warning" text="dark" className="p-3 rounded-pill">Performance Optimization</Badge>
              </div>
            </Col>
            <Col lg={6} className={`${animatedElements['intro-section'] ? 'animate__animated animate__fadeInRight' : ''}`}>
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Testing Team"
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

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white" id="stats-section" ref={(el) => (elementsRef.current['stats-section'] = el)}>
        <Container>
          <Row className="justify-content-center">
            {testingPageData.stats.map((stat, index) => (
              <Col md={6} lg={3} key={index} className="mb-4 mb-lg-0">
                <div
                  className={`stat-card text-center p-4 h-100 ${animatedElements['stats-section'] ? 'animate__animated animate__fadeInUp' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <div className="stat-icon mb-3">
                    <i className={`fas ${stat.icon} fa-3x`} style={{ color: primaryColor }}></i>
                  </div>
                  <h3 className="stat-value display-5 fw-bold mb-2">{stat.value}</h3>
                  <p className="stat-label mb-0 text-light">{stat.label}</p>
                </div>
              </Col>
            ))}
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
              <i className="fas fa-th-large me-2"></i> Our Testing Services
            </span>
            <h2 className="display-4 fw-bold mb-3">Comprehensive Testing Solutions</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We offer a wide range of testing services to ensure your applications meet the highest quality standards.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="service-tabs mb-5">
            <div className="d-flex justify-content-center flex-wrap">
              {testingPageData.services.map((service) => (
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
          {testingPageData.services.map((service) => (
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

      {/* Process Section */}
      <section className="py-5 bg-light" id="process-section" ref={(el) => (elementsRef.current['process-section'] = el)}>
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
              <i className="fas fa-tasks me-2"></i> Our Methodology
            </span>
            <h2 className="display-4 fw-bold mb-3">{testingPageData.process.title}</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              {testingPageData.process.description}
            </p>
          </div>

          <div className="process-timeline position-relative mt-5">
            {/* Timeline line */}
            <div
              className="timeline-line position-absolute"
              style={{
                top: '0',
                bottom: '0',
                left: '50%',
                width: '4px',
                backgroundColor: '#e9ecef',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}
            ></div>

            {testingPageData.process.steps.map((step, index) => (
              <Row
                key={index}
                className={`process-step align-items-center mb-5 position-relative ${animatedElements['process-section'] ? 'animate__animated animate__fadeIn' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Col md={5} className={index % 2 === 0 ? 'text-md-end' : 'order-md-2'}>
                  <div
                    className="process-content p-4 rounded-4 shadow-sm"
                    style={{
                      background: 'white',
                      border: '1px solid #e9ecef',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = primaryColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = '#e9ecef';
                    }}
                  >
                    <h3 className="h4 fw-bold mb-3" style={{ color: primaryDarkColor }}>{step.title}</h3>
                    <p className="mb-0">{step.description}</p>
                  </div>
                </Col>

                <Col md={2} className="text-center">
                  <div
                    className="step-number d-flex align-items-center justify-content-center rounded-circle mx-auto"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${primaryColor}, ${primaryDarkColor})`,
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      zIndex: 2,
                      position: 'relative',
                      boxShadow: '0 10px 20px rgba(0, 123, 255, 0.3)'
                    }}
                  >
                    {step.number}
                  </div>
                </Col>

                <Col md={5} className={index % 2 === 0 ? 'order-md-2' : ''}>
                  {/* Empty column for layout on the other side */}
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="py-5" id="tools-section" ref={(el) => (elementsRef.current['tools-section'] = el)}>
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
              <i className="fas fa-tools me-2"></i> Our Tech Stack
            </span>
            <h2 className="display-4 fw-bold mb-3">{testingPageData.tools.title}</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              {testingPageData.tools.description}
            </p>
          </div>

          <Row className="g-4">
            {testingPageData.tools.categories.map((category, catIndex) => (
              <Col lg={6} key={catIndex}>
                <div
                  className={`tool-category p-4 rounded-4 h-100 ${animatedElements['tools-section'] ? 'animate__animated animate__fadeInUp' : ''}`}
                  style={{
                    animationDelay: `${catIndex * 0.2}s`,
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <h3 className="h4 fw-bold mb-4" style={{ color: primaryDarkColor }}>
                    <i className={`fas ${
                      catIndex === 0 ? 'fa-robot' :
                      catIndex === 1 ? 'fa-tachometer-alt' :
                      catIndex === 2 ? 'fa-code' :
                      'fa-cogs'
                    } me-2`} style={{ color: primaryColor }}></i>
                    {category.name}
                  </h3>

                  <div className="tools-grid">
                    <Row className="g-3">
                      {category.tools.map((tool, toolIndex) => (
                        <Col xs={6} key={toolIndex}>
                          <div
                            className="tool-item p-3 rounded-3 text-center"
                            style={{
                              background: '#f8f9fa',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = `rgba(0, 123, 255, 0.1)`;
                              e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#f8f9fa';
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <span className="fw-medium">{tool}</span>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
            ))}
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
              <h2 className="display-4 fw-bold mb-4">{testingPageData.cta.title}</h2>
              <p className="lead mb-5" style={{ fontSize: '1.2rem' }}>
                {testingPageData.cta.text}
              </p>
              <Link
                to={testingPageData.cta.buttonLink}
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
                {testingPageData.cta.buttonText} <i className="fas fa-arrow-right ms-2"></i>
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

        @media (max-width: 768px) {
          .timeline-line {
            left: 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestingPage;
