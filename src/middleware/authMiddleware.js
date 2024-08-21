import userModel from "../../DB/model/User.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import { verifyToken } from "../utils/generate&verifyToken.js";

export const auth =asyncHandler( async (req, res, next) => {

        const { token } = req.headers;
        
        if (!token) {
           return next(new Error("Token is required"));
        }
        const decodded = verifyToken({ token, signature: process.env.TOKEN_SIGNATURE });
        console.log(decodded)
        
        if (!decodded?.id ) {
           return next (new Error("IN-Valid Token Payload"));
        }
        const authUser = await userModel.findById(decodded.id);
        if (!authUser) {
           return next(new Error("Account is Not Registered"));
        }
        req.user = authUser;
        return next();
})
