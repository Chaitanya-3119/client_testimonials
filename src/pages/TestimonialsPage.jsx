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

  const [expandedIndex, setExpandedIndex] = useState(null);
  const swiperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (expandedIndex !== null) {
      swiperRef.current?.autoplay?.stop();
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setExpandedIndex(null);
        swiperRef.current?.autoplay?.start();
      }, 60000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [expandedIndex]);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "#0c1f38",
        minHeight: "100vh",
        paddingTop: "80px",
        overflowX: "hidden",
      }}
    >
      <h2
        className="text-center mb-2"
        style={{ color: "#ffffff", fontWeight: "800", fontSize: "2.4rem" }}
      >
        What Our Clients Say
      </h2>

      <div
        style={{
          width: "60px",
          height: "4px",
          backgroundColor: "#00A0E9",
          margin: "0 auto 24px auto",
          borderRadius: "10px",
        }}
      ></div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1.05 },
          576: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.5 },
          1200: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "60px", paddingLeft: "15px" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                borderTop: "4px solid #00A0E9",
                padding: "20px 18px",
                width: "100%",
                maxWidth: "340px",
                minHeight: "430px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 0 12px rgba(0,160,233,0.25)",
              }}
            >
              {/* Review Block */}
              <div
                style={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Opening Quote */}
                <div style={{ fontSize: "30px", color: "#00A0E9", lineHeight: "1" }}>“</div>

                {/* Review Text */}
                <blockquote
                  style={{
                    borderLeft: "4px solid #00A0E9",
                    paddingLeft: "14px",
                    margin: "10px 0",
                    color: "#0a1992",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    fontStyle: "italic",
                    lineHeight: "1.7",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp:
                      expandedIndex === index ? "unset" : 5,
                  }}
                >
                  {item.review}
                </blockquote>

                {/* Closing Quote */}
                <div
                  style={{
                    fontSize: "24px",
                    color: "#00A0E9",
                    textAlign: "right",
                    marginTop: "4px",
                  }}
                >
                  ”
                </div>

                {/* Read More / Less */}
                {item.review.length > 150 && (
                  <span
                    onClick={() =>
                      expandedIndex === index
                        ? setExpandedIndex(null)
                        : setExpandedIndex(index)
                    }
                    style={{
                      color: "#0055cc",
                      fontWeight: "bold",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      marginTop: "6px",
                    }}
                  >
                    {expandedIndex === index ? "show less" : "...read more"}
                  </span>
                )}
              </div>

              {/* Star Rating */}
              <div style={{ fontSize: "16px", color: "#FFD700", margin: "10px 0 8px" }}>
                ★★★★★
              </div>

              {/* Footer */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "2px solid #1a6eff",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6
                      className="mb-0 fw-bold"
                      style={{ color: "#0a1992", fontSize: "0.95rem" }}
                    >
                      {item.name}
                    </h6>
                    <small style={{ color: "#0a1992bb", fontSize: "0.8rem" }}>
                      {item.role}
                    </small>
                  </div>
                </div>
                <img
                  src={item.logo}
                  alt="company"
                  style={{
                    height: "36px",
                    maxWidth: "80px",
                    objectFit: "contain",
                    filter: "grayscale(0%)",
                    marginLeft: "8px",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientTestimonials;
