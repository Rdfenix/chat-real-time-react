import { all, put, takeLatest } from 'redux-saga/effects'
import { setUserValid } from '../../action';
import { SIGN_IN } from '../../action/actionType'

function* getLogin(action: any) {
    try {
        /** place to create method to control login */
        const userData = { name: 'Rudnei Oliveira', user: action.payload.user }
        yield localStorage.setItem("USER_VALIDATE", JSON.stringify(userData))
        yield put(setUserValid(true))
    } catch (error) {
        console.log(error)
    }
}

const SiginSignup = all([takeLatest(SIGN_IN, getLogin)])

export default SiginSignup