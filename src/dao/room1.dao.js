import { room1 } from "../models/sensor.model.js";
const room1Dao = {}

room1Dao.addSensorHumidity = async (Room1) => {
    const newInsert = await room1.create(Room1);
    newInsert.specifications = [ //preferible estandarizar esos datos
        {
            "name": "Alimentacion",
            "consumption": {
                "value": 2.5,
                "unit": "m/A"
            },
            "projection": {
                "power_suply": "VCD",
                "value": 0.05,
                "unit": "W/h"
            }
        },
        {
            "name": "Temperatura",
            "units": "°C",
            "range": {
                "minimum": 0.0,
                "maximum": 50.0
            }
        },
        {
            "name": "Humedad",
            "units": "%HR",
            "range": {
                "minimum": 20.0,
                "maximum": 90.0
            }
        }
    ]
    await newInsert.save();
    return newInsert;
}
room1Dao.getSensorHumidity = async () => {
  return await room1.aggregate([
      { "$unwind": "$readings" },
      { "$match": { "readings.name": { "$in": ["Deteccion de humedad", "Detecccion de tempertaura"] } } },
      { "$sort": { "readings.timestamp": -1 } },
      { "$group": {
          "_id": "$_id",
          "humedad": {
              "$first": { "$cond": [{ "$eq": ["$readings.name", "Deteccion de humedad"] }, "$readings.value", null] }
          },
          "temperatura": {
              "$first": { "$cond": [{ "$eq": ["$readings.name", "Deteccion de tempertaura"] }, "$readings.value", null] }
          }
      }}
  ]);
}


export default room1Dao;