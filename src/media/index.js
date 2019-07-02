import ParmesanImage from './types/image'
import ParmesanVideo from './types/video'

import ParmesanFileDrop from './sources/filedrop'

export default class ParmesanMedia extends Array {
    constructor() {
        super()

        this.filedrop = new ParmesanFileDrop({
            export: this.on.bind(this)
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
