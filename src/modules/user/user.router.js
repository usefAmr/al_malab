import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as userController from "./controller/user.js";
import * as validators from "./user.validation.js"
import {validation} from "../../middleware/validation.js"
const router =Router();


router.get('/getuser',userController.getAllUsers);
router.post("/getuserById",auth,userController.profile);
router.post("/block",auth,userController.blockeUser);
router.put("/updateuser",auth,userController.updateUser);
router.delete("/deleteuser",auth,userController.deleteUser);

export default router;





