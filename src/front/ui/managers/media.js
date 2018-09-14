import MediaSources from '../../media/sources'

export default class MediaManager {
    static getMediaSource(data) {
        return new MediaSources.scatter(data)
    }
}