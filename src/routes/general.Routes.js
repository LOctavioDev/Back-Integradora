// Rutas
import { Router } from 'express';
import sensorController from '../controllers/sensor.Controller.js';
const router = Router();

router.post('/', sensorController.insertOne);


export default router;
