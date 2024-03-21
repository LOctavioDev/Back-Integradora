import { kitchen } from "../models/sensor.model.js";
const kitchenDao = {}

kitchenDao.addSensorHumidity = async (Kitchen) => {
    return await kitchen.create(Kitchen);
   
}

kitchenDao.getGasConcentration = async () => {
  return await kitchen.aggregate([
      {
        $match: {
          "type": { $regex: /Sensor/i }, // Utilizamos $regex para la coincidencia con expresiones regulares
          "readings.name": { $regex: /Gas/i } // También utilizamos $regex aquí
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
            $filter: { input: "$readings", cond: { $regexMatch: { input: "$$this.name", regex: /Concentracion de Gas/i } } }
          }
        }
      },
      {
        $project: {
          "Gas": { $arrayElemAt: ["$Gas.value", 0] }
        }
      }
  ]);
}

kitchenDao.getTemperature = async () => {
  return await kitchen.aggregate([
      {
          $match: {
              "type": { $regex: /Sensor/i },
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

kitchenDao.deleteData = async () => {
    return await kitchen.deleteMany();
}

export default kitchenDao;