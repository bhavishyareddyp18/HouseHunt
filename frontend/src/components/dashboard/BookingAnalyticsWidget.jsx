function BookingAnalyticsWidget({

  bookings = []

}) {

  const pending =

    bookings.filter(
      booking =>
      booking.status ===
      "pending"
    ).length;

  const approved =

    bookings.filter(
      booking =>
      booking.status ===
      "approved"
    ).length;

  const rejected =

    bookings.filter(
      booking =>
      booking.status ===
      "rejected"
    ).length;

  return (

    <div className="card p-4">

      <h5>
        Booking Analytics
      </h5>

      <hr />

      <p>
        Pending:
        {" "}
        {pending}
      </p>

      <p>
        Approved:
        {" "}
        {approved}
      </p>

      <p>
        Rejected:
        {" "}
        {rejected}
      </p>

    </div>

  );
}

export default BookingAnalyticsWidget;