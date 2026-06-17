import { Building2, ClipboardCheck, LayoutDashboard, LogOut, ShieldCheck } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top app-nav">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/">
          <Building2 size={24} /> RentNest
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink className="nav-link" to="/">Listings</NavLink>
            <NavLink className="nav-link" to="/review"><ClipboardCheck size={17} /> Review</NavLink>
            {isAuthenticated && (
              <NavLink className="nav-link" to="/dashboard"><LayoutDashboard size={17} /> Dashboard</NavLink>
            )}
            {user?.role === 'admin' && (
              <NavLink className="nav-link" to="/admin"><ShieldCheck size={17} /> Admin</NavLink>
            )}
            {!isAuthenticated ? (
              <>
                <NavLink className="btn btn-sm btn-outline-light" to="/login">Login</NavLink>
                <NavLink className="btn btn-sm btn-warning" to="/register">Register</NavLink>
              </>
            ) : (
              <button className="btn btn-sm btn-outline-light d-flex align-items-center gap-1" onClick={handleLogout}>
                <LogOut size={16} /> Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
