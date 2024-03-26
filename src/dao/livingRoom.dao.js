import { livingRoom } from "../models/sensor.model.js";
const livingRoomDao = {}

livingRoomDao.addSensor = async (data) => {
    return await livingRoom.create(data);
}

livingRoomDao.deleteData = async () => {
    return await livingRoom.deleteMany();
}

livingRoomDao.getTemperature = async () => {
    return await livingRoom.aggregate([
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

livingRoomDao.getInternalLight = async () => {
    return await livingRoom.aggregate([
        {
            $match: {
                "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
                "location": "Sala",
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


livingRoomDao.getFan = async () => {
    return await livingRoom.aggregate([
        {
            $match: {
                "type": { $regex: /Actuador/i },
                "name": "Ventilador",
                "actions.name": { $regex: /Ventilador encendido|Ventilador apagado/i }
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
                "isOn": { $arrayElemAt: ["$actions.value", 0] } // Proyectamos el valor de la acción "Ventilador encendido"
            }
        }
      ]);
  }
  
  livingRoomDao.getDoor = async () => {
    return await livingRoom.aggregate([
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
  
  livingRoomDao.getWindow = async () => {
    return await livingRoom.aggregate([
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
  

export default livingRoomDao;