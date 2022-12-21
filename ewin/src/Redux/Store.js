import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer/Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "persist-root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig ,Reducer );

export const store = legacy_createStore(
  persistedReducer,
// Reducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
