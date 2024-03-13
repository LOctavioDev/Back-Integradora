import livingRoomDao from "../dao/livingRoom.dao.js";
const livingRoomController = {}

livingRoomController.addSensor = async (req, res) => {
    livingRoomDao.addSensor(req.body)
    .then(kitchen => res.json({
        status:true,
    }))
    .catch(err => res.status(500).json({
       status: false,
       error: err.msg
    }));
}

export default livingRoomController;