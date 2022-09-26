import { IS_VALID } from './../../action/actionType'

const initialState: boolean = false;

const ValidateUserReducer = (state = initialState, action: { payload: boolean; type: string }) => {
    const { type, payload } = action;
    switch (type) {
        case IS_VALID:
            return payload;
        default:
            return state;
    }
}

export default ValidateUserReducer