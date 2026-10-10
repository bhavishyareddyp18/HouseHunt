function PropertyStatusBadge({

  status

}) {

  const getClass = () => {

    switch(status){

      case "approved":
        return "bg-success";

      case "pending":
        return "bg-warning";

      case "rejected":
        return "bg-danger";

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

export default PropertyStatusBadge;