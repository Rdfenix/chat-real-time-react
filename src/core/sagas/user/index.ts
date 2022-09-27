import { all, put, takeLatest } from "redux-saga/effects"
import { User } from "../../../shared/interface/login"
import { setUserAction } from "../../action"
import { GET_USER } from "../../action/actionType"

function* getUserInfo() {
    try {
        const userData = JSON.parse(String(localStorage.getItem("USER_VALIDATE"))) as User
        yield put(setUserAction(userData))
    } catch (error) {
        console.log(error)
    }
}

const UserInfo = all([takeLatest(GET_USER, getUserInfo)])

export default UserInfo