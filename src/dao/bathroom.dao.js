import { bathroom1, bathroom2} from "../models/sensor.model.js";
const bathroomDao = {}

bathroomDao.addSensorOne = async (data) => {
   return await bathroom2.create(data);
    
}

bathroomDao.addSensorTwo = async (data) => {
   return await bathroom2.create(data);
}

export default bathroomDao;