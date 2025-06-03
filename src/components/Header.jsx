import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MakonisLogo from "../Asserts/Makonis-Logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const aboutDropdownRef = useRef(null);
  const businessDropdownRef = useRef(null);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  // const navRef = useRef(null); // navRef was declared but not used in original, can be removed or assigned

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (aboutDropdownOpen) setAboutDropdownOpen(false);
    if (businessDropdownOpen) setBusinessDropdownOpen(false);
  };

  // Initial animation effect
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = '0';
      headerRef.current.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        headerRef.current.style.transition = 'all 0.8s ease';
        headerRef.current.style.opacity = '1';
        headerRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target) && !event.target.closest('.about-dropdown-toggle')) {
        setAboutDropdownOpen(false);
      }
      if (businessDropdownRef.current && !businessDropdownRef.current.contains(event.target) && !event.target.closest('.business-dropdown-toggle')) {
        setBusinessDropdownOpen(false);
      }
      // Close any open nested dropdown submenus
      const openSubmenus = document.querySelectorAll('.dropdown-menu > .dropdown-submenu > .dropdown-menu');
      openSubmenus.forEach((submenu) => {
        if (!submenu.contains(event.target)) {
          submenu.style.display = 'none';
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Who we are",
      path: "/#about",
      isDropdown: true,
      dropdownItems: [
        { name: "About us", path: "/about-us" },
        { name: "Our leadership", path: "/team" },
        { 
          name: "Our Business model", 
          path: "/business-model",
        },
      ],
    },
    {
      name: "Business",
      path: "/#business",
      isDropdown: true,
      dropdownItems: [
        { 
          name: "IT Services", 
          path: "/it-services", 
          icon: "fa-laptop",
          isDropdown: true,
          dropdownItems: [
            { name: "Staff augmentation (Inida & US)", path: "/staff-augmentation" },
            { name: "Integration", path: "/integration" },
            { name: "Testing", path: "/testing" },
            { name: "Web development", path: "/web-development" },
          ]
        },
        { 
          name: "Products", 
          path: "/products", 
          icon: "fa-box",
          isDropdown: true,
          dropdownItems: [
            { name: "IoT", path: "/iot" },
            { name: "AI", path: "/ai" },
          ]
        },
        { 
          name: "Semiconductors", 
          path: "/semiconductors", 
          icon: "fa-microchip",
          isDropdown: true,
          dropdownItems: [
            { name: "Physical Design", path: "/physical-design" },
            { name: "Physical verification", path: "/physical-verification" },
          ]
        },
      ],
    },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Client testimonials", path: "/testimonials" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Inline styles
  const headerStyle = {
    background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: scrolled ? 'blur(15px)' : 'blur(10px)',
    boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
    paddingTop: scrolled ? '0px' : '1px',
    paddingBottom: scrolled ? '0px' : '1px',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  };

  const logoImgStyle = {
    height: '60px',
    filter: 'drop-shadow(0 4px 8px rgba(0, 160, 233, 0.3))',
    transition: 'all 0.3s ease',
  };

  const navLinkStyle = (isActive) => ({
    color: '#002956',
    fontWeight: 600,
    fontSize: '15px',
    letterSpacing: '0.3px',
    padding: '8px 10px',  // Reduced padding to reduce space between nav items
    position: 'relative',
    textDecoration: 'none',
    display: 'block',
    whiteSpace: 'nowrap',
    ...(isActive && { color: '#00a0e9' }),
  });
  
  const dropdownMenuStyle = (isOpen) => ({
    background: 'rgba(0, 41, 86, 0.98)',
    backdropFilter: 'blur(15px)',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    marginTop: '12px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    minWidth: '280px',
    display: isOpen ? 'block' : 'none',
    visibility: isOpen ? 'visible' : 'hidden',
    opacity: isOpen ? 1 : 0,
    padding: '8px 0',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000
  });

  const dropdownItemStyle = (isActive) => ({
    color: '#ffffff',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 500,
    textDecoration: 'none',
    borderLeft: isActive ? '3px solid #00a0e9' : '3px solid transparent',
    backgroundColor: isActive ? 'rgba(0, 160, 233, 0.15)' : 'transparent',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(0, 160, 233, 0.15)',
      color: '#00a0e9',
      borderLeft: '3px solid #00a0e9'
    }
  });

  const mobileNavStyle = {
    position: 'fixed',
    top: '75px', // Height of your header, adjust if needed
    left: 0,
    right: 0,
    background: 'rgba(0, 41, 86, 0.98)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    padding: '25px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 999, // Below header
  };
  
  const mobileDropdownMenuStyle = {
    background: 'rgba(0, 160, 233, 0.1)',
    borderRadius: '12px',
    marginTop: '15px',
    marginBottom: '5px',
    border: '1px solid rgba(0, 160, 233, 0.2)',
  };


  return (
    <header 
        className="navbar navbar-expand-lg sticky-top" 
        style={headerStyle} 
        ref={headerRef}
    >
      <div className="container-fluid px-3 px-lg-5"> {/* Using container-fluid for full width with padding */}
        <Link to="/" className="navbar-brand me-auto" ref={logoRef}>
          <img
            src={MakonisLogo}
            alt="Makonis Software"
            style={logoImgStyle}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
          style={{ 
            color: '#002956', // Icon color
            border: 'none',
            fontSize: '24px'
          }}
        >
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        <div 
            className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} 
            id="navbarNavDropdown"
            style={mobileMenuOpen ? mobileNavStyle : {}} // Apply mobile styles when menu is open
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item-gsap nav-item ${item.isDropdown ? "dropdown" : ""} ${
                  (item.name === "About Us" && aboutDropdownOpen) || (item.name === "Business" && businessDropdownOpen)
                    ? "show" // For Bootstrap dropdown 'show' on parent
                    : ""
                }`}
                ref={item.name === "About Us" ? aboutDropdownRef : item.name === "Business" ? businessDropdownRef : null}
              >
                {item.isDropdown ? (
                  <>
                    <a
                      href={item.path}
                      className="nav-link d-flex align-items-center"
                      style={{
                        ...navLinkStyle(location.pathname.startsWith(item.path) && item.path !== "/#about" && item.path !== "/#business"),
                      }}
                      id={`${item.name.replace(/\s+/g, '')}Dropdown`}
                      role="button"
                      aria-expanded={(item.name === "Who we are" && aboutDropdownOpen) || (item.name === "Business" && businessDropdownOpen)}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.name === "Who we are") {
                          setBusinessDropdownOpen(false);
                          setAboutDropdownOpen(!aboutDropdownOpen);
                        } else if (item.name === "Business") {
                          setAboutDropdownOpen(false);
                          setBusinessDropdownOpen(!businessDropdownOpen);
                        }
                      }}
                    >
                      <span>{item.name}</span>
                      <i 
                        className="fas fa-chevron-down ms-2"
                        style={{
                          fontSize: '12px',
                          transition: 'transform 0.3s ease',
                          transform: (item.name === "Who we are" && aboutDropdownOpen) || (item.name === "Business" && businessDropdownOpen) ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby={`${item.name.replace(/\s+/g, '')}Dropdown`}
                      style={{
                        ...dropdownMenuStyle(
                          (item.name === "Who we are" && aboutDropdownOpen) || 
                          (item.name === "Business" && businessDropdownOpen)
                        ),
                        ...(mobileMenuOpen && mobileDropdownMenuStyle)
                      }}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name} className={dropdownItem.isDropdown ? "dropdown-submenu" : ""} style={{ position: 'relative' }}>
                          {dropdownItem.isDropdown ? (
                            <>
                              <a
                                href={dropdownItem.path}
                                className="dropdown-item dropdown-toggle d-flex align-items-center"
                                style={dropdownItemStyle(location.pathname === dropdownItem.path)}
                                onClick={(e) => {
                                  e.preventDefault();
                                  const submenu = e.currentTarget.nextElementSibling;
                                  // Close any other open submenus at this level
                                  const parentMenu = e.currentTarget.closest('.dropdown-menu');
                                  if (parentMenu) {
                                    const openSubmenus = parentMenu.querySelectorAll('.dropdown-menu');
                                    openSubmenus.forEach((menu) => {
                                      if (menu !== submenu) {
                                        menu.style.display = 'none';
                                      }
                                    });
                                  }
                                  if (submenu.style.display === "block") {
                                    submenu.style.display = "none";
                                  } else {
                                    submenu.style.display = "block";
                                  }
                                }}
                              >
                                {dropdownItem.icon && <i className={`fas ${dropdownItem.icon} me-2`}></i>}
                                {dropdownItem.name}
                              </a>
                              <ul className="dropdown-menu" style={{ display: "none", marginLeft: "15px", marginTop: "0px", top: 0, left: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", minWidth: "220px", position: "absolute", zIndex: 1050, backgroundColor: 'rgba(0, 41, 86, 0.98)', color: '#ffffff' }}>
                                {dropdownItem.dropdownItems.map((subItem) => (
                                  <li key={subItem.name} style={{ padding: '5px 10px' }}>
                                    <Link
                                      className="dropdown-item"
                                      to={subItem.path}
                                      style={{ ...dropdownItemStyle(location.pathname === subItem.path), color: '#ffffff' }}
                                      onClick={() => {
                                        setAboutDropdownOpen(false);
                                        setBusinessDropdownOpen(false);
                                        setMobileMenuOpen(false);
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <>
                              <Link
                                className="dropdown-item"
                                to={dropdownItem.path}
                                style={dropdownItemStyle(location.pathname === dropdownItem.path)}
                                onClick={() => {
                                  setAboutDropdownOpen(false);
                                  setBusinessDropdownOpen(false);
                                  setMobileMenuOpen(false);
                                }}
                              >
                                {dropdownItem.name}
                                {dropdownItem.note && (
                                  <small style={{ display: "block", fontWeight: "normal", fontSize: "12px", marginTop: "3px", color: "#ccc" }}>
                                    {dropdownItem.note}
                                  </small>
                                )}
                              </Link>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                    to={item.path}
                    style={navLinkStyle(location.pathname === item.path)}
                    onClick={() => setMobileMenuOpen(false)} // Close mobile menu on item click
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
