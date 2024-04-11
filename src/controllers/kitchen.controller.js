import kitchenDao from "../dao/kitchen.dao.js";
const kitchenController = {}

kitchenController.addSensorHumidity = async (req, res) => {
    kitchenDao.addSensorHumidity(req.body)
        .then(kitchen => res.json({
            success: true,
        }))
        .catch(err => res.status(500).json({
            success: false,
            error: err.message
        }));
}

kitchenController.getGasConcentration = async (req, res) => {
    kitchenDao.getGasConcentration()
        .then(room1 =>
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.getTemperature = async (req, res) => {
    kitchenDao.getTemperature()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.getExternalLight = async (req, res) => {
    kitchenDao.getExternalLight()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.getInternalLight = async (req, res) => {
    kitchenDao.getInternalLight()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.getFan = async (req, res) => {
    kitchenDao.getFan()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.getDoor = async (req, res) => {
    kitchenDao.getDoor()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.getWindow = async (req, res) => {
    kitchenDao.getWindow()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

kitchenController.deleteData = async (req, res) => {
    kitchenDao.deleteData
        .then(data =>
            res.status(200).json(data))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

export default kitchenController;