import {
  useWishlist
} from "../../context/WishlistContext";

import PropertyCard
from "../../components/property/PropertyCard";

function Wishlist() {

  const {
    wishlist
  } = useWishlist();

  return (

    <div className="container py-5">

      <h1>
        My Wishlist
      </h1>

      <div className="row">

        {wishlist.map(
          property => (

            <div
              key={
                property._id
              }
              className="
              col-md-4
              mb-4
              "
            >

              <PropertyCard
                property={
                  property
                }
              />

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default Wishlist;