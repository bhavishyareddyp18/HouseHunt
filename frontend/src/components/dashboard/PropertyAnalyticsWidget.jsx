function PropertyAnalyticsWidget({

  properties = []

}) {

  const totalViews =

    properties.reduce(

      (
        total,
        property
      ) =>

        total +
        (property.views || 0),

      0

    );

  return (

    <div className="card p-4">

      <h5>
        Property Analytics
      </h5>

      <hr />

      <p>

        Total Properties:

        {" "}

        {properties.length}

      </p>

      <p>

        Total Views:

        {" "}

        {totalViews}

      </p>

    </div>

  );
}

export default PropertyAnalyticsWidget;