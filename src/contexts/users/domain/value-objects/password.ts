import { ValueObject } from '@contexts/shared/domain/core/value-object';
import { InvalidPasswordException } from '../exceptions/invalid-password.exception';

export class Password extends ValueObject<string> {
  protected validate(): void {
    if (this.value.length < 6) {
      throw new InvalidPasswordException(
        'Password must be at least 6 characters long',
      );
    }
  }

  static create(password: string): Password {
    return new Password(password);
  }
}
