import { configureStore } from '@reduxjs/toolkit';
import generalSlice from "./general/slice";

export const store = configureStore({
  reducer: {
    general: generalSlice
  },
});

export default store;