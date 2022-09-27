import { ChatRoom } from '../../../shared/interface/chat';
import { Dictionary } from '../../../shared/interface/dictionary';
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

const initialChatSingleRoom: Dictionary<ChatRoom> = {}

const ChatSingleRoomReducer = (state = initialChatSingleRoom, action: { payload: Dictionary<ChatRoom>; type: string }) => {
    const { payload, type } = action
    switch (type) {
        case SET_SINGLE_CHAT:
            return payload;
        default:
            return state;
    }
}

export { ChatRoomsReducer, ChatSingleRoomReducer };



