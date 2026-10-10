function MarketInsights({

  properties

}) {

  const averageRent =

    properties.length

    ?

    Math.round(

      properties.reduce(
        (
          total,
          property
        ) =>

          total +
          property.rent,

          0

      )

      /

      properties.length

    )

    : 0;

  return (

    <div
      className="
      card p-4
      "
    >

      <h4>
        Market Insights
      </h4>

      <p>

        Average Rent:

        {" "}

        ₹{averageRent}

      </p>

      <p>

        Properties Listed:

        {" "}

        {properties.length}

      </p>

    </div>

  );
}

export default
MarketInsights;