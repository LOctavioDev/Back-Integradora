import sensorDao from "../dao/sensor.dao.js";
import sensorModel from "../models/sensor.model.js";
const sensorController  = {};

sensorController.insertOne  = async (req, res) => {

    sensorDao.addSensor(req.body)
    .then((result) => {
        res.status(201).json({message: "Sensor creado"});
    })
    .catch((error) => {
        res.status(500).json({message: "Error al crear el sensor","error": error.msg});
    });
}

export default sensorController;