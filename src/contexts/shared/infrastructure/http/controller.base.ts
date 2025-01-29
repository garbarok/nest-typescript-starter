import { Response } from 'express';
import { Logger } from '@nestjs/common';

export abstract class BaseController {
  constructor(private readonly logger: Logger) {}

  protected abstract executeImpl(req: any, res: Response): Promise<void>;

  public async execute(req: any, res: Response): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      this.logger.error(err);
      this.fail(res, 'An unexpected error occurred');
    }
  }

  public ok<T>(res: Response, dto?: T): Response {
    if (dto) {
      return res.status(200).json(dto);
    }
    return res.sendStatus(200);
  }

  public created(res: Response): Response {
    return res.sendStatus(201);
  }

  public fail(res: Response, error: Error | string): Response {
    return res.status(500).json({
      message: error.toString(),
    });
  }
}
