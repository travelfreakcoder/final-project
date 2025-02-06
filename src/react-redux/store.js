// import { configureStore } from '@reduxjs/toolkit'

// import cartReducer from "./cartSlice"
// import authReducer from "./authSlice"

// export default configureStore({
//   reducer: {
//     cart:cartReducer,
//     auth:authReducer
//   },
// })

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice"
import authReducer from "./authSlice"

const persistCartConfig = {
  key: "cart",
  storage,
};

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    cart:persistedCartReducer,
    auth:persistedAuthReducer
  }
});

export const persistor = persistStore(store);