import { UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiErrorMessage } from '../utils/apiError';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    try {
      await register(form);
      navigate('/dashboard');
    } catch (err) {
      setError(apiErrorMessage(err, 'Registration failed'));
    }
  };

  return (
    <section className="auth-shell">
      <form className="auth-card" onSubmit={submit}>
        <UserPlus size={34} className="text-primary" />
        <h1 className="h3">Create renter account</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <label className="form-label">Name</label>
        <input className="form-control mb-3" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <label className="form-label">Email</label>
        <input className="form-control mb-3" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <label className="form-label">Phone</label>
        <input className="form-control mb-3" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <label className="form-label">Password</label>
        <input className="form-control mb-3" type="password" minLength="6" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button className="btn btn-primary w-100" type="submit">Register</button>
        <p className="text-center mt-3 mb-0">Already registered? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
};

export default Register;
