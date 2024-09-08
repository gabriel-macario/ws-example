const { WebSocket, WebSocketServer } = require("ws");
const http = require("http");
const uuidv4 = require("uuid").v4;

const wss = new WebSocketServer({ port: 8080 });

const clients = {};

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