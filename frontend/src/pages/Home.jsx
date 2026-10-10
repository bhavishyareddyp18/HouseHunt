import { Search, SlidersHorizontal } from 'lucide-react';
import { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import api from '../services/api';
import { apiErrorMessage } from '../utils/apiError';

const defaultFilters = {
  location: '',
  type: '',
  minPrice: '',
  maxPrice: ''
};

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProperties = async (params = filters) => {
    try {
      setLoading(true);
      const { data } = await api.get('/properties', { params });
      setProperties(data.properties);
      setError('');
    } catch (err) {
      setError(apiErrorMessage(err, 'Unable to load properties'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties(defaultFilters);
  }, []);

  const submit = (event) => {
    event.preventDefault();
    loadProperties(filters);
  };

  return (
    <>
      <section className="hero-band">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="eyebrow">Demo mode ready</span>
              <h1>RentNest House Rent Management</h1>
              <p>
                Browse approved homes, filter by budget and city, book visits, and manage rental activity
                with seeded data that looks like a real working product from the first run.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="activity-panel">
                <strong>Live Demo Snapshot</strong>
                <div className="stat-row"><span>Approved Listings</span><b>20+</b></div>
                <div className="stat-row"><span>Sample Bookings</span><b>12</b></div>
                <div className="stat-row"><span>Admin Approval Queue</span><b>Pending</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <form className="filter-bar" onSubmit={submit}>
          <div className="filter-title"><SlidersHorizontal size={20} /> Filters</div>
          <input className="form-control" placeholder="Location" value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} />
          <select className="form-select" value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
            <option value="">Any type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Studio</option>
            <option>Townhouse</option>
            <option>Penthouse</option>
          </select>
          <input className="form-control" type="number" placeholder="Min price" value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
          <input className="form-control" type="number" placeholder="Max price" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
          <button className="btn btn-primary d-flex align-items-center justify-content-center gap-2" type="submit">
            <Search size={18} /> Search
          </button>
        </form>

        {error && <div className="alert alert-danger mt-4">{error}</div>}
        {loading ? (
          <div className="text-center py-5">Loading listings...</div>
        ) : (
          <div className="row g-4 mt-1">
            {properties.map((property) => (
              <div className="col-md-6 col-xl-4" key={property._id}>
                <PropertyCard property={property} />
              </div>
            ))}
            {!properties.length && <div className="alert alert-info">No approved properties match these filters.</div>}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
