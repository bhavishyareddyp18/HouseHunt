function AgentBadge({ verified }) {

  return (

    <span
      className={`
      badge
      bg-${verified ? "success" : "secondary"}
      `}
    >

      {verified ? "Verified Agent" : "Agent"}

    </span>

  );

}

export default AgentBadge;