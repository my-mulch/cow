import path from 'path'
import fs from 'fs'

import __dirname from '../../meta'

export default class ServerHandlers {
    static listen(error) {
        if (error) console.error(error)

        console.log('Server listening')
    }

    static sendIndex(req, res, next) {
        res.sendFile(path.join(__dirname, "dist/index.html"))
    }

    static binary(...args){
        console.log(args)
    }
}