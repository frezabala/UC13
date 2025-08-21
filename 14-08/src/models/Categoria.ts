import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from './Produto';

@Entity('categorias')
export class Categoria{
    @PrimaryGeneratedColumn()
    id: number;


    @Column({length: 100, nullable: false})
    name:string;

    @OneToMany(()=> Produto, produto => produto.categoria)
    produtos : Produto[];


}






