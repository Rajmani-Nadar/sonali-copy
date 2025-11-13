import React from "react";
import "./Innovation.css";
import reso from "../images/resource.png";

import certified_safety from "../images/certified_safety.png";
import durability from "../images/durability.png";
import innovation from "../images/innovation.png";

import assuranceImg from "../images/approach_assurance.png";
import shieldImg from "../images/approach_shield.png";
import bisIcon from "../images/approach_bis.png";
import isiIcon from "../images/approach_isi.png";
import isoIcon from "../images/approach_iso.png";
import sustainabilityImg from "../images/approach_sustainability.png";

const Innovation = () => {
  return (
    <>
    <div className="innovation-hero">
      {/* Left side: text content */}
      <div className="inno-hero-content">
        <p className="breadcrumb2">
          Home &gt; About Us &gt; Innovation & Quality
        </p>

        <h1 className="innovation-heading">
          Innovation <span>&amp;</span>
        </h1>

        <h1 className="quality-heading">quality</h1>

        <h3 className="at-sonali">at Sonali Wires</h3>

        <p className="hero-text">
          Delivering safer, smarter, and sustainable copper solutions.
        </p>
      </div>

      {/* Right side: image fills full height */}
      <div className="wire-image-container">
        <img
          src={reso}
          alt="Copper Wires"
          className="innovation-wire-image"
          aria-hidden="true"
        />
      </div>
    </div>


    {/* Our Innovation Approach Section */}
    <div className="innovation-approach-section">
      <div className="container inno-approach-content">
        {/* Left Text Section */}
        <div className="approach-left">
          <p className="approach-subtitle">Our Innovation Approach</p>
          <h2 className="approach-heading">
            Innovation <br />
            <span>That Powers Progress</span>
          </h2>
          <p className="approach-desc">
            At Sonali Wires LLP, innovation means developing smarter, eco-friendly,
            and longer-lasting solutions. Our R&D teams constantly work on new
            technologies to improve safety, performance, and sustainability in every wire.
          </p>

          <div className="approach-icons">
            <div className="approach-icon-item">
              <img
                src={certified_safety}
                alt="Certified Safety"
                className="appro-product-icons"
              />
              <p>Certified Safety</p>
            </div>

            <div className="approach-icon-item">
              <img
                src={durability}
                alt="Long-lasting Durability"
                className="appro-product-icons"
              />
              <p>Long-Lasting Durability</p>
            </div>

            <div className="approach-icon-item">
              <img
                src={innovation}
                alt="Eco-Friendly Solutions"
                className="appro-product-icons"
              />
              <p>Eco-Friendly Solutions</p>
            </div>
          </div>
        </div>

        {/* Right Circular Explore Button */}
        <div className="team-circle-inno">
                <svg viewBox="0 0 200 200" className="circle-svg-inno">
                  <defs>
                    <path
                      id="circlePath"
                      d="M100,100
               m-80,0
               a80,80 0 1,1 160,0
               a80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text
                    fontSize="28"
                    fill="#11224d"
                    fontWeight="500"
                    letterSpacing="2px"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      • Meet Our Team • Meet Our Team
                    </textPath>
                  </text>
                </svg>

                <div className="center-circle-inno">
                  <span className="arrow-inno">↓</span>
                </div>
              </div>
      </div>
    </div>


     {/* Quality-assurance-section */}
    <div className="quality-assurance-section">
      {/* Left Side - Image with Shield */}
      <div className="qa-left">
        <div className="qa-image-wrapper">
          <img
            src={assuranceImg}
            alt="Quality Assurance"
            className="qa-main-image"
          />
          <img
            src={shieldImg}
            alt="Shield Icon"
            className="qa-shield"
          />
        </div>
      </div>

      {/* Right Side - Text and Icons */}
      <div className="qa-right">
        <p className="qa-subtitle">Quality Assurance</p>
        <h2 className="qa-heading">
          Tested for <br/> <span>Trust</span>
        </h2>
        <p className="qa-description">
          Every product undergoes rigorous testing in NABL-accredited labs and
          complies with BIS, ISI & ISO standards. From raw materials to final
          output, our quality checks ensure reliability, safety, and long
          service life.
        </p>

        <div className="qa-icons">
          <div className="qa-icon-item">
            <img src={bisIcon} alt="BIS" className="qa-icon" />
          </div>

          <div className="qa-icon-item">
            <img src={isiIcon} alt="ISI" className="qa-icon" />
          </div>

          <div className="qa-icon-item">
            <img src={isoIcon} alt="ISO" className="qa-icon" />
          </div>
        </div>
      </div>
    </div>

    {/* Sustainability-section */}
    <div className="sustainability-section">
      {/* Left Side - Text Content */}
      <div className="sustain-left">
        <p className="sustain-subtitle">Sustainability Commitment</p>

        <h2 className="sustain-heading">
          Building a <br />
          <span>Safer, Greener Future</span>
        </h2>

        <p className="sustain-description">
          We believe in responsible manufacturing — reducing waste, conserving
          energy, and creating FRLS & HFFR eco-friendly wires. Our goal is to
          deliver safer products while protecting the environment for future
          generations.
        </p>

        <div className="sustain-icon-row">
          <div className="sustain-icon-item">
            <img
              src={innovation}
              alt="Eco Friendly"
              className="sustain-icon"
            />
            <p>Eco-Friendly</p>
          </div>

          <button className="sustain-btn">
            Explore Our Products <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="sustain-right">
        <img
          src={sustainabilityImg}
          alt="Sustainability"
          className="sustain-image"
        />
      </div>
    </div>
    </>
  );
};

export default Innovation;
