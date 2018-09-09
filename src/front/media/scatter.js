import nd from 'multi-dim'

export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    async render(scene, layout, playback) {
        // playback.start()
        const shifts = this.media.mean(0, 1)
        const shift = layout.transform(
            -shifts.slice(0),
            -shifts.slice(1),
            -shifts.slice(2))

        const maxLength = this.media.norm(2).max()
        const scaleDown = layout.scale(
            1 / maxLength,
            1 / maxLength,
            1 / maxLength)

        const scaleUp = layout.scale(
            layout.size.X,
            layout.size.Y,
            layout.size.Z)

        const moveToLocation = layout.transform(
            layout.origin.X,
            layout.origin.Y,
            0)


        const layoutMatrix = nd.dot(shift, scaleDown, scaleUp, moveToLocation)
        const formattedMedia = this.media.reshape(144000, 4).dot(layoutMatrix)

        for (let i = 0; i < 144000; i++) {
            const [x, y, z, w] = formattedMedia.slice(i).toRawArray()
            scene.context.fillRect(x, y, 1, 1)

        }

        // playback.stop()
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}