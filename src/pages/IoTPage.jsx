import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Font Awesome is included via CDN in index.html
import 'animate.css';

gsap.registerPlugin(ScrollTrigger);

// Suggestion: Define content in a more structured way
const iotPageData = {
    hero: {
        title: "Internet of Things Solutions", // Slightly more descriptive
        subtitle: "We combine in-depth industry expertise with world-class technical knowledge to help you create compelling software-based products that connect and deliver intelligence, transforming data into actionable insights.", // Enhanced subtitle
        backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' // Using your suggested image
    },
    sections: [
        {
            id: 'prototyping',
            title: "Rapid IoT Prototyping", // More active title
            texts: [
                "Our rapid IoT modeling process is meticulously designed to pinpoint critical parameters for your product solution. We specialize in end-to-end prototypes, forging a 'thin string' that seamlessly connects sensors through robust devices, secure networks, scalable cloud infrastructure, and finally integrates with your intuitive end-user interface and existing enterprise systems.",
                "While building an IoT prototype is inherently rewarding, it's also a significant engineering challenge. We understand the iterative refinement process – from those moments of 'it should work this time!' to the more common quiet non-responses. Our expertise navigates these complexities, ensuring efficient development and optimal outcomes."
            ],
            image: 'https://images.unsplash.com/photo-1587427890418-35093075832e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'IoT Prototyping and circuit boards',
            reversed: false
        },
        {
            id: 'iotization',
            title: "Seamless End-to-End IoT Integration", // More impactful title
            texts: [
                "Leverage the power of self-learning models, continuously fueled by rich contextual data, to enhance in-flight interactions in real-time. Information acquired during dynamic processes instantly informs and refreshes the model's recommendations, dramatically improving decision-making and operational outcomes.",
                "Develop optimized next-best-action strategies by rapidly configuring, sequencing, and arbitrating between diverse organizational and client policies—spanning critical areas like sales, service, risk management, and operational decisions. Transform raw data streams into valuable, actionable business intelligence for significant revenue gains and enhanced efficiency."
            ],
            image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Connected devices and network for end-to-end IoT',
            reversed: true
        },
        // Add more sections here if needed, following the same structure
        // Example for Cloud App Development:
        {
            id: 'cloud-app',
            title: "Scalable Cloud Application Development",
            texts: [
                "Build robust and scalable cloud applications that serve as the brain of your IoT ecosystem. Our expertise ensures secure data ingestion, real-time processing, and powerful analytics, providing you with invaluable insights.",
                "From designing microservices architectures to implementing serverless functions, we craft cloud solutions that are highly available, fault-tolerant, and cost-effective, ready to handle vast amounts of IoT data."
            ],
            image: 'https://images.unsplash.com/photo-1584735935682-2c07b06820c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Cloud computing infrastructure for IoT',
            reversed: false
        },
        {
            id: 'hardware',
            title: "Robust Hardware Integration & Firmware",
            texts: [
                "Our team excels in integrating diverse hardware components and developing highly optimized firmware. We ensure seamless communication between your devices and the broader IoT network, focusing on reliability and performance.",
                "Whether it's custom board design, sensor integration, or low-level programming, we cover the full spectrum of hardware and firmware development to bring your IoT concepts to life."
            ],
            image: 'https://images.unsplash.com/photo-1593642531390-e4231b191244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Hardware components and microcontroller',
            reversed: true
        },
        {
            id: 'porting',
            title: "Advanced Android & Linux Porting",
            texts: [
                "Porting open-source Linux and Android for embedded product development offers significant advantages over proprietary operating systems, accelerating innovation and reducing costs:"
            ],
            listItems: [
                "**Cost Efficiency:** Apache v2.0 licensed software eliminates hefty licensing fees, reducing your overall development budget.",
                "**Reduced TCO:** Avoid costly support and maintenance services often tied to proprietary OS, device drivers, and kernels, leading to a lower total cost of ownership.",
                "**Unmatched Flexibility:** Gain the freedom to seamlessly integrate customized and open-source software packages and components, tailoring solutions precisely to your needs.",
                "**Accelerated Time-to-Market:** Benefit from readily available, robust open-source packages that require minimal customization, dramatically speeding up your product launch."
            ],
            image: 'https://images.unsplash.com/photo-1610465210430-4ds791036569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            alt: 'Linux and Android logos with circuit board',
            reversed: false // Changed to false for variety
        }
    ],
    cta: {
        title: "Ready to Transform Your Business with IoT?",
        text: "Our deep expertise in IoT solutions will empower you to succeed and lead in the digital world. Contact us today, and one of our dedicated IoT experts will reach out to discuss how we can collaboratively lead your innovative project to unparalleled success.",
        buttonText: "Begin Your IoT Transformation", // More active CTA text
        buttonLink: "/contact"
    }
};

