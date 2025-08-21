import { Request, Response } from 'express';
import { AppDataSource } from '../config/data-source'; 
import { Produto } from '../models/Produto';
import { Categoria } from '../models/Categoria';


export class ProdutoController{
    private produtoRepository = AppDataSource.getRepository(Produto);
    private categoriaRepository= AppDataSource.getRepository(Categoria);

     async list(req: Request, res: Response){
    const produtos = await this.categoriaRepository.find({ relations: ['categotia'] })
      return res.json(produtos);
    }

    async create(req: Request, res: Response){
        const { name, price, categoriaId} = req.body;
        const categoria = await this.categoriaRepository.findOneBy({id: categoriaId});
        if (!categoria) return res.status(404).json({message: 'Produto not found'});
        
        const produto = this.produtoRepository.create({name, price,categoria});
        await this.produtoRepository.save(produto);
        return res.status(201).json(produto);
    }


}