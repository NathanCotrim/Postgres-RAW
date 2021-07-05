import { Request, Response } from 'express';
import { FindUserById } from './findUserByIdUseCase';

class FindUserByIdController {
	constructor(private findUserById: FindUserById) {}

	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const user = await this.findUserById.execute(id);

		return res.json(user);
	}
}

export { FindUserByIdController };
