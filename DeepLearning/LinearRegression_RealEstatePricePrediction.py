print(__doc__)
###########################################################
# Linear Regression
###########################################################

from numpy import loadtxt
import numpy as np
import matplotlib.pyplot as plt
from sklearn import linear_model
from sklearn.metrics import mean_squared_error, r2_score
    
#######################################
# Read/ preprocess or generate data
data = loadtxt("ex1data.txt", comments="#", delimiter=",", unpack=False)
data_array = np.array(data)

# Load the dataset
[row,col] = data_array.shape
X = np.array([[0,0]])
y = np.array([0])
for i in range(0,row):
    X_append_element = np.array([[1, data_array[i,0]]])
    y_append_element = np.array([data_array[i,1]])
    X = np.append(X,X_append_element,axis=0)
    y = np.append(y,y_append_element,axis=0)
    i+=1

X = np.delete(X,0,0)
y = np.delete(y,0)
#######################################

# Split the data into training/testing sets
X_train = X[:-30]# take all the samples as train data except the last 2 samples
X_test = X[-30:]# take the last 2 samples a test data

# Split the targets into training/testing sets
y_train = y[:-30]
y_test = y[-30:]

# Create linear regression object
regr = linear_model.LinearRegression()

# Train the model using the training sets
regr.fit(X, y)

# Make predictions using the testing set
y_pred_train = regr.predict(X_train)
y_pred = regr.predict(X_test)

# The coefficients
print('Coefficients: \n', regr.coef_)
# The mean squared error
print('Mean squared error: %.2f'
      % mean_squared_error(y_test, y_pred))
# The coefficient of determination: 1 is perfect prediction
print('Coefficient of determination: %.2f'
      % r2_score(y_test, y_pred))

X_input_from_web = np.array([[1,10]])
y_pred_to_web = regr.predict(X_input_from_web)
print('price prediction = {}$'.format(np.round(y_pred_to_web,decimals=3)))

# Plot training data set
plt.figure()
plt.scatter(X[:,1], y,  color='blue', label = 'data' ,linewidth=3)
plt.plot(X_train[:,1], y_pred_train, label = 'linear regression', color='red',linewidth=3)

plt.title("data")
plt.xlabel("house size(10m2)")
plt.ylabel("price(10000$)")
plt.legend(loc="upper left")

plt.figure()
# Plot test data set
plt.scatter(X_test[:,1], y_test,  color='blue', label = 'real value' ,linewidth=3)
plt.scatter(X_test[:,1], y_pred,  color='red', label = 'prediction',linewidth=3)
plt.plot(X_test[:,1], y_pred, color='red',linewidth=1)

plt.title("test data")
plt.xlabel("house size(10m2)")
plt.ylabel("price(10000$)")
plt.legend(loc="upper left")
plt.show()

