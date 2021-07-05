import { User } from '../entities/User';

interface IUserRepositories {
	create(user: User): Promise<void>;
	findById(id: string): Promise<User | null>;
}

export { IUserRepositories };
