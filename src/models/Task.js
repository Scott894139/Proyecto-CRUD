import { Schema, model } from "mongoose";


const taskSchema = new Schema({
    nombres: {type: String, trim: true},
    apellidos: {type: String, trim: true},
    correo:{ type: String, required: true, unique: true, trim: true },
    telefono: {type: String, trim: true},
    contraseña: { type: String, required: true },
    auto: String

}, 
{
    timestamps: true,
    versionKey: false

}
);

var data = "asdf";
var crypto = require('crypto');
crypto.createHash('md5').update(data).digest("hex");



export default model('Task', taskSchema)