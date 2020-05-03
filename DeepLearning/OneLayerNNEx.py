import numpy as np

# neural network has 1 hidden layers with 2 neurons
weights = np.around(np.random.uniform(size=6), decimals = 2) # generate weight random array with size = 6
biases = np.around(np.random.uniform(size = 3), decimals =2) # generate biases array with size = 3

print("weight:")
print(weights)

print("\nbiases:")
print(biases)

x_1= 0.5 # input 1
x_2= 0.85 # input 2

print('\nx1 is {} and x2 is {}'.format(x_1,x_2))

z_11 = weights[0]*x_1+weights[1]*x_2+biases[0]
print('\nThe weighted sum z_11 of the inputs at the first node in the hidden layer is {}'.format(np.round(z_11, decimals=4)))

z_12 = weights[2]*x_1+weights[3]*x_2+biases[1]
print('\nThe weighted sum z_12 of the inputs at the second node in the hidden layer is {}'.format(np.around(z_12, decimals=4)))

a_21 = 1/(1+np.exp(-z_11))
print('\nThe activation value a_21 after the first node in the hidden layer is {}'.format(np.round(a_21, decimals=4)))

a_22 = 1/(1+np.exp(-z_12))
print('\nThe activation value a_22 after the first node in the hidden layer is {}'.format(np.round(a_22, decimals=4)))

z_21 = weights[4]*a_21+weights[5]*a_22+biases[2]
print('\nThe weighted sum z_21 of the inputs at the output layer is {}'.format(np.around(z_21, decimals=4)))

a_31 = 1/(1+np.exp(-z_21))
print('\nThe output of the network for x1 = 0.5 and x2 = 0.85 is {}'.format(np.round(a_31, decimals=4)))