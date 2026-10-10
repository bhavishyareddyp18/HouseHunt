import DashboardLayout from "../../components/dashboard/DashboardLayout";

import ProfileSummary from "../../components/dashboard/ProfileSummary";

import SavedPropertiesWidget from "../../components/dashboard/SavedPropertiesWidget";

import RecentlyViewedWidget from "../../components/dashboard/RecentlyViewedWidget";

import BookingSummaryWidget from "../../components/dashboard/BookingSummaryWidget";

import RentalRequestWidget from "../../components/dashboard/RentalRequestWidget";

import RecommendedWidget from "../../components/dashboard/RecommendedWidget";

import RecentActivityWidget from "../../components/dashboard/RecentActivityWidget";

import QuickActionsWidget from "../../components/dashboard/QuickActionsWidget";

function UserDashboard() {

  const user = {

    name:"Rahul Kumar",

    email:"rahul@gmail.com",

    role:"User"
  };

  return (

    <DashboardLayout
      title="User Dashboard"
    >

      <div className="row mb-4">

        <div className="col-lg-8">

          <ProfileSummary
            user={user}
          />

        </div>

        <div className="col-lg-4">

          <QuickActionsWidget />

        </div>

      </div>

      <div className="row mb-4">

        <div className="col-lg-4">

          <SavedPropertiesWidget
            properties={[]}
          />

        </div>

        <div className="col-lg-4">

          <RecentlyViewedWidget
            properties={[]}
          />

        </div>

        <div className="col-lg-4">

          <BookingSummaryWidget
            bookings={[]}
          />

        </div>

      </div>

      <div className="row mb-4">

        <div className="col-lg-6">

          <RentalRequestWidget
            requests={[]}
          />

        </div>

        <div className="col-lg-6">

          <RecentActivityWidget

            activities={[

              "Viewed Luxury Villa",

              "Added Apartment to Wishlist",

              "Requested Property Visit"

            ]}

          />

        </div>

      </div>

      <RecommendedWidget
        properties={[]}
      />

    </DashboardLayout>

  );
}

export default UserDashboard;