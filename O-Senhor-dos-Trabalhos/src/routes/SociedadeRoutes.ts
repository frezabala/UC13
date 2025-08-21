import { Router } from "express";
import { SociedadeController } from "../controllers/SociedadeController";


const router = Router();
const controller = new SociedadeController();

router.get('/personagens/:id', controller.getById);
router.get('/personagens',  controller.list);
router.post('/personagens',controller.create);
router.put('/personagens/:id', controller.update);
router.delete('/personagens/:id', controller.delete);

export default router;