import bb from 'big-box'

export default {
    GRAPHICS_ENGINE_2D: '2d',
    GRAPHICS_ENGINE_3D: '3d',

    CONTEXT_2D: '2d',
    CONTEXT_WEB_GL: 'webgl',

    HUD_FONT: '18px serif',
    HUD_COLOR: 'rgba(255, 255, 255, 1)',
    HUD_TEXT_LOCATION: [10, 50],
    HUD_Z_INDEX: 1,
    HUD_POSITION_STYLE: 'absolute',

    CANVAS_Z_INDEX: 0,
    CANVAS_POSITION_STYLE: 'absolute',
    CANVAS_STROKE_COLOR: 'white',
    CANVAS_FILL_COLOR: 'rgba(255, 165, 0, 1)',

    BINDINGS: {
        'o': { name: 'zoom', args: [true] },
        'i': { name: 'zoom', args: [false] },

        'ArrowUp': { name: 'pan', args: [0] },
        'ArrowDown': { name: 'pan', args: [1] },
        'ArrowLeft': { name: 'pan', args: [2] },
        'ArrowRight': { name: 'pan', args: [3] },
    },


    VERTEX_SOURCE:
        'attribute float a_PointSize;\n' +
        'attribute vec4 a_Position;\n' +
        'attribute vec4 a_Color;\n' +
        'uniform mat4 u_ViewMatrix;\n' +
        'uniform mat4 u_ProjMatrix;\n' +
        'varying vec4 v_Color;\n' +
        'void main() {\n' +
        '  gl_PointSize = a_PointSize;\n' +
        '  gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;\n' +
        '  v_Color = a_Color;\n' +
        '}\n',

    FRAGMENT_SOURCE:
        'precision mediump float;\n' +
        'varying vec4 v_Color;\n' +
        'void main() {\n' +
        '  gl_FragColor = v_Color;\n' +
        '}\n'
    ,

    TO_VECTOR: bb.array({ with: [[1], [1], [1], [1]] }),
    UP_VECTOR: bb.array({ with: [[0], [1], [0], [1]] }),
    FROM_VECTOR: bb.array({ with: [[2], [2], [2], [1]] }),


    VIEWING_ANGLE: 30,
    ASPECT_RATIO: 1,
    NEAR: 0.1,
    FAR: 100,

    ZOOM_DELTA: 0.15,
    PAN_DELTA: Math.PI / 32,
    ACTIVE_VERTICES: 0,


    UP_DIRECTION: 0,
    DOWN_DIRECTION: 1,
    LEFT_DIRECTION: 2,
    RIGHT_DIRECTION: 3
}

