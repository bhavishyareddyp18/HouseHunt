function DeletePropertyModal({

  onConfirm

}) {

  return (

    <div
      className="
      modal fade
      "
      id="deleteModal"
      tabIndex="-1"
    >

      <div
        className="
        modal-dialog
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
              Delete Property
            </h5>

          </div>

          <div
            className="
            modal-body
            "
          >

            Are you sure?

          </div>

          <div
            className="
            modal-footer
            "
          >

            <button
              className="
              btn btn-danger
              "
              onClick={
                onConfirm
              }
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default DeletePropertyModal;