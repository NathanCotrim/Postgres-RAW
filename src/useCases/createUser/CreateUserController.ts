import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	async handle(req: Request, res: Response) {
		const { email, name, password } = req.body;

		await this.createUserUseCase.execute({ name, email, password });

		return res.send();
	}
}

export { CreateUserController };
