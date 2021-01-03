import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.email = data.email
    usuario.nome = data.nome
    usuario.password = data.senha
    usuario.telefone = data.telefone
    usuario.cpf = data.cpf
    return this.usuarioRepository.save(usuario)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Usuário cadastrado com sucesso"
      }
    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um errro ao cadastrar o usuário"
      }
    })    
  } 
}