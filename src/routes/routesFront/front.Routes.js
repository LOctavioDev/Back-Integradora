import bathroomController from "../../controllers/bathroom.controller.js";
import kitchenController from "../../controllers/kitchen.controller.js";
import roomController from "../../controllers/room.controller.js";
import generalController from "../../controllers/general.controller.js";
import { Router } from "express";
const router = Router();

//TEMPERATURA
router.get('/bathroom1/temperature', bathroomController.getOneTemperature);
router.get('/bathroom2/temperature', bathroomController.getTwoTemperature);
router.get('/room1/temperature', roomController.getOneTemperature)
router.get('/room2/temperature', roomController.getTwoTemperature)
router.get('/room3/temperature', roomController.getThreeTemperature)
router.get('/kitchen/temperature', kitchenController.getTemperature)

//GAS   
router.get('/kitchen/gas', kitchenController.getGasConcentration)

//PRESENCIA
router.get('/bathroom1/presence', bathroomController.getOnePresence);
router.get('/bathroom2/presence', bathroomController.getTwoPresence);

//LUZ EXTERIOR
router.get('/bathroom2/external-light', bathroomController.getExternalLightTwo)
router.get('/bathroom1/external-light', bathroomController.getExternalLightOne)
router.get('/room1/external-light', roomController.getExternalLightOne)
router.get('/room2/external-light', roomController.getExternalLightTwo)
router.get('/room3/external-light', roomController.getExternalLightThree)

//BORRAR DATOS -PROMISE-
router.get('/delete', generalController.deleteData)

export default router;