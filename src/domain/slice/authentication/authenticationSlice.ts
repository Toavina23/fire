import { createSlice } from "@reduxjs/toolkit";
import { AppStatus } from "../../../utils/appStatus";
import { AppError } from "../../../utils/Exception";
import type { RootState } from "../../store";
import { login } from "./authenticationThunk";

interface AuthenticationState {
	user: User | null;
	status: AppStatus;
	error: AppError | null;
}

const initialState: AuthenticationState = {
	user: null,
	status: AppStatus.Idle,
	error: null
};

export const authenticationSlice = createSlice({
	name: "authentication",
	initialState: initialState,
	reducers: {
		logout: (state, action) => {
			state.user = null;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state, action) => {
			state.status = AppStatus.Loading; 
		});
		builder.addCase(login.rejected, (state, action) => {
			state.status = AppStatus.Failed;
			state.error = action.payload as AppError
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.status = AppStatus.Succeded;
			state.user = action.payload as User
		})
	}
});

export const { logout } = authenticationSlice.actions;

export const selectAuthenticationState = (state: RootState) =>
	state.authentication;

export default authenticationSlice.reducer