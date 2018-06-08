
const ACTIONS = {
    "q": function (shape) {
        SOCKET.emit('rotateX', JSON.stringify(shape))
    },
}
