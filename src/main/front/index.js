import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app

window.vertices = bb.array({
    with: [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ]
})

window.colors = bb.array({
    with: [
        [255, 255, 255],
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
    ],
    type: Uint8ClampedArray
})

window.sizes = bb
    .ones({ shape: [vertices.size, 1] })
    .multiply({ with: 10 })

app.graphics.plot({ vertices, colors, sizes })

