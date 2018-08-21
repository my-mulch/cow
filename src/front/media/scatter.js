export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray.toGenerator()
    }

    async render(scene) {
        scene.context.fillRect(/* Put data in me! */)
    }

    static matches(ndArray) {
        return ndArray.data instanceof Float64Array
    }
}