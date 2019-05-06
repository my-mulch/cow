import bb from 'big-box'

import GraphicsBox from '../box'

export default [
    new GraphicsBox({
        mode: 'LINES',
        contents: bb.array({
            with: [
                // x-axis
                [-1.0, 0, 0, 0, 0, 1],
                [1.0, 0, 0, 0, 0, 1],
                // y-axis
                [0, -1.0, 0, 0, 1, 0],
                [0, 1.0, 0, 0, 1, 0],
                // z-axis
                [0, 0, -1.0, 1, 0, 0],
                [0, 0, 1.0, 1, 0, 0],
            ],
        })
    })
]