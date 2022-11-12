import UserModel  from "../../models/UserModel";
import { networkUtil } from "../../../utils/network";
import { AppException, ExceptionType } from "../../../utils/Exception";

interface UserDataSource {
    getUser(username: string, password: string): Promise<UserModel | null>
}

const userDataSource : UserDataSource = {
    async getUser(username, password) {
        const hasConnection = await networkUtil.hasConnection();
        if(hasConnection){
            if(username === "toavina@gmail.com" && password==="password"){
                const user: UserModel = new UserModel(1, "toavina@gmail.com", "password");
                return user;
            } else{
                throw new AppException("Given credentials doesn't match our data", ExceptionType.Validation)
            }
        } else {
            throw new AppException("Please verify your network connection", ExceptionType.Network);
        }

    },
}

export default userDataSource;