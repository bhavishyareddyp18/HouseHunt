function PropertyStatusWidget({

  active = 0,
  pending = 0,
  rejected = 0

}) {

  return (

    <div className="card p-4">

      <h5>
        Property Status
      </h5>

      <hr />

      <p>
        Active:
        {" "}
        {active}
      </p>

      <p>
        Pending:
        {" "}
        {pending}
      </p>

      <p>
        Rejected:
        {" "}
        {rejected}
      </p>

    </div>

  );
}

export default PropertyStatusWidget;