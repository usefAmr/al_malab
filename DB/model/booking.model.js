import {Schema , model} from "mongoose"

const bookingSchema = new Schema ({
    userId: {
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

const teamModel = model('team',teamSchema)

export default teamModel

