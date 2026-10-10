function MostViewedPropertiesWidget({

  properties = []

}) {

  const sorted =

    [...properties].sort(

      (
        a,
        b
      ) =>

        b.views -
        a.views

    );

  return (

    <div className="card p-4">

      <h5>
        Most Viewed Properties
      </h5>

      <hr />

      {

        sorted
          .slice(0,5)
          .map(property => (

            <div
              key={
                property._id
              }
              className="
              mb-2
              "
            >

              {property.title}

              {" - "}

              {property.views}

              {" views"}

            </div>

          ))

      }

    </div>

  );
}

export default MostViewedPropertiesWidget;