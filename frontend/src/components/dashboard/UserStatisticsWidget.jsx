function UserStatisticsWidget({

  totalUsers,
  totalOwners,
  totalAgents

}) {

  return (

    <div className="card p-4 h-100">

      <h5>
        User Statistics
      </h5>

      <hr />

      <p>
        Total Users:
        {" "}
        {totalUsers}
      </p>

      <p>
        Property Owners:
        {" "}
        {totalOwners}
      </p>

      <p>
        Agents:
        {" "}
        {totalAgents}
      </p>

    </div>

  );
}

export default UserStatisticsWidget;