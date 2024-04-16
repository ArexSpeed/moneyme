import { configureStore } from '@reduxjs/toolkit'
import headerSlice from "../lib/features/headerSlice";
import themeReducer from "../lib/features/themeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      header: headerSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']