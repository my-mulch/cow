export default class IoUtils {
    static parseSocketMessage(socketMessage) {
        const parsedMessage = JSON.parse(socketMessage)

        return [parsedMessage.rawArray, parsedMessage.arrayType]
    }
}