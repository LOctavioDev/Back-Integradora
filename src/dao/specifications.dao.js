import specificationsModel from "../models/specifications.model.js";
const specificationsDao = {};

specificationsDao.insertOne = async (specifications) => {
    return await specificationsModel.create(specifications)
}

export default specificationsDao;