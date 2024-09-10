import teamModel from "../../../../DB/model/team.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

// GET ALL teams
export const getAllteams = asyncHandler(async (req, res, next) => {
  const team = await teamModel.find();
  res.json({ message: "Done", team })
})

// add team
export const addTeam = asyncHandler(async (req, res, next) => {
  const {Date,fromHour,toHour}= req.body
  const {id}=req.user
  const user_id=id
  const team =  await teamModel.create({Date,fromHour,toHour,user_id})
  res.json({ message: "Done", team })     
})


// DELETE team
export const deleteTeam = asyncHandler(async (req, res, next) => {
    const {_id} = req.body;
    const team = await teamModel.findOneAndDelete({_id:_id});
    res.status(204).json({ message: "Deleted", team }) 
  })

