import React from "react";
import "./Products.css";
import wire2 from "../images/wire2.png";
import wire3 from "../images/wire3.png";
import wire4 from "../images/wire4.png";
import wire5 from "../images/wire5.png";

const OurProducts = () => {
  return (
    <>
      {/* ===== Top Hero Section ===== */}
      <div className="products-hero">
        <div className="container">
          <p className="breadcrumb">Home &gt; Our Products</p>
          <h1 className="hero-heading">
            Smarter
          </h1>
          <span className="hero-heading-span">Wires, <br /></span>
          <p className="hero-heading p">Safer Tomorrow</p>
          <p className="hero-text">
            Discover our safe, durable, and BIS-certified copper wires and
            cables — engineered to power homes, industries, and agriculture with
            reliability.
          </p>
        </div>

        {/* Decorative circular scroll hint */}
        <div className="scroll-down-circle">
          <span>Explore Our Range</span>
          <i className="bi bi-arrow-down"></i>
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
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

            {/* Card 4 */}
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
    </>
  );
};

export default OurProducts;
