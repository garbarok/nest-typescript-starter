import { DomainException } from '@contexts/shared/domain/exceptions/domain.exception';

export class InvalidPasswordException extends DomainException {
  constructor(message: string) {
    super(message);
  }
}
