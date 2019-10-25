import {combineReducers} from 'redux';
import records from './recordsReducer';

const rootReducer = combineReducers({
  records
});

export default rootReducer;