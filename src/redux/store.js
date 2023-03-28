import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import orderReduser from "./orders/order-slice";
import authReducer from "./auth/auth-slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    orders: orderReduser,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
