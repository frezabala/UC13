import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const router = Router();

const controller = new ProdutoController();

router.get('/users', controller.listAllProdutos);
router.post('/users', controller.createProduto);
router.put('/users/:id', controller.updateProduto);
router.delete('/users/:id', controller.deleteProduto);

export default router;