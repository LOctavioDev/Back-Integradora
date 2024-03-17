import bathroomDao from "../dao/bathroom.dao.js";
const bathroomController = {}

bathroomController.addSensorOne = async (req, res) => {
    bathroomDao.addSensorOne(req.body)
        .then(room1 => res.json({
            success : true,
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

export default bathroomController;