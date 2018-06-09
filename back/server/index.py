
from flask import Flask
from flask_socketio import SocketIO, emit

from loader.parse import load_scene
from transforms.rotate import rotX, rotY, rotZ, rotate_in_place

app = Flask(__name__)
socketio = SocketIO(app)


@socketio.on('rotateX')
def rotateX(json_scene):
    # rotX_in_place = t_initial.dot(rotX(np.pi / 1024).dot(t_origin))
    # print(json.dumps(shape.dot(rotX_in_place.T).tolist()))

    scene = load_scene(json_scene)
    print(scene[2])
