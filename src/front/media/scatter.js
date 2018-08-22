export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    async render(scene, layout, playback) {
        playback.start()

        const shifts = this.media.min(axis = 0)
        const shift = layout.transform(
            shifts.slice(0),
            shifts.slice(1),
            shifts.slice(2))

        const scales = nd.norm(this.media.max(axis = 1))
        const scaleDown = layout.scale(
            scales.slice(0),
            scales.slice(1),
            scales.slice(2))

        const scaleUp = layout.scale(
            layout.size.X,
            layout.size.Y,
            layout.size.Z)

        const layoutMatrix = nd.compose(shift, scaleDown, scaleUp)
        const formattedMedia = layoutMatrix.dot(this.media)

        const genMedia = formattedMedia.toGenerator(axis = 0)
        let point

        while (point = genMedia.next().value) {
            if (playback.isAnimated)
                playback.animationWait()

            scene.context.fillRect(point.slice(0), point.slice(1), 1, 1)
        }
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}