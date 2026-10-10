import "./PropertyReviews.css";

function PropertyReviews({

  reviews = []

}) {

  return (

    <div>

      {reviews.map(
        (
          review,
          index
        ) => (

          <div
            key={index}
            className="
            review-card
            "
          >

            <h5>
              {review.name}
            </h5>

            <p>

              ⭐ {review.rating}

            </p>

            <p>
              {
                review.comment
              }
            </p>

          </div>

        )
      )}

    </div>

  );
}

export default PropertyReviews;