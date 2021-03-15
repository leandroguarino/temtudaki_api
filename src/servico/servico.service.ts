import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Servico } from './servico.entity';
import { ServicoCadastrarDto } from './dto/servico.cadastrar.dto';
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class ServicoService {
  constructor(
    @Inject('SERVICO_REPOSITORY')
    private servicoRepository: Repository<Servico>,
  ) {}

  async cadastrar(data: ServicoCadastrarDto, usuario: Usuario): Promise<ResultadoDto>{
    let servico = new Servico()
    servico.titulo = data.titulo
    servico.descricao = data.descricao
    servico.usuario = usuario
    return this.servicoRepository.save(servico).then(() => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Serviço cadastrado com sucesso"
      }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o serviço"
      }
    })
  }
}