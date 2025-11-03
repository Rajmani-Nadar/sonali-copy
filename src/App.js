import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Innovation from "./pages/Innovation";
import Careers from "./pages/Careers";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import "./App.css";
import logo from "./images/logo.jpeg";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3">
        <div className="container">
          <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src={logo} alt="Sonali Wires Logo" height="50" />
            <p className="mb-0 fw-bold lh-sm">
              Sonali <br />Wires
            </p>
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
                  `nav-link ${isActive ? 'active text-warning' : ''}`
                }>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-warning' : ''}`
                }>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-warning' : ''}`
                }>
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/innovation" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-warning' : ''}`
                }>
                  Innovation & Quality
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/careers" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-warning' : ''}`
                }>
                  Careers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/media" className={({isActive}) => 
                  `nav-link ${isActive ? 'active text-warning' : ''}`
                }>
                  Media & Resources
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
    </Router>
  );
}

export default App;
