import userController from "../controllers/user.controller.js";
import { Router } from 'express';
const router = Router();
router.post('/', userController.insertOne);
router.post('/validate', userController.validateUser);

export default router;