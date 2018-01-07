class Point {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

const width = 1440
const height = 776

const points = []

for (let i = 0; i < 8; i++)
    points[i] = new Point(Math.random(), Math.random(), Math.random())

    

