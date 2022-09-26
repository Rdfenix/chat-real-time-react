import { User } from "./login";

export interface StateReducer {
    ValidateUserReducer: boolean;
    UserReducer: User;
}