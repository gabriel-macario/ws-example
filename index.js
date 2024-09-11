const { Server } = require("socket.io");

const registerChatHandlers = require('./chatHandlers');

const io = new Server(3000, {
    cors: {
        origin: "http://localhost:5173"
    }
});

const onConnection = ( socket ) => {
    console.log(`${socket.id} connected!`);

    registerChatHandlers(io, socket);

    socket.on("disconnect", (reason) => {
        console.log(`${socket.id} disconnected! Reason: ${reason}`);
    })

}

io.on("connection", onConnection);