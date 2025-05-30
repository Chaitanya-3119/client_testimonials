import React, { useState }
from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isNewsletterButtonHovered, setIsNewsletterButtonHovered] = useState(false);

  const newsletterButtonStyle = {
    backgroundColor: isNewsletterButtonHovered ? 'var(--bs-primary)' : 'var(--bs-secondary)', // Use secondary for base
    borderColor: isNewsletterButtonHovered ? 'var(--bs-primary)' : 'var(--bs-secondary)',
    color: '#fff',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem', // Ensure padding is good
  };

  return (
    <footer className="text-white py-5" style={{
      fontSize: '0.9rem',
      background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.95) 0%, rgba(0, 41, 86, 1) 100%)',
      backdropFilter: 'blur(10px)'
    }}> {/* Updated to match our theme */}
      <Container>
        {/* Top Section with Logo, Description, Links, and Contact */}
        <Row className="mb-5 pb-4 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.2) !important' }}> {/* Softer border */}
          <Col lg={4} xl={3} className="mb-4 mb-lg-0 pe-lg-4"> {/* Adjusted column size for logo area, added padding */}
            <div className="d-flex align-items-center mb-3">
              {/* If you have an image logo, replace this div */}
              <div className="bg-primary d-flex align-items-center justify-content-center me-3"
                   style={{ width: '48px', height: '48px', borderRadius: '12px' /* Softer square */, boxShadow: '0 4px 8px rgba(0,123,255,0.3)' }}>
                <i className="fas fa-code fa-lg text-white"></i> {/* Slightly larger icon */}
              </div>
              <Link to="/" className="text-decoration-none">
                 <h2 className="h4 mb-0 text-white fw-bold">Makonis Software</h2>
              </Link>
            </div>
            <p className="text-light text-opacity-75 mb-4" style={{ lineHeight: '1.6' }}> {/* text-opacity for softer text */}
              Innovative software solutions to transform your digital presence and achieve your business goals.
            </p>
             {/* Newsletter Form - Re-enabled */}
            <Form className="mb-3">
              <Form.Label className="mb-2 text-white fw-medium">Stay Updated</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent dark
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '0.9rem', // Match footer font
                  }}
                  className="footer-form-control" // Custom class for focus styling
                />
                <Button
                    style={newsletterButtonStyle}
                    onMouseEnter={() => setIsNewsletterButtonHovered(true)}
                    onMouseLeave={() => setIsNewsletterButtonHovered(false)}
                    type="submit" // Good practice for forms
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </InputGroup>
            </Form>
          </Col>

          <Col lg={8} xl={9}> {/* Adjusted to take remaining space */}
            <Row>
              <Col sm={6} md={4} className="mb-4 mb-md-0">
                <h5 className="text-white fw-semibold mb-4" style={{ letterSpacing: '0.03em' }}>About Us</h5>
                <ul className="list-unstyled">
                  {[
                    { label: 'Company', href: '/#' },
                    { label: 'Our Team', href: '/#' },
                    { label: 'Careers', href: '/#' },
                    { label: 'Blog', href: '/#' }
                  ].map(link => (
                    <li className="mb-2" key={link.label}>
                      <Link to={link.href} className="text-light text-decoration-none footer-link d-flex align-items-center">
                        <i className="fas fa-chevron-right small me-2 link-icon" style={{ color: 'var(--bs-primary)', fontSize: '0.7em' }}></i>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col sm={6} md={4} className="mb-4 mb-md-0">
                <h5 className="text-white fw-semibold mb-4" style={{ letterSpacing: '0.03em' }}>Services</h5>
                <ul className="list-unstyled">
                  {[
                    { label: 'Artificial Intelligence', to: '/ai' },
                    { label: 'Data Analytics', to: '/analytics' },
                    { label: 'IoT Solutions', to: '/iot' },
                    { label: 'Web & Mobile Dev', to: '/webdev' },
                    { label: 'Testing Services', to: '/testing' },
                    { label: 'Embedded Systems', to: '/embedded' },
                  ].map(service => (
                     <li className="mb-2" key={service.label}>
                      <Link to={service.to} className="text-light text-decoration-none footer-link d-flex align-items-center">
                         <i className="fas fa-chevron-right small me-2 link-icon" style={{ color: 'var(--bs-primary)', fontSize: '0.7em' }}></i>
                         <span>{service.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col md={4} className="mb-4 mb-md-0"> {/* md={4} so it takes full width on sm if others are present */}
                <h5 className="text-white fw-semibold mb-4" style={{ letterSpacing: '0.03em' }}>Contact Us</h5>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <i className="fas fa-map-marker-alt text-primary mt-1 me-3 flex-shrink-0" style={{ width: '16px' }}></i>
                    <span className="text-light text-opacity-75">51, 3rd Cross Rd, Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037</span>
                  </li>
                  <li className="mb-3 d-flex">
                    <i className="fas fa-envelope text-primary mt-1 me-3 flex-shrink-0" style={{ width: '16px' }}></i>
                    <a href="mailto:info@makonissoft.com" className="text-light text-decoration-none footer-link">info@makonissoft.com</a>
                  </li>
                  <li className="mb-3 d-flex">
                    <i className="fas fa-phone-alt text-primary mt-1 me-3 flex-shrink-0" style={{ width: '16px' }}></i>
                    <a href="tel:+918041707838" className="text-light text-decoration-none footer-link">+91 8041707838</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Bottom Section with Copyright and Social Icons */}
        <Row className="align-items-center pt-3"> {/* Added pt-3 for spacing from border */}
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 text-light text-opacity-75 small"> {/* text-opacity for softer text, small class */}
              &copy; {new Date().getFullYear()} Makonis Software Solutions. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center">
              {[
                { label: 'Facebook', href: '#', icon: 'fab fa-facebook-f' },
                { label: 'Twitter', href: '#', icon: 'fab fa-twitter' },
                { label: 'LinkedIn', href: '#', icon: 'fab fa-linkedin-in' },
                { label: 'Instagram', href: '#', icon: 'fab fa-instagram' }
              ].map(social => (
                <a href={social.href} className="social-icon-link ms-3" key={social.label} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <div className="social-icon-wrapper d-flex align-items-center justify-content-center">
                    <i className={`${social.icon} text-light social-icon-fg`}></i>
                  </div>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Using <style> for component-specific styles */}
      <style>{`
        .footer-link:hover span, .footer-link:focus span {
          color: var(--bs-primary) !important;
          text-decoration: underline;
          text-decoration-color: var(--bs-primary);
          text-underline-offset: 3px;
        }
        .footer-link:hover .link-icon, .footer-link:focus .link-icon {
          transform: translateX(3px);
          transition: transform 0.2s ease-out;
        }
        .link-icon {
          transition: transform 0.2s ease-out;
        }

        /* Social Icons Styling */
        .social-icon-link .social-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent white */
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }
        .social-icon-link .social-icon-fg {
          font-size: 1rem; /* Adjust icon size if needed */
           transition: color 0.3s ease;
        }
        .social-icon-link:hover .social-icon-wrapper,
        .social-icon-link:focus .social-icon-wrapper {
          background-color: var(--bs-primary) !important;
          border-color: var(--bs-primary) !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 4px 10px rgba(0,123,255,0.3);
        }
         .social-icon-link:hover .social-icon-fg,
         .social-icon-link:focus .social-icon-fg {
            color: #fff !important; /* Ensure icon color contrasts with primary bg on hover */
        }

        /* Newsletter Form Focus Style */
        .footer-form-control:focus {
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: var(--bs-primary) !important;
          box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25) !important; /* Bootstrap focus shadow */
          color: #fff !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;