from flask import Flask
from flask_socketio import SocketIO, emit

from loader.parse import load_scene
from transforms.rotate import rotX, rotY, rotZ
from transforms.translate import translate

app = Flask(__name__)
socketio = SocketIO(app)


@socketio.on('rotateX')
def rotateX(json_scene):
    scene = load_scene(json_scene)
    emit('rotateX', scene)
