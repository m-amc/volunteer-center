import postingReducer from './postingReducer';
import { combineReducers } from 'redux';
import {
  firebaseReducer
} from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  posting: postingReducer
})

export default rootReducer