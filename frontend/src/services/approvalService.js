import api from "./api";

const approvalService = {

  getPendingProperties: async () => {

    const response =
      await api.get(
        "/admin/properties/pending"
      );

    return response.data;
  },

  approveProperty: async (
    propertyId
  ) => {

    const response =
      await api.put(
        `/admin/properties/${propertyId}/approve`
      );

    return response.data;
  },

  rejectProperty: async (
    propertyId,
    reason
  ) => {

    const response =
      await api.put(
        `/admin/properties/${propertyId}/reject`,
        {
          rejectionReason:
            reason
        }
      );

    return response.data;
  },

  getApprovalHistory:
  async () => {

    const response =
      await api.get(
        "/admin/properties/history"
      );

    return response.data;
  }

};

export default approvalService;