import { kitchen } from "../models/sensor.model.js";
const kitchenDao = {}

kitchenDao.addSensorHumidity = async (Kitchen) => {
    return await kitchen.create(Kitchen);
   
}

export default kitchenDao;