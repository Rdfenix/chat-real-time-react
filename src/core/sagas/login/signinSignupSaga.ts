import { Action } from 'redux';
import { all, put, takeLatest } from 'redux-saga/effects'
import { SignIn } from '../../../shared/interface/login';
import { setUserAction } from '../../action';
import { SIGN_IN } from '../../action/actionType'

type LoginProps = {
    action: string;
    payload: SignIn
}

function* getLogin(action: Action<LoginProps>) {
    const { user } = action.type.payload;
    yield put(setUserAction({ name: 'Rudnei Oliveira', user }))
}

const SiginSignup = all([takeLatest(SIGN_IN, getLogin)])

export default SiginSignup