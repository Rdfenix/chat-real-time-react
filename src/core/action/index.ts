import { SIGN_UP, SIGN_IN, LOGOUT, SET_USER, IS_VALID, GET_USER, UPDATE_CHAT_ROOMS, GET_CHAT_ROOMS, SET_SINGLE_CHAT, GET_SINGLE_CHAT } from './actionType'
import { SignIn, SignUp, User } from '../../shared/interface/login'
import { ChatRoom } from '../../shared/interface/chat'
import { Dictionary } from '../../shared/interface/dictionary'

export const signinAction = (payload: SignIn): any => ({
    type: SIGN_IN,
    payload
})

export const signUpAction = (payload: SignUp): any => ({
    type: SIGN_UP,
    payload
})

export const logoutAction = (): any => ({
    type: LOGOUT
})

export const getUserAction = (): any => ({
    type: GET_USER
})

export const setUserAction = (payload: User): any => ({
    type: SET_USER,
    payload
})

export const setUserValid = (payload: boolean): any => ({
    type: IS_VALID,
    payload
})

export const getChatRoomsAction = (): any => ({
    type: GET_CHAT_ROOMS
})

export const updateChatRoomsAction = (payload: ChatRoom[]): any => ({
    type: UPDATE_CHAT_ROOMS,
    payload
})

export const getSingleChatAction = (chatId: string): any => ({
    type: GET_SINGLE_CHAT,
    payload: chatId
})

export const setSingleChatAction = (payload: Dictionary<ChatRoom>): any => ({
    type: SET_SINGLE_CHAT,
    payload
})