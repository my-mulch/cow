import App from './app'

window.app = new App({
    dom: {
        livefeed: document.getElementById('live-feed'),
        backfeed: document.getElementById('back-feed'),
        video: document.getElementById('video'),
        audio: document.getElementById('audio'),
    }
})
