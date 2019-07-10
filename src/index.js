import bb from 'big-box'
import app from './app'
import myio from 'myio'

window.bb = bb
window.app = app
window.myio = myio

export default (async function () {
    // window.img = await myio.imread('http://localhost:8000/Users/trumanpurnell/Desktop/yelp.jpg')
    // window.vertices = img.reshape({ shape: [-1, 4] })
    // window.colors = vertices
    // window.sizes = bb
    //     .ones({ shape: [img.shape[0] * img.shape[1], 1] })
    //     .multiply({ with: 3 })

    const vertices = bb.randint({ low: 0, high: 256, shape: [5000000, 3], type: Uint8ClampedArray })
    const colors = vertices
    const sizes = bb
        .ones({ shape: [5000000, 1] })
        .multiply({ with: 1 })

    app.graphics.plot({ vertices, colors, sizes })

})()


