import "./DashboardLayout.css";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

function DashboardLayout({

  title,
  children

}) {

  return (

    <div className="dashboard-container">

      <DashboardSidebar />

      <div className="dashboard-content">

        <DashboardHeader
          title={title}
        />

        <div
          className="
          dashboard-body
          "
        >

          {children}

        </div>

      </div>

    </div>

  );
}

export default DashboardLayout;