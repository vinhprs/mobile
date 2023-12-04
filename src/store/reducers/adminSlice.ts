import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducers";
import { getAccountList } from "../actions/admin.action";
const initState = {
  accountList: {},
  isDisabled: false,
  isDeleted: false,
};
const adminSlice = createSlice({
  name: "admin",
  initialState: initState,
  reducers: {
    updateDisable: (state, actions) => {
      state.isDisabled = actions.payload;
    },
    updateDelete: (state, actions) => {
      state.isDeleted = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccountList.fulfilled, (state, actions) => {
      state.accountList = actions.payload.data;
    });
  },
});
export default adminSlice.reducer;
export const { updateDelete, updateDisable } = adminSlice.actions;
export const selectAccountList = (state: RootState) => state.admin.accountList;
export const selectDisable = (state: RootState) => state.admin.isDisabled;
export const selectDelete = (state: RootState) => state.admin.isDeleted;
