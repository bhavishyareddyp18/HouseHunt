function AgentListings({ listings }) {

  return (

    <div className="card p-4">

      <h5>Agent Listings</h5>

      {listings.map((p) => (

        <div key={p._id} className="border-bottom p-2">

          <strong>{p.title}</strong>

          <p>₹{p.rent}</p>

          <p>Status: {p.status}</p>

        </div>

      ))}

    </div>

  );

}

export default AgentListings;