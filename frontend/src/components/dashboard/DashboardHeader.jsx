function DashboardHeader({

  title

}) {

  const user =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (

    <div
      className="
      bg-white
      border-bottom
      p-4
      d-flex
      justify-content-between
      align-items-center
      "
    >

      <h2>
        {title}
      </h2>

      <div>

        Welcome,

        {" "}

        {
          user?.name ||
          "User"
        }

      </div>

    </div>

  );
}

export default DashboardHeader;