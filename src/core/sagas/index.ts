import { all } from "redux-saga/effects";
import SiginSignup from './login/signinSignupSaga'
import UserInfo from "./user";

export default function* rootSaga() {
    yield all([SiginSignup, UserInfo]);
}