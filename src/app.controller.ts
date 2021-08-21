import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello2')
  getHello2(): string{
    return 'Hello2';
  }
}
