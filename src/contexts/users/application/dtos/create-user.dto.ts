export class CreateUserDto {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly password: string,
  ) {}
}
