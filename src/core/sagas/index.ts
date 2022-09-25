import { all } from "redux-saga/effects";
import SiginSignup from './login/signinSignupSaga'

export default function* rootSaga() {
    yield all([SiginSignup]);
}