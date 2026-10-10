import {
  NavLink
} from "react-router-dom";

function DashboardSidebar() {

  return (

    <aside
      className="
      bg-dark
      text-white
      p-4
      "
      style={{
        width:"260px"
      }}
    >

      <h3>
        HouseHunt
      </h3>

      <hr />

      <nav
        className="
        d-flex
        flex-column
        gap-3
        "
      >

        <NavLink
          to="/dashboard"
          className="
          text-white
          text-decoration-none
          "
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/owner/properties"
          className="
          text-white
          text-decoration-none
          "
        >
          Properties
        </NavLink>

        <NavLink
          to="/owner-bookings"
          className="
          text-white
          text-decoration-none
          "
        >
          Bookings
        </NavLink>

        <NavLink
          to="/wishlist"
          className="
          text-white
          text-decoration-none
          "
        >
          Wishlist
        </NavLink>

      </nav>

    </aside>

  );
}

export default DashboardSidebar;