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

roomController.getInternalLightOne = async (req, res) => {
    roomDao.getInternalLightOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getInternalLightTwo = async (req, res) => {
    roomDao.getInternalLightTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getInternalLightthree = async (req, res) => {
    roomDao.getInternalLightThree()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getFanOne = async (req, res) => {
    roomDao.getFanOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err}));
}

roomController.getFanTwo = async (req, res) => {
    roomDao.getFanTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getFanThree = async (req, res) => {
    roomDao.getFanThree()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getDoorOne = async (req, res) => {
    roomDao.getDoorOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getDoorTwo = async (req, res) => {
    roomDao.getDoorTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getDoorThree = async (req, res) => {
    roomDao.getDoorThree()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getWindowOne = async (req, res) => {
    roomDao.getWindowOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getWindowTwo = async (req, res) => {
    roomDao.getWindowTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.getWindowThree = async (req, res) => {
    roomDao.getWindowThree()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.deleteDataOne = async (req, res) => {
    roomDao.deleteDataOne
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.deleteDataTwo = async (req, res) => {
    roomDao.deleteDataTwo
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

roomController.deleteDataThree = async (req, res) => {
    roomDao.deleteDataThree
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

export default roomController;