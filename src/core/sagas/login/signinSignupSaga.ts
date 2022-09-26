import { all, put, takeLatest } from 'redux-saga/effects'
import { setUserAction, setUserValid } from '../../action';
import { SIGN_IN } from '../../action/actionType'


function* getLogin(action: any) {
    try {

        yield localStorage.setItem("USER_VALIDATE", "true")
        yield put(setUserAction({ name: 'Rudnei Oliveira', user: action.payload.user }))
        yield put(setUserValid(true))
    } catch (error) {
        console.log(error)
    }
}

const SiginSignup = all([takeLatest(SIGN_IN, getLogin)])

export default SiginSignup