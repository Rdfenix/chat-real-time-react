import { ChatRoom } from "./chat";
import { User } from "./login";

export interface StateReducer {
    ValidateUserReducer: boolean;
    UserReducer: User;
    ChatRoomsReducer: ChatRoom[];
    ChatSingleRoomReducer: ChatRoom
}