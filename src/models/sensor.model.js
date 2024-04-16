import { model, Schema } from "mongoose";
import moment from "moment-timezone"

const sensorSchema = new Schema({
    type : String, 
    identifier:String,
    name : String,
    brand: String,
    model: String,
    specifications:{
        type: Array,
        required: false // Campo no obligatorio
    
    },
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
        default: () => moment().subtract(6, 'hours').toDate(), // Fecha actual ajustada a -6 horas
        required: false
    },
    endsAt: {
        type: Date,
        default: () => moment().subtract(6, 'hours').add(5, 'seconds').toDate(), // Fecha actual ajustada a -6 horas + 5 segundos
        required: false
    },
    readings :{
        type: Array,
        required: false // Campo no obligatorio
    
    },
    actions:{
        type: Array,
        required: false // Campo no obligatorio
    
    }
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

export { room1, room2, room3, bathroom1, bathroom2, livingRoom, kitchen, garaje, sensorSchema };