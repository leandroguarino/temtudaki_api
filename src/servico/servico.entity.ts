import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  titulo: string;

  @Column({ length: 255 })
  descricao: string;

  @ManyToOne(() => Usuario, usuario => usuario.servicos)
  usuario: Usuario

}