"""

    Artificial Neural Network for classification
    Data set: Churn_Modelling.csv

    Date: 04.05.2020
    Author: Duc Cu

"""
# Artificial Neural Network

# Installing Theano
# pip install --upgrade --no-deps git+git://github.com/Theano/Theano.git

# Installing Tensorflow
# pip install tensorflow

# Installing Keras
# pip install --upgrade keras

# Importing the libraries
import pandas as pd
from keras.models import Sequential
from keras.layers import Dense
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix
#from keras.models import load_model

# -----------------------Part 1 - Data Preprocessing--------------------------

# Importing the dataset
DATASET = pd.read_csv('Churn_Modelling.csv')
X = DATASET.iloc[:, 3:13].values
Y = DATASET.iloc[:, 13].values

# Encoding categorical data
LABELENCODER_X_1 = LabelEncoder()
X[:, 1] = LABELENCODER_X_1.fit_transform(X[:, 1])
LABELENCODER_X_2 = LabelEncoder()
X[:, 2] = LABELENCODER_X_2.fit_transform(X[:, 2])

# Splitting the dataset into the Training set and Test set
X_TRAIN, X_TEST, Y_TRAIN, Y_TEST = train_test_split(X, Y, test_size=0.2, random_state=0)

# Feature Scaling
# in deep learning: feature scaling is a must
SC = StandardScaler()
X_TRAIN = SC.fit_transform(X_TRAIN)
X_TEST = SC.transform(X_TEST)

# ----------------------Part 2 - build the ANN!-------------------------------

# Optionaly, you can load a model
# load the model here
# classifier = load_model('TrainedModel/ANN_E100_F6_S6_O1.h5')

NUM_NEURONS_FIRSTLAYER = 6
NUM_NEURONS_SECONDLAYER = 6
NUM_NEURONS_OUTPUTLAYER = 1
EPOCHS = 100
BATCH_SIZE = 10

# Initialising the ANN
CLASSIFIER = Sequential()

# Adding the input layer and the first hidden layer
# first hidden layer with 6 neurons, initialisation with uniform
# activation functions is rectifier function
CLASSIFIER.add(Dense(units=NUM_NEURONS_FIRSTLAYER,
                     kernel_initializer='uniform',
                     activation='relu',
                     input_dim=10))

# Adding the second hidden layer
# second hidden layer with 6 neurons, initialisation with uniform
# activation functions is rectifier function
CLASSIFIER.add(Dense(units=NUM_NEURONS_SECONDLAYER,
                     kernel_initializer='uniform',
                     activation='relu'))

# Adding the output layer
# output layer with activation is sigmoid function
CLASSIFIER.add(Dense(units=NUM_NEURONS_OUTPUTLAYER,
                     kernel_initializer='uniform',
                     activation='sigmoid'))

# Compiling the ANN
# build the neural network with otimizer = 'adam', loss function is = cross entropy
CLASSIFIER.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Fitting the ANN to the Training set
# batch_size = stochastic batch size, epochs = number of times loop through the whole data set
CLASSIFIER.fit(X_TRAIN, Y_TRAIN, batch_size=BATCH_SIZE, epochs=EPOCHS)

#Saving the model
FILE_NAME = 'TrainedModel/ANN_E{}_F{}_S{}_O{}.h5'.format(EPOCHS, NUM_NEURONS_FIRSTLAYER,
                                                         NUM_NEURONS_SECONDLAYER,
                                                         NUM_NEURONS_OUTPUTLAYER)
CLASSIFIER.save(FILE_NAME)
print("Saved model `{}` to disk".format(FILE_NAME))

# ---------Part 3 - Making predictions and evaluating the model----------------

# Predicting the Test set results
Y_PRED = CLASSIFIER.predict(X_TEST)
Y_PRED = (Y_PRED > 0.5)

# Making the Confusion Matrix
# cm matrix displays the accuracy result
CM = confusion_matrix(Y_TEST, Y_PRED)
print("CM matrix = {}".format(CM))
