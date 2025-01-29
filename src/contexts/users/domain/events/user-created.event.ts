import { DomainEvent } from '@contexts/shared/domain/core/domain-event';

export class UserCreatedEvent extends DomainEvent {
  constructor(
    aggregateId: string,
    public readonly email: string,
    public readonly name: string,
    public readonly password: string,
  ) {
    super(aggregateId);
  }

  eventName(): string {
    return 'user.created';
  }
}
