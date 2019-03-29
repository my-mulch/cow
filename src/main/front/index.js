import App from './app'
import bb from 'big-box'

import Mouse from './io/mouse'
import FileDrop from './io/filedrop'
import Keyboard from './io/keyboard'
import Camcorder from './io/camcorder'
import Microphone from './io/microphone'

import WebGlEngine from './gl/engine'

window.bb = bb

window.app = new App({
    dom: document.all,
    sources: {
        mouse: new Mouse({
            target: document.all.mainstage
        }),
        filedrop: new FileDrop({
            target: document.all.mainstage
        }),
        keyboard: new Keyboard({
            target: window
        }),
        microphone: new Microphone({
            media: { audio: true },
            feed: document.all.audiofeed
        }),
        camcorder: new Camcorder({
            media: { video: true },
            dimensions: [20, 20], // pixels
            feed: document.all.videofeed,
            buffer: document.all.backstage
        })
    }
})

window.gl = new WebGlEngine({ target: document.all.mainstage })
