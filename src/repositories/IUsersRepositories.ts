import { User } from '../entities/User';

interface IUserRepositories {
	create(user: User): Promise<void>;
}

export { IUserRepositories };
