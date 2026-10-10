import "./Footer.css";

function Footer() {

  return (

    <footer
      className="footer-section"
    >

      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3>HouseHunt</h3>

            <p>
              Find your dream
              rental property
              with ease.
            </p>

          </div>

          <div className="col-md-4">

            <h5>
              Quick Links
            </h5>

            <ul>

              <li>Home</li>
              <li>Properties</li>
              <li>About</li>
              <li>Contact</li>

            </ul>

          </div>

          <div className="col-md-4">

            <h5>
              Contact
            </h5>

            <p>
              support@househunt.com
            </p>

            <p>
              +91 99999 99999
            </p>

          </div>

        </div>

        <hr />

        <div
          className="text-center"
        >
          © 2026 HouseHunt.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;