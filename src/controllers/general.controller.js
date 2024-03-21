import bathroomDao from "../dao/bathroom.dao.js";
import roomDao from "../dao/room.dao.js";
import kitchenDao from "../dao/kitchen.dao.js";
import livingRoomDao from "../dao/livingRoom.dao.js";
import garajeDao from "../dao/garaje.dao.js";

const generalController = {}

generalController.deleteData = async (req, res) => {
    try {
        // Ejecutar ambas funciones al mismo tiempo utilizando Promise.all()
        const result= await Promise.all([
            bathroomDao.deleteData(), //2
            roomDao.deleteData(), // 3
            kitchenDao.deleteData(), 
            livingRoomDao.deleteData(),
            garajeDao.deleteData()
        ]);

        // Enviar respuesta con los datos de ambas operaciones
        res.json({ result });
    } catch (err) {
        // Manejar errores
        res.status(500).json({
            success: false,
            error: err.msg
        });
    }
}

export default generalController;