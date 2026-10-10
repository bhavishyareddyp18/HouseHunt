import api from "./api";

const ownerPropertyService = {

  getMyProperties: async () => {

    const response =
      await api.get(
        "/owner/properties"
      );

    return response.data;
  },

  getProperty: async (
    propertyId
  ) => {

    const response =
      await api.get(
        `/owner/properties/${propertyId}`
      );

    return response.data;
  },

  addProperty: async (
    formData
  ) => {

    const response =
      await api.post(
        "/owner/properties",
        formData,
        {
          headers:{
            "Content-Type":
            "multipart/form-data"
          }
        }
      );

    return response.data;
  },

  updateProperty: async (
    id,
    formData
  ) => {

    const response =
      await api.put(
        `/owner/properties/${id}`,
        formData
      );

    return response.data;
  },

  deleteProperty: async (
    id
  ) => {

    const response =
      await api.delete(
        `/owner/properties/${id}`
      );

    return response.data;
  }

};

export default ownerPropertyService;