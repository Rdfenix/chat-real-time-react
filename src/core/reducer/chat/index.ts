import { ChatRoom } from '../../../shared/interface/chat';
import { UPDATE_CHAT_ROOMS, SET_SINGLE_CHAT } from '../../action/actionType'

const initialChatRoomsState: ChatRoom[] = [];

const ChatRoomsReducer = (state = initialChatRoomsState, action: { payload: ChatRoom[]; type: string }) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_CHAT_ROOMS:
            return payload;
        default:
            return state;
    }
}

const initialChatSingleRoom: ChatRoom = { chatId: '', chatName: '', user: '' }

const ChatSingleRoomReducer = (state = initialChatSingleRoom, action: { payload: ChatRoom; type: string }) => {
    const { payload, type } = action
    switch (type) {
        case SET_SINGLE_CHAT:
            return payload;
        default:
            return state;
    }
}

export { ChatRoomsReducer, ChatSingleRoomReducer };



