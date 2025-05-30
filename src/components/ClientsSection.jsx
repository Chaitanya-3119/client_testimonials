import React, { useState, useEffect, useRef } from 'react';
import { Container, Image } from 'react-bootstrap';

import client1 from '../Asserts/Picture1.png';
import client2 from '../Asserts/Picture2.png';
import client3 from '../Asserts/Picture3.png';
import client4 from '../Asserts/Picture4.png';
import client5 from '../Asserts/Picture5.png';
import client6 from '../Asserts/Picture6.png';
import client7 from '../Asserts/Picture7.png';
import client8 from '../Asserts/Picture8.png';
import client10 from '../Asserts/Picture10.png';
import client11 from '../Asserts/Picture11.png';
import client12 from '../Asserts/Picture12.png';
import client13 from '../Asserts/Picture13.png';
import client14 from '../Asserts/Picture14.png';
import client15 from '../Asserts/Picture15.png';
import client16 from '../Asserts/Picture16.png';
import client17 from '../Asserts/Picture17.png';
import client18 from '../Asserts/Picture18.png';
import client19 from '../Asserts/Picture19.png';
import client20 from '../Asserts/Picture20.png';
import client21 from '../Asserts/Picture21.png';
import client22 from '../Asserts/Picture22.png';
import client23 from '../Asserts/Picture23.png';
import client24 from '../Asserts/Picture24.png';
import client25 from '../Asserts/Picture25.png';
import client26 from '../Asserts/Picture26.png';
import client27 from '../Asserts/Picture27.png';
import client28 from '../Asserts/Picture28.png';
import client29 from '../Asserts/Picture29.png';
import client30 from '../Asserts/Picture30.png';
import client31 from '../Asserts/Picture31.png';
import client32 from '../Asserts/Picture32.png';
import client33 from '../Asserts/Picture33.png';
import client34 from '../Asserts/Picture34.png';
import client35 from '../Asserts/Picture35.png';
import client36 from '../Asserts/Picture36.png';
import client37 from '../Asserts/Picture37.png';
import client38 from '../Asserts/Picture38.svg';

