import api from "./api";

const propertyService = {

  getProperties: async (
    queryParams = {}
  ) => {

    const response =
      await api.get(
        "/properties",
        {
          params: queryParams
        }
      );

    return response.data;
  },

  getPropertyById: async (
    id
  ) => {

    const response =
      await api.get(
        `/properties/${id}`
      );

    return response.data;
  }

};

export default propertyService;