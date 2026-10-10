import api from "./api";

const agentService = {

  getAgents: async () => {

    const res =
      await api.get(
        "/agents"
      );

    return res.data;
  },

  getAgentById: async (id) => {

    const res =
      await api.get(
        `/agents/${id}`
      );

    return res.data;
  },

  getAgentDashboard: async () => {

    const res =
      await api.get(
        "/agents/dashboard"
      );

    return res.data;
  }

};

export default agentService;