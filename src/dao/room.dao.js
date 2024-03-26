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
            "location": "Recamara 1",
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

roomDao.getFanOne = async () => {
  return await room1.aggregate([
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

roomDao.getDoorOne = async () => {
  return await room1.aggregate([
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

roomDao.getWindowOne = async () => {
  return await room1.aggregate([
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


roomDao.getInternalLightTwo = async () => {
  return await room2.aggregate([
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

roomDao.getFanTwo = async () => {
  return await room2.aggregate([
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

roomDao.getDoorTwo = async () => {
  return await room2.aggregate([
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

roomDao.getWindowTwo = async () => {
  return await room2.aggregate([
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

// 


roomDao.getInternalLightThree = async () => {
  return await room3.aggregate([
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

roomDao.getFanThree = async () => {
  return await room3.aggregate([
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

roomDao.getDoorThree = async () => {
  return await room3.aggregate([
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

roomDao.getWindowThree = async () => {
  return await room3.aggregate([
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

export default roomDao;