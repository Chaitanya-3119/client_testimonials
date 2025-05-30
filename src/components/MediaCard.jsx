import React, { useState } from 'react';
import { Card, Image } from 'react-bootstrap'; // Image from react-bootstrap can be used if Card.Img is restrictive

const MediaCard = ({ item }) => { // Expect item to have: title, description, image, icon, color
  const [isHovered, setIsHovered] = useState(false);

  // Helper to convert hex to rgb for rgba usage
  function hexToRgb(hexColor) {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }
  const itemColor = item.color || '#007bff'; // Default color

  const cardBaseStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #dee2e6', // Bootstrap's default card border color
    borderRadius: '1rem', // More rounded: 16px (Bootstrap's rounded-4 is 0.5rem, rounded-5 is 1rem in BS 5.3+)
    transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: 'translateY(0) scale(1)',
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)', // Bootstrap's shadow-sm
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px) scale(1.01)',
    // Use item color for a subtle glow or border emphasis
    boxShadow: `0 0.5rem 1.5rem rgba(${hexToRgb(itemColor)}, 0.15), 0 0 0 2px ${itemColor}`,
  };

  const imageContainerStyle = {
    height: '200px',
    overflow: 'hidden',
    position: 'relative', // For overlay if needed
    borderTopLeftRadius: 'calc(1rem - 1px)', // Match card's border radius
    borderTopRightRadius: 'calc(1rem - 1px)',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };
  
  const iconContainerBaseStyle = {
    minWidth: '48px',
    width: '48px',
    height: '48px',
    borderRadius: '0.75rem', // 12px
    color: itemColor,
    backgroundColor: `rgba(${hexToRgb(itemColor)}, 0.1)`,
    transition: 'all 0.3s ease',
  };

  const iconContainerHoverStyle = {
    backgroundColor: itemColor,
    color: '#fff',
    boxShadow: `0 5px 10px rgba(${hexToRgb(itemColor)}, 0.3)`,
  };

  const learnMoreBaseStyle = {
    color: itemColor,
    textDecoration: 'none',
    fontWeight: '600',
  };

  const learnMoreArrowStyle = {
    transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
  };


  return (
    <Card
      className="h-100 d-flex flex-column" // Bootstrap classes for flex behavior
      style={isHovered ? { ...cardBaseStyle, ...cardHoverStyle } : cardBaseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log(`Clicked on ${item.title}`)} // Replace with actual navigation
    >
      <div style={imageContainerStyle}>
        {/* Using Card.Img for simplicity, but you can use <Image fluid /> for more control if needed */}
        <Card.Img variant="top" src={item.image} alt={item.title} style={imageStyle} />
         <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
                background: isHovered 
                    ? `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(${hexToRgb(itemColor)}, 0.4) 100%)` 
                    : 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.2) 100%)',
                transition: 'background 0.35s ease',
            }}
        ></div>
      </div>
      <Card.Body className="d-flex flex-column p-4"> {/* Bootstrap padding */}
        <div className="d-flex align-items-center mb-3">
          <div 
            className="d-flex align-items-center justify-content-center me-3 flex-shrink-0"
            style={isHovered ? {...iconContainerBaseStyle, ...iconContainerHoverStyle} : iconContainerBaseStyle}
          >
            <i className={`fas ${item.icon} fs-5`}></i> {/* fs-5 for icon size */}
          </div>
          <Card.Title 
            className="h5 mb-0 fw-bold" 
            style={{
                color: isHovered ? itemColor : '#343a40', // text-dark equivalent
                transition: 'color 0.3s ease'
            }}
          >
            {item.title}
          </Card.Title>
        </div>
        <Card.Text className="text-secondary mb-4" style={{ fontSize: '0.9rem', flexGrow: 1 }}>
          {item.description}
        </Card.Text>
        <div className="mt-auto"> {/* Pushes "Learn More" to the bottom */}
          <span className="d-inline-flex align-items-center" style={learnMoreBaseStyle}>
            Learn More
            <i className="fas fa-arrow-right ms-2" style={learnMoreArrowStyle}></i>
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MediaCard;