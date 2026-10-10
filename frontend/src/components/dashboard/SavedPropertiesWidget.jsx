import { Link } from "react-router-dom";

function SavedPropertiesWidget({

  properties = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Saved Properties
      </h5>

      <hr />

      {
        properties.length === 0

        ?

        <p>
          No saved properties.
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

export default SavedPropertiesWidget;