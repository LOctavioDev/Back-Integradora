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
                "name": "Luz Interior",
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

livingRoomDao.getAll = async () => {
    return await livingRoom.find().limit(500)
}

livingRoomDao.getDataChart = async () => {
    return await livingRoom.aggregate([
 // Etapa 1: Filtrar documentos para los últimos 7 días
 {
    $match: {
        type: { $regex: /Actuador/i},   
        startsAt: {
            $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) // Fecha actual menos 7 días
        }
    }
},
// Etapa 2: Agregar un nuevo campo "diaInicio" que contenga solo la fecha (sin la hora) de "startsAt"
{
    $addFields: {
        diaInicio: { $dateToString: { format: "%Y-%m-%d", date: "$startsAt" } }
    }
},
// Etapa 3: Agrupar por el campo "diaInicio" y contar los documentos en cada grupo
{
    $group: {
        _id: "$diaInicio",
        totalDocumentos: { $sum: 1 } // Contar documentos en cada grupo
    }
},
// Etapa 4: Ordenar los resultados por fecha de inicio
{
    $sort: { _id: 1 } // Orden ascendente por fecha de inicio
}
]); 
}


livingRoomDao.getAverageTemperature = async () => {
    return await livingRoom.aggregate([
        // Etapa 1: Filtrar documentos para los últimos 7 días
        {
           $match: {
               startsAt: {
                   $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000) // Fecha actual menos 7 días
               }
           }
       },
       // Etapa 2: Agregar un nuevo campo "diaInicio" que contenga solo la fecha (sin la hora) de "startsAt"
       {
           $addFields: {
               diaInicio: { $dateToString: { format: "%Y-%m-%d", date: "$startsAt" } }
           }
       },
       // Etapa 3: Desenrollar (unwind) el arreglo de lecturas (readings)
       {
           $unwind: "$readings"
       },
       // Etapa 4: Proyectar solo las lecturas de interés (temperatura, humedad y gas)
       {
           $match: {
               "readings.name": { $in: ["Deteccion de Temperatura", "Deteccion de Humedad"] }
           }
       },
       // Etapa 5: Convertir las lecturas numéricas de temperatura, humedad y gas
       {
           $set: {
               "readings.value": { $toDouble: "$readings.value" }
           }
       },
       // Etapa 6: Agrupar por día y calcular los promedios de temperatura, humedad y gas
       {
           $group: {
               _id: "$diaInicio",
               temperaturaPromedio: { $avg: { $cond: [{ $eq: ["$readings.name", "Deteccion de Temperatura"] }, "$readings.value", null] } },
               humedadPromedio: { $avg: { $cond: [{ $eq: ["$readings.name", "Deteccion de Humedad"] }, "$readings.value", null] } },
            //    gasPromedio: { $avg: { $cond: [{ $eq: ["$readings.name", "Concentracion de Gas"] }, "$readings.value", null] } }
           }
       },
       // Etapa 7: Ordenar los resultados por fecha de inicio
       {
           $sort: { _id: 1 } // Orden ascendente por fecha de inicio
       }
       ]);
       
}

export default livingRoomDao;