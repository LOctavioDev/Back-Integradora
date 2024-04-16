import livingRoomDao from "../dao/livingRoom.dao.js";
import { livingRoom } from "../models/sensor.model.js";
const livingRoomController = {}

livingRoomController.addSensor = async (req, res) => {
    livingRoomDao.addSensor(req.body)
        .then(data => res.status(200).json({
            status: true,
        }))
        .catch(err => res.status(500).json({
            status: false,
            error: err.msg
        }));
}

livingRoomController.getTemperature = async (req, res) => {
    livingRoomDao.getTemperature()
    .then(data =>
        res.status(200).json(data))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

livingRoomController.getInternalLight = async (req, res) => {
    livingRoomDao.getInternalLight()
    .then(data =>
            res.status(200).json(data))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}

livingRoomController.getFan = async (req, res) => {
    livingRoomDao.getFan()
        .then(room1 =>
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error: err.msg
        }));
}
livingRoomController.getWindow = async (req, res) => {
    livingRoomDao.getWindow() 
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

livingRoomController.getDoor = async (req, res) => {
    livingRoomDao.getDoor()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}  

livingRoomController.deleteData = async (req, res) => {
    livingRoomDao.deleteData()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

livingRoomController.getAll = async (req, res) => {
    livingRoomDao.getAll()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

livingRoomController.getDataChart = async (req, res) => {
    livingRoomDao.getDataChart()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

livingRoomController.getAverage = async (req, res) => {
    livingRoomDao.getAverageTemperature()
    .then(room1 =>
        res.status(200).json(room1))
    .catch(err => res.status(500).json({
        success: false,
        error: err.msg
    }));
}

export default livingRoomController;