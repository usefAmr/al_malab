import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as bookingController from "./controller/booking.js";
import * as validators from "./booking.validation.js"
import {validation} from "../../middleware/validation.js"
const router =Router();


router.get('/getbookings',bookingController.getAllbookings);
router.post('/addBooking',auth,validation(validators.addBooking),bookingController.addBooking);
router.delete("/deleteBooking",auth,bookingController.deleteBooking);

export default router;







