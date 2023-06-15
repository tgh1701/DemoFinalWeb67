import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {persistStore} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
