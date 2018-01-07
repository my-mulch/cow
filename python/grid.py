import numpy as np
import matplotlib.pyplot as plt

x = np.arange(-1,2,1)
y = np.arange(-1,2,1)

x_g, y_g = np.meshgrid(x,y)

grid = np.vstack([x_g.ravel(), y_g.ravel()]).T

