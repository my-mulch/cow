import ScatterMedia from '../../media/scatter'
import ImageMedia from '../../media/image'

export default class MediaManager {
    constructor(data) {
        this.source = this.introspect(data)
    }

    introspect(data) {
        for (const MediaSource of MediaManager.getSources())
            if (MediaSource.matches(data))
                return new MediaSource(data)

        return null
    }

    static getSources() {
        return [ScatterMedia, ImageMedia]
    }
}