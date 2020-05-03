"""
Self Organizing Map for Unsupervised Deep Learning
"""

# Importing the libraries
import pandas as pd
from pylab import bone, pcolor, colorbar, plot, show
from sklearn.preprocessing import MinMaxScaler
from minisom import MiniSom

# -------------------- Part 1: Preprocess the data ----------------------------
# Importing the dataset
DATASET = pd.read_csv('Credit_Card_Applications.csv')
X = DATASET.iloc[:, :-1].values
Y = DATASET.iloc[:, -1].values

# Feature Scaling

SC = MinMaxScaler(feature_range=(0, 1))
X = SC.fit_transform(X)

# ------------------ Part 2: Build the SOM model-------------------------------
# Training the SOM
# grid dimension [10,10]: 10x10 grid
# input_len: number of features in X data set
# sigma: radius of the difeerenct neighborhood, keep the default value 1.0
# learning rate: how much the weight are updated during each iteration
# decay_function: imrpove the convergence
SOM = MiniSom(x=10, y=10, input_len=15, sigma=1.0, learning_rate=0.5)
SOM.random_weights_init(X)
SOM.train_random(data=X, num_iteration=100)

#------------------ Part 3: Visualize the result-------------------------------

# create a blank window map
bone()
# put color on map according to SOM min to neuron distances
pcolor(SOM.distance_map().T)
# add the colorbar
colorbar()
# the potential freuds are outline winning node
# which has the highest min to neuron distance (the white cells)
# create the markers to highlight outliners
MARKERS = ['o', 's']
COLORS = ['r', 'g']
# for each customer
for i, x in enumerate(X):
    # get the winning node corresponding for the customer
    w = SOM.winner(x)
    # plot the marker if the customer is approved or not
    plot(w[0] + 0.5, # x center coordinate of the winning node cell
         w[1] + 0.5, # y center coordinate of the winning node cell
         MARKERS[Y[i]], # y contains the information whether the customer is approved or not
         markeredgecolor=COLORS[Y[i]],# choose the edge corlor coresponding to the approval
         markerfacecolor='None', # inside color of the marker
         markersize=10,
         markeredgewidth=2)
show()

# Finding the frauds
# get the mapping from data to create a list of frauds
# key: the coordinate of the winning nodes
# size: list of custommer associate to the winning nodes
MAPPINGS = SOM.win_map(X)
FRAUDS = MAPPINGS[(1, 8)] # the coordinate of the fraud cell, in this case is X=7, Y =5
# concatenate the list of frauds corresponding to the fraud cell
# frauds = np.concatenate((mappings[(8,5)], mappings[(8,6)]), axis = 0)
FRAUDS = SC.inverse_transform(FRAUDS)
