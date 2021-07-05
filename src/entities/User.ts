import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcryptjs';

class User {
	id: string;
	name: string;
	email: string;
	password?: string | null;

	constructor(name: string, email: string, password: string) {
		this.id = uuid();
		this.password = hashSync(password);
		this.name = name;
		this.email = email;
	}
}

export { User };
