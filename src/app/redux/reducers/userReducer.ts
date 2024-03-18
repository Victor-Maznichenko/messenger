import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;