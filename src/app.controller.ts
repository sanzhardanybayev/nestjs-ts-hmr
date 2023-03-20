import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

const ssss = 333;
const ssssxa = 23311;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const s = 22;

    return this.appService.getHello();
  }
}
