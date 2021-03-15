import { Servico } from 'src/servico/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({length: 15})
  telefone: string;

  @Column({length: 14})
  cpf: string;

  @OneToMany(() => Servico, servico => servico.usuario)
  servicos: Servico[];

}