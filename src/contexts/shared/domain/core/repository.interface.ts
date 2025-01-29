export interface Repository<T> {
  save(aggregate: T): Promise<void>;
  delete(id: string): Promise<void>;
}
