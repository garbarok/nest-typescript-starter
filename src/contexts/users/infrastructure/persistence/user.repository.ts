import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { Email } from '../../domain/value-objects/email';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    const existingUserIndex = this.users.findIndex(
      u => u.getId() === user.getId(),
    );
    if (existingUserIndex >= 0) {
      this.users[existingUserIndex] = user;
    } else {
      this.users.push(user);
    }
    return Promise.resolve();
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter(user => user.getId() !== id);
    return Promise.resolve();
  }

  async findById(id: string): Promise<User | null> {
    return Promise.resolve(
      this.users.find(user => user.getId() === id) || null,
    );
  }

  async findByEmail(email: Email): Promise<User | null> {
    return Promise.resolve(
      this.users.find(
        user => user.getEmail().getValue() === email.getValue(),
      ) || null,
    );
  }
}
