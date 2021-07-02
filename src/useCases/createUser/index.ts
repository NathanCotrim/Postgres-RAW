import { UsersPostgresRepository } from '../../repositories/implementations/UsersPostgresRepositories';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const usersRepository = new UsersPostgresRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);
