import bb from 'big-box'
import app from './app'
import myio from 'myio'

window.bb = bb
window.app = app
window.myio = myio

export default (async function () {
    const img = await myio.imread('http://localhost:8000/Users/trumanpurnell/Desktop/sox.jpg')

    const vertices = img.reshape({ shape: [-1, 4] })
    const colors = vertices
    const sizes = bb
        .ones({ shape: [img.shape[0] * img.shape[1], 1] })
        .multiply({ with: 1 })

    app.graphics.plot({ vertices, colors, sizes })

})()
