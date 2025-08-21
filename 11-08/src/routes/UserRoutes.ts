import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

const controller = new UserController();

router.get('/users', controller.list);
router.post('/users', controller.getById);
router.put('/users/:id', controller.create);
router.delete('/users/:id', controller.update);

export default router;