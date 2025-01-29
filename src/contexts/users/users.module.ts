import { Module, Logger } from '@nestjs/common';
import { UserController } from './interfaces/http/controllers/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserRepositoryImpl } from './infrastructure/persistence/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    Logger,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryImpl,
    },
  ],
  exports: ['UserRepository'],
})
export class UsersModule {}
