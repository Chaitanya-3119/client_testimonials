import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnalyticsPage = () => {
  const [activeSection, setActiveSection] = useState('customer');
  const [isIntersecting, setIsIntersecting] = useState({});
  const heroRef = useRef(null);
  const dashboardRef = useRef(null);
  const sectionRefs = {
    intro: useRef(null),
    customer: useRef(null),
    risk: useRef(null),
    finance: useRef(null),
    hr: useRef(null)
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from(heroRef.current.querySelector('h1'), {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(heroRef.current.querySelector('p'), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3
      });

      gsap.from(heroRef.current.querySelectorAll('button, a'), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.6
      });

      // Dashboard animation
      gsap.from(dashboardRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.8
      });

      // Stats animation
      gsap.from('.stat-item', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 1.2
      });

    }, heroRef);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        setIsIntersecting(prev => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting
        }));

        if (entry.isIntersecting && entry.target.id !== 'intro') {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      ctx.revert();
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
  };

  const analyticsTypes = [
    {
      id: 'customer',
      title: 'Customer Analytics',
      icon: 'fa-users'
    },
    {
      id: 'risk',
      title: 'Risk Analytics',
      icon: 'fa-shield-alt'
    },
    {
      id: 'finance',
      title: 'Finance Analytics',
      icon: 'fa-chart-line'
    },
    {
      id: 'hr',
      title: 'HR Analytics',
      icon: 'fa-user-tie'
    }
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #002956 0%, #001a3a 100%)',
          color: 'white',
          overflow: 'hidden'
        }}
      >
        {/* Animated background with particles */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            zIndex: 0
          }}
        ></div>

        {/* Animated overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(0,160,233,0.1) 0%, rgba(26,26,46,0.1) 70%)',
            zIndex: 1
          }}
        ></div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              backgroundColor: 'rgba(0, 160, 233, 0.3)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              zIndex: 1
            }}
          ></div>
        ))}

        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="position-relative" style={{ zIndex: 2, animation: 'fadeInLeft 1s ease-out' }}>
              <div className="position-relative">
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(0, 160, 233, 0.2)',
                    borderRadius: '30px',
                    color: '#00a0e9',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 160, 233, 0.3)',
                    boxShadow: '0 5px 15px rgba(0, 160, 233, 0.2)'
                  }}
                >
                  <i className="fas fa-chart-line me-2"></i> Data-Driven Insights
                </span>
              </div>

              <h1
                style={{
                  fontSize: '4.5rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(90deg, #0056b3, #00a0e9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  letterSpacing: '-1px'
                }}
              >
                Transform Your <br />
                <span style={{ position: 'relative' }}>
                  Data
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      left: 0,
                      width: '100%',
                      height: '8px',
                      background: 'rgba(0, 160, 233, 0.3)',
                      zIndex: -1,
                      borderRadius: '4px'
                    }}
                  ></span>
                </span> into Decisions
              </h1>

              <p
                style={{
                  fontSize: '1.3rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  color: '#e1e1e1'
                }}
              >
                We combine in-depth industry expertise with world-class technical knowledge to help you create compelling software-based products and unlock the full potential of your data.
              </p>

              <div
                style={{
                  marginTop: '2.5rem',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center'
                }}
              >
                <Button
                  onClick={() => scrollToSection('customer')}
                  style={{
                    background: 'linear-gradient(90deg, #0056b3, #00a0e9)',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 10px 20px rgba(0, 86, 179, 0.3)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 86, 179, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 86, 179, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Explore Analytics Solutions <i className="fas fa-arrow-right ms-2"></i>
                </Button>

                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#00a0e9';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Contact Us <i className="fas fa-long-arrow-alt-right ms-2"></i>
                </Link>
              </div>

              <div
                style={{
                  marginTop: '3rem',
                  display: 'flex',
                  gap: '30px'
                }}
              >
                {['98%', '24/7', '100+'].map((stat, index) => (
                  <div
                    key={index}
                    className="stat-item"
                    style={{
                      textAlign: 'center',
                      animation: 'fadeInLeft 1s ease-out forwards',
                      animationDelay: `${0.3 * (index + 1)}s`,
                      opacity: 0
                    }}
                  >
                    <div
                      style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#00a0e9',
                        marginBottom: '5px'
                      }}
                    >
                      {stat}
                    </div>
                    <div
                      style={{
                        fontSize: '0.9rem',
                        color: '#e1e1e1',
                        opacity: 0.8
                      }}
                    >
                      {index === 0 ? 'Client Satisfaction' : index === 1 ? 'Support' : 'Projects Delivered'}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={6} className="position-relative d-none d-lg-block" style={{ height: '100vh' }}>
              {/* 3D Dashboard Visualization */}
              <div
                ref={dashboardRef}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) perspective(1000px) rotateY(-15deg) rotateX(10deg)',
                  width: '90%',
                  height: '400px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                  overflow: 'hidden',
                  zIndex: 5,
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                {/* Dashboard Header */}
                <div
                  style={{
                    padding: '15px 20px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #0056b3, #00a0e9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '16px'
                      }}
                    >
                      <i className="fas fa-chart-pie"></i>
                    </div>
                    <span style={{ color: 'white', fontWeight: 600 }}>Analytics Dashboard</span>
                  </div>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {['fa-bell', 'fa-cog', 'fa-user-circle'].map((icon, i) => (
                      <div
                        key={i}
                        style={{
                          width: '30px',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '16px'
                        }}
                      >
                        <i className={`fas ${icon}`}></i>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Stats Row */}
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {[
                      { label: 'Revenue', value: '$12.4M', icon: 'fa-dollar-sign', color: '#00a0e9' },
                      { label: 'Users', value: '8.6K', icon: 'fa-users', color: '#6c5ce7' },
                      { label: 'Conversion', value: '24%', icon: 'fa-exchange-alt', color: '#00b894' },
                      { label: 'Growth', value: '+18%', icon: 'fa-chart-line', color: '#fdcb6e' }
                    ].map((stat, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '12px',
                          padding: '15px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          animation: 'fadeInLeft 0.5s ease-out forwards',
                          animationDelay: `${0.1 * i}s`,
                          opacity: 0
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem' }}>{stat.label}</span>
                          <div
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '8px',
                              background: `rgba(${stat.color === '#00a0e9' ? '0, 160, 233' : stat.color === '#6c5ce7' ? '108, 92, 231' : stat.color === '#00b894' ? '0, 184, 148' : '253, 203, 110'}, 0.2)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: stat.color
                            }}
                          >
                            <i className={`fas ${stat.icon}`}></i>
                          </div>
                        </div>
                        <div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700 }}>{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      padding: '20px',
                      height: '180px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                      <div>
                        <div style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>Performance Analytics</div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>Last 12 months</div>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        {['Day', 'Week', 'Month', 'Year'].map((period, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '5px',
                              fontSize: '0.8rem',
                              background: i === 3 ? 'rgba(0, 160, 233, 0.2)' : 'transparent',
                              color: i === 3 ? '#00a0e9' : 'rgba(255, 255, 255, 0.6)',
                              cursor: 'pointer'
                            }}
                          >
                            {period}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Chart Visualization */}
                    <div style={{ height: '120px', display: 'flex', alignItems: 'flex-end', gap: '8px', position: 'relative' }}>
                      {[40, 65, 45, 60, 70, 55, 65, 70, 85, 75, 90, 80].map((height, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            background: `linear-gradient(to top, ${i > 8 ? '#00a0e9' : 'rgba(255, 255, 255, 0.3)'}, ${i > 8 ? '#0056b3' : 'rgba(255, 255, 255, 0.1)'})`,
                            borderRadius: '4px',
                            position: 'relative',
                            animation: 'growUp 1.5s ease-out forwards',
                            animationDelay: `${0.05 * i}s`
                          }}
                        >
                          {i > 8 && (
                            <div
                              style={{
                                position: 'absolute',
                                top: '-25px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'rgba(0, 160, 233, 0.2)',
                                color: '#00a0e9',
                                padding: '3px 6px',
                                borderRadius: '4px',
                                fontSize: '0.7rem',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {i === 10 ? '+18%' : ''}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Trend Line */}
                      <svg
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 1
                        }}
                      >
                        <path
                          d={`M 0,${120 - 40 * 1.2} ${100 / 12},${120 - 65 * 1.2} ${100 * 2 / 12},${120 - 45 * 1.2} ${100 * 3 / 12},${120 - 60 * 1.2} ${100 * 4 / 12},${120 - 70 * 1.2} ${100 * 5 / 12},${120 - 55 * 1.2} ${100 * 6 / 12},${120 - 65 * 1.2} ${100 * 7 / 12},${120 - 70 * 1.2} ${100 * 8 / 12},${120 - 85 * 1.2} ${100 * 9 / 12},${120 - 75 * 1.2} ${100 * 10 / 12},${120 - 90 * 1.2} ${100 * 11 / 12},${120 - 80 * 1.2}`}
                          fill="none"
                          stroke="#00a0e9"
                          strokeWidth="2"
                          strokeDasharray="1000"
                          strokeDashoffset="1000"
                          style={{ animation: 'dash 2s ease-out forwards 1s' }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '5%',
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: 'rgba(0, 160, 233, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 160, 233, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00a0e9',
                  fontSize: '30px',
                  boxShadow: '0 10px 30px rgba(0, 160, 233, 0.3)',
                  animation: 'float 5s ease-in-out infinite',
                  animationDelay: '1s',
                  zIndex: 4
                }}
              >
                <i className="fas fa-chart-pie"></i>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '25%',
                  left: '10%',
                  width: '60px',
                  height: '60px',
                  borderRadius: '15px',
                  background: 'rgba(108, 92, 231, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(108, 92, 231, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6c5ce7',
                  fontSize: '24px',
                  boxShadow: '0 10px 30px rgba(108, 92, 231, 0.3)',
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: '0.5s',
                  zIndex: 4
                }}
              >
                <i className="fas fa-database"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style>{`
        @keyframes growUp {
          from { height: 0; }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(0, 160, 233, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 160, 233, 0.8); }
          100% { box-shadow: 0 0 5px rgba(0, 160, 233, 0.3); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      <div
        style={{
          position: 'sticky',
          top: '70px',
          backgroundColor: 'white',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          zIndex: 90,
          padding: '20px 0',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <Container>
          <div className="text-center mb-4">
            <h4
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1a1a2e',
                marginBottom: '10px'
              }}
            >
              Explore Our Analytics Solutions
            </h4>
            <p
              style={{
                fontSize: '1rem',
                color: '#666',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Discover how our analytics services can transform your business data into actionable insights
            </p>
          </div>

          <Nav
            className="justify-content-between"
            style={{
              gap: '15px',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {analyticsTypes.map(type => (
              <Nav.Item key={type.id} className="flex-fill">
                <Button
                  variant="link"
                  className="w-100 text-decoration-none"
                  style={{
                    padding: '20px 15px',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: activeSection === type.id ? 'white' : '#333',
                    background: activeSection === type.id
                      ? 'linear-gradient(135deg, #0056b3 0%, #00a0e9 100%)'
                      : 'white',
                    boxShadow: activeSection === type.id
                      ? '0 10px 20px rgba(0, 86, 179, 0.2)'
                      : '0 5px 15px rgba(0, 0, 0, 0.05)',
                    border: activeSection === type.id
                      ? 'none'
                      : '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => scrollToSection(type.id)}
                  onMouseOver={(e) => {
                    if (activeSection !== type.id) {
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeSection !== type.id) {
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {activeSection === type.id && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
                        opacity: 0.6
                      }}
                    ></div>
                  )}

                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: activeSection === type.id
                        ? 'rgba(255, 255, 255, 0.2)'
                        : 'rgba(0, 86, 179, 0.1)',
                      marginBottom: '5px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    <i
                      className={`fas ${type.icon}`}
                      style={{
                        fontSize: '1.8rem',
                        color: activeSection === type.id ? 'white' : '#0056b3',
                        transition: 'all 0.3s ease'
                      }}
                    ></i>
                  </div>

                  <span style={{ position: 'relative', zIndex: 1 }}>{type.title}</span>

                  {activeSection === type.id && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid #00a0e9'
                      }}
                    ></div>
                  )}
                </Button>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </div>

      <div style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <Container>
          <section
            id="intro"
            ref={sectionRefs.intro}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              opacity: isIntersecting.intro ? 1 : 0,
              transform: isIntersecting.intro ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div style={{ padding: '40px' }}>
                  <h2
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1a1a2e',
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}
                    className="position-relative"
                  >
                    Transforming Data into Business Insights
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #0056b3, #00a0e9)'
                      }}
                    ></span>
                  </h2>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <strong>Makonis</strong>, as a Business Intelligence and Analytics company, has deep experience in executing BI, Analytics, Big Data and Data Science projects covering data integration, data governance, dashboards & reports, ad-hoc analysis, migration, big data analytics, data science, real-time analytics, mobile BI, cloud BI and production support.
                  </p>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Our Data analytics consulting services unlocks various hidden opportunities and insights that cause a drastic effect on your business operations. We turn technology into business outcomes by delivering information management, business intelligence and analytic solutions under one roof. We harness big data analytics to drive better business outcomes and use next gen-analytics to power your data-driven organization.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <Row className="g-4">
                  {[
                    { icon: 'fa-database', title: 'Data Integration' },
                    { icon: 'fa-chart-pie', title: 'Business Intelligence' },
                    { icon: 'fa-brain', title: 'Data Science' },
                    { icon: 'fa-tachometer-alt', title: 'Real-time Analytics' }
                  ].map((item, index) => (
                    <Col md={6} key={index}>
                      <div
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '12px',
                          padding: '25px',
                          textAlign: 'center',
                          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-10px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
                        }}
                      >
                        <div
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0056b3, #00a0e9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 15px',
                            color: 'white',
                            fontSize: '30px',
                            boxShadow: '0 10px 20px rgba(0, 86, 179, 0.2)'
                          }}
                        >
                          <i className={`fas ${item.icon}`}></i>
                        </div>
                        <h3
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            color: '#1a1a2e'
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </section>

          <section
            id="customer"
            ref={sectionRefs.customer}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              opacity: isIntersecting.customer ? 1 : 0,
              transform: isIntersecting.customer ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div style={{ padding: '40px' }}>
                  <h2
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1a1a2e',
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}
                    className="position-relative"
                  >
                    Customer Analytics
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #0056b3, #00a0e9)'
                      }}
                    ></span>
                  </h2>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Customer analytics, also called customer data analytics, is the systematic examination of a company's customer information and customer behavior to identify, attract and retain the most profitable customers.
                  </p>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    The goal of customer analytics is to create a single, accurate view of a customer to make decisions about how best to acquire and retain customers, identify high-value customers and proactively interact with them. The better the understanding of a customer's buying habits and lifestyle preferences, the more accurate predictive behaviors become and the better the customer journey becomes.
                  </p>

                  <Row className="g-3 mt-4">
                    {[
                      { icon: 'fa-tags', title: 'Pricing Model' },
                      { icon: 'fa-user-minus', title: 'Churn Analysis' },
                      { icon: 'fa-layer-group', title: 'Data Segmentation' },
                      { icon: 'fa-medal', title: 'Loyalty Model' }
                    ].map((feature, index) => (
                      <Col md={6} key={index}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                          }}
                        >
                          <div
                            style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #0056b3, #00a0e9)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '20px',
                              flexShrink: 0
                            }}
                          >
                            <i className={`fas ${feature.icon}`}></i>
                          </div>
                          <h3
                            style={{
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#1a1a2e',
                              margin: 0
                            }}
                          >
                            {feature.title}
                          </h3>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  style={{
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="https://placehold.co/600x400/0056b3/FFFFFF?text=Customer+Analytics"
                    alt="Customer Analytics"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              </Col>
            </Row>
          </section>

          <section
            id="risk"
            ref={sectionRefs.risk}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              opacity: isIntersecting.risk ? 1 : 0,
              transform: isIntersecting.risk ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <Row className="align-items-center flex-row-reverse">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div style={{ padding: '40px' }}>
                  <h2
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1a1a2e',
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}
                    className="position-relative"
                  >
                    Risk Analytics
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #0056b3, #00a0e9)'
                      }}
                    ></span>
                  </h2>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Risk analytics (or risk analysis) is the study of the underlying uncertainty of a given course of action. It often works in tandem with forecasting professionals to minimize future negative unforeseen effects.
                  </p>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    You can mitigate these risks by clearly defining, understanding, and managing tolerance for and exposure to risk. Advanced analytics capabilities enable clearer visibility into the challenges associated with managing the many types of risk in such key areas as operations, regulatory compliance, supply chain, finance, ecommerce, and credit.
                  </p>

                  <div
                    style={{
                      marginTop: '30px',
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      padding: '25px',
                      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: '#1a1a2e',
                        marginBottom: '15px'
                      }}
                    >
                      Risk analytics solutions enable you to:
                    </h3>
                    <ul
                      style={{
                        paddingLeft: '20px'
                      }}
                    >
                      {[
                        'Improve decision making by providing risk analysis, insight and transparency.',
                        'Reduce the cost of regulatory compliance.',
                        'Dynamically evolve with a risk architecture that can efficiently adapt as risk management practices, client demands and regulations change.'
                      ].map((item, index) => (
                        <li
                          key={index}
                          style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            color: '#555',
                            marginBottom: '10px',
                            position: 'relative',
                            paddingLeft: '10px'
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  style={{
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="https://placehold.co/600x400/00a0e9/FFFFFF?text=Risk+Analytics"
                    alt="Risk Analytics"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              </Col>
            </Row>
          </section>

          <section
            id="finance"
            ref={sectionRefs.finance}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              opacity: isIntersecting.finance ? 1 : 0,
              transform: isIntersecting.finance ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div style={{ padding: '40px' }}>
                  <h2
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1a1a2e',
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}
                    className="position-relative"
                  >
                    Finance Analytics
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #0056b3, #00a0e9)'
                      }}
                    ></span>
                  </h2>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    We all know the emerging effect of digitalization in the financial economy. Not just it is creating a requirement for the storage of huge data but also has led to a situation where the huge data needs to managed efficiently and the best data out of it should be extracted so that it can be helpful on the further stages.
                  </p>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Typically, financial analysis is used to analyze whether an entity is stable, solvent, liquid or profitable enough to warrant a monetary investment. When looking at a specific company, a financial analyst conducts analysis by focusing on the income statement, balance sheet, and cash flow statement.
                  </p>

                  <Row className="g-3 mt-4">
                    {[
                      { icon: 'fa-money-bill-wave', title: 'Cash Flow Analysis' },
                      { icon: 'fa-chart-pie', title: 'ROI Analysis' },
                      { icon: 'fa-balance-scale', title: 'P & L Analysis' },
                      { icon: 'fa-hand-holding-usd', title: 'Revenue Analysis' }
                    ].map((feature, index) => (
                      <Col md={6} key={index}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                          }}
                        >
                          <div
                            style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #0056b3, #00a0e9)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '20px',
                              flexShrink: 0
                            }}
                          >
                            <i className={`fas ${feature.icon}`}></i>
                          </div>
                          <h3
                            style={{
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#1a1a2e',
                              margin: 0
                            }}
                          >
                            {feature.title}
                          </h3>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  style={{
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="https://placehold.co/600x400/0056b3/FFFFFF?text=Finance+Analytics"
                    alt="Finance Analytics"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              </Col>
            </Row>
          </section>

          <section
            id="hr"
            ref={sectionRefs.hr}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '100px',
              opacity: isIntersecting.hr ? 1 : 0,
              transform: isIntersecting.hr ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <Row className="align-items-center flex-row-reverse">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div style={{ padding: '40px' }}>
                  <h2
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#1a1a2e',
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}
                    className="position-relative"
                  >
                    HR Analytics
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: 0,
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #0056b3, #00a0e9)'
                      }}
                    ></span>
                  </h2>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    Human resource analytics (HR analytics) is an area in the field of analytics that refers to applying analytic processes to the human resource department of an organization in the hope of improving employee performance and therefore getting a better return on investment.
                  </p>
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: '#555',
                      marginBottom: '1.5rem'
                    }}
                  >
                    HR analytics does not just deal with gathering data on employee efficiency. Instead, it aims to provide insight into each process by gathering data and then using it to make relevant decisions about how to improve these processes.
                  </p>

                  <Row className="g-3 mt-4">
                    {[
                      { icon: 'fa-user-check', title: 'Performance Analysis' },
                      { icon: 'fa-users-cog', title: 'Workforce Planning' },
                      { icon: 'fa-user-graduate', title: 'Talent Development' },
                      { icon: 'fa-user-clock', title: 'Retention Analysis' }
                    ].map((feature, index) => (
                      <Col md={6} key={index}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                          }}
                        >
                          <div
                            style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #0056b3, #00a0e9)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '20px',
                              flexShrink: 0
                            }}
                          >
                            <i className={`fas ${feature.icon}`}></i>
                          </div>
                          <h3
                            style={{
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              color: '#1a1a2e',
                              margin: 0
                            }}
                          >
                            {feature.title}
                          </h3>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
              <Col lg={6}>
                <div
                  style={{
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src="https://placehold.co/600x400/00a0e9/FFFFFF?text=HR+Analytics"
                    alt="HR Analytics"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>

      <div
        style={{
          padding: '120px 0',
          position: 'relative',
          overflow: 'hidden',
          color: 'white',
          textAlign: 'center'
        }}
      >
        {/* Background with overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -2
          }}
        ></div>

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)',
            zIndex: -1
          }}
        ></div>

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              backgroundColor: 'rgba(0, 160, 233, 0.2)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              zIndex: 0
            }}
          ></div>
        ))}

        <Container className="position-relative" style={{ zIndex: 1 }}>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'rgba(0, 160, 233, 0.2)',
                  borderRadius: '30px',
                  color: '#00a0e9',
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 160, 233, 0.3)',
                  boxShadow: '0 5px 15px rgba(0, 160, 233, 0.2)'
                }}
              >
                <i className="fas fa-rocket me-2"></i> Start Your Analytics Journey
              </div>

              <h2
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(90deg, #ffffff, #e1e1e1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                  letterSpacing: '-1px'
                }}
              >
                Ready to Transform Your Data into <span style={{ position: 'relative', display: 'inline-block' }}>
                  Actionable Insights
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      left: 0,
                      width: '100%',
                      height: '8px',
                      background: 'rgba(0, 160, 233, 0.3)',
                      zIndex: -1,
                      borderRadius: '4px'
                    }}
                  ></span>
                </span>?
              </h2>

              <p
                style={{
                  fontSize: '1.3rem',
                  lineHeight: 1.8,
                  marginBottom: '3rem',
                  color: '#e1e1e1',
                  maxWidth: '800px',
                  margin: '0 auto 3rem'
                }}
              >
                Our expertise will help you succeed in the digital world. Contact us and we'll have one of our experts reach out to you to discover how we can lead your project to success.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(90deg, #0056b3, #00a0e9)',
                    color: 'white',
                    padding: '18px 35px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 10px 20px rgba(0, 86, 179, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 86, 179, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 86, 179, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>Get Started <i className="fas fa-arrow-right ms-2"></i></span>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
                      opacity: 0.6
                    }}
                  ></div>
                </Link>

                <a
                  href="tel:+918041707838"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    padding: '18px 35px',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <i className="fas fa-phone-alt me-2"></i> Call Us Now
                </a>
              </div>

              <div
                style={{
                  marginTop: '4rem',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '40px'
                }}
              >
                {[
                  { number: '100+', text: 'Projects Completed' },
                  { number: '98%', text: 'Client Satisfaction' },
                  { number: '24/7', text: 'Support Available' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: 'center',
                      animation: 'fadeInLeft 1s ease-out forwards',
                      animationDelay: `${0.3 * (index + 1)}s`,
                      opacity: 0
                    }}
                  >
                    <div
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        color: '#00a0e9',
                        marginBottom: '5px'
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontSize: '1rem',
                        color: '#e1e1e1',
                        opacity: 0.8
                      }}
                    >
                      {stat.text}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AnalyticsPage;
