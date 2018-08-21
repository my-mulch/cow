export default class IoUtils {
    static(socketMessage) {
        const parsedMessage = JSON.parse(socketMessage)

        return [parsedMessage.rawArray, parsedMessage.arrayType]
    }
}