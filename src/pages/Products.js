import React from "react";
import "./Products.css";
import wire1 from "../images/wire1.png";
import wire2 from "../images/wire2.png";
import wire3 from "../images/wire3.png";
import wire4 from "../images/wire4.png";
import wire5 from "../images/wire5.png";
import certified_safety from "../images/certified_safety.png"
import durability from "../images/durability.png"
import innovation from "../images/innovation.png"
import sustainability from "../images/sustainability.png"
import integrity from "../images/integrity.png"

const OurProducts = () => {
  return (
    <>
      <div className="products-hero">
        <img
          src={wire1}
          alt="Copper Wires"
          className="hero-wire-image"
          aria-hidden="true"
        />
        <div className="container hero-content">
          <p className="breadcrumb1">Home &gt; Our Products</p>
          <div className="hero-headline-group">
            <h1 className="hero-heading">Smarter</h1>
            <span className="hero-heading-span">wires,</span>
          </div>
          <p className="hero-heading secondary">Safer Tomorrow</p>
          <p className="hero-text">
            Discover our safe, durable, and BIS-certified copper wires and cables — engineered to power homes, industries, and agriculture with reliability.
          </p>
        </div>
      </div>
      {/* ===== Product Grid Section ===== */}
      <div className="product-grid-section py-5">
        <div className="container">
          <p className="small-title text-muted">Product Categories</p>
          <h2 className="product-heading">
            Explore <br />
            <span>Our Product Range</span>
          </h2>
          <p className="product-subtext">
            At Sonali Wires LLP, we offer a comprehensive range of copper wires
            and cables designed to meet diverse needs:
          </p>
          <div className="row g-4 mt-3">
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg1">
                <img src={wire2} alt="Three Core Flat Cables" />
                <h5>Three Core Flat Cables</h5>
                <p>
                  Trusted by farmers, these durable flat cables deliver
                  consistent power to submersible pumps.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg2">
                <img src={wire3} alt="Housing Wires" />
                <h5>Housing Wires</h5>
                <p>
                  Designed for residential use, these wires ensure safety and
                  long-lasting performance in homes.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg3">
                <img src={wire4} alt="Submersible Winding Wires" />
                <h5>Submersible Winding Wires</h5>
                <p>
                  Built with advanced insulation for high durability and
                  reliability underwater.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="products-card card-bg4">
                <img src={wire5} alt="Industrial Cables" />
                <h5>Industrial Cables</h5>
                <p>
                  High-performance cables used across industrial applications
                  requiring strength and flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Why Our Products Section ========= */}
            <div className="our-products-section">
              <div className="container">
                <div className="row align-items-start">
                  <div className="col-lg-6">
                    <p className="small-title-our text-muted">Why Our Products?</p>
                    <h2 className="our-values-heading">
                      Why Choose <br />
                      <span>Sonali Products?</span>
                    </h2>
                  </div>
                  <div className="col-lg-6">
                    <p className="our-values-subtext">
                      At Sonali Wires LLP, our growth is guided by principles that shape
                      every product and decision:
                    </p>
                  </div>
                </div>
      
                {/* Values Grid */}
                <div className="our-values-grid mt-4">
                  <div className="our-value-card">
                    <img src={certified_safety} alt="Certified safety" className="our-product-icons"/>
                    <h5>Certified Safety</h5>
                    <p>BIS, ISI & ISO approvals guarantee reliability and compliance.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src={durability} alt="Durability" className="our-product-icons"/>
                    <h5>Long-Lasting Durability</h5>
                    <p>Engineered to withstand heat, moisture, and tough conditions.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src={innovation} alt="Innovation" className="our-product-icons"/>
                    <h5>Eco-Friendly Solutions</h5>
                    <p>FRLS & HFFR wires designed for safer, greener environments.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src={sustainability} alt="Sustainability" className="our-product-icons"/>
                    <h5>Nationwide Trust</h5>
                    <p>Preferred by contractors, industries, farmers & households across India.</p>
                  </div>
      
                  <div className="our-value-card">
                    <img src={integrity} alt="Integrity" className="our-product-icons"/>
                    <h5>Advanced Manufacturing</h5>
                    <p>Produced with automated technology and NABL-accredited testing.</p>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default OurProducts;
