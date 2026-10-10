import DashboardCard from "./DashboardCard";

import {

  FaHome,
  FaCheckCircle,
  FaClock,
  FaTimesCircle

} from "react-icons/fa";

function OwnerSummaryCards({

  active,
  pending,
  rejected,
  total

}) {

    <DashboardAnalyticsSection />

  return (

    <div className="row">

      <div className="col-lg-3 mb-4">

        <DashboardCard

          title="Total Properties"

          value={total}

          icon={<FaHome />}

        />

      </div>

      <div className="col-lg-3 mb-4">

        <DashboardCard

          title="Active"

          value={active}

          icon={
            <FaCheckCircle />
          }

          color="#10B981"

        />

      </div>

      <div className="col-lg-3 mb-4">

        <DashboardCard

          title="Pending"

          value={pending}

          icon={
            <FaClock />
          }

          color="#F59E0B"

        />

      </div>

      <div className="col-lg-3 mb-4">

        <DashboardCard

          title="Rejected"

          value={rejected}

          icon={
            <FaTimesCircle />
          }

          color="#EF4444"

        />

      </div>

    </div>

  );
}

export default OwnerSummaryCards;