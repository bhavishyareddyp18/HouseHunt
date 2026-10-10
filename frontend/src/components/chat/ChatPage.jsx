import {
  useEffect,
  useState
} from "react";

import socket from "../../socket/socket";

import chatService from "../../services/chatService";

import ChatSidebar from "../../components/chat/ChatSidebar";

import ChatWindow from "../../components/chat/ChatWindow";

import ChatInput from "../../components/chat/ChatInput";

function ChatPage() {

  const [

    conversations,

    setConversations

  ] = useState([]);

  const [

    selected,

    setSelected

  ] = useState(null);

  const [

    messages,

    setMessages

  ] = useState([]);

  const [

    typing,

    setTyping

  ] = useState(false);

  const currentUser =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {

    loadConversations();

    socket.connect();

    socket.emit(
      "join",
      currentUser._id
    );

    socket.on(
      "receive-message",
      message => {

        setMessages(
          previous => [

            ...previous,

            message

          ]
        );
      }
    );

    socket.on(
      "typing",
      () => {

        setTyping(true);

        setTimeout(() => {

          setTyping(false);

        },1500);

      }
    );

    return () => {

      socket.disconnect();
    };

  }, []);

  const loadConversations =
  async () => {

    const data =

      await chatService
      .getConversations();

    setConversations(
      data
    );
  };

  const selectConversation =
  async (
    conversation
  ) => {

    setSelected(
      conversation
    );

    const data =

      await chatService
      .getMessages(
        conversation._id
      );

    setMessages(data);
  };

  const sendMessage =
  async (
    text
  ) => {

    if(!selected)
      return;

    const message = {

      conversationId:
      selected._id,

      receiver:
      selected.userId,

      text

    };

    socket.emit(
      "send-message",
      message
    );

    await chatService
    .sendMessage(
      message
    );

    setMessages(
      previous => [

        ...previous,

        {
          ...message,

          sender:
          currentUser._id,

          createdAt:
          new Date()
        }

      ]
    );
  };

  return (

    <div
      className="
      container-fluid
      mt-4
      "
    >

      <div
        className="
        row
        shadow
        "
      >

        <div
          className="
          col-md-3
          "
        >

          <ChatSidebar

            conversations={
              conversations
            }

            selected={
              selected
            }

            onSelect={
              selectConversation
            }

          />

        </div>

        <div
          className="
          col-md-9
          d-flex
          flex-column
          "
        >

          <ChatWindow

            messages={
              messages
            }

            currentUserId={
              currentUser._id
            }

            typing={
              typing
            }

          />

          <ChatInput
            onSend={
              sendMessage
            }
          />

        </div>

      </div>

    </div>

  );
}

export default ChatPage;