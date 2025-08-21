import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from './Categoria';

//falta uma importacao 

@Entity('produtos')
export class Produto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name:string;

    @Column({ nullable: false})
    price:number;

    @ManyToOne(() => Categoria, categoria => categoria.produtos)
    categoria: Categoria;

}