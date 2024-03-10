import sensorModel from "../models/sensor.model";
const sensorDao = {}

sensorDao.addSensor = async (sensor) => {
    return await sensorModel.create(sensor);
}

export default sensorDao;