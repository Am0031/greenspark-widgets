import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import customMiddleware from "./middleware/customMiddleware";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(customMiddleware),
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
