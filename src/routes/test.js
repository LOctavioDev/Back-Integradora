import { Router } from 'express';
import kitchenController from '../controllers/kitchen.controller.js';
import roomController from '../controllers/room.controller.js';
import specificationsController from '../controllers/specifications.controller.js';
import livingRoomController from '../controllers/livingRoom.controller.js';
import bathroomController from '../controllers/bathroom.controller.js';
import garajeController from '../controllers/garaje.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Sensores
 *   description: Endpoints para el manejo de sensores
 */

/**
 * @swagger
 * /api/sensors/specifications:
 *   post:
 *     summary: Agrega especificaciones de sensores.
 *     description: Agrega las especificaciones de sensores para la configuración inicial del sistema.
 *     tags:
 *       - Sensores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sensorType:
 *                 type: string
 *                 description: Tipo de sensor (ej. temperatura, humedad, luz, etc.).
 *              
 *     responses:
 *       200:
 *         description: Especificaciones de sensores agregadas correctamente.
 */
router.post('/specifications', specificationsController.insertOne);

/**
 * @swagger
 * /api/sensors/garaje:
 *   post:
 *     summary: Agrega un sensor en el garaje.
 *     description: Agrega un nuevo sensor al sistema ubicado en el garaje.
 *     tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en el garaje.
 */
router.post('/garaje', garajeController.addSensor);


/**
 * @swagger
 * /api/sensors/bathroom1:
 *   post:
 *     summary: Agrega un sensor en el baño 1.
 *     description: Agrega un nuevo sensor al sistema ubicado en el baño 1.
 *      tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en el baño 1.
 */
router.post('/bathroom1', bathroomController.addSensorOne);

/**
 * @swagger
 * /api/sensors/bathroom2:
 *   post:
 *     summary: Agrega un sensor en el baño 2.
 *     description: Agrega un nuevo sensor al sistema ubicado en el baño 2.
 *     tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en el baño 2.
 */
router.post('/bathroom2', bathroomController.addSensorTwo);

/**
 * @swagger
 * /api/sensors/kitchen:
 *   post:
 *     summary: Agrega un sensor en la cocina.
 *     description: Agrega un nuevo sensor al sistema ubicado en la cocina.
 *       tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en la cocina.
 */
router.post('/kitchen', kitchenController.addSensorHumidity);

/**
 * @swagger
 * /api/sensors/livingroom:
 *   post:
 *     summary: Agrega un sensor en la sala de estar.
 *     description: Agrega un nuevo sensor al sistema ubicado en la sala de estar.
 *       tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en la sala de estar.
 */
router.post('/livingroom', livingRoomController.addSensor);

/**
 * @swagger
 * /api/sensors/room1:
 *   post:
 *     summary: Agrega un sensor en la habitación 1.
 *     description: Agrega un nuevo sensor al sistema ubicado en la habitación 1.
 *      tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en la habitación 1.
 */
router.post('/room1', roomController.addSensorOne);

/**
 * @swagger
 * /api/sensors/room2:
 *   post:
 *     summary: Agrega un sensor en la habitación 2.
 *     description: Agrega un nuevo sensor al sistema ubicado en la habitación 2.
 *       tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en la habitación 2.
 */
router.post('/room2', roomController.addSensorTwo);

/**
 * @swagger
 * /api/sensors/room3:
 *   post:
 *     summary: Agrega un sensor en la habitación 3.
 *     description: Agrega un nuevo sensor al sistema ubicado en la habitación 3.
 *       tags:
 *       - Sensores
 *     responses:
 *       200:
 *         description: Sensor agregado correctamente en la habitación 3.
 */
router.post('/room3', roomController.addSensorThree);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Agrega un nuevo usuario.
 *     description: Agrega un nuevo usuario al sistema.
 *       tags:
 *       - Sensores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *               // Otros campos del usuario...
 *     responses:
 *       200:
 *         description: Usuario agregado correctamente.
 */
router.post('/', userController.insertOne);

/**
 * @swagger
 * /api/users/validate:
 *   post:
 *     summary: Valida un usuario.
 *     description: Valida las credenciales de un usuario.
  *     tags:
 *       - Sensores 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario.
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario.
 *     responses:
 *       200:
 *         description: Credenciales de usuario válidas.
 *       401:
 *         description: Credenciales de usuario inválidas.
 */
router.post('/validate', userController.validateUser);

/**
 * @swagger
 * /api/users/changePassword:
 *   post:
 *     summary: Cambia la contraseña de un usuario.
 *     description: Cambia la contraseña de un usuario existente.
*     tags:
 *       - Sensores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario.
 *               oldPassword:
 *                 type: string
 *                 description: Contraseña actual del usuario.
 *               newPassword:
 *                 type: string
 *                 description: Nueva contraseña del usuario.
 *     responses:
 *       200:
 *         description: Contraseña cambiada correctamente.
 *       401:
 *         description: La contraseña actual es incorrecta.
 */
router.post('/changePassword', userController.changePassword);


export default router;
