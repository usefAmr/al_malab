import fieldModel from "../../../../DB/model/field.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";




// GET ALL FIELDS
export const getAllFields = asyncHandler(async (req, res, next) => {
  const fields = await fieldModel.find();
  res.json({ message: "Done", fields })
})

// add field
export const addField = asyncHandler(async (req, res, next) => {
  const {number}= req.body
  const field =  await fieldModel.create({number})
  res.json({ message: "Done", field })
})

// Field PROFILE
export const getFieldByNumber = asyncHandler(async (req, res, next) => {
  const { number } = req.body;
  const field = await fieldModel.findOne({ number: number});
  return field ? res.status(200).json({ message: "Done", field })
    : next(new Error("IN-Valid account or you logged out", { cause: 404 }))
})

// DELETE field
export const deleteField = asyncHandler(async (req, res, next) => {
    const { id } = req.body;
    const field = await fieldModel.findOneAndDelete({ _id: id});
    return field ? res.status(200).json({ message: "Done", field }) : next(new Error("Not Exist Field", { cause: 400 }))
  })

