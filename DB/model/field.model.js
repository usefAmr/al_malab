import {Schema , model} from "mongoose"

const fieldSchema = new Schema ({
    number : {
        type:Number,
        required : true,
        unique: true
    },
    price : {
        type:Number,
        required : true,
        unique: true
    },
},{
    timestamps : true
})

const fieldModel = model('field',fieldSchema)

export default fieldModel

