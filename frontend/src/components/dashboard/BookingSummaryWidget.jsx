function BookingSummaryWidget({

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

  return (

    <div className="card p-4">

      <h5>
        Booking Summary
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
        Total:
        {" "}
        {bookings.length}
      </p>

    </div>

  );
}

export default BookingSummaryWidget;