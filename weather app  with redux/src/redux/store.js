import { legacy_createStore, 
    applyMiddleware 
} from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./reducers/reducer";
import { compose } from "redux";

const store = legacy_createStore(weatherReducer, 
    compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
   

export default store;
