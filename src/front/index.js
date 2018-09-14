import Scene from './ui/scene'
import Pod from './ui/pod'
import App from './ui/app'

import Socket from './io/socket'
import FileDrop from './io/drop'
import Camera from './io/camera'

import Shape from './ui/primitives/geometry'
import nd from 'multi-dim'


new App({
    socket: new Socket({ port: 3000, host: 'localhost' }),
    fileDrop: new FileDrop({ zone: document.getElementById('canvas') }),
    camera: new Camera({ screen: document.getElementById('video') }),
    scene: new Scene({
        canvas: document.getElementById('canvas'),
        pods: [new Pod({
            data: nd.random.randint(0, 256, [100, 30, 4]).set(':', ':', 3)(1),
            layout: {
                origin: nd.array([600, 400, 0, 1]),
                size: nd.array([500, 500, 500, 1]),
                shape: Shape.cuboid
            },
            playback: {
                animate: true,
                repeat: false,
                alive: true,
                animationPause: 0,
            },
            display: {
                border: true
            }
        })]
    }),
})