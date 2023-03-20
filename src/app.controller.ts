import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

const ssss = 22223333;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const s = 2223222;

    return this.appService.getHello();
  }
}
