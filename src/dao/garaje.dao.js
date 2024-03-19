import { garaje } from "../models/sensor.model.js";
const garajeDao = {}

garajeDao.addSensor = async (data) => {
    return await garaje.create(data);
}

export default garajeDao;