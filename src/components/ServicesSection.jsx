import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from './ServiceCard';

gsap.registerPlugin(ScrollTrigger);

// Enhanced SVG Blob for a more modern feel - example
const ModernBlob1 = () => (
  <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0, opacity: 0.08, position: 'absolute', top: '-100px', right: '-150px' }}>
    <defs>
      <linearGradient id="blobGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#007bff', stopOpacity: 1 }} /> {/* Primary Blue */}
        <stop offset="100%" style={{ stopColor: '#00a0e9', stopOpacity: 1 }} /> {/* Lighter Blue from your example */}
      </linearGradient>
    </defs>
    <path fill="url(#blobGradient1)" d="M60.1,-66.9C76.5,-56.8,87.5,-37.9,89.9,-18.3C92.3,1.3,86.1,21.5,74.1,37.9C62.1,54.3,44.3,67,25.5,73.7C6.7,80.4,-13.2,81.2,-30.9,74.8C-48.6,68.4,-64.1,54.8,-72.4,38.2C-80.7,21.6,-81.8,2,-76.5,-16.1C-71.2,-34.2,-59.5,-50.8,-44.4,-61C-29.3,-71.1,-10.8,-74.7,9.3,-77.2C29.4,-79.7,51.1,-82.3,60.1,-66.9Z" transform="translate(100 100) scale(1.1)" />
  </svg>
);

const ModernBlob2 = () => (
  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0, opacity: 0.07, position: 'absolute', bottom: '-120px', left: '-100px' }}>
     <defs>
      <linearGradient id="blobGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#6f42c1', stopOpacity: 1 }} /> {/* A nice purple */}
        <stop offset="100%" style={{ stopColor: '#00a0e9', stopOpacity: 1 }} /> {/* Lighter Blue */}
      </linearGradient>
    </defs>
    <path fill="url(#blobGradient2)" d="M50.9,-57.9C65.9,-47.7,78.1,-33.5,81.2,-17.2C84.3,-0.9,78.3,17.6,67.3,32.8C56.3,48,40.3,59.9,23.3,66.6C6.2,73.3,-11.9,74.8,-28.7,69.8C-45.5,64.8,-61,53.3,-69.5,38.3C-77.9,23.3,-79.3,4.8,-74.7,-12.6C-70.1,-30,-59.5,-46.3,-45.7,-56.6C-31.9,-66.9,-14.9,-71.2,2.4,-73.2C19.7,-75.2,35.9,-68.1,50.9,-57.9Z" transform="translate(100 100) scale(0.9)" />
  </svg>
);


const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const backgroundRef = useRef(null);

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

      // Cards stagger animation
      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Background parallax effect
      gsap.to(backgroundRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      description: 'NLP services to extract insights from unstructured language and Computer Vision to recognize objects of interest.',
      image: 'https://t3.ftcdn.net/jpg/09/33/83/82/360_F_933838289_TS8PCfgl9RFC1Z6dRwkpxpsG9gSgObnB.jpg',
      icon: 'fa-brain', // Consider using a more modern icon pack or SVGs
      color: '#6495ED'
    },
    {
      id: 2,
      title: 'Internet of Things',
      description: 'As IoT advances, the dividing line between reality and virtual reality becomes blurred in a creative way.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Example: code
      icon: 'fa-network-wired',
      color: '#6495ED' 
    },
    {
      id: 3,
      title: 'Analytics',
      description: 'When we have all data online it will be great for humanity. It helps solve many problems that humankind faces.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: 'fa-chart-pie',
      color: '#6495ED' 
    },
    {
      id: 4,
      title: 'Web & Mobile Development',
      description: 'Faster page optimization, smooth navigation and responsive page is not a magic, but the smart developers make it happen.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: 'fa-laptop-code',
      color: '#6495ED' 
    },
    {
      id: 5,
      title: 'Testing',
      description: 'Testing is an infinite process of comparing the invisible to the ambiguous in order to avoid the unthinkable happening to the anonymous.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      icon: 'fa-vial',
      color: '#6495ED' 
    },
    {
      id: 6,
      title: 'Embedded Systems',
      description: 'Working on the integrated systems have been challenging so far, why not make it a worthwhile product eventually?',
      image: 'https://www.cprime.com/wp-content/uploads/2022/12/cprime-myths-about-embedded-systems-development.jpeg',
      icon: 'fa-microchip',
      color: '#6495ED' 
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-5 py-md-6 position-relative overflow-hidden"
      id="services-section"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Enhanced Background Elements */}
      <div
        ref={backgroundRef}
        className="position-absolute w-100 h-100"
        style={{ zIndex: 0 }}
      >
        {/* Animated Grid Pattern */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 160, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 160, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.3
          }}
        />

        {/* Floating Tech Icons */}
        {[
          { icon: 'fa-microchip', top: '10%', left: '5%', delay: 0 },
          { icon: 'fa-robot', top: '20%', right: '8%', delay: 1 },
          { icon: 'fa-cloud', bottom: '15%', left: '3%', delay: 2 },
          { icon: 'fa-chart-line', bottom: '25%', right: '5%', delay: 3 }
        ].map((item, index) => (
          <div
            key={index}
            className="position-absolute"
            style={{
              ...item,
              width: '60px',
              height: '60px',
              background: 'rgba(0, 160, 233, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 160, 233, 0.2)',
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${item.delay}s`
            }}
          >
            <i
              className={`fas ${item.icon}`}
              style={{
                color: 'rgba(0, 160, 233, 0.6)',
                fontSize: '1.5rem'
              }}
            />
          </div>
        ))}

        <ModernBlob1 />
        <ModernBlob2 />
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
            <i className="fas fa-rocket me-2" style={{ color: '#00a0e9' }}></i>
            <span style={{ color: '#00a0e9', fontWeight: '600', fontSize: '0.9rem' }}>
              OUR EXPERTISE
            </span>
          </div>

          <h2
            className="display-4 fw-bolder mb-4"
            style={{
              color: '#ffffff',
              background: 'linear-gradient(135deg, #ffffff 0%, #00a0e9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Innovative Solutions
          </h2>

          <p className="lead mx-auto mb-4" style={{
            maxWidth: '700px',
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6'
          }}>
            Makonis Software provides a wide range of services to help businesses
            leverage technology for growth and innovation.
          </p>

          {/* Enhanced Accent Line */}
          <div
            className="mx-auto position-relative"
            style={{ width: '120px', height: '4px' }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, #00a0e9, transparent)',
                borderRadius: '2px',
                boxShadow: '0 0 20px rgba(0, 160, 233, 0.5)'
              }}
            />
          </div>
        </div>

        <Row className="g-4 g-lg-5 justify-content-center">
          {services.map((service, index) => (
            <Col
              key={service.id}
              md={6}
              lg={4}
              className="d-flex"
              ref={el => cardsRef.current[index] = el}
            >
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5 pt-4">
          <div
            className="d-inline-flex align-items-center px-5 py-3 rounded-pill"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 160, 233, 0.2), rgba(0, 160, 233, 0.1))',
              border: '1px solid rgba(0, 160, 233, 0.3)',
              backdropFilter: 'blur(15px)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 160, 233, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: '600', marginRight: '10px' }}>
              Ready to transform your business?
            </span>
            <i className="fas fa-arrow-right" style={{ color: '#00a0e9' }}></i>
          </div>
        </div>
      </Container>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-3deg); }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;