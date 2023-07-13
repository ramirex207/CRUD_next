import {Schema, models, model} from "mongoose";
const sumSchema = new Schema({
    num1: {
        type:Number,
        required: true,
    },
    num2: {
        type:Number,
        required: true,
    },
    suma: {
        type:Number,
        required: true,
    },
});

export default models.Suma || model("Suma",sumSchema)