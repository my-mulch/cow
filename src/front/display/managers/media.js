import ScatterMedia from '../../media/scatter'
import ImageMedia from '../../media/image'

export default class MediaManager {
    constructor(ndarray) {
        this.delay = 0
        this.source = this.introspect(ndarray)
    }

    introspect(ndarray) {
        for (const MediaSource of MediaManager.getSources())
            if (MediaSource.matches(ndarray))
                return new MediaSource(ndarray)

        return null
    }

    static getSources() {
        return [ScatterMedia, ImageMedia]
    }
}