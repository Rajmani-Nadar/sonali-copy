import React, { useState } from "react";
import "./Home.css";
import redBlueYellow from "../images/freepik_br_a4162ba9-96f9-4be0-883f-b331f9bd20d1 1.png";
import threeCore from "../images/freepik_br_664f631b-f4ab-478d-babc-d010187463a8 1.png";
import submersible from "../images/freepik_br_38c274bd-e1a3-4785-bc3c-0e1530f57b34 1.png";
import wiresNews from "../images/wires-news.png";
import wires1News from "../images/wires1-news.png";
import rohs from "../images/rohs.png";
import reach from "../images/reach-compliant.webp";
import pbFree from "../images/pb-lead free.webp";
import isi from "../images/isi.avif";
import iso9001 from "../images/iso-9001.jpg";
import iso14001 from "../images/iso-14001.avif";
import iso45001 from "../images/iso-45001.webp";
import pureCopper from "../images/pure-copper.png";
import sonali_logo from "../images/sonali_logo.png";
import Hyperspeed from "../components/Hyperspeed";
import { hyperspeedPresets } from "../components/hyperspeedPresets";

const Home = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <div className="home-container">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />

        <div className="overlay">
          <h1>
            Sonali <span className="over">wires.</span>
          </h1>
           
          <h3>Stronger trust.</h3>
          <p>
            Safe, reliable, and innovative copper wiring solutions powering homes,
            industries & agriculture.
          </p>

          <div className="button-group">
            <button className="btn btn-red">
              Explore Our Products <span className="arrow">→</span>
            </button>
            <button className="btn btn-blue">
              Find a Dealer <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* WhatsApp Floating Chat */}
        <div className="position-fixed bottom-0 end-0 mb-4 me-4" style={{ zIndex: 1000 }}>
          {showChat && (
            <div className="card shadow-lg mb-3" style={{ width: '300px' }}>
              <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Welcome to our website!</h5>
                <button 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowChat(false)}
                  aria-label="Close chat"
                />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Nice to meet you! If you have any questions about our products,
                  feel free to contact us.
                </p>
                <button className="btn btn-success w-100">
                  Chat with us <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          )}

          <button
            className="btn btn-success rounded-circle p-3 shadow-lg"
            onClick={() => setShowChat(true)}
            aria-label="Chat with us on WhatsApp"
          >
            <i className="fab fa-whatsapp fa-2x"></i>
          </button>
        </div>
      </div>

      {/* About Us Section - Moved outside home-container */}
      <div className="about-container">
        <div className="about-left">
          <h2>About Us</h2>
          <h3>
            Welcome to <br />
            <span className="highlight-text">Sonali Wires LLP</span>
          </h3>

          <div className="who-we-are">
            <h3>WHO <br />WE ARE</h3>
            <a href="#about" className="know-more-btn">
              Know More <span className="arrow">→</span>
            </a>

          </div>
        </div>

        <div className="about-right">
          <p>
            At Sonali Wires LLP, we are committed to delivering safe, BIS-certified
            copper wires and cables designed for every sector — residential,
            industrial, and agricultural. Our advanced manufacturing processes and
            rigorous testing ensure products that last longer, perform better, and
            keep you safe.
          </p>
          <h3><strong>Our Vision</strong></h3>
          <p>
            We are committed to a vision of positioning not only our organization
            but our country India as the number one supplier of Non-Ferrous
            metal products in the world.
          </p>
          <br />
          <br />
          <p>Since 1996</p>
        </div>
      </div>
      {/* Our Applications Section */}
      <div className="applications-section">
        <p className="app-subtitle">Our Applications</p>
        <h2>
          Copper Wiring Solutions for <br />
          <span>Every Sector</span>
        </h2>


        <div className="applications-grid">
          <div className="app-card">
            <div className="icon">🏠</div>
            <p>
              Flame-retardant (FR), Flame Retardant Low Smoke (FRLS), and Halogen Free
              Flame Retardant (HFFR) wires that make homes safer, smarter, and
              long-lasting.
            </p>
            <h3>Residential Wiring</h3>
          </div>

          <div className="app-card">
            <div className="icon">🏭</div>
            <p>
              High-strength, fire-resistant copper cables engineered to handle heavy
              machinery, automation, and factory setups with ease.
            </p>
            <h3>Industrial Cables</h3>
          </div>

          <div className="app-card">
            <div className="icon">🌾</div>
            <p>
              Reliable submersible winding wires and flat cables that power pumps and
              irrigation systems, supporting farmers in their daily operations.
            </p>
            <h3>Agriculture</h3>
          </div>
        </div>
      </div>
      {/* Featured Products Section */}
      <div className="featured-products">
        <p className="featured-subtitle">Featured Products</p>
        <h2>
          Discover <br />
          <span>Our Product Range</span>
        </h2>

        <div className="product-grid">
          <div className="product-card rotate-left">
            <img src={submersible} alt="Submersible Winding Wires" className="first-image" />
            <h3>Submersing Wires (FR, FRLS, HFFR)</h3>
          </div>

          <div className="product-card no-rotate">
            <img src={threeCore} alt="Three Core Flat Cables" className="second-image" />
            <h3>Three Core Flat Cables</h3>
          </div>

          <div className="product-card rotate-right">
            <img src={redBlueYellow} alt="Wiring Wires (FR, FRLS, HFFR)" className="third-image" />
            <h3>Submersible Winding Wires</h3>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="product-btn">Explore Our Products →</button>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="news-updates">
        <div className="news-header">
          <div>
            <p className="news-subtitle">News & Updates</p>
            <h2>
              Latest Updates from <br />
              <span>Sonali Wires</span>
            </h2>
          </div>
          <button className="see-more-btn">See More News →</button>
        </div>

        <div className="news-grid">
          {/* News Card 1 */}
          <div className="news-card">
            <img src={wires1News} alt="Expo Participation" className="news-img first-img" />
            <p className="news-date">July 2, 2025</p>
            <h3>Participation in India Electrical Expo 2025</h3>
            <p className="news-desc">
              Sonali Wires LLP showcased its latest product innovations and
              manufacturing excellence at the India Electrical Expo 2025.
            </p>
            <a href="https://sonaliwires.com/" className="news-link">
              Read More →
            </a>
          </div>

          {/* News Card 2 */}
          <div className="news-card">
            <img src={wiresNews} alt="HFFR Wires Launch" className="news-img second-img" />
            <p className="news-date">July 2, 2025</p>
            <h3>Launch of HFFR housing wires for safer homes</h3>
            <p className="news-desc">
              We are proud to introduce our new range of Halogen Free Flame Retardant
              (HFFR) housing wires. Designed for modern households, these wires emit
              minimal smoke and zero halogen.
            </p>
            <a href="https://sonaliwires.com/" className="news-link">
              Read More →
            </a>
          </div>
        </div>
      </div>

      {/* Certifications & Trust Section */}
      <div className="certifications-section">
        <div className="cert-content">
          <div className="cert-left">
            <p className="cert-subtitle">Certifications & Trust</p>
            <h2>
              Certified for <br />
              <span>Your Safety</span>
            </h2>
          </div>

          <div className="cert-right">
            <p className="cert-desc">
              Every Sonali product goes through rigorous NABL-accredited testing and holds BIS, ISI & ISO certifications —
              ensuring safety, durability, and compliance with global standards.
            </p>
          </div>
        </div>
        <div className="cert-logos">
          <img src={rohs} alt="ROHS Certified" />
          <img src={reach} alt="Reach Compliant" />
          <img src={pbFree} alt="Lead-Free" />
          <img src={isi} alt="ISI Certified" />
          <img src={iso9001} alt="ISO 9001" />
          <img src={iso14001} alt="ISO 14001" />
          <img src={iso45001} alt="ISO 45001" />
          <img src={pureCopper} alt="Pure Copper" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-light py-5">
        {/* Top section */}
        <div className="container mb-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4 mb-4">
                Power Your Future with <br />
                <span className="fw-bold">Sonali Wires</span>
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="lead mb-4">
                Get safe, durable, and certified copper wires & cables for your home,
                industry, or farm.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-danger btn-lg">Contact Us →</button>
                <button className="btn btn-info btn-lg text-white">Find a Dealer →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle links section */}
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4 mb-4">
              <img src={sonali_logo} alt="Sonali Wires Logo" className="mb-3" />
              <p className="mb-4">
                Safe, reliable, and innovative copper wiring solutions powering homes,
                industries & agriculture.
              </p>
              <div className="d-flex gap-3 fs-4">
                <a href="https://wa.me/yourwhatsappnumber" className="text-light"><i className="fab fa-whatsapp"></i></a>
                <a href="https://youtube.com/yourchannel" className="text-light"><i className="fab fa-youtube"></i></a>
                <a href="https://facebook.com/yourpage" className="text-light"><i className="fab fa-facebook"></i></a>
                <a href="https://linkedin.com/company/yourcompany" className="text-light"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="h5 mb-3">Quick Links</h4>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#home" className="nav-link text-light px-0">Home</a></li>
                <li className="nav-item"><a href="#about" className="nav-link text-light px-0">About Us</a></li>
                <li className="nav-item"><a href="#resources" className="nav-link text-light px-0">Resources</a></li>
                <li className="nav-item"><a href="#careers" className="nav-link text-light px-0">Careers</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="h5 mb-3">Our Products</h4>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#housing" className="nav-link text-light px-0">Housing Wires</a></li>
                <li className="nav-item"><a href="#submersible" className="nav-link text-light px-0">Submersible Winding</a></li>
                <li className="nav-item"><a href="#flat" className="nav-link text-light px-0">Three Core Flat Cables</a></li>
                <li className="nav-item"><a href="#industrial" className="nav-link text-light px-0">Industrial Copper Cables</a></li>
              </ul>
            </div>

            <div className="col-lg-3">
              <h4 className="h5 mb-3">Contact Us</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-phone me-2"></i>+91 83444 22211</li>
                <li className="mb-2"><i className="fas fa-envelope me-2"></i>info@sonaligroup.com</li>
                <li>
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Sonali Group, G-6/30, Jain Plaza,<br />
                  Oppanakara Street, Coimbatore,<br />
                  Tamil Nadu - 641001, (India).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="container-fluid border-top border-secondary mt-4">
          <div className="container">
            <div className="row py-3">
              <div className="col text-center">
                © 2024 Sonali Wires LLP. All rights reserved.
                <a href="#privacy" className="text-light ms-2">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
};

export default Home;