
// Vertex shader program
const VSHADER_SOURCE =
  `void main() { 
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);  
    gl_PointSize = 10.0;                     
  }`

// Fragment shader program
const FSHADER_SOURCE =
  `void main() { 
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);  
  }`


// Retrieve <canvas> element
const canvas = document.getElementById('glcanvas');

// Get the rendering context for WebGL
const gl = getWebGLContext(canvas);

// Initialize shaders
initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)

// Specify the color for clearing <canvas>
gl.clearColor(0.0, 0.0, 0.0, 1.0);

// Clear <canvas>
gl.clear(gl.COLOR_BUFFER_BIT);

// Draw a point
gl.drawArrays(gl.POINTS, 0, 1);

