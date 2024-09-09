import {Schema , model} from "mongoose"

const bookingSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    fieldId: {
        type: Schema.Types.ObjectId,
        ref: 'fieldModel',
        required: true
    },
    Date: {
        type: Date
    },
    fromHour: {
        type: Number
    },
    toHour: {
        type: Number
    },
},{
    timestamps : true
})

const bookingModel = model('bookings',bookingSchema)

export default bookingModel

