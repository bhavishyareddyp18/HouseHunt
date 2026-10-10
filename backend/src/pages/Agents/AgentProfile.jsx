import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import agentService from "../../services/agentService";

import AgentStats from "../../components/agents/AgentStats";

import AgentListings from "../../components/agents/AgentListings";

import AgentLeads from "../../components/agents/AgentLeads";

function AgentProfile() {

  const { id } = useParams();

  const [agent, setAgent] = useState(null);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {

    const data =
      await agentService.getAgentById(id);

    setAgent(data);

  };

  if (!agent)
    return <p>Loading...</p>;

  return (

    <div className="container mt-4">

      <h3>{agent.name}</h3>

      <AgentStats agent={agent} />

      <div className="row mt-3">

        <div className="col-md-6">

          <AgentListings listings={agent.listings} />

        </div>

        <div className="col-md-6">

          <AgentLeads leads={agent.leads} />

        </div>

      </div>

    </div>

  );

}

export default AgentProfile;