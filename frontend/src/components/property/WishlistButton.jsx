import {
  FaHeart
} from "react-icons/fa";

import {
  useWishlist
} from "../../context/WishlistContext";

function WishlistButton({

  property

}) {

  const {

    wishlist,
    addToWishlist,
    removeFromWishlist

  } = useWishlist();

  const exists =
    wishlist.some(
      item =>
      item._id ===
      property._id
    );

  const handleClick =
  () => {

    if(exists){

      removeFromWishlist(
        property._id
      );

    }else{

      addToWishlist(
        property
      );
    }
  };

  return (

    <button
      className="
      btn btn-light
      "
      onClick={
        handleClick
      }
    >

      <FaHeart />

      {" "}

      {
        exists
        ? "Saved"
        : "Save"
      }

    </button>

  );
}

export default WishlistButton;