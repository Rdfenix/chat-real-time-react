import { SIGN_UP, SIGN_IN, LOGOUT } from './actionType'
import { SignIn, SignUp } from '../../shared/interface/login'

export const signinAction = (payload: SignIn) => ({
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