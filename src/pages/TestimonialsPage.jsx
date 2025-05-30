import React, { useEffect } from "react";
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
      review: "The Makonis team are resolute professionals who listen to your business needs and help guide you toward talent that fits both technically and culturally. They are our long-term trusted partners.",
    },
    {
      name: "Ashish Joshi",
      role: "COO, Redwood Software Inc.",
      photo: "https://cdn.theorg.com/8589a507-b587-45d7-bd11-ee05879622d3_thumb.jpg",
      logo: "https://www.redwood.com/wp-content/uploads/Redwood_Logo_White.svg",
      review: "We highly recommend Makonis to any employer looking for hiring top talent. They are professional, genuine and highly invested in success. We can count on them every time.",
    },
    {
      name: "Sudhakar Krishnamachari",
      role: "Head of Engineering, LoanIQ",
      photo: "https://randomuser.me/api/portraits/men/40.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Panasonic_logo_blue.svg",
      review: "Makonis helped our LoanIQ team scale faster with skilled engineers and offered excellent support throughout the hiring process.",
    },
    {
      name: "Priya Sharma",
      role: "VP, Tech at FinPoint",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Placeholder_company_logo.svg",
      review: "Exceptional service! Their speed, accuracy, and client support have consistently exceeded our expectations.",
    },
  ];

  useEffect(() => {
    document.title = "Client Testimonials | Makonis";
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "#0c1f38",
        minHeight: "100vh",
        paddingTop: "100px",
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
        className="mt-5"
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
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
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                borderTop: "4px solid #00A0E9",
                padding: "35px 30px",
                minHeight: "360px",
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
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,160,233,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(0,160,233,0.3)";
              }}
            >
              {/* Opening Quote */}
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

              {/* Review Text */}
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#0a1992",
                  marginLeft: "20px",
                  marginTop: "30px",
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                {item.review}
              </p>

              {/* Star Rating */}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientTestimonials;
