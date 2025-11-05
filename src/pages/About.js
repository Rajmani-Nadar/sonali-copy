import React from "react";
import "./About.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaShieldAlt, FaCogs, FaLightbulb, FaLeaf, FaHeart } from "react-icons/fa";

import dressImage from "../images/dress_code.png";
import imgRamesh from "../images/successful-businessman-Photoroom 1.png";
import imgKarthik from "../images/jobs-career-campaign-Photoroom 1.png";
import imgPrakash from "../images/confident-businessman-Photoroom 1.png";
import imgAnitha from "../images/business-woman-Photoroom 1.png";
import historyImg from "../images/loom-Photoroom 1.png";

const About = () => {
  return (  
    <>
      {/* ========= Top Blue Section ========= */}
      <div className="about-container">
        <div className="about-content container">
          <div className="row align-items-start">
            {/* Left section */}
            <div className="col-lg-6">
              <p className="breadcrumb">Home &gt; About Us</p>
              <h2 className="about-title">About</h2>
              <h1 className="about-heading">
                <span>Sonali </span>Wires LLP
              </h1>

              <h3 className="vision-title">Our Vision</h3>
              <p className="vision-text">
                To empower households, industries, and agriculture with safe,
                innovative, and sustainable copper cabling solutions.
              </p>
            </div>

            {/* Right section */}
            <div className="col-lg-6 about-right">
              <h5 className="trusted-title">
                India’s Trusted Copper Wire Manufacturer — <br />
                BIS & ISO Certified for Quality and Safety
              </h5>
              <p className="trusted-desc text-white">
                Sonali Wires LLP is a leading name in India’s copper wire and cable
                industry. With a commitment to safety, durability, and reliability,
                we deliver high-quality products that power homes, strengthen
                industries, and support agriculture across the nation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= New White Section ========= */}
      <div className="about-white-section">
        <div className="container py-5">
          {/* Mission */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <p className="small-title text-muted">Our Mission</p>
              <h2 className="mission-text">
                To exceed customer expectations by delivering world-class copper
                wires and cables backed by quality certifications & innovation.
              </h2>

              <div className="mt-4">
                <h3 className="highlight-number">1M+</h3>
                <p className="highlight-caption">
                  Households & Industries Served
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div className="exp-box">
                <h3 className="exp-number">25+</h3>
                <p className="exp-caption">
                  Years of Excellence in copper wire manufacturing
                </p>
              </div>
            </div>
          </div>

          {/* Company Profile */}
          <div className="row align-items-start">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="small-title text-muted">Company Profile</p>
              <h2 className="profile-heading">
                A Trusted Name in <br />
                <span>Quality Copper Wire Manufacturing</span>
              </h2>
            </div>

            <div className="col-lg-6">
              <p className="profile-desc">
                Sonali Wires LLP is a leading manufacturer of high-quality copper
                wires and cable solutions trusted by homes, industries, and
                agricultural sectors across India. Backed by advanced technology,
                BIS & ISO certifications, and NABL-accredited in-house testing, we
                ensure safety, performance, and reliability in every product we
                produce.
              </p>
              <p className="profile-desc">
                With state-of-the-art manufacturing units and BIS & ISO-certified
                processes, we deliver products that meet long-term performance and
                unmatched safety assurance. Our solutions are used across power
                networks, motor manufacturers, infrastructure, and industrial
                applications.
              </p>
              <p className="profile-desc">
                Driven by continuous innovation and customer-centric values, Sonali
                Wires LLP continues to expand its footprint across India, becoming
                a trusted partner for distributors, OEMs, and industries requiring
                consistent and dependable copper wiring solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Leadership Section ========= */}
      <div className="leadership-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left image */}
            <div className="col-lg-4 text-center mb-4 mb-lg-0">
              <img src={dressImage} alt="Chairman" className="leader-img" />
            </div>

            {/* Right text */}
            <div className="col-lg-8">
              <i className="bi bi-quote"></i>
              <h3 className="leader-quote-title">
                Guided by <span>Values.</span> Driven by <span>Quality.</span>
              </h3>
              <p className="leader-quote-text">
                Our journey began with a commitment to deliver safe, durable, and
                reliable copper wiring solutions that empower everyday life—from
                homes to industries and farms. The trust of our customers and
                partners continues to inspire us to innovate responsibly, maintain
                uncompromising quality, and contribute to India’s growth through
                sustainable manufacturing practices.
              </p>

              <div className="leader-name-block">
                <h5 className="leader-name">Mr. R. Mahesh Kumar</h5> <br/>
                <p className="leader-title">
                  Chairman, <span>Sonali Wires LLP</span>
                </p>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* ========= Leadership Team Section ========= */}
      <div className="team-section">
        <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <p className="small-title text-muted">Our Leadership Team</p>
      <h2 className="team-heading">
  The People Empowering <br />
  <span>Our Growth & Excellence</span>
