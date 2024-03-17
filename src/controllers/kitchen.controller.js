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

    export default kitchenController;