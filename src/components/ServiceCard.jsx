import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap'; // Button is not directly used in this refined version's output, but keep if needed for other contexts

// It's highly recommended to replace Font Awesome with a more modern icon library like Heroicons, Phosphor Icons, or custom SVGs.
// For this example, we'll stick with Font Awesome classes but assume you might upgrade.

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Your existing navigation logic
    if (service.title === 'Internet of Things') navigate('/iot');
    else if (service.title === 'Analytics') navigate('/analytics');
    else if (service.title === 'Artificial Intelligence') navigate('/ai');
    // Add other routes or a generic service page route: navigate(`/services/${service.id}`);
    else console.log(`Clicked on ${service.title}`);
  };

  const cardStyle = {
    // Enhanced glassmorphism for dark background
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // More subtle transparency
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)', // For Safari
    border: '1px solid rgba(255, 255, 255, 0.15)', // Subtle border
    borderRadius: '24px', // More rounded for modern look
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: isHovered ? 'translateY(-15px) scale(1.03)' : 'translateY(0) scale(1)',
    boxShadow: isHovered
      ? `0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 2px ${service.color || '#00a0e9'}, 0 0 30px rgba(0, 160, 233, 0.3)`
      : '0 10px 25px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  };

  const imageContainerStyle = {
    height: '220px',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
    transform: isHovered ? 'scale(1.12)' : 'scale(1)',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(to bottom, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.2) 60%, ${service.color || 'rgba(0,0,0,0.8)'} 100%)`,
    opacity: isHovered ? 1 : 0.85,
    transition: 'opacity 0.35s ease',
    display: 'flex',
    alignItems: 'flex-end', // Align title to bottom
    padding: '1rem',
  };

  const cardBodyStyle = {
    padding: '1.75rem', // Increased padding
    flexGrow: 1, // Allows card body to expand and push CTA to bottom
    display: 'flex',
    flexDirection: 'column',
  };

  const iconContainerStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '16px', // Softer radius
    backgroundColor: isHovered ? service.color : `rgba(${hexToRgb(service.color || '#007bff')}, 0.1)`,
    color: isHovered ? '#fff' : service.color,
    boxShadow: isHovered ? `0 6px 12px rgba(${hexToRgb(service.color || '#007bff')}, 0.4)` : '0 4px 8px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem', // Spacing from title
    flexShrink: 0, // Prevent icon from shrinking
  };

  // Helper to convert hex to rgb for rgba usage
  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
  }


  return (
    <Card
      className="h-100 border-0"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Animated Background Gradient */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: `linear-gradient(135deg, ${service.color}15 0%, transparent 50%, ${service.color}10 100%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          zIndex: 0
        }}
      />

      {/* Floating Particles Effect */}
      {isHovered && (
        <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="position-absolute"
              style={{
                width: '4px',
                height: '4px',
                background: service.color || '#00a0e9',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `particle-float 2s ease-out infinite`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>
      )}

      <div style={imageContainerStyle} className="position-relative">
        <Card.Img
          variant="top"
          src={service.image}
          alt={service.title}
          style={imageStyle}
        />

        {/* Enhanced Overlay with Gradient */}
        <div
          style={{
            ...overlayStyle,
            background: `linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.3) 40%, ${service.color || 'rgba(0,0,0,0.8)'} 100%)`
          }}
        >
          <div className="d-flex align-items-center">
            <div
              className="me-3"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <i
                className={`fas ${service.icon}`}
                style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              />
            </div>
            <h3 className="h5 fw-bold text-white mb-0" style={{
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              fontSize: '1.1rem'
            }}>
              {service.title}
            </h3>
          </div>
        </div>

        {/* Shine Effect */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.6s ease',
            zIndex: 2
          }}
        />
      </div>

      <Card.Body style={{...cardBodyStyle, position: 'relative', zIndex: 1}}>
        {/* Service Category Badge */}
        <div className="mb-3">
          <span
            className="badge rounded-pill px-3 py-2"
            style={{
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
              color: service.color,
              border: `1px solid ${service.color}30`,
              fontSize: '0.75rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            <i className={`fas ${service.icon} me-2`}></i>
            Our Service
          </span>
        </div>

        {/* Service Title */}
        <h4
          className="fw-bold mb-3"
          style={{
            color: '#ffffff',
            fontSize: '1.3rem',
            lineHeight: '1.3'
          }}
        >
          {service.title}
        </h4>

        {/* Service Description */}
        <Card.Text
          className="mb-4"
          style={{
            fontSize: '1rem',
            flexGrow: 1,
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.6'
          }}
        >
          {service.description}
        </Card.Text>

        {/* Enhanced CTA Section */}
        <div
          className="mt-auto pt-3"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            position: 'relative'
          }}
        >
          {/* Progress Bar Effect */}
          <div
            className="position-absolute top-0 start-0"
            style={{
              width: isHovered ? '100%' : '0%',
              height: '2px',
              background: `linear-gradient(90deg, ${service.color}, ${service.color}80)`,
              transition: 'width 0.4s ease',
              borderRadius: '1px'
            }}
          />

          <div className="d-flex align-items-center justify-content-between">
            <span
              className="fw-semibold"
              style={{
                color: service.color || '#00a0e9',
                fontSize: '1rem'
              }}
            >
              Explore Solution
            </span>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                border: `1px solid ${service.color}30`,
                transition: 'all 0.3s ease'
              }}
            >
              <i
                className="fas fa-arrow-right"
                style={{
                  color: service.color,
                  fontSize: '0.9rem',
                  transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
          </div>
        </div>
      </Card.Body>

      {/* CSS Animations */}
      <style>{`
        @keyframes particle-float {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </Card>
  );
};

export default ServiceCard;