function RecentActivityWidget({

  activities = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Recent Activity
      </h5>

      <hr />

      {
        activities.length === 0

        ?

        <p>
          No activity.
        </p>

        :

        activities.map(
          (
            activity,
            index
          ) => (

            <div
              key={index}
              className="
              mb-2
              "
            >

              • {activity}

            </div>

          )
        )
      }

    </div>

  );
}

export default RecentActivityWidget;