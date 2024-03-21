import { garaje } from "../models/sensor.model.js";
const garajeDao = {}

garajeDao.addSensor = async (data) => {
    return await garaje.create(data);
}

garajeDao.deleteData = async () => {
    return await garaje.deleteMany();
}

export default garajeDao;