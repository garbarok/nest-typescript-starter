import { DomainEvent } from './domain-event';

export abstract class AggregateRoot {
  private domainEvents: DomainEvent[] = [];

  protected addEvent(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  public pullDomainEvents(): DomainEvent[] {
    const events = [...this.domainEvents];
    this.domainEvents = [];
    return events;
  }
}
