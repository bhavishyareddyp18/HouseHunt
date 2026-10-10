import "./CallToAction.css";
import { Link } from "react-router-dom";

function CallToAction() {

  return (

    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <h2>
            Ready To Find Your Dream Home?
          </h2>

          <p>
            Explore thousands of verified
            rental properties today.
          </p>

          <Link
            to="/properties"
            className="btn cta-btn"
          >
            Browse Properties
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;