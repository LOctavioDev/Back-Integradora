import { kitchen } from "../models/sensor.model.js";
const kitchenDao = {}

kitchenDao.addSensorHumidity = async (Kitchen) => {
    const newInsert = await kitchen.create(Kitchen);
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

export default kitchenDao;