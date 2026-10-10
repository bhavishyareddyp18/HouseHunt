import "./StatsCounter.css";

import {
  motion
} from "framer-motion";

function StatsCounter() {

  const stats = [

    {
      number:"10,000+",
      title:"Properties"
    },

    {
      number:"5,000+",
      title:"Happy Users"
    },

    {
      number:"2,500+",
      title:"Property Owners"
    },

    {
      number:"15,000+",
      title:"Bookings"
    }
  ];

  return (

    <section className="stats-section">

      <div className="container">

        <div className="row">

          {
            stats.map(
              (
                item,
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

                    className="stats-card"
                  >

                    <h2>
                      {item.number}
                    </h2>

                    <p>
                      {item.title}
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

export default StatsCounter;