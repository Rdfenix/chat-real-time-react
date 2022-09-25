import { all, takeLatest } from 'redux-saga/effects'
import { SignIn } from '../../../shared/interface/login';
import { SIGN_IN } from '../../action/actionType'

function* getLogin(action: any): void {
    console.log(action)

}

const SiginSignup = all([takeLatest(SIGN_IN, getLogin)])

export default SiginSignup