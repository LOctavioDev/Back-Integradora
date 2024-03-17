// Rutas generales para insertar datos de cada habitación
import { Router } from 'express';
import kitchenController from '../controllers/kitchen.controller.js';
import roomController from '../controllers/room.controller.js';
import specificationsController from '../controllers/specifications.controller.js';
import livingRoomController from '../controllers/livingRoom.controller.js';
import bathroomController from '../controllers/bathroom.controller.js';
const router = Router();

//Especificaciones de los sensores
router.post('/specifications', specificationsController.insertOne);

//Insert habitaciones

router.post('/bathroom1', bathroomController.addSensorOne);
router.post('/bathroom2', bathroomController.addSensorTwo);
router.post('/kitchen', kitchenController.addSensorHumidity);
router.post('/livingroom', livingRoomController.addSensor);
router.post('/room1', roomController.addSensorOne);
router.post('/room2', roomController.addSensorTwo);
router.post('/room3', roomController.addSensorThree);

export default router;
