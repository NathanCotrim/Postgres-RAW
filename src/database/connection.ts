import { Pool } from 'pg';

const createConnection = async () => {
	const client = new Pool({
		host: 'localhost',
		user: 'postgres',
		password: '27012005',
		database: 'nativeSQL',
		port: 3333,
	});

	await client.connect();
	return client;
};

export { createConnection };
