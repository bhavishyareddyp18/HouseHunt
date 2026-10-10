import {
  format
} from "date-fns";

function ChatMessage({

  message,
  currentUserId

}) {

  const own =

    message.sender ===
    currentUserId;

  return (

    <div

      className={`
      d-flex
      mb-3
      ${
        own
        ? "justify-content-end"
        : "justify-content-start"
      }
      `}

    >

      <div

        className={`
        p-3
        rounded
        ${
          own
          ? "bg-primary text-white"
          : "bg-light"
        }
        `}

        style={{
          maxWidth:"70%"
        }}

      >

        <div>

          {
            message.text
          }

        </div>

        <small>

          {

            format(

              new Date(
                message.createdAt
              ),

              "hh:mm a"

            )

          }

        </small>

      </div>

    </div>

  );
}

export default ChatMessage;