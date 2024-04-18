import bathroomDao from "../dao/bathroom.dao.js";
import roomDao from "../dao/room.dao.js";
import kitchenDao from "../dao/kitchen.dao.js";
import livingRoomDao from "../dao/livingRoom.dao.js";
import garajeDao from "../dao/garaje.dao.js";
import conn from "../database.js";
import { sensorSchema } from "../models/sensor.model.js";

const generalController = {};

generalController.deleteData = async (req, res) => {
  try {
    // Ejecutar ambas funciones al mismo tiempo utilizando Promise.all()
    const result = await Promise.all([
      bathroomDao.deleteData(), //2
      roomDao.deleteData(), // 3
      kitchenDao.deleteData(),
      livingRoomDao.deleteData(),
      garajeDao.deleteData(),
    ]);

    // Enviar respuesta con los datos de ambas operaciones
    res.json({ result });
  } catch (err) {
    // Manejar errores
    res.status(500).json({
      success: false,
      error: err.msg,
    });
  }
};

generalController.getDataChart = async (req, res) => {
  try {
    // Obtiene la lista de nombres de colecciones
    const colecciones = await conn.connection.db.listCollections().toArray();

    // Objeto para almacenar los resultados
    const resultados = {};

    // Iterar sobre cada colección
    for (const { name } of colecciones) {
      // Obtener el modelo asociado a la colección actual
      const Model = conn.model(name, sensorSchema);

      // Contar los documentos en la colección actual
      const totalRegistros = await Model.countDocuments({ type: "Actuador" });

      // Almacenar el total de registros en el objeto de resultados
      resultados[name] = totalRegistros;
    }

    // Cerrar la conexión a la base de datos

    // Enviar los resultados como respuesta en formato JSON
    res.json(resultados);
  } catch (error) {
    console.error("Error al obtener el recuento de documentos:", error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud" });
  }
};

generalController.getSensorsAndActions = async (req, res) => {
  try {
    // Obtiene la lista de nombres de colecciones
    const colecciones = await conn.connection.db.listCollections().toArray();

    // Objeto para almacenar los resultados
    const resultados = {};

    // Iterar sobre cada colección
    for (const { name } of colecciones) {
      // Obtener el modelo asociado a la colección actual
      const Model = conn.model(name, sensorSchema);

      // Contar los documentos en la colección actual
      const totalSensores = await Model.countDocuments({ type: "Sensor" });
      const totalActuadores = await Model.countDocuments({ type: "Actuador" });

      // Almacenar el total de registros en el objeto de resultados
      resultados[name] = {
        sensores: totalSensores,
        actuadores: totalActuadores,
      };
    }

    // Cerrar la conexión a la base de datos

    // Enviar los resultados como respuesta en formato JSON
    res.json(resultados);
  } catch (error) {
    console.error("Error al obtener el recuento de documentos:", error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al procesar la solicitud" });
  }
};

export default generalController;
