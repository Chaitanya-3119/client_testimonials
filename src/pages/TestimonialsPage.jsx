import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Rajiv Narayana",
      role: "President & CEO, Ansrsource",
      photo: "https://ansrsource.com/wp-content/uploads/2022/06/Headshots-1.png",
      logo: "https://ansrsource.com/wp-content/uploads/elementor/thumbs/ansrsource-with-tagline-original_break-02-new-qum3i8u2w81sqeo0fbu6mizgjoynke3fwt9pdk1avs.png",
      review:
        "Makonis consistently stands out because they genuinely listen. They understand your business's current state and challenges, then expertly guide you to talent that fits both your capability needs and your organizational culture. I've partnered with Sanjay and his team for years and consider them invaluable to my organization's success.",
    },
    {
      name: "Ashish Joshi",
      role: "COO, Redwood Software Inc.",
      photo: "https://cdn.theorg.com/8589a507-b587-45d7-bd11-ee05879622d3_thumb.jpg",
      logo: "https://www.redwood.com/wp-content/uploads/Redwood_Logo_White.svg",
      review:
        "We highly recommend Makonis to any employer looking for hiring top talent. They are professional, genuine and highly invested in finding you the best talent. We can count on them in finding right talent within time and budget.",
    },
    {
      name: "Sudhakar Krishnamachari",
      role: "Head of Engineering, LoanIQ",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Panasonic_logo_blue.svg",
      review:
        "Taking over Finastra's LoanIQ engineering in 2019, I found traditional hiring too slow. Makonis quickly supplied quality contract-to-hire engineers for testing and programming, even boosting their training investment. Our collaboration has been very positive; I wish them ongoing success.",
    },
    {
      name: "Priya Sharma",
      role: "VP, Tech at FinPoint",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Placeholder_company_logo.svg",
      review:
        "Exceptional service! Their speed, accuracy, and client support have consistently exceeded our expectations. Their dedication and detail orientation in all hiring cycles have made a real difference to our productivity and onboarding experience.",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const popoverRef = useRef();

  useEffect(() => {
    document.title = "Client Testimonials | Makonis";

    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setHoverIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "#0c1f38",
        minHeight: "100vh",
        paddingTop: "100px",
        position: "relative",
      }}
    >
      <h2
        className="text-center mb-2"
        style={{
          color: "#ffffff",
          fontWeight: "800",
          fontSize: "2.8rem",
        }}
      >
        What Our Clients Say
      </h2>

      <Swiper
        className="mt-2"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={800}
        modules={[Autoplay]}
        style={{ paddingBottom: "60px", paddingLeft: "20px" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                borderTop: "4px solid #00A0E9",
                padding: "35px 30px",
                height: "430px",
                width: "100%",
                maxWidth: "380px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                boxShadow: "0 0 15px rgba(0,160,233,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0,160,233,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(0,160,233,0.3)";
              }}
            >
              {/* Quote */}
              <div
                style={{
                  fontSize: "40px",
                  color: "#00A0E9",
                  position: "absolute",
                  top: "20px",
                  left: "25px",
                }}
              >
                “
              </div>

              {/* Clamped Review */}
              <div
                style={{
                  marginTop: "40px",
                  marginLeft: "20px",
                  color: "#0a1992",
                  fontSize: "1.05rem",
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 5,
                }}
              >
                {item.review}
              </div>

              {/* Read More Button */}
              {item.review.length > 150 && (
                <span
                  onClick={() => setHoverIndex(index)}
                  style={{
                    color: "#0055cc",
                    fontWeight: "bold",
                    marginLeft: "20px",
                    marginTop: "8px",
                    cursor: "pointer",
                  }}
                >
                  ...read more
                </span>
              )}

              {/* Stars */}
              <div
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  color: "#FFD700",
                  margin: "10px 0 0 20px",
                }}
              >
                ★★★★★
              </div>

              {/* Closing Quote */}
              <div
                style={{
                  textAlign: "right",
                  fontSize: "26px",
                  color: "#00A0E9",
                  paddingRight: "10px",
                }}
              >
                ”
              </div>

              {/* Footer */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      border: "3px solid #1a6eff",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold" style={{ color: "#0a1992" }}>
                      {item.name}
                    </h6>
                    <small style={{ color: "#0a1992bb" }}>{item.role}</small>
                  </div>
                </div>
                <img
                  src={item.logo}
                  alt="company"
                  style={{
                    height: "45px",
                    maxWidth: "100px",
                    objectFit: "contain",
                    marginLeft: "10px",
                    filter: "grayscale(0%)",
                  }}
                />
              </div>

              {/* Popover Box for Full Review */}
              {hoverIndex === index && (
                <div
                  ref={popoverRef}
                  style={{
                    position: "absolute",
                    bottom: "100px",
                    left: "20px",
                    right: "20px",
                    background: "#f4faff",
                    color: "#0a1992",
                    padding: "15px",
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(0,0,0,0.15)",
                    zIndex: 99,
                    fontStyle: "italic",
                    animation: "fadeIn 0.3s ease-in-out",
                  }}
                >
                  {item.review}
                  <div
                    style={{
                      textAlign: "right",
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: "#0055cc",
                      cursor: "pointer",
                    }}
                    onClick={() => setHoverIndex(null)}
                  >
                    show less
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientTestimonials;
