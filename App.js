import React from 'react'
import { Provider, connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import Navigation from './src/NavigationManager';
import SQLiteReducer from './src/reducers/SQLiteReducer';
import DataReducer from './src/reducers/DataReducer';


const AppReducer = combineReducers({
  SQLiteReducer : SQLiteReducer,
  DataReducer : DataReducer,
})

const store = createStore(
  AppReducer,
  applyMiddleware(thunkMiddleware)
)


const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default App;
