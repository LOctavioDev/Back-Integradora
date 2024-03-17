import bathroomController from "../../controllers/bathroom.controller.js";
import { Router } from "express";
const router = Router();

router.get('/bathroom1/temperature', bathroomController.getTemeperature);

export default router;