import React, { useState } from "react";
import "./Home.css";
import redBlueYellow from "../images/freepik_br_a4162ba9-96f9-4be0-883f-b331f9bd20d1 1.png";
import threeCore from "../images/freepik_br_664f631b-f4ab-478d-babc-d010187463a8 1.png";
import submersible from "../images/freepik_br_38c274bd-e1a3-4785-bc3c-0e1530f57b34 1.png";
import wiresNews from "../images/wires-news.png";
import wires1News from "../images/wires1-news.png";

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
            Sonali <span className="over">wires</span>
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
      <div className="about-container1">
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
    </>
  );
};

export default Home;