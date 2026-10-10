import {
  useState
} from "react";

function ChatInput({

  onSend

}) {

  const [

    text,

    setText

  ] = useState("");

  const submit =
  () => {

    if(!text.trim())
      return;

    onSend(text);

    setText("");
  };

  return (

    <div
      className="
      border-top
      p-3
      d-flex
      gap-2
      "
    >

      <input

        className="
        form-control
        "

        placeholder="
        Type a message...
        "

        value={text}

        onChange={e =>
          setText(
            e.target.value
          )
        }

      />

      <button

        className="
        btn btn-primary
        "

        onClick={submit}

      >

        Send

      </button>

    </div>

  );
}

export default ChatInput;