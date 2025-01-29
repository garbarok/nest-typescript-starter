import { Controller, Post, Body, Res, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { BaseController } from '@contexts/shared/infrastructure/http/controller.base';
import { CreateUserUseCase } from '../../../application/use-cases/create-user.use-case';
import { CreateUserRequestDto } from '../dtos/create-user-request.dto';
import { v4 as uuidv4 } from 'uuid';
import { DomainException } from '@contexts/shared/domain/exceptions/domain.exception';

@Controller('users')
export class UserController extends BaseController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    logger: Logger,
  ) {
    super(logger);
  }

  protected async executeImpl(req: Request, res: Response): Promise<void> {
    const dto = req.body as CreateUserRequestDto;
    await this.create(dto, res);
  }

  @Post()
  async create(
    @Body() dto: CreateUserRequestDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      await this.createUserUseCase.execute({
        id: uuidv4(),
        email: dto.email,
        name: dto.name,
        password: dto.password,
      });
      this.created(res);
    } catch (error) {
      if (error instanceof DomainException) {
        this.fail(res, error);
        return;
      }
      throw error;
    }
  }
}
