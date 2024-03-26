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

kitchenDao.getExternalLight = async () => {
  return await kitchen.aggregate([
      {
          $match: {
              "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
              "location": "Cocina",
              "actions.name": { $regex: /Luz Exterior/i } // Utilizamos $regex para buscar "Luz apagada" o "Luz encendida"
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
            "isOn": { $arrayElemAt: ["$actions.status", 0] } // Proyectamos el valor de la acción "Ventilador encendido"
        }
      }
  ]);
}

kitchenDao.getInternalLight = async () => {
  return await kitchen.aggregate([
    {
        $match: {
            "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
            "location": "Cocina",
            "name":"Luz Interior",
            "actions.name": { $regex: /Luz interior/i } // Ajustamos la expresión regular para que coincida con "Luz interior apagada" o "Luz interior encendida"
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
            "isOn": { $arrayElemAt: ["$actions.status", 0] } // Proyectamos el valor de la acción "Ventilador encendido"
        }
    }
]);
}

kitchenDao.getFan = async () => {
  return await kitchen.aggregate([
    {
        $match: {
            "type": { $regex: /Actuador/i },
            "name": "Ventilador",
            "actions.name": { $regex: /Ventilador/i }
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
            "isOn": { $arrayElemAt: ["$actions.status", 0] } // Proyectamos el valor de la acción "Ventilador encendido"
        }
    }
  ]);
}

kitchenDao.getDoor = async () => {
  return await kitchen.aggregate([
    {
        $match: {
            "type": "Actuador",
            "name": "Puerta",
            "actions.name": { $regex: /Puerta/i }
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
            "isOpened": { $arrayElemAt: ["$actions.status", 0] } // Corrección aquí, proyectamos el valor de la acción "Puerta cerrada"
        }
    }
  ]);
}

kitchenDao.getWindow = async () => {
    return await kitchen.aggregate([
      {
          $match: {
              "type": "Actuador",
              "name": "Ventana Sencilla",
              "actions.name": { $regex: /Ventana/i } // Puedes ajustar el regex según necesites
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
              "isOpened": { $arrayElemAt: ["$actions.status", 0] } // Proyectamos el valor del campo "status" de la acción
          }
      }
    ]);
  }
  

export default kitchenDao;