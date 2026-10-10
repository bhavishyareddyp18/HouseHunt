import "./ContactOwner.css";

import { useState } from "react";

function ContactOwner({

  owner

}) {

  const [message,
    setMessage] =
    useState("");

  const handleSubmit =
  (e) => {

    e.preventDefault();

    console.log(
      "Send enquiry",
      {
        owner,
        message
      }
    );

    setMessage("");
  };

  return (

    <div
      className="
      contact-owner-card
      "
    >

      <h4>
        Contact Owner
      </h4>

      <form
        onSubmit={
          handleSubmit
        }
      >

        <textarea

          rows="5"

          className="
          form-control
          "

          value={message}

          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }

          placeholder="
          Write your enquiry...
          "

        />

        <button
          className="
          btn btn-primary
          mt-3
          "
        >
          Send Enquiry
        </button>

      </form>

    </div>

  );
}

export default ContactOwner;