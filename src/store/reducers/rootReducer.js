import postingReducer from './postingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posting: postingReducer
})

export default rootReducer