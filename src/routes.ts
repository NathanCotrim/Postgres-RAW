import { Router, Request, Response } from 'express';
import { createUserController } from './useCases/createUser';
import { findUserByIdController } from './useCases/FindById';
const routes = Router();

routes.get('/', (req: Request, res: Response) => {
	res.send('Hello World');
});

routes.post('/users', (req, res) => {
	return createUserController.handle(req, res);
});

routes.get('/user/:id', (req, res) => {
	return findUserByIdController.handle(req, res);
});

export { routes };
