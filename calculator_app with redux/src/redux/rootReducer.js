import { calculatorReducer, CALCULATOR_KEY } from "./calculatorRedux/calculator.reducer";
import { combineReducers } from "redux";

export let rootReducer = combineReducers({
    [CALCULATOR_KEY] : calculatorReducer
})

