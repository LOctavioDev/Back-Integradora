import garajeDao from "../dao/garaje.dao.js";
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


export default garajeController;