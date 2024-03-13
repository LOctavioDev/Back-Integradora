import room1Dao from "../dao/room1.dao.js";
const room1Controller = {}

room1Controller.addSensorHumidity = async (req, res) => {
    room1Dao.addSensorHumidity(req.body)
        .then(room1 => res.json({
            message: "Humedad y temperatura de la habitación registrados correctamente",
        }))
        .catch(err => res.status(500).json({
            "message": "Error al registrar humedad y temperatura de la habitación",
            error: err.message}));
}

room1Controller.getSensorHumidity = async (req, res) => {
    room1Dao.getSensorHumidity()
        .then(room1 => res.json(room1))
        .catch(err => res.status(500).json({
            "message": "Error al obtener humedad y temperatura de la habitación",
            error: err.message}));
}

export default room1Controller;