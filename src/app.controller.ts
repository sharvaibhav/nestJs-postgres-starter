import { Controller, Get, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private configService: ConfigService) {}

  @Get('health')
  health(): string {
    const dbHost = this.configService.get<string>('db.postgres.port');
    Logger.log(`info -- ${dbHost}`);
    return 'OK';
  }
}
