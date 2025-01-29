import { Repository } from '@contexts/shared/domain/core/repository.interface';
import { User } from '../entities/user.entity';
import { Email } from '../value-objects/email';

export interface UserRepository extends Repository<User> {
  findById(id: string): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
}
