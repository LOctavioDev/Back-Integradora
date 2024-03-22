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
                "location": "Cocina",
                "name":"Luz Interior",
                "actions.name": { $regex: /Luz interior\s(apagada|encendida)/i } // Ajustamos la expresión regular para que coincida con "Luz interior apagada" o "Luz interior encendida"
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
                "Luz": {
                    $arrayElemAt: [{
                        $filter: { input: "$actions", cond: { $regexMatch: { input: "$$this.name", regex: /Luz interior\s(apagada|encendida)/i } } }
                    }, 0]
                }
            }
    
        },
        {
            $project: {
                "Luz interior": "$Luz.value",
    
            }
        }
    ]);
}
export default livingRoomDao;