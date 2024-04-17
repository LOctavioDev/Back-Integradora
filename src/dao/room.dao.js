import { room1, room2, room3 } from "../models/sensor.model.js";


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

roomDao.getThreeTemperature = async () => {
  return await room3.aggregate([
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

roomDao.deleteData = async () => {
  await room1.deleteMany();
  await room2.deleteMany();
  await room3.deleteMany();
  return true
}

roomDao.getExternalLightOne = async () => {
  return await room1.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
        "location": "Baño 2",
        "name": "Luz Interior",
        "actions.name": { $regex: /Luz interior/i } // Utilizamos $regex para buscar "Luz apagada" o "Luz encendida"
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

roomDao.getExternalLightTwo = async () => {
  return await room2.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
        "location": "Baño 2",
        "actions.name": { $regex: /Luz apagada|Luz encendida/i } // Utilizamos $regex para buscar "Luz apagada" o "Luz encendida"
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
            $filter: { input: "$actions", cond: { $regexMatch: { input: "$$this.name", regex: /Luz\s(apagada|encendida)/i } } }
          }, 0]
        }
      }

    },
    {
      $project: {
        "Luz": "$Luz.value",

      }
    }
  ]);
}

roomDao.getExternalLightThree = async () => {
  return await room3.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
        "location": "Baño 2",
        "actions.name": { $regex: /Luz apagada|Luz encendida/i } // Utilizamos $regex para buscar "Luz apagada" o "Luz encendida"
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
            $filter: { input: "$actions", cond: { $regexMatch: { input: "$$this.name", regex: /Luz\s(apagada|encendida)/i } } }
          }, 0]
        }
      }

    },
    {
      $project: {
        "Luz": "$Luz.value",

      }
    }
  ]);
}

// 
roomDao.getInternalLightOne = async () => {
  return await room1.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
        "name": "Luz Interior",
        "actions.name": { $regex: /Luz Interior/i } // Ajustamos la expresión regular para que coincida con "Luz interior apagada" o "Luz interior encendida"
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

roomDao.getDoorOne = async () => {
  return await room1.aggregate([
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

roomDao.getWindowOne = async () => {
  return await room1.aggregate([
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


roomDao.getInternalLightTwo = async () => {
  return await room2.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
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

roomDao.getFanTwo = async () => {
  return await room2.aggregate([
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

roomDao.getDoorTwo = async () => {
  return await room2.aggregate([
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

roomDao.getWindowTwo = async () => {
  return await room2.aggregate([
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

roomDao.getInternalLightThree = async () => {
  return await room3.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
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

roomDao.getFanThree = async () => {
  return await room3.aggregate([
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
roomDao.getDoorThree = async () => {
  return await room3.aggregate([
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

roomDao.getWindowThree = async () => {
  return await room3.aggregate([
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

roomDao.getFanOne = async () => {
  return await room1.aggregate([
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

roomDao.deleteDataOne = async () => {
  await room1.deleteMany();
  return true
}
roomDao.deleteDataTwo = async () => {
  await room2.deleteMany()
  return true
}

roomDao.deleteDataThree = async () => {
  await room2.deleteMany()
  return true
}

roomDao.getAllOne = async () => {
  return await room1.find();
}

roomDao.getAllTwo = async () => {
  return await room2.find();
}

roomDao.getAllThree = async () => {
  return await room3.find();
}

roomDao.getAvg1 = async () => {
  return await room1.aggregate([
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

roomDao.getAvg2 = async () => {
  return await room2.aggregate([
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

roomDao.getAvg3 = async () => {
  return await room3.aggregate([
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

export default roomDao;