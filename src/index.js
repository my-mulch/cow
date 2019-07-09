import bb from 'big-box'
import app from './app'
import myio from 'myio'

window.bb = bb
window.app = app
window.myio = myio

export default (async function () {
    const img = await myio.imread('http://localhost:8000/Users/trumanpurnell/Desktop/tals.jpg')

    const vertices = img.reshape({ shape: [-1, 4] })
    const colors = vertices
    const sizes = bb
        .ones({ shape: [img.shape[0] * img.shape[1], 1] })
        .multiply({ with: 7 })

    app.graphics.plot({ vertices, colors, sizes })

})()

// const vertices = bb.randint({ low: 0, high: 256, shape: [500000, 3], type: Uint8ClampedArray })
    // const sizes = bb
    //     .ones({ shape: [500000, 1] })
    //     .multiply({ with: 1 })