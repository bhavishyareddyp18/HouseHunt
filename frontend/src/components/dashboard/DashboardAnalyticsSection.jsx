import RevenueChart from "./charts/RevenueChart";
import BookingTrendChart from "./charts/BookingTrendChart";
import PropertyStatusChart from "./charts/PropertyStatusChart";
import UserGrowthChart from "./charts/UserGrowthChart";
import LocationAnalyticsChart from "./charts/LocationAnalyticsChart";

function DashboardAnalyticsSection() {

  const revenueData = [

    {
      month:"Jan",
      revenue:40000
    },

    {
      month:"Feb",
      revenue:55000
    },

    {
      month:"Mar",
      revenue:65000
    },

    {
      month:"Apr",
      revenue:90000
    }

  ];

  const bookingData = [

    {
      month:"Jan",
      bookings:25
    },

    {
      month:"Feb",
      bookings:40
    },

    {
      month:"Mar",
      bookings:52
    },

    {
      month:"Apr",
      bookings:70
    }

  ];

  const propertyData = [

    {
      name:"Approved",
      value:60
    },

    {
      name:"Pending",
      value:20
    },

    {
      name:"Rejected",
      value:10
    }

  ];

  const userData = [

    {
      month:"Jan",
      users:100
    },

    {
      month:"Feb",
      users:180
    },

    {
      month:"Mar",
      users:280
    },

    {
      month:"Apr",
      users:400
    }

  ];

  const locationData = [

    {
      city:"Hyderabad",
      views:1500
    },

    {
      city:"Bangalore",
      views:1200
    },

    {
      city:"Chennai",
      views:800
    }

  ];

  return (

    <>

      <div className="row mb-4">

        <div className="col-lg-6">

          <RevenueChart
            data={revenueData}
          />

        </div>

        <div className="col-lg-6">

          <BookingTrendChart
            data={bookingData}
          />

        </div>

      </div>

      <div className="row mb-4">

        <div className="col-lg-4">

          <PropertyStatusChart
            data={propertyData}
          />

        </div>

        <div className="col-lg-4">

          <UserGrowthChart
            data={userData}
          />

        </div>

        <div className="col-lg-4">

          <LocationAnalyticsChart
            data={locationData}
          />

        </div>

      </div>

    </>

  );
}

export default DashboardAnalyticsSection;