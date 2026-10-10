import { useEffect, useState } from "react";

import agentService from "../../services/agentService";

function AgentDashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {

    const res =
      await agentService.getAgentDashboard();

    setData(res);

  };

  if (!data)
    return <p>Loading dashboard...</p>;

  return (

    <div className="container mt-4">

      <h3>Agent Dashboard</h3>

      <div className="row">

        <div className="col-md-3 card p-3">

          <h6>Total Listings</h6>

          <h3>{data.totalListings}</h3>

        </div>

        <div className="col-md-3 card p-3">

          <h6>Leads</h6>

          <h3>{data.leads}</h3>

        </div>

        <div className="col-md-3 card p-3">

          <h6>Closed Deals</h6>

          <h3>{data.closedDeals}</h3>

        </div>

        <div className="col-md-3 card p-3">

          <h6>Commission</h6>

          <h3>₹{data.commission}</h3>

        </div>

      </div>

    </div>

  );

}

export default AgentDashboard;