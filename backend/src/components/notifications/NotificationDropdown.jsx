import NotificationItem from "./NotificationItem";

function NotificationDropdown({

  notifications,
  onRead

}) {

  return (

    <div

      className="
      card
      shadow
      position-absolute
      end-0
      mt-2
      "

      style={{
        width:"350px",
        zIndex:9999
      }}

    >

      {

        notifications.length === 0

        ?

        <div
          className="p-3"
        >

          No Notifications

        </div>

        :

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

export default NotificationDropdown;