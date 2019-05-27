// Vertex shader program
var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'varying vec4 v_Color;\n' + // varying variable
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  gl_PointSize = 10.0;\n' +
    '  v_Color = a_Color;\n' +  // Pass the data to the fragment shader
    '}\n';

// Fragment shader program
var FSHADER_SOURCE =
    'precision mediump float;\n' + // Precision qualifier (See Chapter 6)
    'varying vec4 v_Color;\n' +    // Receive the data from the vertex shader
    'void main() {\n' +
    '  gl_FragColor = v_Color;\n' +
    '}\n';

export default { vertex: VSHADER_SOURCE, fragment: FSHADER_SOURCE }