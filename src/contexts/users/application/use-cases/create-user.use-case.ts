import { Injectable } from '@nestjs/common';
import { UseCase } from '@contexts/shared/application/use-case.interface';
import { User } from '../../domain/entities/user.entity';
import { Email } from '../../domain/value-objects/email';
import { UserRepository } from '../../domain/repositories/user.repository';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserAlreadyExistsException } from '../../domain/exceptions/user-already-exists.exception';

@Injectable()
export class CreateUserUseCase implements UseCase<CreateUserDto, void> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(input: CreateUserDto): Promise<void> {
    const email = Email.create(input.email);

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new UserAlreadyExistsException(input.email);
    }

    const user = User.create(input.id, email, input.name, input.password);

    await this.userRepository.save(user);
  }
}
