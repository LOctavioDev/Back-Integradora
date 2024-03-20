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

roomDao.getOneTemperature = async () => {
  return await room1.aggregate([
     {
       $match: {
         "type": { $regex: /sensor/i }, // Utilizamos $regex para buscar "sensor"
         "readings.name": { $regex: /Humedad|Temperatura/i } // Utilizamos $regex para buscar "Humedad" o "Temperatura"
       }
     },
     {
       $sort: { "startsAt": -1 }
     },
     {
       $limit: 1
     },
     {
       $project: {
         "_id": 0,
         "humedad": {
           $filter: { input: "$readings", cond: { $regexMatch: { input: "$$this.name", regex: /Humedad/i } } }
         },
         "temperatura": {
           $filter: { input: "$readings", cond: { $regexMatch: { input: "$$this.name", regex: /Temperatura/i } } }
         }
       }
     },
     {
       $project: {
         "Humedad": { $arrayElemAt: ["$humedad.value", 0] },
         "Temperatura": { $arrayElemAt: ["$temperatura.value", 0] }
       }
     }
   ]);
}
  
roomDao.getTwoTemperature = async () => {
   return await room2.aggregate([
      {
        $match: {
          "type": "sensor",
          "readings.name": { $in: ["Humedad", "Temperatura"] }
        }
      },
      {
        $sort: { "startsAt": -1 }
      },
      {
        $limit: 1
      },
      {
        $project: {
          "_id": 0,
          "humedad": {
            $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Humedad"] } }
          },
          "temperatura": {
            $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Temperatura"] } }
          }
        }
      },
      {
        $project: {
          "Humedad": { $arrayElemAt: ["$humedad.value", 0] },
          "Temperatura": { $arrayElemAt: ["$temperatura.value", 0] }
        }
      }
    ]);
}

roomDao.getThreeTemperature = async () => {
   return await room3.aggregate([
      {
        $match: {
          "type": "sensor",
          "readings.name": { $in: ["Humedad", "Temperatura"] }
        }
      },
      {
        $sort: { "startsAt": -1 }
      },
      {
        $limit: 1
      },
      {
        $project: {
          "_id": 0,
          "humedad": {
            $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Humedad"] } }
          },
          "temperatura": {
            $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Temperatura"] } }
          }
        }
      },
      {
        $project: {
          "Humedad": { $arrayElemAt: ["$humedad.value", 0] },
          "Temperatura": { $arrayElemAt: ["$temperatura.value", 0] }
        }
      }
    ]);
}

export default roomDao;