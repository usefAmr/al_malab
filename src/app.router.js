
import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import fieldRouter from './modules/field/field.router.js'
import bookingRouter from './modules/booking/booking.router.js'
import teamRouter from './modules/team/team.router.js'

import {globalErrorHandling} from './utils/errorHandling.js'

const initApp = (app, express) => {
    
    app.use(express.json({}))
    app.use(authRouter)
    app.use(userRouter)
    app.use(fieldRouter)
    app.use(bookingRouter)
    app.use(teamRouter)


    app.use(globalErrorHandling);
    connectDB()
}

export default initApp