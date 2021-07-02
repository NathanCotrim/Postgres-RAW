import { User } from '../../entities/User';
import { IUserRepositories } from '../../repositories/IUsersRepositories';

interface CreateUserDTO {
	name: string;
	email: string;
	password: string;
}

class CreateUserUseCase {
	constructor(private usersRepository: IUserRepositories) {}

	async execute({ name, email, password }: CreateUserDTO) {
		let user = new User();
		user = Object.assign({
			...user,
			name,
			email,
			password,
		});

		await this.usersRepository.create(user);
	}
}

export { CreateUserUseCase };
