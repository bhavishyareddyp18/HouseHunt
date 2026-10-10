function PropertyStatisticsWidget({

  total,
  approved,
  pending,
  rejected

}) {

  return (

    <div className="card p-4 h-100">

      <h5>
        Property Statistics
      </h5>

      <hr />

      <p>
        Total:
        {" "}
        {total}
      </p>

      <p>
        Approved:
        {" "}
        {approved}
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

export default PropertyStatisticsWidget;