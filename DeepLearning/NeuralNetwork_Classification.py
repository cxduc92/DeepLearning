from sklearn.neural_network import MLPClassifier
import matplotlib.pyplot as plt
import numpy as np
from numpy import loadtxt

#######################################
# Read/ preprocess or generate data
data = loadtxt("ex2data.txt", comments="#", delimiter=",", unpack=False)
data_array = np.array(data)

[row,col] = data_array.shape
X = np.array([[0,0]])
y = np.array([0])
for i in range(0,row):
    X_append_element = np.array([[data_array[i,0],data_array[i,1]]])
    y_append_element = np.array([data_array[i,2]])
    X = np.append(X,X_append_element,axis=0)
    y = np.append(y,y_append_element,axis=0)
    i+=1

X = np.delete(X,0,0)
y = np.delete(y,0)
#######################################

#####################################
# train neural network model
clf = MLPClassifier(solver='lbfgs',alpha=1e-05,hidden_layer_sizes=[100, 100], random_state = 1)
clf.fit(X,y)

######################################
# data from web
data_from_web = np.array([[30,30],[80,80]])
n_row,n_col = data_from_web.shape
y_classified = clf.predict(data_from_web)
print('classification result {}'.format(y_classified))

# plot
plt.scatter(X[:, 0]/10, X[:, 1],c=y)
plt.scatter(data_from_web[:,0]/10,data_from_web[:,1],c=y_classified)
for i in range(0,n_row):
    plt.text(data_from_web[i,0]/10,data_from_web[i,1],'Customer group {}'.format(y_classified[i]))
plt.title("Multi-Level-Perceptron Neural Network")
plt.xlabel("career experience")
plt.ylabel("salary($10000)")
plt.show()