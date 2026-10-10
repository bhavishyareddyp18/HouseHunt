import "./TrendingLocations.css";

import { motion } from "framer-motion";

function TrendingLocations() {

  const locations = [

    {
      city: "Hyderabad",
      properties: 1520
    },

    {
      city: "Bangalore",
      properties: 2410
    },

    {
      city: "Chennai",
      properties: 1215
    },

    {
      city: "Vijayawada",
      properties: 685
    }

  ];

  return (

    <section className="trending-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            Trending Locations
          </h2>

          <p>
            Discover the most searched
            rental destinations.
          </p>

        </div>

        <div className="row">

          {
            locations.map(
              (
                location,
                index
              ) => (

                <div
                  key={index}
                  className="col-md-3 mb-4"
                >

                  <motion.div

                    whileHover={{
                      scale:1.05
                    }}

                    className="location-card"
                  >

                    <h3>
                      {location.city}
                    </h3>

                    <p>

                      {
                        location.properties
                      }

                      {" "}
                      Properties

                    </p>

                  </motion.div>

                </div>
              )
            )
          }

        </div>

      </div>

    </section>

  );
}

export default TrendingLocations;