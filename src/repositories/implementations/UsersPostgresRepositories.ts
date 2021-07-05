import { Pool } from 'pg';
import createConnection from '../../database/connection';

import { User } from '../../entities/User';
import { IUserRepositories } from '../IUsersRepositories';

class UsersPostgresRepository implements IUserRepositories {
	private client: Pool;

	constructor() {
		createConnection().then((connection) => (this.client = connection));
	}

	async create({ id, name, email, password }: User): Promise<void> {
		await this.client.query('INSERT INTO USERS VALUES($1, $2, $3, $4)', [
			id,
			name,
			email,
			password,
		]);
	}

	async findById(userId: string): Promise<User | null> {
		const { rows } = await this.client.query('SELECT * FROM USERS WHERE ID = $1 LIMIT 1', [userId]);
		if (rows.length > 0) {
			const userData = rows[0];

			const user: User = {
				...userData,
			};

			delete user.password;

			return user;
		}

		return null;
	}
}

export { UsersPostgresRepository };
