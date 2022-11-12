import { configureStore } from "@reduxjs/toolkit";
import authentication from "./slice/authentication/authenticationSlice";

export const store = configureStore({
    reducer: {
        authentication
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch