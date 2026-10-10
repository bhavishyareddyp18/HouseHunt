import SmartScoreBadge from "./SmartScoreBadge";

import useRecommendations from "../../hooks/useRecommendations";

function RecommendedProperties() {

  const { recommended } = useRecommendations();

  return (

    <div className="card p-4">

      <h5>Recommended For You</h5>

      <hr />

      {recommended.length === 0 && (
        <p>No recommendations yet</p>
      )}

      {recommended.map((p) => (

        <div
          key={p._id}
          className="border-bottom p-2"
        >

          <h6>{p.title}</h6>

          <p>₹{p.rent}</p>

          <SmartScoreBadge score={p.score} />

        </div>

      ))}

    </div>

  );

}

export default RecommendedProperties;