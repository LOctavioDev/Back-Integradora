import { Router } from "express";
import actionsController from "../../controllers/actions.controller.js";
const router = Router();

router.get('/room1/openDoor', actionsController.room1Door)
router.get('/room1/openWindow', actionsController.room1Window)
router.get('/room1/ligth', actionsController.room1Light)

router.get('/room2/openDoor', actionsController.room2Door)
router.get('/room3/openDoor', actionsController.room3Door)
router.get('/bathroom1/openDoor', actionsController.bathroom1Door)
router.get('/bathroom2/openDoor', actionsController.bathroom2Door)
router.get('/kitchen/openDoor', actionsController.kitchenDoor)
router.get('/livingRoom/openDoor', actionsController.livingRoomDoor)
router.get('/garaje/openDoor', actionsController.garajeDoor)



export default router;
