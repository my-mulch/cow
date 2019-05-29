import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app

const vertices = bb.rand({ shape: [10, 3] }).subtract({ with: 0.5 }).multiply({ with: 3 })
vertices.slice({ with: [':', ':2'] }).set({ with: 0 })

const colors = bb.zeros({ shape: [1000, 3], type: Uint8ClampedArray }).set({ with: [255, 0, 0] })

const sizes = bb.ones({ shape: [1000, 1] }).multiply({ with: 10 })

app.graphics.plot({ vertices, colors, sizes })
