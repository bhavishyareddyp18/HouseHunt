import React, { useState } from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function HeroSection() {
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city.trim()) params.append("city", city.trim());
    if (propertyType && propertyType !== "Property Type") {
      params.append("type", propertyType.toLowerCase());
    }
    
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="hero-title"
              >
                Find Your Dream Home With HouseHunt
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="hero-text"
              >
                Browse thousands of verified rental homes, apartments, villas, and commercial spaces.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Link to="/properties" className="btn hero-btn">
                  Explore Properties
                </Link>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="search-card"
              >
                <h3>Quick Search</h3>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control mb-3"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />

                  <select
                    className="form-select mb-3"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="villa">Villa</option>
                    <option value="commercial">Commercial</option>
                  </select>

                  <button type="submit" className="btn search-btn w-100">
                    Search
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;