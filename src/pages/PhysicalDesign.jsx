import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import BGImage from "../Asserts/PD2.png";
import ExpertiseImage from "../Asserts/PD3.png";
import PD4 from "../Asserts/PD4.png";

const PhysicalDesignPage = () => {
  useEffect(() => {
    document.title = "Physical Design | Makonis";
  }, []);

  return (
    <div style={{ backgroundColor: "#0c1f38", color: "#ffffff" }}>
      
      {/* Hero Section */}
      <section
        className="d-flex align-items-center"
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          minHeight: "520px",
          padding: "60px 20px"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <h1 className="fw-bold display-5 mb-3">Physical Design Services</h1>
              <p className="lead text-white mb-4">
                From RTL to GDSII, our expert team delivers low-power, high-performance, and area-efficient SoC implementations.
              </p>
              <a href="/contact" className="btn btn-info text-dark fw-semibold px-4 py-2 rounded-pill">
                Talk to Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container py-5">
        <h2 className="text-center mb-5 text-info fw-bold">Our Expertise</h2>
        <div className="row align-items-start g-5">
          <div className="col-lg-6 text-center">
            <img
              src={ExpertiseImage}
              alt="Physical Design Layout"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "480px", objectFit: "contain" }}
            />
          </div>

          <div className="col-lg-6">
            <div className="mb-4">
              <h5 className="text-info fw-bold">PD Implementation</h5>
              <ul className="text-white ps-3">
                <li>Floor Planning</li>
                <li>Place and Route</li>
                <li>Clock Tree Synthesis (CTS)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="text-info fw-bold">STA & Design Analysis</h5>
              <ul className="text-white ps-3">
                <li>Constraint Generation</li>
                <li>Budgeting</li>
                <li>Timing Sign-off</li>
                <li>Crosstalk, Noise, Signal Integrity</li>
                <li>AOCV and POCV</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5 className="text-info fw-bold">Physical Verification & DFM</h5>
              <ul className="text-white ps-3">
                <li>DRC, LVS, ESD, Antenna Checks</li>
                <li>OPC, CMP, Yield, and Reliability Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Grid-based Process Steps */}
      <section className="py-5" style={{ backgroundColor: "#001e36" }}>
        <div className="container">
          <h2 className="text-center text-info fw-bold mb-5">The Steps We Follow in Our Approach</h2>
          <div className="row g-4">
            {[
              {
                step: "01",
                title: "Schematic Extraction",
                desc: "We extract the schematic view of the design and run migration scripts from the source to the destination database."
              },
              {
                step: "02",
                title: "Block Mapping",
                desc: "Verify device mapping for all blocks, simulate with destination models, and create a comparison table."
              },
              {
                step: "03",
                title: "Layout Migration",
                desc: "Migrate layout views with manual tweaks and initiate verification flows after simulation checks."
              },
              {
                step: "04",
                title: "Manual Porting",
                desc: "If mismatches arise, apply manual porting techniques and replicate transistor operating points in new tech."
              },
              {
                step: "05",
                title: "Comparison & Tuning",
                desc: "Tweak and match source characteristics to the destination, ensuring the design meets specifications."
              },
              {
                step: "06",
                title: "Final Netlist Verification",
                desc: "Post-layout netlist is compared with pre-layout simulation to confirm requirement alignment."
              }
            ].map((item, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div
                  className="p-4 h-100 rounded shadow card-hover"
                  style={{
                    backgroundColor: "#0f2b4b",
                    border: "1px solid rgba(0,160,233,0.2)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 step-badge"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "radial-gradient(circle at top left, #00cfff, #005eff)",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        boxShadow: "0 0 12px rgba(0,160,233,0.5)"
                      }}
                    >
                      {item.step}
                    </div>
                    <h6 className="text-white fw-bold mb-0">{item.title}</h6>
                  </div>
                  <p className="text-white" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline Animation */}
        <style>
          {`
            .card-hover:hover {
              transform: translateY(-6px);
              box-shadow: 0 12px 24px rgba(0, 160, 233, 0.25);
            }

            .step-badge {
              animation: pulse 3s ease-in-out infinite;
            }

            @keyframes pulse {
              0% { transform: scale(1); box-shadow: 0 0 12px rgba(0,160,233,0.4); }
              50% { transform: scale(1.1); box-shadow: 0 0 24px rgba(0,160,233,0.8); }
              100% { transform: scale(1); box-shadow: 0 0 12px rgba(0,160,233,0.4); }
            }
          `}
        </style>
      </section>

      {/* Final CTA Section */}
      <section
        className="text-center text-white"
        style={{
          backgroundImage: `url(${PD4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "100px 20px"
        }}
      >
        <div>
          <h2 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>
            Ready to Elevate Your Physical Design Strategy?
          </h2>
          <p className="text-white-50 mb-4" style={{ fontSize: "1.1rem" }}>
            Partner with Makonis to streamline your SoC implementation with speed, precision, and confidence.
          </p>
          <a
            href="/contact"
            className="btn px-5 py-3 rounded-pill fw-semibold"
            style={{
              background: "linear-gradient(135deg, #00cfff, #005eff)",
              color: "#001e36",
              fontSize: "1.1rem",
              boxShadow: "0 0 16px rgba(0,160,233,0.5)",
              transition: "all 0.3s ease-in-out"
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 0 28px rgba(0,160,233,0.8)"}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 0 16px rgba(0,160,233,0.5)"}
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default PhysicalDesignPage;
