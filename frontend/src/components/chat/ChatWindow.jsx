import ChatMessage from "./ChatMessage";

import TypingIndicator from "./TypingIndicator";

function ChatWindow({

  messages,

  currentUserId,

  typing

}) {

  return (

    <div
      className="
      flex-grow-1
      overflow-auto
      p-3
      "
      style={{
        height:"70vh"
      }}
    >

      {

        messages.map(
          message => (

            <ChatMessage

              key={
                message._id
              }

              message={
                message
              }

              currentUserId={
                currentUserId
              }

            />

          )
        )

      }

      <TypingIndicator
        visible={typing}
      />

    </div>

  );
}

export default ChatWindow;