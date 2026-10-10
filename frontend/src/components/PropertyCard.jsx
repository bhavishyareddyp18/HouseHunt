import { Bath, BedDouble, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { currency } from '../utils/format';

const PropertyCard = ({ property }) => (
  <article className="property-card h-100">
    <div className="property-image" style={{ backgroundImage: `url(${property.imageUrl})` }}>
      <span className={`status-pill status-${property.status}`}>{property.status}</span>
    </div>
    <div className="p-3">
      <div className="d-flex justify-content-between gap-2">
        <h3 className="h5 mb-1">{property.title}</h3>
        <strong className="text-success">{currency(property.price)}</strong>
      </div>
      <p className="text-muted d-flex align-items-center gap-1 mb-2">
        <MapPin size={16} /> {property.location}
      </p>
      <div className="d-flex gap-3 small text-secondary mb-3">
        <span><BedDouble size={16} /> {property.bedrooms} beds</span>
        <span><Bath size={16} /> {property.bathrooms} baths</span>
        <span>{property.type}</span>
      </div>
      <Link className="btn btn-outline-primary w-100" to={`/properties/${property._id}`}>View Details</Link>
    </div>
  </article>
);

export default PropertyCard;
