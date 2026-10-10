import "./PropertyReviewForm.css";

import {
  useState
} from "react";

function PropertyReviewForm({

  onSubmitReview

}) {

  const [review,
    setReview] =
    useState("");

  const [rating,
    setRating] =
    useState(5);

  const handleSubmit =
  (e) => {

    e.preventDefault();

    onSubmitReview({

      review,
      rating
    });

    setReview("");
    setRating(5);
  };

  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="
      review-form
      "
    >

      <h4>
        Write Review
      </h4>

      <select

        className="
        form-select mb-3
        "

        value={rating}

        onChange={(e)=>
          setRating(
            e.target.value
          )
        }

      >

        <option value="5">
          5 Stars
        </option>

        <option value="4">
          4 Stars
        </option>

        <option value="3">
          3 Stars
        </option>

        <option value="2">
          2 Stars
        </option>

        <option value="1">
          1 Star
        </option>

      </select>

      <textarea

        rows="4"

        className="
        form-control mb-3
        "

        value={review}

        onChange={(e)=>
          setReview(
            e.target.value
          )
        }

        placeholder="
        Share your experience...
        "

      />

      <button
        className="
        btn btn-primary
        "
      >

        Submit Review

      </button>

    </form>

  );
}

export default PropertyReviewForm;