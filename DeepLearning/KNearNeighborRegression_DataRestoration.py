print(__doc__)

import numpy as np
from numpy import loadtxt
import matplotlib.pyplot as plt
from sklearn import neighbors

n_validation_samples = 200 

#######################################
# Read/ preprocess or generate data
data = loadtxt("NasdaqStock.txt", comments="#", delimiter=",", unpack=False)
data_array = np.array(data)

# Load the dataset
[row,col] = data_array.shape
x = np.array([[0]])
y = np.array([0])
for i in range(1100,1200):
    x_append_element = np.array([[data_array[i,0]]])
    y_append_element = np.array([data_array[i,1]])
    x = np.append(x,x_append_element,axis=0)
    y = np.append(y,y_append_element,axis=0)
    i+=1

x = np.delete(x,0,0)
y = np.delete(y,0)
T = np.linspace(1100, 1200, 500)[:, np.newaxis]
#############################################################################

# Fit regression model
n_neighbors = 5
knn = neighbors.KNeighborsRegressor(n_neighbors, weights='distance')
y_ = knn.fit(x, y).predict(T)

plt.scatter(x, y, color='darkorange', label='data')
plt.plot(T, y_, color='navy', label='prediction')
plt.axis('tight')
plt.legend()
plt.title("Restore missing data points KNeighborsRegressor" )
plt.tight_layout()
plt.show()