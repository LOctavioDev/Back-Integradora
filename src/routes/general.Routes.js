// Rutas generales para insertar datos de cada habitación
import { Router } from 'express';
import kitchenController from '../controllers/kitchen.controller.js';
import roomController from '../controllers/room.controller.js';
import specificationsController from '../controllers/specifications.controller.js';
import livingRoomController from '../controllers/livingRoom.controller.js';
import bathroomController from '../controllers/bathroom.controller.js';
import garajeController from '../controllers/garaje.controller.js';
const router = Router();

//Especificaciones de los sensores
router.post('/specifications', specificationsController.insertOne);

//Insert habitaciones
router.post('/garaje', garajeController.addSensor)
router.post('/bathroom1', bathroomController.addSensorOne);
router.post('/bathroom2', bathroomController.addSensorTwo);
router.post('/kitchen', kitchenController.addSensorHumidity);
router.post('/livingroom', livingRoomController.addSensor);
router.post('/room1', roomController.addSensorOne);
router.post('/room2', roomController.addSensorTwo);
router.post('/room3', roomController.addSensorThree);

//BORRAR DATOS INDIVIDUALES
router.delete('/delete/bathroom1', bathroomController.deleteDataOne)
router.delete('/delete/bathroom2', bathroomController.deleteDataTwo)
router.delete('/delete/garaje', garajeController.deleteData)
router.delete('/delete/room1', roomController.deleteDataOne)
router.delete('/delete/room2', roomController.deleteDataTwo)
router.delete('/delete/room3', roomController.deleteDataThree)
router.delete('/delete/livingroom', livingRoomController.deleteData)
router.delete('/delete/kitchen', kitchenController.deleteData)

export default router;
