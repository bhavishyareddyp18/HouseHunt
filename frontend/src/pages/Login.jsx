import { KeyRound } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiErrorMessage } from '../utils/apiError';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@rentnest.com');
  const [password, setPassword] = useState('Password123!');
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(email, password);
      navigate(user.role === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      setError(apiErrorMessage(err, 'Login failed'));
    }
  };

  return (
    <section className="auth-shell">
      <form className="auth-card" onSubmit={submit}>
        <KeyRound size={34} className="text-primary" />
        <h1 className="h3">Welcome back</h1>
        <p className="text-muted">Demo admin is pre-filled. Use maya@example.com for a normal user.</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <label className="form-label">Email</label>
        <input className="form-control mb-3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label className="form-label">Password</label>
        <input className="form-control mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100" type="submit">Login</button>
        <p className="text-center mt-3 mb-0">Need an account? <Link to="/register">Register</Link></p>
      </form>
    </section>
  );
};

export default Login;
