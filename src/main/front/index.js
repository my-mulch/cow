import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app




window.vertices = bb
    .array({
        with: [
            [0, 0, 0],
            [0, 0, 1],
            // [0, 0, -1],

            [0, 0, 0],
            [0, 1, 0],
            // [0, -0.9, 0],

            [0, 0, 0],
            [1, 0, 0],
            // [-1, 0, 0],
        ]
    })

window.colors = bb
    .zeros({ shape: vertices.shape, type: Uint8ClampedArray })
    .set({ with: [255, 255, 255] })

window.sizes = bb
    .ones({ shape: [vertices.size, 1] })
    .multiply({ with: 10 })

app.graphics.plot({ vertices, colors, sizes })


/** Z-Axis */
window.vertices1 = bb
    .rand({ shape: [10000, 3] })
    .subtract({ with: 0.5 })
    .multiply({ with: 10 })

window.vertices1
    .slice({ with: [':', ':2'] })
    .set({ with: 0 })

window.colors1 = bb
    .zeros({ shape: [10000, 3], type: Uint8ClampedArray })
    .set({ with: [255, 0, 0] })

window.sizes1 = bb
    .ones({ shape: [10000, 1] })
    .multiply({ with: 1 })

app.graphics.plot({ vertices: vertices1, colors: colors1, sizes: sizes1 })

/** X-Axis */
window.vertices2 = bb
    .rand({ shape: [10000, 3] })
    .subtract({ with: 0.5 })
    .multiply({ with: 10 })

window.vertices2
    .slice({ with: [':', '1:3'] })
    .set({ with: 0 })

window.colors2 = bb
    .zeros({ shape: [10000, 3], type: Uint8ClampedArray })
    .set({ with: [0, 255, 0] })

window.sizes2 = bb
    .ones({ shape: [10000, 1] })
    .multiply({ with: 1 })

app.graphics.plot({ vertices: vertices2, colors: colors2, sizes: sizes2 })

/** Y-Axis */
window.vertices3 = bb
    .rand({ shape: [10000, 3] })
    .subtract({ with: 0.5 })
    .multiply({ with: 10 })

window.vertices3
    .slice({ with: [':', '0'] })
    .set({ with: 0 })

window.vertices3
    .slice({ with: [':', '2'] })
    .set({ with: 0 })

window.colors3 = bb
    .zeros({ shape: [10000, 3], type: Uint8ClampedArray })
    .set({ with: [0, 0, 255] })

window.sizes3 = bb
    .ones({ shape: [10000, 1] })
    .multiply({ with: 3 })

app.graphics.plot({ vertices: vertices3, colors: colors3, sizes: sizes3 })
