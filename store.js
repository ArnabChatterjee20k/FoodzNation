import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import basketReducer from "./features/basketSlice";
import inputReducer from "./features/inputSlice";
import restaurantReducer from "./features/restaurantSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
    auth:authReducer,
    input:inputReducer
  },
});