import bathroomController from "../../controllers/bathroom.controller.js";
import kitchenController from "../../controllers/kitchen.controller.js";
import roomController from "../../controllers/room.controller.js";
import generalController from "../../controllers/general.controller.js";
import { Router } from "express";
import livingRoomController from "../../controllers/livingRoom.controller.js";
import { garaje } from "../../models/sensor.model.js";
import garajeController from "../../controllers/garaje.controller.js";
const router = Router();

//TEMPERATURA

router.get('/room1/temperature', roomController.getOneTemperature)
router.get('/room2/temperature', roomController.getTwoTemperature)
router.get('/room3/temperature', roomController.getThreeTemperature)
router.get('/livingroom/temperature', livingRoomController.getTemperature)


//PRESENCIA
router.get('/bathroom1/presence', bathroomController.getOnePresence);
router.get('/bathroom2/presence', bathroomController.getTwoPresence);
router.get('/garaje/presence', garajeController.getPresence)

//LUZ INTERIOR SON 8

router.get('/room1/internal-light', roomController.getInternalLightOne)
router.get('/room2/internal-light', roomController.getInternalLightTwo)
router.get('/room3/internal-light', roomController.getInternalLightthree)
router.get('/bathroom1/internal-light', bathroomController.getInternalLightOne)
router.get('/bathroom2/internal-light', bathroomController.getInternalLightTwo)
router.get('/livingroom/internal-light', livingRoomController.getInternalLight)
router.get('/garaje/internal-light', garajeController.getInternalLight)

// VENTILADOR

router.get('/room1/fan', roomController.getFanOne)
router.get('/room2/fan', roomController.getFanTwo)
router.get('/room3/fan', roomController.getFanThree)
router.get('/livingroom/fan', livingRoomController.getFan)

// PUERTAS
router.get('/room1/door', roomController.getDoorOne)
router.get('/room2/door', roomController.getDoorTwo)
router.get('/room3/door', roomController.getDoorThree)
router.get('/livingroom/door', livingRoomController.getDoor)
router.get('/garaje/door', garajeController.getDoor)
router.get('/bathroom1/door', bathroomController.getDoorOne)
router.get('/bathroom2/door', bathroomController.getDoorTwo)

// VENTANAS
router.get('/bathroom1/window', bathroomController.getWindowOne)
router.get('/bathroom2/window', bathroomController.getWindowTwo)
router.get('/livingroom/window', livingRoomController.getWindow)
router.get('/room1/window', roomController.getWindowOne)
router.get('/room2/window', roomController.getWindowTwo)
router.get('/room3/window', roomController.getWindowThree)
router.get('/garaje/window', garajeController.getWindow)

// COCINA
router.get('/kitchen/temperature', kitchenController.getTemperature)
router.get('/kitchen/gas', kitchenController.getGasConcentration)
router.get('/kitchen/fan', kitchenController.getFan)
router.get('/kitchen/window', kitchenController.getWindow)
router.get('/kitchen/internal-light', kitchenController.getInternalLight)
router.get('/kitchen/door', kitchenController.getDoor)
router.get('/kitchen/external-light', kitchenController.getExternalLight)

//luz exterior
router.get('/room1/external-light', roomController.getExternalLightOne)
router.get('/room2/external-light', roomController.getExternalLightTwo)
router.get('/room3/external-light', roomController.getExternalLightThree)
router.get('/garaje/distance', garajeController.getDistance)
router.get('/garaje/gate', garajeController.getGate)

//TODOS LOS DATOS
router.get('/kitchen', kitchenController.getAll)
router.get('/bathroom1', bathroomController.getAllOne)
router.get('/bathroom2', bathroomController.getAllTwo)
router.get('/room1', roomController.getAllOne)
router.get('/room2', roomController.getAllTwo)
router.get('/room3', roomController.getAllThree)
router.get('/livingroom', livingRoomController.getAll)
router.get('/garaje', garajeController.getAll)


// GRAFICA INDEPENDIENTES
router.get('/chart/kitchen', kitchenController.getDataChart)
router.get('/chart/livingroom', livingRoomController.getDataChart)

//GRAFICA PROMEDIOS
router.get('/kitchen/avg', kitchenController.getAverage)
router.get('/livingroom/avg', livingRoomController.getAverage)
router.get('/room1/avg', roomController.getAvg1)
router.get('/room2/avg', roomController.getAvg2)
router.get('/room3/avg', roomController.getAvg3)


//GRAFICA GENERAL
router.get('/chart', generalController.getDataChart)
router.get('/chart/v2', generalController.getSensorsAndActions)
export default router;

