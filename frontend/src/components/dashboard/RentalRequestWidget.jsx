function RentalRequestWidget({

  requests = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Rental Requests
      </h5>

      <hr />

      {
        requests.length === 0

        ?

        <p>
          No rental requests.
        </p>

        :

        requests.map(
          request => (

            <div
              key={
                request._id
              }
              className="
              mb-2
              "
            >

              {request.property}

              {" - "}

              {request.status}

            </div>

          )
        )
      }

    </div>

  );
}

export default RentalRequestWidget;