import React, { useState, useEffect, useMemo, useRef } from "react";
import { Container, Row, Col, Nav, Tab, Image, Button } from "react-bootstrap";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaCard from "./MediaCard";

gsap.registerPlugin(ScrollTrigger);

// Helper for hover styles - you can expand this as needed
const getHoverStyles = (isHovered, baseStyle, hoverStyle) => {
  return isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;
};

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState("financial");
  const [hoveredNavLink, setHoveredNavLink] = useState(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [isImageHeaderHovered, setIsImageHeaderHovered] = useState(false);
  const [autoSwitch, setAutoSwitch] = useState(true); // State to control auto-switching
  const [autoSwitchTimer, setAutoSwitchTimer] = useState(null); // State to store the timer ID
  const [timeRemaining, setTimeRemaining] = useState(0); // Time remaining until auto-switch resumes

  // Time in milliseconds before auto-switching resumes (1 minute)
  const AUTO_SWITCH_RESUME_DELAY = 60000;

  // Refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Tabs container animation
      gsap.from(tabsContainerRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tabsContainerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Nav items stagger animation
      gsap.from(".nav-item", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tabsContainerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Content change animation
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }
      );
    }
  }, [activeTab]);

  const tabs = useMemo(
    () => [
      {
        id: "financial",
        label: "Financial Services",
        icon: "fa-dollar-sign",
        displayName: "Finance",
        color: "#0d6efd",
      },
      {
        id: "healthcare",
        label: "Health Care",
        icon: "fa-plus",
        displayName: "Health",
        color: "#198754",
      },
      {
        id: "insurance",
        label: "Insurance",
        icon: "fa-umbrella",
        displayName: "Insurance",
        color: "#6f42c1",
      },
      {
        id: "travel",
        label: "Travel",
        icon: "fa-plane",
        displayName: "Travel",
        color: "#0dcaf0",
      },
      {
        id: "energy",
        label: "Energy",
        icon: "fa-bolt",
        displayName: "Energy",
        color: "#ffc107",
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: "fa-cogs",
        displayName: "Industry",
        color: "#fd7e14",
      },
      {
        id: "media",
        label: "Media",
        icon: "fa-film",
        displayName: "Media",
        color: "#d63384",
      },
    ],
    []
  );

  const mediaServices = useMemo(
    () => [
      {
        id: 1,
        title: "Digital Content Creation",
        description:
          "Create engaging digital content for multiple platforms with our expert team.",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        icon: "fa-desktop",
        color: "#007bff",
      },
      {
        id: 2,
        title: "Video Production",
        description:
          "Professional video production services for commercials, corporate videos, and more.",
        image:
          "https://images.unsplash.com/photo-1505489800120-875d48889804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        icon: "fa-film",
        color: "#17a2b8",
      },
      {
        id: 3,
        title: "Social Media Management",
        description:
          "Comprehensive social media management to boost your brand presence.",
        image:
          "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        icon: "fa-hashtag",
        color: "#28a745",
      },

    ],
    []
  );

  const industryContent = useMemo(
    () => ({
      financial: {
        image:
          "https://images.unsplash.com/photo-1554260570-e9689a3418b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        content:
          "As there is a wave of digitalization in the world of Finance, the requirement of the top-rated application and the application providers have reached to the top notch. Makonis have partnered with many Fortune companies to provide their clients the best of all the services. Right from storing their data or developing a high-quality web application to provide with A-Class testing facility, we are here!",
      },
      healthcare: {
        image: "https://placehold.co/800x400/f8f9fa/333333?text=Healthcare",
        content:
          "As well know, human error is the biggest concern when health care field are concerned. Makonis have their team who specializes in reducing not just the human error but also promotes minimizing the total cost endured while getting over the toughest situation.",
      },
      insurance: {
        image: "https://placehold.co/800x400/e9ecef/333333?text=Insurance",
        content:
          "This is where the big data comes into the picture. Handling huge data and merging them into one perfect statistical analytics is what our team will be focusing on. No matter how your data type is, we will make it addressable to you.",
      },

      travel: {
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        content:
          "Makonis software solution for travel industry is something that you will catch your eye, we as a team not only focuses on the mobile app development or the trendiest websites, but also as a team we promise to maintain it for you by adding some exclusive features like voice searching, meta adding of data and virtual reality.",
      },
      energy: {
        image: "https://placehold.co/800x400/e9ecef/333333?text=Energy",
        content:
          "With the advancement of IoT in the digital market, saving energy along with its resources has become the new trend setter. With this feature, we will focus on the reduced cost factor, enhanced services, optimizing energy supply and maximizing efficiency.",
      },
      manufacturing: {
        image: "https://placehold.co/800x400/f8f9fa/333333?text=Manufacturing",
        content:
          "Makonis provides innovative software solutions to manufacturing industry that helps manufacturing enterprises stay lean, sprightly and competitive. We are had some expertise in giving assembling programming that explains your business difficulties and meets your novel and fluctuated industry-explicit necessities.",
      },
      media: {
        image:
          "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        content:
          "We help media and diversion organizations profit by advanced development with its plenty shots and rivalries. With Makonis' answers set up, our clients can amplify incomes while coming to and connecting with buyers over all channels and consistently.",
      },
      // ... (other industries)
    }),
    []
  );

  // Effect for auto-switching tabs
  useEffect(() => {
    let interval;

    // Only set up the interval if autoSwitch is true
    if (autoSwitch) {
      interval = setInterval(() => {
        const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex].id);
      }, 7000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTab, tabs, autoSwitch]);

  // Effect to clean up timer when component unmounts
  useEffect(() => {
    // Cleanup function to clear the timer when component unmounts
    return () => {
      if (autoSwitchTimer) {
        clearTimeout(autoSwitchTimer);
      }
    };
  }, [autoSwitchTimer]);

  // Effect to update countdown timer
  useEffect(() => {
    let countdownInterval;

    if (!autoSwitch && autoSwitchTimer) {
      // Set initial time remaining
      setTimeRemaining(Math.ceil(AUTO_SWITCH_RESUME_DELAY / 1000));

      // Update countdown every second
      countdownInterval = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      setTimeRemaining(0);
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [autoSwitch, autoSwitchTimer, AUTO_SWITCH_RESUME_DELAY]);

  // Function to handle tab clicks
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setAutoSwitch(false); // Stop auto-switching when a tab is clicked

    // Clear any existing timer
    if (autoSwitchTimer) {
      clearTimeout(autoSwitchTimer);
    }

    // Set a new timer to restart auto-switching after 1 minute
    const timerId = setTimeout(() => {
      setAutoSwitch(true); // Resume auto-switching
    }, AUTO_SWITCH_RESUME_DELAY);

    setAutoSwitchTimer(timerId);
  };

  const currentIndustryData = tabs.find((tab) => tab.id === activeTab);
  const currentContentData = industryContent[activeTab];

  // Styles for Nav Links (to handle hover and active states with inline styles)
  const getNavLinkStyle = (tabId) => {
    const isActive = activeTab === tabId;
    const isHover = hoveredNavLink === tabId;
    const industryColor =
      tabs.find((t) => t.id === tabId)?.color || "var(--bs-primary)";

    let style = {
      padding: "0.9rem 1rem",
      color: "rgba(255, 255, 255, 0.8)",
      border: "none",
      borderRadius: "0.5rem", // 8px
      transition:
        "background-color 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease",
      cursor: "pointer",
      fontWeight: 500,
    };

    if (isActive) {
      style = {
        ...style,
        backgroundColor: industryColor,
        color: "#fff",
        fontWeight: 600,
        boxShadow: `0 4px 12px rgba(${hexToRgb(industryColor)}, 0.3)`,
      };
    } else if (isHover) {
      style = {
        ...style,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: industryColor,
        transform: "translateX(3px)",
      };
    }
    return style;
  };

  const getNavIconStyle = (tabId) => {
    const isActive = activeTab === tabId;
    const isHover = hoveredNavLink === tabId;
    const industryColor =
      tabs.find((t) => t.id === tabId)?.color || "var(--bs-primary)";

    let style = {
      width: "20px",
      color: "rgba(255, 255, 255, 0.6)",
      transition: "color 0.2s ease-in-out",
    };
    if (isActive) {
      style.color = "#fff";
    } else if (isHover) {
      style.color = industryColor;
    }
    return style;
  };

  // Helper to convert hex to rgb for rgba usage
  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    // eslint-disable-next-line no-unused-vars
    hex = hex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )}`
      : "0,0,0";
  }

  const industryImageHeaderStyle = {
    position: "relative",
    height: "300px", // Increased height for impact
    overflow: "hidden",
    backgroundColor: "#343a40", // Fallback
    borderRadius: "0.75rem", // Bootstrap's rounded-lg equivalent
    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease", // For subtle hover effect on the container
    transform: isImageHeaderHovered ? "scale(1.02)" : "scale(1)",
  };

  const industryHeaderBgImageStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
    transform: isImageHeaderHovered ? "scale(1.1)" : "scale(1.05)", // Slightly different zoom on image itself
  };

  const industryNameOverlayStyle = {
    // Simplified animation with transition
    transition: "opacity 0.6s 0.2s ease, transform 0.6s 0.2s ease", // Delay for text
    opacity: activeTab === currentIndustryData?.id ? 1 : 0, // Fade in when tab is active
    transform:
      activeTab === currentIndustryData?.id
        ? "translateY(0)"
        : "translateY(20px)",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  };

  return (
    <section
      ref={sectionRef}
      className="py-5 py-md-6 position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
        backdropFilter: 'blur(10px)'
      }}
      id="industries-section"
    >
      {/* Enhanced Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="position-absolute"
            style={{
              width: '3px',
              height: '3px',
              background: 'rgba(0, 160, 233, 0.6)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 8s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: '0 0 10px rgba(0, 160, 233, 0.8)'
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div
          className="position-absolute"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 160, 233, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '10%',
            right: '5%',
            filter: 'blur(60px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <div ref={titleRef} className="text-center mb-5 mb-md-6">
          {/* Enhanced Badge */}
          <div
            className="d-inline-flex align-items-center px-4 py-2 rounded-pill mb-4"
            style={{
              background: 'rgba(0, 160, 233, 0.15)',
              border: '1px solid rgba(0, 160, 233, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <i className="fas fa-industry me-2" style={{ color: '#00a0e9' }}></i>
            <span style={{ color: '#00a0e9', fontWeight: '600', fontSize: '0.9rem' }}>
              INDUSTRIES WE SERVE
            </span>
          </div>

          <h2
            className="display-4 fw-bolder mb-3"
            style={{
              color: '#ffffff',
              background: 'linear-gradient(135deg, #ffffff 0%, #00a0e9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Industries Empowered
          </h2>

          <div
            className="mx-auto mt-4 position-relative"
            style={{ width: "120px", height: "4px" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${
                  currentIndustryData?.color || "#00a0e9"
                }, transparent)`,
                borderRadius: "2px",
                transition: "background 0.3s ease",
                boxShadow: `0 0 20px ${currentIndustryData?.color || "#00a0e9"}50`
              }}
            />
          </div>
        </div>

        <div
          ref={tabsContainerRef}
          className="shadow-lg overflow-hidden"
          style={{
            borderRadius: "1.5rem",
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Tab.Container
            id="industry-tabs-container"
            activeKey={activeTab}
            onSelect={handleTabClick}
          >
            <Row className="g-0">
              <Col
                xs={12}
                md={4}
                lg={3}
                className="border-end d-block"
                style={{
                  background: 'rgba(0, 41, 86, 0.7)',
                  borderColor: 'rgba(255, 255, 255, 0.2) !important',
                  minHeight: '400px',
                  display: 'block !important',
                  visibility: 'visible !important'
                }}
              >
                <div className="d-flex flex-column h-100">
                  <div className="flex-grow-1">
                    <Nav variant="pills" className="flex-column p-3 p-md-4" style={{ minHeight: '300px' }}>
                      {tabs.map((tab) => (
                        <Nav.Item key={tab.id} className="mb-2 nav-item">
                          <Nav.Link
                            eventKey={tab.id}
                            className="d-flex align-items-center text-decoration-none" // Basic Bootstrap flex
                            style={{
                              ...getNavLinkStyle(tab.id),
                              display: 'flex !important',
                              visibility: 'visible !important',
                              opacity: '1 !important'
                            }}
                            onMouseEnter={() => setHoveredNavLink(tab.id)}
                            onMouseLeave={() => setHoveredNavLink(null)}
                          >
                            <i
                              className={`fas ${tab.icon} me-3`}
                              style={getNavIconStyle(tab.id)}
                            ></i>
                            <span>{tab.label}</span>

                            {/* Auto-switch indicator */}
                            {autoSwitch && activeTab === tab.id && (
                              <div
                                className="ms-auto"
                                title="Auto-switching is active. Click any tab to stop."
                              >
                                <div
                                  className="spinner-grow spinner-grow-sm text-light"
                                  role="status"
                                  style={{ width: '0.5rem', height: '0.5rem' }}
                                >
                                  <span className="visually-hidden">Auto-switching...</span>
                                </div>
                              </div>
                            )}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>

                  {/* Auto-switch toggle button and countdown */}
                  {!autoSwitch && (
                    <div className="p-3 text-center">
                      <div className="mb-2 small" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        Auto-switching resumes in <span className="fw-bold">{timeRemaining}</span> seconds
                      </div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill"
                        onClick={() => {
                          // Clear any existing timer
                          if (autoSwitchTimer) {
                            clearTimeout(autoSwitchTimer);
                            setAutoSwitchTimer(null);
                          }
                          setAutoSwitch(true); // Immediately restart auto-switching
                        }}
                        title="Restart automatic tab switching now"
                      >
                        <i className="fas fa-sync-alt me-2"></i>
                        Resume Now
                      </Button>
                    </div>
                  )}
                </div>
              </Col>
              <Col xs={12} md={8} lg={9}>
                <Tab.Content className="p-4 p-md-5">
                  {tabs.map((tab) => (
                    <Tab.Pane
                      key={tab.id}
                      eventKey={tab.id} // Bootstrap handles fade via Tab.Container
                      className={
                        activeTab === tab.id
                          ? "animate__animated animate__fadeInUp animate__faster"
                          : ""
                      } // Using animate.css for entry
                      style={{ animationDuration: "0.5s" }} // Control speed
                    >
                      {currentIndustryData &&
                        currentContentData &&
                        activeTab === tab.id && (
                          <div ref={contentRef}>
                            <div
                              style={{
                                ...industryImageHeaderStyle,
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                position: 'relative'
                              }}
                              onMouseEnter={() => setIsImageHeaderHovered(true)}
                              onMouseLeave={() =>
                                setIsImageHeaderHovered(false)
                              }
                            >
                              <Image
                                src={currentContentData.image}
                                alt={`${currentIndustryData.label} background`}
                                style={industryHeaderBgImageStyle}
                              />

                              {/* Enhanced Overlay */}
                              <div
                                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                                }}
                              >
                                <div className="text-center">
                                  <div
                                    className="d-inline-flex align-items-center px-3 py-2 rounded-pill mb-3"
                                    style={{
                                      background: 'rgba(255, 255, 255, 0.15)',
                                      backdropFilter: 'blur(10px)',
                                      border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}
                                  >
                                    <i
                                      className={`fas ${currentIndustryData.icon} me-2`}
                                      style={{ color: currentIndustryData.color }}
                                    />
                                    <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '600' }}>
                                      {currentIndustryData.label}
                                    </span>
                                  </div>

                                  <h3
                                    className="display-2 fw-bold text-white text-center px-3"
                                    style={{
                                      ...industryNameOverlayStyle,
                                      textShadow: '2px 2px 20px rgba(0,0,0,0.8)',
                                      background: `linear-gradient(135deg, #ffffff 0%, ${currentIndustryData.color} 100%)`,
                                      WebkitBackgroundClip: 'text',
                                      WebkitTextFillColor: 'transparent',
                                      backgroundClip: 'text'
                                    }}
                                  >
                                    {currentIndustryData.displayName}
                                  </h3>
                                </div>
                              </div>

                              {/* Shine Effect */}
                              <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                                  transform: isImageHeaderHovered ? 'translateX(100%)' : 'translateX(-100%)',
                                  transition: 'transform 0.8s ease',
                                  zIndex: 2
                                }}
                              />
                            </div>

                            <div
                              className="mt-4 p-4 rounded-3"
                              style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                              }}
                            >
                              <p
                                className="lead mb-0"
                                style={{
                                  lineHeight: 1.8,
                                  fontSize: "1.1rem",
                                  color: 'rgba(255, 255, 255, 0.9)'
                                }}
                              >
                                {currentContentData.content}
                              </p>
                            </div>
                          </div>
                        )}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        {activeTab === "media" && (
          <div
            className="mt-5 pt-4 p-4 p-md-5 shadow-lg"
            style={{
              borderRadius: "1rem",
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="text-center mb-4 mb-md-5">
              <h3 className="display-5 fw-bolder mb-3" style={{ color: '#ffffff' }}>
                Advanced Media Solutions
              </h3>
              <p
                className="lead mx-auto"
                style={{
                  maxWidth: "750px",
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                Our comprehensive media solutions help you create, manage,
                distribute, and analyze content across multiple platforms.
              </p>
              <div
                className="mx-auto mt-4"
                style={{
                  width: "80px",
                  height: "3px",
                  background:
                    "linear-gradient(90deg, transparent, var(--bs-info), transparent)",
                  borderRadius: "2px",
                }}
              ></div>
            </div>

            <Row className="g-4 g-lg-5 mt-2 justify-content-center">
              {mediaServices.map((service) => (
                <Col key={service.id} md={6} lg={4} className="d-flex">
                  <MediaCard item={service} />
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5 pt-3">
              <Button
                variant="primary"
                size="lg"
                className="rounded-pill fw-bold"
                style={getHoverStyles(
                  isCtaHovered,
                  {
                    // Base Style
                    padding: "0.9rem 2.2rem",
                    fontSize: "1rem",
                    background: "linear-gradient(90deg, #0062cc, #007bff)",
                    border: "none",
                    boxShadow: "0 5px 15px rgba(0, 123, 255, 0.25)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    transform: "translateY(0)",
                  },
                  {
                    // Hover Style
                    background: "linear-gradient(90deg, #0056b3, #0069d9)",
                    boxShadow: "0 8px 20px rgba(0, 123, 255, 0.35)",
                    transform: "translateY(-3px)",
                  }
                )}
                onMouseEnter={() => setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
              >
                Discuss Your Media Strategy
              </Button>
            </div>
          </div>
        )}
      </Container>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
            opacity: 1;
          }
          66% {
            transform: translateY(5px) rotate(240deg);
            opacity: 0.8;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.2;
          }
        }

        /* Ensure navigation items stay visible */
        .nav-item {
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
        }

        .nav-item .nav-link {
          opacity: 1 !important;
          visibility: visible !important;
          display: flex !important;
        }
      `}</style>
    </section>
  );
};

export default MediaSection;
