import DashboardCard from "./DashboardCard";

import {
  FaUsers,
  FaHome,
  FaCalendarCheck,
  FaUserTie
} from "react-icons/fa";

function AdminSummaryCards({

  totalUsers,
  totalProperties,
  totalBookings,
  totalOwners

}) {

  return (

    <div className="row">

      <div className="col-lg-3 mb-4">

        <DashboardCard
          title="Users"
          value={totalUsers}
          icon={<FaUsers />}
          color="#2563EB"
        />

      </div>

      <div className="col-lg-3 mb-4">

        <DashboardCard
          title="Properties"
          value={totalProperties}
          icon={<FaHome />}
          color="#10B981"
        />

      </div>

      <div className="col-lg-3 mb-4">

        <DashboardCard
          title="Bookings"
          value={totalBookings}
          icon={<FaCalendarCheck />}
          color="#F59E0B"
        />

      </div>

      <div className="col-lg-3 mb-4">

        <DashboardCard
          title="Owners"
          value={totalOwners}
          icon={<FaUserTie />}
          color="#EF4444"
        />

      </div>

    </div>

  );
}

export default AdminSummaryCards;