print(__doc__)
import numpy as np
import matplotlib.pyplot as plt
from numpy import loadtxt
from sklearn.linear_model import Ridge
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn import neighbors

n_test_samples = 250

#######################################
# Read/ preprocess or generate data
data = loadtxt("NasdaqStock.txt", comments="#", delimiter=",", unpack=False)
data_array = np.array(data)

# Load the dataset
[row,col] = data_array.shape
x = np.array([[0]])
y = np.array([0])
for i in range(0,row):
    x_append_element = np.array([[data_array[i,0]]])
    y_append_element = np.array([data_array[i,1]])
    x = np.append(x,x_append_element,axis=0)
    y = np.append(y,y_append_element,axis=0)
    i+=1

x = np.delete(x,0,0)
y = np.delete(y,0)
x_train = x[:-n_test_samples]# take all the samples as train data except the last n_test_samples samples
x_test = x[-n_test_samples:]# take the last n_test_samples samples a test data
y_train = y[:-n_test_samples]
y_test = y[-n_test_samples:]
T = np.linspace(0, row, 500)[:, np.newaxis]
#############################################################################

# Fit regression model
n_neighbors = 5
knn = neighbors.KNeighborsRegressor(n_neighbors, weights='distance')
y_ = knn.fit(x, y).predict(T)
#############################################################################

colors = ['teal', 'yellowgreen', 'gold']
plt.plot(T, y_, color='navy', label='KNN data restoration')
plt.scatter(x_train, y_train, color='darkorange', s=30, marker='o', label="training data")
plt.scatter(x_test, y_test, color='red', s=30, marker='o', label="test data")

for count, degree in enumerate([2, 3, 4]):
    model = make_pipeline(PolynomialFeatures(degree), Ridge())
    model.fit(x_train, y_train)
    y_pred_test = model.predict(x)
    plt.plot(x, y_pred_test, color=colors[count], linewidth=2,
             label="polynomial degree %d" % degree)

plt.xlabel("time")
plt.ylabel("stock price($)")
plt.legend(loc='upper left')
plt.title('Polynominal-Regression Price Prediction')
plt.show()