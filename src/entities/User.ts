import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcryptjs';

class User {
	readonly id: string;
	name: string;
	email: string;
	password: string;

	constructor() {
		this.id = uuid();
		this.password = hashSync(this.password, 12);
	}
}

export { User };
