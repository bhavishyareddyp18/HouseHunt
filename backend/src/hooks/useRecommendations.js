import { useEffect, useState } from "react";

import recommendationService from "../services/recommendationService";

function useRecommendations() {

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {

    load();

  }, []);

  const load = async () => {

    const data =
      await recommendationService.getRecommended();

    setRecommended(data);

  };

  return {
    recommended
  };

}

export default useRecommendations;