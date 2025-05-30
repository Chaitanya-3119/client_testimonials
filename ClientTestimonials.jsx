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
      logo: "https://ansrsource.com/wp-content/uploads/2022/08/ansrsource-with-tagline-original_break-05.png    ",
      review: "“The Makonis team are resolute professionals who have one trait that few talent sourcing organizations possess;  they listen. They listen to where your business is, your emerging challenges, and help guide you toward talent that don’t only have the capabilities you need but also fit with your organizational culture. I’ve known Sanjay and his team for years and I’m happy to call them partners in my organization’s success.”"
    },
    {
      name: "Ashish Joshi",
      role: "COO, Redwood Software Inc.",
      photo: "https://cdn.theorg.com/8589a507-b587-45d7-bd11-ee05879622d3_thumb.jpg",
      logo: "https://www.redwood.com/wp-content/uploads/Redwood_Logo_White.svg",
      review: "We highly recommend Makonis to any employer looking for hiring top talent. They are professional, genuine and highly invested in finding you the best talent. We can count on them in finding right talent within time and budget"
    },
    {
      name: "Sudhakar krishnamachari",
      role: "Head of Engineering Corporate Lending, LoanIQ",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Panasonic_logo_blue.svg",
      review: "As I assumed the duties of the LoanIQ engineering team of Finastra in 2019, I realised that standard hiring and staffing methods were finding it difficult to manage the pace and quality required.  The ongoing need to manage the team's capacity and expand it to meet future demands was important. Makonis' team supported the action for contract to hire engineers. This was for testing and programming positions, and provided a means of hiring quality personnel. They also agreed to increasing their upfront training expenditures to meet demand. The relationship with the Makonis engineering team has been positive. I hope they have more success down the road."
    }
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
        position: "relative"
      }}
    >
      <h2
        className="text-center mb-5"
        style={{
          color: "#ffffff",
          fontWeight: "800",
          fontSize: "2.8rem",
          letterSpacing: "0.5px"
        }}
      >
        What Our Clients Say
      </h2>

      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ paddingBottom: "60px" }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <div
                  className="shadow"
                  style={{
                    background: "#102a57",
                    borderRadius: "18px",
                    width: "100%",
                    maxWidth: "360px",
                    margin: "0 auto",
                    borderTop: "4px solid #00A0E9",
                    padding: "35px 30px",
                    minHeight: "340px",
                    transition: "transform 0.3s ease",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative"
                  }}
                >
                  {/* Quote Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 25,
                      fontSize: "40px",
                      color: "#7dafff"
                    }}
                  >
                    “
                  </div>

                  {/* Review Text */}
                  <p
                        style={{
                            fontSize: "1.05rem",
                            color: "#dbeaff",
                            marginLeft: "20px",
                            marginTop: "10px",
                            fontWeight: "500",
                            fontStyle: "italic",
                            lineHeight: "1.8"
                            }}
                >
                {item.review}
                </p>

            {/* Closing Quote Icon – outside the <p> and at bottom right of card */}
            <div
            style={{
                textAlign: "right",
                fontSize: "28px",
                color: "#7dafff",
                marginTop: "10px",
                paddingRight: "10px"
                }}
            >
                ”
        </div>


                  {/* Footer with author info + logo */}
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
                          objectFit: "cover"
                        }}
                      />
                      <div>
                        <h6 className="mb-0 fw-bold text-white">{item.name}</h6>
                        <small style={{ color: "#ffffffcc" }}>{item.role}</small>

                      </div>
                    </div>
                    <img
                      src={item.logo}
                      alt="company"
                      style={{
                        height: "55px",
                        maxWidth: "120px",
                        objectFit: "contain",
                        marginLeft: "10px",
                        filter: "grayscale(0%)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Style (if you add Pagination module later) */}
      <div className="text-center">
        <style>{`
          .swiper-pagination-bullet {
            background-color: #1a6eff !important;
            opacity: 0.25;
            transition: all 0.3s ease;
            margin: 0 5px !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientTestimonials;
