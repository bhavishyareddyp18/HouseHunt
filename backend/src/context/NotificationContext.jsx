import {

  createContext,
  useContext,
  useEffect,
  useState

} from "react";

import { toast }
from "react-toastify";

import socket from "../socket/socket";

const NotificationContext =

  createContext();

export function NotificationProvider({

  children

}) {

  const [

    notifications,

    setNotifications

  ] = useState([]);

  useEffect(() => {

    socket.on(

      "notification",

      notification => {

        setNotifications(
          previous => [

            notification,

            ...previous

          ]
        );

        toast.info(
          notification.message
        );
      }

    );

    return () => {

      socket.off(
        "notification"
      );
    };

  }, []);

  const unreadCount =

    notifications.filter(
      notification =>
      !notification.read
    ).length;

  return (

    <NotificationContext.Provider

      value={{

        notifications,

        setNotifications,

        unreadCount

      }}

    >

      {children}

    </NotificationContext.Provider>

  );
}

export function useNotifications(){

  return useContext(
    NotificationContext
  );
}