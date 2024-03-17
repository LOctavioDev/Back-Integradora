import userDao from "../dao/user.dao.js";
const userController = {};


userController.insertOne = async (req, res) => {
    userDao.addUser(req.body)
    .then((result) => {
        if(result === false){
            res.status(400).json({ success: false, message: "El usuario ya existe" });
        } else {
            res.status(201).json({ success: true, message: "Usuario creado" });
        }
    })
    .catch((error) => {
        res.status(500).json({ success: false, message: "Error al crear el usuario", error: error.msg });
    });
}

userController.validateUser = async (req, res) => {
    userDao.validateUser(req.body)
    .then((result) => {
        if(result === false){
            res.status(400).json({ success: false, message: "Usuario o contraseña incorrectos" });
        } else {
            res.status(200).json({ success: true, message: "Usuario correcto" });
        }
    })
    .catch((error) => {
        res.status(500).json({ success: false, message: "Error al validar el usuario", error: error.msg });
    });
}

userController.changePassword = async (req, res) => {
    userDao.changePassword(req.body)
    .then((result) => {
        if(result === false){
            res.status(400).json({ success: false, message: "Usuario no encontrado" });
        } else {
            res.status(200).json({ success: true, message: "Contraseña cambiada" });
        }
    })
    .catch((error) => {
        res.status(500).json({ success: false, message: "Error al cambiar la contraseña", error: error.msg });
    });
}

export default userController;
