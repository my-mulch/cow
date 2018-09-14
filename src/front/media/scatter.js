import nd from 'multi-dim'

export default class ScatterMedia {
    constructor(ndArray) {
        this.media = ndArray
    }

    async render(scene, layout, playback, display) {
        const displayMedia = layout.reposition(this.media)
        const originalMedia = this.media.reshape(-1, this.media.header.shape.slice().pop())

        for (let i = 0; i < displayMedia.header.shape[0].length; i++) {
            const [x, y, z, w] = displayMedia.slice(i)
            const [r, g, b, a] = originalMedia.slice(i)

            scene.context.fillStyle = `rgb(${r}, ${g}, ${b})`
            scene.context.fillRect(x, y, 1, 1)
        }
    }
    
}