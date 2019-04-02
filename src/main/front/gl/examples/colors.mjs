
gl
    .compile({
        fragment:
            'void main() {\n' +
            '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
            '}\n',
        vertex:
            'attribute vec4 a_Position;\n' +
            'attribute float a_PointSize;\n' +
            'void main() {\n' +
            '  gl_Position = a_Position;\n' +
            '  gl_PointSize = a_PointSize;\n' +
            '}'
    })

    .buffer({
        buffers: [
            {
                type: gl.ARRAY_BUFFER,
                usage: gl.STATIC_DRAW,
                data: new Float32Array([10.0, 20.0, 30.0])
            },
            {
                type: gl.ARRAY_BUFFER,
                usage: gl.STATIC_DRAW,
                data: new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5])
            }
        ],
        attributes: [
            {
                name: 'a_Position',
                size: 2,
                type: gl.FLOAT,
                normalized: false,
                stride: 0,
                offset: 0
            },
            {
                name: 'a_PointSize',
                size: 3,
                type: gl.FLOAT,
                normalized: false,
                stride: 0,
                offset: 0
            }
        ]
    })

    .draw({
        points: 3,
        mode: gl.POINTS,
        clear: [
            gl.COLOR_BUFFER_BIT
        ]
    })












