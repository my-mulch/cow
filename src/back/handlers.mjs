import path from 'path'
import fs from 'fs'

import __dirname from './meta'

export default class ServerHandlers {
    static sendIndex(req, res, next) { res.sendFile(path.join(__dirname, "../../dist/index.html")) }
    static writeBuffer(req, res, next) { fs.writeFile('/Users/tru/Desktop/buffer.mkv', req.body, console.error) }
}