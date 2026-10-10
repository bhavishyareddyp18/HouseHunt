import "./WhyChooseUs.css";

import {
  FaShieldAlt,
  FaHome,
  FaSearch,
  FaHandshake
} from "react-icons/fa";

import { motion } from "framer-motion";

function WhyChooseUs() {

  const features = [

    {
      icon:<FaShieldAlt />,
      title:"Verified Listings",
      desc:"Every property goes through an approval process."
    },

    {
      icon:<FaSearch />,
      title:"Advanced Search",
      desc:"Powerful filters help users find properties quickly."
    },

    {
      icon:<FaHome />,
      title:"Huge Inventory",
      desc:"Thousands of apartments, villas and houses."
    },

    {
      icon:<FaHandshake />,
      title:"Trusted Platform",
      desc:"Safe and transparent rental experience."
    }

  ];

  return (

    <section className="why-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            Why Choose HouseHunt
          </h2>

          <p>
            Everything you need in one platform.
          </p>

        </div>

        <div className="row">

          {
            features.map(
              (
                item,
                index
              ) => (

                <div
                  className="col-lg-3 col-md-6 mb-4"
                  key={index}
                >

                  <motion.div

                    whileHover={{
                      y:-8
                    }}

                    className="feature-card"
                  >

                    <div className="feature-icon">
                      {item.icon}
                    </div>

                    <h5>
                      {item.title}
                    </h5>

                    <p>
                      {item.desc}
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

export default WhyChooseUs;