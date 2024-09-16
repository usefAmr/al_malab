import bookingModel from "../../../../DB/model/booking.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

// GET ALL bookings
export const getAllbookings = asyncHandler(async (req, res, next) => {
  const bookings = await bookingModel.find();
  res.json({ message: "Done", bookings })
})

// add booking
export const addBooking = asyncHandler(async (req, res, next) => {
  const {fieldId,Date,fromHour,toHour}= req.body
  const {id,ConfirmEmail,blocked}=req.user
  const user_id=id
  const checkBookings = await bookingModel.find({
    Date: Date,
    fieldId:fieldId,
    $and: [
        { fromHour: { $gte: fromHour } },
        { toHour: { $lte: toHour } }
    ]
});
  if(checkBookings.length===0 && ConfirmEmail===true &&blocked===false){
    const booking =  await bookingModel.create({fieldId,Date,fromHour,toHour,user_id})
    res.json({ message: "Done", booking })
  }
  else {
    res.json({ message: "There is a booking in this field"})
  }
  
})


// DELETE booking
export const deleteBooking = asyncHandler(async (req, res, next) => {
    const { id } = req.body;
    const booking = await bookingModel.findOneAndDelete({ _id: id});
    return booking ? res.status(200).json({ message: "Done", booking }) : next(new Error("Not Exist booking", { cause: 400 }))
  })

