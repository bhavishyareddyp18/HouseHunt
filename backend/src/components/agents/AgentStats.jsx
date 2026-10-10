function AgentStats({ agent }) {

  return (

    <div className="card p-4">

      <h5>Agent Stats</h5>

      <hr />

      <p>Total Listings: {agent.totalListings}</p>

      <p>Active Leads: {agent.activeLeads}</p>

      <p>Closed Deals: {agent.closedDeals}</p>

      <p>Commission Earned: ₹{agent.commission}</p>

    </div>

  );

}

export default AgentStats;