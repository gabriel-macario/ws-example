const { ChatMessage } = require('./enums/eventTypes');

module.exports = (io, socket) => {
    const sendChatMessage = (message) => {
        io.emit(ChatMessage, message);
    }

    socket.on(ChatMessage, sendChatMessage);
}