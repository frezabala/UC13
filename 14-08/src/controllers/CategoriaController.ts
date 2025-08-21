import {Request, Response} from 'express';
import { AppDataSource } from '../config/data-source';

import { Categoria } from '../models/Categoria';


export class CategoriaContoller{

    private categoriaRepository = AppDataSource.getRepository(Categoria);

     async create(req: Request, res: Response){
        const {name} = req.body;
        const categoria = this.categoriaRepository.create({name})
         await this.categoriaRepository.save(categoria);
           return res.status(201).json(categoria);
     }

}