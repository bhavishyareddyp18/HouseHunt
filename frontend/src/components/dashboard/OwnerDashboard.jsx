import DashboardLayout from "../../components/dashboard/DashboardLayout";

import OwnerSummaryCards from "../../components/dashboard/OwnerSummaryCards";

import RevenueCard from "../../components/dashboard/RevenueCard";

import PropertyStatusWidget from "../../components/dashboard/PropertyStatusWidget";

import BookingAnalyticsWidget from "../../components/dashboard/BookingAnalyticsWidget";

import PropertyAnalyticsWidget from "../../components/dashboard/PropertyAnalyticsWidget";

import DashboardAnalyticsSection from "../../components/dashboard/DashboardAnalyticsSection";

import MostViewedPropertiesWidget from "../../components/dashboard/MostViewedPropertiesWidget";

function OwnerDashboard() {

  const properties = [

    {

      _id:"1",

      title:"Luxury Villa",

      views:250

    },

    {

      _id:"2",

      title:"City Apartment",

      views:190

    },

    {

      _id:"3",

      title:"Premium House",

      views:145

    }

  ];

  const bookings = [

    {
      status:"approved"
    },

    {
      status:"approved"
    },

    {
      status:"pending"
    },

    {
      status:"rejected"
    }

  ];
  
  <DashboardAnalyticsSection />

  return (

    <DashboardLayout
      title="Owner Dashboard"
    >

      <OwnerSummaryCards

        total={25}

        active={18}

        pending={5}

        rejected={2}

      />

      <div className="row mb-4">

        <div className="col-lg-4">

          <RevenueCard
            revenue={850000}
          />

        </div>

        <div className="col-lg-4">

          <PropertyStatusWidget

            active={18}

            pending={5}

            rejected={2}

          />

        </div>

        <div className="col-lg-4">

          <BookingAnalyticsWidget

            bookings={bookings}

          />

        </div>

      </div>

      <div className="row">

        <div className="col-lg-6">

          <PropertyAnalyticsWidget

            properties={properties}

          />

        </div>

        <div className="col-lg-6">

          <MostViewedPropertiesWidget

            properties={properties}

          />

        </div>

      </div>

    </DashboardLayout>

  );
}

export default OwnerDashboard;