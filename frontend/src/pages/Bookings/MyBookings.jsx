import BookingCard
from "../../components/booking/BookingCard";

function MyBookings() {

  const bookings = [

    {

      _id:"1",

      propertyTitle:
      "Luxury Villa",

      date:
      "2026-06-20",

      type:
      "Visit",

      status:
      "Pending"

    }

  ];

  return (

    <div className="container py-5">

      <h1>
        My Bookings
      </h1>

      {
        bookings.map(
          booking => (

            <BookingCard

              key={
                booking._id
              }

              booking={
                booking
              }

            />

          )
        )
      }

    </div>

  );
}

export default MyBookings;
