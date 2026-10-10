function AgreementTemplate({

  agreement

}) {

  return (

    <div
      className="
      p-4
      "
    >

      <h2>
        Rental Agreement
      </h2>

      <hr />

      <p>
        This Rental Agreement is made between
        <b>
          {" "}
          {agreement.ownerName}
        </b>

        and

        <b>
          {" "}
          {agreement.tenantName}
        </b>.
      </p>

      <p>

        Property:
        {" "}
        {agreement.propertyTitle}

      </p>

      <p>

        Rent:
        ₹{agreement.rent}

      </p>

      <p>

        Duration:
        {agreement.duration}
        {" "}
        months

      </p>

    </div>

  );
}

export default AgreementTemplate;