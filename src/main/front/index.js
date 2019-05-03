import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app.init()

const cube = bb.array({
    with:
        [[0, 0, 0, 1],
        [0, 0, -150, 1],
        [0, -150, 0, 1],
        [0, -150, -150, 1],
        [-150, 0, 0, 1],
        [-150, 0, -150, 1],
        [-150, -150, 0, 1],
        [-150, -150, -150, 1]]
})

app.data.push(cube)
