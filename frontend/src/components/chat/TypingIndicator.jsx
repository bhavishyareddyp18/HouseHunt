function TypingIndicator({

  visible

}) {

  if(!visible)
    return null;

  return (

    <div
      className="
      text-muted
      small
      px-3
      pb-2
      "
    >

      typing...

    </div>

  );
}

export default TypingIndicator;