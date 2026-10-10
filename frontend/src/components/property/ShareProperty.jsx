import {
  FaShareAlt
} from "react-icons/fa";

function ShareProperty({

  title

}) {

  const handleShare =
  () => {

    if(
      navigator.share
    ){

      navigator.share({

        title,

        url:
        window.location.href

      });

    }
  };

  return (

    <button

      className="
      btn btn-outline-secondary
      "

      onClick={
        handleShare
      }

    >

      <FaShareAlt />

      {" "}

      Share

    </button>

  );
}

export default ShareProperty;