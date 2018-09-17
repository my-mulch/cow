import path from 'path'
import fs from 'fs'

export default class ServerHandlers {
    static listen(error) {
        if (error) console.error(error)

        console.log('Server listening')
    }

    static sendIndex(req, res, next) {
        res.sendFile(path.join(__dirname, "../dist/index.html"))
    }
}