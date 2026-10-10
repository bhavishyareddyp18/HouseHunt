import {
  useCompare
} from "../../context/CompareContext";

function CompareButton({

  property

}) {

  const {

    addToCompare

  } = useCompare();

  return (

    <button

      className="
      btn btn-outline-primary
      "

      onClick={() =>
        addToCompare(
          property
        )
      }

    >

      Compare

    </button>

  );
}

export default CompareButton;