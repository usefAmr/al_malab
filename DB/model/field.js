import {Schema , model} from "mongoose"

const fieldSchema = new Schema ({
    number : {
        type:Number,
        required : true
    },
},{
    timestamps : true
})

const fieldModel = model('fieldModel',fieldSchema)

export default fieldModel

