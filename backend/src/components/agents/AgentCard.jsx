import { Link } from "react-router-dom";

import AgentBadge from "./AgentBadge";

function AgentCard({ agent }) {

  return (

    <div className="card p-3 mb-3">

      <h5>{agent.name}</h5>

      <AgentBadge verified={agent.verified} />

      <p>Email: {agent.email}</p>

      <p>Listings: {agent.totalListings}</p>

      <Link
        className="btn btn-primary"
        to={`/agents/${agent._id}`}
      >

        View Profile

      </Link>

    </div>

  );

}

export default AgentCard;