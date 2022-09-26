import { combineReducers } from 'redux'
import ValidateUserReducer from './loginValidate/intex';
import UserReducer from './user';

const rootReducer = combineReducers({ UserReducer, ValidateUserReducer });

export default rootReducer;