const ClientsSection = () => {
  const clients = [
    { id: 'client1', name: 'Client 1', src: client1, alt: 'Client 1 Logo' },
    { id: 'client2', name: 'Client 2', src: client2, alt: 'Client 2 Logo' },
    { id: 'client3', name: 'Client 3', src: client3, alt: 'Client 3 Logo' },
    { id: 'client4', name: 'Client 4', src: client4, alt: 'Client 4 Logo' },
    { id: 'client5', name: 'Client 5', src: client5, alt: 'Client 5 Logo' },
    { id: 'client6', name: 'Client 6', src: client6, alt: 'Client 6 Logo' },
    { id: 'client7', name: 'Client 7', src: client7, alt: 'Client 7 Logo' },
    { id: 'client8', name: 'Client 8', src: client8, alt: 'Client 8 Logo' },
    { id: 'client10', name: 'Client 10', src: client10, alt: 'Client 10 Logo' },
    { id: 'client11', name: 'Client 11', src: client11, alt: 'Client 11 Logo' },
    { id: 'client12', name: 'Client 12', src: client12, alt: 'Client 12 Logo' },
    { id: 'client13', name: 'Client 13', src: client13, alt: 'Client 13 Logo' },
    { id: 'client14', name: 'Client 14', src: client14, alt: 'Client 14 Logo' },
    { id: 'client15', name: 'Client 15', src: client15, alt: 'Client 15 Logo' },
    { id: 'client16', name: 'Client 16', src: client16, alt: 'Client 16 Logo' },
    { id: 'client17', name: 'Client 17', src: client17, alt: 'Client 17 Logo' },
    { id: 'client18', name: 'Client 18', src: client18, alt: 'Client 18 Logo' },
    { id: 'client19', name: 'Client 19', src: client19, alt: 'Client 19 Logo' },
    { id: 'client20', name: 'Client 20', src: client20, alt: 'Client 20 Logo' },
    { id: 'client21', name: 'Client 21', src: client21, alt: 'Client 21 Logo' },
    { id: 'client22', name: 'Client 22', src: client22, alt: 'Client 22 Logo' },
    { id: 'client23', name: 'Client 23', src: client23, alt: 'Client 23 Logo' },
    { id: 'client24', name: 'Client 24', src: client24, alt: 'Client 24 Logo' },
    { id: 'client25', name: 'Client 25', src: client25, alt: 'Client 25 Logo' },
    { id: 'client26', name: 'Client 26', src: client26, alt: 'Client 26 Logo' },
    { id: 'client27', name: 'Client 27', src: client27, alt: 'Client 27 Logo' },
    { id: 'client28', name: 'Client 28', src: client28, alt: 'Client 28 Logo' },
    { id: 'client29', name: 'Client 29', src: client29, alt: 'Client 29 Logo' },
    { id: 'client30', name: 'Client 30', src: client30, alt: 'Client 30 Logo' },
    { id: 'client31', name: 'Client 31', src: client31, alt: 'Client 31 Logo' },
    { id: 'client32', name: 'Client 32', src: client32, alt: 'Client 32 Logo' },
    { id: 'client33', name: 'Client 33', src: client33, alt: 'Client 33 Logo' },
    { id: 'client34', name: 'Client 34', src: client34, alt: 'Client 34 Logo' },
    { id: 'client35', name: 'Client 35', src: client35, alt: 'Client 35 Logo' },
    { id: 'client36', name: 'Client 36', src: client36, alt: 'Client 36 Logo' },
    { id: 'client37', name: 'Client 37', src: client37, alt: 'Client 37 Logo' },
    { id: 'client38', name: 'Client 38', src: client38, alt: 'Client 38 Logo' }
  ];

  const [hoveredClient, setHoveredClient] = useState(null);
  const scrollerRef = useRef(null);
  const [animationTotalWidth, setAnimationTotalWidth] = useState(0);

  // Define these as constants for easier updates
  const LOGO_WIDTH_PX = 170; // Width of each logo container
  const LOGO_MARGIN_X_REM = 1; // mx-4 is 1rem on each side
  const LOGO_MARGIN_X_PX = LOGO_MARGIN_X_REM * 5; // Assuming 1rem = 16px for calc

  useEffect(() => {
    // Calculate the total width for the translateX animation
    // This calculation is for one full set of original logos plus their margins
    const totalWidth = (LOGO_WIDTH_PX * clients.length) + (LOGO_MARGIN_X_PX * 2 * clients.length);
    setAnimationTotalWidth(totalWidth);
  }, [clients.length]);


  const clientItemStyle = (isHovered) => ({
    width: `${LOGO_WIDTH_PX}px`,
    height: '90px', // Reduced height for better fit
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
    backgroundColor: '#fff', // White background for logos to stand out against gray
    // opacity: isHovered ? 1 : 0.9, // Less dimming for better visibility
    // transform: isHovered ? 'translateY(-6px) scale(1.05)' : 'translateY(0) scale(1)',
    // boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.12)' : '0 4px 10px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.75rem', // Bootstrap rounded-3
    border: '1px solid #e9ecef', // Softer border
    padding: '7px',
    cursor: 'pointer'
  });

  const renderClientLogos = (keyPrefix) => clients.map((client) => (
    <div
      key={`${keyPrefix}-${client.id}`}
      className="mx-3" // Bootstrap margin utility - increased from mx-3
      style={clientItemStyle(hoveredClient === client.id)}
      onMouseEnter={() => setHoveredClient(client.id)}
      onMouseLeave={() => setHoveredClient(null)}
      title={client.name} // Good for accessibility
    >
      <Image
        src={client.src}
        alt={client.alt}
        className="p-2" // Reduced padding for more logo visibility
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain', // Ensures logo is not cropped
          filter: hoveredClient === client.id || hoveredClient === null ? 'none' : 'grayscale(30%)', // Slightly desaturate others on hover
          transition: 'all 0.3s ease',
        }}
      />
    </div>
  ));

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
      backdropFilter: 'blur(10px)'
    }} id="clients-section"> {/* Dark background with glassmorphism */}
      <Container>
        <div className="text-center mb-5">
          <span
            className="d-inline-block mb-3 px-3 py-2 rounded-pill"
            style={{
              background: 'rgba(0, 160, 233, 0.2)',
              color: '#00a0e9',
              fontSize: '1rem',
              fontWeight: 600,
              border: '1px solid rgba(0, 160, 233, 0.3)'
            }}
          >
            <i className="fas fa-handshake me-2"></i> Our Valued Partners
          </span>
          <h2 className="display-4 fw-bolder mb-3" style={{ color: '#ffffff' }}>Trusted By Industry Leaders</h2>
          <p className="lead mx-auto" style={{
            maxWidth: '700px',
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            We're proud to collaborate with a diverse portfolio of clients across industries,
            helping them achieve exceptional results through innovative solutions.
          </p>
          <div className="mx-auto mt-4" style={{ width: '100px', height: '4px', background: 'linear-gradient(90deg, transparent, #00a0e9, transparent)', borderRadius: '4px' }}></div>
        </div>

        <div
          className="rounded-4 shadow p-4 position-relative"
          style={{
            overflow: 'hidden', // This hides the scrollbar and parts of logos outside
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', // Fade effect at edges
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', // For Safari
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            background: 'rgba(169, 169, 169, 0.3)', // Semi-transparent gray background for better logo visibility
            backdropFilter: 'blur(10px)'
          }}
        >
          <div
            ref={scrollerRef}
            className="d-flex"
            style={{
              // Apply animation only if animationTotalWidth is calculated
              animation: animationTotalWidth > 0 ? `scrollClients 60s linear infinite` : 'none',
              width: 'max-content', // Essential for the flex items to not wrap
            }}
          >
            {renderClientLogos('original')}
            {renderClientLogos('duplicate')} {/* Duplicate set for seamless looping */}
          </div>
        </div>
      </Container>

      {/* Add keyframes animation using style jsx */}
      <style>{`
        @keyframes scrollClients {
          0% {
            transform: translateX(0);
          }
          100% {
            /* The translateX amount should be the total width of ONE set of original logos including their horizontal margins.
              - Each logo container width: ${LOGO_WIDTH_PX}px
              - Each logo container has mx-4 (1rem margin on left, 1rem on right = 2rem total horizontal margin per logo)
              - Assuming 1rem = 16px, so 2rem = 32px.
              - Total width for one logo item + its margins = ${LOGO_WIDTH_PX}px + (2 * ${LOGO_MARGIN_X_PX})px
              - Number of clients: ${clients.length}
              - Dynamic calculation: calc(-1 * ${animationTotalWidth}px)
            */
            transform: translateX(-${animationTotalWidth}px);
          }
        }

        /* Optional: Pause animation for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .d-flex[style*="animationName:scrollClients"],
          .d-flex[style*="animationName: scrollClients"] { /* For browsers that add space */
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;