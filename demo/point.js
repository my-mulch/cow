
const vectors = new Float32Array(1 * 10 * 3 * 3 * 2)

for (let i = 0; i < 1; i++)
    vectors.set(new app.shapes.Cylinder([0, 0, 0], [0, 1, 0.000001]).vertices, i * 10 * 3 * 3 * 2)


const line = bb.tensor(vectors).reshape([-1, 3])


app.plot({
    vertices: line,
    colors: bb.ones(line.header.shape),
    sizes: bb.ones(line.header.shape),
    mode: app.webgl.context.TRIANGLES
})


const k = 8.9875517873681764e9
const charge = 0.000000001

const charges = bb.linspace(-1, 1, 1500).reshape([-1, 1]).insert({ with: 0.000001, axes: [1], entries: [0, 1] })

const samples = bb.mesh({
    of: [
        bb.linspace(-1.3, 1.3, 3).toRawFlat(),
        bb.linspace(-1.3, 1.3, 3).toRawFlat(),
        bb.linspace(-1.3, 1.3, 3).toRawFlat()
    ]
})

let field = new Float32Array(27 * 10 * 3 * 3)

for (let j = 0, t = 0; j < 3 * 27; j += 3, t++) {
    const px = samples.data[j + 0]
    const py = samples.data[j + 1]
    const pz = samples.data[j + 2]

    let tx = 0, ty = 0, tz = 0

    for (let i = 0; i < 3 * 1500; i += 3) {

        const cx = charges.data[i + 0]
        const cy = charges.data[i + 1]
        const cz = charges.data[i + 2]

        const dx = px - cx
        const dy = py - cy
        const dz = pz - cz

        const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2)
        const force = (k * charge) / (distance ** 2)

        tx += dx * force
        ty += dy * force
        tz += dz * force
    }

    const norm = 1 / Math.sqrt(tx ** 2 + ty ** 2 + tz ** 2)

    tx *= norm * 0.1
    ty *= norm * 0.1
    tz *= norm * 0.1

    const vector = new app.shapes.Cone([px, py, pz], [px + tx, py + ty, pz + tz])

    field.set(vector.vertices, t * vector.vertices.length)
}

field = bb.tensor(field).reshape([-1, 3])

app.plot({
    vertices: field,
    colors: bb.tensor([[1], [1], [0]]).reshape([1, 3]).repeat({ axes: [0], count: field.header.shape[0] }),
    sizes: bb.ones(field.header.shape),
    mode: app.webgl.context.TRIANGLES
})

app.plot({
    vertices: bb.tensor([
        [[0], [0], [-1]],
        [[0], [0], [1]],

        [[0], [1], [0]],
        [[0], [-1], [0]],

        [[-1], [0], [0]],
        [[1], [0], [0]],
    ]),
    colors: bb.tensor([
        [[1], [0], [0]],
        [[1], [0], [0]],

        [[1], [0], [0]],
        [[1], [0], [0]],

        [[1], [0], [0]],
        [[1], [0], [0]],
    ]),
    sizes: bb.ones([6, 1]),
    mode: app.webgl.context.LINES,
})

app.render()
