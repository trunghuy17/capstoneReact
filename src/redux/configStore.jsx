import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import searchProductReducer from "./reducers/searchProductReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    userReducer: userReducer,
    searchProductReducer: searchProductReducer,
    cartReducer: cartReducer,
  },
});
