import numpy as np
import matplotlib.pyploy as plt

x = np.arange(-5,5,0.1)
y = np.arange(-5,5,0.1)

x_g, y_g = np.meshgrid(x,y)

grid = np.vstack([x_g.ravel(), y_g.ravel()]).T
