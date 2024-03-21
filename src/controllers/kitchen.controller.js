    import kitchenDao from "../dao/kitchen.dao.js";
    const kitchenController = {}

    kitchenController.addSensorHumidity = async (req, res) => {
        kitchenDao.addSensorHumidity(req.body)
            .then(kitchen => res.json({
                success:true,
            }))
            .catch(err => res.status(500).json({
                success:false,
                error: err.message}));
    }

    kitchenController.getGasConcentration = async (req, res) => {
        kitchenDao.getGasConcentration()
        .then(room1 => 
            res.json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
    }

    kitchenController.getTemperature = async (req, res) => 
    {
        kitchenDao.getTemperature()
        .then(room1 => 
            res.status(200).json(room1))
        .catch(err => res.status(500).json({
            success: false,
            error : err.msg}));
    }
    


    export default kitchenController;