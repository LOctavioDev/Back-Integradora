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

kitchenDao.getDataChart = async () => {
    return await kitchen.aggregate([
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


kitchenDao.getAverageTemperature = async () => {
    return await kitchen.aggregate([
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
               "readings.name": { $in: ["Deteccion de Temperatura", "Deteccion de Humedad", "Concentracion de Gas"] }
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
               gasPromedio: { $avg: { $cond: [{ $eq: ["$readings.name", "Concentracion de Gas"] }, "$readings.value", null] } }
           }
       },
       // Etapa 7: Ordenar los resultados por fecha de inicio
       {
           $sort: { _id: 1 } // Orden ascendente por fecha de inicio
       }
       ]);
       
}    


kitchenDao.getAll = async () => {
    return await kitchen.find().limit(500);
}

export default kitchenDao;