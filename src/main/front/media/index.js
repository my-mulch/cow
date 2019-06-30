import ParmesanImage from './types/image'
import ParmesanVideo from './types/video'

import ParmesanFileDrop from './devices/filedrop'

export default class ParmesanMedia extends Array {
    constructor(targets) {
        super()

        this.filedrop = new ParmesanFileDrop({
            export: this.on.bind(this),
            target: targets.filedrop,
        })
    }

    on(data) {
        switch (data.type) {
            case 'image/jpeg':
                return this.push(new ParmesanImage(data))

            case 'video/quicktime':
                return this.push(new ParmesanVideo(data))
        }
    }
}