</h2>

      <p className="team-subtext">
        Behind our success is a dedicated leadership team that brings
        expertise, vision, and a strong commitment to quality and customer
        satisfaction.
      </p>
    </div>
  </div>


          <div className="row mt-5 g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-3 col-sm-6">
              <div className="team-card">
                <img src={imgKarthik} alt="Karthik Raj" className="team-img" />
                
                <div className="team-info">
                  <h5>Mr. S. Karthik Raj</h5>
                  <p>Managing Partner</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 col-sm-6">
              <div className="team-card">
                <img src={imgPrakash} alt="Mr. Prakash Srinivasan" className="team-img" />
                <div className="team-info">
                  <h5>Mr. Prakash Srinivasan</h5>
                  <p>Head – Manufacturing & Quality</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3 col-sm-6">
              <div className="team-card">
                
                <img src={imgAnitha} alt="Anitha Shree" className="team-img" />
                <div className="team-info">
                  <h5>Ms. Anitha Shree</h5>
                  <p>Head – Sales & Customer Relations</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3 col-sm-6">
              <div className="team-card">
                
                <img src={imgRamesh} alt="Ramesh" className="team-img" />
                <div className="team-info">
                  <h5>Mr. V. Ramesh</h5>
                  <p>Head – Finance & Admin</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* ========= Our History Section ========= */}
      <div className="history-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p className="small-title">Our History</p>
              <h2 className="history-heading">
                Our Journey <br />
                <span>Through the Years</span>
              </h2>
            </div>
            <div className="col-lg-4 text-lg-end">
              <p className="history-side-text">
                From a Modest Beginning to a Trusted <br /> Copper Brand
              </p>
            </div>
          </div>

          {/* Timeline Years */}
          <div className="timeline-years mt-4 mb-5">
            <span className="year active">1990</span>
            <span className="year">1999</span>
            <span className="year">2002</span>
            <span className="year">2012</span>
            <span className="year">2018</span>
            <span className="year">2024</span>
          </div>

          <div className="row align-items-center mt-4">
            <div className="col-md-6">
              <h4 className="history-subtitle">Beginning</h4>
              <p className="history-text">
                Established in 1990, Sonali Wires LLP started with a simple goal —
                to deliver safe and dependable copper wiring solutions for India's
                growing infrastructure needs. Through continuous innovation, strict
                quality control, and customer-first values, we transformed from a
                small manufacturing unit into a nationwide leader in copper wire
                and cable production.
              </p>
              <p className="history-text">
                Today, our legacy stands on decades of trust, performance, and
                progress — powering homes, industries, and communities across the
                country.
              </p>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img src={historyImg} alt="Sonali Wires Legacy" className="history-img" />
            </div>
          </div>
        </div>
      </div>

            {/* ========= Core Values Section ========= */}
      <div className="core-values-section">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <p className="small-title text-muted">Core Values</p>
              <h2 className="values-heading">
                What <br />
                <span>We Stand For</span>
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="values-subtext">
                At Sonali Wires LLP, our growth is guided by principles that shape
                every product and decision:
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="row g-3 mt-4">
            <div className="col-md-2 col-sm-6">
              <div className="value-card">
                <i className="value-icon">
                  <FaShieldAlt className="value-icon" />
                </i>
                <h5>Safety</h5>
                <p>Every wire designed to protect lives and property.</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="value-card">
                <i className="value-icon">
                  <FaCogs className="value-icon" />
                </i>
                <h5>Durability</h5>
                <p>Long-lasting performance, even in challenging environments.</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="value-card">
                <i className="value-icon">
                  <FaLightbulb className="value-icon" />
                </i>
                <h5>Innovation</h5>
                <p>Modern solutions for evolving needs.</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="value-card">
                <i className="value-icon">
                  <FaLeaf className="value-icon" />
                </i>
                <h5>Sustainability</h5>
                <p>Eco-friendly products and responsible practices.</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-6">
              <div className="value-card">
                <i className="value-icon">
                  <FaHeart className="value-icon" />
                </i>
                <h5>Integrity</h5>
                <p>Honesty and trust at the core of our relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default About;
