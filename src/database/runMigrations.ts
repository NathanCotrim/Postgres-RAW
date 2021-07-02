import fs from 'fs';
import path from 'path';

import { createConnection } from './connection';

(async () => {
	const client = await createConnection();

	const fileDatabaseDir = path.join(__dirname, 'migrations/run/');

	console.log('Start Run Migrations:', new Date());

	fs.readdir(fileDatabaseDir, (error, files) => {
		if (error) {
			return console.log('Ocorreu um erro:', error);
		}

		files.forEach((file) => {
			fs.readFile(path.join(fileDatabaseDir, file), async (error, content) => {
				if (error) {
					return console.log('Ocorreu um erro:', error);
				}

				await client.query(content.toString()).then(() => {
					process.exit();
				});
			});
		});

		console.log('Finish Run Migrations:', new Date());
	});
})();
