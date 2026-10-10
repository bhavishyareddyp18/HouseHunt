import OnlineBadge from "./OnlineBadge";

function ChatSidebar({

  conversations,

  selected,

  onSelect

}) {

  return (

    <div
      className="
      border-end
      h-100
      "
    >

      {

        conversations.map(
          convo => (

            <div

              key={convo._id}

              className={`
              p-3
              border-bottom
              ${
                selected?._id ===
                convo._id
                ? "bg-light"
                : ""
              }
              `}

              onClick={() =>
                onSelect(
                  convo
                )
              }

              style={{
                cursor:"pointer"
              }}

            >

              <div
                className="
                d-flex
                justify-content-between
                "
              >

                <strong>

                  {
                    convo.name
                  }

                </strong>

                <OnlineBadge

                  online={
                    convo.online
                  }

                />

              </div>

            </div>

          )
        )

      }

    </div>

  );
}

export default ChatSidebar;