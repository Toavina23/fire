import { Model } from "./Model";

class UserModel implements Model<User> {
	public id: number;
	public username: string;
	public password: string;

	constructor(id: number, username: string, password: string) {
		this.id = id;
		this.username = username;
		this.password = password;
	}
	toEntity(): User {
		const user: User = {
			id: this.id,
			username: this.username,
		};
		return user;
	}
}

export default UserModel;