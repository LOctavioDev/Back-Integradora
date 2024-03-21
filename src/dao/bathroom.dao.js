import { bathroom1, bathroom2 } from "../models/sensor.model.js";
const bathroomDao = {}

// Baño 1 
bathroomDao.addSensorOne = async (data) => {
  return await bathroom1.create(data);

}

bathroomDao.getOneTemperature = async () => {
  return await bathroom1.aggregate([
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

bathroomDao.getOnePresence = async () => {
  return await bathroom1.aggregate([
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
        "Presencia": { $arrayElemAt: ["$Presencia.value", 0] }
      }
    }
  ]);
}

bathroomDao.getExternalLightOne = async () => {
  return await bathroom1.aggregate([
    {
      $match: {
        "type": { $regex: /Actuador/i }, // Utilizamos $regex para buscar "Actuador"
        "location": "Baño 1",
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
// Baño 2 
bathroomDao.addSensorTwo = async (data) => {
  return await bathroom2.create(data);

}

bathroomDao.getTwoTemperature = async () => {
  return await bathroom2.aggregate([
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

bathroomDao.getTwoPresence = async () => {
  return await bathroom2.aggregate([
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
        "Presencia": { $arrayElemAt: ["$Presencia.value", 0] }
      }
    }
  ]);
}

bathroomDao.getExternalLightTwo = async () => {
  return await bathroom2.aggregate([
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

bathroomDao.deleteData = async () => {
  await bathroom1.deleteMany();
  await bathroom2.deleteMany();
  return true;
}

export default bathroomDao;