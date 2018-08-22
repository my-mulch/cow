import MediaSources from '../../media/sources'

export default class MediaManager {
    static getMediaSource(data) {
        for (const MediaSource of MediaSources)
            if (MediaSource.matches(data))
                return new MediaSource(data)

        return data
    }
}