import "./PropertyForm.css";

function PropertyForm({

  formData,
  handleChange,
  handleSubmit,
  buttonText

}) {

  return (

    <form
      onSubmit={
        handleSubmit
      }
    >

      <div className="row">

        <div className="col-md-6">

          <input

            type="text"

            name="title"

            placeholder="
            Property Title
            "

            className="
            form-control mb-3
            "

            value={
              formData.title
            }

            onChange={
              handleChange
            }

            required

          />

        </div>

        <div className="col-md-6">

          <input

            type="number"

            name="rent"

            placeholder="
            Monthly Rent
            "

            className="
            form-control mb-3
            "

            value={
              formData.rent
            }

            onChange={
              handleChange
            }

            required

          />

        </div>

      </div>

      <textarea

        rows="5"

        name="description"

        className="
        form-control mb-3
        "

        placeholder="
        Description
        "

        value={
          formData.description
        }

        onChange={
          handleChange
        }

      />

      <div className="row">

        <div className="col-md-4">

          <input

            type="text"

            name="city"

            className="
            form-control mb-3
            "

            placeholder="City"

            value={
              formData.city
            }

            onChange={
              handleChange
            }

          />

        </div>

        <div className="col-md-4">

          <input

            type="number"

            name="bedrooms"

            className="
            form-control mb-3
            "

            placeholder="
            Bedrooms
            "

            value={
              formData.bedrooms
            }

            onChange={
              handleChange
            }

          />

        </div>

        <div className="col-md-4">

          <input

            type="number"

            name="bathrooms"

            className="
            form-control mb-3
            "

            placeholder="
            Bathrooms
            "

            value={
              formData.bathrooms
            }

            onChange={
              handleChange
            }

          />

        </div>

      </div>

      <input

        type="file"

        multiple

        className="
        form-control mb-3
        "

        onChange={
          handleChange
        }

      />

      <button
        className="
        btn btn-primary
        "
      >

        {buttonText}

      </button>

    </form>

  );
}

export default PropertyForm;