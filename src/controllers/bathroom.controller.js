import bathroomDao from "../dao/bathroom.dao.js";
const bathroomController = {}

bathroomController.addSensorOne = async (req, res) => {
    bathroomDao.addSensorOne(req.body)
        .then(room1 => res.json({
            success : true,
            data: room1 
        }))
        .catch(err => res.status(500).json({
            success: false,
        error : err.msg}));
}

bathroomController.addSensorTwo = async (req, res) => {
    bathroomDao.addSensorTwo(req.body)
        .then(room1 => res.json({
            success : true,
        }))
        .catch(err => res.status(500).json({
            success: false,
        error : err.msg}));
}

bathroomController.getOneTemperature = async (req, res) => {
    bathroomDao.getOneTemperature()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
}

bathroomController.getTwoTemperature = async (req, res) =>{
    bathroomDao.getTwoTemperature()
    .then(room2 => 
        res.json(room2))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getOnePresence = async (req, res) => {
    bathroomDao.getOnePresence()
    .then(room1 => 
        res.json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getTwoPresence = async (req, res) => {
    bathroomDao.getTwoPresence()
    .then(room2 => 
        res.json(room2))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

export default bathroomController;