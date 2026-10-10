import "./PropertyCard.css";

import {
  FaBed,
  FaBath,
  FaMapMarkerAlt,
  FaHeart
} from "react-icons/fa";

import { Link } from "react-router-dom";

function PropertyCard({

  property

}) {

  return (

    <div className="property-card">

      <div className="property-image-wrapper">

        <img
          src={
            property.image
          }
          alt={
            property.title
          }
          className="property-image"
        />

        <button
          className="wishlist-btn"
        >
          <FaHeart />
        </button>

      </div>

      <div className="property-content">

        <h4>
          {property.title}
        </h4>

        <p className="property-location">

          <FaMapMarkerAlt />

          {" "}

          {property.city}

        </p>

        <h5 className="property-price">

          ₹{property.rent}

          /month

        </h5>

        <div className="property-info">

          <span>

            <FaBed />

            {" "}

            {property.bedrooms}

          </span>

          <span>

            <FaBath />

            {" "}

            {property.bathrooms}

          </span>

        </div>

        <Link
          to={`/property/${property._id}`}
          className="
          btn
          btn-primary
          w-100
          mt-3
          "
        >
          View Details
        </Link>

      </div>

    </div>

  );
}

export default PropertyCard;