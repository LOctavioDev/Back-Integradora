import { livingRoom } from "../models/sensor.model.js";
const livingRoomDao = {}

livingRoomDao.addSensor = async (data) => {
    return await livingRoom.create(data);
}

export default livingRoomDao