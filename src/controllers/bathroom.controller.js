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
            error : err}));
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

bathroomController.getExternalLightOne = async (req, res) => {
 bathroomDao.getExternalLightOne()
 .then(room2 => 
    res.json(room2))
.catch(err => res.status(500).json({
    success: false,
    error : err.msg}));

}

bathroomController.getExternalLightTwo = async (req, res) => {
    bathroomDao.getExternalLightTwo()
    .then(room2 => 
        res.json(room2))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getInternalLightOne = async (req, res) => {
    bathroomDao.getInternalLightOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getInternalLightTwo = async (req, res) => {
    bathroomDao.getInternalLightTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getFanOne = async (req, res) => {
    bathroomDao.getFanOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getFanTwo = async (req, res) => {
    bathroomDao.getFanTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getWindowOne = async (req, res) => {
    bathroomDao.getWindowOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getWindowTwo = async (req, res) => {
    bathroomDao.getWindowTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));

}

bathroomController.getDoorOne = async (req, res) => {
    bathroomDao.getDoorOne()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.getDoorTwo = async (req, res) => {
    bathroomDao.getDoorTwo()
    .then(data => 
        res.json(data))
    .catch(err => res.status(500).json({
        success: false,
        error : err.msg}));
}

bathroomController.deleteDataOne = async (req, res) => {
    bathroomDao.deleteDataOne()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}
bathroomController.deleteDataTwo = async (req, res) => {
    bathroomDao.deleteDataTwo()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}


export default bathroomController;