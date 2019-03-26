import App from './app'
import bb from 'big-box'

window.bb = bb
window.app = new App({ dom: document.all })

window.app.dom.livefeed.width = window.innerWidth
window.app.dom.livefeed.height = window.innerHeight

window.addEventListener('resize', function () {
    window.app.dom.livefeed.width = window.innerWidth
    window.app.dom.livefeed.height = window.innerHeight
})

window.app.dom.media.hidden = true

window.app.dom.curtain.addEventListener('click', function () {
    window.app.dom.media.hidden = !window.app.dom.media.hidden
})
