import { createAsyncThunk } from "@reduxjs/toolkit";
import UserRepository from "../../../data/repository/UserRepositoryImpl";
import { AppException } from "../../../utils/Exception";

export type UserCredentials = {
	username: string;
	password: string;
};

const login = createAsyncThunk(
	"authentication/login",
	async (credentials: UserCredentials, {rejectWithValue}) => {
        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const user = await UserRepository.login(
                credentials.username,
                credentials.password
            );
            return user;
        } catch(error){
            if(error instanceof AppException){
                return rejectWithValue(error.toError());
            }
            else rejectWithValue("Oops, something unexpected happened")
        }
	}
);

export { login }
