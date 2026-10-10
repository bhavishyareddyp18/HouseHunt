function RecentUsersWidget({

  users = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Recent Users
      </h5>

      <hr />

      {
        users.map(user => (

          <div
            key={user._id}
            className="mb-2"
          >

            {user.name}

            {" - "}

            {user.role}

          </div>

        ))
      }

    </div>

  );
}

export default RecentUsersWidget;