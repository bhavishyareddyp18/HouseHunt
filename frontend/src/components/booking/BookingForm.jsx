import { useState } from "react";

function BookingForm({

  propertyId,
  bookingType

}) {

  const [date,
    setDate] =
    useState("");

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    console.log({

      propertyId,

      bookingType,

      date

    });

    alert(
      "Request Sent Successfully"
    );
  };

  return (

    <form
      onSubmit={
        handleSubmit
      }
    >

      <div
        className="
        mb-3
        "
      >

        <label>
          Select Date
        </label>

        <input

          type="date"

          className="
          form-control
          "

          value={date}

          onChange={(e)=>
            setDate(
              e.target.value
            )
          }

          required

        />

      </div>

      <button
        className="
        btn btn-primary
        "
      >

        Submit Request

      </button>

    </form>

  );
}

export default BookingForm;