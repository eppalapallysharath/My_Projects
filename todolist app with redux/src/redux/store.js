import {legacy_createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import todoReducer from "./todoReducer"


const store = legacy_createStore(
    todoReducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
export default store; 