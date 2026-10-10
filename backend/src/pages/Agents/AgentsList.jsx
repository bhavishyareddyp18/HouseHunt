import { useEffect, useState } from "react";

import agentService from "../../services/agentService";

import AgentCard from "../../components/agents/AgentCard";

function AgentsList() {

  const [agents, setAgents] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {

    const data =
      await agentService.getAgents();

    setAgents(data);

  };

  return (

    <div className="container mt-4">

      <h3>Real Estate Agents</h3>

      {agents.map((a) => (

        <AgentCard key={a._id} agent={a} />

      ))}

    </div>

  );

}

export default AgentsList;