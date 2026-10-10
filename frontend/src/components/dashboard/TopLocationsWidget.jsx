function TopLocationsWidget({

  locations = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Top Locations
      </h5>

      <hr />

      {

        locations.map(
          (
            location,
            index
          ) => (

            <div
              key={index}
              className="
              mb-2
              "
            >

              {index + 1}

              {". "}

              {location.city}

              {" - "}

              {location.views}

              {" views"}

            </div>

          )
        )

      }

    </div>

  );
}

export default TopLocationsWidget;