const IoTPage = () => {
    const heroRef = useRef(null);
    const sectionsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // GSAP Animations
        const ctx = gsap.context(() => {
            // Hero section animation
            gsap.from(heroRef.current.querySelector('h1'), {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            gsap.from(heroRef.current.querySelector('p'), {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                delay: 0.3
            });

            gsap.from(heroRef.current.querySelector('.btn'), {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)",
                delay: 0.6
            });

            // Sections animations
            sectionsRef.current.forEach((section, index) => {
                if (section) {
                    gsap.from(section.querySelector('h2'), {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    });

                    gsap.from(section.querySelectorAll('p'), {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 75%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    });

                    gsap.from(section.querySelector('img'), {
                        scale: 0.8,
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            });

            // CTA section animation
            gsap.from(ctaRef.current.querySelector('h2'), {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const [isCtaButtonHovered, setIsCtaButtonHovered] = useState(false);
    const [hoveredImage, setHoveredImage] = useState(null);

    // --- Reusable Style Objects ---
    // Defined once, used everywhere for consistency
    const primaryColor = '#007bff'; // Bootstrap primary
    const primaryDarkColor = '#0056b3'; // A darker shade for gradients/hovers
    const primaryRgb = '0,123,255'; // RGB for shadows

    const ctaButtonBaseStyle = {
        padding: '1.2rem 3rem', // Larger padding
        fontSize: '1.2rem', // Larger font
        background: `linear-gradient(95deg, ${primaryColor}, ${primaryDarkColor})`, // Gradient
        border: 'none',
        borderRadius: '50px', // More rounded
        boxShadow: `0 8px 25px rgba(${primaryRgb}, 0.3)`, // More pronounced shadow
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        transform: 'translateY(0)',
        color: '#fff',
        textDecoration: 'none',
        display: 'inline-block' // Ensures proper padding/sizing for Link
    };

    const ctaButtonHoverStyle = {
        background: `linear-gradient(95deg, ${primaryDarkColor}, ${primaryColor})`, // Reverse gradient on hover
        boxShadow: `0 12px 30px rgba(${primaryRgb}, 0.5)`, // Deeper shadow
        transform: 'translateY(-6px) scale(1.05)', // Lift and slightly scale
    };

    const featureImageContainerStyle = (isHovered) => ({
        borderRadius: '1.25rem', // More rounded corners
        overflow: 'hidden',
        boxShadow: isHovered ? '0 1.25rem 3.5rem rgba(0,0,0,0.2)' : '0 0.75rem 2rem rgba(0,0,0,0.1)', // More pronounced shadow
        transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out', // Smoother transition
        transform: isHovered ? 'scale(1.04) translateY(-8px)' : 'scale(1) translateY(0)', // Lift and scale
        backgroundColor: '#f0f2f5', // Slightly darker fallback for image loading
    });

    const featureImageStyle = {
        width: '100%',
        height: '100%',
        minHeight: '400px', // Increased min-height for more visual impact
        objectFit: 'cover',
        transition: 'transform 0.6s ease', // Slower, smoother zoom on hover
        // When hovered, you could add: transform: 'scale(1.05)'
    };

    return (
        <div className="iot-page-wrapper">
            {/* --- Enhanced Hero Section --- */}
            <section
                ref={heroRef}
                className="iot-hero-section text-white text-center d-flex align-items-center position-relative overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 41, 86, 0.85), rgba(0, 41, 86, 0.95)), url(${iotPageData.hero.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    padding: '8rem 0'
                }}
            >
                {/* Animated Background Elements */}
                <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
                    {/* Floating Tech Icons */}
                    {[
                        { icon: 'fa-microchip', top: '15%', left: '10%', delay: 0 },
                        { icon: 'fa-wifi', top: '25%', right: '15%', delay: 1 },
                        { icon: 'fa-satellite-dish', bottom: '20%', left: '8%', delay: 2 },
                        { icon: 'fa-network-wired', bottom: '30%', right: '12%', delay: 3 }
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
                                    color: 'rgba(0, 160, 233, 0.8)',
                                    fontSize: '1.5rem'
                                }}
                            />
                        </div>
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
                            filter: 'blur(40px)',
                            animation: 'pulse 4s ease-in-out infinite'
                        }}
                    />
                </div>
                {/* Optional: Add a subtle background pattern or animation here */}
                <Container className="position-relative z-index-1"> {/* Ensure content is above any background effects */}
                    <h1 className="display-2 fw-bolder mb-4 animate__animated animate__fadeInDown animate__slow" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)' }}>
                        {iotPageData.hero.title}
                    </h1>
                    <p className="lead mb-5 mx-auto animate__animated animate__fadeInUp animate__slow" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0,0,0,0.4)', fontSize: '1.35rem' }}>
                        {iotPageData.hero.subtitle}
                    </p>
                    <Link
                        to="/contact"
                        className="btn btn-lg rounded-pill fw-bold animate__animated animate__zoomIn animate__delay-1s" // Added more specific animation
                        style={{
                            ...ctaButtonBaseStyle,
                            backgroundColor: 'rgba(255,255,255,0.18)', // Slightly more opaque white for hero button
                            borderColor: 'rgba(255,255,255,0.6)',
                            backdropFilter: 'blur(8px)', // More blur
                            boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                            padding: '1.2rem 3.5rem',
                            fontSize: '1.25rem',
                            ...(isCtaButtonHovered && {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                borderColor: 'rgba(255,255,255,0.8)',
                                transform: 'translateY(-5px) scale(1.03)',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.35)'
                            })
                        }}
                        onMouseEnter={() => setIsCtaButtonHovered(true)}
                        onMouseLeave={() => setIsCtaButtonHovered(false)}
                    >
                        Connect With Our IoT Experts <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </Container>
            </section>

            {/* --- Feature Sections --- */}
            <div className="py-6 py-md-7" style={{
                background: 'linear-gradient(135deg, rgba(0, 41, 86, 0.8) 0%, rgba(0, 41, 86, 0.9) 100%)',
                backdropFilter: 'blur(10px)'
            }}>
                <Container>
                    {iotPageData.sections.map((section, idx) => (
                        <section
                            key={section.id}
                            ref={el => sectionsRef.current[idx] = el}
                            className={`mb-6 mb-md-8 pt-4 pb-5 ${idx % 2 !== 0 ? 'rounded-4 shadow-sm' : ''}`}
                            style={{
                                background: idx % 2 !== 0 ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                backdropFilter: idx % 2 !== 0 ? 'blur(15px)' : 'none',
                                border: idx % 2 !== 0 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
                            }}
                        >
                            <Row className={`align-items-center g-5 ${section.reversed ? 'flex-row-reverse' : ''}`}>
                                <Col lg={6} md={12} className={`mb-4 mb-lg-0 ${section.reversed ? 'ps-lg-5' : 'pe-lg-5'}`}>
                                    <h2 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}> {/* White text for dark background */}
                                        {section.title}
                                    </h2>
                                    {section.texts.map((text, textIdx) => (
                                        <p key={textIdx} className="mb-4" style={{
                                            fontSize: '1.15rem',
                                            lineHeight: '1.8',
                                            color: 'rgba(255, 255, 255, 0.9)'
                                        }}> {/* Light text for dark background */}
                                            {text}
                                        </p>
                                    ))}
                                    {section.listItems && (
                                        <ListGroup variant="flush" className="mt-4 mb-4">
                                            {section.listItems.map((item, itemIdx) => (
                                                <ListGroup.Item
                                                    key={itemIdx}
                                                    className="d-flex align-items-start border-0 px-0 bg-transparent py-2" // More padding for list items
                                                    style={{
                                                        fontSize: '1.05rem',
                                                        lineHeight: '1.7',
                                                        color: 'rgba(255, 255, 255, 0.8)'
                                                    }}
                                                >
                                                    <i className="fas fa-check-circle text-success mt-1 me-3 fs-5"></i> {/* Green check icon, slightly larger */}
                                                    {item}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    )}
                                    <Link
                                        to={`/services/iot/${section.id}`}
                                        className="fw-semibold text-primary text-decoration-none mt-3 d-inline-block animate__animated animate__fadeInUp" // Added animation
                                        style={{ fontSize: '1.1rem' }}
                                    >
                                        Explore More <i className="fas fa-arrow-right ms-2 small"></i>
                                    </Link>
                                </Col>
                                <Col lg={6} md={12}>
                                    <div
                                        style={featureImageContainerStyle(hoveredImage === section.id)}
                                        onMouseEnter={() => setHoveredImage(section.id)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                    >
                                        <Image
                                            src={section.image}
                                            alt={section.alt}
                                            fluid
                                            className="animate__animated animate__fadeInRight animate__delay-0.5s" // Image animation
                                            style={{
                                                ...featureImageStyle,
                                                transform: hoveredImage === section.id ? 'scale(1.05)' : 'scale(1)' // Image zoom on hover
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    ))}
                </Container>
            </div>

            {/* --- Enhanced Final CTA Section --- */}
            <section
                ref={ctaRef}
                className="py-6 py-md-7 text-center text-white position-relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${primaryDarkColor} 0%, #002e5b 100%)`
                }}
            >
                {/* Enhanced Background Elements */}
                <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
                    {/* Animated Particles */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="position-absolute"
                            style={{
                                width: '4px',
                                height: '4px',
                                background: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '50%',
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float 8s ease-in-out infinite`,
                                animationDelay: `${i * 0.5}s`,
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                            }}
                        />
                    ))}
                </div>
                {/* Optional: Add a subtle background pattern or SVG shapes */}
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 70%)', zIndex: 0 }}></div>
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ backgroundImage: 'radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 70%)', zIndex: 0 }}></div>

                <Container className="position-relative z-index-1">
                    <h2 className="display-3 fw-bolder mb-4 animate__animated animate__fadeInDown" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.4)' }}>{iotPageData.cta.title}</h2>
                    <p className="lead mb-5 mx-auto animate__animated animate__fadeInUp" style={{ maxWidth: '750px', opacity: 0.95, fontSize: '1.25rem' }}>
                        {iotPageData.cta.text}
                    </p>
                    <Link
                        to={iotPageData.cta.buttonLink}
                        className="animate__animated animate__zoomIn animate__delay-0.5s"
                        style={isCtaButtonHovered ? { ...ctaButtonBaseStyle, ...ctaButtonHoverStyle } : ctaButtonBaseStyle}
                        onMouseEnter={() => setIsCtaButtonHovered(true)}
                        onMouseLeave={() => setIsCtaButtonHovered(false)}
                    >
                        {iotPageData.cta.buttonText} <i className="fas fa-rocket ms-2"></i>
                    </Link>
                </Container>
            </section>

            {/* Global CSS for custom variables and potential small tweaks */}
            <style>{`
                :root {
                    --bs-primary: ${primaryColor};
                    --bs-primary-dark: ${primaryDarkColor};
                    --bs-primary-rgb: ${primaryRgb};
                }

                .iot-hero-section {
                    /* Add this for a subtle parallax effect if you're not using a library.
                       Requires the hero's content to be in a position: relative; container
                       and the background to be position: fixed; or use background-attachment: fixed;
                       However, background-attachment: fixed; can be buggy on mobile.
                       A JavaScript-based parallax is more robust.
                    */
                }

                /* General improvements for better visual balance */
                h1, h2, h3, h4, h5, h6 {
                    line-height: 1.2;
                }

                p {
                    line-height: 1.75;
                }

                .container {
                    padding-left: 1.5rem;
                    padding-right: 1.5rem;
                }

                /* Custom class for padding on sections */
                .py-6 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
                .py-7 { padding-top: 8rem !important; padding-bottom: 8rem !important; }

                /* Enhanced Animations */
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.6;
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

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.15;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.25;
                    }
                }

                /* Media queries for better responsiveness of spacing */
                @media (min-width: 768px) {
                    .py-md-6 { padding-top: 6rem !important; padding-bottom: 6rem !important; }
                    .py-md-7 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
                    .mb-md-6 { margin-bottom: 6rem !important; }
                    .mb-md-8 { margin-bottom: 8rem !important; }
                }

            `}</style>
        </div>
    );
};

export default IoTPage;