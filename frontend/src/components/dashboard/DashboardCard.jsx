import "./DashboardCard.css";

function DashboardCard({

  title,
  value,
  icon,
  color = "#2563EB"

}) {

  return (

    <div
      className="
      dashboard-card
      "
    >

      <div
        className="
        dashboard-card-top
        "
      >

        <div
          className="
          dashboard-icon
          "
          style={{
            color
          }}
        >

          {icon}

        </div>

      </div>

      <h6>
        {title}
      </h6>

      <h2>
        {value}
      </h2>

    </div>

  );
}

export default DashboardCard;