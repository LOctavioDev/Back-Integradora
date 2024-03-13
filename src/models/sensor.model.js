import { model, Schema } from "mongoose";

const sensorSchema = new Schema({
    type : String, 
    name : String,
    brand : String,
    model : String,
    specifications : [],
    location : String,
    status : String,
    initialDate: {
        type: Date,
        default: "2024-03-11T16:25:00.000Z", // Valor predeterminado
        required: false // Campo no obligatorio
    },
    owner : String,
    startsAt: {
        type: Date,
        default: Date.now,
        required: false // Campo no obligatorio
    },
    endsAt: {
        type: Date,
        default: () => new Date(Date.now() + 5000), // Dependiendo del delay que se asignrara
        required: false // Campo no obligatorio
    },
    readings : []
},{
    timestamps: false,
    versionKey: false
})  

const room1 = model('room1', sensorSchema);
const room2 = model('room2', sensorSchema);
const room3 = model('room3', sensorSchema);
const bathroom1 = model('bathroom1', sensorSchema);
const bathroom2 = model('bathroom2', sensorSchema);
const livingRoom = model('livingRoom', sensorSchema);
const kitchen = model('kitchen', sensorSchema);
const garaje = model('garaje', sensorSchema);

// export default model('sensorModel', sensorSchema)

export { room1, room2, room3, bathroom1, bathroom2, livingRoom, kitchen, garaje };