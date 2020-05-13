import { combineReducers } from 'redux';
import ExpensesReducer from './ExpensesReducer';

export default combineReducers({
  expenses: ExpensesReducer,
});