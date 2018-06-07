import numpy as np
import re


def parse_coordinates(coord_string):
    regex = 'coordinates":\[(.*?)\]'
    return np.array([np.fromstring(match.groups()[0], sep=',')
                     for match in re.finditer(regex, coord_string)])
