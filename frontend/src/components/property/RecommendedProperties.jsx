import PropertyCard
from "./PropertyCard";

function RecommendedProperties({

  properties

}) {

  return (

    <div>

      <h3>
        Recommended For You
      </h3>

      <div className="row">

        {
          properties.map(
            property => (

              <div
                key={
                  property._id
                }
                className="
                col-md-4
                mb-4
                "
              >

                <PropertyCard
                  property={
                    property
                  }
                />

              </div>

            )
          )
        }

      </div>

    </div>

  );
}

export default
RecommendedProperties;