import fs from 'fs';
import path from 'path';

import createConnection from './connection';

(async () => {
	const connection = await createConnection();

	const fileDatabaseDir = path.join(__dirname, 'migrations', 'revert');

	console.log('Reverting Migrations:', new Date());

	fs.readdir(fileDatabaseDir, (error, files) => {
		if (error) {
			return console.log('Ocorreu um erro:', error);
		}

		files.forEach((file) => {
			fs.readFile(path.join(fileDatabaseDir, file), async (error, content) => {
				if (error) {
					return console.log('Ocorreu um erro:', error);
				}

				await connection?.client.query(content.toString()).then(() => {
					process.exit();
				});
			});
		});
		console.log('Finish Revert Migrations:', new Date());
	});
})();
