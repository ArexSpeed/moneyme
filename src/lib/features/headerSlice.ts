import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type headerState = {
  openSidebar: boolean;
  openNotification: boolean;
};

const initialState: headerState = {
  openSidebar: true,
  openNotification: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setOpenSidebar: (state) => {
      state.openSidebar = !state.openSidebar;
    },
    closeSidebar: (state) => {
      state.openSidebar = false;
    },
    setOpenNotification: (state, action: PayloadAction<boolean>) => {
      state.openNotification = action.payload;
  },
}
});

export const {
  setOpenNotification,
  setOpenSidebar,
  closeSidebar
} = headerSlice.actions;

export const sidebarIsOpen = (state: RootState) => state.header.openSidebar;
export const notificationIsOpen = (state: RootState) =>
  state.header.openNotification;

export default headerSlice.reducer;