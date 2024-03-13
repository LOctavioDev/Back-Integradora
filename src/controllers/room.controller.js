import roomDao from "../dao/room.dao.js";
const roomController = {}

roomController.addSensorOne = async (req, res) => {
    roomDao.addSensorOne(req.body)
        .then(room1 => res.json({
            success : true,
        }))
        .catch(err => res.status(500).json({
            success: false,
        error : err.msg}));
}

roomController.addSensorTwo = async (req, res) => {
    roomDao.addSensorTwo(req.body)
        .then(room1 => res.json({
            success : true,
        }))
        .catch(err => res.status(500).json({
            success: false,
        error : err.msg}));
}

roomController.addSensorThree = async (req, res) => {
    roomDao.addSensorThree(req.body)
        .then(room1 => res.json({
            success : true,
        }))
        .catch(err => res.status(500).json({
            success: false,
        error : err.msg}));
}



// room1Controller.getSensorHumidity = async (req, res) => {
//     room1Dao.getSensorHumidity()
//         .then(room1 => res.json(room1))
//         .catch(err => res.status(500).json({
//             "message": "Error al obtener humedad y temperatura de la habitación",
//             error: err.message}));
// }

export default roomController;