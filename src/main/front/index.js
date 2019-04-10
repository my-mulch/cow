import bb from 'big-box'

import ParmesanApplication from './app'
import ParmesanCamcorder from './io/camcorder'
import ParmesanMicrophone from './io/microphone'

customElements.define('parmesan-cam', ParmesanCamcorder, { extends: 'video' })
customElements.define('parmesan-mic', ParmesanMicrophone, { extends: 'audio' })
customElements.define('parmesan-app', ParmesanApplication, { extends: 'body' })

window.bb = bb
window.app = new ParmesanApplication([
    new ParmesanCanvas({
        feeds: 2,
        webgl: {},
        filedrop: {},
        mouse: {},
        keyboard: {
            ArrowUp: 'move-forward',
            ArrowDown: 'move-backward'
        }
    }),
    new ParmesanCamcorder({
        pixels: [20, 20]
    }),
    new ParmesanMicrophone({
        bitrate: 44100
    })
])

document
    .querySelector('html')
    .appendChild(window.app)
