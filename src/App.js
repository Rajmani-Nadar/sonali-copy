import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Innovation from "./pages/Innovation";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

import "./App.css";
// import logo from "./images/sonali_logo.png";

import rohs from "./images/rohs.png";
import reach from "./images/reach-compliant.webp";
import pbFree from "./images/pb-lead free.webp";
import isi from "./images/isi.avif";
import iso9001 from "./images/iso-9001.jpg";
import iso14001 from "./images/iso-14001.avif";
import iso45001 from "./images/iso-45001.webp";
import pureCopper from "./images/pure-copper.png";
import sonaliLogo from "./images/Layer1.png";


function AppContent() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-primary navbar-dark py-3"
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            {/* Logo Image with small R inside */}
            <div className="logo-container-nav position-relative me-2">
              <img
                src={sonaliLogo}
                alt="Sonali Wires Logo"
                className="sonali-logo-nav"
              />
            </div>

            {/* Logo Text */}
            <div className="logo-text-nav position-relative">
              <h3 className="brand-title-nav">
                SONALI<span className="logo-r-nav">®</span>
              </h3>
              <span>W I R E S</span>
              <p className="brand-subtitle-nav">(A UNIT OF SONALI GROUP)</p>
            </div>
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
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `nav-link ${isActive ? "active text-light" : ""}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? "active text-light" : ""}`}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) => `nav-link ${isActive ? "active text-light" : ""}`}
                >
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/media"
                  className={({ isActive }) => `nav-link ${isActive ? "active text-light" : ""}`}
                >
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/careers"
                  className={({ isActive }) => `nav-link ${isActive ? "active text-light" : ""}`}
                >
                  Careers
                </NavLink>
              </li>

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
                  <button className="btn btn-link nav-link" onClick={() => setShowSearch(true)}>
                    <i className="fas fa-search"></i>
                  </button>
                )}
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  <button className="btn btn-danger rounded-pill px-4">Contact Us</button>
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
        {/* Top section */}
        <div className="container mt-4 mb-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4 mb-4">
                Power Your Future with <br />
                <span className="fw-bold foot-subtitle">Sonali Wires</span>
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="lead mb-4">
                Get safe, durable, and certified copper wires & cables for your home,
                industry, or farm.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-danger btn-lg">Contact Us →</button>
                <button className="btn btn-info btn-lg text-white">
                  Find a Dealer →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer Section ===== */}
      <footer className="text-light py-3 footer">
        {/* Middle section */}
        <div className="container py-4">
          <div className="row g-4">
            {/* Logo + Description */}
            <div className="col-lg-4 mb-4">
              <div className="col-lg-4 mb-4 d-flex align-items-center logo-wrapper position-relative">
                {/* Logo Image with small R inside */}
                <div className="logo-container position-relative me-2">
                  <img
                    src={sonaliLogo}
                    alt="Sonali Wires Logo"
                    className="sonali-logo"
                  />
                </div>

                {/* Logo Text */}
                <div className="logo-text position-relative">
                  <h3 className="brand-title">
                    SONALI<span className="logo-r">®</span>
                  </h3>
                  <span>W I R E S</span>
                  <p className="brand-subtitle">(A UNIT OF SONALI GROUP)</p>
                </div>
              </div>
              <p className="mb-4">
                Safe, reliable, and innovative copper wiring solutions powering homes,
                industries & agriculture.
              </p>
              <div className="d-flex gap-3 fs-4 icon">
                <a href="https://wa.me/yourwhatsappnumber" className="text-light">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://youtube.com/yourchannel" className="text-light">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://facebook.com/yourpage" className="text-light">
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://linkedin.com/company/yourcompany"
                  className="text-light"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h4 className="h5 mb-3">Quick Links</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#home" className="nav-link text-light px-0">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link text-light px-0">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="#resources" className="nav-link text-light px-0">Resources</a>
                </li>
                <li className="nav-item">
                  <a href="#careers" className="nav-link text-light px-0">Careers</a>
                </li>
              </ul>
            </div>

            {/* Our Products */}
            <div className="col-lg-3 col-md-6">
              <h4 className="h5 mb-3">Our Products</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#housing" className="nav-link text-light px-0">Housing Wires</a>
                </li>
                <li className="nav-item">
                  <a href="#submersible" className="nav-link text-light px-0">Submersible Winding</a>
                </li>
                <li className="nav-item">
                  <a href="#flat" className="nav-link text-light px-0">Three Core Flat Cables</a>
                </li>
                <li className="nav-item">
                  <a href="#industrial" className="nav-link text-light px-0">Industrial Copper Cables</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3">
              <h4 className="h5 mb-3">Contact Us</h4>
              <ul className="list-unstyled footer-contact-list">
                <li>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+918344422211">+91 83444 22211</a>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@sonaligroup.com">info@sonaligroup.com</a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    Sonali Group, G-6/30, Jain Plaza,<br />
                    Oppanakara Street, Coimbatore,<br />
                    Tamil Nadu - 641001, (India).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
