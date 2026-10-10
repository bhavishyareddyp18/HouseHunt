import api from "./api";

const agreementService = {

  generateAgreement:
  async (data) => {

    const response =
      await api.post(
        "/agreements/generate",
        data,
        {
          responseType:
          "blob"
        }
      );

    return response.data;
  },

  getAgreements:
  async () => {

    const response =
      await api.get(
        "/agreements"
      );

    return response.data;
  }

};

export default agreementService;