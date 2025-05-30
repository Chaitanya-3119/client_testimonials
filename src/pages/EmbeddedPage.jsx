import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import 'animate.css';

// Define the page data structure
const embeddedPageData = {
  hero: {
    title: "Embedded Systems",
    subtitle: "We combine in-depth industry expertise with world-class technical knowledge to help you create compelling software-based products that power the devices of tomorrow.",
    backgroundImage: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80'
  },
  intro: {
    title: "Powering the Future of Connected Devices",
    description: "In an era where the world is moving forward with open source and high-performance hardware systems, Makonis is focused on delivering world-class embedded solutions that bridge the gap between hardware and software, creating intelligent systems that drive innovation across industries.",
    image: "https://images.unsplash.com/photo-1563770660941-10971f2c6326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  services: [
    {
      id: "telematics",
      title: "Informatics & Telematics",
      icon: "fa-satellite-dish",
      description: "Our telematics solutions enable real-time data collection, analysis, and communication between vehicles, infrastructure, and cloud platforms, providing actionable insights and enhanced control.",
      features: [
        "End-to-end solutions for product testing",
        "Linux/Android and Web-based solutions",
        "Platform and System Validation & Testing",
        "Interoperability Testing",
        "Integration of 3rd party Telematics components",
        "Connected vehicle solutions"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#4158D0"
    },
    {
      id: "chassis",
      title: "Body & Chassis Electronics",
      icon: "fa-car",
      description: "From body control modules to chassis systems, we develop and test electronic control units that ensure optimal performance, safety, and comfort in modern vehicles.",
      features: [
        "ECU Development and calibration",
        "MIL/HIL Simulation and Testing",
        "Cluster Development & Testing",
        "Model-based AUTOSAR compliant design",
        "Auto-code generation",
        "Vehicle network systems"
      ],
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#C850C0"
    },
    {
      id: "application",
      title: "Application Development",
      icon: "fa-microchip",
      description: "Our embedded application development services create specialized software that runs on microcontrollers and microprocessors, optimized for performance, reliability, and resource efficiency.",
      features: [
        "Real-time operating systems (RTOS)",
        "Firmware development",
        "Device drivers",
        "Bootloaders and BSPs",
        "Low-power optimization",
        "Memory-constrained applications"
      ],
      image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80",
      color: "#43cea2"
    },
    {
      id: "safety",
      title: "Safety & Systems",
      icon: "fa-shield-alt",
      description: "We develop and validate safety-critical systems that protect lives and assets, ensuring compliance with the highest industry standards and regulatory requirements.",
      features: [
        "Airbag systems",
        "Occupant protection (Seat belts)",
        "Brake Systems",
        "Steering Control",
        "Vehicle Warning Systems",
        "Lane Departure Protection",
        "Pedestrian Detection"
      ],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#F37335"
    },
    {
      id: "hardware",
      title: "Hardware Validation",
      icon: "fa-microchip",
      description: "Our hardware validation services ensure that your electronic systems meet specifications, perform reliably under all conditions, and integrate seamlessly with software components.",
      features: [
        "Hardware-in-the-Loop (HIL) Testing",
        "VHDL and Verilog validation",
        "Signal integrity analysis",
        "Power consumption optimization",
        "Thermal analysis",
        "EMC/EMI testing"
      ],
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      color: "#3494E6"
    },
    {
      id: "testing",
      title: "Embedded Testing Services",
      icon: "fa-vial",
      description: "Our comprehensive testing services validate functionality, performance, and reliability of embedded systems, ensuring they operate flawlessly in their intended environments.",
      features: [
        "Unit Testing",
        "Integration Testing",
        "System Testing",
        "Performance Testing",
        "Security Testing",
        "Compliance Testing"
      ],
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900eebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#FF416C"
    },
    {
      id: "software",
      title: "Software Design",
      icon: "fa-code",
      description: "Our software design services create efficient, reliable, and maintainable code that powers embedded systems across various platforms and architectures.",
      features: [
        "Python scripting",
        "Android development",
        "Linux systems",
        "AUTOSAR architecture",
        "C/C++ programming",
        "Embedded Java"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      color: "#6f42c1"
    }
  ],
  technologies: {
    title: "Technologies & Platforms",
    description: "We leverage cutting-edge technologies and platforms to deliver embedded solutions that meet the demands of today's connected world.",
    categories: [
      {
        name: "Microcontrollers",
        items: ["ARM Cortex-M", "PIC", "AVR", "STM32", "ESP32", "MSP430"]
      },
      {
        name: "Operating Systems",
        items: ["FreeRTOS", "Zephyr", "Embedded Linux", "VxWorks", "QNX", "Android"]
      },
      {
        name: "Communication",
        items: ["CAN", "LIN", "FlexRay", "Ethernet", "Bluetooth", "Wi-Fi", "LoRa"]
      },
      {
        name: "Development Tools",
        items: ["MATLAB/Simulink", "IAR Embedded Workbench", "Keil MDK", "Eclipse", "Arduino IDE", "PlatformIO"]
      }
    ]
  },
  industries: [
    { name: "Automotive", icon: "fa-car", percentage: 85 },
    { name: "Industrial Automation", icon: "fa-industry", percentage: 75 },
    { name: "Consumer Electronics", icon: "fa-mobile-alt", percentage: 70 },
    { name: "Medical Devices", icon: "fa-heartbeat", percentage: 65 },
    { name: "Aerospace", icon: "fa-plane", percentage: 60 }
  ],
  cta: {
    title: "Ready to Build Intelligent Embedded Systems?",
    text: "Our embedded systems expertise will help you develop innovative products that stand out in the market. Contact us and we'll have one of our experts reach out to you to discover how we can lead your project to success.",
    buttonText: "Start Your Embedded Project",
    buttonLink: "/contact"
  }
};

const EmbeddedPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCtaButtonHovered, setIsCtaButtonHovered] = useState(false);
  const [activeService, setActiveService] = useState("telematics");
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
    <div className="embedded-page overflow-hidden">
      {/* Hero Section */}
      <section
        className="embedded-hero d-flex align-items-center text-white text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 41, 86, 0.8), rgba(0, 41, 86, 0.8)), url(${embeddedPageData.hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          position: 'relative'
        }}
      >
        <Container className="position-relative z-index-1">
          <h1 className="display-2 fw-bolder mb-4 animate__animated animate__fadeInDown animate__slow" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
            {embeddedPageData.hero.title}
          </h1>
          <p className="lead mb-5 mx-auto animate__animated animate__fadeInUp animate__slow" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0,0,0,0.4)', fontSize: '1.35rem' }}>
            {embeddedPageData.hero.subtitle}
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
                  <i className="fas fa-microchip me-2"></i> Embedded Excellence
                </span>
              </div>
              <h2 className="display-4 fw-bold mb-4" style={{ color: primaryDarkColor }}>
                {embeddedPageData.intro.title}
              </h2>
              <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {embeddedPageData.intro.description}
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Badge bg="primary" className="p-3 rounded-pill">Automotive</Badge>
                <Badge bg="info" className="p-3 rounded-pill">IoT</Badge>
                <Badge bg="success" className="p-3 rounded-pill">Industrial</Badge>
                <Badge bg="warning" text="dark" className="p-3 rounded-pill">Consumer Electronics</Badge>
              </div>
            </Col>
            <Col lg={6} className={`${animatedElements['intro-section'] ? 'animate__animated animate__fadeInRight' : ''}`}>
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{ height: '400px' }}>
                <img
                  src={embeddedPageData.intro.image}
                  alt="Embedded Systems Development"
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

      {/* Industries Section */}
      <section className="py-5 bg-dark text-white" id="industries-section" ref={(el) => (elementsRef.current['industries-section'] = el)}>
        <Container>
          <div className="text-center mb-5">
            <span
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
              }}
            >
              <i className="fas fa-industry me-2"></i> Industries We Serve
            </span>
            <h2 className="display-4 fw-bold mb-3">Embedded Solutions Across Industries</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              Our embedded systems expertise spans multiple industries, delivering tailored solutions for diverse applications.
            </p>
          </div>

          <Row className="g-4">
            {embeddedPageData.industries.map((industry, index) => (
              <Col md={6} lg={4} key={index}>
                <div
                  className={`industry-card p-4 rounded-4 h-100 ${animatedElements['industries-section'] ? 'animate__animated animate__fadeInUp' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: 'rgba(255, 255, 255, 0.05)',
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
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="industry-icon me-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(0, 123, 255, 0.2)',
                        color: primaryColor,
                        flexShrink: 0
                      }}
                    >
                      <i className={`fas ${industry.icon} fa-2x`}></i>
                    </div>
                    <h3 className="h4 mb-0">{industry.name}</h3>
                  </div>
                  <div className="mt-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Expertise Level</span>
                      <span className="fw-bold">{industry.percentage}%</span>
                    </div>
                    <ProgressBar
                      now={industry.percentage}
                      variant="primary"
                      style={{ height: '8px', borderRadius: '4px' }}
                    />
                  </div>
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
              <i className="fas fa-th-large me-2"></i> Our Embedded Services
            </span>
            <h2 className="display-4 fw-bold mb-3">Comprehensive Embedded Solutions</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              We offer a wide range of embedded systems services to meet your product development needs.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="service-tabs mb-5">
            <div className="d-flex justify-content-center flex-wrap">
              {embeddedPageData.services.map((service) => (
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
          {embeddedPageData.services.map((service) => (
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
            <h2 className="display-4 fw-bold mb-3">{embeddedPageData.technologies.title}</h2>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              {embeddedPageData.technologies.description}
            </p>
          </div>

          <Row className="g-4">
            {embeddedPageData.technologies.categories.map((category, catIndex) => (
              <Col md={6} key={catIndex}>
                <div
                  className={`tech-category p-4 rounded-4 h-100 ${animatedElements['tech-section'] ? 'animate__animated animate__fadeInUp' : ''}`}
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
                      catIndex === 0 ? 'fa-microchip' :
                      catIndex === 1 ? 'fa-cogs' :
                      catIndex === 2 ? 'fa-network-wired' :
                      'fa-tools'
                    } me-2`} style={{ color: primaryColor }}></i>
                    {category.name}
                  </h3>

                  <div className="tech-grid">
                    <Row className="g-3">
                      {category.items.map((item, itemIndex) => (
                        <Col xs={6} key={itemIndex}>
                          <div
                            className="tech-item p-3 rounded-3 text-center"
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
                            <span className="fw-medium">{item}</span>
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

      {/* Interactive Circuit Board Section */}
      <section className="py-5 bg-dark text-white" id="circuit-section" ref={(el) => (elementsRef.current['circuit-section'] = el)}>
        <Container>
          <div className="position-relative circuit-board-container" style={{ height: '300px', overflow: 'hidden' }}>
            <div
              className={`circuit-board ${animatedElements['circuit-section'] ? 'animate' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              {/* Circuit paths */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="circuit-path"
                  style={{
                    position: 'absolute',
                    background: `linear-gradient(90deg, ${primaryColor}, transparent)`,
                    height: '2px',
                    width: `${Math.random() * 30 + 20}%`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 70}%`,
                    opacity: 0.7,
                    animation: `circuit-flow ${Math.random() * 3 + 2}s infinite linear`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}

              {/* Circuit nodes */}
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="circuit-node"
                  style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: primaryColor,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: `0 0 10px ${primaryColor}`,
                    animation: `pulse ${Math.random() * 2 + 1}s infinite alternate`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}

              {/* Microchip icons */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="circuit-chip"
                  style={{
                    position: 'absolute',
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    color: primaryColor,
                    animation: `fade-in-out ${Math.random() * 3 + 2}s infinite alternate`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  <i className="fas fa-microchip fa-2x"></i>
                </div>
              ))}
            </div>

            <div className="circuit-overlay d-flex align-items-center justify-content-center text-center" style={{ position: 'relative', zIndex: 2, height: '100%' }}>
              <div>
                <h2 className="display-4 fw-bold mb-3">Embedded Innovation</h2>
                <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
                  Bringing hardware and software together to create intelligent systems
                </p>
              </div>
            </div>
          </div>
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
              <h2 className="display-4 fw-bold mb-4">{embeddedPageData.cta.title}</h2>
              <p className="lead mb-5" style={{ fontSize: '1.2rem' }}>
                {embeddedPageData.cta.text}
              </p>
              <Link
                to={embeddedPageData.cta.buttonLink}
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
                {embeddedPageData.cta.buttonText} <i className="fas fa-arrow-right ms-2"></i>
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

        @keyframes circuit-flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes fade-in-out {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default EmbeddedPage;
