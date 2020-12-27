import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('objeto')
  getObject(): any {
    return this.appService.getObject()
  }

  @Post('cadastrar')
  cadastrar(): Promise<any>{
    return <any>{
      mensagem: "Salvou"
    }
  }
}
