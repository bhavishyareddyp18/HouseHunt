import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const WishlistContext =
  createContext();

export const WishlistProvider = ({
  children
}) => {

  const [wishlist,
    setWishlist] =
    useState([]);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        "wishlist"
      );

    if(saved){

      setWishlist(
        JSON.parse(saved)
      );
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlist
      )
    );

  }, [wishlist]);

  const addToWishlist =
  (property) => {

    const exists =
      wishlist.find(
        item =>
        item._id ===
        property._id
      );

    if(exists) return;

    setWishlist([
      ...wishlist,
      property
    ]);
  };

  const removeFromWishlist =
  (id) => {

    setWishlist(

      wishlist.filter(
        property =>
        property._id !== id
      )

    );
  };

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >

      {children}

    </WishlistContext.Provider>

  );
};

export const useWishlist =
() => useContext(
  WishlistContext
);