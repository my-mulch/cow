import App from './app'
import bb from 'big-box'

import Mouse from './io/mouse'
import FileDrop from './io/drop'
import Keyboard from './io/keyboard'
import Camcorder from './io/camcorder'
import Microphone from './io/microphone'

const { livefeed, backfeed, audiofeed, videofeed, media } = document.all

window.bb = bb
window.app = new App({
    dom: document.all,
    mouse: new Mouse({ env: livefeed }),
    keyboard: new Keyboard({ env: window }),
    filedrop: new FileDrop({ env: livefeed }),
    microphone: new Microphone({
        media: { audio: true },
        env: audiofeed
    }),
    camcorder: new Camcorder({
        size: [20, 20],
        media: { video: true },
        env: { backfeed, videofeed, livefeed },
    })
})

livefeed.width = window.innerWidth
livefeed.height = window.innerHeight

window.addEventListener('resize', function () {
    livefeed.width = window.innerWidth
    livefeed.height = window.innerHeight
})

media.hidden = true
curtain.addEventListener('click', function () {
    media.hidden = !media.hidden
})
