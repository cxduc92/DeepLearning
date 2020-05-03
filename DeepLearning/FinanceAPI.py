import yfinance as yf
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import numpy as np
from datetime import date
import datetime as dt
from sklearn.linear_model import Ridge
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

##########################################
# system parameters set up
polynomial_degree = 6

n_predict_sample = 30

#tickerSymbol = ['AAPL','MSFT','NKE','NFLX','INTC','GOLD','AIR','BABA','JNJ','UL','OIL','ATVI','ADBE','ADSK','BCO','KO','DELL','EBAY','FDX','GOOGL'] # international stock
#tickerSymbol = ['BIDU'] # chinese stock
#tickerSymbol = ['SAB','VIC'] # vietnam stock
tickerSymbol = ['GOLD']
start_date = '2015-1-1'

today = date.today()
end_date = today.strftime("%Y-%m-%d")

period_time = '1d' # 1 date

sell_margin = 0.15

buy_margin = 0.15
##########################################


for symbol in tickerSymbol:
    tickerData = yf.Ticker(symbol)
    
    tickerDf = tickerData.history(period= period_time, start = start_date, end = end_date)
    
    # print the time serie data
    #print(tickerDf)
    
    data_row,data_collumn = tickerDf.shape 
    
    # preprocess data
    X = np.arange(data_row + n_predict_sample)
    X = X.reshape(-1,1)
    y = tickerDf['Close']
    X_train = X[:-n_predict_sample]# take all the samples as train data except the last n_test_samples samples
    X_predict = X[-n_predict_sample:]# take the last n_test_samples samples a test data
    y_train = y[:]
    
    # train with polynomial regression model
    model = make_pipeline(PolynomialFeatures(polynomial_degree), Ridge())
    model.fit(X_train, y_train)
    y_pred_train = model.predict(X_train)
    y_predict = model.predict(X_predict)
    y_sell = y_pred_train*(1 + sell_margin)
    y_buy = y_pred_train*(1 - buy_margin)
    
    # plot the training and prediction data
    now = dt.datetime.now()+ dt.timedelta(days = n_predict_sample)
    then = now - dt.timedelta(days = data_row + n_predict_sample)
    days = mdates.drange(then, now, dt.timedelta(days = 1))
    days_train = days[:-n_predict_sample]
    days_predict = days[-n_predict_sample:]
    
    plt.figure()
    plt.plot(days_train,y_train, color = 'red',linewidth=2, label = 'data')
    plt.plot(days_train,y_pred_train, color='blue', linewidth=3)
    plt.plot(days_train,y_sell, color='black', linewidth=3, label=" sell boundary")
    plt.plot(days_train,y_buy, color='green', linewidth=3, label=" buy boundary")
    plt.plot(days_predict,y_predict, color='blue', linewidth=3)
    
    plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m'))
    plt.gca().xaxis.set_major_locator(mdates.DayLocator(interval = 180))
    
    plt.xlabel('Date')
    plt.ylabel('Close Price($)')
    plt.title('{} Stock history'.format(symbol))
    plt.legend(loc='upper left')
plt.show()
