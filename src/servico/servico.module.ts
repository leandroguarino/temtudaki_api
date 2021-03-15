import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { TokenModule } from 'src/token/token.module';
import { DatabaseModule } from '../database/database.module';
import { ServicoController } from './servico.controller';
import { servicoProviders } from './servico.providers';
import { ServicoService } from './servico.service';

@Module({
  imports: [DatabaseModule, TokenModule],
  controllers: [ServicoController],
  providers: [
    ...servicoProviders,
    ServicoService,
  ],
  exports: [ServicoService]
})
export class ServicoModule {}