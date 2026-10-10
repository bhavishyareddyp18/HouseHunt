function PropertyStatusBadge({

  status

}) {

  let badgeClass =
    "secondary";

  if(status === "approved")
    badgeClass = "success";

  if(status === "pending")
    badgeClass = "warning";

  if(status === "rejected")
    badgeClass = "danger";

  return (

    <span
      className={`
      badge
      bg-${badgeClass}
      `}
    >

      {status}

    </span>

  );
}

export default PropertyStatusBadge;