import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

// Helper for hover styles (can be reused across components)
const getHoverStyles = (isHovered, baseStyle, hoverStyle) => {
  return isHovered ? { ...baseStyle, ...hoverStyle } : baseStyle;
};

const QuickTestingSection = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const imageContainerBaseStyle = {
    borderRadius: '1rem', // Softer, larger radius (Bootstrap rounded-4)
    overflow: 'hidden',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)', // Softer, more modern shadow
    transition: 'transform 0.35s ease-out, box-shadow 0.35s ease-out',
    transform: 'scale(1)',
  };

  const imageContainerHoverStyle = {
    transform: 'scale(1.03) translateY(-5px)',
    boxShadow: '0 1rem 2rem rgba(0, 86, 179, 0.15)', // A bit more lift and color hint
  };

  const imageStyle = {
    transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', // For a smoother scale if applied directly
    height: 'auto', // Maintain aspect ratio
    // transform: isImageHovered ? 'scale(1.05)' : 'scale(1)', // Alternative: scale image inside static container
  };

  const ctaButtonBaseStyle = {
    padding: '0.9rem 2.2rem', // Adjusted padding
    fontSize: '1.05rem',
    background: 'linear-gradient(95deg, #0056b3, #007bff)', // Slightly adjusted gradient
    border: 'none',
    boxShadow: '0 5px 15px rgba(0, 86, 179, 0.25)',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: 'translateY(0)',
  };

  const ctaButtonHoverStyle = {
    background: 'linear-gradient(95deg, #004a99, #0069d9)', // Darken on hover
    boxShadow: '0 8px 20px rgba(0, 86, 179, 0.35)',
    transform: 'translateY(-4px) scale(1.02)', // More pronounced lift
  };

  return (
    <section className="py-5 py-md-6" id="quick-testing-section" style={{
      background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
      backdropFilter: 'blur(10px)'
    }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="pe-lg-5"> {/* Add some padding to separate text from image on large screens */}
            <h6 className="fw-bold text-uppercase" style={{
              letterSpacing: '0.05em',
              color: '#00a0e9'
            }}>Flexible & Efficient</h6>
            <h2 className="display-4 fw-bolder mb-4" style={{
              lineHeight: '1.2',
              color: '#ffffff'
            }}>
              Streamlined Testing Solutions
            </h2>
            <p className="lead mb-4" style={{
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Traditional unit tests meticulously examine every code piece. You provide inputs, assert outputs, but sometimes test cases are limited, and dedicated, lengthy testing cycles aren't feasible.
            </p>
            <p className="mb-4" style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              This conventional method can overly focus on <em className="fw-medium" style={{
                fontStyle: 'normal',
                color: '#00a0e9'
              }}>internal</em> application workings. We offer a smarter way: test only what's necessary. Hire a testing engineer on your terms—even for a single test case. That's our flexibility promise.
            </p>
            <p className="mb-4" style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Imagine verifying your application's expected behavior without getting bogged down in implementation details. We make that a reality.
            </p>
            <Button
              variant="primary" // Bootstrap handles base color, gradient overrides
              size="lg"
              className="rounded-pill fw-bold d-inline-flex align-items-center" // For icon alignment
              style={getHoverStyles(isButtonHovered, ctaButtonBaseStyle, ctaButtonHoverStyle)}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              href="#contact" // Example link
            >
              Discuss Your Testing Needs
              <i className="fas fa-arrow-right ms-2"></i> {/* Example Font Awesome icon */}
            </Button>
          </Col>
          <Col lg={6}>
            <div
              style={getHoverStyles(isImageHovered, imageContainerBaseStyle, imageContainerHoverStyle)}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <Image
                // Replace with a high-quality, relevant image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Software testing process"
                fluid // Makes image responsive
                className="w-100" // Ensures image takes full width of its container
                style={imageStyle}
                // The hover transform is now primarily on the parent div for a container lift effect
              />
            </div>
             <p className="text-center mt-3 fst-italic small" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Our testing approach adapts to your unique project requirements.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuickTestingSection;