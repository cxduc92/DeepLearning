# Convolutional Neural Network

# Installing Theano
# pip install --upgrade --no-deps git+git://github.com/Theano/Theano.git

# Installing Tensorflow
# pip install tensorflow

# Installing Keras
# pip install --upgrade keras

# Part 1 - Building the CNN

# Importing the Keras libraries and packages
from keras.models import Sequential
from keras.layers import Conv2D
from keras.layers import MaxPooling2D
from keras.layers import Flatten
from keras.layers import Dense

# Initialising the CNN
classifier = Sequential()

# Step 1 - Convolution
# number of filter = 32 (number of feature detector)
# feature dectector size = (3,3) // window size = [3,3]
# use activation function = rectifier function to enhance the non linearity of convolutional layer
classifier.add(Conv2D(32, (3, 3), input_shape = (64, 64, 3), activation = 'relu'))

# Step 2 - Pooling
# pooling _isze= [2,2] to get maximum value
classifier.add(MaxPooling2D(pool_size = (2, 2)))

# Adding a second convolutional layer
# the best solution to improve accuracy is to add another layer
# we dont have to input input_shape because we had that before and keras recognizes it
# add more convolutional layer with more feature detectors. Exp:64
classifier.add(Conv2D(32, (3, 3), activation = 'relu'))
classifier.add(MaxPooling2D(pool_size = (2, 2)))

# Step 3 - Flattening
# Flatten the pooling pixel to input arrays
classifier.add(Flatten())

# Step 4 - Full connection
# neurons in hidden layers = 128 (result from experiment, not too small nor too big, number should be around 100)
# activation function is rectifier
classifier.add(Dense(units = 128, activation = 'relu'))
# if we have more than 2 binary outcome, we should use the softmax activation function activation = 'softmax'
classifier.add(Dense(units = 1, activation = 'sigmoid'))

# Compiling the CNN
# optimizer = adam
# loss function is cross entropy function
# preformance metrics is accuracy
classifier.compile(optimizer = 'adam', loss = 'binary_crossentropy', metrics = ['accuracy'])

# Part 2 - Fitting the CNN to the images

from keras.preprocessing.image import ImageDataGenerator
# this part comes from keras documentation pre processing image : keras.io/preprocessing/image
# rescale the pixel value from [0,255] to [0,1]
train_datagen = ImageDataGenerator(rescale = 1./255,
                                   shear_range = 0.2,
                                   zoom_range = 0.2,
                                   horizontal_flip = True)

test_datagen = ImageDataGenerator(rescale = 1./255)

# search from the root directory and generate training data set
# pixel training size = [64,64] // dimension we expected for our CNN
# to improve the accuracy, we could add the bigger target size. ex: pixel_training_size=(150,150). 
# However, training would be slow
training_set = train_datagen.flow_from_directory('dataset/training_set',
                                                 target_size = (64, 64),
                                                 batch_size = 32,
                                                 class_mode = 'binary')

test_set = test_datagen.flow_from_directory('dataset/test_set',
                                            target_size = (64, 64),
                                            batch_size = 32,
                                            class_mode = 'binary')

# steps_per_epoch = number of image in the training set. In this case we have 8000 iamges in training set
# steps_per_epoch = 8000
# epochs = number of epoch we want to train for our training set
# validation_steps = number of test images. In this case, we have 2000 images in test set
classifier.fit_generator(training_set,
                         steps_per_epoch = 8000,
                         epochs = 25,
                         validation_data = test_set,
                         validation_steps = 2000)