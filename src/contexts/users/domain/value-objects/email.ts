import { ValueObject } from '@contexts/shared/domain/core/value-object';
import { InvalidEmailException } from '../exceptions/invalid-email.exception';

export class Email extends ValueObject<string> {
  protected validate(): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
      throw new InvalidEmailException(this.value);
    }
  }

  static create(email: string): Email {
    return new Email(email);
  }
}
