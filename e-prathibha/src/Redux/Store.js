import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./Reducers/RootReducer";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"

const persistConfig = { key: "persist-root", storage: storageSession };

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const Store = legacy_createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk, createLogger()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(Store)