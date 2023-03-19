import { Injectable } from '@nestjs/common';

const s = 2;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ssld!';
  }
}
