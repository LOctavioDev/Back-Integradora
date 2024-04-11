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
        "name":"Luz Interior",
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

export default roomDao;