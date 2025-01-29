export abstract class ValueObject<T> {
  constructor(protected readonly value: T) {
    this.validate();
  }

  protected abstract validate(): void;

  equals(other: ValueObject<T>): boolean {
    return this.value === other.value;
  }

  getValue(): T {
    return this.value;
  }
}
