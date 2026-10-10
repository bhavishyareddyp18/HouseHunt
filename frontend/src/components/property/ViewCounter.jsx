import {
  FaEye
} from "react-icons/fa";

function ViewCounter({

  views

}) {

  return (

    <div>

      <FaEye />

      {" "}

      {views}

      {" "}views

    </div>

  );
}

export default ViewCounter;