import { IUserRepositories } from '../../repositories/IUsersRepositories';

class FindUserById {
	constructor(private usersRepository: IUserRepositories) {}

	async execute(id: string) {
		const user = await this.usersRepository.findById(id);

		return user;
	}
}

export { FindUserById };
