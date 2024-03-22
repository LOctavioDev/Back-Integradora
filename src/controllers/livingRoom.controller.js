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
    then(data => res.status(200).json({
        status: true,
    }))
    .catch(err => res.status(500).json({
        status: false,
        error: err.msg
    }));
}

livingRoomController.getInternalLight = async (req, res) => {
    livingRoomDao.getInternalLight()
    then(data => res.status(200).json({
        status: true,
    }))
    .catch(err => res.status(500).json({
        status: false,
        error: err.msg
    }));
}

export default livingRoomController;