import NotificationItem from "./NotificationItem";

function NotificationCenter({

  notifications,
  onRead

}) {

  return (

    <div
      className="
      card
      p-4
      "
    >

      <h4>

        Notifications

      </h4>

      <hr />

      {

        notifications.map(
          notification => (

            <NotificationItem

              key={
                notification._id
              }

              notification={
                notification
              }

              onRead={onRead}

            />

          )
        )

      }

    </div>

  );
}

export default NotificationCenter;