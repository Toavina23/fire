import { UserRepository } from "../../domain/repository/userRepository";
import userDataSource from "../datasource/remote/UserDataSource";

const userRepositoryImpl: UserRepository = {
	login: async (username: string, password: string) => {
		const user = await userDataSource.getUser(username, password);
        setTimeout(() => {
            console.log("waiting");
        }, 3000);
		if (user) {
			return user.toEntity();
		} else {
			return null;
		}
	},
};
export default userRepositoryImpl;
