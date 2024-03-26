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
garajeDao.getPresence = async () => {
    return await garaje.aggregate([
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
                "isOn": { $arrayElemAt: ["$readings.status", 0] } // Proyectamos el valor de la acción "Ventilador encendido"
            }
        }
    ]);
}
garajeDao.getDoor = async () => {
    return await garaje.aggregate([
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


garajeDao.getWindow = async () => {
    return await garaje.aggregate([
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

    garajeDao.getDistance = async () => {
        return await garaje.aggregate([
            {
                $match: {
                    "type": "Sensor",
                    "name": "Proximidad",
                    "readings.name": { $regex: /Deteccion de Distancia/i }
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
                    "distance": { $arrayElemAt: ["$readings.reading", 0] } // Corrección aquí, proyectamos el valor de la acción "Puerta cerrada"
                }
            }
          ]);
    }

    garajeDao.getGate = async () => {
        try {
            // Buscar los últimos documentos insertados para ambos servomotores en la base de datos
            const [portonIzquierdo, portonDerecho] = await Promise.all([
                garaje.findOne({ name: 'Servomotor Porton Izquierdo' }).sort({ _id: -1 }),
                garaje.findOne({ name: 'Servomotor Porton Derecho' }).sort({ _id: -1 })
            ]);
    
            // Verificar el estado de cada portón y devolver el resultado en formato JSON
            const gateState = {
                leftGate: portonIzquierdo.actions[0].status ? 'Abierto' : 'Cerrado',
                rightGate: portonDerecho.actions[0].status ? 'Abierto' : 'Cerrado'
            };
    
            return gateState;
        } catch (error) {
            console.error('Error al obtener el estado de los portones:', error);
            throw error;
        }
    }

export default garajeDao;