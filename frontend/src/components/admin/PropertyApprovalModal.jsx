import {
  useState
} from "react";

function PropertyApprovalModal({

  property,

  onApprove,

  onReject,

  onClose

}) {

  const [

    reason,

    setReason

  ] = useState("");

  if(!property)
    return null;

  return (

    <div
      className="
      modal
      d-block
      "
    >

      <div
        className="
        modal-dialog
        modal-lg
        "
      >

        <div
          className="
          modal-content
          "
        >

          <div
            className="
            modal-header
            "
          >

            <h5>

              Review Property

            </h5>

            <button

              className="
              btn-close
              "

              onClick={
                onClose
              }

            />

          </div>

          <div
            className="
            modal-body
            "
          >

            <h4>

              {property.title}

            </h4>

            <p>

              {
                property.description
              }

            </p>

            <p>

              Rent:

              ₹

              {
                property.rent
              }

            </p>

            <textarea

              className="
              form-control
              "

              rows="4"

              placeholder="
              Rejection Reason
              "

              value={reason}

              onChange={e =>
                setReason(
                  e.target.value
                )
              }

            />

          </div>

          <div
            className="
            modal-footer
            "
          >

            <button

              className="
              btn
              btn-success
              "

              onClick={() =>
                onApprove(
                  property._id
                )
              }

            >

              Approve

            </button>

            <button

              className="
              btn
              btn-danger
              "

              onClick={() =>

                onReject(
                  property._id,
                  reason
                )

              }

            >

              Reject

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default PropertyApprovalModal;