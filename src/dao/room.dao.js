import { room1, room2, room3} from "../models/sensor.model.js";
const roomDao = {}

roomDao.addSensorOne = async (data) => {
   return await room1.create(data);
    
}

roomDao.addSensorTwo = async (data) => {
   return await room2.create(data);
}

roomDao.addSensorThree = async (data) => {
   return await room3.create(data);
}

export default roomDao;