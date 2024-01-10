import { configureStore } from "@reduxjs/toolkit";
import assignmentReducer from "../assignment/assignmentSlice";

export const store = configureStore({
  reducer: {
    Assignment: assignmentReducer,
  },
});
