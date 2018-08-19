import MediaSources from '../../media/sources'

export default class MediaManager {
    constructor(ndarray) {
        this.delay = 0
        this.source = this.introspect(ndarray)
    }

    introspect(ndarray) {
        for (const MediaSource of MediaSources)
            if (MediaSource.matches(ndarray))
                return new MediaSource(ndarray)

        return null
    }
}