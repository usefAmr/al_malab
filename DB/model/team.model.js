import {Schema , model} from "mongoose"

const teamSchema = new Schema ({
    Date: {
        type: Date
    },
    fromHour: {
        type: Number
    },
    toHour: {
        type: Number
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
},{
    timestamps : true
})

const teamModel = model('team',teamSchema)

export default teamModel

