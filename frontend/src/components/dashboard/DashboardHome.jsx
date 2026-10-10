import DashboardLayout
from "../../components/dashboard/DashboardLayout";

import StatisticsGrid from "../../components/dashboard/StatisticsGrid";

import DashboardCard from "../../components/dashboard/DashboardCard";

import {
  FaHome,
  FaBookmark,
  FaCalendarAlt,
  FaHeart
} from "react-icons/fa";

function DashboardHome() {

  return (

    <DashboardLayout
      title="Dashboard"
    >

      <StatisticsGrid>

        <div
          className="
          col-lg-3
          col-md-6
          mb-4
          "
        >

          <DashboardCard

            title="Properties"

            value="25"

            icon={<FaHome />}

          />

        </div>

        <div
          className="
          col-lg-3
          col-md-6
          mb-4
          "
        >

          <DashboardCard

            title="Bookings"

            value="12"

            icon={
              <FaCalendarAlt />
            }

            color="#10B981"

          />

        </div>

        <div
          className="
          col-lg-3
          col-md-6
          mb-4
          "
        >

          <DashboardCard

            title="Wishlist"

            value="8"

            icon={
              <FaHeart />
            }

            color="#EF4444"

          />

        </div>

        <div
          className="
          col-lg-3
          col-md-6
          mb-4
          "
        >

          <DashboardCard

            title="Saved"

            value="15"

            icon={
              <FaBookmark />
            }

            color="#F59E0B"

          />

        </div>

      </StatisticsGrid>

    </DashboardLayout>

  );
}

export default DashboardHome;