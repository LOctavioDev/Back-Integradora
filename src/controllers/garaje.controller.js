import garajeDao from "../dao/garaje.dao.js";
import { garaje } from "../models/sensor.model.js";
const garajeController = {}

garajeController.addSensor = async (req, res) => {
    garajeDao.addSensor(req.body)
    .then(garaje => res.json({
        status:true,
    }))
    .catch(err => res.status(500).json({
       status: false,
       error: err.msg
    }));
}

garajeController.getInternalLight = async (req, res) => {
    garajeDao.getInternalLight()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

garajeController.getPresence = async (req, res) => {
    garajeDao.getPresence()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

garajeController.getDoor = async (req, res) => {
    garajeDao.getDoor()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

garajeController.getWindow = async (req, res) => {
    garajeDao.getWindow()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

garajeController.deleteData = async (req, res) => {
    garajeDao.deleteData()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

garajeController.getDistance = async (req, res) => {
    garajeDao.getDistance()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

export default garajeController;