import React from 'react'
import { Provider, connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import CustomerDetails from './src/components/CustomerDetails';
import SQLiteReducer from './src/reducers/SQLiteReducer';


const AppReducer = combineReducers({
  SQLiteReducer : SQLiteReducer,
})

const store = createStore(
  AppReducer,
  applyMiddleware(thunkMiddleware)
)


const App = () => (
  <Provider store={store}>
    <CustomerDetails />
  </Provider>
)

export default App;
