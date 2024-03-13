    import kitchenDao from "../dao/kitchen.dao.js";
    const kitchenController = {}

    kitchenController.addSensorHumidity = async (req, res) => {
        kitchenDao.addSensorHumidity(req.body)
            .then(kitchen => res.json({
                message: "Humedad y temperatura de la cocina registrados correctamente",
            }))
            .catch(err => res.status(500).json({
                "message": "Error al registrar humedad y temperatura de la cocina",
                error: err.message}));
    }

    export default kitchenController;