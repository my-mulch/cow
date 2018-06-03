const keyboard = new Keyboard()
const mouse = new Mouse()
const scene = new Scene()

const cube = new Solid(
    vertices = [
        new Point(100, 100, 100),
        new Point(100, 100, 200),
        new Point(100, 200, 100),
        new Point(100, 200, 200),
        new Point(200, 100, 100),
        new Point(200, 100, 200),
        new Point(200, 200, 100),
        new Point(200, 200, 200),
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
scene.add(cube)
