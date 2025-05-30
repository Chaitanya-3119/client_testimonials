import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServicesSection from '../components/ServicesSection';
import MediaSection from '../components/MediaSection';
import GallerySection from '../components/GallerySection';
import ClientsSection from '../components/ClientsSection';
import QuickTestingSection from '../components/QuickTestingSection';
import StunningLoadingScreen from '../components/StunningLoadingScreen';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const loadingRef = useRef(null);

  // Loading animation effect
  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Start exit animation
          gsap.to(loadingRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              setIsLoading(false);
            }
          });
          return 100;
        }
        return prev + Math.random() * 5 + 2;
      });
    }, 300);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Hero entrance animation with delay for loading
        const tl = gsap.timeline({ delay: 0.3 });

        tl.from(titleRef.current, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        })
        .from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.8")
        .from(ctaRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.6");

      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -20,
            duration: 2 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.3
          });
        }
      });

      // Particles animation
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: -100,
            x: Math.random() * 100 - 50,
            opacity: 0,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 3
          });
        }
      });

      }, heroRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <StunningLoadingScreen ref={loadingRef} loadingProgress={loadingProgress} />
      )}

      {/* Stunning Hero Section */}
      <section
        ref={heroRef}
        className="position-relative overflow-hidden"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #002956 0%, #001a3a 50%, #000f1f 100%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              ref={el => floatingElementsRef.current[i] = el}
              className="position-absolute"
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 40}px`,
                background: `linear-gradient(45deg, rgba(0, 160, 233, 0.1), rgba(0, 160, 233, 0.3))`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 160, 233, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 160, 233, 0.1)'
              }}
            />
          ))}

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              ref={el => particlesRef.current[i] = el}
              className="position-absolute"
              style={{
                width: '4px',
                height: '4px',
                background: '#00a0e9',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6,
                boxShadow: '0 0 10px #00a0e9'
              }}
            />
          ))}

          {/* Gradient Orbs */}
          <div
            className="position-absolute"
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(0, 160, 233, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              top: '20%',
              right: '10%',
              filter: 'blur(40px)'
            }}
          />
          <div
            className="position-absolute"
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(0, 160, 233, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              bottom: '30%',
              left: '15%',
              filter: 'blur(30px)'
            }}
          />
        </div>

        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-white">
              <div
                ref={titleRef}
                className="mb-4"
              >
                <h1
                  className="display-1 fw-bold mb-4"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 4.4rem)',
                    lineHeight: '1.1',
                    background: 'linear-gradient(135deg, #ffffff 0%, #00a0e9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 30px rgba(0, 160, 233, 0.3)'
                  }}
                >
                  Innovate.<br />
                  <span style={{ color: '#00a0e9' }}>Transform.</span><br />
                  Succeed.
                </h1>
              </div>

              <div ref={subtitleRef}>
                <p
                  className="lead mb-5"
                  style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '600px'
                  }}
                >
                  Empowering businesses with cutting-edge technology solutions.
                  From IoT to AI, we transform your vision into reality with
                  innovative software that drives growth and success.
                </p>
              </div>



              {/* Stats Section */}
              <Row className="mt-5 pt-4">
                {[
                  { number: '180+', label: 'Employees' },
                  { number: '99%', label: 'Client Satisfaction' },
                  { number: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <Col xs={4} key={index} className="text-center">
                    <div
                      className="p-3 rounded-4"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: '#00a0e9',
                          fontSize: '1.8rem'
                        }}
                      >
                        {stat.number}
                      </h3>
                      <p
                        className="small mb-0"
                        style={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontSize: '0.9rem'
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={6} className="d-none d-lg-block">
              {/* 3D Tech Visualization */}
              <div
                className="position-relative"
                style={{
                  height: '600px',
                  perspective: '1000px'
                }}
              >
                {/* Central Tech Hub */}
                <div
                  className="position-absolute top-50 start-50 translate-middle"
                  style={{
                    width: '200px',
                    height: '200px',
                    background: 'linear-gradient(135deg, rgba(0, 160, 233, 0.2), rgba(0, 160, 233, 0.4))',
                    borderRadius: '50%',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(0, 160, 233, 0.3)',
                    boxShadow: '0 0 60px rgba(0, 160, 233, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulse 3s ease-in-out infinite'
                  }}
                >
                  <i
                    className="fas fa-microchip"
                    style={{
                      fontSize: '4rem',
                      color: '#00a0e9',
                      textShadow: '0 0 20px rgba(0, 160, 233, 0.8)'
                    }}
                  ></i>
                </div>

                {/* Orbiting Tech Icons */}
                {[
                  { icon: 'fa-robot', angle: 0, radius: 150, color: '#00a0e9' },
                  { icon: 'fa-cloud', angle: 60, radius: 180, color: '#0056b3' },
                  { icon: 'fa-mobile-alt', angle: 120, radius: 160, color: '#00a0e9' },
                  { icon: 'fa-database', angle: 180, radius: 170, color: '#0056b3' },
                  { icon: 'fa-cogs', angle: 240, radius: 155, color: '#00a0e9' },
                  { icon: 'fa-chart-line', angle: 300, radius: 175, color: '#0056b3' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="position-absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateX(${item.radius}px) rotate(-${item.angle}deg)`,
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                      borderRadius: '20px',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${item.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 32px ${item.color}20`,
                      animation: `orbit 20s linear infinite`,
                      animationDelay: `${index * -3.33}s`
                    }}
                  >
                    <i
                      className={`fas ${item.icon}`}
                      style={{
                        fontSize: '1.5rem',
                        color: item.color
                      }}
                    ></i>
                  </div>
                ))}

                {/* Connection Lines */}
                <svg
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ zIndex: -1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 25 * Math.cos(i * Math.PI / 3)}%`}
                      y2={`${50 + 25 * Math.sin(i * Math.PI / 3)}%`}
                      stroke="rgba(0, 160, 233, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      style={{
                        animation: `dash 2s linear infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </svg>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Indicator */}
        {/* <div
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
          style={{ zIndex: 2 }}
        >
          <div
            className="d-flex flex-column align-items-center text-white"
            style={{ animation: 'bounce 2s infinite' }}
          >
            <span className="small mb-2" style={{ opacity: 0.8 }}>Scroll to explore</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div> */}

        {/* CSS Animations */}
        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes orbit {
            from { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius)) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
          }

          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-15px,0); }
            70% { transform: translate3d(0,-7px,0); }
            90% { transform: translate3d(0,-2px,0); }
          }

          @keyframes dash {
            to { stroke-dashoffset: -20; }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes fadeInOut {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }

          /* 3D Logo Animations */
          @keyframes rotate3D {
            0% { transform: rotateY(0deg) rotateX(0deg); }
            25% { transform: rotateY(90deg) rotateX(15deg); }
            50% { transform: rotateY(180deg) rotateX(0deg); }
            75% { transform: rotateY(270deg) rotateX(-15deg); }
            100% { transform: rotateY(360deg) rotateX(0deg); }
          }

          @keyframes logoGlow {
            0% {
              filter: drop-shadow(0 0 20px rgba(0, 160, 233, 0.8)) brightness(1.2);
              transform: scale(1);
            }
            100% {
              filter: drop-shadow(0 0 30px rgba(0, 160, 233, 1)) brightness(1.4);
              transform: scale(1.05);
            }
          }

          @keyframes iconPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.1);
              opacity: 1;
            }
          }

          @keyframes ringRotate0 {
            0% { transform: translate(-50%, -50%) rotateX(0deg) translateZ(0px) rotateZ(0deg); }
            100% { transform: translate(-50%, -50%) rotateX(0deg) translateZ(0px) rotateZ(360deg); }
          }

          @keyframes ringRotate1 {
            0% { transform: translate(-50%, -50%) rotateX(60deg) translateZ(15px) rotateZ(0deg); }
            100% { transform: translate(-50%, -50%) rotateX(60deg) translateZ(15px) rotateZ(-360deg); }
          }

          @keyframes ringRotate2 {
            0% { transform: translate(-50%, -50%) rotateX(120deg) translateZ(30px) rotateZ(0deg); }
            100% { transform: translate(-50%, -50%) rotateX(120deg) translateZ(30px) rotateZ(360deg); }
          }

          @keyframes particleOrbit {
            0% {
              transform: translate(-50%, -50%) rotate(0deg) translateX(80px) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translate(-50%, -50%) rotate(180deg) translateX(80px) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg) translateX(80px) scale(1);
              opacity: 0.6;
            }
          }

          /* Background Animations */
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          @keyframes floatOrb0 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -20px) scale(1.1); }
          }

          @keyframes floatOrb1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-25px, 15px) scale(0.9); }
          }

          @keyframes floatOrb2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, 25px) scale(1.2); }
          }

          @keyframes floatOrb3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-30px, -10px) scale(0.8); }
          }

          @keyframes floatOrb4 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(15px, -30px) scale(1.1); }
          }

          @keyframes floatOrb5 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.7;
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
        `}</style>
      </section>

      <ServicesSection />
      <MediaSection />
      <GallerySection />
      <ClientsSection />
      <QuickTestingSection />
    </>
  );
};

export default HomePage;
