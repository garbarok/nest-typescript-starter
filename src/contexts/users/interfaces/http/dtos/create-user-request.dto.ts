import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserRequestDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(2)
  readonly name: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}
