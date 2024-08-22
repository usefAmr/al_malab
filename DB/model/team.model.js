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
},{
    timestamps : true
})

const teamModel = model('team',teamSchema)

export default teamModel

