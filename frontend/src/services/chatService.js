import api from "./api";

const chatService = {

  getConversations:
  async () => {

    const response =

      await api.get(
        "/chat/conversations"
      );

    return response.data;
  },

  getMessages:
  async (
    conversationId
  ) => {

    const response =

      await api.get(

        `/chat/${conversationId}`

      );

    return response.data;
  },

  sendMessage:
  async (
    data
  ) => {

    const response =

      await api.post(
        "/chat/send",
        data
      );

    return response.data;
  }

};

export default chatService;