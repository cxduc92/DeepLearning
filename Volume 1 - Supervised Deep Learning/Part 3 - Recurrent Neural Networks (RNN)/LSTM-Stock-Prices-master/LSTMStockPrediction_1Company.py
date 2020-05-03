import yfinance as yf
import numpy as np
import pandas as pd
from keras.models import Sequential
from keras.layers import LSTM,Dense
import matplotlib.pyplot as plt
from datetime import date
import matplotlib.dates as mdates
import datetime as dt
from keras.models import load_model

# The goal is to predict the Closing Price behavior of a single company by predicting n coming days (forward_days)
# using as input the m past days (look_back).

##---------- Part 1: Data preprocessing---------------------------
look_back = 60 # days to learn
forward_days = 30 # predict days
num_periods = 1
tickerSymbol = 'NFLX'
start_date = '2015-1-1'

today = date.today()
end_date = today.strftime("%Y-%m-%d")

period_time = '1d' # 1 date

sell_margin = 0.15

buy_margin = 0.15

tickerData = yf.Ticker(tickerSymbol)
    
df = tickerData.history(period= period_time, start = start_date, end = end_date)
#open the csv, chose company_N, where N = {A, B, C or D}
#df = pd.read_csv('data/company_A.csv')

#set date as index
dfDate = df.reset_index()['Date']
df['Date'] = pd.to_datetime(dfDate)
#df.set_index('Date', inplace=True)
#keep only the 'Close' column
df = df['Close']

df.head()

len(df)

# Data visualization
plt.figure(figsize = (15,10))
plt.plot(df, label='{}'.format(tickerSymbol))
plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
plt.gca().xaxis.set_major_locator(mdates.DayLocator(interval = 180))
plt.legend(loc='best')
plt.show()

# Data normalization
array = df.values.reshape(df.shape[0],1)
array[:5]

from sklearn.preprocessing import MinMaxScaler
scl = MinMaxScaler()
array = scl.fit_transform(array)
array[:5]

# Split the data in Data to Train/Validate the LSTM and Data to Test the model
# The Test set will be the last k (num_periods) periods we want test the model. 
# In each period, the model will predict the next n coming days. The remaning data will be used for Train/Validation

# split in Train and Test

division = len(array) - num_periods*forward_days

array_test = array[division-look_back:]
array_train = array[:division]

#Get the data and splits in input X and output Y, by spliting in `n` past days as input X 
#and `m` coming days as Y.
def processData(data, look_back, forward_days,jump=1):
    X,Y = [],[]
    for i in range(0,len(data) -look_back -forward_days +1, jump):
        X.append(data[i:(i+look_back)])
        Y.append(data[(i+look_back):(i+look_back+forward_days)])
    return np.array(X),np.array(Y)

X_test,y_test = processData(array_test,look_back,forward_days,forward_days)
y_test = np.array([list(a.ravel()) for a in y_test])

X,y = processData(array_train,look_back,forward_days)
y = np.array([list(a.ravel()) for a in y])

from sklearn.model_selection import train_test_split
X_train, X_validate, y_train, y_validate = train_test_split(X, y, test_size=0.20, random_state=42)

print("X_train shape = {}".format(X_train.shape))
print("X_validate shape ={}".format(X_validate.shape))
print("X_test shape = {}".format(X_test.shape))
print("y_train shape = {}".format(y_train.shape))
print("y_validate shape = {}".format(y_validate.shape))
print("y_test shape = {}".format(y_test.shape))

##---------- Part 2: Training the LSTM---------------------------
# Optionaly, you can load a model
# load the model here
#model = load_model('Trained/single-company/LSTM_AAPL_LB40_FD10_E1_F50_S30.h5')

# LSTM recurrent neural network
NUM_NEURONS_FirstLayer = 50
NUM_NEURONS_SecondLayer = 30
#EPOCHS = 50
EPOCHS = 50
batch_size = 2

#Build the model
model = Sequential()
model.add(LSTM(NUM_NEURONS_FirstLayer,input_shape=(look_back,1), return_sequences=True))
model.add(LSTM(NUM_NEURONS_SecondLayer,input_shape=(NUM_NEURONS_FirstLayer,1)))
model.add(Dense(forward_days))
model.compile(loss='mean_squared_error', optimizer='adam')

history = model.fit(X_train,y_train,epochs=EPOCHS,validation_data=(X_validate,y_validate),shuffle=True,batch_size=batch_size)

# visualize the result
#plt.figure(figsize = (15,10))

#plt.plot(history.history['loss'], label='loss')
#plt.plot(history.history['val_loss'], label='val_loss')
#plt.legend(loc='best')
#plt.show()

#Saving the model
file_name = 'Trained/single-company/LSTM_{}_LB{}_FD{}_E{}_F{}_S{}.h5'.format(tickerSymbol,look_back, forward_days, EPOCHS, NUM_NEURONS_FirstLayer, NUM_NEURONS_SecondLayer)
model.save(file_name)
print("Saved model `{}` to disk".format(file_name))

##---------- Part 3: Predicting the Test Set to see the results---------------------------
Xt = model.predict(X_test)

plt.figure(figsize = (15,10))

for i in range(0,len(Xt)):
    plt.plot([x + i*forward_days for x in range(len(Xt[i]))], scl.inverse_transform(Xt[i].reshape(-1,1)), color='r')
    
plt.plot(0, scl.inverse_transform(Xt[i].reshape(-1,1))[0], color='r', label='Prediction') #only to place the label
    
plt.plot(scl.inverse_transform(y_test.reshape(-1,1)), label='Target')
plt.legend(loc='best')
plt.show()

# Predicting all the data to see how the model reacts to Train and Test set
division = len(array) - num_periods*forward_days

leftover = division%forward_days+1

array_test = array[division-look_back:]
array_train = array[leftover:division]

Xtrain,ytrain = processData(array_train,look_back,forward_days,forward_days)
Xtest,ytest = processData(array_test,look_back,forward_days,forward_days)

Xtrain = model.predict(Xtrain)
Xtrain = Xtrain.ravel()

Xtest = model.predict(Xtest)
Xtest = Xtest.ravel()

y = np.concatenate((ytrain, ytest), axis=0)

plt.figure(figsize = (15,10))

# Data in Train/Validation
plt.plot([x for x in range(look_back+leftover, len(Xtrain)+look_back+leftover)], scl.inverse_transform(Xtrain.reshape(-1,1)), color='r', label='Train')
# Data in Test
plt.plot([x for x in range(look_back +leftover+ len(Xtrain), len(Xtrain)+len(Xtest)+look_back+leftover)], scl.inverse_transform(Xtest.reshape(-1,1)), color='y', label='Test')

#Data used
plt.plot([x for x in range(look_back+leftover, look_back+leftover+len(Xtrain)+len(Xtest))], scl.inverse_transform(y.reshape(-1,1)), color='b', label='Target')
#Initial data. It should overlap the data used
#plt.plot(scl.inverse_transform(array), color='b', label='Esperado')
plt.legend(loc='best')
plt.show()