import "./PropertyRecommendation.css";
import { motion } from "framer-motion";

function PropertyRecommendation() {

  const recommendations = [
    {
      title: "2 BHK Apartment",
      match: "95%",
      city: "Vijayawada"
    },
    {
      title: "Luxury Villa",
      match: "92%",
      city: "Hyderabad"
    },
    {
      title: "Studio Apartment",
      match: "89%",
      city: "Bangalore"
    }
  ];

  return (
    <section className="recommendation-section">

      <div className="container">

        <div className="section-heading">
          <h2>Recommended For You</h2>
          <p>
            Personalized property suggestions
            based on your preferences.
          </p>
        </div>

        <div className="row">

          {
            recommendations.map(
              (property, index) => (

                <div
                  className="col-md-4 mb-4"
                  key={index}
                >

                  <motion.div
                    whileHover={{
                      scale: 1.03
                    }}
                    className="recommend-card"
                  >

                    <span className="match-score">
                      {property.match} Match
                    </span>

                    <h4>
                      {property.title}
                    </h4>

                    <p>
                      {property.city}
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

export default PropertyRecommendation;