import "./PropertyRating.css";

function PropertyRating({

  rating = 0

}) {

  const stars =
    Math.round(rating);

  return (

    <div
      className="
      property-rating
      "
    >

      {
        [...Array(5)].map(
          (
            _,
            index
          ) => (

            <span
              key={index}
            >

              {
                index < stars
                ? "⭐"
                : "☆"
              }

            </span>

          )
        )
      }

      <span
        className="
        ms-2
        "
      >

        ({rating})

      </span>

    </div>

  );
}

export default PropertyRating;