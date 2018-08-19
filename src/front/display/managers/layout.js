export default class LayoutManager {
    constructor(layout) {
        this.origin = layout.origin
        this.size = layout.size
    }
}

LayoutManager.DEFAULT_LAYOUT = {
    origin: [0, 0],
    size: {
        x: 250,
        y: 250,
        z: 250,
    },
}
