import {model, Schema} from 'mongoose'

const specificationsSchema = new Schema({
    name : String,
    brand : String,
    model : String,
    specifications : [],
},{
    versionKey:false,
    timestamps:true,
})


export default model('specifications', specificationsSchema)