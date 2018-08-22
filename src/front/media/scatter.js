export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    async render(scene, layout, playback) {
        scene.context.fillRect(/* Put data in me! */)
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}