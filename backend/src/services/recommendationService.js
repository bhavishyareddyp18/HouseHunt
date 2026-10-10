import api from "./api";

const recommendationService = {

  getRecommended: async () => {

    const response =
      await api.get(
        "/recommendations"
      );

    return response.data;
  },

  getSimilar: async (propertyId) => {

    const response =
      await api.get(
        `/recommendations/similar/${propertyId}`
      );

    return response.data;
  }

};

export default recommendationService;