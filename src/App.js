import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Innovation from "./pages/Innovation";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import "./App.css";
import logo from "./images/sonali_logo.png";

import rohs from "./images/rohs.png";
import reach from "./images/reach-compliant.webp";
import pbFree from "./images/pb-lead free.webp";
import isi from "./images/isi.avif";
import iso9001 from "./images/iso-9001.jpg";
import iso14001 from "./images/iso-14001.avif";
import iso45001 from "./images/iso-45001.webp";
import pureCopper from "./images/pure-copper.png";
import sonali_logo from "./images/sonali_logo.png";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={logo} alt="Sonali Wires Logo" height="50" />
          </NavLink>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
            aria-controls="navbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item">
                <NavLink to="/" end className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-light' : ''}`
                }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-light' : ''}`
                }>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-light' : ''}`
                }>
                  Our Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/media" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-light' : ''}`
                }>
                  Resources
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink to="/careers" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-light' : ''}`
                }>
                  Careers
                </NavLink>
              </li>

              {/* Search */}
              <li className="nav-item position-relative">
                {showSearch ? (
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Search..."
                    autoFocus
                    onBlur={() => setShowSearch(false)}
                  />
                ) : (
                  <button
                    className="btn btn-link nav-link"
                    onClick={() => setShowSearch(true)}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                )}
              </li>

              {/* Contact Us Button */}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  <button className="btn btn-danger rounded-pill px-4">
                    Contact Us
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
    </Router>
  );
}

export default App;
