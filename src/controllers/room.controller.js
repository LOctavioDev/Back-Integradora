import roomDao from "../dao/room.dao.js";
const roomController = {}

//room 1 
roomController.addSensorOne = async (req, res) => {
    roomDao.addSensorOne(req.body)
        .then(room1 => res.json({
            success : true,
        }))
        .catch(err => res.status(500).json({
            success: false,
        error : err.msg}));
}

roomController.getOneTemperature = async (req, res) => {
    roomDao.getOneTemperature()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

roomController.getTwoTemperature = async (req, res) => {
    roomDao.getTwoTemperature()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

roomController.getThreeTemperature = async (req, res) => {
    roomDao.getThreeTemperature()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

//room 2 
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

roomController.getExternalLightOne = async (req, res) => {
    roomDao.getExternalLightOne()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

roomController.getExternalLightTwo = async (req, res) => {
    roomDao.getExternalLightTwo()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

roomController.getExternalLightThree = async (req, res) => {
    roomDao.getExternalLightThree()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

export default roomController;