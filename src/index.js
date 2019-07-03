import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app

window.vertices = bb.randint({ low: 0, high: 256, shape: [500000, 3], type: Uint8ClampedArray })
window.colors = vertices
window.sizes = bb.ones({ shape: [500000, 1] }).multiply({ with: 1 })

app.graphics.plot({ vertices, colors, sizes })
