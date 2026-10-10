import {
  Link
} from "react-router-dom";

function QuickActionsWidget() {

  return (

    <div className="card p-4">

      <h5>
        Quick Actions
      </h5>

      <hr />

      <div className="d-grid gap-2">

        <Link

          to="/properties"

          className="
          btn btn-primary
          "

        >

          Browse Properties

        </Link>

        <Link

          to="/wishlist"

          className="
          btn btn-outline-primary
          "

        >

          Wishlist

        </Link>

        <Link

          to="/my-bookings"

          className="
          btn btn-outline-success
          "

        >

          My Bookings

        </Link>

      </div>

    </div>

  );
}

export default QuickActionsWidget;