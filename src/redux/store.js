import {createStore} from 'redux'
import rootReducer from './Rootreducer'

const store=createStore(rootReducer);

export default store;