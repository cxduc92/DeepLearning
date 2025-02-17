import numpy as np


n=2 # number of inputs
num_hidden_layer = 2 # number of hidden layers
m = [2,2] # number of nodes in hidden layers
num_nodes_output = 1 # number of nodes in output layer


def initialize_network(num_inputs,num_hidden_layers,num_nodes_hidden,num_nodes_output):
    num_nodes_previous = num_inputs #number of nodes in the previous layer

    network = {} # initialize network as an empty dictionary

    # Loop through each layer and randomly initialize the weights and biases associated with each node
    # notice how we are adding 1 to the number of hidden layers in order to include the output layer
    for layer in range(num_hidden_layers +1):
        #determine name of layer
        if layer == num_hidden_layers:
            layer_name = 'output'
            num_nodes = num_nodes_output
        else:
            layer_name = 'layer_{}'.format(layer+1)
            num_nodes = num_nodes_hidden[layer]
            
        # initialize weights and biases associated with each node in the current layer
        network[layer_name]= {}
        for node in range(num_nodes):
            node_name = 'node_{}'.format(node + 1)
            network[layer_name][node_name]= {
                'weights': np.around(np.random.uniform(size=num_nodes_previous), decimals = 2),
                'bias': np.around(np.random.uniform(size=1), decimals=2),
                }
        
        num_nodes_previous = num_nodes
        
    return network # return the network

# neural network with 5 inputs, 3 hidden layers
# 3 nodes in the first layer, 2 nodes in the second layers and 3 nodes in the third layer
# 1 node output layer
small_network = initialize_network(5, 3,[3,2,3], 1)  
print(small_network)