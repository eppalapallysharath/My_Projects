import { combineReducers } from "redux";
import { ExamsReducer } from "./ExamsReducer";
import { LoginReducer } from "./LoginReducer";
import { SignUpReducer } from "./SignUpReducer"

export const RootReducer = combineReducers({
    loginR: LoginReducer,
    signUpR: SignUpReducer,
    examR: ExamsReducer
})