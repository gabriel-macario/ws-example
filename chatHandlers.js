const { ChatMessage } = require('./enums/eventTypes');

module.exports = (io, socket) => {
    const sendChatMessage = ({
        message,
        user
    }) => {
        io.emit(ChatMessage, {
            message,
            user
        });
    }

    socket.on(ChatMessage, sendChatMessage);
}