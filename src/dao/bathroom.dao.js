import { bathroom1, bathroom2} from "../models/sensor.model.js";
const bathroomDao = {}

bathroomDao.addSensorOne = async (data) => {
   return await bathroom1.create(data);
    
}

bathroomDao.addSensorTwo = async (data) => {
   return await bathroom2.create(data);
}

bathroomDao.getTemeperature = async () => {
   const data = await bathroom1.aggregate([
      {
         $project: {
            _id: 0,
            readings: 1
         }
      }
   ]).limit(1);
   return data;
}

export default bathroomDao;