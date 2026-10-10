import {
  useRecentlyViewed
} from "../../context/RecentlyViewedContext";

function RecentlyViewed() {

  const {

    recentlyViewed

  } =
  useRecentlyViewed();

  return (

    <div>

      <h3>
        Recently Viewed
      </h3>

      <div
        className="row"
      >

        {
          recentlyViewed.map(
            property => (

              <div
                key={
                  property._id
                }
                className="
                col-md-3
                mb-3
                "
              >

                <div
                  className="
                  card p-2
                  "
                >

                  <h6>
                    {
                      property.title
                    }
                  </h6>

                  <p>
                    ₹{
                      property.rent
                    }
                  </p>

                </div>

              </div>

            )
          )
        }

      </div>

    </div>

  );
}

export default RecentlyViewed;