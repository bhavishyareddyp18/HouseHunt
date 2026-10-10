function ProfileSummary({

  user

}) {

  return (

    <div className="card p-4 h-100">

      <div className="d-flex align-items-center">

        <img
          src={
            user?.profilePhoto ||
            "/images/default-user.png"
          }
          alt="profile"
          className="rounded-circle me-3"
          width="80"
          height="80"
        />

        <div>

          <h4>
            {user?.name}
          </h4>

          <p className="mb-1">
            {user?.email}
          </p>

          <span className="badge bg-primary">
            {user?.role}
          </span>

        </div>

      </div>

    </div>

  );
}

export default ProfileSummary;