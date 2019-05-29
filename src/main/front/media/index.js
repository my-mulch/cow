import ParmesanImage from './types/image'
import ParmesanVideo from './types/video'

import ParmesanFileDrop from './devices/filedrop'

export default class ParmesanMedia {
    constructor(targets) {
        this.media = []

        this.on = this.on.bind(this)

        this.filedrop = new ParmesanFileDrop({
            export: this.on,
            target: targets.filedrop,
        })
    }

    on(data) {
        switch (data.type) {
            case 'image/jpeg':
                return this.media.push(new ParmesanImage(data))

            case 'video/quicktime':
                return this.media.push(new ParmesanVideo(data))
        }
    }
}
