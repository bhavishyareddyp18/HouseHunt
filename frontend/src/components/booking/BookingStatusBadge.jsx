function BookingStatusBadge({

  status

}) {

  const getClass = () => {

    switch(status){

      case "approved":
        return "bg-success";

      case "rejected":
        return "bg-danger";

      case "pending":
        return "bg-warning";

      default:
        return "bg-secondary";
    }
  };

  return (

    <span
      className={`
      badge
      ${getClass()}
      `}
    >

      {status}

    </span>

  );
}

export default BookingStatusBadge;