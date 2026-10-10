function AgentLeads({ leads }) {

  return (

    <div className="card p-4">

      <h5>Leads</h5>

      {leads.map((lead, i) => (

        <div key={i} className="border-bottom p-2">

          <p>User: {lead.userName}</p>

          <p>Property: {lead.propertyTitle}</p>

          <p>Status: {lead.status}</p>

        </div>

      ))}

    </div>

  );

}

export default AgentLeads;