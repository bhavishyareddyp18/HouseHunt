function AgreementPreview({ agreement }) {

  if (!agreement) return null;

  return (

    <div className="container p-4">

      <h2>Preview Agreement</h2>

      <div className="card p-4">

        <p>
          Owner: {agreement.ownerName}
        </p>

        <p>
          Tenant: {agreement.tenantName}
        </p>

        <p>
          Property: {agreement.propertyTitle}
        </p>

        <p>
          Rent: ₹{agreement.rent}
        </p>

      </div>

    </div>

  );

}

export default AgreementPreview;