import { UsersPostgresRepository } from '../../repositories/implementations/UsersPostgresRepositories';
import { FindUserById } from './findUserByIdUseCase';
import { FindUserByIdController } from './findUserByIdController';

const usersRepository = new UsersPostgresRepository();
const findUserByIdUseCase = new FindUserById(usersRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export { findUserByIdController };
