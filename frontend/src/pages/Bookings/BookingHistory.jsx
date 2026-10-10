import BookingCard
from "../../components/booking/BookingCard";

function BookingHistory() {

  const bookings = [];

  return (

    <div className="container py-5">

      <h1>
        Booking History
      </h1>

      {
        bookings.length === 0

        ?

        <p>
          No bookings yet.
        </p>

        :

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

export default BookingHistory;