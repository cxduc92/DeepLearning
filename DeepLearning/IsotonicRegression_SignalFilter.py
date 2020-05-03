print(__doc__)

import numpy as np
from numpy import loadtxt
import matplotlib.pyplot as plt
from sklearn.isotonic import IsotonicRegression

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

x = np.delete(X,0)
y = np.delete(y,0)
x_train = x[:-n_validation_samples]# take all the samples as train data except the last n_test_samples samples
x_validation = x[-n_validation_samples:]# take the last 2 samples a test data
y_train = y[:-n_validation_samples]
y_validation = y[-n_validation_samples:]
#############################################################################

# Fit IsotonicRegression and LinearRegression models

ir = IsotonicRegression()

y_pred_train = ir.fit_transform(x_train, y_train)

# #############################################################################
# Plot result

fig = plt.figure()
plt.plot(x_train, y_train, 'r.', markersize=12)
plt.plot(x_train, y_pred_train, 'b.-', markersize=12)
plt.legend(('Data', 'Trained Isotonic Fit'), loc='lower right')
plt.title('Isotonic regression-Trained Stock Data')
plt.show()