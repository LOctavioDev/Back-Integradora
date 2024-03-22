import bathroomController from "../../controllers/bathroom.controller.js";
import kitchenController from "../../controllers/kitchen.controller.js";
import roomController from "../../controllers/room.controller.js";
import generalController from "../../controllers/general.controller.js";
import { Router } from "express";
import livingRoomController from "../../controllers/livingRoom.controller.js";
const router = Router();

//TEMPERATURA

router.get('/room1/temperature', roomController.getOneTemperature)
router.get('/room2/temperature', roomController.getTwoTemperature)
router.get('/room3/temperature', roomController.getThreeTemperature)
router.get('/kitchen/temperature', kitchenController.getTemperature)
router.get('livingroom/temperature', livingRoomController.getTemperature)

//GAS   
router.get('/kitchen/gas', kitchenController.getGasConcentration)

//PRESENCIA
router.get('/bathroom1/presence', bathroomController.getOnePresence);
router.get('/bathroom2/presence', bathroomController.getTwoPresence);

//LUZ EXTERIOR
// router.get('/bathroom2/external-light', bathroomController.getExternalLightTwo)
// router.get('/bathroom1/external-light', bathroomController.getExternalLightOne)
// router.get('/room1/external-light', roomController.getExternalLightOne)
// router.get('/room2/external-light', roomController.getExternalLightTwo)
// router.get('/room3/external-light', roomController.getExternalLightThree)
// router.get('/kitchen/external-light', kitchenController.getExternalLight)

//LUZ INTERIOR
router.get('/kitchen/internal-light', kitchenController.getInternalLight)
router.get('/room1/internal-light', roomController.getInternalLightOne)
router.get('/room2/internal-light', roomController.getInternalLightTwo)
router.get('/room3/internal-light', roomController.getInternalLightthree)
router.get('/bathroom1/internal-light', bathroomController.getInternalLightOne)
router.get('/bathroom2/internal-light', bathroomController.getInternalLightTwo)
router.get('/livingroom/internal-light', livingRoomController.getInternalLight)

// VENTILADOR
router.get('/kitchen/fan', kitchenController.getFan)
router.get('/bathroom1/fan', bathroomController.getFanOne)
router.get('/bathroom2/fan', bathroomController.getFanTwo)
router.get('/room1/fan', roomController.getFanOne)
router.get('/room2/fan', roomController.getFanTwo)
router.get('/room3/fan', roomController.getFanThree)

// PUERTAS
router.get('/kitchen/door', kitchenController.getDoor)
router.get('/room1/door', roomController.getDoorOne)
router.get('/room2/door', roomController.getDoorTwo)
router.get('/room3/door', roomController.getDoorThree)


// VENTANAS
router.get('/kitchen/window', kitchenController.getWindow)
router.get('/bathroom1/window', bathroomController.getWindowOne)
router.get('/bathroom1/window', bathroomController.getWindowTwo)


//BORRAR DATOS -PROMISE-
router.get('/delete', generalController.deleteData)

export default router;