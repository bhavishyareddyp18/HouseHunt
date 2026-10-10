import { useEffect, useState } from "react";

import recommendationService from "../../services/recommendationService";

function SimilarProperties({ propertyId }) {

  const [similar, setSimilar] = useState([]);

  useEffect(() => {

    if (propertyId)
      load();

  }, [propertyId]);

  const load = async () => {

    const data =
      await recommendationService.getSimilar(propertyId);

    setSimilar(data);

  };

  return (

    <div className="card p-4">

      <h5>Similar Properties</h5>

      {similar.map((p) => (

        <div key={p._id} className="p-2 border-bottom">

          <strong>{p.title}</strong>

          <p>₹{p.rent}</p>

        </div>

      ))}

    </div>

  );

}

export default SimilarProperties;