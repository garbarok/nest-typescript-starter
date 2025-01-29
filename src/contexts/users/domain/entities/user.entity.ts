import { AggregateRoot } from '@contexts/shared/domain/core/aggregate-root';
import { Email } from '../value-objects/email';
import { UserCreatedEvent } from '../events/user-created.event';

export class User extends AggregateRoot {
  private constructor(
    private readonly id: string,
    private email: Email,
    private name: string,
    private password: string,
    private active: boolean = true,
  ) {
    super();
  }

  static create(
    id: string,
    email: Email,
    name: string,
    password: string,
  ): User {
    const user = new User(id, email, name, password);
    user.addEvent(new UserCreatedEvent(id, email.getValue(), name, password));
    return user;
  }

  getId(): string {
    return this.id;
  }

  getEmail(): Email {
    return this.email;
  }

  getName(): string {
    return this.name;
  }

  getPassword(): string {
    return this.password;
  }

  isActive(): boolean {
    return this.active;
  }

  deactivate(): void {
    this.active = false;
  }

  activate(): void {
    this.active = true;
  }
}
