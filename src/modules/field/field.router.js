import {Router} from "express";
import { auth } from '../../middleware/authMiddleware.js'
import * as fieldController from "./controller/field.js";
import * as validators from "./field.validation.js"
import {validation} from "../../middleware/validation.js"
const router =Router();


router.get('/getfields',fieldController.getAllFields);
router.post('/addField',auth,validation(validators.addField),fieldController.addField);
router.post("/getFieldByNumber",auth,fieldController.getFieldByNumber);
router.delete("/deleteField",auth,fieldController.deleteField);

export default router;






