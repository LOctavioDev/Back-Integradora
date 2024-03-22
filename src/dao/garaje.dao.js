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
                "isOn": "$Luz.value",
    
            }
        }
    ]);
}

export default garajeDao;