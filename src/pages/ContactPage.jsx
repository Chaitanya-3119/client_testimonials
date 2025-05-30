import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [activeTab, setActiveTab] = useState("bangalore");
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, { y: 50, opacity: 0, duration: 1, ease: "power2.out" });
      gsap.from(tabsRef.current, { y: 30, opacity: 0, duration: 0.8, ease: "power2.out", delay: 0.3 });
      gsap.from(".location-card-animation", { x: -50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.5, stagger: 0.1 });
      gsap.from(".map-container-animation", { x: 50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.7 });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const locations = [
    {
      id: "bangalore",
      title: "Bangalore Office",
      badge: "Headquarters",
      address: "51, 3rd Cross Rd, Aswath Nagar, Marathahalli, Bengaluru, Karnataka 560037",
      phone: "+91 8041707838",
      email: "info@makonissoft.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.01341109227286!2d77.70161997094749!3d12.958116892422693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123303d139d1%3A0xbeaccd8cfe54b1aa!2sMakonis%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1748512462418!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/z3xLDEEuhJFCm21N7",
    },
    {
      id: "hyderabad",
      title: "Hyderabad Office",
      address: "5th Floor, Modern Profound Tech Park, White Field Rd, Whitefield, HITEC City, Kondapur, Telangana 500081",
      phone: "+91 8041707838",
      email: "info@makonissoft.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0539320674757!2d78.36783731074532!3d17.45713258337288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c279a38357%3A0xe573fc7e540aa79f!2sMakonis%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1748512575963!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/z8aJjNnLfYf6Z9rG7",
    },
    {
      id: "vijayawada",
      title: "Vijayawada Office",
      address: "71-3-8A, Koneru vari St, Patamata, Benz Circle, Vijayawada, Andhra Pradesh 520010",
      phone: "+91 8041707838",
      email: "info@makonissoft.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4027.1478551908936!2d80.65748353130192!3d16.495997514079505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb6a785da00b%3A0x996a4c055ab8ed80!2sMakonis%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1748512668870!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/8J5z2uY1b2xWvx4z9",
    },
    {
      id: "texas",
      title: "Texas Office",
      address: "Suite -410 Office – T Kings Plaza 14111 King Rd Frisco TX 75036",
      phone: "+91 8041707838", // Assuming this might be a placeholder, update if needed
      email: "info@makonissoft.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.953308965812!2d-96.80156092402808!3d33.03056307355608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c0e9a829341%3A0xae24d7f67e7c717!2s14111%20King%20Rd%20%23410%2C%20Frisco%2C%20TX%2075036%2C%20USA!5e0!3m2!1sen!2sin!4v1700048627515!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/f6NscH2jX3b4qY1e7",
    },
    {
      id: "melbourne",
      title: "Melbourne Office",
      address: "54. Mansfield ST Berwick VIC 3806",
      phone: "+91 8041707838", // Update if needed
      email: "info@makonissoft.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.594405096828!2d145.33708777553286!3d-37.98685717193421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad61bc27396f4ed%3A0x971061622b97071b!2s54%20Mansfield%20St%2C%20Berwick%20VIC%203806%2C%20Australia!5e0!3m2!1sen!2sin!4v1700048693003!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/5tE4YJj1X6X3N7E7A",
    },
    {
      id: "ontario",
      title: "Ontario Office",
      address: "4503 Glen Erin Dr., Mississauga, ON, Canada L5M 4G5",
      phone: "+91 8041707838", // Update if needed
      email: "info@makonissoft.com",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.20545054408!2d-79.7262089235023!3d43.58275137110257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41df94205687%3A0x4f1603f86f982b80!2s4503%20Glen%20Erin%20Dr%2C%20Mississauga%2C%20ON%20L5M%204G5%2C%20Canada!5e0!3m2!1sen!2sin!4v1700048751331!5m2!1sen!2sin",
      directionsUrl: "https://maps.app.goo.gl/L44o6L3eK4z6wQ8cA",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  const currentOffice = locations.find(loc => loc.id === activeTab);

  return (
    <div className="contact-page" ref={pageRef}>
      <div
        className="position-fixed w-100 h-100 top-0 start-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
          zIndex: -1
        }}
      >
        {[...Array(20)].map((_, i) => (
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
              animation: `float 10s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: '0 0 10px rgba(0, 160, 233, 0.8)'
            }}
          />
        ))}
      </div>

      <div className="locations-section py-5">
        <Container>
          <div ref={titleRef} className="text-center mb-3">
            <h2 className="display-5 fw-bold locations-title-custom">Our Locations</h2>
            <p className="lead text-light mt-2">Visit us at any of our offices across the Globe</p>
          </div>

          <Tabs
            ref={tabsRef}
            id="location-tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-5 justify-content-center location-tabs-custom"
            variant="pills"
          >
            {locations.map((location) => (
              <Tab
                key={location.id}
                eventKey={location.id}
                title={
                  <div className="d-flex align-items-center">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    <span>{location.title.split(" ")[0]}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
          
         {currentOffice && (
            <Row>
              {/* Left Column - Location Details */}
              <Col lg={6} className="mb-4 mb-lg-0">
                {/* Reverted h-70 to h-100 for consistent column height matching */}
                <div className="location-card-animation bg-white shadow rounded d-flex flex-column h-100">
                    <div className="location-header-custom p-4 border-bottom rounded-top">
                      <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
                        <h3 className="h5 fw-semibold text-primary mb-2 mb-md-0 text-center text-md-start">{currentOffice.title}</h3>
                        {currentOffice.badge && (
                          <span className="badge bg-primary rounded-pill px-3 py-2 small mt-1 mt-md-0">
                            {currentOffice.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 flex-grow-1">
                      {/* Address */}
                      <div className="d-flex mb-3">
                        <div className="location-icon-wrapper-custom text-primary bg-light p-2 rounded-circle me-3 d-flex align-items-center justify-content-center">
                          <i className="fas fa-map-marker-alt fa-fw"></i>
                        </div>
                        <div>
                          <h5 className="small text-muted mb-1">Address</h5>
                          <p className="mb-0 text-dark" style={{ fontSize: "0.9rem" }}>{currentOffice.address}</p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="d-flex mb-3">
                        <div className="location-icon-wrapper-custom text-primary bg-light p-2 rounded-circle me-3 d-flex align-items-center justify-content-center">
                          <i className="fas fa-phone fa-fw"></i>
                        </div>
                        <div>
                          <h5 className="small text-muted mb-1">Phone</h5>
                          <a href={`tel:${currentOffice.phone}`} className="text-decoration-none text-primary fw-medium">
                            {currentOffice.phone}
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="d-flex mb-3">
                        <div className="location-icon-wrapper-custom text-primary bg-light p-2 rounded-circle me-3 d-flex align-items-center justify-content-center">
                          <i className="fas fa-envelope fa-fw"></i>
                        </div>
                        <div>
                          <h5 className="small text-muted mb-1">Email</h5>
                          <a href={`mailto:${currentOffice.email}`} className="text-decoration-none text-primary fw-medium">
                            {currentOffice.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 border-top rounded-bottom">
                      <a
                        href={currentOffice.directionsUrl} // Ensure this is also a valid URL
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-100 d-flex align-items-center justify-content-center py-2"
                      >
                        <i className="fas fa-directions me-2"></i> Get Directions
                      </a>
                    </div>
                </div>
              </Col>

              {/* Right Column - Map */}
              <Col lg={6}>
                 {/* Reverted h-70 to h-100 for consistent column height matching */}
                <div className="map-container-animation bg-white shadow rounded border overflow-hidden h-100">
                  <iframe
                    title={`Makonis Software Solutions ${currentOffice.title}`}
                    src={currentOffice.mapUrl} // THIS MUST BE THE CORRECT EMBED URL
                    className="w-100 h-100 border-0" // Reverted h-70 to h-100
                    style={{ minHeight: '400px' }} // Adjusted default minHeight
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>

      <div className="back-home-section py-4">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-4">
            <Link to="/" className="btn btn-light text-primary fw-semibold px-4 py-2 rounded-pill d-inline-flex align-items-center back-button-custom">
              <i className="fas fa-arrow-left me-2"></i> Back to Home
            </Link>
          </div>
        </Container>
      </div>

      <div className="floating-contact position-fixed bottom-0 end-0 p-3 d-flex flex-column gap-2" style={{paddingBottom : '50px'}}>
        <a href="tel:+918041707838" className="btn btn-success rounded-circle p-0 d-flex align-items-center justify-content-center floating-contact-button-custom">
          <i className="fas fa-phone"></i>
        </a>
        <a href="mailto:info@makonissoft.com" className="btn btn-primary rounded-circle p-0 d-flex align-items-center justify-content-center floating-contact-button-custom">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          33% { transform: translateY(-15px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(5px) rotate(240deg); opacity: 0.8; }
        }

        .section-divider { display: flex; justify-content: center; align-items: center; }
        .divider-line { width: 80%; height: 1px; background: linear-gradient(to right, transparent, rgba(59, 130, 246, 0.2), transparent); }

        .locations-section {
          background: linear-gradient(135deg, rgba(0, 41, 86, 0.85) 0%, rgba(0, 41, 86, 0.95) 100%);
          backdrop-filter: blur(8px);
        }

        .locations-title-custom {
          color: #ffffff;
          font-weight: 700;
          position: relative;
          display: inline-block;
          padding-bottom: 0.75rem;
        }
        .locations-title-custom::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 6rem;
          height: 0.25rem;
          background-color: #00a0e9;
          border-radius: 2px;
        }

        .location-tabs-custom .nav-link {
          padding: 0.8rem 1.5rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          border-radius: 50px !important;
          margin: 7px !important;
          min-width: 110px !important;
          text-align: center !important;
          transition: all 0.3s ease !important;
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(0, 160, 233, 0.2) !important;
          color: rgba(255, 255, 255, 0.7) !important;
          backdrop-filter: blur(10px) !important;
        }
        .location-tabs-custom .nav-link:hover {
          background: rgba(0, 160, 233, 0.15) !important;
          border-color: rgba(0, 160, 233, 0.5) !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(0, 160, 233, 0.25) !important;
        }
        .location-tabs-custom .nav-link.active {
          background: linear-gradient(135deg, #00a0e9 0%, #0056b3 100%) !important;
          border-color: #00a0e9 !important;
          color: #ffffff !important;
          box-shadow: 0 8px 25px rgba(0, 160, 233, 0.35) !important;
          transform: translateY(-2px) !important;
        }
        .location-tabs-custom .nav-link i {
          font-size: 1.1rem !important;
        }
        
        .location-header-custom {
           background: rgba(255,255,255,0.05);
        }

        .location-icon-wrapper-custom {
            width: 40px;
            height: 40px;
            flex-shrink: 0;
        }
        
        .back-home-section {
          background: linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%);
          backdrop-filter: blur(10px);
        }

        .back-button-custom:hover {
          background-color: #e9ecef !important;
          transform: translateX(-2px);
        }

        .floating-contact-button-custom {
            width: 48px;
            height: 48px;
            font-size: 1.25rem;
        }
        .floating-contact-button-custom:hover {
            transform: scale(1.1);
            color: white !important;
        }
        
        .location-card-animation, .map-container-animation {
          background-color: rgba(255, 255, 255, 0.9) !important;
          backdrop-filter: blur(5px);
        }
        .location-card-animation .p-4, .location-card-animation .p-3 {
            background-color: transparent !important;
        }
        .location-card-animation .text-primary { color: #0056b3 !important; }
        .location-card-animation .text-muted { color: #555 !important; }
        .location-card-animation .text-dark { color: #212529 !important; }
        .location-card-animation .btn-primary { background-color: #0056b3; border-color: #0056b3; }
        .location-card-animation .badge.bg-primary { background-color: #0056b3 !important; }

        @media (max-width: 768px) { /* MD Breakpoint and below */
          .location-tabs-custom .nav-link {
            padding: 0.7rem 1rem !important;
            font-size: 0.9rem !important;
            min-width: auto !important;
            margin: 0.2rem !important;
          }
          .location-tabs-custom {
             flex-wrap: wrap;
           }
           .locations-title-custom { /* Example: responsive font size for main title */
            font-size: 2rem; /* Adjust from display-5 for smaller screens */
           }
           .map-container-animation iframe { /* Adjust map height on smaller screens */
            min-height: 300px !important; 
           }
        }
        @media (max-width: 576px) { /* SM Breakpoint and below */
          .locations-title-custom {
            font-size: 1.75rem; 
           }
        }
   
       @media (max-width: 767.98px) { /* SM Breakpoint and below - THIS LINE IS CHANGED */
          .location-tabs-custom .nav-link {
            padding: 0.7rem 1rem !important;
            font-size: 0.9rem !important;
            min-width: auto !important; /* Allow them to shrink more */
            margin: 0.2rem !important;
          }
           .location-tabs-custom {
             flex-wrap: wrap; /* Allow tabs to wrap on small screens */
           }
           .locations-title-custom { /* Example: responsive font size for main title */
            font-size: 2rem; /* Adjust from display-5 for smaller screens */
           }
           .map-container-animation iframe { /* Adjust map height on smaller screens */
            min-height: 300px !important; 
           }
        }
        @media (max-width: 575.98px) { /* XS Breakpoint and below - (was 576px, corrected to be consistent with Bootstrap's <576px for xs) */
          .locations-title-custom {
            font-size: 1.75rem; 
           }
           /* You might want to add specific styles for location-tabs-custom .nav-link here if further reduction is needed for XS */
        }
      
         `}
      </style>
    </div>
  );
};

export default ContactPage;