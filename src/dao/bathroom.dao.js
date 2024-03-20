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
        "type": "sensor",
        "readings.name": { $in: ["Humedad", "Temperatura"] }
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
          $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Humedad"] } }
        },
        "temperatura": {
          $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Temperatura"] } }
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
        "type": "sensor",
        "readings.name": { $in: ["Presencia Detectada"] }
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
          $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Presencia Detectada"] } }
        }
      }
    },
    {
      $project: {
        "Presencia": { $arrayElemAt: ["$Presencia.value", 0] },
      }
    }
  ])
}

bathroomDao.getExternalLightOne = async () => {
  return await bathroom2.aggregate([
    {
      $match: {
        "type": "Actuador",
        "location": "Baño 1",
        "readings.name": { $in: ["Luz apagada", "Luz encendida"] }
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
            $filter: { input: "$readings", cond: { $in: ["$$this.name", ["Luz apagada", "Luz encendida"]] } }
          }, 0]
        }
      }
    },
    {
      $project: {
        "estatus_luz": "$Luz.value"
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
        "type": "sensor",
        "readings.name": { $in: ["Humedad", "Temperatura"] }
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
          $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Humedad"] } }
        },
        "temperatura": {
          $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Temperatura"] } }
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
        "type": "sensor",
        "readings.name": { $in: ["Presencia Detectada"] }
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
          $filter: { input: "$readings", cond: { $eq: ["$$this.name", "Presencia Detectada"] } }
        }
      }
    },
    {
      $project: {
        "Presencia": { $arrayElemAt: ["$Presencia.value", 0] },
      }
    }
  ])
}

export default bathroomDao;