export default {
    vertex:
        'attribute vec4 a_Position;\n' +
        'attribute vec4 a_Color;\n' +
        'uniform mat4 u_ViewMatrix;\n' +
        'varying vec4 v_Color;\n' +
        'void main() {\n' +
        '  gl_Position = u_ViewMatrix * a_Position;\n' +
        '  v_Color = a_Color;\n' +
        '}\n',
    fragment:
        '#ifdef GL_ES\n' +
        'precision mediump float;\n' +
        '#endif\n' +
        'varying vec4 v_Color;\n' +
        'void main() {\n' +
        '  gl_FragColor = v_Color;\n' +
        '}\n'
}
