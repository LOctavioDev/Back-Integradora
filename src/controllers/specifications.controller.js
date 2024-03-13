import specificationsDao from "../dao/specifications.dao.js";
const specificationsController = {};

specificationsController.insertOne = async (req, res) => {
    specificationsDao.insertOne(req.body)
    .then(kitchen => res.json({
        success : true,
    }))
    .catch(err => res.status(500).json({
        success : false,
        error : err.message}));
}

export default specificationsController;