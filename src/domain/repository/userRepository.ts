import { AppException } from "../../utils/Exception";

type UserRepository = {
    login(username: string, password: string): Promise<User | null >;
}

export { type UserRepository };