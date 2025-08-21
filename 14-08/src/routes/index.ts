import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { PostController } from '../controllers/PostController';
import { ProdutoController } from '../controllers/ProdutoController';
import { CategoriaContoller } from '../controllers/CategoriaController';

const routes = Router();
const userController = new UserController();
const postController = new PostController();
const produtoController = new ProdutoController();
const categoriaController = new CategoriaContoller();

routes.get('/users', (req, res )=> userController.list(req, res));
routes.post('/users',(req, res )=> userController.create(req, res));

routes.post('/posts',(req, res )=> postController.create(req, res));

routes.post('/categoria',(req, res )=> categoriaController.create(req, res));

routes.post('/produto',(req, res )=> produtoController.create(req, res));
routes.get('/produto',(req, res )=> produtoController.list(req, res));

export default routes;