import { configureStore } from "@reduxjs/toolkit";
import popularItemReducer from "./slice/popularItemSlice";

export default configureStore({
  reducer: {
    popularItems: popularItemReducer,
  },
});
