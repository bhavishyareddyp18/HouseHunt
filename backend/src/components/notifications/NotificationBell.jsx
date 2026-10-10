import {
  useState
} from "react";

import {
  FaBell
} from "react-icons/fa";

import NotificationDropdown from "./NotificationDropdown";

import NotificationBadge from "./NotificationBadge";

import {
  useNotifications
} from "../../context/NotificationContext";

function NotificationBell() {

  const [

    open,

    setOpen

  ] = useState(false);

  const {

    notifications,
    unreadCount

  } = useNotifications();

  return (

    <div
      className="
      position-relative
      "
    >

      <button

        className="
        btn
        "

        onClick={() =>
          setOpen(
            !open
          )
        }

      >

        <FaBell size={22} />

        <NotificationBadge
          count={
            unreadCount
          }
        />

      </button>

      {

        open && (

          <NotificationDropdown

            notifications={
              notifications
            }

            onRead={() => {}}

          />

        )

      }

    </div>

  );
}

export default NotificationBell;