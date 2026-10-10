import { Link } from "react-router-dom";

function RecentlyViewedWidget({

  properties = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Recently Viewed
      </h5>

      <hr />

      {
        properties.length === 0

        ?

        <p>
          No recent views.
        </p>

        :

        properties
          .slice(0,5)
          .map(property => (

            <Link

              key={property._id}

              to={`/property/${property._id}`}

              className="
              text-decoration-none
              d-block
              mb-2
              "

            >

              {property.title}

            </Link>

          ))
      }

    </div>

  );
}

export default RecentlyViewedWidget;