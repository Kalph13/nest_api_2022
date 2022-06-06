import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*
  Controller: Get URL and Excute Functions (≒ Router in Express)
  @Get ≒ Get Router (app.get) in Express
  @Get and the Function Should be Placed Adjacently
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return this.appService.home();
  }
}
