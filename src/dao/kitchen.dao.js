import { kitchen } from "../models/sensor.model.js";
const kitchenDao = {}

kitchenDao.addSensorHumidity = async (Kitchen) => {
    return await kitchen.create(Kitchen);
   
}

kitchenDao.getGasConcentration = async () => {
    return await kitchen.aggregate([
        {
          $match: {
            "type": "sensor",
            "readings.name": { $in: ["Concentración de gas"] }
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
            "Gas": {
              $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Concentración de Gas"] } }
            }
          }
        },
        {
          $project: {
            "Gas": { $arrayElemAt: ["$Gas.value", 0] },
          }
        }
      ]);
}

kitchenDao.getTemperature = async () => {
    return await kitchen.aggregate([
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

export default kitchenDao;