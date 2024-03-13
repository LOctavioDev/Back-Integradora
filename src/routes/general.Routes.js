// Rutas generales para insertar datos de cada habitación
import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import kitchenController from '../controllers/kitchen.controller.js';
import room1Controller from '../controllers/room1.controller.js';
const router = Router();

router.post('/kitchen', kitchenController.addSensorHumidity);
router.post('/room1', room1Controller.addSensorHumidity);
router.post('/', userController.insertOne);

export default router;
