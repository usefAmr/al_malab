import {Schema , model} from "mongoose"

const fieldCallenderSchema = new Schema ({
    Date: {
        type: Date
    },
    fromHour: {
        type: Number
    },
    toHour: {
        type: Number
    },
    fieldId: {
        type: Schema.Types.ObjectId,
        ref: 'fieldModel',
        required: true
    },
},{
    timestamps : true
})

const fieldCallenderModel = model('fieldCallenderModel',fieldCallenderSchema)

export default fieldCallenderModel

