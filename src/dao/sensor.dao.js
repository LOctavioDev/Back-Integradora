import sensorModel from "../models/sensor.Model.js";
const sensorDao = {}

sensorDao.addSensor = async (sensor) => {
    return await sensorModel.create(sensor);
}

export default sensorDao;