import Solid from './display/solid'
import Point from './display/point'

const cube = new Solid(
    [
        new Point(100, 100, 100, 1),
        new Point(100, 100, 200, 1),
        new Point(100, 200, 100, 1),
        new Point(100, 200, 200, 1),
        new Point(200, 100, 100, 1),
        new Point(200, 100, 200, 1),
        new Point(200, 200, 100, 1),
        new Point(200, 200, 200, 1),
    ],
    [
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
        [6, 7],
    ]
)

const triangle = new Solid(
    [
        new Point(400, 400, 0, 1),
        new Point(300, 400, 0, 1),
        new Point(400, 500, 0, 1),
    ],
    [
        [1, 2],
        [2, 0],
        [0, 1],
    ]
)

const line = new Solid(
    [
        new Point(240, 375, 0, 1),
        new Point(240, 600, 0, 1),
    ],
    [
        [0, 1],
    ]
)