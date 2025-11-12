import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Innovation from "./pages/Innovation";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

import "./App.css";

import rohs from "./images/rohs.png";
import reach from "./images/reach-compliant.webp";
import pbFree from "./images/pb-lead free.webp";
import isi from "./images/isi.png";
import iso9001 from "./images/iso-9001.png";
import iso14001 from "./images/iso-14001.png";
import iso45001 from "./images/iso-45001.png";
import pureCopper from "./images/pure-copper.png";
import sonaliLogo from "./images/Layer1.png";

function AppContent() {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const isResourcesPage = location.pathname === "/resources";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg py-3 ${
          isResourcesPage ? "navbar-light bg-white" : "navbar-dark bg-primary"
        }`}
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
  <div className="logo-container-nav position-relative me-2">
    <img
      src={sonaliLogo}
      alt="Sonali Wires Logo"
      className="sonali-logo-nav"
    />
  </div>

  <div
    className={`logo-text-nav position-relative ${
      isResourcesPage ? "dark-logo" : ""
    }`}
  >
    <h3 className="brand-title-nav">
      SONALI<span className="logo-r-nav">®</span>
    </h3>
    <span>W I R E S</span>
    <p className="brand-subtitle-nav">(A UNIT OF SONALI GROUP)</p>
  </div>
</NavLink>


          {/* Navbar Toggler */}
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

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? isResourcesPage
                          ? "active text-dark"
                          : "active text-light"
                        : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link dropdown-toggle ${
                      isActive
                        ? isResourcesPage
                          ? "active text-dark"
                          : "active text-light"
                        : ""
                    }`
                  }
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/about" className="dropdown-item">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/innovation" className="dropdown-item">
                      Innovation & Quality
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Our Products */}
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? isResourcesPage
                          ? "active text-dark"
                          : "active text-light"
                        : ""
                    }`
                  }
                >
                  Our Products
                </NavLink>
              </li>

              {/* Resources */}
              <li className="nav-item">
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "active text-dark nav-resources-active"
                        : isResourcesPage
                        ? "text-dark"
                        : ""
                    }`
                  }
                >
                  Resources
                </NavLink>
              </li>

              {/* Careers */}
              <li className="nav-item">
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? isResourcesPage
                          ? "active text-dark"
                          : "active text-light"
                        : ""
                    }`
                  }
                >
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
                    className={`btn btn-link nav-link ${
                      isResourcesPage ? "text-dark" : "text-light"
                    }`}
                    onClick={() => setShowSearch(true)}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                )}
              </li>

              {/* Contact Button */}
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  <button
                    className={`btn btn-danger rounded-pill px-4 ${
                      isResourcesPage ? "text-light" : ""
                    }`}
                  >
                    Contact Us
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Certifications Section */}
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
              Every Sonali product goes through rigorous NABL-accredited testing
              and holds BIS, ISI & ISO certifications — ensuring safety,
              durability, and compliance with global standards.
            </p>
          </div>
        </div>

        <div className="cert-logos">
          <img src={rohs} alt="ROHS Certified" />
          <img src={reach} alt="Reach Compliant" />
          <img src={pbFree} alt="Lead-Free" />
          <img src={isi} alt="ISI Certified" className="isi" />
          <img src={iso9001} alt="ISO 9001" />
          <img src={iso14001} alt="ISO 14001" className="iso14001" />
          <img src={iso45001} alt="ISO 45001" />
          <img src={pureCopper} alt="Pure Copper" />
        </div>

        {/* Power Future Section */}
        <div className="container mt-5 mb-2 power-your">
          <div className="row align-items-left">
            <div className="col-lg-6">
              <h2 className="display-4 mb-4">
                Power Your Future with <br />
                <span className="fw-bold foot-subtitle">Sonali Wires</span>
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="lead mb-4">
                Get safe, durable, and certified copper wires & cables for your
                home, industry, or farm.
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

      {/* Footer */}
      <footer className="text-light py-3 footer">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4 mb-4">
              <div className="col-lg-4 mb-4 d-flex align-items-center logo-wrapper position-relative">
                <div className="logo-container position-relative me-2">
                  <img
                    src={sonaliLogo}
                    alt="Sonali Wires Logo"
                    className="sonali-logo"
                  />
                </div>

                <div className="logo-text position-relative">
                  <h3 className="brand-title">
                    SONALI<span className="logo-r">®</span>
                  </h3>
                  <span>W I R E S</span>
                  <p className="brand-subtitle">(A UNIT OF SONALI GROUP)</p>
                </div>
              </div>

              <p className="mb-4">
                Safe, reliable, and innovative copper wiring solutions powering
                homes, industries & agriculture.
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
