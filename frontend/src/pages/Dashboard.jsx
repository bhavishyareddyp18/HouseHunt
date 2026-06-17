import { Home, PlusCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { currency, date } from '../utils/format';

const initialProperty = {
  title: '',
  description: '',
  location: '',
  address: '',
  price: '',
  type: 'Apartment',
  bedrooms: 2,
  bathrooms: 1,
  imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
  amenities: 'WiFi, Parking, Security'
};

const Dashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState(initialProperty);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  const load = async () => {
    const [bookingRes, propertyRes] = await Promise.all([
      api.get('/bookings'),
      api.get('/properties/mine')
    ]);
    setBookings(bookingRes.data.bookings);
    setProperties(propertyRes.data.properties);
  };

  useEffect(() => {
    load();
  }, []);

  const submitProperty = async (event) => {
    event.preventDefault();
    const payload = {
      ...form,
      price: Number(form.price),
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      amenities: form.amenities.split(',').map((item) => item.trim()).filter(Boolean)
    };

    if (editingId) {
      await api.put(`/properties/${editingId}`, payload);
    } else {
      await api.post('/properties', payload);
    }

    setForm(initialProperty);
    setEditingId(null);
    setMessage(editingId ? 'Property updated and returned to approval queue.' : 'Property submitted for admin approval.');
    load();
  };

  const editProperty = (property) => {
    setEditingId(property._id);
    setForm({
      title: property.title,
      description: property.description,
      location: property.location,
      address: property.address,
      price: property.price,
      type: property.type,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      imageUrl: property.imageUrl,
      amenities: property.amenities.join(', ')
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProperty = async (id) => {
    await api.delete(`/properties/${id}`);
    load();
  };

  const cancelBooking = async (id) => {
    await api.patch(`/bookings/${id}/status`, { status: 'cancelled' });
    load();
  };

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <span className="eyebrow">User dashboard</span>
          <h1>Welcome, {user?.name}</h1>
        </div>
        <div className="dashboard-metric"><Home /> {bookings.length} bookings</div>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="section-panel">
            <h2 className="h4">My Bookings</h2>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr><th>Property</th><th>Move-in</th><th>Status</th><th></th></tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td>
                        <strong>{booking.property?.title}</strong>
                        <div className="text-muted small">{booking.property?.location} · {currency(booking.property?.price || 0)}</div>
                      </td>
                      <td>{date(booking.moveInDate)}</td>
                      <td><span className={`status-pill status-${booking.status}`}>{booking.status}</span></td>
                      <td>
                        {booking.status !== 'cancelled' && (
                          <button className="btn btn-sm btn-outline-danger" onClick={() => cancelBooking(booking._id)}>Cancel</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="section-panel">
            <h2 className="h4 d-flex align-items-center gap-2"><PlusCircle /> {editingId ? 'Edit Property' : 'Submit Property'}</h2>
            {message && <div className="alert alert-success">{message}</div>}
            <form onSubmit={submitProperty}>
              <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              <textarea className="form-control mb-2" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
              <div className="row g-2">
                <div className="col-sm-6"><input className="form-control" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required /></div>
                <div className="col-sm-6"><input className="form-control" placeholder="Monthly price" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required /></div>
              </div>
              <input className="form-control my-2" placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
              <select className="form-select mb-2" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option>Apartment</option><option>Villa</option><option>Studio</option><option>Townhouse</option><option>Penthouse</option>
              </select>
              <div className="row g-2 mb-2">
                <div className="col"><input className="form-control" type="number" min="0" value={form.bedrooms} onChange={(e) => setForm({ ...form, bedrooms: e.target.value })} /></div>
                <div className="col"><input className="form-control" type="number" min="0" value={form.bathrooms} onChange={(e) => setForm({ ...form, bathrooms: e.target.value })} /></div>
              </div>
              <input className="form-control mb-2" placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} required />
              <input className="form-control mb-3" placeholder="Amenities, comma separated" value={form.amenities} onChange={(e) => setForm({ ...form, amenities: e.target.value })} />
              <button className="btn btn-primary w-100">{editingId ? 'Update Listing' : 'Create Listing'}</button>
              {editingId && (
                <button className="btn btn-link w-100 mt-2" type="button" onClick={() => { setEditingId(null); setForm(initialProperty); }}>
                  Cancel edit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="section-panel mt-4">
        <h2 className="h4">My Listings</h2>
        <div className="row g-3">
          {properties.map((property) => (
            <div className="col-md-4" key={property._id}>
              <div className="mini-listing">
                <strong>{property.title}</strong>
                <span>{property.location} · {currency(property.price)}</span>
                <span className={`status-pill status-${property.status}`}>{property.status}</span>
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-sm btn-outline-primary" onClick={() => editProperty(property)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteProperty(property._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          {!properties.length && <p className="text-muted">Submitted listings appear here after approval.</p>}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
