"""
Very simple HTTP server in python for logging requests
Usage::
    ./server.py [<port>]
"""
from http.server import BaseHTTPRequestHandler, HTTPServer
import numpy as np
import logging
import re


def parse_coordinates(coord_string):
    regex = 'coordinates":\[(.*?)\]'
    return np.array([np.fromstring(match.groups()[0], sep=',')
                     for match in re.finditer(regex, coord_string)])


def center_and_back(coordinates):
    x, y, z, _ = np.mean(coordinates[:, :-1], axis=1)

    center = np.array([
        [1, 0, 0, -x],
        [0, 1, 0, -y],
        [0, 0, 1, -z],
        [0, 0, 0, 1]
    ])

    return center, np.linalg.inv(center)


def rotY(theta):
    c = np.cos(theta)
    s = np.sin(theta)

    return np.array([
        [c, 0, s, 0],
        [0, 1, 0, 0],
        [-s, 0, c, 0],
        [0, 0, 0, 1]
    ])


class S(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_GET(self):
        logging.info("GET request,\nPath: %s\nHeaders:\n%s\n",
                     str(self.path), str(self.headers))
        self._set_response()
        self.wfile.write("{}".format(np.random.randn(2, 2)).encode('utf-8'))

    def do_POST(self):
        # <--- Gets the size of data
        content_length = int(self.headers['Content-Length'])
        # <--- Gets the data itself
        post_data = self.rfile.read(content_length)
        # logging.info("POST request,\nPath: %s\nHeaders:\n%s\n\nBody:\n%s\n",
        #              str(self.path), str(self.headers), post_data.decode('utf-8'))

        coords = parse_coordinates(post_data.decode('utf-8'))
        center, back = center_and_back(coords.T)
        cp = center.dot(coords.T)
        rp = rotY(np.pi / 128).dot(cp)
        bp = back.dot(rp)

        self._set_response()
        self.wfile.write("{}".format(bp.T).encode('utf-8'))


def run(server_class=HTTPServer, handler_class=S, port=8080):
    logging.basicConfig(level=logging.INFO)
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    logging.info('Starting httpd...\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    logging.info('Stopping httpd...\n')


if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()
