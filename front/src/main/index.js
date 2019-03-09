import App from './app'
import Scene from './ui/scene'

new App({
    scene: new Scene({
        canvas: document.getElementById('canvas')
    })
})
