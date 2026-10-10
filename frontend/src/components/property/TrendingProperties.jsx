function TrendingProperties({

  properties

}) {

  const sorted =

  [...properties].sort(
    (a,b)=>

    b.views -
    a.views
  );

  return (

    <div>

      <h3>
        Trending Properties
      </h3>

      <ul
        className="
        list-group
        "
      >

        {
          sorted
          .slice(0,5)
          .map(
            property => (

              <li

                key={
                  property._id
                }

                className="
                list-group-item
                "

              >

                {
                  property.title
                }

                {" - "}

                {
                  property.views
                }

                {" views"}

              </li>

            )
          )
        }

      </ul>

    </div>

  );
}

export default
TrendingProperties;