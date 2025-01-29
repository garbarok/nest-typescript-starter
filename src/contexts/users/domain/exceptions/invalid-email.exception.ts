import { DomainException } from '@contexts/shared/domain/exceptions/domain.exception';

export class InvalidEmailException extends DomainException {
  constructor(email: string) {
    super(`The email ${email} is invalid`);
  }
}
