import {Schema , model} from "mongoose"

const userSchema = new Schema ({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true,
        unique : true
    },
    password : {
        type:String,
        required : true
    },
    phoneNumber : {
        type:String,
        required : true
    },
    ConfirmEmail :  {
        type: Boolean,
        default:false
    },

},{
    timestamps : true
})

const userModel = model('User',userSchema)

export default userModel

