const keyboard = new Keyboard(bindings = {
    'q': 'rotateX',
    'w': 'rotateY',
    'z': 'rotateZ',
})

const PORT = 5000
const DOMAIN = 'localhost'
const CONNSTR = `http://${DOMAIN}:${PORT}/`
const socket = io.connect(CONNSTR)


const scene = new Scene(keyboard = keyboard, socket = socket)

const cube = new Solid(
    vertices = [
        new Point(100, 100, 100, 1),
        new Point(100, 100, 200, 1),
        new Point(100, 200, 100, 1),
        new Point(100, 200, 200, 1),
        new Point(200, 100, 100, 1),
        new Point(200, 100, 200, 1),
        new Point(200, 200, 100, 1),
        new Point(200, 200, 200, 1),
    ],
    edges = [
        [0, 1],
        [0, 2],
        [0, 4],
        [1, 3],
        [1, 5],
        [2, 3],
        [2, 6],
        [3, 7],
        [4, 5],
        [4, 6],
        [5, 7],
        [6, 7]
    ]
)

