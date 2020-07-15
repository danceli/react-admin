import {createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducers/index'
const store=createStore(reducer,applyMiddleware(reduxThunk,logger));

export default store
