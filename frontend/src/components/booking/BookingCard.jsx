import BookingStatusBadge
from "./BookingStatusBadge";

function BookingCard({

  booking

}) {

  return (

    <div
      className="
      card mb-3
      "
    >

      <div
        className="
        card-body
        "
      >

        <h5>

          {
            booking.propertyTitle
          }

        </h5>

        <p>

          Date:

          {" "}

          {
            booking.date
          }

        </p>

        <p>

          Type:

          {" "}

          {
            booking.type
          }

        </p>

        <BookingStatusBadge
          status={
            booking.status
          }
        />

      </div>

    </div>

  );
}

export default BookingCard;