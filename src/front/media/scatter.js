export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    async render(scene, format, playback) {
        scene.context.fillRect(/* Put data in me! */)
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}