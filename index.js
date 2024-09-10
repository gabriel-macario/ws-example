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
/*
wss.on("connection", function (ws) {
    const userId = uuidv4();
    console.log(`${userId } connected!`);

    clients[userId] = ws;
    ws.on("error", console.error);

    ws.on("message", function message(data) {
        console.log("received: %s", data);
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        })
    })

    ws.on('close', () => {
        console.log(`${userId} disconnected!`);
    })
})
*/