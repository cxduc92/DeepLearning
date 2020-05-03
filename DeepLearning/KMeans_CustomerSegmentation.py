print(__doc__)

#KMeans clustering
import numpy as np
import matplotlib.pyplot as plt

from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from numpy import loadtxt
#######################################
# set up parameters here
cluster_number = 3
#######################################


#######################################
# Read/ preprocess or generate data
n_samples = 1000
random_state = 170
X, y = make_blobs(n_samples=n_samples, random_state=random_state)

#data = loadtxt("ex2data.txt", comments="#", delimiter=",", unpack=False)
#data_array = np.array(data)

#[row,col] = data_array.shape
#X = np.array([[0,0]])
#y = np.array([0])
#for i in range(0,row):
#    X_append_element = np.array([[data_array[i,0],data_array[i,1]]])
#    y_append_element = np.array([data_array[i,2]])
#    X = np.append(X,X_append_element,axis=0)
#    y = np.append(y,y_append_element,axis=0)
#    i+=1

#X = np.delete(X,0,0)
#y = np.delete(y,0)

#######################################

data = np.array(X)
kmeansCluster = KMeans(n_clusters=3, random_state=0).fit(data)

value_from_web = np.array([[1,1]])
print('cluster group for data = {}'.format(kmeansCluster.predict(value_from_web)))

plt.scatter(data[:, 0], data[:, 1],c=kmeansCluster.labels_)
plt.scatter(kmeansCluster.cluster_centers_[:, 0], kmeansCluster.cluster_centers_[:, 1],color='red',marker='x', label = 'group center')
for i in range(0,cluster_number):
    plt.text(kmeansCluster.cluster_centers_[i, 0],kmeansCluster.cluster_centers_[i, 1],'Customer group {}'.format(i))
plt.title("KMeans clustering")
plt.xlabel("age")
plt.ylabel("salary($10000)")
plt.legend(loc="upper left")
plt.show()