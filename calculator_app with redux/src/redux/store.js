import { rootReducer } from "./rootReducer";
import { legacy_createStore, compose } from "redux";
// import {composeWithDevTools} from  "redux-devtools-extension"

export const store = legacy_createStore(rootReducer,
    compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )

 
