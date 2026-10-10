import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import "./Properties.css";

function Properties() {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const city = searchParams.get("city") || "";
  const type = searchParams.get("type") || "";

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      try {
        const query = new URLSearchParams();
        if (city) query.append("city", city);
        if (type) query.append("type", type);

        const res = await fetch(`http://localhost:5001/api/properties?${query.toString()}`);
        if (!res.ok) throw new Error("Failed to load listings");

        const data = await res.json();
        setProperties(Array.isArray(data) ? data : data.data || []);
      } catch (err) {
        console.error(err);
        setError("Unable to connect to property API or no properties found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [city, type]);

  return (
    <div className="container py-5" style={{ minHeight: "80vh" }}>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div>
          <h2 className="fw-bold">Available Properties</h2>
          {(city || type) && (
            <p className="text-muted mb-0">
              Filtered by: {city && <span className="badge bg-secondary me-2">City: {city}</span>}
              {type && <span className="badge bg-info text-dark">Type: {type}</span>}
            </p>
          )}
        </div>
        <Link to="/" className="btn btn-outline-primary">
          ← Back to Search
        </Link>
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2 text-muted">Loading properties...</p>
        </div>
      )}

      {error && !loading && (
        <div className="alert alert-warning text-center" role="alert">
          {error}
        </div>
      )}

      {!loading && properties.length === 0 && !error && (
        <div className="text-center py-5">
          <h4>No properties found matching your search.</h4>
          <p className="text-muted">Try adjusting your filters or browse all listings.</p>
          <Link to="/properties" className="btn btn-primary mt-2">
            Clear Filters
          </Link>
        </div>
      )}

      {!loading && properties.length > 0 && (
        <div className="row g-4">
          {properties.map((item) => (
            <div key={item._id || item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <img
                  src={
                    item.images?.[0] ||
                    item.image ||
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600"
                  }
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-primary text-uppercase">{item.type || "Rental"}</span>
                    <h5 className="text-success mb-0 fw-bold">
                      ₹{item.price ? Number(item.price).toLocaleString("en-IN") : "N/A"}/mo
                    </h5>
                  </div>
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                  <p className="card-text text-muted small flex-grow-1">
                    📍 {item.location || item.city}
                  </p>
                  <button className="btn btn-dark w-100 mt-3">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Properties;
