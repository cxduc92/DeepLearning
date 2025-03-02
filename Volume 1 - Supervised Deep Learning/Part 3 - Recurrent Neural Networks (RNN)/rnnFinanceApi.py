import yfinance as yf
from datetime import date
import datetime as dt
import matplotlib.dates as mdates
# Recurrent Neural Network
# Part 1 - Data Preprocessing

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
###########################################################
# system parameter configuration
month_to_learn = 3
month_to_predict = 1

#tickerSymbol = ['AAPL','MSFT','NKE','NFLX','INTC','GOLD','AIR','BABA','JNJ','UL','OIL','ATVI','ADBE','ADSK','BCO','KO','DELL','EBAY'] # international stock
#tickerSymbol = ['BIDU'] # chinese stock
#tickerSymbol = ['SAB','VIC'] # vietnam stock
tickerSymbol = 'OIL'
start_date = '2015-1-1'

today = date.today()
end_date = today.strftime("%Y-%m-%d")

period_time = '1d' # 1 date

sell_margin = 0.15

buy_margin = 0.15
###########################################################

# number of financial days using to learn before make a prediction
financial_days = month_to_learn*20
prediction_days = month_to_predict*20 + financial_days

tickerData = yf.Ticker(tickerSymbol)
    
dataset_train = tickerData.history(period= period_time, start = start_date, end = end_date)

# Importing the training set
training_set = dataset_train.iloc[:, 0:1].values

# Feature Scaling
# scale data set to value [0,1]
from sklearn.preprocessing import MinMaxScaler
sc = MinMaxScaler(feature_range = (0, 1))
training_set_scaled = sc.fit_transform(training_set)

# Creating a data structure with 60 timesteps and 1 output
X_train = []
y_train = []
# start from previous 3 months to the last available date
for i in range(financial_days, training_set.size):
    X_train.append(training_set_scaled[i-financial_days:i, 0])
    y_train.append(training_set_scaled[i, 0])
X_train, y_train = np.array(X_train), np.array(y_train)

# Reshaping
X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))

# Part 2 - Building the RNN

# Importing the Keras libraries and packages
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from keras.layers import Dropout

# Initialising the RNN
regressor = Sequential()

# Adding the first LSTM layer and some Dropout regularisation
# number of neuron units, not too big, not too small, choose 50
# X_train.shape[1] : shape, 1: indicator
# drop out 20% neuron in this layer
regressor.add(LSTM(units = 50, return_sequences = True, input_shape = (X_train.shape[1], 1)))
regressor.add(Dropout(0.2))

# Adding a second LSTM layer and some Dropout regularisation
# keep the same number of neurons(50) like the first layer
regressor.add(LSTM(units = 50, return_sequences = True))
regressor.add(Dropout(0.2))

# Adding a third LSTM layer and some Dropout regularisation
# keep the same number of neurons(50) like the second layer
regressor.add(LSTM(units = 50, return_sequences = True))
regressor.add(Dropout(0.2))

# Adding a fourth LSTM layer and some Dropout regularisation
# remove the return sequences
regressor.add(LSTM(units = 50))
regressor.add(Dropout(0.2))

# Adding the output layer
regressor.add(Dense(units = 1))

# Compiling the RNN
# adam optimizer is a safe choice for optimization
# use loss function = mean square error function is an appropriate choice for neural network
regressor.compile(optimizer = 'adam', loss = 'mean_squared_error')

# Fitting the RNN to the Training set
# epochs = 100 is a goof choice
regressor.fit(X_train, y_train, epochs = 1, batch_size = 32)

# Part3: plot the training and prediction data
now = dt.datetime.now()+ dt.timedelta(days = month_to_predict*20)
then = now - dt.timedelta(days = training_set.size + month_to_predict*20)
days = mdates.drange(then, now, dt.timedelta(days = 1))
    
days_train = days[:-month_to_predict*20-financial_days]
days_predict = days[-month_to_predict*20:]

# Getting the real stock price of 2017
dataset_test = pd.read_csv('PricePredict.csv')
real_stock_price = dataset_test.iloc[:, 1:2].values

# Getting the predicted stock price of 2017
# 1st key point: we will need the financial_days point data berfore prediction
# 2nd key point: we will need both the training set and test set
# 3rd key point: after concatenate, we must scale the inputs because the RNN is trained with scale data set

# concatenate horizontal, axis = 1, concatenate vertical, axis = 0
# predict the stock price from the previouse financial_days value -> X_test size must be =[predictions day, financial_days]
dataset_total = pd.concat((dataset_train['Open'], dataset_test['Open']), axis = 0)
# last stock price from the inputs should be the one right before the prediction date. In put should have the size (financial_days,financial_days)
inputs = dataset_total[len(dataset_total) - len(dataset_test) - financial_days:].values
inputs = inputs.reshape(-1,1)
inputs = sc.transform(inputs)
X_test = []
for i in range(financial_days, prediction_days):
    X_test.append(inputs[i-financial_days:i, 0])
X_test = np.array(X_test)
X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))
predicted_stock_price = regressor.predict(X_test)
predicted_stock_price = sc.inverse_transform(predicted_stock_price)

# Visualising the results
plt.plot(real_stock_price, color = 'red', label = 'Real {} Stock Price'.format(tickerSymbol))
plt.plot(predicted_stock_price, color = 'blue', label = 'Predicted {} Stock Price'.format(tickerSymbol))
plt.title('{} Stock Price Prediction'.format(tickerSymbol))
plt.xlabel('date')
plt.ylabel('{} Stock Price($)'.format(tickerSymbol))
plt.legend()
plt.show()
