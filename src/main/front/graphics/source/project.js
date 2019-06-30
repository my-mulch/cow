
// Vertex shader program
var VSHADER_SOURCE =
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
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '  gl_FragColor = v_Color;\n' +
    '}\n';

export default { vertex: VSHADER_SOURCE, fragment: FSHADER_SOURCE }

