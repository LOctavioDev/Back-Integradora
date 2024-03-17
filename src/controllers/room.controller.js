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

export default roomController;