from transforms.compose import compose
import numpy as np

m0 = np.random.randn(3, 3)
m1 = np.random.randn(3, 3)
m2 = np.random.randn(3, 3)

assert np.array_equal(m0.dot(m1).dot(m2), compose(m0, m1, m2))
