import BookingStatusBadge
from "../../components/booking/BookingStatusBadge";

function OwnerBookingRequests() {

  const requests = [

    {

      _id:"1",

      user:
      "Rahul",

      property:
      "Luxury Villa",

      date:
      "2026-06-20",

      status:
      "pending"

    }

  ];

  return (

    <div className="container py-5">

      <h1>
        Booking Requests
      </h1>

      <table
        className="
        table table-bordered
        "
      >

        <thead>

          <tr>

            <th>
              User
            </th>

            <th>
              Property
            </th>

            <th>
              Date
            </th>

            <th>
              Status
            </th>

            <th>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {
            requests.map(
              request => (

                <tr
                  key={
                    request._id
                  }
                >

                  <td>
                    {
                      request.user
                    }
                  </td>

                  <td>
                    {
                      request.property
                    }
                  </td>

                  <td>
                    {
                      request.date
                    }
                  </td>

                  <td>

                    <BookingStatusBadge
                      status={
                        request.status
                      }
                    />

                  </td>

                  <td>

                    <button
                      className="
                      btn btn-success btn-sm me-2
                      "
                    >
                      Approve
                    </button>

                    <button
                      className="
                      btn btn-danger btn-sm
                      "
                    >
                      Reject
                    </button>

                  </td>

                </tr>

              )
            )
          }

        </tbody>

      </table>

    </div>

  );
}

export default OwnerBookingRequests;