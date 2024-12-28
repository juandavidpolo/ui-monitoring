import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadedFirstTime:false,
  loading:false
};

const generalSlice = createSlice({
  name: "general",
  initialState: initialState
});

export default generalSlice.reducer;