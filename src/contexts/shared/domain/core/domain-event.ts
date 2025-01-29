export abstract class DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly eventDate: Date = new Date(),
  ) {}

  abstract eventName(): string;
}
