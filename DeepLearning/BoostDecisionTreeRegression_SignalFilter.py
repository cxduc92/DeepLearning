print(__doc__)
# Boost Decision Tree Regression
# importing necessary libraries
import numpy as np
from numpy import loadtxt
import matplotlib.pyplot as plt
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import AdaBoostRegressor


#######################################
# Set up prediction parameters

#######################################
n_pred = 500
n_validation_samples = 200 

#######################################
# Read/ preprocess or generate data
data = loadtxt("NasdaqStock.txt", comments="#", delimiter=",", unpack=False)
data_array = np.array(data)

# Load the dataset
[row,col] = data_array.shape
X = np.array([0])
y = np.array([0])
for i in range(0,row):
    X_append_element = np.array([data_array[i,0]])
    y_append_element = np.array([data_array[i,1]])
    X = np.append(X,X_append_element,axis=0)
    y = np.append(y,y_append_element,axis=0)
    i+=1

X = np.delete(X,0)
X = X.reshape(-1,1)
y = np.delete(y,0)

X_train = X[:-n_validation_samples]# take all the samples as train data except the last n_test_samples samples
X_validation = X[-n_validation_samples:]# take the last 2 samples a test data
y_train = y[:-n_validation_samples]
y_validation = y[-n_validation_samples:]

#######################################

# Fit regression model
rng = np.random.RandomState(1)
regr = AdaBoostRegressor(DecisionTreeRegressor(max_depth=4),
                          n_estimators=n_pred, random_state=rng)

regr.fit(X, y)

# Predict
y_pred = regr.predict(X)

# Plot the results
plt.figure()
plt.scatter(X, y, c="b", label="Nasdaq training data")
plt.plot(X, y_pred, c="r",label="estimation data", linewidth=2)
plt.xlabel("Time")
plt.ylabel("Price($)")
plt.title("Stock data")
plt.legend()

plt.show()