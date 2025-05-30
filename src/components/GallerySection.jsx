import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null); // To manage hover state for individual images

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Improved data structure for gallery images
  const gallerySlides = [
    [
      { id: 'img1', src: 'https://images.unsplash.com/photo-1534087334496-PF895bf8c999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Modern Architecture', caption: 'Sleek Design' },
      { id: 'img2', src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Interior Space', caption: 'Comfort & Style' },
      { id: 'img3', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Luxury Home Exterior', caption: 'Grand Entrance' }
    ],
    [
      { id: 'img4', src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Contemporary Living Room', caption: 'Open Concept' },
      { id: 'img5', src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Suburban House', caption: 'Family Home' },
      { id: 'img6', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Poolside Villa', caption: 'Relaxation Zone' }
    ],
    [
      { id: 'img7', src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'House with Garden', caption: 'Green Living' },
      { id: 'img8', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Minimalist Bedroom', caption: 'Serene Sleep' },
      { id: 'img9', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Modern Kitchen', caption: 'Culinary Space' }
    ]
  ];
  // Using Unsplash for more realistic placeholders. Replace with your actual images.

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % gallerySlides.length);
    }, 5000); // Keep auto-advance interval reasonable

    return () => clearInterval(interval);
  }, [gallerySlides.length]);

  const imageContainerStyle = (imgId) => {
    const isHovered = hoveredImage === imgId;
    return {
      borderRadius: '0.75rem', // Bootstrap's rounded-3
      overflow: 'hidden',
      boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
      height: '100%',
      minHeight: '260px', // Ensure a minimum height for consistency
      transition: 'transform 0.35s ease-out, box-shadow 0.35s ease-out',
      transform: isHovered ? 'scale(1.03) translateY(-5px)' : 'scale(1) translateY(0)',
      position: 'relative', // For caption overlay
      cursor: 'pointer', // Indicate clickability (for future lightbox)
    };
  };

  const imageStyle = { // Applied directly to Bootstrap <Image>
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures image covers the area, might crop
    transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smoother scale
    // Scale is handled by parent container's transform for a combined effect
  };

  const captionOverlayStyle = (imgId) => {
    const isHovered = hoveredImage === imgId;
    return {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)',
        color: 'white',
        padding: '1rem 0.75rem 0.5rem 0.75rem',
        textAlign: 'center',
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        fontSize: '0.9rem',
    };
  };


  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
      backdropFilter: 'blur(10px)'
    }} id="gallery-section"> {/* Dark background with glassmorphism */}
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bolder mb-3" style={{ color: '#ffffff' }}>Our Work & Inspirations</h2>
          <p className="lead mx-auto" style={{
            maxWidth: '700px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            A glimpse into our projects, designs, and the quality we deliver.
          </p>
           <div className="mx-auto mt-4" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, transparent, #00a0e9, transparent)', borderRadius: '2px' }}></div>
        </div>

        {/* Enhanced carousel wrapper with glassmorphism */}
        <div className="shadow-lg rounded-3 overflow-hidden p-2 p-sm-3" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null} // Manual interval handling
            indicators={true}
            controls={true}
            variant="dark" // Changes controls and indicators to dark, better on light backgrounds
            // fade={true} // Optional: use fade transition instead of slide
            className="gallery-carousel"
          >
            {gallerySlides.map((slideImages, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row className="g-3 p-2 p-sm-1"> {/* Adjust gutter and padding */}
                  {slideImages.map((image) => (
                    <Col key={image.id} xs={12} sm={6} md={4} className="mb-3 mb-md-0"> {/* Responsive column sizing */}
                      <div
                        style={imageContainerStyle(image.id)}
                        onMouseEnter={() => setHoveredImage(image.id)}
                        onMouseLeave={() => setHoveredImage(null)}
                        // onClick={() => alert(`Open ${image.caption} in lightbox!`)} // Placeholder for future lightbox
                        role="button" // For accessibility since it's clickable
                        tabIndex={0} // For keyboard accessibility
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') alert(`Open ${image.caption} in lightbox!`);}}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          style={imageStyle}
                          // The scale effect from the parent div will apply visually
                        />
                        <div style={captionOverlayStyle(image.id)}>
                            {image.caption}
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
         {/* Suggestion for future improvement */}
         <p className="text-center mt-4 fst-italic small" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Tip: Click on an image to view larger (lightbox functionality coming soon!).
        </p>
      </Container>
      {/* Add some basic styling for carousel indicators if needed, though variant="dark" helps */}
      <style>{`
        .gallery-carousel .carousel-indicators [data-bs-target] {
            background-color: var(--bs-primary); /* Example: Make indicators primary color */
            opacity: 0.5;
            height: 5px;
            width: 20px;
            border-radius: 2px;
            margin-right: 5px;
            margin-left: 5px;
        }
        .gallery-carousel .carousel-indicators .active {
            opacity: 1;
            background-color: var(--bs-primary);
        }
        .gallery-carousel .carousel-control-prev-icon,
        .gallery-carousel .carousel-control-next-icon {
          filter: drop-shadow(0 0 2px rgba(0,0,0,0.5)); /* Add a subtle shadow to icons if on complex backgrounds */
        }
      `}</style>
    </section>
  );
};

export default GallerySection;