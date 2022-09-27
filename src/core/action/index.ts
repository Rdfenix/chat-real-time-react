import { SIGN_UP, SIGN_IN, LOGOUT, SET_USER, IS_VALID, GET_USER } from './actionType'
import { SignIn, SignUp, User } from '../../shared/interface/login'

export const signinAction = (payload: SignIn): any => ({
    type: SIGN_IN,
    payload
})

export const signUpAction = (payload: SignUp) => ({
    type: SIGN_UP,
    payload
})

export const logoutAction = () => ({
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