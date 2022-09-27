import { combineReducers } from 'redux'
import { ChatRoomsReducer, ChatSingleRoomReducer } from './chat';
import ValidateUserReducer from './loginValidate/intex';
import UserReducer from './user';

const rootReducer = combineReducers({ UserReducer, ValidateUserReducer, ChatRoomsReducer, ChatSingleRoomReducer });

export default rootReducer;