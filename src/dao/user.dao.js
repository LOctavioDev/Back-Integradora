import userModel from "../models/user.model.js";
const userDao = {};

userDao.addUser = async (user) => {
    const email = user.email;
    const userExists = await userModel.findOne({ email: email })
    if (userExists) {
        return false
    }
    else{
        return await userModel.create(user);
    }
}

userDao.validateUser = async (user) => {
    const email = user.email;
    const password = user.password;
    const userExists = await userModel.findOne({ email: email, password: password })
    if (userExists) {
        return true
    }
    else{
        return false
    }
}

userDao.changePassword = async (user) => {
    const email = user.email;
    const password = user.password;
    const repeatPassword = user.repeatPassword;
    const userExists = await userModel.findOne({ email: email })
    if (userExists) {
        userExists.password = password;
        return await userExists.save();
    }
    else{
        return false
    }
}

export default userDao;