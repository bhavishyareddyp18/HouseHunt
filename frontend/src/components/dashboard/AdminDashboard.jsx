import DashboardLayout from "../../components/dashboard/DashboardLayout";

import AdminSummaryCards from "../../components/dashboard/AdminSummaryCards";

import UserStatisticsWidget from "../../components/dashboard/UserStatisticsWidget";

import PropertyStatisticsWidget from "../../components/dashboard/PropertyStatisticsWidget";

import BookingStatisticsWidget from "../../components/dashboard/BookingStatisticsWidget";

import DashboardAnalyticsSection from "../../components/dashboard/DashboardAnalyticsSection";

import ApprovalStatisticsWidget from "../../components/dashboard/ApprovalStatisticsWidget";

import RecentUsersWidget from "../../components/dashboard/RecentUsersWidget";

import RecentPropertiesWidget from "../../components/dashboard/RecentPropertiesWidget";

function AdminDashboard() {

  const recentUsers = [

    {
      _id:"1",
      name:"Rahul",
      role:"User"
    },

    {
      _id:"2",
      name:"Priya",
      role:"Owner"
    }

  ];

  const recentProperties = [

    {
      _id:"1",
      title:"Luxury Villa",
      status:"Pending"
    },

    {
      _id:"2",
      title:"Modern Apartment",
      status:"Approved"
    }

  ];

  return (

    
    <DashboardLayout
      title="Admin Dashboard"
    >

      <AdminSummaryCards

        totalUsers={120}

        totalProperties={85}

        totalBookings={230}

        totalOwners={32}

      />

      <div className="row mb-4">

        <div className="col-lg-6">

          <UserStatisticsWidget

            totalUsers={120}

            totalOwners={32}

            totalAgents={8}

          />

        </div>

        <div className="col-lg-6">

          <ApprovalStatisticsWidget

            pendingApprovals={14}

            approvedToday={6}

            rejectedToday={2}

          />

        </div>

      </div>

      <div className="row mb-4">

        <div className="col-lg-6">

          <PropertyStatisticsWidget

            total={85}

            approved={60}

            pending={14}

            rejected={11}

          />

        </div>

        <div className="col-lg-6">

          <BookingStatisticsWidget

            total={230}

            approved={170}

            pending={42}

            rejected={18}

          />

        </div>

      </div>

      <div className="row">

        <div className="col-lg-6">

          <RecentUsersWidget

            users={recentUsers}

          />

        </div>

        <div className="col-lg-6">

          <RecentPropertiesWidget

            properties={
              recentProperties
            }

          />

        </div>

      </div>

    </DashboardLayout>

    
  );
}

export default AdminDashboard;