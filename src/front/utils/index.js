export default {
    parseSocketMessage: function (socketMessage) {
        const parsedMessage = JSON.parse(socketMessage)

        return [parsedMessage.rawArray, parsedMessage.arrayType]
    }
}