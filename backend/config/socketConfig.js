const socketIo = require("socket.io");

function sendNotification(

  io,

  userId,

  notification

){

  io.to(userId)
  .emit(

    "notification",

    notification

  );
}

module.exports = {

  initializeSocket,

  sendNotification

};

function initializeSocket(server){

  const io = socketIo(server, {

    cors:{
      origin:"*"
    }

  });

  io.on("connection",

    socket => {

      socket.on(

        "join",

        userId => {

          socket.join(userId);

        }

      );

      socket.on(

        "send-message",

        data => {

          io.to(
            data.receiver
          ).emit(

            "receive-message",

            data

          );

        }

      );

      socket.on(

        "typing",

        receiver => {

          io.to(receiver)
          .emit(
            "typing"
          );

        }

      );

    }

  );

  return io;
}

module.exports =
initializeSocket;