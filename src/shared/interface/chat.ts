export interface ChatRoom {
    user: string;
    chatName: string;
    chatId: string;
    messages: ChatMessages[]
}

export interface ChatMessages {
    userId: string;
    userName: string;
    message: string;
}