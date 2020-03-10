const k = 8.9875517873681764e9
const charge = 0.0001

const charges = bb.linspace(-1, 1, 1000).reshape([-1, 1]).insert({ with: 0, axes: [1], entries: [0, 1] })

const samples = bb.mesh({
    of: [
        bb.linspace(-1, 1, 10).toRawFlat(),
        bb.linspace(-1, 1, 10).toRawFlat(),
        bb.linspace(-1, 1, 10).toRawFlat()
    ]
})

const field = new Float32Array(1000 * 10 * 3 * 3)

for (let j = 0, t = 0; j < 3000; j += 3, t++) {
    const px = samples.data[j + 0]
    const py = samples.data[j + 1]
    const pz = samples.data[j + 2]

    let tx = 0, ty = 0, tz = 0

    for (let i = 0; i < 3000; i++) {

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

    const vector = new Cone([px, py, pz], [px + tx, py + ty, pz + tz])

    field.set(vector.vertices, t * vector.vertices.length)
}
