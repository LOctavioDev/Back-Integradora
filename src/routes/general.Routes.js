// Rutas
import { Router } from 'express';
import sensorController from '../controllers/sensor.Controller.js';
import userController from '../controllers/user.controller.js';
const router = Router();

router.post('/', sensorController.insertOne);
router.post('/user', userController.insertOne);

export default router;
