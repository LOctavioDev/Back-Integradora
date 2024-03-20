import bathroomController from "../../controllers/bathroom.controller.js";
import kitchenController from "../../controllers/kitchen.controller.js";
import roomController from "../../controllers/room.controller.js";
import { Router } from "express";
const router = Router();

//TEMPERATURA
router.get('/bathroom1/temperature', bathroomController.getOneTemperature);
router.get('/bathroom2/temperature', bathroomController.getTwoTemperature);
router.get('/room1/temperature', roomController.getOneTemperature)
router.get('/room2/temperature', roomController.getTwoTemperature)
router.get('/room3/temperature', roomController.getThreeTemperature)
router.get('/kitchen/temperature', kitchenController.getTemperature)
router.get('/kitchen/gas', kitchenController.getGasConcentration)

//presencia
router.get('/bathroom1/presence', bathroomController.getOnePresence);
router.get('/bathroom2/presence', bathroomController.getTwoPresence);

export default router;