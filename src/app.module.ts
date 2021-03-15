import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [
    AuthModule,
    ServicoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
