import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app

const vertices = bb.randint({
    low: 0, high: 255, shape: [1000000, 3], type: Uint8ClampedArray
})

app.graphics.plot({ vertices, colors: vertices })
