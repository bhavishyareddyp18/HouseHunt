function NotificationItem({

  notification,
  onRead

}) {

  return (

    <div

      className={`
      p-3
      border-bottom
      ${
        notification.read
        ? ""
        : "bg-light"
      }
      `}

      onClick={() =>
        onRead(
          notification._id
        )
      }

      style={{
        cursor:"pointer"
      }}

    >

      <div>

        {
          notification.message
        }

      </div>

      <small
        className="
        text-muted
        "
      >

        {
          notification.createdAt
        }

      </small>

    </div>

  );
}

export default NotificationItem;