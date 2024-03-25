import { garaje } from "../models/sensor.model.js";
const garajeDao = {}

garajeDao.addSensor = async (data) => {
    return await garaje.create(data);
}

garajeDao.deleteData = async () => {
    return await garaje.deleteMany();
}

garajeDao.getInternalLight = async () => {
    return await garaje.aggregate([
        {
            $match: {
                "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
                "location": "Garaje",
                "name": "Luz Interior",
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
                "isOn": "$Luz.value",

            }
        }
    ]);
}

garajeDao.getPresence = async () => {
    return await garaje.aggregate([
        {
            $match: {
                "type": { $regex: /sensor/i }, // Utilizamos $regex para buscar "sensor"
                "readings.name": { $regex: /Presencia/i } // Utilizamos $regex para buscar "Presencia"
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
                "Presencia": {
                    $filter: { input: "$readings", cond: { $regexMatch: { input: "$$this.name", regex: /Presencia/i } } }
                }
            }
        },
        {
            $project: {
                "isPresence": { $arrayElemAt: ["$Presencia.value", 0] }
            }
        }
    ])
}
garajeDao.getDoor = async () => {
    return await garaje.aggregate([
        {
            $match: {
                "type": "Actuador",
                "name": "Puerta",
                "actions.name": { $regex: /Puerta abierta|Puerta cerrada/i }
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


garajeDao.getWindow = async () => {
    return await garaje.aggregate([
        {
            $match: {
                "type": "Actuador",
                "name": "Ventana Sencilla",
                "actions.name": { $regex: /Ventana cerrada|Ventana abierta/i }
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


export default garajeDao;