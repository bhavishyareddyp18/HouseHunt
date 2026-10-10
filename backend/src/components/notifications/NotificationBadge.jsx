function NotificationBadge({

  count

}) {

  if(count === 0)
    return null;

  return (

    <span

      className="
      badge bg-danger
      rounded-pill
      "

    >

      {count}

    </span>

  );
}

export default NotificationBadge;