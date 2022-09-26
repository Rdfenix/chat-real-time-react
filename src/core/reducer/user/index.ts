import { User } from "../../../shared/interface/login";
import { SET_USER } from "../../action/actionType";

const initialState: User = { name: '', user: '' }

const UserReducer = (state = initialState, action: { payload: User; type: string }) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER:
            return payload;
        default:
            return state;
    }
}

export default UserReducer