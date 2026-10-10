function ApprovalStatisticsWidget({

  pendingApprovals,
  approvedToday,
  rejectedToday

}) {

  return (

    <div className="card p-4 h-100">

      <h5>
        Approval Overview
      </h5>

      <hr />

      <p>
        Pending Approvals:
        {" "}
        {pendingApprovals}
      </p>

      <p>
        Approved Today:
        {" "}
        {approvedToday}
      </p>

      <p>
        Rejected Today:
        {" "}
        {rejectedToday}
      </p>

    </div>

  );
}

export default ApprovalStatisticsWidget;