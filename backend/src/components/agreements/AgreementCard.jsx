function AgreementCard({

  agreement,
  onDownload

}) {

  return (

    <div className="card p-3 mb-3">

      <h5>

        {agreement.propertyTitle}

      </h5>

      <p>

        Tenant:
        {" "}
        {agreement.tenantName}

      </p>

      <p>

        Owner:
        {" "}
        {agreement.ownerName}

      </p>

      <button

        className="btn btn-primary"

        onClick={() =>
          onDownload(agreement._id)
        }

      >

        Download PDF

      </button>

    </div>

  );
}

export default AgreementCard;