import nd from 'multi-dim'

export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    async render(scene, layout, playback) {
        const shifts = this.media.mean(0, 1)
        const shift = layout.transform(
            -shifts.slice(0),
            -shifts.slice(1),
            -shifts.slice(2))

        const rotate = layout.rotate(Math.PI / 4)
        console.log(rotate.toString())
        const maxLength = this.media.norm(2).max()
        const scale = layout.scale(
            layout.size.X / maxLength,
            layout.size.Y / maxLength,
            layout.size.Z / maxLength)

        const relocate = layout.transform(
            layout.origin.X,
            layout.origin.Y,
            0)

        const layoutMatrix = nd.dot(shift, rotate, scale, relocate)
        const reshapedMedia = this.media.reshape(144000, 4)
        const formattedMedia = reshapedMedia.dot(layoutMatrix)

        for (let i = 0; i < 144000; i++) {
            const [x, y, z, w] = formattedMedia.slice(i).toRawArray()
            const [r, g, b, a] = reshapedMedia.slice(i).toRawArray()
            scene.context.fillStyle = `rgb(${r}, ${g}, ${b})`
            scene.context.fillRect(x, y, 1, 1)
        }
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}