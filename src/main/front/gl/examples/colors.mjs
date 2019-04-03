
gl
    .program()
    .compile({
        fragment:
            'varying vec4 v_Color;\n' +
            'void main() {\n' +
            '  gl_FragColor = v_Color;\n' +
            '}',
        vertex:
            'attribute vec4 a_Position;\n' +
            'attribute vec4 a_Color;\n' +
            'uniform mat4 u_ViewMatrix;\n' +
            'varying vec4 v_Color;\n' +
            'void main() {\n' +
            '  gl_Position = u_ViewMatrix * a_Position;\n' +
            '  v_Color = a_Color;\n' +
            '}\n'
    })
    .link()
    .feed([{
        box: bb.array({
            with: [
                // Vertex coordinates and color
                [0.0, 0.5, -0.4, 0.4, 1.0, 0.4],
                [-0.5, -0.5, -0.4, 0.4, 1.0, 0.4],
                [0.5, -0.5, -0.4, 1.0, 0.4, 0.4],

                [0.5, 0.4, -0.2, 1.0, 0.4, 0.4],
                [-0.5, 0.4, -0.2, 1.0, 1.0, 0.4],
                [0.0, -0.6, -0.2, 1.0, 1.0, 0.4],

                [0.0, 0.5, 0.0, 0.4, 0.4, 1.0],
                [-0.5, -0.5, 0.0, 0.4, 0.4, 1.0],
                [0.5, -0.5, 0.0, 1.0, 0.4, 0.4],
            ]
        }),
        meta: { 'a_Position': [':', ':3'], 'a_Color': [':', '3:'] }
    }])

    .draw({ mode: gl.POINTS })













