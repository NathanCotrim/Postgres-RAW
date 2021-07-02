import { Pool } from 'pg';
import { createConnection } from '../../database/connection';

import { User } from '../../entities/User';
import { IUserRepositories } from '../IUsersRepositories';

class UsersPostgresRepository implements IUserRepositories {
	private client: Pool;

	constructor() {
		createConnection().then((connection) => (this.client = connection));
	}

	async create({ name, email, password }: User): Promise<void> {
		await this.client.query('INSERT INTO USERS(NAME, EMAIL, PASSWORD) VALUES($1, $2, $3)', [
			name,
			email,
			password,
		]);
	}
}

export { UsersPostgresRepository };
