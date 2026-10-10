import { Check, Clock, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Checklist from '../components/Checklist';
import api from '../services/api';
import { currency, date } from '../utils/format';

const AdminDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({ total: 0, approved: 0, pending: 0, rejected: 0 });

  const load = async () => {
    const [propertyRes, bookingRes, statsRes] = await Promise.all([
      api.get('/properties', { params: { status: '' } }),
      api.get('/bookings'),
      api.get('/properties/admin/stats')
    ]);
    setProperties(propertyRes.data.properties);
    setBookings(bookingRes.data.bookings);
    setStats(statsRes.data);
  };

  useEffect(() => {
    load();
  }, []);

  const setPropertyStatus = async (id, status) => {
    await api.patch(`/properties/${id}/status`, { status });
    load();
  };

  const setBookingStatus = async (id, status) => {
    await api.patch(`/bookings/${id}/status`, { status });
    load();
  };

  return (
    <section className="container py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <span className="eyebrow">Admin dashboard</span>
          <h1>Approvals and rental activity</h1>
        </div>
        <div className="dashboard-metric"><ShieldCheck /> RBAC active</div>
      </div>

      <div className="metric-grid mb-4">
        <div><span>Total</span><strong>{stats.total}</strong></div>
        <div><span>Approved</span><strong>{stats.approved}</strong></div>
        <div><span>Pending</span><strong>{stats.pending}</strong></div>
        <div><span>Rejected</span><strong>{stats.rejected}</strong></div>
      </div>

      <div className="section-panel mb-4">
        <h2 className="h4 d-flex align-items-center gap-2"><Clock /> Property Approval Panel</h2>
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr><th>Listing</th><th>Owner</th><th>Price</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property._id}>
                  <td><strong>{property.title}</strong><div className="text-muted small">{property.location} · {property.type}</div></td>
                  <td>{property.owner?.name || 'Unknown'}</td>
                  <td>{currency(property.price)}</td>
                  <td><span className={`status-pill status-${property.status}`}>{property.status}</span></td>
                  <td>
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-outline-success" onClick={() => setPropertyStatus(property._id, 'approved')}><Check size={15} /></button>
                      <button className="btn btn-outline-danger" onClick={() => setPropertyStatus(property._id, 'rejected')}><X size={15} /></button>
                      <button className="btn btn-outline-secondary" onClick={() => setPropertyStatus(property._id, 'pending')}>Pending</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="section-panel">
            <h2 className="h4">Booking Activity</h2>
            <div className="table-responsive">
              <table className="table align-middle">
                <thead><tr><th>User</th><th>Property</th><th>Move-in</th><th>Status</th><th></th></tr></thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td>{booking.user?.name}</td>
                      <td>{booking.property?.title}</td>
                      <td>{date(booking.moveInDate)}</td>
                      <td><span className={`status-pill status-${booking.status}`}>{booking.status}</span></td>
                      <td>
                        <select className="form-select form-select-sm" value={booking.status} onChange={(e) => setBookingStatus(booking._id, e.target.value)}>
                          <option>pending</option><option>confirmed</option><option>cancelled</option>
                        </select>
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
            <h2 className="h4">Project Review Checklist</h2>
            <Checklist compact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
