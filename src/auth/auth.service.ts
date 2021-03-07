import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/token/token.service';
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
      private usuarioService: UsuarioService,
      private jwtService: JwtService,
      private tokenService: TokenService
    ) {}

    async validarUsuario(email: string, senha: string): Promise<any> {
      const usuario = await this.usuarioService.findOne(email);
      if (usuario && bcrypt.compareSync(senha, usuario.password)) {
        const { password, ...result } = usuario;
        return result;
      }
      return null;
    }

    async login(user: any) {
      const payload = { username: user.email, sub: user.id };
      const token = this.jwtService.sign(payload)
      this.tokenService.save(token, user.email)
      return {
        access_token: token
      };
    }

    async loginToken(token: string) {
      let usuario: Usuario = await this.tokenService.getUsuarioByToken(token)
      if (usuario){
        return this.login(usuario)
      }else{
        return new HttpException({
          errorMessage: 'Token inválido'
        }, HttpStatus.UNAUTHORIZED)
      }
    }

}
