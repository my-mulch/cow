import App from './app'
import bb from 'big-box'

import Mouse from './io/mouse'
import FileDrop from './io/drop'
import Keyboard from './io/keyboard'
import Camcorder from './io/camcorder'
import Microphone from './io/microphone'

import WebGlEngine from './gl/engine'
import WebGlProgram from './gl/program'

window.bb = bb

window.gl = new WebGlEngine({
    runtimes: {
        livefeed: document.all.livefeed.getContext('webgl'),
        backfeed: document.all.backfeed.getContext('webgl'),
    }
})

window.app = new App({
    dom: document.all,
    mouse: new Mouse({
        env: { livefeed: document.all.livefeed }
    }),
    keyboard: new Keyboard({
        env: { window }
    }),
    filedrop: new FileDrop({
        env: { livefeed: document.all.livefeed }
    }),
    microphone: new Microphone({
        media: { audio: true },
        env: { audiofeed: document.all.audiofeed }
    }),
    camcorder: new Camcorder({
        size: [20, 20],
        media: { video: true },
        env: {
            backfeed: document.all.backfeed,
            videofeed: document.all.videofeed,
            livefeed: document.all.livefeed
        },
    })
})
