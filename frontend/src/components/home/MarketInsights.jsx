import "./MarketInsights.css";

import {
  FaMapMarkedAlt,
  FaHome
} from "react-icons/fa";

import {
  FaChartLine,
  FaArrowTrendUp
} from "react-icons/fa6";

import { motion } from "framer-motion";

function MarketInsights() {

  const insights = [

    {
      icon:<FaChartLine />,
      title:"Average Rent",
      value:"₹22,500"
    },

    {
      icon:<FaMapMarkedAlt />,
      title:"Top Location",
      value:"Bangalore"
    },

    {
      icon:<FaHome />,
      title:"Active Listings",
      value:"10,000+"
    },

    {
      icon:<FaArrowTrendUp />,
      title:"Growth Rate",
      value:"+18%"
    }

  ];

  return (

    <section className="insights-section">

      <div className="container">

        <div className="section-heading">

          <h2>
            Market Insights
          </h2>

          <p>
            Real-time rental market
            information and trends.
          </p>

        </div>

        <div className="row">

          {
            insights.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="col-lg-3 col-md-6 mb-4"
                >

                  <motion.div

                    whileHover={{
                      scale:1.05
                    }}

                    className="insight-card"
                  >

                    <div className="insight-icon">
                      {item.icon}
                    </div>

                    <h4>
                      {item.value}
                    </h4>

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

export default MarketInsights;