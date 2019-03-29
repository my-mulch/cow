const vertex = `
attribute vec4 a_Position;
attribute vec4 a_Color;
varying vec4 v_Color;
void main() {
  gl_Position = a_Position;
  gl_PointSize = 10.0;
  v_Color = a_Color;
}`

const fragment = `
#ifdef GL_ES
precision mediump float;
#endif
varying vec4 v_Color;
void main() {
  gl_FragColor = v_Color;
}`


gl.run({
    source: { vertex, fragment },
    meta: {
        data: new Float32Array([
            0.0, 0.5, 1.0, 0.0, 0.0,
            -0.5, -0.5, 0.0, 1.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 1.0,
        ]),
        count: 3,
        mode: gl.POINTS,
        usage: gl.STATIC_DRAW,
        buffer: gl.ARRAY_BUFFER,
        attributes: [
            {
                name: 'a_Position',
                size: 2,
                type: gl.FLOAT,
                normalized: false,
                stride: 4 * 5,
                offset: 0
            },
            {
                name: 'a_Color',
                size: 3,
                type: gl.FLOAT,
                normalized: false,
                stride: 4 * 5,
                offset: 4 * 2
            }
        ]
    }
})
