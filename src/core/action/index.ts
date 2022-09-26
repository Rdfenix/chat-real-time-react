import { SIGN_UP, SIGN_IN, LOGOUT, SET_USER } from './actionType'
import { SignIn, SignUp, User } from '../../shared/interface/login'

export const signinAction = (payload: SignIn): any => ({
    action: SIGN_IN,
    payload
})

export const signUpAction = (payload: SignUp) => ({
    action: SIGN_UP,
    payload
})

export const logoutAction = () => ({
    action: LOGOUT
})

export const setUserAction = (payload: User): any => ({
    action: SET_USER,
    payload
})