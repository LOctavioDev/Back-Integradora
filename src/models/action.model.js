import { model, Schema } from "mongoose";

const sensorSchema = new Schema({
    type : String, 
    identifier : String,
    location : String,
    status : String,
    initialDate: {
        type: Date,
        default: "2024-03-11T16:25:00.000Z", // Valor predeterminado
        required: false // Campo no obligatorio
    },
    owner : String,
    readings : []
},{
    timestamps: false,
    versionKey: false
})  

const actionRoom1 = model('room1', sensorSchema);
const actionRoom2 = model('room2', sensorSchema);
const actionRoom3 = model('room3', sensorSchema);
const actionBathroom1 = model('bathroom1', sensorSchema);
const actionBathroom2 = model('bathroom2', sensorSchema);
const actionLivingRoom = model('livingRoom', sensorSchema);
const actionKitchen = model('kitchen', sensorSchema);
const actionGaragearaje = model('garaje', sensorSchema);

// export default model('sensorModel', sensorSchema)

export { actionRoom1, actionRoom2, actionRoom3, actionBathroom1, actionBathroom2, actionLivingRoom, actionKitchen, actionGaragearaje};