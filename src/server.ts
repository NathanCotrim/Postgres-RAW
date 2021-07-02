import express from 'express';
const server = express();

import { routes } from './routes';

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(8080, () => console.log('Server is running at 8080'));
