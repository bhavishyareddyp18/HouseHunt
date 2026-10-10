import "./Testimonials.css";
import { motion } from "framer-motion";

function Testimonials() {

  const testimonials = [

    {
      id: 1,
      name: "Rahul Sharma",
      role: "Tenant",
      review:
        "HouseHunt helped me find a rental apartment within two days. The search filters were extremely useful."
    },

    {
      id: 2,
      name: "Priya Reddy",
      role: "Property Owner",
      review:
        "Managing my property listings became very easy. I received quality rental requests quickly."
    },

    {
      id: 3,
      name: "Arjun Kumar",
      role: "Real Estate Agent",
      review:
        "The dashboard analytics and lead management tools are impressive and save a lot of time."
    }

  ];

  return (

    <section className="testimonial-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            What Our Users Say
          </h2>

          <p>
            Trusted by tenants,
            property owners and agents.
          </p>

        </div>

        <div className="row">

          {
            testimonials.map(
              (item) => (

                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={item.id}
                >

                  <motion.div

                    whileHover={{
                      y:-10
                    }}

                    className="testimonial-card"
                  >

                    <div className="quote">
                      "
                    </div>

                    <p>
                      {item.review}
                    </p>

                    <hr />

                    <h5>
                      {item.name}
                    </h5>

                    <span>
                      {item.role}
                    </span>

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

export default Testimonials;