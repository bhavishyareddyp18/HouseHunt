import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import AddProperty from "../pages/OwnerProperties/AddProperty";
import EditProperty from "../pages/OwnerProperties/EditProperty";
import MyProperties from "../pages/OwnerProperties/MyProperties";
import Wishlist from "../pages/Wishlist/Wishlist";
import Compare from "../pages/Compare/Compare";
import MyBookings from "../pages/Bookings/MyBookings";
import BookingHistory from "../pages/Bookings/BookingHistory";
import OwnerBookingRequests from "../pages/Bookings/OwnerBookingRequests";
import PropertyApprovals from "../pages/Admin/PropertyApprovals";
import UserDashboard from "../pages/dashboards/UserDashboard/UserDashboard";
import OwnerDashboard from "../pages/dashboards/OwnerDashboard/OwnerDashboard";
import AdminDashboard from "../pages/dashboards/AdminDashboard/AdminDashboard";
import ChatPage from "../components/chat/ChatPage";

function PlaceholderPage({ title }) {
  return (
    <div className="container py-5">
      <h1>{title}</h1>
      <p className="text-muted">This page is not implemented yet.</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/owner/properties" element={<MyProperties />} />
      <Route path="/owner/add-property" element={<AddProperty />} />
      <Route path="/owner/edit-property/:id" element={<EditProperty />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/booking-history" element={<BookingHistory />} />
      <Route path="/owner-bookings" element={<OwnerBookingRequests />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/owner-dashboard" element={<OwnerDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/admin/property-approvals" element={<PropertyApprovals />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/notifications" element={<PlaceholderPage title="Notifications" />} />
      <Route path="/map" element={<PlaceholderPage title="Property Map" />} />
      <Route path="/agreements" element={<PlaceholderPage title="Agreements" />} />
      <Route path="/agents" element={<PlaceholderPage title="Agents" />} />
      <Route path="/agents/:id" element={<PlaceholderPage title="Agent Profile" />} />
      <Route path="/agent-dashboard" element={<PlaceholderPage title="Agent Dashboard" />} />
      <Route
        path="*"
        element={
          <div className="container text-center py-5">
            <h1>404</h1>
            <h3>Page Not Found</h3>
          </div>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
