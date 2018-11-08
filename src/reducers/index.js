import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import f from './imagePageReducer';

const rootReducer = combineReducers({
  fuelSavings,
});

export default rootReducer;
