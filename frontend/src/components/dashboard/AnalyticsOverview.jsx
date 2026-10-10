function AnalyticsOverview({

  totalRevenue,
  totalViews,
  growthRate

}) {

  return (

    <div className="row mb-4">

      <div className="col-md-4">

        <div className="card p-4">

          <h6>
            Revenue
          </h6>

          <h3>
            ₹{totalRevenue}
          </h3>

        </div>

      </div>

      <div className="col-md-4">

        <div className="card p-4">

          <h6>
            Property Views
          </h6>

          <h3>
            {totalViews}
          </h3>

        </div>

      </div>

      <div className="col-md-4">

        <div className="card p-4">

          <h6>
            Growth Rate
          </h6>

          <h3>
            {growthRate}%
          </h3>

        </div>

      </div>

    </div>

  );
}

export default AnalyticsOverview;