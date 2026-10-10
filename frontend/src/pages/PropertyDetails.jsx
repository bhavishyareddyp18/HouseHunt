import { CalendarCheck, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { apiErrorMessage } from '../utils/apiError';
import { currency } from '../utils/format';

const PropertyDetails = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [property, setProperty] = useState(null);
  const [booking, setBooking] = useState({ moveInDate: '', durationMonths: 6, notes: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/properties/${id}`).then(({ data }) => setProperty(data.property)).catch((err) => setError(apiErrorMessage(err, 'Unable to load property')));
  }, [id]);

  const submitBooking = async (event) => {
    event.preventDefault();
    try {
      await api.post('/bookings', { propertyId: id, ...booking });
      setMessage('Booking request submitted successfully.');
      setError('');
    } catch (err) {
      setError(apiErrorMessage(err, 'Unable to create booking'));
    }
  };

  if (error && !property) return <div className="container py-5"><div className="alert alert-danger">{error}</div></div>;
  if (!property) return <div className="container py-5">Loading property...</div>;

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-lg-7">
          <img className="detail-image" src={property.imageUrl} alt={property.title} />
          <div className="mt-4">
            <span className={`status-pill status-${property.status}`}>{property.status}</span>
            <h1 className="mt-3">{property.title}</h1>
            <p className="lead text-muted"><MapPin size={20} /> {property.address}</p>
            <p>{property.description}</p>
            <div className="amenity-list">
              {property.amenities.map((amenity) => <span key={amenity}>{amenity}</span>)}
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="side-panel">
            <h2 className="h4">{currency(property.price)} / month</h2>
            <p className="text-muted">{property.type} · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms</p>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            {isAuthenticated ? (
              <form onSubmit={submitBooking}>
                <label className="form-label">Move-in date</label>
                <input className="form-control mb-3" type="date" value={booking.moveInDate} onChange={(e) => setBooking({ ...booking, moveInDate: e.target.value })} required />
                <label className="form-label">Duration in months</label>
                <input className="form-control mb-3" type="number" min="1" value={booking.durationMonths} onChange={(e) => setBooking({ ...booking, durationMonths: e.target.value })} required />
                <label className="form-label">Notes</label>
                <textarea className="form-control mb-3" rows="3" value={booking.notes} onChange={(e) => setBooking({ ...booking, notes: e.target.value })} />
                <button className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2">
                  <CalendarCheck size={18} /> Book Property
                </button>
              </form>
            ) : (
              <Link className="btn btn-primary w-100" to="/login">Login to Book</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
