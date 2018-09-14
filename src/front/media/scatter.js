import nd from 'multi-dim'

export default class ScatterMedia {
    constructor(ndArray) {
        this.originalMedia = ndArray.reshape(-1, 4)
    }

    async render(scene, layout, playback, display) {
        if (!this.displayMedia)
            this.displayMedia = layout.reposition(this.originalMedia)

        for (let i = 0; i < this.displayMedia.header.shape[0]; i++) {
            const [x, y, z, w] = this.displayMedia.slice(i)
            const [r, g, b, a] = this.originalMedia.slice(i)

            scene.context.fillStyle = `rgb(${r}, ${g}, ${b})`
            scene.context.fillRect(x, y, 10, 10)
        }
    }

}