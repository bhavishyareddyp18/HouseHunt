import {
  useEffect,
  useState
} from "react";

import notificationService
from "../../services/notificationService";

import NotificationCenter from "../../components/notifications/NotificationCenter";

function NotificationsPage() {

  const [

    notifications,

    setNotifications

  ] = useState([]);

  useEffect(() => {

    loadNotifications();

  }, []);

  const loadNotifications =
  async () => {

    const data =

      await notificationService
      .getNotifications();

    setNotifications(
      data
    );
  };

  const markRead =
  async (
    id
  ) => {

    await notificationService
    .markAsRead(id);

    loadNotifications();
  };

  return (

    <div
      className="
      container
      mt-5
      "
    >

      <NotificationCenter

        notifications={
          notifications
        }

        onRead={
          markRead
        }

      />

    </div>

  );
}

export default NotificationsPage;