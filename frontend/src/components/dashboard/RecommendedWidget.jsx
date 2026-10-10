import PropertyCard
from "../property/PropertyCard";

function RecommendedWidget({

  properties = []

}) {

  return (

    <div>

      <h4 className="mb-3">

        Recommended For You

      </h4>

      <div className="row">

        {
          properties
            .slice(0,3)
            .map(property => (

              <div
                key={property._id}
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

            ))
        }

      </div>

    </div>

  );
}

export default RecommendedWidget;